import type { MathOperation } from "@/types";

import type {
  MathExplanationRegistryEntry,
  MathExplanationVisualKind,
} from "./types";

const OPERATION_VISUAL_KIND: Partial<
  Record<MathOperation, MathExplanationVisualKind>
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
): MathExplanationVisualKind | undefined {
  return OPERATION_VISUAL_KIND[operation];
}

export function getMathExplanationRegistryEntry(
  operation: MathOperation,
): MathExplanationRegistryEntry | undefined {
  const visualKind = OPERATION_VISUAL_KIND[operation];

  if (!visualKind) {
    return undefined;
  }

  return {
    operation,
    visualKind,
  };
}
