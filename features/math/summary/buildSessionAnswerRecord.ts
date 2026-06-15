import { shouldSnapshotPromptForSummary } from "./promptSummaryOperations";
import type { SessionAnswerRecord, SessionAnswerResult } from "./types";
import type { MathExercise } from "@/types";
import { formatShapeAnswerLabel } from "@/lib/math/explanations/shapes";

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
    prompt: shouldSnapshotPromptForSummary(exercise.operation)
      ? exercise.prompt
      : undefined,
    dotCount:
      exercise.operation === "count-dots"
        ? (exercise.dotCount ?? exercise.operandA)
        : undefined,
    shapeId:
      exercise.operation === "shape-identify" ? exercise.shapeId : undefined,
    userAnswer:
      exercise.operation === "shape-identify"
        ? formatShapeAnswerLabel(userAnswer)
        : userAnswer,
    expectedAnswer:
      exercise.operation === "shape-identify"
        ? formatShapeAnswerLabel(expectedAnswer)
        : expectedAnswer,
    result,
  };
}
