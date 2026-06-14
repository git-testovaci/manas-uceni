import {
  getEligibleBucketPriority,
  isReviewOpportunity,
  selectReviewExercise,
  shouldOfferReviewInsertion,
} from "@/lib/review/scheduler";
import type { PracticeItem, ReviewState, ReviewStateMap } from "@/types";

/**
 * Legacy timing helpers kept for backward compatibility.
 * Session selection should use the universal bucket scheduler instead.
 */
export function isReviewDue(state: ReviewState): boolean {
  if (state.status === "mastered") {
    return false;
  }

  return (
    state.wrongCount > 0 ||
    state.status === "weak" ||
    state.status === "improving"
  );
}

export function getReviewPriority(state?: ReviewState): number {
  if (!state || state.status === "new") {
    return 3;
  }

  if (state.status === "mastered") {
    return 4;
  }

  switch (state.status) {
    case "weak":
      return 0;
    case "improving":
      return 1;
    case "learning":
      return 2;
    default:
      return 3;
  }
}

export function sortItemsForReview<T extends PracticeItem>(
  items: T[],
  reviewMap: ReviewStateMap,
): T[] {
  return [...items].sort((a, b) => {
    const priorityDiff =
      getReviewPriority(reviewMap[a.id]) -
      getReviewPriority(reviewMap[b.id]);

    if (priorityDiff !== 0) {
      return priorityDiff;
    }

    return a.id.localeCompare(b.id);
  });
}

export function getDueReviewItems<T extends PracticeItem>(
  items: T[],
  reviewMap: ReviewStateMap,
): T[] {
  return items.filter((item) => {
    const state = reviewMap[item.id];
    if (!state) {
      return false;
    }

    return isReviewDue(state);
  });
}

export {
  getEligibleBucketPriority,
  isReviewOpportunity,
  selectReviewExercise,
  shouldOfferReviewInsertion,
};
