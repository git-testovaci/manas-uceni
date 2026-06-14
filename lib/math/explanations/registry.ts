import type { MathExercise, MathOperation } from "@/types";

import { getMathExplanationNumbers } from "./numbers";
import { getMathExplanationText } from "./text";
import type {
  MathExplanationRegistryEntry,
  MathExplanationVisualKind,
  ResolvedMathExplanation,
} from "./types";

const OPERATION_VISUAL_KIND: Record<
  MathOperation,
  MathExplanationVisualKind
> = {
  add: "dot-groups",
  subtract: "dot-groups",
  multiply: "multiplication-board",
  divide: "division-groups",
  "divide-with-remainder": "division-remainder",
  "missing-addend-to-10": "compact-formula",
  "count-dots": "count-dots",
  "compare-numbers": "compact-formula",
  "number-sequence": "compact-formula",
};

export function getMathExplanationVisualKind(
  operation: MathOperation,
): MathExplanationVisualKind {
  return OPERATION_VISUAL_KIND[operation];
}

export function getMathExplanationRegistryEntry(
  operation: MathOperation,
): MathExplanationRegistryEntry {
  return {
    operation,
    visualKind: OPERATION_VISUAL_KIND[operation],
  };
}

export function resolveMathExplanationContext(
  exercise: MathExercise,
): ResolvedMathExplanation {
  const numbers = getMathExplanationNumbers(exercise);
  const entry = getMathExplanationRegistryEntry(exercise.operation);

  return {
    context: {
      exercise,
      numbers,
    },
    entry,
    text: getMathExplanationText(exercise, numbers),
  };
}
