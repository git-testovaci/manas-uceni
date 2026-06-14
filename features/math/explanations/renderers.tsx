import type { ReactElement } from "react";

import {
  CompactFormula,
  CountDotsVisual,
} from "@/features/math/visuals";
import type { MathExplanationContext } from "@/lib/math/explanations";
import {
  isRegisteredMathExplanationVisualOperation,
  type RegisteredMathExplanationVisualOperation,
} from "@/lib/math/explanations";

function CountDotsExplanationVisual({
  context,
}: {
  context: MathExplanationContext;
}) {
  const count = context.exercise.dotCount ?? context.numbers.a;

  return (
    <figure className="space-y-2">
      <figcaption className="sr-only">Spočítej {count} teček</figcaption>
      <CountDotsVisual count={count} size="md" ariaHidden />
    </figure>
  );
}

function CompareNumbersExplanationVisual({
  context,
}: {
  context: MathExplanationContext;
}) {
  const { a, b } = context.numbers;
  const { exercise } = context;
  const sign = exercise.comparisonSign ?? exercise.correctAnswer;

  return <CompactFormula>{`${a} ${sign} ${b}`}</CompactFormula>;
}

function MissingAddendExplanationVisual({
  context,
}: {
  context: MathExplanationContext;
}) {
  const { exercise } = context;
  const target = exercise.targetSum ?? 10;
  const known = exercise.operandA;
  const missing = Number(exercise.correctAnswer);
  const completed =
    exercise.missingPosition === "right"
      ? `${known} + ${missing} = ${target}`
      : `${missing} + ${known} = ${target}`;

  return <CompactFormula>{completed}</CompactFormula>;
}

const VISUAL_RENDERERS: Record<
  RegisteredMathExplanationVisualOperation,
  (context: MathExplanationContext) => ReactElement
> = {
  "count-dots": (context) => (
    <CountDotsExplanationVisual context={context} />
  ),
  "compare-numbers": (context) => (
    <CompareNumbersExplanationVisual context={context} />
  ),
  "missing-addend-to-10": (context) => (
    <MissingAddendExplanationVisual context={context} />
  ),
};

export function renderRegisteredMathExplanationVisual(
  context: MathExplanationContext,
): ReactElement | null {
  const { operation } = context.exercise;

  if (!isRegisteredMathExplanationVisualOperation(operation)) {
    return null;
  }

  return VISUAL_RENDERERS[operation](context);
}
