"use client";

import {
  getCustomMathGradePresetByGrade,
  getCustomMathGradePresets,
  getMathLessonById,
  getMathLessonsByGrade,
  getMathPracticePresetById,
  type CustomMathGradePreset,
  type CustomMathGradeTopic,
  type MathPracticePresetId,
} from "@/data/math";
import {
  createDefaultMathPracticeConfig,
  DEFAULT_DIVISION_CONFIG,
  DEFAULT_DIVISION_REMAINDER_CONFIG,
  DEFAULT_MATH_TOPIC_CONFIGS,
  DEFAULT_MULTIPLICATION_CONFIG,
} from "@/lib/math/mathDefaults";
import { generateMathExercises } from "@/lib/math/generateMathExercises";
import { processMathAnswer } from "@/lib/math/processMathAnswer";
import {
  getDueReviewItems,
  getReviewPriority,
} from "@/lib/review/selectors";
import {
  DEFAULT_MATH_LESSON_SELECTION,
  DEFAULT_MATH_PRACTICE_MODE,
  getMathLessonSelection,
  getMathPracticeConfig,
  getMathPracticeMode,
  getReviewStateMap,
  saveMathLessonSelection,
  saveMathPracticeConfig,
  saveMathPracticeMode,
  saveReviewState,
  type MathLessonSelection,
  type MathPracticeSetupMode,
} from "@/lib/storage";
import type {
  AdditionConfig,
  DivisionConfig,
  DivisionRemainderConfig,
  MathCurriculumArea,
  MathExercise,
  MathLesson,
  MathPracticeConfig,
  MathRangeConfig,
  MathTopic,
  MathTopicConfigs,
  MultiplicationConfig,
  ReviewStateMap,
  SchoolGrade,
  SubtractionConfig,
} from "@/types";
import { MathExplanation } from "@/features/math/MathExplanation";
import {
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type KeyboardEvent,
  type MutableRefObject,
  type ReactNode,
  type SetStateAction,
} from "react";

type Phase = "config" | "practice" | "summary";

type SessionStats = {
  correct: number;
  wrong: number;
  fixedMistakes: number;
};

type AdvancedFlags = Record<MathTopic, boolean>;

type MathConfigFormState = {
  enabledTopics: MathTopic[];
  questionCount: number;
  numericDrafts: Record<string, string>;
  topicConfigs: MathTopicConfigs;
  advanced: AdvancedFlags;
};

type NumericDraftProps = {
  numericDrafts: Record<string, string>;
  onNumericDraftChange: (fieldKey: string, value: string) => void;
  onNumericDraftClear: (fieldKey: string) => void;
};

const TOPIC_OPTIONS: { topic: MathTopic; label: string }[] = [
  { topic: "addition", label: "Sčítání" },
  { topic: "subtraction", label: "Odčítání" },
  { topic: "multiplication", label: "Násobení" },
  { topic: "division", label: "Dělení" },
  { topic: "division-remainder", label: "Dělení se zbytkem" },
];

const SELECTABLE_TOPICS: MathTopic[] = TOPIC_OPTIONS.map(({ topic }) => topic);

const NO_TOPICS_ERROR = "Vyber alespoň jedno téma.";
const MIN_QUESTION_COUNT = 1;
const MIN_RANGE_VALUE = 1;
const DEFAULT_QUESTION_COUNT = 10;

function isEditableNumericInput(value: string): boolean {
  return value === "" || /^\d+$/.test(value);
}

function normalizeNumericInput(
  value: string,
  options: { min: number; fallback: number },
): number {
  const trimmed = value.trim();
  if (trimmed === "") {
    return options.fallback;
  }

  const parsed = Number.parseInt(trimmed, 10);
  if (!Number.isFinite(parsed) || parsed < options.min) {
    return options.fallback;
  }

  return parsed;
}

function commitNumericValue(value: number, min: number): number {
  if (!Number.isFinite(value) || value < min) {
    return min;
  }

  return value;
}

function applyRangeMinChange(
  range: MathRangeConfig,
  min: number,
): MathRangeConfig {
  const nextMin = commitNumericValue(min, MIN_RANGE_VALUE);
  return {
    min: nextMin,
    max: Math.max(nextMin, commitNumericValue(range.max, MIN_RANGE_VALUE)),
  };
}

function applyRangeMaxChange(
  range: MathRangeConfig,
  max: number,
): MathRangeConfig {
  const nextMax = commitNumericValue(max, MIN_RANGE_VALUE);
  return {
    min: Math.min(commitNumericValue(range.min, MIN_RANGE_VALUE), nextMax),
    max: nextMax,
  };
}

function commitRange(range: MathRangeConfig): MathRangeConfig {
  const min = commitNumericValue(range.min, MIN_RANGE_VALUE);
  const max = Math.max(
    min,
    commitNumericValue(range.max, MIN_RANGE_VALUE),
  );

  return { min, max };
}

function commitTopicConfigs(topicConfigs: MathTopicConfigs): MathTopicConfigs {
  const commitMaxResult = (value?: number) =>
    value === undefined
      ? undefined
      : commitNumericValue(value, MIN_RANGE_VALUE);

  return {
    addition: topicConfigs.addition
      ? {
          ...topicConfigs.addition,
          addendA: commitRange(topicConfigs.addition.addendA),
          addendB: commitRange(topicConfigs.addition.addendB),
          maxResult: commitMaxResult(topicConfigs.addition.maxResult),
        }
      : undefined,
    subtraction: topicConfigs.subtraction
      ? {
          ...topicConfigs.subtraction,
          minuend: commitRange(topicConfigs.subtraction.minuend),
          subtrahend: commitRange(topicConfigs.subtraction.subtrahend),
        }
      : undefined,
    multiplication: topicConfigs.multiplication
      ? {
          ...topicConfigs.multiplication,
          multiplicand: commitRange(topicConfigs.multiplication.multiplicand),
          multiplier: commitRange(topicConfigs.multiplication.multiplier),
          maxResult: commitMaxResult(topicConfigs.multiplication.maxResult),
        }
      : undefined,
    division: topicConfigs.division
      ? {
          ...topicConfigs.division,
          dividend: commitRange(topicConfigs.division.dividend),
          divisor: commitRange(topicConfigs.division.divisor),
        }
      : undefined,
    divisionRemainder: topicConfigs.divisionRemainder
      ? {
          ...topicConfigs.divisionRemainder,
          dividend: commitRange(topicConfigs.divisionRemainder.dividend),
          divisor: commitRange(topicConfigs.divisionRemainder.divisor),
        }
      : undefined,
  };
}

function resolveDraftNumber(
  drafts: Record<string, string>,
  key: string,
  fallback: number,
  min: number,
): number {
  if (drafts[key] === undefined) {
    return fallback;
  }

  return normalizeNumericInput(drafts[key], { min, fallback });
}

function resolveDraftRange(
  drafts: Record<string, string>,
  minKey: string,
  maxKey: string,
  range: MathRangeConfig,
): MathRangeConfig {
  return commitRange({
    min: resolveDraftNumber(drafts, minKey, range.min, MIN_RANGE_VALUE),
    max: resolveDraftNumber(drafts, maxKey, range.max, MIN_RANGE_VALUE),
  });
}

function applyNumericDrafts(form: MathConfigFormState): MathConfigFormState {
  const drafts = form.numericDrafts;
  if (Object.keys(drafts).length === 0) {
    return form;
  }

  const patchRange = (
    range: MathRangeConfig,
    minKey: string,
    maxKey: string,
  ) => resolveDraftRange(drafts, minKey, maxKey, range);

  const patchSimpleRange = (prefix: string, range: MathRangeConfig) => {
    if (
      drafts[`${prefix}.simple.min`] === undefined &&
      drafts[`${prefix}.simple.max`] === undefined
    ) {
      return range;
    }

    return patchRange(range, `${prefix}.simple.min`, `${prefix}.simple.max`);
  };

  const patchMaxResult = (value: number | undefined, key: string) => {
    if (drafts[key] === undefined) {
      return value;
    }

    return resolveDraftNumber(drafts, key, value ?? 100, MIN_RANGE_VALUE);
  };

  const tc = form.topicConfigs;
  let topicConfigs = tc;

  if (tc.addition) {
    const simpleRange = patchSimpleRange("addition", tc.addition.addendA);
    topicConfigs = {
      ...topicConfigs,
      addition: {
        ...tc.addition,
        addendA:
          drafts["addition.simple.min"] !== undefined ||
          drafts["addition.simple.max"] !== undefined
            ? simpleRange
            : patchRange(
                tc.addition.addendA,
                "addition.addendA.min",
                "addition.addendA.max",
              ),
        addendB:
          drafts["addition.simple.min"] !== undefined ||
          drafts["addition.simple.max"] !== undefined
            ? { ...simpleRange }
            : patchRange(
                tc.addition.addendB,
                "addition.addendB.min",
                "addition.addendB.max",
              ),
        maxResult: patchMaxResult(tc.addition.maxResult, "addition.maxResult"),
      },
    };
  }

  if (tc.subtraction) {
    const simpleRange = patchSimpleRange("subtraction", tc.subtraction.minuend);
    topicConfigs = {
      ...topicConfigs,
      subtraction: {
        ...tc.subtraction,
        minuend:
          drafts["subtraction.simple.min"] !== undefined ||
          drafts["subtraction.simple.max"] !== undefined
            ? simpleRange
            : patchRange(
                tc.subtraction.minuend,
                "subtraction.minuend.min",
                "subtraction.minuend.max",
              ),
        subtrahend:
          drafts["subtraction.simple.min"] !== undefined ||
          drafts["subtraction.simple.max"] !== undefined
            ? { ...simpleRange }
            : patchRange(
                tc.subtraction.subtrahend,
                "subtraction.subtrahend.min",
                "subtraction.subtrahend.max",
              ),
      },
    };
  }

  if (tc.multiplication) {
    const simpleRange = patchSimpleRange(
      "multiplication",
      tc.multiplication.multiplicand,
    );
    topicConfigs = {
      ...topicConfigs,
      multiplication: {
        ...tc.multiplication,
        multiplicand:
          drafts["multiplication.simple.min"] !== undefined ||
          drafts["multiplication.simple.max"] !== undefined
            ? simpleRange
            : patchRange(
                tc.multiplication.multiplicand,
                "multiplication.multiplicand.min",
                "multiplication.multiplicand.max",
              ),
        multiplier:
          drafts["multiplication.simple.min"] !== undefined ||
          drafts["multiplication.simple.max"] !== undefined
            ? { ...simpleRange }
            : patchRange(
                tc.multiplication.multiplier,
                "multiplication.multiplier.min",
                "multiplication.multiplier.max",
              ),
        maxResult: patchMaxResult(
          tc.multiplication.maxResult,
          "multiplication.maxResult",
        ),
      },
    };
  }

  if (tc.division) {
    const simpleRange = patchSimpleRange("division", tc.division.dividend);
    topicConfigs = {
      ...topicConfigs,
      division: {
        ...tc.division,
        dividend:
          drafts["division.simple.min"] !== undefined ||
          drafts["division.simple.max"] !== undefined
            ? simpleRange
            : patchRange(
                tc.division.dividend,
                "division.dividend.min",
                "division.dividend.max",
              ),
        divisor:
          drafts["division.simple.min"] !== undefined ||
          drafts["division.simple.max"] !== undefined
            ? { ...simpleRange }
            : patchRange(
                tc.division.divisor,
                "division.divisor.min",
                "division.divisor.max",
              ),
      },
    };
  }

  if (tc.divisionRemainder) {
    const simpleRange = patchSimpleRange(
      "divisionRemainder",
      tc.divisionRemainder.dividend,
    );
    topicConfigs = {
      ...topicConfigs,
      divisionRemainder: {
        ...tc.divisionRemainder,
        dividend:
          drafts["divisionRemainder.simple.min"] !== undefined ||
          drafts["divisionRemainder.simple.max"] !== undefined
            ? simpleRange
            : patchRange(
                tc.divisionRemainder.dividend,
                "divisionRemainder.dividend.min",
                "divisionRemainder.dividend.max",
              ),
        divisor:
          drafts["divisionRemainder.simple.min"] !== undefined ||
          drafts["divisionRemainder.simple.max"] !== undefined
            ? { ...simpleRange }
            : patchRange(
                tc.divisionRemainder.divisor,
                "divisionRemainder.divisor.min",
                "divisionRemainder.divisor.max",
              ),
      },
    };
  }

  return {
    ...form,
    questionCount: resolveDraftNumber(
      drafts,
      "questionCount",
      form.questionCount,
      MIN_QUESTION_COUNT,
    ),
    topicConfigs,
  };
}

function commitFormState(form: MathConfigFormState): MathConfigFormState {
  const withDrafts = applyNumericDrafts(form);

  return {
    ...withDrafts,
    questionCount: commitNumericValue(
      withDrafts.questionCount,
      MIN_QUESTION_COUNT,
    ),
    topicConfigs: commitTopicConfigs(withDrafts.topicConfigs),
    numericDrafts: {},
  };
}

function publishFormState(
  nextFormState: MathConfigFormState,
  formStateRef: MutableRefObject<MathConfigFormState>,
  setFormState: Dispatch<SetStateAction<MathConfigFormState>>,
) {
  formStateRef.current = nextFormState;
  setFormState(nextFormState);
}

type FormStateChange = (
  nextOrUpdater:
    | MathConfigFormState
    | ((current: MathConfigFormState) => MathConfigFormState),
) => void;

const GRADE_OPTIONS: SchoolGrade[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const AREA_LABELS: Record<MathCurriculumArea, string> = {
  "number-operations": "Početní operace",
  geometry: "Geometrie",
  measurement: "Měření",
  "fractions-decimals": "Zlomky a desetinná čísla",
  algebra: "Algebra",
  "data-statistics": "Data a statistika",
  "word-problems": "Slovní úlohy",
  "entrance-exam": "Přijímačky",
};

type GridTopic = "multiplication" | "division" | "division-remainder";

const GRID_TOPIC_CONFIG_KEY: Record<
  GridTopic,
  "multiplication" | "division" | "divisionRemainder"
> = {
  multiplication: "multiplication",
  division: "division",
  "division-remainder": "divisionRemainder",
};

function createDefaultAdvancedFlags(): AdvancedFlags {
  return {
    addition: false,
    subtraction: false,
    multiplication: false,
    division: false,
    "division-remainder": false,
    mixed: false,
  };
}

function createDefaultFormState(): MathConfigFormState {
  const config = createDefaultMathPracticeConfig();
  return formStateFromConfig(config);
}

function loadSavedLessonSelection(): MathLessonSelection {
  const saved = getMathLessonSelection();

  if (!saved.lessonId) {
    return saved;
  }

  const lesson = getMathLessonById(saved.lessonId);
  if (!lesson || lesson.grade !== saved.grade) {
    return { grade: saved.grade };
  }

  return saved;
}

function formStateFromConfig(config: MathPracticeConfig): MathConfigFormState {
  const topicConfigs = config.topicConfigs ?? DEFAULT_MATH_TOPIC_CONFIGS;
  const advanced = createDefaultAdvancedFlags();

  if (topicConfigs.addition) {
    advanced.addition = rangesDiffer(
      topicConfigs.addition.addendA,
      topicConfigs.addition.addendB,
    );
  }

  if (topicConfigs.subtraction) {
    advanced.subtraction = rangesDiffer(
      topicConfigs.subtraction.minuend,
      topicConfigs.subtraction.subtrahend,
    );
  }

  if (topicConfigs.multiplication) {
    advanced.multiplication = rangesDiffer(
      topicConfigs.multiplication.multiplicand,
      topicConfigs.multiplication.multiplier,
    );
  }

  if (topicConfigs.division) {
    advanced.division = rangesDiffer(
      topicConfigs.division.dividend,
      topicConfigs.division.divisor,
    );
  }

  if (topicConfigs.divisionRemainder) {
    advanced["division-remainder"] = rangesDiffer(
      topicConfigs.divisionRemainder.dividend,
      topicConfigs.divisionRemainder.divisor,
    );
  }

  return {
    enabledTopics: config.enabledTopics.filter((topic) =>
      SELECTABLE_TOPICS.includes(topic),
    ),
    questionCount: config.questionCount ?? DEFAULT_QUESTION_COUNT,
    numericDrafts: {},
    topicConfigs: {
      addition: topicConfigs.addition
        ? { ...topicConfigs.addition }
        : { ...DEFAULT_MATH_TOPIC_CONFIGS.addition! },
      subtraction: topicConfigs.subtraction
        ? { ...topicConfigs.subtraction }
        : { ...DEFAULT_MATH_TOPIC_CONFIGS.subtraction! },
      multiplication: topicConfigs.multiplication
        ? { ...topicConfigs.multiplication }
        : { ...DEFAULT_MATH_TOPIC_CONFIGS.multiplication! },
      division: topicConfigs.division
        ? { ...topicConfigs.division }
        : { ...DEFAULT_MATH_TOPIC_CONFIGS.division! },
      divisionRemainder: topicConfigs.divisionRemainder
        ? { ...topicConfigs.divisionRemainder }
        : { ...DEFAULT_MATH_TOPIC_CONFIGS.divisionRemainder! },
    },
    advanced,
  };
}

function rangesDiffer(a: MathRangeConfig, b: MathRangeConfig): boolean {
  return a.min !== b.min || a.max !== b.max;
}

function getDefaultTopicConfigForTopic(topic: MathTopic): MathTopicConfigs {
  switch (topic) {
    case "addition":
      return { addition: { ...DEFAULT_MATH_TOPIC_CONFIGS.addition! } };
    case "subtraction":
      return { subtraction: { ...DEFAULT_MATH_TOPIC_CONFIGS.subtraction! } };
    case "multiplication":
      return { multiplication: { ...DEFAULT_MULTIPLICATION_CONFIG } };
    case "division":
      return { division: { ...DEFAULT_DIVISION_CONFIG } };
    case "division-remainder":
      return {
        divisionRemainder: { ...DEFAULT_DIVISION_REMAINDER_CONFIG },
      };
    default:
      return {};
  }
}

function filterSelectionToRange(
  selected: number[] | undefined,
  range: MathRangeConfig,
): number[] | undefined {
  if (!selected || selected.length === 0) {
    return undefined;
  }

  const visible = buildRangeValues(range);
  const filtered = selected.filter((value) => visible.includes(value));

  if (filtered.length === 0) {
    return [];
  }

  if (filtered.length === visible.length) {
    return undefined;
  }

  return filtered;
}

function applyGridLastDeselected(
  formState: MathConfigFormState,
  topic: GridTopic,
): { formState: MathConfigFormState; configError: string | null } {
  const nextFormState = disableTopicFromEmptyGrid(formState, topic);

  return {
    formState: nextFormState,
    configError:
      nextFormState.enabledTopics.length === 0 ? NO_TOPICS_ERROR : null,
  };
}

function disableTopicFromEmptyGrid(
  formState: MathConfigFormState,
  topic: GridTopic,
): MathConfigFormState {
  const configKey = GRID_TOPIC_CONFIG_KEY[topic];
  const currentConfig = formState.topicConfigs[configKey];
  const nextEnabledTopics = formState.enabledTopics.filter(
    (enabledTopic) => enabledTopic !== topic,
  );

  if (!currentConfig) {
    return {
      ...formState,
      enabledTopics: nextEnabledTopics,
    };
  }

  const clearedConfig = { ...currentConfig };
  if (topic === "multiplication") {
    (clearedConfig as MultiplicationConfig).selectedMultipliers = undefined;
  } else if (topic === "division") {
    (clearedConfig as DivisionConfig).selectedDivisors = undefined;
  } else {
    (clearedConfig as DivisionRemainderConfig).selectedDivisors = undefined;
  }

  return {
    ...formState,
    enabledTopics: nextEnabledTopics,
    topicConfigs: {
      ...formState.topicConfigs,
      [configKey]: clearedConfig,
    },
  };
}

function buildPracticeConfig(form: MathConfigFormState): MathPracticeConfig {
  const base = createDefaultMathPracticeConfig();
  const topicConfigs = applySimpleModeOverrides(form);

  return {
    ...base,
    enabledTopics: form.enabledTopics,
    questionCount: form.questionCount,
    topicConfigs: {
      addition: topicConfigs.addition
        ? {
            ...topicConfigs.addition,
            enabled: form.enabledTopics.includes("addition"),
          }
        : undefined,
      subtraction: topicConfigs.subtraction
        ? {
            ...topicConfigs.subtraction,
            enabled: form.enabledTopics.includes("subtraction"),
          }
        : undefined,
      multiplication: topicConfigs.multiplication
        ? {
            ...topicConfigs.multiplication,
            enabled: form.enabledTopics.includes("multiplication"),
          }
        : undefined,
      division: topicConfigs.division
        ? {
            ...topicConfigs.division,
            enabled: form.enabledTopics.includes("division"),
          }
        : undefined,
      divisionRemainder: topicConfigs.divisionRemainder
        ? {
            ...topicConfigs.divisionRemainder,
            enabled: form.enabledTopics.includes("division-remainder"),
          }
        : undefined,
    },
  };
}

function applySimpleModeOverrides(
  form: MathConfigFormState,
): MathTopicConfigs {
  const configs = {
    addition: form.topicConfigs.addition
      ? { ...form.topicConfigs.addition }
      : undefined,
    subtraction: form.topicConfigs.subtraction
      ? { ...form.topicConfigs.subtraction }
      : undefined,
    multiplication: form.topicConfigs.multiplication
      ? { ...form.topicConfigs.multiplication }
      : undefined,
    division: form.topicConfigs.division
      ? { ...form.topicConfigs.division }
      : undefined,
    divisionRemainder: form.topicConfigs.divisionRemainder
      ? { ...form.topicConfigs.divisionRemainder }
      : undefined,
  };

  if (configs.addition && !form.advanced.addition) {
    const range = configs.addition.addendA;
    configs.addition = {
      ...configs.addition,
      addendA: { ...range },
      addendB: { ...range },
    };
  }

  if (configs.subtraction && !form.advanced.subtraction) {
    const range = configs.subtraction.minuend;
    configs.subtraction = {
      ...configs.subtraction,
      minuend: { ...range },
      subtrahend: { ...range },
      allowNegativeResults: false,
    };
  }

  if (configs.multiplication && !form.advanced.multiplication) {
    const range = configs.multiplication.multiplicand;
    configs.multiplication = {
      ...configs.multiplication,
      multiplicand: { ...range },
      multiplier: { ...range },
      wholeNumbersOnly: true,
    };
  }

  if (configs.division && !form.advanced.division) {
    const range = configs.division.dividend;
    configs.division = {
      ...configs.division,
      dividend: { ...range },
      divisor: { ...range },
      wholeNumbersOnly: true,
    };
  }

  if (configs.divisionRemainder && !form.advanced["division-remainder"]) {
    const range = configs.divisionRemainder.dividend;
    configs.divisionRemainder = {
      ...configs.divisionRemainder,
      dividend: { ...range },
      divisor: { ...range },
      requireRemainder: true,
    };
  }

  return configs;
}

export function MathPracticeClient() {
  const [phase, setPhase] = useState<Phase>("config");
  const [reviewMap, setReviewMap] = useState<ReviewStateMap>(() => {
    if (typeof window === "undefined") {
      return {};
    }
    return getReviewStateMap();
  });
  const [formState, setFormState] = useState<MathConfigFormState>(() => {
    if (typeof window === "undefined") {
      return createDefaultFormState();
    }
    return formStateFromConfig(getMathPracticeConfig());
  });
  const formStateRef = useRef(formState);

  useEffect(() => {
    formStateRef.current = formState;
  }, [formState]);

  const [sessionCandidates, setSessionCandidates] = useState<MathExercise[]>(
    [],
  );
  const [sessionQueue, setSessionQueue] = useState<MathExercise[]>([]);
  const [queueIndex, setQueueIndex] = useState(0);
  const [answeredExerciseIds, setAnsweredExerciseIds] = useState<string[]>([]);

  const [practiceConfig, setPracticeConfig] = useState<MathPracticeConfig | null>(
    null,
  );
  const [currentExercise, setCurrentExercise] = useState<MathExercise | null>(
    null,
  );
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);
  const [answeredInSession, setAnsweredInSession] = useState(0);
  const [sessionStats, setSessionStats] = useState<SessionStats>({
    correct: 0,
    wrong: 0,
    fixedMistakes: 0,
  });

  const [userInput, setUserInput] = useState("");
  const [quotientInput, setQuotientInput] = useState("");
  const [remainderInput, setRemainderInput] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [feedback, setFeedback] = useState<{
    message: string;
    tone: "success" | "wrong" | "fixed";
    expectedAnswer?: string;
    explanation?: string;
  } | null>(null);
  const [configError, setConfigError] = useState<string | null>(null);
  const [setupMode, setSetupMode] = useState<MathPracticeSetupMode>(() => {
    if (typeof window === "undefined") {
      return DEFAULT_MATH_PRACTICE_MODE;
    }
    return getMathPracticeMode();
  });
  const [selectedGrade, setSelectedGrade] = useState<SchoolGrade>(() => {
    if (typeof window === "undefined") {
      return DEFAULT_MATH_LESSON_SELECTION.grade;
    }
    return loadSavedLessonSelection().grade;
  });
  const [selectedLessonId, setSelectedLessonId] = useState<string | undefined>(
    () => {
      if (typeof window === "undefined") {
        return undefined;
      }
      return loadSavedLessonSelection().lessonId;
    },
  );
  const [sessionLessonLabel, setSessionLessonLabel] = useState<string | null>(
    null,
  );

  const toggleTopic = (topic: MathTopic) => {
    const current = formStateRef.current;
    const nextFormState = current.enabledTopics.includes(topic)
      ? {
          ...current,
          enabledTopics: current.enabledTopics.filter((item) => item !== topic),
        }
      : {
          ...current,
          enabledTopics: [...current.enabledTopics, topic],
          topicConfigs: {
            ...current.topicConfigs,
            ...getDefaultTopicConfigForTopic(topic),
          },
          advanced: {
            ...current.advanced,
            [topic]: false,
          },
        };

    publishFormState(nextFormState, formStateRef, setFormState);
    setConfigError(null);
  };

  const handleGridLastDeselected = (topic: GridTopic) => {
    const { formState: nextFormState, configError } = applyGridLastDeselected(
      formStateRef.current,
      topic,
    );
    publishFormState(nextFormState, formStateRef, setFormState);
    setConfigError(configError);
  };

  const handleGridRangeSync = (
    topic: GridTopic,
    nextFormState: MathConfigFormState,
  ): { formState: MathConfigFormState; configError: string | null } => {
    const configKey = GRID_TOPIC_CONFIG_KEY[topic];
    const config = nextFormState.topicConfigs[configKey];
    if (!config) {
      return { formState: nextFormState, configError: null };
    }

    const range =
      topic === "multiplication"
        ? (config as MultiplicationConfig).multiplier
        : (config as DivisionConfig | DivisionRemainderConfig).divisor;
    const selected =
      topic === "multiplication"
        ? (config as MultiplicationConfig).selectedMultipliers
        : (config as DivisionConfig | DivisionRemainderConfig).selectedDivisors;

    const normalized = filterSelectionToRange(selected, range);
    if (normalized === undefined) {
      return { formState: nextFormState, configError: null };
    }

    if (normalized.length === 0) {
      const disabledState = disableTopicFromEmptyGrid(nextFormState, topic);
      return {
        formState: disabledState,
        configError:
          disabledState.enabledTopics.length === 0 ? NO_TOPICS_ERROR : null,
      };
    }

    const updatedConfig =
      topic === "multiplication"
        ? {
            ...(config as MultiplicationConfig),
            selectedMultipliers: normalized,
          }
        : topic === "division"
          ? {
              ...(config as DivisionConfig),
              selectedDivisors: normalized,
            }
          : {
              ...(config as DivisionRemainderConfig),
              selectedDivisors: normalized,
            };

    return {
      formState: {
        ...nextFormState,
        topicConfigs: {
          ...nextFormState.topicConfigs,
          [configKey]: updatedConfig,
        },
      },
      configError: null,
    };
  };

  const applyFormStateChange: FormStateChange = (nextOrUpdater) => {
    const nextFormState =
      typeof nextOrUpdater === "function"
        ? nextOrUpdater(formStateRef.current)
        : nextOrUpdater;
    let syncedState = nextFormState;
    let nextError: string | null = null;

    for (const topic of [
      "multiplication",
      "division",
      "division-remainder",
    ] as GridTopic[]) {
      if (!syncedState.enabledTopics.includes(topic)) {
        continue;
      }

      const result = handleGridRangeSync(topic, syncedState);
      syncedState = result.formState;
      if (result.configError) {
        nextError = result.configError;
      }
    }

    publishFormState(syncedState, formStateRef, setFormState);
    if (nextError) {
      setConfigError(nextError);
      return;
    }

    if (syncedState.enabledTopics.length > 0) {
      setConfigError((current) =>
        current === NO_TOPICS_ERROR ? null : current,
      );
    }
  };

  const clearAnswerInputs = () => {
    setUserInput("");
    setQuotientInput("");
    setRemainderInput("");
  };

  const beginPracticeSession = (
    config: MathPracticeConfig,
    options: {
      lessonLabel?: string | null;
      persistConfig?: boolean;
    } = {},
  ): boolean => {
    setConfigError(null);

    const candidates = generateMathExercises(config);
    if (candidates.length === 0) {
      setConfigError("Pro tato nastavení nejsou k dispozici žádné příklady.");
      return false;
    }

    if (options.persistConfig !== false) {
      saveMathPracticeConfig(config);
    }

    const queue = fisherYatesShuffle(candidates);
    const selection = selectNextExercise({
      candidates,
      sessionQueue: queue,
      queueIndex: 0,
      reviewMap,
      currentQuestionNumber: 1,
      answeredExerciseIds: new Set(),
    });

    if (!selection) {
      setConfigError("Nepodařilo se vybrat první příklad.");
      return false;
    }

    setPracticeConfig(config);
    setSessionCandidates(candidates);
    setSessionQueue(selection.sessionQueue);
    setQueueIndex(selection.queueIndex);
    setAnsweredExerciseIds([]);
    setCurrentExercise(selection.exercise);
    setCurrentQuestionNumber(1);
    setAnsweredInSession(0);
    setSessionStats({ correct: 0, wrong: 0, fixedMistakes: 0 });
    clearAnswerInputs();
    setHasSubmitted(false);
    setFeedback(null);
    setSessionLessonLabel(options.lessonLabel ?? null);
    setPhase("practice");
    return true;
  };

  const handleGradeChange = (grade: SchoolGrade) => {
    setSelectedGrade(grade);
    setSelectedLessonId(undefined);
    saveMathLessonSelection({ grade });
  };

  const handleModeChange = (mode: MathPracticeSetupMode) => {
    setSetupMode(mode);
    saveMathPracticeMode(mode);
    setConfigError(null);
  };

  const handleNumericDraftChange = (fieldKey: string, value: string) => {
    const current = formStateRef.current;
    publishFormState(
      {
        ...current,
        numericDrafts: { ...current.numericDrafts, [fieldKey]: value },
      },
      formStateRef,
      setFormState,
    );
  };

  const handleNumericDraftClear = (fieldKey: string) => {
    const current = formStateRef.current;
    const nextDrafts = { ...current.numericDrafts };
    delete nextDrafts[fieldKey];
    publishFormState(
      { ...current, numericDrafts: nextDrafts },
      formStateRef,
      setFormState,
    );
  };

  const handleApplyAdditionPreset = (presetId: MathPracticePresetId) => {
    const nextConfig = getAdditionConfigFromPreset(presetId);
    if (!nextConfig) {
      return;
    }

    const current = formStateRef.current;
    const nextDrafts = { ...current.numericDrafts };
    for (const fieldKey of ADDITION_NUMERIC_DRAFT_KEYS) {
      delete nextDrafts[fieldKey];
    }

    applyFormStateChange({
      ...current,
      numericDrafts: nextDrafts,
      topicConfigs: {
        ...current.topicConfigs,
        addition: nextConfig,
      },
    });
  };

  const handleApplySubtractionPreset = (presetId: MathPracticePresetId) => {
    const nextConfig = getSubtractionConfigFromPreset(presetId);
    if (!nextConfig) {
      return;
    }

    const current = formStateRef.current;
    const nextDrafts = { ...current.numericDrafts };
    for (const fieldKey of SUBTRACTION_NUMERIC_DRAFT_KEYS) {
      delete nextDrafts[fieldKey];
    }

    applyFormStateChange({
      ...current,
      numericDrafts: nextDrafts,
      topicConfigs: {
        ...current.topicConfigs,
        subtraction: nextConfig,
      },
    });
  };

  const handleApplyDivisionPreset = (presetId: MathPracticePresetId) => {
    const nextConfig = getDivisionConfigFromPreset(presetId);
    if (!nextConfig) {
      return;
    }

    const current = formStateRef.current;
    const nextDrafts = { ...current.numericDrafts };
    for (const fieldKey of DIVISION_NUMERIC_DRAFT_KEYS) {
      delete nextDrafts[fieldKey];
    }

    applyFormStateChange({
      ...current,
      numericDrafts: nextDrafts,
      topicConfigs: {
        ...current.topicConfigs,
        division: nextConfig,
      },
    });
  };

  const handleApplyMultiplicationPreset = (presetId: MathPracticePresetId) => {
    const nextConfig = getMultiplicationConfigFromPreset(presetId);
    if (!nextConfig) {
      return;
    }

    const current = formStateRef.current;
    const nextDrafts = { ...current.numericDrafts };
    for (const fieldKey of MULTIPLICATION_NUMERIC_DRAFT_KEYS) {
      delete nextDrafts[fieldKey];
    }

    applyFormStateChange({
      ...current,
      numericDrafts: nextDrafts,
      topicConfigs: {
        ...current.topicConfigs,
        multiplication: nextConfig,
      },
    });
  };

  const handleApplyDivisionRemainderPreset = (
    presetId: MathPracticePresetId,
  ) => {
    const nextConfig = getDivisionRemainderConfigFromPreset(presetId);
    if (!nextConfig) {
      return;
    }

    const current = formStateRef.current;
    const nextDrafts = { ...current.numericDrafts };
    for (const fieldKey of DIVISION_REMAINDER_NUMERIC_DRAFT_KEYS) {
      delete nextDrafts[fieldKey];
    }

    applyFormStateChange({
      ...current,
      numericDrafts: nextDrafts,
      topicConfigs: {
        ...current.topicConfigs,
        divisionRemainder: nextConfig,
      },
    });
  };

  const handleApplyGradePreset = (grade: SchoolGrade) => {
    const gradePreset = getCustomMathGradePresetByGrade(grade);
    if (!gradePreset) {
      return;
    }

    const current = formStateRef.current;
    applyFormStateChange(
      applyCustomGradePresetToFormState(current, gradePreset),
    );
    setConfigError(null);
  };

  const handleStartPractice = () => {
    const currentForm = formStateRef.current;

    if (currentForm.enabledTopics.length === 0) {
      setConfigError(NO_TOPICS_ERROR);
      return;
    }

    setConfigError(null);
    const committedForm = commitFormState(currentForm);
    publishFormState(committedForm, formStateRef, setFormState);

    beginPracticeSession(buildPracticeConfig(committedForm), {
      persistConfig: true,
    });
  };

  const handleStartLesson = (lesson: MathLesson) => {
    const config = lesson.preset?.mathConfig;
    if (!config) {
      return;
    }

    setSelectedGrade(lesson.grade);
    setSelectedLessonId(lesson.id);
    saveMathLessonSelection({ grade: lesson.grade, lessonId: lesson.id });

    beginPracticeSession(config, {
      lessonLabel: `${lesson.grade}. třída · ${lesson.title}`,
      persistConfig: false,
    });
  };

  const getAnswerInput = (): string => {
    if (currentExercise?.operation === "divide-with-remainder") {
      return `${quotientInput.trim()} r ${remainderInput.trim()}`;
    }

    return userInput;
  };

  const canSubmitAnswer = (): boolean => {
    if (!currentExercise || hasSubmitted) {
      return false;
    }

    if (currentExercise.operation === "divide-with-remainder") {
      return (
        quotientInput.trim().length > 0 && remainderInput.trim().length > 0
      );
    }

    return userInput.trim().length > 0;
  };

  const handleSubmitAnswer = () => {
    if (!currentExercise || !canSubmitAnswer()) {
      return;
    }

    const input = getAnswerInput();
    const result = processMathAnswer({
      exercise: currentExercise,
      input,
      currentQuestionNumber,
      reviewState: reviewMap[currentExercise.id],
    });

    saveReviewState(result.reviewState);
    setReviewMap((current) => ({
      ...current,
      [result.reviewState.itemId]: result.reviewState,
    }));

    setSessionStats((current) => ({
      correct: current.correct + (result.isCorrect ? 1 : 0),
      wrong: current.wrong + (result.isCorrect ? 0 : 1),
      fixedMistakes:
        current.fixedMistakes +
        (result.isCorrect && result.answerResult.wasPreviouslyWrong ? 1 : 0),
    }));

    setAnsweredExerciseIds((current) => [...current, currentExercise.id]);
    setAnsweredInSession((current) => current + 1);
    setFeedback(
      buildFeedback(
        result.isCorrect,
        result.answerResult.feedbackKey,
        result.expectedAnswer,
        currentExercise.explanation,
      ),
    );
    setHasSubmitted(true);
  };

  const handleNextQuestion = () => {
    if (!practiceConfig) {
      return;
    }

    if (answeredInSession >= (practiceConfig.questionCount ?? 10)) {
      setPhase("summary");
      return;
    }

    const nextQuestionNumber = currentQuestionNumber + 1;
    const answeredSet = new Set(
      [...answeredExerciseIds, currentExercise?.id].filter(Boolean) as string[],
    );
    const selection = selectNextExercise({
      candidates: sessionCandidates,
      sessionQueue,
      queueIndex,
      reviewMap,
      currentQuestionNumber: nextQuestionNumber,
      answeredExerciseIds: answeredSet,
    });

    if (!selection) {
      setConfigError("Nepodařilo se vybrat další příklad.");
      setPhase("summary");
      return;
    }

    setCurrentQuestionNumber(nextQuestionNumber);
    setSessionQueue(selection.sessionQueue);
    setQueueIndex(selection.queueIndex);
    setCurrentExercise(selection.exercise);
    clearAnswerInputs();
    setHasSubmitted(false);
    setFeedback(null);
  };

  const handlePracticeAgain = () => {
    if (!practiceConfig) {
      setPhase("config");
      return;
    }

    setReviewMap(getReviewStateMap());
    const freshReviewMap = getReviewStateMap();
    const queue = fisherYatesShuffle(sessionCandidates);
    const selection = selectNextExercise({
      candidates: sessionCandidates,
      sessionQueue: queue,
      queueIndex: 0,
      reviewMap: freshReviewMap,
      currentQuestionNumber: 1,
      answeredExerciseIds: new Set(),
    });

    if (!selection) {
      setConfigError("Nepodařilo se spustit procvičování.");
      setPhase("config");
      return;
    }

    setSessionQueue(selection.sessionQueue);
    setQueueIndex(selection.queueIndex);
    setAnsweredExerciseIds([]);
    setCurrentExercise(selection.exercise);
    setCurrentQuestionNumber(1);
    setAnsweredInSession(0);
    setSessionStats({ correct: 0, wrong: 0, fixedMistakes: 0 });
    clearAnswerInputs();
    setHasSubmitted(false);
    setFeedback(null);
    setPhase("practice");
  };

  const handleChangeSettings = () => {
    setPhase("config");
    setConfigError(null);
  };

  if (phase === "config") {
    return (
      <ConfigScreen
        setupMode={setupMode}
        selectedGrade={selectedGrade}
        selectedLessonId={selectedLessonId}
        formState={formState}
        configError={configError}
        onModeChange={handleModeChange}
        onGradeChange={handleGradeChange}
        onToggleTopic={toggleTopic}
        onFormStateChange={applyFormStateChange}
        onGridLastDeselected={handleGridLastDeselected}
        onStart={handleStartPractice}
        onStartLesson={handleStartLesson}
        numericDrafts={formState.numericDrafts}
        onNumericDraftChange={handleNumericDraftChange}
        onNumericDraftClear={handleNumericDraftClear}
        onApplyAdditionPreset={handleApplyAdditionPreset}
        onApplySubtractionPreset={handleApplySubtractionPreset}
        onApplyDivisionPreset={handleApplyDivisionPreset}
        onApplyMultiplicationPreset={handleApplyMultiplicationPreset}
        onApplyDivisionRemainderPreset={handleApplyDivisionRemainderPreset}
        onApplyGradePreset={handleApplyGradePreset}
      />
    );
  }

  if (phase === "summary") {
    return (
      <SummaryScreen
        stats={sessionStats}
        onPracticeAgain={handlePracticeAgain}
        onChangeSettings={handleChangeSettings}
      />
    );
  }

  if (!currentExercise || !practiceConfig) {
    return null;
  }

  const totalQuestions = practiceConfig.questionCount ?? 10;
  const isSessionComplete = answeredInSession >= totalQuestions;

  return (
    <PracticeScreen
      exercise={currentExercise}
      lessonLabel={sessionLessonLabel}
      progressLabel={`Příklad ${Math.min(answeredInSession + (hasSubmitted ? 0 : 1), totalQuestions)} z ${totalQuestions}`}
      userInput={userInput}
      quotientInput={quotientInput}
      remainderInput={remainderInput}
      hasSubmitted={hasSubmitted}
      feedback={feedback}
      isSessionComplete={isSessionComplete}
      canSubmit={canSubmitAnswer()}
      onInputChange={setUserInput}
      onQuotientChange={setQuotientInput}
      onRemainderChange={setRemainderInput}
      onSubmit={handleSubmitAnswer}
      onNext={handleNextQuestion}
    />
  );
}

type ConfigScreenProps = NumericDraftProps & {
  setupMode: MathPracticeSetupMode;
  selectedGrade: SchoolGrade;
  selectedLessonId?: string;
  formState: MathConfigFormState;
  configError: string | null;
  onModeChange: (mode: MathPracticeSetupMode) => void;
  onGradeChange: (grade: SchoolGrade) => void;
  onToggleTopic: (topic: MathTopic) => void;
  onFormStateChange: FormStateChange;
  onGridLastDeselected: (topic: GridTopic) => void;
  onStart: () => void;
  onStartLesson: (lesson: MathLesson) => void;
  onApplyAdditionPreset: (presetId: MathPracticePresetId) => void;
  onApplySubtractionPreset: (presetId: MathPracticePresetId) => void;
  onApplyDivisionPreset: (presetId: MathPracticePresetId) => void;
  onApplyMultiplicationPreset: (presetId: MathPracticePresetId) => void;
  onApplyDivisionRemainderPreset: (presetId: MathPracticePresetId) => void;
  onApplyGradePreset: (grade: SchoolGrade) => void;
};

function ConfigScreen({
  setupMode,
  selectedGrade,
  selectedLessonId,
  formState,
  configError,
  onModeChange,
  onGradeChange,
  onToggleTopic,
  onFormStateChange,
  onGridLastDeselected,
  onStart,
  onStartLesson,
  numericDrafts,
  onNumericDraftChange,
  onNumericDraftClear,
  onApplyAdditionPreset,
  onApplySubtractionPreset,
  onApplyDivisionPreset,
  onApplyMultiplicationPreset,
  onApplyDivisionRemainderPreset,
  onApplyGradePreset,
}: ConfigScreenProps) {
  const updateTopicConfig = <K extends keyof MathTopicConfigs>(
    key: K,
    updater: (current: NonNullable<MathTopicConfigs[K]>) => NonNullable<MathTopicConfigs[K]>,
  ) => {
    onFormStateChange((latest) => {
      const current = latest.topicConfigs[key];
      if (!current) {
        return latest;
      }

      return {
        ...latest,
        topicConfigs: {
          ...latest.topicConfigs,
          [key]: updater(current),
        },
      };
    });
  };

  const setAdvanced = (topic: MathTopic, enabled: boolean) => {
    onFormStateChange((latest) => ({
      ...latest,
      advanced: {
        ...latest.advanced,
        [topic]: enabled,
      },
    }));
  };

  const lessons = getMathLessonsByGrade(selectedGrade);

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Matematika
        </h1>
        <p className="mt-3 text-lg text-foreground/70">
          {setupMode === "grade"
            ? "Vyber ročník a lekci, kterou chceš procvičovat."
            : "Vyber, co chceš procvičovat."}
        </p>
      </header>

      <SetupModeSwitch mode={setupMode} onModeChange={onModeChange} />

      {setupMode === "grade" ? (
        <GradeLessonMode
          selectedGrade={selectedGrade}
          selectedLessonId={selectedLessonId}
          lessons={lessons}
          configError={configError}
          onGradeChange={onGradeChange}
          onStartLesson={onStartLesson}
        />
      ) : (
        <CustomModeSettings
          formState={formState}
          configError={configError}
          onToggleTopic={onToggleTopic}
          onFormStateChange={onFormStateChange}
          onGridLastDeselected={onGridLastDeselected}
          onStart={onStart}
          updateTopicConfig={updateTopicConfig}
          setAdvanced={setAdvanced}
          numericDrafts={numericDrafts}
          onNumericDraftChange={onNumericDraftChange}
          onNumericDraftClear={onNumericDraftClear}
          onApplyAdditionPreset={onApplyAdditionPreset}
          onApplySubtractionPreset={onApplySubtractionPreset}
          onApplyDivisionPreset={onApplyDivisionPreset}
          onApplyMultiplicationPreset={onApplyMultiplicationPreset}
          onApplyDivisionRemainderPreset={onApplyDivisionRemainderPreset}
          onApplyGradePreset={onApplyGradePreset}
        />
      )}
    </div>
  );
}

type SetupModeSwitchProps = {
  mode: MathPracticeSetupMode;
  onModeChange: (mode: MathPracticeSetupMode) => void;
};

function SetupModeSwitch({ mode, onModeChange }: SetupModeSwitchProps) {
  const options: { value: MathPracticeSetupMode; label: string }[] = [
    { value: "grade", label: "Podle ročníku" },
    { value: "custom", label: "Vlastní nastavení" },
  ];

  return (
    <fieldset>
      <legend className="sr-only">Způsob nastavení procvičování</legend>
      <div
        role="radiogroup"
        aria-label="Způsob nastavení procvičování"
        className="grid grid-cols-1 gap-2 sm:grid-cols-2"
      >
        {options.map(({ value, label }) => {
          const selected = mode === value;

          return (
            <label
              key={value}
              className={`flex min-h-12 cursor-pointer items-center justify-center rounded-2xl border px-4 py-3 text-base font-semibold transition-colors focus-within:ring-2 focus-within:ring-foreground focus-within:ring-offset-2 ${
                selected
                  ? "border-math bg-math text-white"
                  : "border-foreground/20 hover:bg-foreground/5"
              }`}
            >
              <input
                type="radio"
                name="math-setup-mode"
                value={value}
                checked={selected}
                onChange={() => onModeChange(value)}
                className="sr-only"
              />
              <span>{label}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

type GradeLessonModeProps = {
  selectedGrade: SchoolGrade;
  selectedLessonId?: string;
  lessons: MathLesson[];
  configError: string | null;
  onGradeChange: (grade: SchoolGrade) => void;
  onStartLesson: (lesson: MathLesson) => void;
};

function GradeLessonMode({
  selectedGrade,
  selectedLessonId,
  lessons,
  configError,
  onGradeChange,
  onStartLesson,
}: GradeLessonModeProps) {
  return (
    <div className="space-y-6">
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Vyber ročník a lekci</h2>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-5 lg:grid-cols-9">
          {GRADE_OPTIONS.map((grade) => {
            const selected = selectedGrade === grade;

            return (
              <button
                key={grade}
                type="button"
                aria-pressed={selected}
                onClick={() => onGradeChange(grade)}
                className={`min-h-12 rounded-2xl border px-3 py-2 text-base font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 ${
                  selected
                    ? "border-math bg-math/10 text-math"
                    : "border-foreground/20 hover:bg-foreground/5"
                }`}
              >
                {grade}. třída
              </button>
            );
          })}
        </div>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Lekce</h3>
        <div className="space-y-3">
          {lessons.map((lesson) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              selected={lesson.id === selectedLessonId}
              onStartLesson={onStartLesson}
            />
          ))}
        </div>
      </section>

      {configError && (
        <p className="rounded-xl bg-orange-100 px-4 py-3 text-orange-900">
          {configError}
        </p>
      )}
    </div>
  );
}

type LessonCardProps = {
  lesson: MathLesson;
  selected: boolean;
  onStartLesson: (lesson: MathLesson) => void;
};

function LessonCard({ lesson, selected, onStartLesson }: LessonCardProps) {
  const hasPreset = Boolean(lesson.preset?.mathConfig);

  return (
    <article
      className={`rounded-2xl border p-4 sm:p-5 ${
        selected
          ? "border-math bg-math/5"
          : "border-foreground/15"
      }`}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">{lesson.title}</h4>
          <p className="text-base text-foreground/70">{lesson.description}</p>
          <p className="text-sm font-medium text-foreground/60">
            {AREA_LABELS[lesson.area]}
          </p>
        </div>

        {hasPreset ? (
          <button
            type="button"
            onClick={() => onStartLesson(lesson)}
            className="min-h-11 shrink-0 rounded-2xl bg-math px-5 py-2 text-base font-semibold text-white hover:opacity-90 focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
          >
            Procvičovat
          </button>
        ) : (
          <p className="shrink-0 rounded-2xl border border-foreground/15 px-5 py-2 text-base text-foreground/50">
            Tuto lekci připravíme později.
          </p>
        )}
      </div>
    </article>
  );
}

type CustomModeSettingsProps = NumericDraftProps & {
  formState: MathConfigFormState;
  configError: string | null;
  onToggleTopic: (topic: MathTopic) => void;
  onFormStateChange: FormStateChange;
  onGridLastDeselected: (topic: GridTopic) => void;
  onStart: () => void;
  updateTopicConfig: <K extends keyof MathTopicConfigs>(
    key: K,
    updater: (
      current: NonNullable<MathTopicConfigs[K]>,
    ) => NonNullable<MathTopicConfigs[K]>,
  ) => void;
  setAdvanced: (topic: MathTopic, enabled: boolean) => void;
  onApplyAdditionPreset: (presetId: MathPracticePresetId) => void;
  onApplySubtractionPreset: (presetId: MathPracticePresetId) => void;
  onApplyDivisionPreset: (presetId: MathPracticePresetId) => void;
  onApplyMultiplicationPreset: (presetId: MathPracticePresetId) => void;
  onApplyDivisionRemainderPreset: (presetId: MathPracticePresetId) => void;
  onApplyGradePreset: (grade: SchoolGrade) => void;
};

function CustomModeSettings({
  formState,
  configError,
  onToggleTopic,
  onFormStateChange,
  onGridLastDeselected,
  onStart,
  updateTopicConfig,
  setAdvanced,
  numericDrafts,
  onNumericDraftChange,
  onNumericDraftClear,
  onApplyAdditionPreset,
  onApplySubtractionPreset,
  onApplyDivisionPreset,
  onApplyMultiplicationPreset,
  onApplyDivisionRemainderPreset,
  onApplyGradePreset,
}: CustomModeSettingsProps) {
  const numericDraftProps: NumericDraftProps = {
    numericDrafts,
    onNumericDraftChange,
    onNumericDraftClear,
  };
  return (
    <div className="space-y-6">
      <CustomGradePresets onSelectGrade={onApplyGradePreset} />

      <fieldset className="space-y-3">
        <legend className="text-base font-semibold">Témata</legend>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {TOPIC_OPTIONS.map(({ topic, label }) => (
            <TopicCard
              key={topic}
              topic={topic}
              label={label}
              selected={formState.enabledTopics.includes(topic)}
              onToggle={onToggleTopic}
            />
          ))}
        </div>
      </fieldset>

      <div className="max-w-xs">
        <NumberField
          fieldKey="questionCount"
          label="Počet příkladů"
          value={formState.questionCount}
          min={MIN_QUESTION_COUNT}
          {...numericDraftProps}
          onChange={(questionCount) =>
            onFormStateChange((latest) => ({
              ...latest,
              questionCount,
            }))
          }
        />
      </div>

      {formState.enabledTopics.includes("addition") &&
        formState.topicConfigs.addition && (
          <AdditionSettings
            config={formState.topicConfigs.addition}
            advanced={formState.advanced.addition}
            onAdvancedChange={(value) => setAdvanced("addition", value)}
            onChange={(config) =>
              updateTopicConfig("addition", () => config)
            }
            onApplyPreset={onApplyAdditionPreset}
            {...numericDraftProps}
          />
        )}

      {formState.enabledTopics.includes("subtraction") &&
        formState.topicConfigs.subtraction && (
          <SubtractionSettings
            config={formState.topicConfigs.subtraction}
            advanced={formState.advanced.subtraction}
            onAdvancedChange={(value) => setAdvanced("subtraction", value)}
            onChange={(config) =>
              updateTopicConfig("subtraction", () => config)
            }
            onApplyPreset={onApplySubtractionPreset}
            {...numericDraftProps}
          />
        )}

      {formState.enabledTopics.includes("multiplication") &&
        formState.topicConfigs.multiplication && (
          <MultiplicationSettings
            config={formState.topicConfigs.multiplication}
            advanced={formState.advanced.multiplication}
            onAdvancedChange={(value) => setAdvanced("multiplication", value)}
            onChange={(config) =>
              updateTopicConfig("multiplication", () => config)
            }
            onGridLastDeselected={() => onGridLastDeselected("multiplication")}
            onApplyPreset={onApplyMultiplicationPreset}
            {...numericDraftProps}
          />
        )}

      {formState.enabledTopics.includes("division") &&
        formState.topicConfigs.division && (
          <DivisionSettings
            config={formState.topicConfigs.division}
            advanced={formState.advanced.division}
            onAdvancedChange={(value) => setAdvanced("division", value)}
            onChange={(config) => updateTopicConfig("division", () => config)}
            onGridLastDeselected={() => onGridLastDeselected("division")}
            onApplyPreset={onApplyDivisionPreset}
            {...numericDraftProps}
          />
        )}

      {formState.enabledTopics.includes("division-remainder") &&
        formState.topicConfigs.divisionRemainder && (
          <DivisionRemainderSettings
            config={formState.topicConfigs.divisionRemainder}
            advanced={formState.advanced["division-remainder"]}
            onAdvancedChange={(value) =>
              setAdvanced("division-remainder", value)
            }
            onChange={(config) =>
              updateTopicConfig("divisionRemainder", () => config)
            }
            onGridLastDeselected={() =>
              onGridLastDeselected("division-remainder")
            }
            onApplyPreset={onApplyDivisionRemainderPreset}
            {...numericDraftProps}
          />
        )}

      {configError && (
        <p className="rounded-xl bg-orange-100 px-4 py-3 text-orange-900">
          {configError}
        </p>
      )}

      <button
        type="button"
        onClick={onStart}
        className="min-h-12 w-full rounded-2xl bg-math px-6 py-3 text-lg font-semibold text-white hover:opacity-90 focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
      >
        Spustit procvičování
      </button>
    </div>
  );
}

type TopicCardProps = {
  topic: MathTopic;
  label: string;
  selected: boolean;
  onToggle: (topic: MathTopic) => void;
};

function TopicCard({ topic, label, selected, onToggle }: TopicCardProps) {
  return (
    <label
      className={`flex min-h-14 cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3 text-lg transition-colors focus-within:ring-2 focus-within:ring-foreground focus-within:ring-offset-2 ${
        selected
          ? "border-math bg-math/10 font-semibold text-math"
          : "border-foreground/20 hover:bg-foreground/5"
      }`}
    >
      <input
        type="checkbox"
        checked={selected}
        onChange={() => onToggle(topic)}
        className="h-5 w-5 rounded border-foreground/30"
      />
      <span>{label}</span>
    </label>
  );
}

type TopicSettingsColor =
  | "addition"
  | "subtraction"
  | "multiplication"
  | "division"
  | "division-remainder";

const TOPIC_HEADER_STYLES: Record<TopicSettingsColor, string> = {
  addition: "border-sky-200 bg-sky-100 text-sky-950",
  subtraction: "border-indigo-200 bg-indigo-100 text-indigo-950",
  multiplication: "border-violet-200 bg-violet-100 text-violet-950",
  division: "border-teal-200 bg-teal-100 text-teal-950",
  "division-remainder": "border-orange-200 bg-orange-100 text-orange-950",
};

type SettingsSectionProps = {
  title: string;
  topicColor: TopicSettingsColor;
  advanced: boolean;
  onAdvancedChange: (value: boolean) => void;
  simpleFields: ReactNode;
  advancedFields: ReactNode;
};

function SettingsSection({
  title,
  topicColor,
  advanced,
  onAdvancedChange,
  simpleFields,
  advancedFields,
}: SettingsSectionProps) {
  return (
    <section className="overflow-hidden rounded-2xl border border-foreground/15">
      <div
        className={`border-b px-4 py-3 sm:px-5 ${TOPIC_HEADER_STYLES[topicColor]}`}
      >
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <div className="space-y-4 p-4 sm:p-5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">{simpleFields}</div>
        <label className="flex min-h-11 items-center gap-3 text-base">
          <input
            type="checkbox"
            checked={advanced}
            onChange={(event) => onAdvancedChange(event.target.checked)}
            className="h-5 w-5 rounded border-foreground/30"
          />
          <span>Rozšířené nastavení</span>
        </label>
        {advanced && <div className="space-y-4">{advancedFields}</div>}
      </div>
    </section>
  );
}

type NumberFieldProps = NumericDraftProps & {
  fieldKey: string;
  label: string;
  value: number;
  min?: number;
  onChange: (value: number) => void;
};

function NumberField({
  fieldKey,
  label,
  value,
  min = MIN_RANGE_VALUE,
  numericDrafts,
  onNumericDraftChange,
  onNumericDraftClear,
  onChange,
}: NumberFieldProps) {
  const displayValue = numericDrafts[fieldKey] ?? String(value);

  return (
    <label className="block space-y-2">
      <span className="text-base font-semibold">{label}</span>
      <input
        type="number"
        min={min}
        inputMode="numeric"
        value={displayValue}
        onChange={(event) => {
          const nextValue = event.target.value;
          if (isEditableNumericInput(nextValue)) {
            onNumericDraftChange(fieldKey, nextValue);
          }
        }}
        onBlur={() => {
          const normalized = normalizeNumericInput(displayValue, {
            min,
            fallback: value,
          });
          onChange(normalized);
          onNumericDraftClear(fieldKey);
        }}
        className="min-h-11 w-full rounded-xl border border-foreground/20 px-4 text-lg"
      />
    </label>
  );
}

type RangePairFieldsProps = NumericDraftProps & {
  rangeAKey: string;
  rangeBKey: string;
  labelA: string;
  labelB: string;
  rangeA: MathRangeConfig;
  rangeB: MathRangeConfig;
  onRangeAChange: (range: MathRangeConfig) => void;
  onRangeBChange: (range: MathRangeConfig) => void;
};

function RangePairFields({
  rangeAKey,
  rangeBKey,
  labelA,
  labelB,
  rangeA,
  rangeB,
  numericDrafts,
  onNumericDraftChange,
  onNumericDraftClear,
  onRangeAChange,
  onRangeBChange,
}: RangePairFieldsProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className="space-y-3">
        <p className="text-base font-semibold">{labelA}</p>
        <div className="grid grid-cols-2 gap-3">
          <NumberField
            fieldKey={`${rangeAKey}.min`}
            label="Min"
            value={rangeA.min}
            numericDrafts={numericDrafts}
            onNumericDraftChange={onNumericDraftChange}
            onNumericDraftClear={onNumericDraftClear}
            onChange={(min) => onRangeAChange(applyRangeMinChange(rangeA, min))}
          />
          <NumberField
            fieldKey={`${rangeAKey}.max`}
            label="Max"
            value={rangeA.max}
            numericDrafts={numericDrafts}
            onNumericDraftChange={onNumericDraftChange}
            onNumericDraftClear={onNumericDraftClear}
            onChange={(max) => onRangeAChange(applyRangeMaxChange(rangeA, max))}
          />
        </div>
      </div>
      <div className="space-y-3">
        <p className="text-base font-semibold">{labelB}</p>
        <div className="grid grid-cols-2 gap-3">
          <NumberField
            fieldKey={`${rangeBKey}.min`}
            label="Min"
            value={rangeB.min}
            numericDrafts={numericDrafts}
            onNumericDraftChange={onNumericDraftChange}
            onNumericDraftClear={onNumericDraftClear}
            onChange={(min) => onRangeBChange(applyRangeMinChange(rangeB, min))}
          />
          <NumberField
            fieldKey={`${rangeBKey}.max`}
            label="Max"
            value={rangeB.max}
            numericDrafts={numericDrafts}
            onNumericDraftChange={onNumericDraftChange}
            onNumericDraftClear={onNumericDraftClear}
            onChange={(max) => onRangeBChange(applyRangeMaxChange(rangeB, max))}
          />
        </div>
      </div>
    </div>
  );
}

type NumberGridProps = {
  label: string;
  range: MathRangeConfig;
  selected: number[] | undefined;
  onChange: (selected: number[] | undefined) => void;
  onLastDeselected?: () => void;
};

function getEffectiveNumberSelection(
  selected: number[] | undefined,
  numbers: number[],
): number[] {
  if (!selected || selected.length === 0) {
    return numbers;
  }

  return selected;
}

function isImplicitAllSelection(
  selected: number[] | undefined,
): boolean {
  return !selected || selected.length === 0;
}

function NumberGrid({
  label,
  range,
  selected,
  onChange,
  onLastDeselected,
}: NumberGridProps) {
  const numbers = buildRangeValues(range);
  const effectiveSelected = getEffectiveNumberSelection(selected, numbers);
  const implicitAll = isImplicitAllSelection(selected);

  const toggleNumber = (value: number) => {
    const current = implicitAll ? numbers : selected!;

    if (current.includes(value)) {
      const next = current.filter((item) => item !== value);
      if (next.length === 0) {
        onLastDeselected?.();
        return;
      }
      onChange(next.length === numbers.length ? undefined : next);
      return;
    }

    const next = [...current, value].sort((a, b) => a - b);
    onChange(next.length === numbers.length ? undefined : next);
  };

  return (
    <div className="space-y-3">
      <p className="text-base font-semibold">{label}</p>
      <div className="flex flex-wrap gap-2">
        {numbers.map((value) => {
          const isPressed = effectiveSelected.includes(value);

          return (
            <button
              key={value}
              type="button"
              aria-pressed={isPressed}
              onClick={() => toggleNumber(value)}
              className={`min-h-10 min-w-10 rounded-xl border px-3 text-base font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 ${
                isPressed
                  ? "border-math bg-math text-white"
                  : "border-foreground/20 hover:bg-foreground/5"
              }`}
            >
              {value}
            </button>
          );
        })}
      </div>
      <p className="text-sm text-foreground/60">
        Všechna čísla v rozsahu jsou vybraná. Kliknutím můžeš výběr upravit.
      </p>
    </div>
  );
}

function buildRangeValues(range: MathRangeConfig): number[] {
  const values: number[] = [];
  for (let value = range.min; value <= range.max; value += 1) {
    values.push(value);
  }
  return values;
}

const ADDITION_QUICK_PRESETS: {
  id: MathPracticePresetId;
  label: string;
  helper: string;
}[] = [
  {
    id: "math-preset-addition-20",
    label: "Sčítání do 20",
    helper: "Vhodné pro začátek počítání.",
  },
  {
    id: "math-preset-addition-100",
    label: "Sčítání do 100",
    helper: "Procvičuje sčítání v běžném rozsahu do 100.",
  },
  {
    id: "math-preset-addition-1000",
    label: "Sčítání do 1000",
    helper: "Vhodné pro větší čísla ve 3. třídě a výše.",
  },
];

const ADDITION_NUMERIC_DRAFT_KEYS = [
  "addition.simple.min",
  "addition.simple.max",
  "addition.maxResult",
  "addition.addendA.min",
  "addition.addendA.max",
  "addition.addendB.min",
  "addition.addendB.max",
] as const;

function getAdditionConfigFromPreset(
  presetId: MathPracticePresetId,
): AdditionConfig | undefined {
  const addition = getMathPracticePresetById(presetId)?.mathConfig.topicConfigs
    ?.addition;

  if (!addition) {
    return undefined;
  }

  return { ...addition, enabled: true };
}

type AdditionQuickPresetsProps = {
  onSelectPreset: (presetId: MathPracticePresetId) => void;
};

function AdditionQuickPresets({ onSelectPreset }: AdditionQuickPresetsProps) {
  return (
    <div className="col-span-full space-y-3">
      <h3 className="text-base font-semibold">Rychlá volba</h3>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {ADDITION_QUICK_PRESETS.map(({ id, label, helper }) => (
          <button
            key={id}
            type="button"
            onClick={() => onSelectPreset(id)}
            className="rounded-2xl border border-foreground/15 bg-white/60 p-4 text-left transition-colors hover:bg-foreground/5 focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
          >
            <span className="block text-base font-semibold">{label}</span>
            <span className="mt-2 block text-sm text-foreground/70">
              {helper}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

type AdditionSettingsProps = NumericDraftProps & {
  config: AdditionConfig;
  advanced: boolean;
  onAdvancedChange: (value: boolean) => void;
  onChange: (config: AdditionConfig) => void;
  onApplyPreset: (presetId: MathPracticePresetId) => void;
};

function AdditionSettings({
  config,
  advanced,
  onAdvancedChange,
  numericDrafts,
  onNumericDraftChange,
  onNumericDraftClear,
  onChange,
  onApplyPreset,
}: AdditionSettingsProps) {
  const updateSimpleRange = (range: MathRangeConfig) => {
    onChange({
      ...config,
      addendA: { ...range },
      addendB: { ...range },
    });
  };

  return (
    <SettingsSection
      title="Sčítání"
      topicColor="addition"
      advanced={advanced}
      onAdvancedChange={onAdvancedChange}
      simpleFields={
        <>
          <AdditionQuickPresets onSelectPreset={onApplyPreset} />
          <NumberField
            fieldKey="addition.simple.min"
            label="Min hodnota"
            value={config.addendA.min}
            numericDrafts={numericDrafts}
            onNumericDraftChange={onNumericDraftChange}
            onNumericDraftClear={onNumericDraftClear}
            onChange={(min) =>
              updateSimpleRange(applyRangeMinChange(config.addendA, min))
            }
          />
          <NumberField
            fieldKey="addition.simple.max"
            label="Max hodnota"
            value={config.addendA.max}
            numericDrafts={numericDrafts}
            onNumericDraftChange={onNumericDraftChange}
            onNumericDraftClear={onNumericDraftClear}
            onChange={(max) =>
              updateSimpleRange(applyRangeMaxChange(config.addendA, max))
            }
          />
          <NumberField
            fieldKey="addition.maxResult"
            label="Max výsledek"
            value={config.maxResult ?? 100}
            numericDrafts={numericDrafts}
            onNumericDraftChange={onNumericDraftChange}
            onNumericDraftClear={onNumericDraftClear}
            onChange={(maxResult) =>
              onChange({
                ...config,
                maxResult: commitNumericValue(maxResult, MIN_RANGE_VALUE),
              })
            }
          />
        </>
      }
      advancedFields={
        <>
          <RangePairFields
            rangeAKey="addition.addendA"
            rangeBKey="addition.addendB"
            labelA="Sčítanec A"
            labelB="Sčítanec B"
            rangeA={config.addendA}
            rangeB={config.addendB}
            numericDrafts={numericDrafts}
            onNumericDraftChange={onNumericDraftChange}
            onNumericDraftClear={onNumericDraftClear}
            onRangeAChange={(addendA) => onChange({ ...config, addendA })}
            onRangeBChange={(addendB) => onChange({ ...config, addendB })}
          />
          <NumberField
            fieldKey="addition.maxResult"
            label="Max výsledek"
            value={config.maxResult ?? 100}
            numericDrafts={numericDrafts}
            onNumericDraftChange={onNumericDraftChange}
            onNumericDraftClear={onNumericDraftClear}
            onChange={(maxResult) =>
              onChange({
                ...config,
                maxResult: commitNumericValue(maxResult, MIN_RANGE_VALUE),
              })
            }
          />
        </>
      }
    />
  );
}

const SUBTRACTION_QUICK_PRESETS: {
  id: MathPracticePresetId;
  label: string;
  helper: string;
}[] = [
  {
    id: "math-preset-subtraction-20",
    label: "Odčítání do 20",
    helper: "Vhodné pro začátek odčítání.",
  },
  {
    id: "math-preset-subtraction-100",
    label: "Odčítání do 100",
    helper: "Procvičuje odčítání v běžném rozsahu do 100.",
  },
  {
    id: "math-preset-subtraction-1000",
    label: "Odčítání do 1000",
    helper: "Vhodné pro větší čísla ve 3. třídě a výše.",
  },
];

const SUBTRACTION_NUMERIC_DRAFT_KEYS = [
  "subtraction.simple.min",
  "subtraction.simple.max",
  "subtraction.minuend.min",
  "subtraction.minuend.max",
  "subtraction.subtrahend.min",
  "subtraction.subtrahend.max",
] as const;

function getSubtractionConfigFromPreset(
  presetId: MathPracticePresetId,
): SubtractionConfig | undefined {
  const subtraction = getMathPracticePresetById(presetId)?.mathConfig
    .topicConfigs?.subtraction;

  if (!subtraction) {
    return undefined;
  }

  return { ...subtraction, enabled: true };
}

type SubtractionQuickPresetsProps = {
  onSelectPreset: (presetId: MathPracticePresetId) => void;
};

function SubtractionQuickPresets({
  onSelectPreset,
}: SubtractionQuickPresetsProps) {
  return (
    <div className="col-span-full space-y-3">
      <h3 className="text-base font-semibold">Rychlá volba</h3>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {SUBTRACTION_QUICK_PRESETS.map(({ id, label, helper }) => (
          <button
            key={id}
            type="button"
            onClick={() => onSelectPreset(id)}
            className="rounded-2xl border border-foreground/15 bg-white/60 p-4 text-left transition-colors hover:bg-foreground/5 focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
          >
            <span className="block text-base font-semibold">{label}</span>
            <span className="mt-2 block text-sm text-foreground/70">
              {helper}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

type SubtractionSettingsProps = NumericDraftProps & {
  config: SubtractionConfig;
  advanced: boolean;
  onAdvancedChange: (value: boolean) => void;
  onChange: (config: SubtractionConfig) => void;
  onApplyPreset: (presetId: MathPracticePresetId) => void;
};

function SubtractionSettings({
  config,
  advanced,
  onAdvancedChange,
  numericDrafts,
  onNumericDraftChange,
  onNumericDraftClear,
  onChange,
  onApplyPreset,
}: SubtractionSettingsProps) {
  const updateSimpleRange = (range: MathRangeConfig) => {
    onChange({
      ...config,
      minuend: { ...range },
      subtrahend: { ...range },
      allowNegativeResults: false,
    });
  };

  return (
    <SettingsSection
      title="Odčítání"
      topicColor="subtraction"
      advanced={advanced}
      onAdvancedChange={onAdvancedChange}
      simpleFields={
        <>
          <SubtractionQuickPresets onSelectPreset={onApplyPreset} />
          <NumberField
            fieldKey="subtraction.simple.min"
            label="Min hodnota"
            value={config.minuend.min}
            numericDrafts={numericDrafts}
            onNumericDraftChange={onNumericDraftChange}
            onNumericDraftClear={onNumericDraftClear}
            onChange={(min) =>
              updateSimpleRange(applyRangeMinChange(config.minuend, min))
            }
          />
          <NumberField
            fieldKey="subtraction.simple.max"
            label="Max hodnota"
            value={config.minuend.max}
            numericDrafts={numericDrafts}
            onNumericDraftChange={onNumericDraftChange}
            onNumericDraftClear={onNumericDraftClear}
            onChange={(max) =>
              updateSimpleRange(applyRangeMaxChange(config.minuend, max))
            }
          />
        </>
      }
      advancedFields={
        <>
          <RangePairFields
            rangeAKey="subtraction.minuend"
            rangeBKey="subtraction.subtrahend"
            labelA="Menšenec"
            labelB="Menšitel"
            rangeA={config.minuend}
            rangeB={config.subtrahend}
            numericDrafts={numericDrafts}
            onNumericDraftChange={onNumericDraftChange}
            onNumericDraftClear={onNumericDraftClear}
            onRangeAChange={(minuend) => onChange({ ...config, minuend })}
            onRangeBChange={(subtrahend) => onChange({ ...config, subtrahend })}
          />
          <label className="flex min-h-11 items-center gap-3 text-base">
            <input
              type="checkbox"
              checked={config.allowNegativeResults ?? false}
              onChange={(event) =>
                onChange({
                  ...config,
                  allowNegativeResults: event.target.checked,
                })
              }
              className="h-5 w-5 rounded border-foreground/30"
            />
            <span>Povolit záporný výsledek</span>
          </label>
        </>
      }
    />
  );
}

type MultiplicationSettingsProps = NumericDraftProps & {
  config: MultiplicationConfig;
  advanced: boolean;
  onAdvancedChange: (value: boolean) => void;
  onChange: (config: MultiplicationConfig) => void;
  onGridLastDeselected: () => void;
  onApplyPreset: (presetId: MathPracticePresetId) => void;
};

function MultiplicationSettings({
  config,
  advanced,
  onAdvancedChange,
  numericDrafts,
  onNumericDraftChange,
  onNumericDraftClear,
  onChange,
  onGridLastDeselected,
  onApplyPreset,
}: MultiplicationSettingsProps) {
  const updateSimpleRange = (range: MathRangeConfig) => {
    onChange({
      ...config,
      multiplicand: { ...range },
      multiplier: { ...range },
      wholeNumbersOnly: true,
    });
  };

  return (
    <SettingsSection
      title="Násobení"
      topicColor="multiplication"
      advanced={advanced}
      onAdvancedChange={onAdvancedChange}
      simpleFields={
        <>
          <MultiplicationQuickPresets onSelectPreset={onApplyPreset} />
          <NumberField
            fieldKey="multiplication.simple.min"
            label="Min hodnota"
            value={config.multiplicand.min}
            numericDrafts={numericDrafts}
            onNumericDraftChange={onNumericDraftChange}
            onNumericDraftClear={onNumericDraftClear}
            onChange={(min) =>
              updateSimpleRange(applyRangeMinChange(config.multiplicand, min))
            }
          />
          <NumberField
            fieldKey="multiplication.simple.max"
            label="Max hodnota"
            value={config.multiplicand.max}
            numericDrafts={numericDrafts}
            onNumericDraftChange={onNumericDraftChange}
            onNumericDraftClear={onNumericDraftClear}
            onChange={(max) =>
              updateSimpleRange(applyRangeMaxChange(config.multiplicand, max))
            }
          />
          <NumberField
            fieldKey="multiplication.maxResult"
            label="Max výsledek"
            value={config.maxResult ?? 100}
            numericDrafts={numericDrafts}
            onNumericDraftChange={onNumericDraftChange}
            onNumericDraftClear={onNumericDraftClear}
            onChange={(maxResult) =>
              onChange({
                ...config,
                maxResult: commitNumericValue(maxResult, MIN_RANGE_VALUE),
              })
            }
          />
        </>
      }
      advancedFields={
        <>
          <RangePairFields
            rangeAKey="multiplication.multiplicand"
            rangeBKey="multiplication.multiplier"
            labelA="Násobenec"
            labelB="Násobitel"
            rangeA={config.multiplicand}
            rangeB={config.multiplier}
            numericDrafts={numericDrafts}
            onNumericDraftChange={onNumericDraftChange}
            onNumericDraftClear={onNumericDraftClear}
            onRangeAChange={(multiplicand) =>
              onChange({ ...config, multiplicand })
            }
            onRangeBChange={(multiplier) => onChange({ ...config, multiplier })}
          />
          <NumberField
            fieldKey="multiplication.maxResult"
            label="Max výsledek"
            value={config.maxResult ?? 100}
            numericDrafts={numericDrafts}
            onNumericDraftChange={onNumericDraftChange}
            onNumericDraftClear={onNumericDraftClear}
            onChange={(maxResult) =>
              onChange({
                ...config,
                maxResult: commitNumericValue(maxResult, MIN_RANGE_VALUE),
              })
            }
          />
          <label className="flex min-h-11 items-center gap-3 text-base">
            <input
              type="checkbox"
              checked={config.wholeNumbersOnly ?? true}
              onChange={(event) =>
                onChange({
                  ...config,
                  wholeNumbersOnly: event.target.checked,
                })
              }
              className="h-5 w-5 rounded border-foreground/30"
            />
            <span>Celá čísla only</span>
          </label>
          <NumberGrid
            label="Vybrané násobitele"
            range={config.multiplier}
            selected={config.selectedMultipliers}
            onChange={(selectedMultipliers) =>
              onChange({ ...config, selectedMultipliers })
            }
            onLastDeselected={onGridLastDeselected}
          />
        </>
      }
    />
  );
}

const MULTIPLICATION_QUICK_PRESETS: {
  id: MathPracticePresetId;
  label: string;
  helper: string;
}[] = [
  {
    id: "math-preset-multiplication-1-5",
    label: "Násobilka 1–5",
    helper: "Vhodné pro začátek násobilky.",
  },
  {
    id: "math-preset-multiplication-table-1-10",
    label: "Malá násobilka 1–10",
    helper: "Procvičuje celou malou násobilku.",
  },
  {
    id: "math-preset-multiplication-selected",
    label: "Vybraná čísla násobilky",
    helper: "Vhodné, když chcete trénovat jen některé řady.",
  },
];

const MULTIPLICATION_NUMERIC_DRAFT_KEYS = [
  "multiplication.simple.min",
  "multiplication.simple.max",
  "multiplication.maxResult",
  "multiplication.multiplicand.min",
  "multiplication.multiplicand.max",
  "multiplication.multiplier.min",
  "multiplication.multiplier.max",
] as const;

function getMultiplicationConfigFromPreset(
  presetId: MathPracticePresetId,
): MultiplicationConfig | undefined {
  const multiplication = getMathPracticePresetById(presetId)?.mathConfig
    .topicConfigs?.multiplication;

  if (!multiplication) {
    return undefined;
  }

  return { ...multiplication, enabled: true };
}

type MultiplicationQuickPresetsProps = {
  onSelectPreset: (presetId: MathPracticePresetId) => void;
};

function MultiplicationQuickPresets({
  onSelectPreset,
}: MultiplicationQuickPresetsProps) {
  return (
    <div className="col-span-full space-y-3">
      <h3 className="text-base font-semibold">Rychlá volba</h3>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {MULTIPLICATION_QUICK_PRESETS.map(({ id, label, helper }) => (
          <button
            key={id}
            type="button"
            onClick={() => onSelectPreset(id)}
            className="rounded-2xl border border-foreground/15 bg-white/60 p-4 text-left transition-colors hover:bg-foreground/5 focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
          >
            <span className="block text-base font-semibold">{label}</span>
            <span className="mt-2 block text-sm text-foreground/70">
              {helper}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

const DIVISION_QUICK_PRESETS: {
  id: MathPracticePresetId;
  label: string;
  helper: string;
}[] = [
  {
    id: "math-preset-division-table",
    label: "Dělení v malé násobilce",
    helper: "Vhodné pro 2.–3. třídu. Výsledek je nejvýše 10.",
  },
  {
    id: "math-preset-division-advanced",
    label: "Pokročilejší dělení podle rozsahu",
    helper:
      "Vhodné pro pokročilejší dělení, kde může být výsledek větší než 10.",
  },
];

const DIVISION_NUMERIC_DRAFT_KEYS = [
  "division.simple.min",
  "division.simple.max",
  "division.dividend.min",
  "division.dividend.max",
  "division.divisor.min",
  "division.divisor.max",
] as const;

function getDivisionConfigFromPreset(
  presetId: MathPracticePresetId,
): DivisionConfig | undefined {
  const division = getMathPracticePresetById(presetId)?.mathConfig.topicConfigs
    ?.division;

  if (!division) {
    return undefined;
  }

  return { ...division, enabled: true };
}

type DivisionQuickPresetsProps = {
  onSelectPreset: (presetId: MathPracticePresetId) => void;
};

function DivisionQuickPresets({ onSelectPreset }: DivisionQuickPresetsProps) {
  return (
    <div className="col-span-full space-y-3">
      <h3 className="text-base font-semibold">Rychlá volba</h3>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {DIVISION_QUICK_PRESETS.map(({ id, label, helper }) => (
          <button
            key={id}
            type="button"
            onClick={() => onSelectPreset(id)}
            className="rounded-2xl border border-foreground/15 bg-white/60 p-4 text-left transition-colors hover:bg-foreground/5 focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
          >
            <span className="block text-base font-semibold">{label}</span>
            <span className="mt-2 block text-sm text-foreground/70">
              {helper}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

type DivisionSettingsProps = NumericDraftProps & {
  config: DivisionConfig;
  advanced: boolean;
  onAdvancedChange: (value: boolean) => void;
  onChange: (config: DivisionConfig) => void;
  onGridLastDeselected: () => void;
  onApplyPreset: (presetId: MathPracticePresetId) => void;
};

function DivisionSettings({
  config,
  advanced,
  onAdvancedChange,
  numericDrafts,
  onNumericDraftChange,
  onNumericDraftClear,
  onChange,
  onGridLastDeselected,
  onApplyPreset,
}: DivisionSettingsProps) {
  const updateSimpleRange = (range: MathRangeConfig) => {
    onChange({
      ...config,
      dividend: { ...range },
      divisor: { ...range },
      wholeNumbersOnly: true,
    });
  };

  return (
    <SettingsSection
      title="Dělení"
      topicColor="division"
      advanced={advanced}
      onAdvancedChange={onAdvancedChange}
      simpleFields={
        <>
          <DivisionQuickPresets onSelectPreset={onApplyPreset} />
          <NumberField
            fieldKey="division.simple.min"
            label="Min hodnota"
            value={config.dividend.min}
            numericDrafts={numericDrafts}
            onNumericDraftChange={onNumericDraftChange}
            onNumericDraftClear={onNumericDraftClear}
            onChange={(min) =>
              updateSimpleRange(applyRangeMinChange(config.dividend, min))
            }
          />
          <NumberField
            fieldKey="division.simple.max"
            label="Max hodnota"
            value={config.dividend.max}
            numericDrafts={numericDrafts}
            onNumericDraftChange={onNumericDraftChange}
            onNumericDraftClear={onNumericDraftClear}
            onChange={(max) =>
              updateSimpleRange(applyRangeMaxChange(config.dividend, max))
            }
          />
        </>
      }
      advancedFields={
        <>
          <RangePairFields
            rangeAKey="division.dividend"
            rangeBKey="division.divisor"
            labelA="Dělenec"
            labelB="Dělitel"
            rangeA={config.dividend}
            rangeB={config.divisor}
            numericDrafts={numericDrafts}
            onNumericDraftChange={onNumericDraftChange}
            onNumericDraftClear={onNumericDraftClear}
            onRangeAChange={(dividend) => onChange({ ...config, dividend })}
            onRangeBChange={(divisor) => onChange({ ...config, divisor })}
          />
          <label className="flex min-h-11 items-center gap-3 text-base">
            <input
              type="checkbox"
              checked={config.wholeNumbersOnly ?? true}
              onChange={(event) =>
                onChange({
                  ...config,
                  wholeNumbersOnly: event.target.checked,
                })
              }
              className="h-5 w-5 rounded border-foreground/30"
            />
            <span>Pouze beze zbytku</span>
          </label>
          <NumberGrid
            label="Vybraní dělitelé"
            range={config.divisor}
            selected={config.selectedDivisors}
            onChange={(selectedDivisors) =>
              onChange({ ...config, selectedDivisors })
            }
            onLastDeselected={onGridLastDeselected}
          />
        </>
      }
    />
  );
}

const DIVISION_REMAINDER_QUICK_PRESETS: {
  id: MathPracticePresetId;
  label: string;
  helper: string;
}[] = [
  {
    id: "math-preset-division-remainder-intro",
    label: "Dělení se zbytkem – úvod",
    helper: "Vhodné pro první seznámení se zbytkem v malých číslech.",
  },
  {
    id: "math-preset-division-remainder-table",
    label: "Dělení se zbytkem v malé násobilce",
    helper:
      "Vhodné po zvládnutí násobilky a dělení v malé násobilce.",
  },
];

const DIVISION_REMAINDER_NUMERIC_DRAFT_KEYS = [
  "divisionRemainder.simple.min",
  "divisionRemainder.simple.max",
  "divisionRemainder.dividend.min",
  "divisionRemainder.dividend.max",
  "divisionRemainder.divisor.min",
  "divisionRemainder.divisor.max",
] as const;

function getDivisionRemainderConfigFromPreset(
  presetId: MathPracticePresetId,
): DivisionRemainderConfig | undefined {
  const divisionRemainder = getMathPracticePresetById(presetId)?.mathConfig
    .topicConfigs?.divisionRemainder;

  if (!divisionRemainder) {
    return undefined;
  }

  return { ...divisionRemainder, enabled: true };
}

type GradePresetTopicApplyResult = {
  mathTopic: MathTopic;
  configKey: keyof MathTopicConfigs;
  config: NonNullable<MathTopicConfigs[keyof MathTopicConfigs]>;
  draftKeys: readonly string[];
};

function resolveGradePresetTopic(
  gradeTopic: CustomMathGradeTopic,
  presetId: MathPracticePresetId,
): GradePresetTopicApplyResult | undefined {
  switch (gradeTopic) {
    case "addition": {
      const config = getAdditionConfigFromPreset(presetId);
      if (!config) {
        return undefined;
      }
      return {
        mathTopic: "addition",
        configKey: "addition",
        config,
        draftKeys: ADDITION_NUMERIC_DRAFT_KEYS,
      };
    }
    case "subtraction": {
      const config = getSubtractionConfigFromPreset(presetId);
      if (!config) {
        return undefined;
      }
      return {
        mathTopic: "subtraction",
        configKey: "subtraction",
        config,
        draftKeys: SUBTRACTION_NUMERIC_DRAFT_KEYS,
      };
    }
    case "multiplication": {
      const config = getMultiplicationConfigFromPreset(presetId);
      if (!config) {
        return undefined;
      }
      return {
        mathTopic: "multiplication",
        configKey: "multiplication",
        config,
        draftKeys: MULTIPLICATION_NUMERIC_DRAFT_KEYS,
      };
    }
    case "division": {
      const config = getDivisionConfigFromPreset(presetId);
      if (!config) {
        return undefined;
      }
      return {
        mathTopic: "division",
        configKey: "division",
        config,
        draftKeys: DIVISION_NUMERIC_DRAFT_KEYS,
      };
    }
    case "division-remainder": {
      const config = getDivisionRemainderConfigFromPreset(presetId);
      if (!config) {
        return undefined;
      }
      return {
        mathTopic: "division-remainder",
        configKey: "divisionRemainder",
        config,
        draftKeys: DIVISION_REMAINDER_NUMERIC_DRAFT_KEYS,
      };
    }
    default:
      return undefined;
  }
}

function applyCustomGradePresetToFormState(
  current: MathConfigFormState,
  gradePreset: CustomMathGradePreset,
): MathConfigFormState {
  const nextDrafts = { ...current.numericDrafts };
  let nextTopicConfigs: MathTopicConfigs = { ...current.topicConfigs };
  let nextEnabledTopics = [...current.enabledTopics];

  for (const [gradeTopic, presetId] of Object.entries(
    gradePreset.recommendedPresets,
  ) as [CustomMathGradeTopic, MathPracticePresetId][]) {
    const resolved = resolveGradePresetTopic(gradeTopic, presetId);
    if (!resolved) {
      continue;
    }

    const { mathTopic, configKey, config, draftKeys } = resolved;
    for (const fieldKey of draftKeys) {
      delete nextDrafts[fieldKey];
    }

    if (!nextEnabledTopics.includes(mathTopic)) {
      nextEnabledTopics = [...nextEnabledTopics, mathTopic];
      nextTopicConfigs = {
        ...nextTopicConfigs,
        ...getDefaultTopicConfigForTopic(mathTopic),
      };
    }

    nextTopicConfigs = {
      ...nextTopicConfigs,
      [configKey]: config,
    };
  }

  return {
    ...current,
    numericDrafts: nextDrafts,
    enabledTopics: nextEnabledTopics,
    topicConfigs: nextTopicConfigs,
  };
}

type CustomGradePresetsProps = {
  onSelectGrade: (grade: SchoolGrade) => void;
};

function CustomGradePresets({ onSelectGrade }: CustomGradePresetsProps) {
  const gradePresets = getCustomMathGradePresets();

  return (
    <section className="space-y-3">
      <h2 className="text-base font-semibold">Přizpůsobit pro ročník</h2>
      <p className="text-sm text-foreground/70">
        Nastaví rozumný začátek. Všechno můžeš dál upravit.
      </p>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {gradePresets.map(({ grade, label, description }) => (
          <button
            key={grade}
            type="button"
            onClick={() => onSelectGrade(grade)}
            className="rounded-2xl border border-foreground/15 bg-white/60 p-4 text-left transition-colors hover:bg-foreground/5 focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
          >
            <span className="block text-base font-semibold">{label}</span>
            <span className="mt-2 block text-sm text-foreground/70">
              {description}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

type DivisionRemainderQuickPresetsProps = {
  onSelectPreset: (presetId: MathPracticePresetId) => void;
};

function DivisionRemainderQuickPresets({
  onSelectPreset,
}: DivisionRemainderQuickPresetsProps) {
  return (
    <div className="col-span-full space-y-3">
      <h3 className="text-base font-semibold">Rychlá volba</h3>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {DIVISION_REMAINDER_QUICK_PRESETS.map(({ id, label, helper }) => (
          <button
            key={id}
            type="button"
            onClick={() => onSelectPreset(id)}
            className="rounded-2xl border border-foreground/15 bg-white/60 p-4 text-left transition-colors hover:bg-foreground/5 focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
          >
            <span className="block text-base font-semibold">{label}</span>
            <span className="mt-2 block text-sm text-foreground/70">
              {helper}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

type DivisionRemainderSettingsProps = NumericDraftProps & {
  config: DivisionRemainderConfig;
  advanced: boolean;
  onAdvancedChange: (value: boolean) => void;
  onChange: (config: DivisionRemainderConfig) => void;
  onGridLastDeselected: () => void;
  onApplyPreset: (presetId: MathPracticePresetId) => void;
};

function DivisionRemainderSettings({
  config,
  advanced,
  onAdvancedChange,
  numericDrafts,
  onNumericDraftChange,
  onNumericDraftClear,
  onChange,
  onGridLastDeselected,
  onApplyPreset,
}: DivisionRemainderSettingsProps) {
  const updateSimpleRange = (range: MathRangeConfig) => {
    onChange({
      ...config,
      dividend: { ...range },
      divisor: { ...range },
      requireRemainder: true,
    });
  };

  return (
    <SettingsSection
      title="Dělení se zbytkem"
      topicColor="division-remainder"
      advanced={advanced}
      onAdvancedChange={onAdvancedChange}
      simpleFields={
        <>
          <DivisionRemainderQuickPresets onSelectPreset={onApplyPreset} />
          <NumberField
            fieldKey="divisionRemainder.simple.min"
            label="Min hodnota"
            value={config.dividend.min}
            numericDrafts={numericDrafts}
            onNumericDraftChange={onNumericDraftChange}
            onNumericDraftClear={onNumericDraftClear}
            onChange={(min) =>
              updateSimpleRange(applyRangeMinChange(config.dividend, min))
            }
          />
          <NumberField
            fieldKey="divisionRemainder.simple.max"
            label="Max hodnota"
            value={config.dividend.max}
            numericDrafts={numericDrafts}
            onNumericDraftChange={onNumericDraftChange}
            onNumericDraftClear={onNumericDraftClear}
            onChange={(max) =>
              updateSimpleRange(applyRangeMaxChange(config.dividend, max))
            }
          />
        </>
      }
      advancedFields={
        <>
          <RangePairFields
            rangeAKey="divisionRemainder.dividend"
            rangeBKey="divisionRemainder.divisor"
            labelA="Dělenec"
            labelB="Dělitel"
            rangeA={config.dividend}
            rangeB={config.divisor}
            numericDrafts={numericDrafts}
            onNumericDraftChange={onNumericDraftChange}
            onNumericDraftClear={onNumericDraftClear}
            onRangeAChange={(dividend) => onChange({ ...config, dividend })}
            onRangeBChange={(divisor) => onChange({ ...config, divisor })}
          />
          <NumberGrid
            label="Vybraní dělitelé"
            range={config.divisor}
            selected={config.selectedDivisors}
            onChange={(selectedDivisors) =>
              onChange({ ...config, selectedDivisors })
            }
            onLastDeselected={onGridLastDeselected}
          />
        </>
      }
    />
  );
}

type PracticeScreenProps = {
  exercise: MathExercise;
  lessonLabel: string | null;
  progressLabel: string;
  userInput: string;
  quotientInput: string;
  remainderInput: string;
  hasSubmitted: boolean;
  canSubmit: boolean;
  feedback: {
    message: string;
    tone: "success" | "wrong" | "fixed";
    expectedAnswer?: string;
    explanation?: string;
  } | null;
  isSessionComplete: boolean;
  onInputChange: (value: string) => void;
  onQuotientChange: (value: string) => void;
  onRemainderChange: (value: string) => void;
  onSubmit: () => void;
  onNext: () => void;
};

function PracticeScreen({
  exercise,
  lessonLabel,
  progressLabel,
  userInput,
  quotientInput,
  remainderInput,
  hasSubmitted,
  canSubmit,
  feedback,
  isSessionComplete,
  onInputChange,
  onQuotientChange,
  onRemainderChange,
  onSubmit,
  onNext,
}: PracticeScreenProps) {
  const isRemainderExercise = exercise.operation === "divide-with-remainder";
  const answerInputRef = useRef<HTMLInputElement>(null);
  const quotientInputRef = useRef<HTMLInputElement>(null);
  const remainderInputRef = useRef<HTMLInputElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (hasSubmitted) {
      nextButtonRef.current?.focus();
      return;
    }

    if (isRemainderExercise) {
      quotientInputRef.current?.focus();
      return;
    }

    answerInputRef.current?.focus();
  }, [exercise.id, hasSubmitted, isRemainderExercise]);

  const handleAnswerKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter" || hasSubmitted) {
      return;
    }

    event.preventDefault();

    if (canSubmit) {
      onSubmit();
    }
  };

  const handleQuotientKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter" || hasSubmitted) {
      return;
    }

    event.preventDefault();

    if (canSubmit) {
      onSubmit();
      return;
    }

    if (quotientInput.trim().length > 0 && remainderInput.trim().length === 0) {
      remainderInputRef.current?.focus();
    }
  };

  const handleRemainderKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter" || hasSubmitted) {
      return;
    }

    event.preventDefault();

    if (canSubmit) {
      onSubmit();
    }
  };

  return (
    <div className="space-y-6">
      {lessonLabel && (
        <p className="text-sm font-medium text-foreground/70">{lessonLabel}</p>
      )}
      <p className="text-base font-medium text-foreground/70">{progressLabel}</p>

      <p className="text-3xl font-bold tracking-tight sm:text-4xl">
        {exercise.prompt}
      </p>

      {isRemainderExercise ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="block space-y-2">
            <span className="text-base font-semibold">Výsledek</span>
            <input
              ref={quotientInputRef}
              type="text"
              inputMode="numeric"
              value={quotientInput}
              onChange={(event) => onQuotientChange(event.target.value)}
              onKeyDown={handleQuotientKeyDown}
              disabled={hasSubmitted}
              className="min-h-12 w-full rounded-xl border border-foreground/20 px-4 text-2xl text-center focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
            />
          </label>
          <label className="block space-y-2">
            <span className="text-base font-semibold">Zbytek</span>
            <input
              ref={remainderInputRef}
              type="text"
              inputMode="numeric"
              value={remainderInput}
              onChange={(event) => onRemainderChange(event.target.value)}
              onKeyDown={handleRemainderKeyDown}
              disabled={hasSubmitted}
              className="min-h-12 w-full rounded-xl border border-foreground/20 px-4 text-2xl text-center focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
            />
          </label>
        </div>
      ) : (
        <label className="block space-y-2">
          <span className="text-base font-semibold">Tvoje odpověď</span>
          <input
            ref={answerInputRef}
            type="text"
            inputMode="numeric"
            value={userInput}
            onChange={(event) => onInputChange(event.target.value)}
            onKeyDown={handleAnswerKeyDown}
            disabled={hasSubmitted}
            className="min-h-12 w-full rounded-xl border border-foreground/20 px-4 text-2xl text-center focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
          />
        </label>
      )}

      {!hasSubmitted && (
        <button
          type="button"
          onClick={onSubmit}
          disabled={!canSubmit}
          className="min-h-12 w-full rounded-2xl bg-math px-6 py-3 text-lg font-semibold text-white hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
        >
          Zkontrolovat
        </button>
      )}

      {feedback && (
        <div
          role="status"
          aria-live="polite"
          className={`rounded-2xl px-4 py-4 ${
            feedback.tone === "wrong"
              ? "bg-orange-100 text-orange-950"
              : "bg-green-100 text-green-950"
          }`}
        >
          <p className="text-lg font-semibold">{feedback.message}</p>
          {feedback.expectedAnswer && (
            <p className="mt-2 text-base">
              Správná odpověď: {feedback.expectedAnswer}
            </p>
          )}
          {feedback.tone === "wrong" && (
            <MathExplanation exercise={exercise} />
          )}
        </div>
      )}

      {hasSubmitted && (
        <button
          ref={nextButtonRef}
          type="button"
          onClick={onNext}
          className="min-h-12 w-full rounded-2xl border border-foreground/20 px-6 py-3 text-lg font-semibold hover:bg-foreground/5 focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
        >
          {isSessionComplete ? "Hotovo" : "Další příklad"}
        </button>
      )}
    </div>
  );
}

type SummaryScreenProps = {
  stats: SessionStats;
  onPracticeAgain: () => void;
  onChangeSettings: () => void;
};

function SummaryScreen({
  stats,
  onPracticeAgain,
  onChangeSettings,
}: SummaryScreenProps) {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Hotovo</h1>

      <dl className="space-y-3 text-lg">
        <div className="flex justify-between gap-4">
          <dt>Správně</dt>
          <dd className="font-semibold text-green-700">{stats.correct}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt>Ještě procvičit</dt>
          <dd className="font-semibold text-orange-700">{stats.wrong}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt>Opravené chyby</dt>
          <dd className="font-semibold">{stats.fixedMistakes}</dd>
        </div>
      </dl>

      <button
        type="button"
        onClick={onPracticeAgain}
        className="min-h-12 w-full rounded-2xl bg-math px-6 py-3 text-lg font-semibold text-white hover:opacity-90 focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
      >
        Procvičovat znovu
      </button>

      <button
        type="button"
        onClick={onChangeSettings}
        className="min-h-12 w-full rounded-2xl border border-foreground/20 px-6 py-3 text-lg font-semibold hover:bg-foreground/5 focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
      >
        Změnit nastavení
      </button>
    </div>
  );
}

function fisherYatesShuffle<T>(items: T[]): T[] {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }

  return shuffled;
}

type ExerciseSelection = {
  exercise: MathExercise;
  sessionQueue: MathExercise[];
  queueIndex: number;
};

function selectNextExercise(params: {
  candidates: MathExercise[];
  sessionQueue: MathExercise[];
  queueIndex: number;
  reviewMap: ReviewStateMap;
  currentQuestionNumber: number;
  answeredExerciseIds: Set<string>;
}): ExerciseSelection | null {
  const {
    candidates,
    reviewMap,
    currentQuestionNumber,
    answeredExerciseIds,
  } = params;

  if (candidates.length === 0) {
    return null;
  }

  const dueItems = sortDueReviewItems(
    getDueReviewItems(candidates, reviewMap, currentQuestionNumber),
    reviewMap,
    currentQuestionNumber,
  );

  if (dueItems.length > 0) {
    return {
      exercise: dueItems[0],
      sessionQueue: params.sessionQueue,
      queueIndex: params.queueIndex,
    };
  }

  const queueResult = pickFromQueue(
    params.sessionQueue,
    params.queueIndex,
    answeredExerciseIds,
  );

  if (queueResult) {
    return queueResult;
  }

  const reshuffledQueue = fisherYatesShuffle(candidates);
  return pickFromQueue(reshuffledQueue, 0, new Set(), reshuffledQueue);
}

function sortDueReviewItems(
  items: MathExercise[],
  reviewMap: ReviewStateMap,
  currentQuestionNumber: number,
): MathExercise[] {
  return [...items].sort((a, b) => {
    const priorityDiff =
      getReviewPriority(reviewMap[a.id], currentQuestionNumber) -
      getReviewPriority(reviewMap[b.id], currentQuestionNumber);

    if (priorityDiff !== 0) {
      return priorityDiff;
    }

    return a.id.localeCompare(b.id);
  });
}

function pickFromQueue(
  sessionQueue: MathExercise[],
  startIndex: number,
  answeredExerciseIds: Set<string>,
  nextSessionQueue?: MathExercise[],
): ExerciseSelection | null {
  let searchIndex = startIndex;

  while (searchIndex < sessionQueue.length) {
    const exercise = sessionQueue[searchIndex];
    searchIndex += 1;

    if (!answeredExerciseIds.has(exercise.id)) {
      return {
        exercise,
        sessionQueue: nextSessionQueue ?? sessionQueue,
        queueIndex: searchIndex,
      };
    }
  }

  return null;
}

function buildFeedback(
  isCorrect: boolean,
  feedbackKey: string,
  expectedAnswer: string,
  explanation?: string,
) {
  if (isCorrect) {
    if (feedbackKey === "feedback.fixedMistake") {
      return {
        message: "Paráda! Opravená chyba.",
        tone: "fixed" as const,
      };
    }

    if (feedbackKey === "feedback.correctReview") {
      return {
        message: "Správně, upevňujeme to.",
        tone: "success" as const,
      };
    }

    return {
      message: "Výborně!",
      tone: "success" as const,
    };
  }

  if (feedbackKey === "feedback.repeatedMistake") {
    return {
      message: "Tohle si ještě procvičíme.",
      tone: "wrong" as const,
      expectedAnswer,
      explanation,
    };
  }

  return {
    message: "Ještě ne. Ukážeme si postup.",
    tone: "wrong" as const,
    expectedAnswer,
    explanation,
  };
}
