import type { MathExercise, MathOperation } from "@/types";

export type MathExplanationVisualKind =
  | "dot-groups"
  | "count-dots"
  | "multiplication-board"
  | "multiplication-text"
  | "division-groups"
  | "division-remainder"
  | "compact-formula"
  | "money-coins"
  | "clock-face"
  | "basic-shape"
  | "none";

export type MathExplanationNumbers = {
  a: number;
  b: number;
  result: number;
  quotient?: number;
  remainder?: number;
};

export type MathExplanationContext = {
  exercise: MathExercise;
  numbers: MathExplanationNumbers;
};

export type MathExplanationRegistryEntry = {
  operation: MathOperation;
  visualKind: MathExplanationVisualKind;
};

export type ResolvedMathExplanation = {
  context: MathExplanationContext;
  entry: MathExplanationRegistryEntry;
  text: string;
};

export const REGISTERED_MATH_EXPLANATION_VISUAL_OPERATIONS = [
  "add",
  "subtract",
  "multiply",
  "divide",
  "divide-with-remainder",
  "missing-addend-to-10",
  "count-dots",
  "compare-numbers",
  "number-sequence",
  "money-count",
  "clock-read",
  "shape-identify",
] as const satisfies readonly MathOperation[];

export type RegisteredMathExplanationVisualOperation =
  (typeof REGISTERED_MATH_EXPLANATION_VISUAL_OPERATIONS)[number];
