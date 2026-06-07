import { STORAGE_KEYS } from "@/lib/storage/keys";
import {
  readEnvelope,
  removeStorageItem,
  type StorageLike,
  writeEnvelope,
} from "@/lib/storage/safeStorage";
import type { SchoolGrade } from "@/types";

export type MathLessonSelection = {
  grade: SchoolGrade;
  lessonId?: string;
};

export const DEFAULT_MATH_LESSON_SELECTION: MathLessonSelection = {
  grade: 3,
};

const VALID_GRADES: SchoolGrade[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function isValidGrade(grade: unknown): grade is SchoolGrade {
  return (
    typeof grade === "number" &&
    Number.isInteger(grade) &&
    VALID_GRADES.includes(grade as SchoolGrade)
  );
}

function normalizeLessonSelection(selection: unknown): MathLessonSelection {
  if (typeof selection !== "object" || selection === null) {
    return DEFAULT_MATH_LESSON_SELECTION;
  }

  const value = selection as Partial<MathLessonSelection>;
  const grade = isValidGrade(value.grade)
    ? value.grade
    : DEFAULT_MATH_LESSON_SELECTION.grade;

  if (typeof value.lessonId !== "string" || value.lessonId.length === 0) {
    return { grade };
  }

  return {
    grade,
    lessonId: value.lessonId,
  };
}

export function getMathLessonSelection(
  storage?: StorageLike | null,
): MathLessonSelection {
  const selection = readEnvelope(
    STORAGE_KEYS.mathLessonSelection,
    DEFAULT_MATH_LESSON_SELECTION,
    storage,
  );

  return normalizeLessonSelection(selection);
}

export function saveMathLessonSelection(
  selection: MathLessonSelection,
  storage?: StorageLike | null,
): boolean {
  return writeEnvelope(
    STORAGE_KEYS.mathLessonSelection,
    normalizeLessonSelection(selection),
    storage,
  );
}

export function resetMathLessonSelection(storage?: StorageLike | null): boolean {
  return removeStorageItem(STORAGE_KEYS.mathLessonSelection, storage);
}
