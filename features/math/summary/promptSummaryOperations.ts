import type { MathOperation } from "@/types";

export type PromptSummaryAccessibleVariant = "comparison" | "default";

type PromptSummaryOperationMetadata = {
  accessibleVariant: PromptSummaryAccessibleVariant;
};

const PROMPT_SUMMARY_OPERATION_METADATA = {
  "compare-numbers": { accessibleVariant: "comparison" },
  "missing-addend-to-10": { accessibleVariant: "default" },
  "number-sequence": { accessibleVariant: "default" },
} as const satisfies Record<
  "compare-numbers" | "missing-addend-to-10" | "number-sequence",
  PromptSummaryOperationMetadata
>;

export type PromptSummaryOperation =
  keyof typeof PROMPT_SUMMARY_OPERATION_METADATA;

function isPromptSummaryOperation(
  operation: string,
): operation is PromptSummaryOperation {
  return operation in PROMPT_SUMMARY_OPERATION_METADATA;
}

export function getPromptSummaryAccessibleVariant(
  operation: string,
): PromptSummaryAccessibleVariant | null {
  if (!isPromptSummaryOperation(operation)) {
    return null;
  }

  return PROMPT_SUMMARY_OPERATION_METADATA[operation].accessibleVariant;
}

export function shouldSnapshotPromptForSummary(operation: MathOperation): boolean {
  return isPromptSummaryOperation(operation);
}
