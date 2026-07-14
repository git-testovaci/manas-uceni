/**
 * Stable practice question ids: {subjectId}:{unitId}:{lessonId}:p{order}
 * - lowercase ASCII slugs only
 * - order is zero-padded (01, 02, …)
 * - no Date.now(), no random UUIDs
 * - keep the same id when improving wording if question identity is unchanged
 */
export function buildStudyPracticeItemId(
  subjectId: string,
  unitId: string,
  lessonId: string,
  order: number,
): string {
  const orderPart = String(order).padStart(2, "0");
  return `${subjectId}:${unitId}:${lessonId}:p${orderPart}`;
}

export type ParsedStudyItemId = {
  subjectId: string;
  unitId: string;
  lessonId: string;
  kind: "practice" | "exam";
  order: number;
};

const STUDY_ITEM_ID_PATTERN =
  /^([^:]+):([^:]+):([^:]+):(p|e)(\d{2})$/;

export function parseStudyItemId(id: string): ParsedStudyItemId | null {
  const match = STUDY_ITEM_ID_PATTERN.exec(id);
  if (!match) {
    return null;
  }

  const [, subjectId, unitId, lessonId, kindCode, orderPart] = match;
  const order = Number.parseInt(orderPart, 10);

  if (!Number.isFinite(order) || order < 1) {
    return null;
  }

  return {
    subjectId: subjectId!,
    unitId: unitId!,
    lessonId: lessonId!,
    kind: kindCode === "e" ? "exam" : "practice",
    order,
  };
}
