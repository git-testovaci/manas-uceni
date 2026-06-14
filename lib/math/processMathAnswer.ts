import {
  createInitialReviewState,
  updateReviewState,
} from "@/lib/review/algorithm";
import {
  formatRemainderAnswer,
  parseNumericAnswer,
  parseRemainderAnswer,
  validateClockReadAnswer,
  validateComparisonAnswer,
  validateMathAnswer,
  validateMoneyCountAnswer,
} from "@/lib/math/validateMathAnswer";
import { formatClockTime } from "@/lib/math/time";
import type {
  AnswerResult,
  MathExercise,
  ReviewState,
} from "@/types";

export type ProcessMathAnswerParams = {
  exercise: MathExercise;
  input: string;
  currentQuestionNumber: number;
  reviewState?: ReviewState;
};

export type ProcessMathAnswerResult = {
  isCorrect: boolean;
  normalizedInput: string;
  expectedAnswer: string;
  reviewState: ReviewState;
  answerResult: AnswerResult;
};

export function getExpectedMathAnswer(exercise: MathExercise): {
  correctAnswer: string;
  expectedRemainder?: number;
  displayAnswer: string;
} {
  if (exercise.operation === "clock-read") {
    const hour = exercise.clockHour ?? exercise.operandA;
    const minute = exercise.clockMinute ?? exercise.operandB;
    const displayAnswer = formatClockTime(hour, minute);

    return {
      correctAnswer: displayAnswer,
      displayAnswer,
    };
  }

  if (exercise.expectedRemainder === undefined) {
    const parsed = parseNumericAnswer(exercise.correctAnswer);
    const displayAnswer =
      parsed !== null ? String(parsed) : exercise.correctAnswer.trim();

    return {
      correctAnswer: displayAnswer,
      displayAnswer,
    };
  }

  const parsedRemainderAnswer = parseRemainderAnswer(exercise.correctAnswer);

  if (parsedRemainderAnswer) {
    const displayAnswer = formatRemainderAnswer(
      parsedRemainderAnswer.quotient,
      parsedRemainderAnswer.remainder,
    );

    return {
      correctAnswer: String(parsedRemainderAnswer.quotient),
      expectedRemainder: parsedRemainderAnswer.remainder,
      displayAnswer,
    };
  }

  const parsedQuotient = parseNumericAnswer(exercise.correctAnswer);
  const quotient =
    parsedQuotient !== null && Number.isInteger(parsedQuotient)
      ? parsedQuotient
      : exercise.operandA > 0 && exercise.operandB > 0
        ? Math.floor(exercise.operandA / exercise.operandB)
        : 0;
  const remainder = exercise.expectedRemainder;
  const displayAnswer = formatRemainderAnswer(quotient, remainder);

  return {
    correctAnswer: String(quotient),
    expectedRemainder: remainder,
    displayAnswer,
  };
}

export function processMathAnswer(
  params: ProcessMathAnswerParams,
): ProcessMathAnswerResult {
  const { exercise, input, currentQuestionNumber, reviewState } = params;
  const state = resolveReviewState(exercise, reviewState);
  const expected = getExpectedMathAnswer(exercise);

  const validation =
    exercise.operation === "compare-numbers"
      ? validateComparisonAnswer(input, expected.correctAnswer)
      : exercise.operation === "clock-read"
        ? validateClockReadAnswer(input, expected.correctAnswer)
        : exercise.operation === "money-count"
          ? validateMoneyCountAnswer(
              input,
              expected.correctAnswer,
              exercise.currencyCode,
            )
          : validateMathAnswer(
              input,
              expected.correctAnswer,
              expected.expectedRemainder,
            );

  const { state: updatedReviewState, answerResult } = updateReviewState({
    state,
    isCorrect: validation.isCorrect,
    correctAnswer: expected.displayAnswer,
    currentQuestionNumber,
  });

  return {
    isCorrect: validation.isCorrect,
    normalizedInput: validation.normalizedInput,
    expectedAnswer: validation.expectedAnswer,
    reviewState: updatedReviewState,
    answerResult,
  };
}

function resolveReviewState(
  exercise: MathExercise,
  reviewState?: ReviewState,
): ReviewState {
  if (!reviewState || reviewState.itemId !== exercise.id) {
    return createInitialReviewState(exercise);
  }

  return reviewState;
}
