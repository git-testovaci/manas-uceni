import {
  getBucketQueueItems,
  moveItemToBucketEnd,
  REVIEW_BUCKETS,
} from "@/lib/review/buckets";
import { normalizeReviewStateMap } from "@/lib/review/migration";
import type { PracticeItem, ReviewBucket, ReviewStateMap } from "@/types";

export function shouldOfferReviewInsertion(
  normalAnswersSinceSessionStart: number,
  reviewsInsertedSinceSessionStart: number,
): boolean {
  if (normalAnswersSinceSessionStart < 5) {
    return false;
  }

  const earnedOpportunities = Math.floor(normalAnswersSinceSessionStart / 5);
  return reviewsInsertedSinceSessionStart < earnedOpportunities;
}

export function getEligibleBucketPriority(
  normalAnswersSinceSessionStart: number,
): ReviewBucket[] {
  if (normalAnswersSinceSessionStart % 50 === 0) {
    return [50, 25, 10, 5];
  }

  if (normalAnswersSinceSessionStart % 25 === 0) {
    return [25, 10, 5];
  }

  if (normalAnswersSinceSessionStart % 10 === 0) {
    return [10, 5];
  }

  if (normalAnswersSinceSessionStart % 5 === 0) {
    return [5];
  }

  return [];
}

export function selectReviewExercise<T extends PracticeItem>(params: {
  candidates: T[];
  reviewMap: ReviewStateMap;
  normalAnswersSinceSessionStart: number;
}): {
  exercise: T;
  reviewMap: ReviewStateMap;
} | null {
  const bucketPriority = getEligibleBucketPriority(
    params.normalAnswersSinceSessionStart,
  );

  if (bucketPriority.length === 0) {
    return null;
  }

  const candidateIds = new Set(params.candidates.map((candidate) => candidate.id));
  const candidateById = new Map(
    params.candidates.map((candidate) => [candidate.id, candidate]),
  );
  let reviewMap = normalizeReviewStateMap(params.reviewMap);

  for (const bucket of bucketPriority) {
    const queue = getBucketQueueItems(reviewMap, bucket);

    for (const state of queue) {
      if (!candidateIds.has(state.itemId)) {
        continue;
      }

      const exercise = candidateById.get(state.itemId);
      if (!exercise) {
        continue;
      }

      reviewMap = moveItemToBucketEnd(reviewMap, state.itemId, bucket);
      return { exercise, reviewMap };
    }
  }

  return null;
}

export function isReviewOpportunity(
  normalAnswersSinceSessionStart: number,
  reviewsInsertedSinceSessionStart: number,
): boolean {
  if (!shouldOfferReviewInsertion(
    normalAnswersSinceSessionStart,
    reviewsInsertedSinceSessionStart,
  )) {
    return false;
  }

  return getEligibleBucketPriority(normalAnswersSinceSessionStart).length > 0;
}

export { REVIEW_BUCKETS };
