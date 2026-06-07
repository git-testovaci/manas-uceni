import type { PracticeItem, ReviewState, ReviewStateMap } from "@/types";

export function isReviewDue(
  state: ReviewState,
  currentQuestionNumber: number,
): boolean {
  if (state.status === "mastered" && state.nextReviewQuestionNumber === undefined) {
    return false;
  }

  if (state.nextReviewQuestionNumber === undefined) {
    return false;
  }

  return currentQuestionNumber >= state.nextReviewQuestionNumber;
}

export function getReviewPriority(
  state?: ReviewState,
  currentQuestionNumber?: number,
): number {
  if (!state || state.status === "new") {
    return 3;
  }

  if (state.status === "mastered") {
    return 4;
  }

  const questionNumber = currentQuestionNumber ?? 0;
  const due = isReviewDue(state, questionNumber);

  if (!due) {
    return 3;
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
  currentQuestionNumber: number,
): T[] {
  return [...items].sort((a, b) => {
    const priorityDiff =
      getReviewPriority(reviewMap[a.id], currentQuestionNumber) -
      getReviewPriority(reviewMap[b.id], currentQuestionNumber);

    if (priorityDiff !== 0) {
      return priorityDiff;
    }

    return a.id.localeCompare(b.id);
  });
}

export function getDueReviewItems<T extends PracticeItem>(
  items: T[],
  reviewMap: ReviewStateMap,
  currentQuestionNumber: number,
): T[] {
  return items.filter((item) => {
    const state = reviewMap[item.id];
    if (!state) {
      return false;
    }

    return isReviewDue(state, currentQuestionNumber);
  });
}
