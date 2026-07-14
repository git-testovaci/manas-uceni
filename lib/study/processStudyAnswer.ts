import {
  createInitialReviewState,
  updateReviewState,
} from "@/lib/review/algorithm";
import { studyQuestionToPracticeItem } from "@/lib/study/practiceItem";
import { validateStudyAnswer } from "@/lib/study/validateAnswer";
import type { AnswerResult, ReviewState, StudyQuestion } from "@/types";

export type ProcessStudyAnswerParams = {
  question: StudyQuestion;
  selectedChoiceId: string;
  currentQuestionNumber: number;
  reviewState?: ReviewState;
};

export type ProcessStudyAnswerResult = {
  isCorrect: boolean;
  normalizedInput: string;
  expectedAnswer: string;
  userAnswerText: string;
  expectedAnswerText: string;
  explanation: string;
  reviewState: ReviewState;
  answerResult: AnswerResult;
};

export function processStudyAnswer(
  params: ProcessStudyAnswerParams,
): ProcessStudyAnswerResult {
  const { question, selectedChoiceId, currentQuestionNumber, reviewState } =
    params;
  const practiceItem = studyQuestionToPracticeItem(question);
  const state = resolveReviewState(practiceItem, reviewState);
  const validation = validateStudyAnswer(question, selectedChoiceId);

  const { state: updatedReviewState, answerResult } = updateReviewState({
    state,
    isCorrect: validation.isCorrect,
    correctAnswer: validation.expectedAnswerText,
    currentQuestionNumber,
  });

  return {
    isCorrect: validation.isCorrect,
    normalizedInput: validation.normalizedInput,
    expectedAnswer: validation.expectedAnswer,
    userAnswerText: validation.userAnswerText,
    expectedAnswerText: validation.expectedAnswerText,
    explanation: validation.explanation,
    reviewState: updatedReviewState,
    answerResult,
  };
}

function resolveReviewState(
  item: ReturnType<typeof studyQuestionToPracticeItem>,
  reviewState?: ReviewState,
): ReviewState {
  if (!reviewState || reviewState.itemId !== item.id) {
    return createInitialReviewState(item);
  }

  return reviewState;
}
