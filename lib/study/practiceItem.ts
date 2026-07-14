import type { PracticeItem, StudyQuestion } from "@/types";

export function studyQuestionToPracticeItem(
  question: StudyQuestion,
): PracticeItem {
  return {
    id: question.id,
    subject: question.subjectId,
    topic: question.lessonId,
    prompt: question.prompt,
    correctAnswer: question.correctChoiceId,
    explanation: question.explanation,
    difficulty: question.difficulty,
  };
}

export function getChoiceText(
  question: StudyQuestion,
  choiceId: string,
): string {
  const choice = question.choices.find((item) => item.id === choiceId);
  return choice?.text ?? choiceId;
}
