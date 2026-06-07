import {
  DEFAULT_DIVISION_CONFIG,
  DEFAULT_DIVISION_REMAINDER_CONFIG,
  DEFAULT_MATH_TOPIC_CONFIGS,
  DEFAULT_MULTIPLICATION_CONFIG,
} from "@/lib/math/mathDefaults";
import type {
  AdditionConfig,
  DivisionConfig,
  DivisionRemainderConfig,
  MathPracticeConfig,
  MathTopic,
  MultiplicationConfig,
  SchoolGrade,
  SubtractionConfig,
} from "@/types";

type Range = { min: number; max: number };

export type MathPracticePresetId =
  | "math-preset-addition-20"
  | "math-preset-addition-100"
  | "math-preset-addition-1000"
  | "math-preset-subtraction-20"
  | "math-preset-subtraction-100"
  | "math-preset-subtraction-1000"
  | "math-preset-multiplication-1-5"
  | "math-preset-multiplication-table-1-10"
  | "math-preset-multiplication-selected"
  | "math-preset-division-table"
  | "math-preset-division-advanced"
  | "math-preset-division-remainder-intro"
  | "math-preset-division-remainder-table";

export interface MathPracticePreset {
  id: MathPracticePresetId;
  label: string;
  description: string;
  suggestedGradeMin: SchoolGrade;
  suggestedGradeMax: SchoolGrade;
  topic: MathTopic;
  mathConfig: MathPracticeConfig;
}

const DISABLED_TOPIC_CONFIGS = {
  addition: { ...DEFAULT_MATH_TOPIC_CONFIGS.addition!, enabled: false },
  subtraction: { ...DEFAULT_MATH_TOPIC_CONFIGS.subtraction!, enabled: false },
  multiplication: { ...DEFAULT_MULTIPLICATION_CONFIG, enabled: false },
  division: { ...DEFAULT_DIVISION_CONFIG, enabled: false },
  divisionRemainder: {
    ...DEFAULT_DIVISION_REMAINDER_CONFIG,
    enabled: false,
  },
};

const DEFAULT_QUESTION_COUNT = 10;

function buildRangeValues(range: Range): number[] {
  const values: number[] = [];
  for (let value = range.min; value <= range.max; value += 1) {
    values.push(value);
  }
  return values;
}

function createPracticeConfig(
  topic: MathTopic,
  topicConfigs: MathPracticeConfig["topicConfigs"],
): MathPracticeConfig {
  return {
    enabledTopics: [topic],
    questionCount: DEFAULT_QUESTION_COUNT,
    topicConfigs,
  };
}

function additionConfig(max: number): MathPracticeConfig {
  const range = { min: 1, max };
  const addition: AdditionConfig = {
    enabled: true,
    addendA: { ...range },
    addendB: { ...range },
    maxResult: max,
  };

  return createPracticeConfig("addition", {
    ...DISABLED_TOPIC_CONFIGS,
    addition,
  });
}

function subtractionConfig(max: number): MathPracticeConfig {
  const range = { min: 1, max };
  const subtraction: SubtractionConfig = {
    enabled: true,
    minuend: { ...range },
    subtrahend: { ...range },
    allowNegativeResults: false,
  };

  return createPracticeConfig("subtraction", {
    ...DISABLED_TOPIC_CONFIGS,
    subtraction,
  });
}

function multiplicationConfig(
  multipliers: number[],
  multiplicandMax: number,
  maxResult: number,
): MathPracticeConfig {
  const multiplierMin = Math.min(...multipliers);
  const multiplierMax = Math.max(...multipliers);
  const multiplication: MultiplicationConfig = {
    enabled: true,
    multiplicand: { min: 1, max: multiplicandMax },
    multiplier: { min: multiplierMin, max: multiplierMax },
    selectedMultipliers: multipliers,
    maxResult,
    wholeNumbersOnly: true,
  };

  return createPracticeConfig("multiplication", {
    ...DISABLED_TOPIC_CONFIGS,
    multiplication,
  });
}

function tableDivisionConfig(
  divisors: number[],
  dividendMax: number,
): MathPracticeConfig {
  const minDivisor = Math.min(...divisors);
  const maxDivisor = Math.max(...divisors);
  const division: DivisionConfig = {
    enabled: true,
    dividend: { min: 1, max: dividendMax },
    divisor: { min: minDivisor, max: maxDivisor },
    quotient: { min: 1, max: 10 },
    selectedDivisors: divisors,
    wholeNumbersOnly: true,
  };

  return createPracticeConfig("division", {
    ...DISABLED_TOPIC_CONFIGS,
    division,
  });
}

function advancedDivisionConfig(): MathPracticeConfig {
  const division: DivisionConfig = {
    enabled: true,
    dividend: { min: 10, max: 999 },
    divisor: { min: 2, max: 9 },
    wholeNumbersOnly: true,
  };

  return createPracticeConfig("division", {
    ...DISABLED_TOPIC_CONFIGS,
    division,
  });
}

function divisionRemainderConfig(
  dividendMax: number,
  divisorRange: Range,
  quotientMax: number,
): MathPracticeConfig {
  const divisors = buildRangeValues(divisorRange);
  const divisorMin = Math.min(...divisors);
  const divisorMax = Math.max(...divisors);
  const divisionRemainder: DivisionRemainderConfig = {
    enabled: true,
    dividend: { min: 1, max: dividendMax },
    divisor: { min: divisorMin, max: divisorMax },
    quotient: { min: 1, max: quotientMax },
    selectedDivisors: divisors,
    requireRemainder: true,
  };

  return createPracticeConfig("division-remainder", {
    ...DISABLED_TOPIC_CONFIGS,
    divisionRemainder,
  });
}

export const mathPracticePresets: MathPracticePreset[] = [
  {
    id: "math-preset-addition-20",
    label: "Sčítání do 20",
    description: "Sčítáme malá čísla do 20.",
    suggestedGradeMin: 1,
    suggestedGradeMax: 2,
    topic: "addition",
    mathConfig: additionConfig(20),
  },
  {
    id: "math-preset-addition-100",
    label: "Sčítání do 100",
    description: "Sčítáme čísla do 100.",
    suggestedGradeMin: 2,
    suggestedGradeMax: 3,
    topic: "addition",
    mathConfig: additionConfig(100),
  },
  {
    id: "math-preset-addition-1000",
    label: "Sčítání do 1000",
    description: "Sčítáme větší čísla do 1000.",
    suggestedGradeMin: 4,
    suggestedGradeMax: 5,
    topic: "addition",
    mathConfig: additionConfig(1000),
  },
  {
    id: "math-preset-subtraction-20",
    label: "Odčítání do 20",
    description: "Odčítáme malá čísla do 20.",
    suggestedGradeMin: 1,
    suggestedGradeMax: 2,
    topic: "subtraction",
    mathConfig: subtractionConfig(20),
  },
  {
    id: "math-preset-subtraction-100",
    label: "Odčítání do 100",
    description: "Odčítáme čísla do 100.",
    suggestedGradeMin: 2,
    suggestedGradeMax: 3,
    topic: "subtraction",
    mathConfig: subtractionConfig(100),
  },
  {
    id: "math-preset-subtraction-1000",
    label: "Odčítání do 1000",
    description: "Odčítáme větší čísla do 1000.",
    suggestedGradeMin: 4,
    suggestedGradeMax: 5,
    topic: "subtraction",
    mathConfig: subtractionConfig(1000),
  },
  {
    id: "math-preset-multiplication-1-5",
    label: "Násobilka 1–5",
    description: "Násobíme čísly 1 až 5.",
    suggestedGradeMin: 2,
    suggestedGradeMax: 3,
    topic: "multiplication",
    mathConfig: multiplicationConfig(
      buildRangeValues({ min: 1, max: 5 }),
      10,
      50,
    ),
  },
  {
    id: "math-preset-multiplication-table-1-10",
    label: "Malá násobilka 1–10",
    description: "Procvičujeme celou malou násobilku.",
    suggestedGradeMin: 2,
    suggestedGradeMax: 4,
    topic: "multiplication",
    mathConfig: multiplicationConfig(
      buildRangeValues({ min: 1, max: 10 }),
      10,
      100,
    ),
  },
  {
    id: "math-preset-multiplication-selected",
    label: "Vybraná čísla násobilky",
    description: "Násobíme vybranými čísly 2 až 9.",
    suggestedGradeMin: 2,
    suggestedGradeMax: 4,
    topic: "multiplication",
    mathConfig: multiplicationConfig([2, 3, 4, 5, 6, 7, 8, 9], 10, 100),
  },
  {
    id: "math-preset-division-table",
    label: "Dělení v malé násobilce",
    description: "Dělíme z malé násobilky, podíl 1–10.",
    suggestedGradeMin: 2,
    suggestedGradeMax: 4,
    topic: "division",
    mathConfig: tableDivisionConfig(
      buildRangeValues({ min: 2, max: 10 }),
      100,
    ),
  },
  {
    id: "math-preset-division-advanced",
    label: "Dělení podle rozsahu",
    description: "Dělíme většími čísly podle rozsahu dělence a dělitele.",
    suggestedGradeMin: 4,
    suggestedGradeMax: 6,
    topic: "division",
    mathConfig: advancedDivisionConfig(),
  },
  {
    id: "math-preset-division-remainder-intro",
    label: "Dělení se zbytkem – úvod",
    description: "Malá čísla se zbytkem, podíl do 5.",
    suggestedGradeMin: 3,
    suggestedGradeMax: 4,
    topic: "division-remainder",
    mathConfig: divisionRemainderConfig(60, { min: 2, max: 10 }, 5),
  },
  {
    id: "math-preset-division-remainder-table",
    label: "Dělení se zbytkem v násobilce",
    description: "Dělení se zbytkem v malých číslech, podíl do 10.",
    suggestedGradeMin: 3,
    suggestedGradeMax: 5,
    topic: "division-remainder",
    mathConfig: divisionRemainderConfig(100, { min: 2, max: 10 }, 10),
  },
];

const presetById = new Map<MathPracticePresetId, MathPracticePreset>(
  mathPracticePresets.map((preset) => [preset.id, preset]),
);

export function getMathPracticePresets(): MathPracticePreset[] {
  return mathPracticePresets;
}

export function getMathPracticePresetById(
  id: MathPracticePresetId,
): MathPracticePreset | undefined {
  return presetById.get(id);
}

export function getMathPracticePresetsByTopic(
  topic: MathTopic,
): MathPracticePreset[] {
  return mathPracticePresets.filter((preset) => preset.topic === topic);
}
