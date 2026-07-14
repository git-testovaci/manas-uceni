import {
  selectReviewExercise,
  shouldOfferReviewInsertion,
} from "@/lib/review/scheduler";
import type { PracticeItem, ReviewStateMap } from "@/types";

export type SessionDisplayCounts = Record<string, number>;

export type PracticeItemSelection<T extends PracticeItem> = {
  item: T;
  isReview: boolean;
  sessionDisplayCounts: SessionDisplayCounts;
  reviewMap?: ReviewStateMap;
};

function incrementSessionDisplayCount(
  counts: SessionDisplayCounts,
  itemId: string,
): SessionDisplayCounts {
  return {
    ...counts,
    [itemId]: (counts[itemId] ?? 0) + 1,
  };
}

function getSessionDisplayCount(
  counts: SessionDisplayCounts,
  itemId: string,
): number {
  return counts[itemId] ?? 0;
}

function pickFromLowestCountPool<T extends PracticeItem>(
  candidates: T[],
  lastItemId?: string,
): T | null {
  if (candidates.length === 0) {
    return null;
  }

  if (candidates.length === 1) {
    return candidates[0] ?? null;
  }

  if (lastItemId) {
    const withoutLast = candidates.filter((item) => item.id !== lastItemId);
    if (withoutLast.length > 0) {
      return withoutLast[0] ?? null;
    }
  }

  return candidates[0] ?? null;
}

function pickNormalPracticeItem<T extends PracticeItem>(
  candidates: T[],
  sessionDisplayCounts: SessionDisplayCounts,
  lastItemId?: string,
): T | null {
  if (candidates.length === 0) {
    return null;
  }

  const unshown = candidates.filter(
    (item) => getSessionDisplayCount(sessionDisplayCounts, item.id) === 0,
  );
  if (unshown.length > 0) {
    return pickFromLowestCountPool(unshown, lastItemId);
  }

  const minCount = Math.min(
    ...candidates.map((item) =>
      getSessionDisplayCount(sessionDisplayCounts, item.id),
    ),
  );
  const lowest = candidates.filter(
    (item) => getSessionDisplayCount(sessionDisplayCounts, item.id) === minCount,
  );

  return pickFromLowestCountPool(lowest, lastItemId);
}

function shouldAllowSessionRepeats<T extends PracticeItem>(
  candidates: T[],
  questionCount?: number,
): boolean {
  if (!questionCount || questionCount <= 0) {
    return true;
  }

  return candidates.length < questionCount;
}

export function selectNextPracticeItem<T extends PracticeItem>(params: {
  candidates: T[];
  reviewMap: ReviewStateMap;
  sessionDisplayCounts: SessionDisplayCounts;
  normalAnswersSinceSessionStart: number;
  reviewsInsertedSinceSessionStart: number;
  lastItemId?: string;
  questionCount?: number;
}): PracticeItemSelection<T> | null {
  const {
    candidates,
    reviewMap,
    sessionDisplayCounts,
    normalAnswersSinceSessionStart,
    reviewsInsertedSinceSessionStart,
    lastItemId,
    questionCount,
  } = params;

  if (candidates.length === 0) {
    return null;
  }

  if (
    shouldOfferReviewInsertion(
      normalAnswersSinceSessionStart,
      reviewsInsertedSinceSessionStart,
    )
  ) {
    const reviewSelection = selectReviewExercise({
      candidates,
      reviewMap,
      normalAnswersSinceSessionStart,
    });

    if (reviewSelection) {
      return {
        item: reviewSelection.exercise,
        isReview: true,
        sessionDisplayCounts: incrementSessionDisplayCount(
          sessionDisplayCounts,
          reviewSelection.exercise.id,
        ),
        reviewMap: reviewSelection.reviewMap,
      };
    }
  }

  const allowRepeats = shouldAllowSessionRepeats(candidates, questionCount);
  const selectionCandidates = allowRepeats
    ? candidates
    : candidates.filter(
        (item) => getSessionDisplayCount(sessionDisplayCounts, item.id) === 0,
      );

  if (selectionCandidates.length === 0) {
    return null;
  }

  const item = pickNormalPracticeItem(
    selectionCandidates,
    sessionDisplayCounts,
    lastItemId,
  );

  if (!item) {
    return null;
  }

  return {
    item,
    isReview: false,
    sessionDisplayCounts: incrementSessionDisplayCount(
      sessionDisplayCounts,
      item.id,
    ),
  };
}
