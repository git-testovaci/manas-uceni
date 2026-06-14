const COUNT_DOTS_ROW_SIZE = 5;

function getCountDotRowSizes(count: number): number[] {
  const rows: number[] = [];
  let remaining = count;

  while (remaining > 0) {
    const rowCount = Math.min(remaining, COUNT_DOTS_ROW_SIZE);
    rows.push(rowCount);
    remaining -= rowCount;
  }

  return rows;
}

const SIZE_STYLES = {
  sm: {
    dot: "inline-block h-3.5 w-3.5 rounded-full bg-math sm:h-4 sm:w-4",
    rowGap: "gap-3 sm:gap-4",
    colGap: "gap-3 sm:gap-4",
  },
  md: {
    dot: "inline-block h-4 w-4 rounded-full bg-math sm:h-5 sm:w-5",
    rowGap: "gap-2 sm:gap-3",
    colGap: "gap-2 sm:gap-3",
  },
  lg: {
    dot: "inline-block h-6 w-6 rounded-full bg-math sm:h-8 sm:w-8",
    rowGap: "gap-3 sm:gap-4",
    colGap: "gap-3 sm:gap-4",
  },
} as const;

export type CountDotsVisualSize = keyof typeof SIZE_STYLES;

type CountDotsVisualProps = {
  count: number;
  size?: CountDotsVisualSize;
  className?: string;
  ariaHidden?: boolean;
};

export function CountDotsVisual({
  count,
  size = "lg",
  className = "",
  ariaHidden = false,
}: CountDotsVisualProps) {
  const styles = SIZE_STYLES[size];
  const rows = getCountDotRowSizes(count);

  return (
    <div
      className={`flex flex-col ${styles.colGap} ${className}`.trim()}
      aria-hidden={ariaHidden || undefined}
    >
      {rows.map((rowCount, rowIndex) => (
        <div
          key={rowIndex}
          className={`flex flex-wrap items-center ${styles.rowGap}`}
        >
          {Array.from({ length: rowCount }, (_, index) => (
            <span key={index} className={styles.dot} />
          ))}
        </div>
      ))}
    </div>
  );
}
