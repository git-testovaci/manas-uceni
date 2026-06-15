import type { BasicShapeId } from "@/types";

export type ShapeOption = {
  id: BasicShapeId;
  label: string;
};

export const BASIC_SHAPE_IDS = [
  "circle",
  "square",
  "triangle",
  "rectangle",
] as const satisfies readonly BasicShapeId[];

const SHAPE_DEFINITIONS: Record<
  BasicShapeId,
  { label: string; explanation: string }
> = {
  circle: {
    label: "kruh",
    explanation:
      "Tohle je kruh. Je celý kulatý a nemá žádné rohy.",
  },
  square: {
    label: "čtverec",
    explanation:
      "Tohle je čtverec. Má čtyři stejně dlouhé strany a čtyři rohy.",
  },
  triangle: {
    label: "trojúhelník",
    explanation:
      "Tohle je trojúhelník. Má tři strany a tři rohy.",
  },
  rectangle: {
    label: "obdélník",
    explanation:
      "Tohle je obdélník. Má čtyři rohy. Protilehlé strany jsou stejně dlouhé.",
  },
};

export function isBasicShapeId(value: string): value is BasicShapeId {
  return BASIC_SHAPE_IDS.includes(value as BasicShapeId);
}

export function getShapeLabel(shapeId: BasicShapeId): string {
  return SHAPE_DEFINITIONS[shapeId].label;
}

export function getShapeExplanation(shapeId: BasicShapeId): string {
  return SHAPE_DEFINITIONS[shapeId].explanation;
}

export function getShapeIdentifyOptions(
  shapeIds: readonly BasicShapeId[] = BASIC_SHAPE_IDS,
): ShapeOption[] {
  return shapeIds.map((id) => ({
    id,
    label: getShapeLabel(id),
  }));
}

export function formatShapeAnswerLabel(answer: string): string {
  return isBasicShapeId(answer) ? getShapeLabel(answer) : answer;
}
