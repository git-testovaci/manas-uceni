import type { MathExercise, MathOperation } from "@/types";

import { getMathExplanationNumbers } from "./numbers";
import { getMathExplanationText } from "./text";
import type {
  MathExplanationRegistryEntry,
  MathExplanationVisualKind,
  RegisteredMathExplanationVisualOperation,
  ResolvedMathExplanation,
} from "./types";
import { REGISTERED_MATH_EXPLANATION_VISUAL_OPERATIONS } from "./types";

const REGISTERED_VISUAL_OPERATION_SET = new Set<string>(
  REGISTERED_MATH_EXPLANATION_VISUAL_OPERATIONS,
);

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
  "money-count": "money-coins",
  "clock-read": "clock-face",
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

export function isRegisteredMathExplanationVisualOperation(
  operation: MathOperation,
): operation is RegisteredMathExplanationVisualOperation {
  return REGISTERED_VISUAL_OPERATION_SET.has(operation);
}

export { REGISTERED_MATH_EXPLANATION_VISUAL_OPERATIONS };
