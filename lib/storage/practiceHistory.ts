import { STORAGE_KEYS } from "@/lib/storage/keys";
import {
  readEnvelope,
  removeStorageItem,
  type StorageLike,
  writeEnvelope,
} from "@/lib/storage/safeStorage";
import type { PracticeHistory, PracticeHistoryEntry } from "@/types";

export const DEFAULT_PRACTICE_HISTORY: PracticeHistory = [];
export const MAX_HISTORY_ENTRIES = 100;

export function getPracticeHistory(
  storage?: StorageLike | null,
): PracticeHistory {
  const history = readEnvelope(
    STORAGE_KEYS.practiceHistory,
    DEFAULT_PRACTICE_HISTORY,
    storage,
  );

  if (!Array.isArray(history)) {
    return DEFAULT_PRACTICE_HISTORY;
  }

  return history;
}

export function savePracticeHistory(
  history: PracticeHistory,
  storage?: StorageLike | null,
): boolean {
  return writeEnvelope(STORAGE_KEYS.practiceHistory, history, storage);
}

export function addPracticeHistoryEntry(
  entry: PracticeHistoryEntry,
  storage?: StorageLike | null,
): boolean {
  const history = getPracticeHistory(storage);
  const nextHistory = [...history, entry].slice(-MAX_HISTORY_ENTRIES);
  return savePracticeHistory(nextHistory, storage);
}

export function resetPracticeHistory(storage?: StorageLike | null): boolean {
  return removeStorageItem(STORAGE_KEYS.practiceHistory, storage);
}
