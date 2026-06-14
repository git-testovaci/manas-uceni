import {
  deriveReviewBucket,
  getBucketQueueItems,
  getNextReviewQueueOrder,
  reviewBucketToStep,
  REVIEW_BUCKETS,
} from "@/lib/review/buckets";
import type { ReviewState, ReviewStateMap } from "@/types";

export function normalizeReviewState(state: ReviewState): ReviewState {
  const reviewBucket = deriveReviewBucket(state);

  if (!reviewBucket) {
    return {
      ...state,
      reviewBucket: undefined,
    };
  }

  return {
    ...state,
    reviewBucket,
    reviewStep: reviewBucketToStep(reviewBucket),
  };
}

export function normalizeReviewStateMap(
  reviewMap: ReviewStateMap,
): ReviewStateMap {
  const normalized = Object.fromEntries(
    Object.entries(reviewMap).map(([itemId, state]) => [
      itemId,
      normalizeReviewState(state),
    ]),
  ) as ReviewStateMap;

  const nextMap = { ...normalized };

  for (const bucket of REVIEW_BUCKETS) {
    const missingOrder = getBucketQueueItems(nextMap, bucket).filter(
      (state) => state.reviewQueueOrder === undefined,
    );

    if (missingOrder.length === 0) {
      continue;
    }

    const sorted = [...missingOrder].sort((left, right) =>
      left.itemId.localeCompare(right.itemId),
    );

    for (const state of sorted) {
      nextMap[state.itemId] = {
        ...nextMap[state.itemId]!,
        reviewQueueOrder: getNextReviewQueueOrder(nextMap, bucket),
      };
    }
  }

  return nextMap;
}
