import type { MathExercise, MathOperation } from "@/types";

export type MathExplanationVisualKind =
  | "dot-groups"
  | "count-dots"
  | "multiplication-board"
  | "multiplication-text"
  | "division-groups"
  | "division-remainder"
  | "compact-formula"
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
