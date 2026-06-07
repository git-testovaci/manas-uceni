import { STORAGE_KEYS } from "@/lib/storage/keys";
import {
  readEnvelope,
  removeStorageItem,
  type StorageLike,
  writeEnvelope,
} from "@/lib/storage/safeStorage";
import type { ReviewState, ReviewStateMap } from "@/types";

export const DEFAULT_REVIEW_STATE: ReviewStateMap = {};

export function getReviewStateMap(
  storage?: StorageLike | null,
): ReviewStateMap {
  const reviewMap = readEnvelope(
    STORAGE_KEYS.reviewState,
    DEFAULT_REVIEW_STATE,
    storage,
  );

  if (typeof reviewMap !== "object" || reviewMap === null || Array.isArray(reviewMap)) {
    return DEFAULT_REVIEW_STATE;
  }

  return reviewMap;
}

export function saveReviewStateMap(
  reviewMap: ReviewStateMap,
  storage?: StorageLike | null,
): boolean {
  return writeEnvelope(STORAGE_KEYS.reviewState, reviewMap, storage);
}

export function getReviewState(
  itemId: string,
  storage?: StorageLike | null,
): ReviewState | undefined {
  return getReviewStateMap(storage)[itemId];
}

export function saveReviewState(
  state: ReviewState,
  storage?: StorageLike | null,
): boolean {
  const reviewMap = getReviewStateMap(storage);
  return saveReviewStateMap(
    {
      ...reviewMap,
      [state.itemId]: state,
    },
    storage,
  );
}

export function removeReviewState(
  itemId: string,
  storage?: StorageLike | null,
): boolean {
  const reviewMap = getReviewStateMap(storage);

  if (!(itemId in reviewMap)) {
    return true;
  }

  const nextMap = { ...reviewMap };
  delete nextMap[itemId];

  return saveReviewStateMap(nextMap, storage);
}

export function resetReviewState(storage?: StorageLike | null): boolean {
  return removeStorageItem(STORAGE_KEYS.reviewState, storage);
}
