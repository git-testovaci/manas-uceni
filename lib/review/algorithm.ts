import {
  getNextReviewBucket,
  isInReviewFlow,
  REQUIRED_CORRECT_PER_BUCKET,
  reviewBucketToStep,
} from "@/lib/review/buckets";
import { normalizeReviewState } from "@/lib/review/migration";
import type {
  AnswerResult,
  PracticeItem,
  ReviewBucket,
  ReviewState,
  ReviewStatus,
} from "@/types";

export const REVIEW_INTERVALS = [5, 10, 25, 50] as const;
export const REQUIRED_CORRECT_PER_STEP = REQUIRED_CORRECT_PER_BUCKET;

export function createInitialReviewState(item: PracticeItem): ReviewState {
  return {
    itemId: item.id,
    subject: item.subject,
    topic: item.topic,
    correctCount: 0,
    wrongCount: 0,
    streak: 0,
    status: "new",
    reviewStep: 0,
    correctInStep: 0,
  };
}

export function updateReviewState(params: {
  state: ReviewState;
  isCorrect: boolean;
  correctAnswer: string;
  currentQuestionNumber: number;
}): {
  state: ReviewState;
  answerResult: AnswerResult;
} {
  const { state, isCorrect, correctAnswer, currentQuestionNumber } = params;

  const normalizedState = normalizeReviewState(state);

  if (!isCorrect) {
    return handleWrongAnswer(
      normalizedState,
      correctAnswer,
      currentQuestionNumber,
    );
  }

  return handleCorrectAnswer(
    normalizedState,
    correctAnswer,
    currentQuestionNumber,
  );
}

function handleWrongAnswer(
  state: ReviewState,
  correctAnswer: string,
  currentQuestionNumber: number,
): { state: ReviewState; answerResult: AnswerResult } {
  const feedbackKey =
    state.wrongCount > 0 ? "feedback.repeatedMistake" : "feedback.wrong";
  const bucket: ReviewBucket = 5;

  return {
    state: {
      ...state,
      wrongCount: state.wrongCount + 1,
      streak: 0,
      status: "weak",
      reviewBucket: bucket,
      reviewStep: reviewBucketToStep(bucket),
      correctInStep: 0,
      lastAnsweredQuestionNumber: currentQuestionNumber,
      nextReviewQuestionNumber: undefined,
    },
    answerResult: {
      isCorrect: false,
      wasPreviouslyWrong: false,
      feedbackKey,
      correctAnswer,
    },
  };
}

function handleCorrectAnswer(
  state: ReviewState,
  correctAnswer: string,
  currentQuestionNumber: number,
): { state: ReviewState; answerResult: AnswerResult } {
  const previousStatus = state.status;
  const previousCorrectInStep = state.correctInStep ?? 0;

  const { feedbackKey, wasPreviouslyWrong } = resolveCorrectFeedback(
    previousStatus,
    previousCorrectInStep,
  );

  const answerResult: AnswerResult = {
    isCorrect: true,
    wasPreviouslyWrong,
    feedbackKey,
    correctAnswer,
  };

  if (previousStatus === "mastered") {
    return {
      state: {
        ...state,
        correctCount: state.correctCount + 1,
        streak: state.streak + 1,
        lastAnsweredQuestionNumber: currentQuestionNumber,
      },
      answerResult,
    };
  }

  if (isInReviewFlow(state)) {
    return handleReviewCorrectAnswer(
      state,
      currentQuestionNumber,
      answerResult,
    );
  }

  return handleNormalCorrectAnswer(
    state,
    currentQuestionNumber,
    previousStatus,
    answerResult,
  );
}

function handleReviewCorrectAnswer(
  state: ReviewState,
  currentQuestionNumber: number,
  answerResult: AnswerResult,
): { state: ReviewState; answerResult: AnswerResult } {
  const currentBucket = state.reviewBucket ?? 5;
  const nextCorrectInStep = (state.correctInStep ?? 0) + 1;

  if (nextCorrectInStep < REQUIRED_CORRECT_PER_BUCKET) {
    return {
      state: {
        ...state,
        correctCount: state.correctCount + 1,
        streak: state.streak + 1,
        status: "improving",
        reviewBucket: currentBucket,
        reviewStep: reviewBucketToStep(currentBucket),
        correctInStep: nextCorrectInStep,
        lastAnsweredQuestionNumber: currentQuestionNumber,
        nextReviewQuestionNumber: undefined,
      },
      answerResult,
    };
  }

  const advancedBucket = getNextReviewBucket(currentBucket);

  if (advancedBucket === "mastered") {
    return {
      state: {
        ...state,
        correctCount: state.correctCount + 1,
        streak: state.streak + 1,
        status: "mastered",
        reviewBucket: undefined,
        reviewStep: reviewBucketToStep(50),
        correctInStep: 0,
        reviewQueueOrder: undefined,
        lastAnsweredQuestionNumber: currentQuestionNumber,
        nextReviewQuestionNumber: undefined,
      },
      answerResult,
    };
  }

  return {
    state: {
      ...state,
      correctCount: state.correctCount + 1,
      streak: state.streak + 1,
      status: "improving",
      reviewBucket: advancedBucket,
      reviewStep: reviewBucketToStep(advancedBucket),
      correctInStep: 0,
      lastAnsweredQuestionNumber: currentQuestionNumber,
      nextReviewQuestionNumber: undefined,
    },
    answerResult,
  };
}

function handleNormalCorrectAnswer(
  state: ReviewState,
  currentQuestionNumber: number,
  previousStatus: ReviewStatus,
  answerResult: AnswerResult,
): { state: ReviewState; answerResult: AnswerResult } {
  const nextStatus =
    previousStatus === "new" || previousStatus === "learning"
      ? "learning"
      : previousStatus;

  return {
    state: {
      ...state,
      correctCount: state.correctCount + 1,
      streak: state.streak + 1,
      status: nextStatus,
      lastAnsweredQuestionNumber: currentQuestionNumber,
      nextReviewQuestionNumber: undefined,
    },
    answerResult,
  };
}

function resolveCorrectFeedback(
  previousStatus: ReviewStatus,
  previousCorrectInStep: number,
): { feedbackKey: string; wasPreviouslyWrong: boolean } {
  const wasWeakOrImproving =
    previousStatus === "weak" || previousStatus === "improving";

  if (wasWeakOrImproving && previousCorrectInStep === 0) {
    return {
      feedbackKey: "feedback.fixedMistake",
      wasPreviouslyWrong: true,
    };
  }

  if (wasWeakOrImproving && previousCorrectInStep > 0) {
    return {
      feedbackKey: "feedback.correctReview",
      wasPreviouslyWrong: false,
    };
  }

  return {
    feedbackKey: "feedback.correct",
    wasPreviouslyWrong: false,
  };
}
