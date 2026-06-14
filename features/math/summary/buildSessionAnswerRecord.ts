import type { MathExercise } from "@/types";

import type { SessionAnswerRecord, SessionAnswerResult } from "./types";

const PROMPT_SNAPSHOT_OPERATIONS = new Set<MathExercise["operation"]>([
  "missing-addend-to-10",
  "compare-numbers",
  "number-sequence",
]);

export type BuildSessionAnswerRecordInput = {
  exercise: MathExercise;
  questionNumber: number;
  userAnswer: string;
  expectedAnswer: string;
  result: SessionAnswerResult;
};

export function buildSessionAnswerRecord(
  input: BuildSessionAnswerRecordInput,
): SessionAnswerRecord {
  const { exercise, questionNumber, userAnswer, expectedAnswer, result } =
    input;

  return {
    questionNumber,
    exerciseId: exercise.id,
    operation: exercise.operation,
    operandA: exercise.operandA,
    operandB: exercise.operandB,
    prompt: PROMPT_SNAPSHOT_OPERATIONS.has(exercise.operation)
      ? exercise.prompt
      : undefined,
    dotCount:
      exercise.operation === "count-dots"
        ? (exercise.dotCount ?? exercise.operandA)
        : undefined,
    userAnswer,
    expectedAnswer,
    result,
  };
}
