import { CompactFormula } from "@/features/math/visuals";
import type { MathExplanationContext } from "@/lib/math/explanations";

export function NumberSequenceExplanationVisual({
  context,
}: {
  context: MathExplanationContext;
}) {
  const { exercise, numbers } = context;
  const { b } = numbers;
  const sequence = exercise.sequenceNumbers ?? [];
  const missingIndex = exercise.sequenceMissingIndex ?? -1;

  return (
    <CompactFormula>
      {sequence
        .map((value, index) =>
          index === missingIndex ? String(b) : value,
        )
        .join(", ")}
    </CompactFormula>
  );
}
