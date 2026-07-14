import { getChoiceText } from "@/lib/study/practiceItem";
import type { StudyAnswerValidation, StudyQuestion } from "@/types/study";

export function validateStudyAnswer(
  question: StudyQuestion,
  selectedChoiceId: string,
): StudyAnswerValidation {
  const normalizedInput = selectedChoiceId.trim();
  const isCorrect = normalizedInput === question.correctChoiceId;
  const userAnswerText = getChoiceText(question, normalizedInput);
  const expectedAnswerText = getChoiceText(
    question,
    question.correctChoiceId,
  );

  return {
    isCorrect,
    normalizedInput,
    expectedAnswer: question.correctChoiceId,
    userAnswerText,
    expectedAnswerText,
    explanation: question.explanation,
  };
}
