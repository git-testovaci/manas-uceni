import { createDefaultMathPracticeConfig } from "@/lib/math/mathDefaults";
import { STORAGE_KEYS } from "@/lib/storage/keys";
import {
  readEnvelope,
  removeStorageItem,
  type StorageLike,
  writeEnvelope,
} from "@/lib/storage/safeStorage";
import type { MathPracticeConfig } from "@/types";

export function getMathPracticeConfig(
  storage?: StorageLike | null,
): MathPracticeConfig {
  const config = readEnvelope(
    STORAGE_KEYS.mathPracticeConfig,
    createDefaultMathPracticeConfig(),
    storage,
  );

  if (
    typeof config !== "object" ||
    config === null ||
    !Array.isArray(config.enabledTopics)
  ) {
    return createDefaultMathPracticeConfig();
  }

  return config;
}

export function saveMathPracticeConfig(
  config: MathPracticeConfig,
  storage?: StorageLike | null,
): boolean {
  return writeEnvelope(STORAGE_KEYS.mathPracticeConfig, config, storage);
}

export function resetMathPracticeConfig(storage?: StorageLike | null): boolean {
  return removeStorageItem(STORAGE_KEYS.mathPracticeConfig, storage);
}
