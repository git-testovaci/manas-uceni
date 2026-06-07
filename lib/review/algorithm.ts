import type {
  AnswerResult,
  PracticeItem,
  ReviewState,
  ReviewStatus,
} from "@/types";

export const REVIEW_INTERVALS = [5, 10, 25, 50] as const;
export const REQUIRED_CORRECT_PER_STEP = 5;

const FIRST_REVIEW_INTERVAL = REVIEW_INTERVALS[0];

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

  if (!isCorrect) {
    return handleWrongAnswer(state, correctAnswer, currentQuestionNumber);
  }

  return handleCorrectAnswer(state, correctAnswer, currentQuestionNumber);
}

function handleWrongAnswer(
  state: ReviewState,
  correctAnswer: string,
  currentQuestionNumber: number,
): { state: ReviewState; answerResult: AnswerResult } {
  return {
    state: {
      ...state,
      wrongCount: state.wrongCount + 1,
      streak: 0,
      status: "weak",
      reviewStep: 0,
      correctInStep: 0,
      lastAnsweredQuestionNumber: currentQuestionNumber,
      nextReviewQuestionNumber:
        currentQuestionNumber + FIRST_REVIEW_INTERVAL,
    },
    answerResult: {
      isCorrect: false,
      wasPreviouslyWrong: false,
      feedbackKey: "feedback.wrong",
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
  const wasWeakOrImproving =
    previousStatus === "weak" || previousStatus === "improving";

  const answerResult: AnswerResult = {
    isCorrect: true,
    wasPreviouslyWrong: wasWeakOrImproving,
    feedbackKey: wasWeakOrImproving
      ? "feedback.fixedMistake"
      : "feedback.correct",
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

  const reviewStep = clampReviewStep(state.reviewStep);
  const nextCorrectInStep = (state.correctInStep ?? 0) + 1;

  if (nextCorrectInStep < REQUIRED_CORRECT_PER_STEP) {
    const status = resolveProgressStatus(previousStatus, wasWeakOrImproving);

    return {
      state: {
        ...state,
        correctCount: state.correctCount + 1,
        streak: state.streak + 1,
        status,
        reviewStep,
        correctInStep: nextCorrectInStep,
        lastAnsweredQuestionNumber: currentQuestionNumber,
        nextReviewQuestionNumber:
          currentQuestionNumber + REVIEW_INTERVALS[reviewStep],
      },
      answerResult,
    };
  }

  const advancedReviewStep = reviewStep + 1;

  if (advancedReviewStep >= REVIEW_INTERVALS.length) {
    return {
      state: {
        ...state,
        correctCount: state.correctCount + 1,
        streak: state.streak + 1,
        status: "mastered",
        reviewStep,
        correctInStep: 0,
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
      reviewStep: advancedReviewStep,
      correctInStep: 0,
      lastAnsweredQuestionNumber: currentQuestionNumber,
      nextReviewQuestionNumber:
        currentQuestionNumber + REVIEW_INTERVALS[advancedReviewStep],
    },
    answerResult,
  };
}

function resolveProgressStatus(
  previousStatus: ReviewStatus,
  wasWeakOrImproving: boolean,
): ReviewStatus {
  if (wasWeakOrImproving) {
    return "improving";
  }

  if (previousStatus === "new" || previousStatus === "learning") {
    return "learning";
  }

  return "learning";
}

function clampReviewStep(reviewStep: number): number {
  if (reviewStep < 0) {
    return 0;
  }

  if (reviewStep >= REVIEW_INTERVALS.length) {
    return REVIEW_INTERVALS.length - 1;
  }

  return reviewStep;
}
