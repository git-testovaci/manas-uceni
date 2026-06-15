import type { BasicShapeId, MathOperation } from "@/types";

export type SessionAnswerResult = "correct" | "needsPractice" | "corrected";

export type SessionAnswerRecord = {
  questionNumber: number;
  exerciseId: string;
  operation: MathOperation;
  operandA: number;
  operandB: number;
  prompt?: string;
  dotCount?: number;
  shapeId?: BasicShapeId;
  userAnswer: string;
  expectedAnswer: string;
  result: SessionAnswerResult;
};
