import { renderRegisteredMathExplanationVisual } from "@/features/math/explanations";
import { resolveMathExplanationContext } from "@/lib/math/explanations";
import type { MathExercise } from "@/types";

type MathExplanationProps = {
  exercise: MathExercise;
};

export function MathExplanation({ exercise }: MathExplanationProps) {
  const { context, text } = resolveMathExplanationContext(exercise);
  const visual = renderRegisteredMathExplanationVisual(context);

  return (
    <section
      aria-label="Vysvětlení příkladu"
      className="mt-4 space-y-3 border-t border-orange-300/50 pt-4"
    >
      <h3 className="text-base font-semibold">Jak na to</h3>
      <p className="text-base">{text}</p>
      {visual}
    </section>
  );
}
