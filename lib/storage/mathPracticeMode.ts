import { STORAGE_KEYS } from "@/lib/storage/keys";
import {
  readEnvelope,
  removeStorageItem,
  type StorageLike,
  writeEnvelope,
} from "@/lib/storage/safeStorage";

export type MathPracticeSetupMode = "grade" | "custom";

export const DEFAULT_MATH_PRACTICE_MODE: MathPracticeSetupMode = "grade";

export function getMathPracticeMode(
  storage?: StorageLike | null,
): MathPracticeSetupMode {
  const mode = readEnvelope(
    STORAGE_KEYS.mathPracticeMode,
    DEFAULT_MATH_PRACTICE_MODE,
    storage,
  );

  if (mode === "grade" || mode === "custom") {
    return mode;
  }

  return DEFAULT_MATH_PRACTICE_MODE;
}

export function saveMathPracticeMode(
  mode: MathPracticeSetupMode,
  storage?: StorageLike | null,
): boolean {
  return writeEnvelope(STORAGE_KEYS.mathPracticeMode, mode, storage);
}

export function resetMathPracticeMode(storage?: StorageLike | null): boolean {
  return removeStorageItem(STORAGE_KEYS.mathPracticeMode, storage);
}
