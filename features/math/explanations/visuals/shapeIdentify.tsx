import { BasicShapeVisual } from "@/features/math/visuals";
import type { MathExplanationContext } from "@/lib/math/explanations";
import type { BasicShapeId } from "@/types";

export function ShapeIdentifyExplanationVisual({
  context,
}: {
  context: MathExplanationContext;
}) {
  const shapeId = context.exercise.shapeId as BasicShapeId | undefined;

  if (!shapeId) {
    return null;
  }

  return (
    <figure className="space-y-3">
      <BasicShapeVisual shapeId={shapeId} size="md" />
    </figure>
  );
}
