const DEFAULT_DOT_CLASS =
  "inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-math/80";

type DotGridProps = {
  count: number;
  dotClassName?: string;
  className?: string;
  ariaHidden?: boolean;
};

export function DotGrid({
  count,
  dotClassName = DEFAULT_DOT_CLASS,
  className = "",
  ariaHidden = true,
}: DotGridProps) {
  return (
    <div
      className={`flex flex-wrap gap-1 ${className}`.trim()}
      aria-hidden={ariaHidden || undefined}
    >
      {Array.from({ length: count }, (_, index) => (
        <span key={index} aria-hidden="true" className={dotClassName} />
      ))}
    </div>
  );
}
