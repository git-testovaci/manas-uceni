import { CompactFormula, DotGrid } from "@/features/math/visuals";
import type { MathExplanationContext } from "@/lib/math/explanations";

import {
  EXPLANATION_MAX_GROUPS,
  exceedsExplanationRowLimit,
  exceedsExplanationTotalLimit,
  exceedsExplanationVisibleDotLimit,
} from "./limits";

function AdditionVisual({ a, b }: { a: number; b: number }) {
  const sum = a + b;
  const visibleDots = a + b;

  if (exceedsExplanationVisibleDotLimit(visibleDots)) {
    return <CompactFormula>{`${a} + ${b} = ${sum}`}</CompactFormula>;
  }

  return (
    <figure className="space-y-2">
      <figcaption className="sr-only">
        {a} teček plus {b} teček, dohromady {sum} teček
      </figcaption>
      <p className="text-sm font-medium text-foreground/70">První číslo ({a})</p>
      <DotGrid count={a} />
      <p className="text-sm font-medium text-foreground/70">Druhé číslo ({b})</p>
      <DotGrid count={b} />
      <p className="text-sm text-foreground/80">Dohromady je {sum}.</p>
    </figure>
  );
}

function SubtractionVisual({ a, b }: { a: number; b: number }) {
  const result = a - b;
  const visibleDots = b + result;

  if (exceedsExplanationVisibleDotLimit(visibleDots)) {
    return <CompactFormula>{`${a} − ${b} = ${result}`}</CompactFormula>;
  }

  return (
    <figure className="space-y-2">
      <figcaption className="sr-only">
        Od {a} odečteme {b}, zůstane {result} teček
      </figcaption>
      <p className="text-sm font-medium text-foreground/70">Odečítáme ({b})</p>
      <DotGrid count={b} />
      <p className="text-sm font-medium text-foreground/70">Zbývá ({result})</p>
      <DotGrid count={result} />
    </figure>
  );
}

function DivisionVisual({
  dividend,
  divisor,
  quotient,
}: {
  dividend: number;
  divisor: number;
  quotient: number;
}) {
  if (
    exceedsExplanationTotalLimit(dividend) ||
    exceedsExplanationRowLimit(divisor) ||
    quotient > EXPLANATION_MAX_GROUPS
  ) {
    return <CompactFormula>{`${dividend} ÷ ${divisor} = ${quotient}`}</CompactFormula>;
  }

  return (
    <figure className="space-y-2">
      <figcaption className="sr-only">
        {dividend} rozděleno do {quotient} skupin po {divisor}
      </figcaption>
      <p className="text-sm font-medium text-foreground/70">
        {quotient} skupin po {divisor}
      </p>
      <div className="flex flex-wrap gap-3" aria-hidden="true">
        {Array.from({ length: quotient }, (_, groupIndex) => (
          <div
            key={groupIndex}
            className="rounded-lg border border-foreground/15 bg-white/60 px-2 py-1.5"
            aria-hidden="true"
          >
            <p className="mb-1 text-xs text-foreground/60">Skupina {groupIndex + 1}</p>
            <DotGrid count={divisor} />
          </div>
        ))}
      </div>
    </figure>
  );
}

function DivisionRemainderVisual({
  dividend,
  divisor,
  quotient,
  remainder,
}: {
  dividend: number;
  divisor: number;
  quotient: number;
  remainder: number;
}) {
  if (
    exceedsExplanationTotalLimit(dividend) ||
    exceedsExplanationRowLimit(divisor) ||
    exceedsExplanationRowLimit(remainder) ||
    quotient > EXPLANATION_MAX_GROUPS
  ) {
    return (
      <CompactFormula>
        {`${dividend} ÷ ${divisor} = ${quotient} zbytek ${remainder}`}
      </CompactFormula>
    );
  }

  return (
    <figure className="space-y-2">
      <figcaption className="sr-only">
        {dividend} teček: {quotient} celých skupin po {divisor}
        {remainder > 0 ? ` a ${remainder} zbytek` : ""}
      </figcaption>
      <p className="text-sm font-medium text-foreground/70">Celé skupiny</p>
      <div className="flex flex-wrap gap-3" aria-hidden="true">
        {Array.from({ length: quotient }, (_, groupIndex) => (
          <div
            key={groupIndex}
            className="rounded-lg border border-foreground/15 bg-white/60 px-2 py-1.5"
            aria-hidden="true"
          >
            <p className="mb-1 text-xs text-foreground/60">Skupina {groupIndex + 1}</p>
            <DotGrid count={divisor} />
          </div>
        ))}
      </div>
      {remainder > 0 && (
        <>
          <p className="text-sm font-medium text-foreground/70">
            Zbytek ({remainder})
          </p>
          <div className="rounded-lg border border-dashed border-foreground/25 px-2 py-1.5">
            <DotGrid count={remainder} />
          </div>
        </>
      )}
    </figure>
  );
}

export function AdditionExplanationVisual({
  context,
}: {
  context: MathExplanationContext;
}) {
  const { a, b } = context.numbers;
  return <AdditionVisual a={a} b={b} />;
}

export function SubtractionExplanationVisual({
  context,
}: {
  context: MathExplanationContext;
}) {
  const { a, b } = context.numbers;
  return <SubtractionVisual a={a} b={b} />;
}

export function DivisionExplanationVisual({
  context,
}: {
  context: MathExplanationContext;
}) {
  const { a, b, quotient } = context.numbers;
  return (
    <DivisionVisual
      dividend={a}
      divisor={b}
      quotient={quotient ?? a / b}
    />
  );
}

export function DivisionRemainderExplanationVisual({
  context,
}: {
  context: MathExplanationContext;
}) {
  const { a, b, quotient, remainder } = context.numbers;
  return (
    <DivisionRemainderVisual
      dividend={a}
      divisor={b}
      quotient={quotient ?? Math.floor(a / b)}
      remainder={remainder ?? a % b}
    />
  );
}
