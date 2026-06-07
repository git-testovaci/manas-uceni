"use client";

import { generateMathExercises } from "@/lib/math/generateMathExercises";
import { processMathAnswer } from "@/lib/math/processMathAnswer";
import {
  getDueReviewItems,
  sortItemsForReview,
} from "@/lib/review/selectors";
import {
  getReviewStateMap,
  saveReviewState,
} from "@/lib/storage/reviewState";
import type {
  MathExercise,
  MathPracticeConfig,
  MathTopic,
  ReviewStateMap,
} from "@/types";
import { useState, type KeyboardEvent } from "react";

type Phase = "config" | "practice" | "summary";

type SessionStats = {
  correct: number;
  wrong: number;
  fixedMistakes: number;
};

const TOPIC_OPTIONS: { topic: MathTopic; label: string }[] = [
  { topic: "addition", label: "Sčítání" },
  { topic: "subtraction", label: "Odčítání" },
  { topic: "multiplication", label: "Násobení" },
  { topic: "division", label: "Dělení" },
  { topic: "division-remainder", label: "Dělení se zbytkem" },
];

const DEFAULT_TOPICS: MathTopic[] = ["multiplication"];

export function MathPracticeClient() {
  const [phase, setPhase] = useState<Phase>("config");
  const [reviewMap, setReviewMap] = useState<ReviewStateMap>(() => {
    if (typeof window === "undefined") {
      return {};
    }
    return getReviewStateMap();
  });
  const [minValue, setMinValue] = useState(1);
  const [maxValue, setMaxValue] = useState(12);
  const [maxResult, setMaxResult] = useState(100);
  const [questionCount, setQuestionCount] = useState(10);
  const [allowRemainders, setAllowRemainders] = useState(false);
  const [multipliersText, setMultipliersText] = useState("");
  const [divisorsText, setDivisorsText] = useState("");

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
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [feedback, setFeedback] = useState<{
    message: string;
    tone: "success" | "wrong" | "fixed";
    expectedAnswer?: string;
    explanation?: string;
  } | null>(null);
  const [enabledTopics, setEnabledTopics] = useState<MathTopic[]>(DEFAULT_TOPICS);
  const [configError, setConfigError] = useState<string | null>(null);

  const toggleTopic = (topic: MathTopic) => {
    setEnabledTopics((current) =>
      current.includes(topic)
        ? current.filter((item) => item !== topic)
        : [...current, topic],
    );
  };

  const handleStartPractice = () => {
    setConfigError(null);

    if (enabledTopics.length === 0) {
      setConfigError("Vyber alespoň jedno téma.");
      return;
    }

    const config = buildPracticeConfig({
      enabledTopics,
      minValue,
      maxValue,
      maxResult,
      questionCount,
      allowRemainders,
      multipliersText,
      divisorsText,
    });

    const candidates = generateMathExercises(config);
    if (candidates.length === 0) {
      setConfigError("Pro tato nastavení nejsou k dispozici žádné příklady.");
      return;
    }

    const firstExercise = pickNextExercise(config, reviewMap, 1);
    if (!firstExercise) {
      setConfigError("Nepodařilo se vybrat první příklad.");
      return;
    }

    setPracticeConfig(config);
    setCurrentExercise(firstExercise);
    setCurrentQuestionNumber(1);
    setAnsweredInSession(0);
    setSessionStats({ correct: 0, wrong: 0, fixedMistakes: 0 });
    setUserInput("");
    setHasSubmitted(false);
    setFeedback(null);
    setPhase("practice");
  };

  const handleSubmitAnswer = () => {
    if (!currentExercise || hasSubmitted || userInput.trim().length === 0) {
      return;
    }

    const result = processMathAnswer({
      exercise: currentExercise,
      input: userInput,
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

    setAnsweredInSession((current) => current + 1);
    setFeedback(buildFeedback(result.isCorrect, result.answerResult.wasPreviouslyWrong, result.expectedAnswer, currentExercise.explanation));
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
    const nextExercise = pickNextExercise(
      practiceConfig,
      reviewMap,
      nextQuestionNumber,
      currentExercise?.id,
    );

    if (!nextExercise) {
      setConfigError("Nepodařilo se vybrat další příklad.");
      setPhase("summary");
      return;
    }

    setCurrentQuestionNumber(nextQuestionNumber);
    setCurrentExercise(nextExercise);
    setUserInput("");
    setHasSubmitted(false);
    setFeedback(null);
  };

  const handlePracticeAgain = () => {
    if (!practiceConfig) {
      setPhase("config");
      return;
    }

    setReviewMap(getReviewStateMap());

    const firstExercise = pickNextExercise(practiceConfig, getReviewStateMap(), 1);
    if (!firstExercise) {
      setConfigError("Nepodařilo se spustit procvičování.");
      setPhase("config");
      return;
    }

    setCurrentExercise(firstExercise);
    setCurrentQuestionNumber(1);
    setAnsweredInSession(0);
    setSessionStats({ correct: 0, wrong: 0, fixedMistakes: 0 });
    setUserInput("");
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
        enabledTopics={enabledTopics}
        minValue={minValue}
        maxValue={maxValue}
        maxResult={maxResult}
        questionCount={questionCount}
        allowRemainders={allowRemainders}
        multipliersText={multipliersText}
        divisorsText={divisorsText}
        configError={configError}
        onToggleTopic={toggleTopic}
        onMinValueChange={setMinValue}
        onMaxValueChange={setMaxValue}
        onMaxResultChange={setMaxResult}
        onQuestionCountChange={setQuestionCount}
        onAllowRemaindersChange={setAllowRemainders}
        onMultipliersTextChange={setMultipliersText}
        onDivisorsTextChange={setDivisorsText}
        onStart={handleStartPractice}
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
      progressLabel={`Příklad ${Math.min(answeredInSession + (hasSubmitted ? 0 : 1), totalQuestions)} z ${totalQuestions}`}
      userInput={userInput}
      hasSubmitted={hasSubmitted}
      feedback={feedback}
      isSessionComplete={isSessionComplete}
      onInputChange={setUserInput}
      onSubmit={handleSubmitAnswer}
      onNext={handleNextQuestion}
    />
  );
}

type ConfigScreenProps = {
  enabledTopics: MathTopic[];
  minValue: number;
  maxValue: number;
  maxResult: number;
  questionCount: number;
  allowRemainders: boolean;
  multipliersText: string;
  divisorsText: string;
  configError: string | null;
  onToggleTopic: (topic: MathTopic) => void;
  onMinValueChange: (value: number) => void;
  onMaxValueChange: (value: number) => void;
  onMaxResultChange: (value: number) => void;
  onQuestionCountChange: (value: number) => void;
  onAllowRemaindersChange: (value: boolean) => void;
  onMultipliersTextChange: (value: string) => void;
  onDivisorsTextChange: (value: string) => void;
  onStart: () => void;
};

function ConfigScreen({
  enabledTopics,
  minValue,
  maxValue,
  maxResult,
  questionCount,
  allowRemainders,
  multipliersText,
  divisorsText,
  configError,
  onToggleTopic,
  onMinValueChange,
  onMaxValueChange,
  onMaxResultChange,
  onQuestionCountChange,
  onAllowRemaindersChange,
  onMultipliersTextChange,
  onDivisorsTextChange,
  onStart,
}: ConfigScreenProps) {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Matematika
        </h1>
        <p className="mt-3 text-lg text-foreground/70">
          Vyber, co chceš procvičovat.
        </p>
      </header>

      <fieldset className="space-y-3">
        <legend className="text-base font-semibold">Témata</legend>
        {TOPIC_OPTIONS.map(({ topic, label }) => (
          <label key={topic} className="flex min-h-11 items-center gap-3 text-lg">
            <input
              type="checkbox"
              checked={enabledTopics.includes(topic)}
              onChange={() => onToggleTopic(topic)}
              className="h-5 w-5 rounded border-foreground/30"
            />
            <span>{label}</span>
          </label>
        ))}
      </fieldset>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block space-y-2">
          <span className="text-base font-semibold">Min hodnota</span>
          <input
            type="number"
            value={minValue}
            onChange={(event) => onMinValueChange(Number(event.target.value))}
            className="min-h-11 w-full rounded-xl border border-foreground/20 px-4 text-lg"
          />
        </label>
        <label className="block space-y-2">
          <span className="text-base font-semibold">Max hodnota</span>
          <input
            type="number"
            value={maxValue}
            onChange={(event) => onMaxValueChange(Number(event.target.value))}
            className="min-h-11 w-full rounded-xl border border-foreground/20 px-4 text-lg"
          />
        </label>
        <label className="block space-y-2">
          <span className="text-base font-semibold">Max výsledek</span>
          <input
            type="number"
            value={maxResult}
            onChange={(event) => onMaxResultChange(Number(event.target.value))}
            className="min-h-11 w-full rounded-xl border border-foreground/20 px-4 text-lg"
          />
        </label>
        <label className="block space-y-2">
          <span className="text-base font-semibold">Počet příkladů</span>
          <input
            type="number"
            min={1}
            value={questionCount}
            onChange={(event) =>
              onQuestionCountChange(Number(event.target.value))
            }
            className="min-h-11 w-full rounded-xl border border-foreground/20 px-4 text-lg"
          />
        </label>
      </div>

      <label className="block space-y-2">
        <span className="text-base font-semibold">Vybrané násobitele</span>
        <input
          type="text"
          value={multipliersText}
          onChange={(event) => onMultipliersTextChange(event.target.value)}
          placeholder="3, 7, 9"
          className="min-h-11 w-full rounded-xl border border-foreground/20 px-4 text-lg"
        />
      </label>

      <label className="block space-y-2">
        <span className="text-base font-semibold">Vybraní dělitelé</span>
        <input
          type="text"
          value={divisorsText}
          onChange={(event) => onDivisorsTextChange(event.target.value)}
          placeholder="2, 4, 5"
          className="min-h-11 w-full rounded-xl border border-foreground/20 px-4 text-lg"
        />
      </label>

      <label className="flex min-h-11 items-center gap-3 text-lg">
        <input
          type="checkbox"
          checked={allowRemainders}
          onChange={(event) => onAllowRemaindersChange(event.target.checked)}
          className="h-5 w-5 rounded border-foreground/30"
        />
        <span>Povolit zbytky</span>
      </label>

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

type PracticeScreenProps = {
  exercise: MathExercise;
  progressLabel: string;
  userInput: string;
  hasSubmitted: boolean;
  feedback: {
    message: string;
    tone: "success" | "wrong" | "fixed";
    expectedAnswer?: string;
    explanation?: string;
  } | null;
  isSessionComplete: boolean;
  onInputChange: (value: string) => void;
  onSubmit: () => void;
  onNext: () => void;
};

function PracticeScreen({
  exercise,
  progressLabel,
  userInput,
  hasSubmitted,
  feedback,
  isSessionComplete,
  onInputChange,
  onSubmit,
  onNext,
}: PracticeScreenProps) {
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && !hasSubmitted) {
      event.preventDefault();
      onSubmit();
    }
  };

  return (
    <div className="space-y-6">
      <p className="text-base font-medium text-foreground/70">{progressLabel}</p>

      <p className="text-3xl font-bold tracking-tight sm:text-4xl">
        {exercise.prompt}
      </p>

      <label className="block space-y-2">
        <span className="text-base font-semibold">Tvoje odpověď</span>
        <input
          type="text"
          inputMode="numeric"
          value={userInput}
          onChange={(event) => onInputChange(event.target.value)}
          onKeyDown={handleKeyDown}
          disabled={hasSubmitted}
          className="min-h-12 w-full rounded-xl border border-foreground/20 px-4 text-2xl text-center focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
        />
      </label>

      {!hasSubmitted && (
        <button
          type="button"
          onClick={onSubmit}
          disabled={userInput.trim().length === 0}
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
          {feedback.explanation && (
            <p className="mt-2 text-base">{feedback.explanation}</p>
          )}
        </div>
      )}

      {hasSubmitted && (
        <button
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

function buildPracticeConfig(input: {
  enabledTopics: MathTopic[];
  minValue: number;
  maxValue: number;
  maxResult: number;
  questionCount: number;
  allowRemainders: boolean;
  multipliersText: string;
  divisorsText: string;
}): MathPracticeConfig {
  const selectedMultipliers = parseCommaSeparatedNumbers(input.multipliersText);
  const selectedDivisors = parseCommaSeparatedNumbers(input.divisorsText);

  const config: MathPracticeConfig = {
    enabledTopics: input.enabledTopics,
    minValue: input.minValue,
    maxValue: input.maxValue,
    maxResult: input.maxResult,
    questionCount: input.questionCount,
    allowRemainders: input.allowRemainders,
  };

  if (selectedMultipliers.length > 0) {
    config.selectedMultipliers = selectedMultipliers;
  }

  if (selectedDivisors.length > 0) {
    config.selectedDivisors = selectedDivisors;
  }

  return config;
}

function parseCommaSeparatedNumbers(value: string): number[] {
  return value
    .split(",")
    .map((part) => part.trim())
    .filter((part) => part.length > 0)
    .map((part) => Number(part))
    .filter((number) => Number.isInteger(number) && number > 0);
}

function pickNextExercise(
  config: MathPracticeConfig,
  reviewMap: ReviewStateMap,
  currentQuestionNumber: number,
  excludeId?: string,
): MathExercise | null {
  const candidates = generateMathExercises(config);
  if (candidates.length === 0) {
    return null;
  }

  const dueItems = getDueReviewItems(
    candidates,
    reviewMap,
    currentQuestionNumber,
  ).sort((a, b) => a.id.localeCompare(b.id));

  if (dueItems.length > 0) {
    return dueItems.find((item) => item.id !== excludeId) ?? dueItems[0];
  }

  const sorted = sortItemsForReview(
    candidates,
    reviewMap,
    currentQuestionNumber,
  );

  return sorted.find((item) => item.id !== excludeId) ?? sorted[0] ?? null;
}

function buildFeedback(
  isCorrect: boolean,
  wasPreviouslyWrong: boolean,
  expectedAnswer: string,
  explanation?: string,
) {
  if (isCorrect && wasPreviouslyWrong) {
    return {
      message: "Paráda! Opravená chyba.",
      tone: "fixed" as const,
    };
  }

  if (isCorrect) {
    return {
      message: "Výborně!",
      tone: "success" as const,
    };
  }

  return {
    message: "Ještě ne. Ukážeme si postup.",
    tone: "wrong" as const,
    expectedAnswer,
    explanation,
  };
}
