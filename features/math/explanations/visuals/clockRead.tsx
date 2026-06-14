import { ClockFace } from "@/features/math/visuals";
import { formatClockTime } from "@/lib/math/time";
import type { MathExplanationContext } from "@/lib/math/explanations";

export function ClockReadExplanationVisual({
  context,
}: {
  context: MathExplanationContext;
}) {
  const { exercise } = context;
  const hour = exercise.clockHour ?? exercise.operandA;
  const minute = exercise.clockMinute ?? exercise.operandB;

  return (
    <figure className="space-y-3">
      <ClockFace hour={hour} minute={minute} size="md" />
      <p className="text-sm font-medium text-foreground/80">
        {formatClockTime(hour, minute)}
      </p>
    </figure>
  );
}
