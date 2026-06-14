import { formatClockTime, formatClockTimeLabel } from "@/lib/math/time";

export type ClockFaceSize = "sm" | "md" | "lg";

type ClockFaceProps = {
  hour: number;
  minute: number;
  size?: ClockFaceSize;
};

const CLOCK_SIZE_PX: Record<ClockFaceSize, number> = {
  sm: 96,
  md: 128,
  lg: 168,
};

export function ClockFace({ hour, minute, size = "lg" }: ClockFaceProps) {
  const diameter = CLOCK_SIZE_PX[size];
  const hourAngle = (hour % 12) * 30 + minute * 0.5;
  const minuteAngle = minute * 6;
  const hourHandHeight = diameter * 0.28;
  const minuteHandHeight = diameter * 0.38;

  return (
    <div
      className="relative rounded-full border-4 border-foreground/20 bg-white shadow-sm"
      style={{ width: diameter, height: diameter }}
      role="img"
      aria-label={`Hodiny ukazují ${formatClockTimeLabel(hour, minute)}, ${formatClockTime(hour, minute)}`}
    >
      {Array.from({ length: 12 }, (_, index) => {
        const tickHour = index + 1;
        const angle = tickHour * 30;
        return (
          <span
            key={tickHour}
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 text-[10px] font-semibold text-foreground/70 sm:text-xs"
            style={{
              transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${diameter * 0.38}px) rotate(-${angle}deg)`,
            }}
          >
            {tickHour}
          </span>
        );
      })}

      <span
        aria-hidden="true"
        className="absolute left-1/2 bottom-1/2 w-1.5 rounded-full bg-foreground"
        style={{
          height: hourHandHeight,
          transformOrigin: "bottom center",
          transform: `translateX(-50%) rotate(${hourAngle}deg)`,
        }}
      />
      <span
        aria-hidden="true"
        className="absolute left-1/2 bottom-1/2 w-1 rounded-full bg-math"
        style={{
          height: minuteHandHeight,
          transformOrigin: "bottom center",
          transform: `translateX(-50%) rotate(${minuteAngle}deg)`,
        }}
      />
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground"
      />
    </div>
  );
}
