import type { ReviewBucket, ReviewState, ReviewStateMap } from "@/types";

export const REVIEW_BUCKETS: ReviewBucket[] = [5, 10, 25, 50];
export const REQUIRED_CORRECT_PER_BUCKET = 5;

export function reviewStepToBucket(reviewStep: number): ReviewBucket {
  if (reviewStep >= 3) {
    return 50;
  }

  if (reviewStep === 2) {
    return 25;
  }

  if (reviewStep === 1) {
    return 10;
  }

  return 5;
}

export function reviewBucketToStep(bucket: ReviewBucket): number {
  switch (bucket) {
    case 5:
      return 0;
    case 10:
      return 1;
    case 25:
      return 2;
    case 50:
      return 3;
  }
}

export function getNextReviewBucket(bucket: ReviewBucket): ReviewBucket | "mastered" {
  switch (bucket) {
    case 5:
      return 10;
    case 10:
      return 25;
    case 25:
      return 50;
    case 50:
      return "mastered";
  }
}

export function deriveReviewBucket(state: ReviewState): ReviewBucket | undefined {
  if (state.reviewBucket) {
    return state.reviewBucket;
  }

  if (state.status === "mastered") {
    return undefined;
  }

  if (
    state.wrongCount > 0 ||
    state.status === "weak" ||
    state.status === "improving"
  ) {
    return reviewStepToBucket(state.reviewStep ?? 0);
  }

  return undefined;
}

export function isReviewBucketEligible(state: ReviewState): boolean {
  if (state.status === "mastered" || state.status === "new") {
    return false;
  }

  const bucket = deriveReviewBucket(state);
  if (!bucket) {
    return false;
  }

  return (
    state.wrongCount > 0 ||
    state.status === "weak" ||
    state.status === "improving"
  );
}

export function getBucketQueueItems(
  reviewMap: ReviewStateMap,
  bucket: ReviewBucket,
): ReviewState[] {
  return Object.values(reviewMap)
    .filter(
      (state) =>
        isReviewBucketEligible(state) && deriveReviewBucket(state) === bucket,
    )
    .sort((left, right) => {
      const orderDiff =
        (left.reviewQueueOrder ?? Number.MAX_SAFE_INTEGER) -
        (right.reviewQueueOrder ?? Number.MAX_SAFE_INTEGER);

      if (orderDiff !== 0) {
        return orderDiff;
      }

      return left.itemId.localeCompare(right.itemId);
    });
}

export function getNextReviewQueueOrder(
  reviewMap: ReviewStateMap,
  bucket: ReviewBucket,
): number {
  const orders = getBucketQueueItems(reviewMap, bucket).map(
    (state) => state.reviewQueueOrder ?? 0,
  );

  if (orders.length === 0) {
    return 1;
  }

  return Math.max(...orders) + 1;
}

export function moveItemToBucketEnd(
  reviewMap: ReviewStateMap,
  itemId: string,
  bucket: ReviewBucket,
): ReviewStateMap {
  const current = reviewMap[itemId];
  if (!current) {
    return reviewMap;
  }

  return {
    ...reviewMap,
    [itemId]: {
      ...current,
      reviewBucket: bucket,
      reviewStep: reviewBucketToStep(bucket),
      reviewQueueOrder: getNextReviewQueueOrder(reviewMap, bucket),
    },
  };
}

export function isInReviewFlow(state: ReviewState): boolean {
  if (state.status === "mastered" || state.status === "new") {
    return false;
  }

  if (state.wrongCount <= 0) {
    return false;
  }

  if (state.status !== "weak" && state.status !== "improving") {
    return false;
  }

  return deriveReviewBucket(state) !== undefined;
}

export function applyReviewStateQueuePlacement(
  reviewMap: ReviewStateMap,
  updatedState: ReviewState,
  isCorrect: boolean,
): ReviewStateMap {
  const mapWithState = {
    ...reviewMap,
    [updatedState.itemId]: updatedState,
  };

  if (!isCorrect) {
    return moveItemToBucketEnd(mapWithState, updatedState.itemId, 5);
  }

  if (isInReviewFlow(updatedState)) {
    const bucket = updatedState.reviewBucket ?? deriveReviewBucket(updatedState) ?? 5;
    return moveItemToBucketEnd(mapWithState, updatedState.itemId, bucket);
  }

  return mapWithState;
}
