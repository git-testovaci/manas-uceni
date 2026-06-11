import type { MathExercise } from "@/types";

const MAX_DOTS = 36;
const MAX_GROUPS = 10;
const MAX_ROW_DOTS = MAX_DOTS / 2;
const MULT_SMALL_MAX_ROWS = 10;
const MULT_SMALL_MAX_COLS = 6;
const MULT_SMALL_MAX_PRODUCT = 60;
const MULT_COMPACT_PRODUCT = 150;
const MULT_COMPACT_FACTOR = 15;
const MULT_CHUNK_PREVIEW_ROWS = 5;

function exceedsRowLimit(value: number): boolean {
  return value > MAX_ROW_DOTS;
}

function exceedsTotalLimit(value: number): boolean {
  return value > MAX_DOTS;
}

type MathExplanationProps = {
  exercise: MathExercise;
};

type ExplanationNumbers = {
  a: number;
  b: number;
  result: number;
  quotient?: number;
  remainder?: number;
};

function getNumbers(exercise: MathExercise): ExplanationNumbers {
  const { operation, operandA, operandB } = exercise;

  switch (operation) {
    case "add":
      return { a: operandA, b: operandB, result: operandA + operandB };
    case "subtract":
      return { a: operandA, b: operandB, result: operandA - operandB };
    case "multiply":
      return { a: operandA, b: operandB, result: operandA * operandB };
    case "divide":
      return {
        a: operandA,
        b: operandB,
        result: operandA / operandB,
        quotient: operandA / operandB,
      };
    case "divide-with-remainder": {
      const quotient = Math.floor(operandA / operandB);
      const remainder = operandA % operandB;
      return {
        a: operandA,
        b: operandB,
        result: quotient,
        quotient,
        remainder,
      };
    }
  }
}

function getExplanationText(
  exercise: MathExercise,
  numbers: ExplanationNumbers,
): string {
  const { a, b, result, quotient, remainder } = numbers;

  switch (exercise.operation) {
    case "add":
      return `${a} a ${b} dá dohromady ${result}.`;
    case "subtract":
      return `Od ${a} odečteme ${b} a zůstane ${result}.`;
    case "multiply":
      return `${a} krát ${b} je ${result}.`;
    case "divide":
      return `${a} rozdělíme do skupin po ${b} a dostaneme ${result} skupin.`;
    case "divide-with-remainder":
      return `${a} rozdělíme po ${b}: ${quotient} celých skupin a ${remainder} zůstane navíc.`;
  }
}

function Dot({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-math/80 ${className}`}
    />
  );
}

function DotRow({ count, className = "" }: { count: number; className?: string }) {
  return (
    <div className="flex flex-wrap gap-1" aria-hidden="true">
      {Array.from({ length: count }, (_, index) => (
        <Dot key={index} className={className} />
      ))}
    </div>
  );
}

function DotGrid({ rows, cols }: { rows: number; cols: number }) {
  return (
    <div className="space-y-1" aria-hidden="true">
      {Array.from({ length: rows }, (_, rowIndex) => (
        <DotRow key={rowIndex} count={cols} />
      ))}
    </div>
  );
}

function CompactFormula({ children }: { children: string }) {
  return (
    <p className="rounded-lg bg-white/50 px-3 py-2 text-sm font-medium text-foreground/90">
      {children}
    </p>
  );
}

function exceedsVisibleDotLimit(count: number): boolean {
  return count > MAX_DOTS;
}

function AdditionVisual({ a, b }: { a: number; b: number }) {
  const sum = a + b;
  const visibleDots = a + b;

  if (exceedsVisibleDotLimit(visibleDots)) {
    return <CompactFormula>{`${a} + ${b} = ${sum}`}</CompactFormula>;
  }

  return (
    <figure className="space-y-2">
      <figcaption className="sr-only">
        {a} teček plus {b} teček, dohromady {sum} teček
      </figcaption>
      <p className="text-sm font-medium text-foreground/70">První číslo ({a})</p>
      <DotRow count={a} />
      <p className="text-sm font-medium text-foreground/70">Druhé číslo ({b})</p>
      <DotRow count={b} />
      <p className="text-sm text-foreground/80">Dohromady je {sum}.</p>
    </figure>
  );
}

function SubtractionVisual({ a, b }: { a: number; b: number }) {
  const result = a - b;
  const visibleDots = b + result;

  if (exceedsVisibleDotLimit(visibleDots)) {
    return <CompactFormula>{`${a} − ${b} = ${result}`}</CompactFormula>;
  }

  return (
    <figure className="space-y-2">
      <figcaption className="sr-only">
        Od {a} odečteme {b}, zůstane {result} teček
      </figcaption>
      <p className="text-sm font-medium text-foreground/70">Odečítáme ({b})</p>
      <DotRow count={b} />
      <p className="text-sm font-medium text-foreground/70">Zbývá ({result})</p>
      <DotRow count={result} />
    </figure>
  );
}

type MultiplicationVisualMode =
  | "cumulative"
  | "chunked"
  | "chunked-compact"
  | "text";

function getMultiplicationChunks(total: number): number[] {
  if (total <= 5) {
    return [total];
  }

  if (total <= 10) {
    const chunks: number[] = [];
    let remaining = total;
    while (remaining > 5) {
      chunks.push(5);
      remaining -= 5;
    }
    if (remaining > 0) {
      chunks.push(remaining);
    }
    return chunks;
  }

  if (total >= 100) {
    const leading = Math.floor(total / 100) * 100;
    const rest = total - leading;
    return rest > 0 ? [leading, rest] : [leading];
  }

  const tens = Math.floor(total / 10) * 10;
  const rest = total - tens;
  return rest > 0 ? [tens, rest] : [tens];
}

function getMultiplicationVisualMode(
  rows: number,
  cols: number,
  product: number,
): MultiplicationVisualMode {
  if (
    product > MULT_COMPACT_PRODUCT ||
    rows > MULT_COMPACT_FACTOR ||
    cols > MULT_COMPACT_FACTOR
  ) {
    return "text";
  }

  if (
    rows <= MULT_SMALL_MAX_ROWS &&
    cols <= MULT_SMALL_MAX_COLS &&
    product <= MULT_SMALL_MAX_PRODUCT
  ) {
    return "cumulative";
  }

  if (
    product <= MAX_DOTS &&
    rows <= MAX_ROW_DOTS &&
    cols <= MAX_ROW_DOTS
  ) {
    return "chunked";
  }

  return "chunked-compact";
}

function MultiplicationCumulativeVisual({
  rows,
  cols,
}: {
  rows: number;
  cols: number;
}) {
  const product = rows * cols;

  return (
    <figure className="space-y-2">
      <figcaption className="sr-only">
        {rows} řádků po {cols}, postupně {cols}, {cols * 2}, až {product}
      </figcaption>
      <p className="text-sm text-foreground/70">Každý řádek přidá {cols}:</p>
      <ol className="space-y-2">
        {Array.from({ length: rows }, (_, index) => {
          const rowNumber = index + 1;
          const runningTotal = rowNumber * cols;

          return (
            <li
              key={rowNumber}
              className="flex flex-wrap items-center gap-x-2 gap-y-1"
            >
              <span className="min-w-[4.5rem] text-xs font-medium text-foreground/60">
                Řádek {rowNumber}
              </span>
              <DotRow count={cols} />
              <span className="text-sm font-semibold tabular-nums">
                → {runningTotal}
              </span>
            </li>
          );
        })}
      </ol>
      <p className="text-sm font-medium tabular-nums">
        Celkem {rows} × {cols} = {product}
      </p>
    </figure>
  );
}

function MultiplicationChunkGroup({
  chunkRows,
  cols,
  compact,
}: {
  chunkRows: number;
  cols: number;
  compact: boolean;
}) {
  const subtotal = chunkRows * cols;
  const displayRows = compact
    ? Math.min(chunkRows, MULT_CHUNK_PREVIEW_ROWS)
    : chunkRows;

  return (
    <div className="rounded-lg border border-foreground/15 border-l-4 border-l-math/70 bg-white/60 px-2 py-2">
      <div className="space-y-1" aria-hidden="true">
        <DotGrid rows={displayRows} cols={cols} />
        {compact && chunkRows > displayRows && (
          <p className="text-xs text-foreground/60">
            … dalších {chunkRows - displayRows} řádků po {cols}
          </p>
        )}
      </div>
      <p className="mt-2 text-sm font-semibold tabular-nums">
        {chunkRows} × {cols} = {subtotal}
      </p>
    </div>
  );
}

function MultiplicationChunkedVisual({
  rows,
  cols,
  compact,
}: {
  rows: number;
  cols: number;
  compact: boolean;
}) {
  const chunks = getMultiplicationChunks(rows);
  const subtotals = chunks.map((chunkRows) => chunkRows * cols);
  const product = rows * cols;

  return (
    <figure className="space-y-3">
      <figcaption className="sr-only">
        {rows} krát {cols} rozděleno na části, celkem {product}
      </figcaption>
      <p className="text-sm text-foreground/70">
        Rozdělíme {rows} na menší části:
      </p>
      <div className="flex flex-wrap items-end gap-2">
        {chunks.map((chunkRows, index) => (
          <div key={`${chunkRows}-${index}`} className="flex items-end gap-2">
            {index > 0 && (
              <span
                className="pb-6 text-lg font-semibold text-foreground/80"
                aria-hidden="true"
              >
                +
              </span>
            )}
            <MultiplicationChunkGroup
              chunkRows={chunkRows}
              cols={cols}
              compact={compact}
            />
          </div>
        ))}
      </div>
      <p className="text-sm font-semibold tabular-nums">
        {subtotals.join(" + ")} = {product}
      </p>
    </figure>
  );
}

function MultiplicationTextVisual({
  rows,
  cols,
}: {
  rows: number;
  cols: number;
}) {
  const product = rows * cols;
  const chunks = getMultiplicationChunks(rows);
  const subtotals = chunks.map((chunkRows) => chunkRows * cols);
  const parts = chunks.map((chunkRows) => `${chunkRows} × ${cols}`);

  return (
    <figure className="space-y-2">
      <figcaption className="sr-only">
        {rows} krát {cols} je {product}
      </figcaption>
      <p className="text-sm tabular-nums">
        {rows} krát {cols} je {product}.
      </p>
      {chunks.length > 1 && (
        <>
          <p className="text-sm">
            Můžeme to rozdělit: {parts.join(" a ")}.
          </p>
          <p className="text-sm font-semibold tabular-nums">
            {subtotals.join(" + ")} = {product}.
          </p>
        </>
      )}
    </figure>
  );
}

function MultiplicationVisual({
  exercise,
  a,
  b,
}: {
  exercise: MathExercise;
  a: number;
  b: number;
}) {
  const rows = exercise.visualHint?.rows ?? a;
  const cols = exercise.visualHint?.cols ?? b;
  const product = rows * cols;
  const mode = getMultiplicationVisualMode(rows, cols, product);

  switch (mode) {
    case "cumulative":
      return <MultiplicationCumulativeVisual rows={rows} cols={cols} />;
    case "chunked":
      return (
        <MultiplicationChunkedVisual rows={rows} cols={cols} compact={false} />
      );
    case "chunked-compact":
      return (
        <MultiplicationChunkedVisual rows={rows} cols={cols} compact={true} />
      );
    case "text":
      return <MultiplicationTextVisual rows={rows} cols={cols} />;
  }
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
    exceedsTotalLimit(dividend) ||
    exceedsRowLimit(divisor) ||
    quotient > MAX_GROUPS
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
            <DotRow count={divisor} />
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
    exceedsTotalLimit(dividend) ||
    exceedsRowLimit(divisor) ||
    exceedsRowLimit(remainder) ||
    quotient > MAX_GROUPS
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
            <DotRow count={divisor} />
          </div>
        ))}
      </div>
      {remainder > 0 && (
        <>
          <p className="text-sm font-medium text-foreground/70">
            Zbytek ({remainder})
          </p>
          <div className="rounded-lg border border-dashed border-foreground/25 px-2 py-1.5">
            <DotRow count={remainder} />
          </div>
        </>
      )}
    </figure>
  );
}

function ExplanationVisual({
  exercise,
  numbers,
}: {
  exercise: MathExercise;
  numbers: ExplanationNumbers;
}) {
  const { a, b, quotient, remainder } = numbers;

  switch (exercise.operation) {
    case "add":
      return <AdditionVisual a={a} b={b} />;
    case "subtract":
      return <SubtractionVisual a={a} b={b} />;
    case "multiply":
      return <MultiplicationVisual exercise={exercise} a={a} b={b} />;
    case "divide":
      return (
        <DivisionVisual dividend={a} divisor={b} quotient={quotient ?? a / b} />
      );
    case "divide-with-remainder":
      return (
        <DivisionRemainderVisual
          dividend={a}
          divisor={b}
          quotient={quotient ?? Math.floor(a / b)}
          remainder={remainder ?? a % b}
        />
      );
  }
}

export function MathExplanation({ exercise }: MathExplanationProps) {
  const numbers = getNumbers(exercise);

  return (
    <section
      aria-label="Vysvětlení příkladu"
      className="mt-4 space-y-3 border-t border-orange-300/50 pt-4"
    >
      <h3 className="text-base font-semibold">Jak na to</h3>
      <p className="text-base">{getExplanationText(exercise, numbers)}</p>
      <ExplanationVisual exercise={exercise} numbers={numbers} />
    </section>
  );
}
