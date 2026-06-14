import type { MathExercise } from "@/types";

import type { MathExplanationContext } from "@/lib/math/explanations";

const MULT_BOARD_MAX_PRODUCT = 100;
const MULT_TEXT_PRODUCT = 150;
const MULT_TEXT_FACTOR = 15;
const BOARD_COLUMNS = 10;

const GROUP_CELL_COLORS = [
  "bg-sky-100 border-sky-300/80",
  "bg-violet-100 border-violet-300/80",
  "bg-amber-100 border-amber-300/80",
  "bg-emerald-100 border-emerald-300/80",
  "bg-rose-100 border-rose-300/80",
  "bg-cyan-100 border-cyan-300/80",
  "bg-orange-100 border-orange-300/80",
  "bg-indigo-100 border-indigo-300/80",
] as const;

type ChunkOrigin = "first" | "second" | "neutral";

const ORIGIN_STYLE = {
  first: {
    border: "border-l-math/70",
    bg: "bg-math/5",
    text: "text-math",
    dot: "bg-math/80",
  },
  second: {
    border: "border-l-amber-500",
    bg: "bg-amber-50",
    text: "text-amber-800",
    dot: "bg-amber-500/90",
  },
  neutral: {
    border: "border-l-foreground/25",
    bg: "bg-white/60",
    text: "text-foreground",
    dot: "bg-math/80",
  },
} as const;

function getChunkOrigin(
  chunkIndex: number,
  chunkCount: number,
): ChunkOrigin {
  if (chunkCount === 2) {
    return chunkIndex === 0 ? "first" : "second";
  }

  return "neutral";
}

type BridgeToTen = {
  gap: number;
  remainder: number;
  roundedFirst: number;
};

function getBridgeToTen(first: number, second: number): BridgeToTen | null {
  if (second <= 0) {
    return null;
  }

  const ones = first % 10;
  if (ones === 0) {
    return null;
  }

  const gap = 10 - ones;
  if (gap <= 0 || gap > second) {
    return null;
  }

  const crossesTen =
    Math.floor((first + second) / 10) > Math.floor(first / 10);
  if (!crossesTen) {
    return null;
  }

  return {
    gap,
    remainder: second - gap,
    roundedFirst: first + gap,
  };
}

function ColoredValue({
  value,
  color,
}: {
  value: number;
  color: "a" | "b" | "neutral";
}) {
  const className =
    color === "a"
      ? `${ORIGIN_STYLE.first.text} font-semibold`
      : color === "b"
        ? `${ORIGIN_STYLE.second.text} font-semibold`
        : "font-semibold text-foreground";

  return <span className={`tabular-nums ${className}`}>{value}</span>;
}

function getGroupCellColor(groupIndex: number): string {
  return GROUP_CELL_COLORS[groupIndex % GROUP_CELL_COLORS.length];
}

function BridgeToTenAddition({
  first,
  second,
  total,
}: {
  first: number;
  second: number;
  total: number;
}) {
  const bridge = getBridgeToTen(first, second);

  if (!bridge) {
    return (
      <p className="text-sm font-semibold tabular-nums">
        <ColoredValue value={first} color="a" /> +{" "}
        <ColoredValue value={second} color="b" /> = {total}
      </p>
    );
  }

  return (
    <div className="space-y-1">
      <p className="text-sm tabular-nums">
        <ColoredValue value={first} color="a" /> +{" "}
        <ColoredValue value={second} color="b" />
      </p>
      <p className="text-sm tabular-nums">
        <ColoredValue value={first} color="a" /> +{" "}
        <ColoredValue value={bridge.gap} color="b" />
        {bridge.remainder > 0 && (
          <>
            {" "}
            + <ColoredValue value={bridge.remainder} color="b" />
          </>
        )}
      </p>
      <p className="text-sm tabular-nums">
        <ColoredValue value={bridge.roundedFirst} color="neutral" />
        {bridge.remainder > 0 && (
          <>
            {" "}
            + <ColoredValue value={bridge.remainder} color="b" />
          </>
        )}
      </p>
      <p className="text-sm font-semibold tabular-nums">= {total}</p>
    </div>
  );
}

function ChunkSubtotalAddition({ subtotals }: { subtotals: number[] }) {
  const total = subtotals.reduce((sum, value) => sum + value, 0);

  if (subtotals.length < 2) {
    return (
      <p className="text-sm font-semibold tabular-nums">
        <ColoredValue value={subtotals[0] ?? total} color="neutral" /> = {total}
      </p>
    );
  }

  if (subtotals.length === 2) {
    const [first, second] = subtotals;
    const bridge = getBridgeToTen(first, second);

    return (
      <div className="space-y-1.5">
        <p className="text-sm text-foreground/70">Sečteme části:</p>
        {bridge ? (
          <BridgeToTenAddition first={first} second={second} total={total} />
        ) : (
          <p className="text-sm font-semibold tabular-nums">
            <ColoredValue value={first} color="a" /> +{" "}
            <ColoredValue value={second} color="b" /> = {total}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-1.5">
      <p className="text-sm text-foreground/70">Sečteme části:</p>
      <ul className="space-y-0.5 text-sm tabular-nums">
        {subtotals.map((value, index) => (
          <li key={`${value}-${index}`}>
            Část {index + 1}: <ColoredValue value={value} color="neutral" />
          </li>
        ))}
      </ul>
      <p className="text-sm font-semibold tabular-nums">
        {subtotals.map((value, index) => (
          <span key={`sum-${value}-${index}`}>
            {index > 0 && " + "}
            <ColoredValue value={value} color="neutral" />
          </span>
        ))}{" "}
        = {total}
      </p>
    </div>
  );
}

type MultiplicationVisualMode = "board" | "text";

type BoardCell = {
  groupIndex: number;
  groupLabel: string;
  isGroupEnd: boolean;
  runningTotal: number;
};

function buildBoardCells(rows: number, cols: number): BoardCell[] {
  const cells: BoardCell[] = [];

  for (let groupIndex = 0; groupIndex < rows; groupIndex += 1) {
    const groupLabel = `Skupina ${groupIndex + 1}`;
    const runningTotal = (groupIndex + 1) * cols;

    for (let position = 0; position < cols; position += 1) {
      cells.push({
        groupIndex,
        groupLabel,
        isGroupEnd: position === cols - 1,
        runningTotal,
      });
    }
  }

  return cells;
}

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
    product > MULT_TEXT_PRODUCT ||
    rows > MULT_TEXT_FACTOR ||
    cols > MULT_TEXT_FACTOR
  ) {
    return "text";
  }

  if (product > MULT_BOARD_MAX_PRODUCT) {
    return "text";
  }

  return "board";
}

function formatCzechTens(count: number): string {
  if (count === 1) {
    return "desítku";
  }
  if (count >= 2 && count <= 4) {
    return `${count} desítky`;
  }
  return `${count} desítek`;
}

function formatCzechHundreds(count: number): string {
  if (count === 1) {
    return "stovku";
  }
  if (count >= 2 && count <= 4) {
    return `${count} stovky`;
  }
  return `${count} stovek`;
}

function getSymbolicMultiplicationSteps(
  rows: number,
  cols: number,
): string[] {
  const product = rows * cols;
  const steps = [`${rows} × ${cols}`];

  if (cols >= 100 && cols % 100 === 0) {
    const hundreds = cols / 100;
    const partial = rows * hundreds;
    steps.push(`${rows} × ${formatCzechHundreds(hundreds)}`);
    steps.push(`${rows} × ${hundreds} = ${partial}`);
    steps.push(`${partial} stovek = ${product}`);
    return steps;
  }

  if (cols >= 10 && cols % 10 === 0) {
    const tens = cols / 10;
    const partial = rows * tens;
    steps.push(`${rows} × ${formatCzechTens(tens)}`);
    steps.push(`${rows} × ${tens} = ${partial}`);
    steps.push(`${partial} desítek = ${product}`);
    return steps;
  }

  if (rows >= 100 && rows % 100 === 0) {
    const hundreds = rows / 100;
    const partial = hundreds * cols;
    steps.push(`${formatCzechHundreds(hundreds)} × ${cols}`);
    steps.push(`${hundreds} × ${cols} = ${partial}`);
    steps.push(`${partial} stovek = ${product}`);
    return steps;
  }

  if (rows >= 10 && rows % 10 === 0) {
    const tens = rows / 10;
    const partial = tens * cols;
    steps.push(`${formatCzechTens(tens)} × ${cols}`);
    steps.push(`${tens} × ${cols} = ${partial}`);
    steps.push(`${partial} desítek = ${product}`);
    return steps;
  }

  const rowChunks = getMultiplicationChunks(rows);
  if (rowChunks.length > 1) {
    steps.push("Rozdělíme si to na části.");
    const parts = rowChunks.map(
      (chunkRows) => `${chunkRows} × ${cols} = ${chunkRows * cols}`,
    );
    steps.push(parts.join(", "));
    const subtotals = rowChunks.map((chunkRows) => chunkRows * cols);
    steps.push(`${subtotals.join(" + ")} = ${product}`);
    return steps;
  }

  const colTens = Math.floor(cols / 10) * 10;
  const colRest = cols - colTens;
  if (colTens > 0 && colRest > 0) {
    steps.push("Rozdělíme si to na části.");
    steps.push(
      `${rows} × ${colTens} + ${rows} × ${colRest} = ${rows * colTens} + ${rows * colRest}`,
    );
    steps.push(`${rows * colTens} + ${rows * colRest} = ${product}`);
    return steps;
  }

  steps.push(`= ${product}`);
  return steps;
}

function MultiplicationCumulativeBoard({
  rows,
  cols,
}: {
  rows: number;
  cols: number;
}) {
  const cells = buildBoardCells(rows, cols);
  const runningTotals = Array.from({ length: rows }, (_, index) => (index + 1) * cols);

  return (
    <div className="space-y-2">
      <p className="text-sm text-foreground/70">
        {rows} skupin po {cols} — v posledním políčku každé skupiny je mezisoučet.
      </p>
      <div
        className="grid max-w-full gap-0.5"
        style={{ gridTemplateColumns: `repeat(${BOARD_COLUMNS}, minmax(0, 1fr))` }}
        role="img"
        aria-label={`${rows} skupin po ${cols}, mezisoučty ${runningTotals.join(", ")}`}
      >
        {cells.map((cell, index) => {
          const colorClass = getGroupCellColor(cell.groupIndex);

          return (
            <div
              key={`${cell.groupIndex}-${index}`}
              title={cell.groupLabel}
              className={`flex h-7 min-w-0 items-center justify-center rounded-sm border text-[0.7rem] font-semibold leading-none tabular-nums sm:text-xs ${colorClass} ${
                cell.isGroupEnd ? "text-foreground" : "text-foreground/25"
              }`}
              aria-hidden={!cell.isGroupEnd}
            >
              {cell.isGroupEnd ? cell.runningTotal : "·"}
            </div>
          );
        })}
      </div>
      <p className="text-xs text-foreground/60">
        Mezisoučty: {runningTotals.join(", ")}
      </p>
    </div>
  );
}

function MultiplicationChunkSteps({
  rows,
  cols,
}: {
  rows: number;
  cols: number;
}) {
  const chunks = getMultiplicationChunks(rows);
  const subtotals = chunks.map((chunkRows) => chunkRows * cols);
  const product = rows * cols;

  if (chunks.length < 2) {
    return null;
  }

  return (
    <div className="space-y-2 border-t border-foreground/10 pt-3">
      <p className="text-sm text-foreground/70">Rozdělíme si to na části:</p>
      <ul className="space-y-1 text-sm tabular-nums">
        {chunks.map((chunkRows, index) => {
          const origin = getChunkOrigin(index, chunks.length);
          const style = ORIGIN_STYLE[origin];

          return (
            <li key={`${chunkRows}-${index}`}>
              <span className={style.text}>
                {chunkRows} × {cols} = {subtotals[index]}
              </span>
            </li>
          );
        })}
      </ul>
      <ChunkSubtotalAddition subtotals={subtotals} />
      <p className="text-sm font-medium tabular-nums">
        Celkem {rows} × {cols} = {product}
      </p>
    </div>
  );
}

function MultiplicationBoardVisual({
  rows,
  cols,
}: {
  rows: number;
  cols: number;
}) {
  const product = rows * cols;

  return (
    <figure className="space-y-3">
      <figcaption className="sr-only">
        {rows} krát {cols}, postupně {cols}, {cols * 2}, až {product}
      </figcaption>
      <MultiplicationCumulativeBoard rows={rows} cols={cols} />
      <MultiplicationChunkSteps rows={rows} cols={cols} />
      {getMultiplicationChunks(rows).length < 2 && (
        <p className="text-sm font-medium tabular-nums">
          Celkem {rows} × {cols} = {product}
        </p>
      )}
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
  const steps = getSymbolicMultiplicationSteps(rows, cols);
  const rowChunks = getMultiplicationChunks(rows);
  const subtotals = rowChunks.map((chunkRows) => chunkRows * cols);
  const showBridge =
    rowChunks.length === 2 &&
    steps.some((step) => step.startsWith("Rozdělíme"));

  return (
    <figure className="space-y-2">
      <figcaption className="sr-only">
        {rows} krát {cols} je {product}
      </figcaption>
      <p className="text-sm text-foreground/70">
        U velkých čísel už je lepší počítat rozkladem.
      </p>
      <ol className="space-y-1 text-sm tabular-nums">
        {steps.map((step, index) => (
          <li key={`${step}-${index}`}>{step}</li>
        ))}
      </ol>
      {showBridge && (
        <div className="space-y-1.5 border-t border-foreground/10 pt-2">
          <p className="text-sm text-foreground/70">Sečteme části:</p>
          <BridgeToTenAddition
            first={subtotals[0] ?? 0}
            second={subtotals[1] ?? 0}
            total={product}
          />
        </div>
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
    case "board":
      return <MultiplicationBoardVisual rows={rows} cols={cols} />;
    case "text":
      return <MultiplicationTextVisual rows={rows} cols={cols} />;
  }
}

export function MultiplicationExplanationVisual({
  context,
}: {
  context: MathExplanationContext;
}) {
  const { exercise, numbers } = context;
  const { a, b } = numbers;
  return <MultiplicationVisual exercise={exercise} a={a} b={b} />;
}
