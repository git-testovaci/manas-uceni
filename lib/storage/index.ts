export { STORAGE_KEYS, STORAGE_VERSION } from "@/lib/storage/keys";

export {
  createEnvelope,
  getBrowserStorage,
  readEnvelope,
  removeStorageItem,
  safeJsonParse,
  type StorageLike,
  writeEnvelope,
} from "@/lib/storage/safeStorage";

export {
  DEFAULT_SETTINGS,
  getSettings,
  resetSettings,
  saveSettings,
} from "@/lib/storage/settings";

export {
  DEFAULT_REVIEW_STATE,
  getReviewState,
  getReviewStateMap,
  removeReviewState,
  resetReviewState,
  saveReviewState,
  saveReviewStateMap,
} from "@/lib/storage/reviewState";

export {
  addPracticeHistoryEntry,
  DEFAULT_PRACTICE_HISTORY,
  getPracticeHistory,
  MAX_HISTORY_ENTRIES,
  resetPracticeHistory,
  savePracticeHistory,
} from "@/lib/storage/practiceHistory";
