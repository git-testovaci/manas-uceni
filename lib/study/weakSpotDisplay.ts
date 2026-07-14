import {
  getStudyLesson,
  getStudyQuestionById,
  getStudySubjectById,
  hasStudySubjectContent,
} from "@/data/subjects";
import { getChoiceText } from "@/lib/study/practiceItem";
import type { ReviewState } from "@/types";
import { STUDY_SUBJECT_IDS, type StudySubjectId } from "@/types/study";

export type StudyWeakSpotDisplay = {
  subjectId: StudySubjectId;
  subjectTitle: string;
  lessonId: string;
  lessonTitle: string | null;
  prompt: string;
  expectedAnswerText: string;
  lessonHref: string | null;
  practiceHref: string | null;
  isUnresolved: boolean;
  unresolvedMessage?: string;
};

const UNRESOLVED_MESSAGE =
  "Tahle otázka už v obsahu není, ale zůstala uložená v opakování.";

export function isStudySubjectId(subject: string): subject is StudySubjectId {
  return (STUDY_SUBJECT_IDS as readonly string[]).includes(subject);
}

export function formatStudyExpectedAnswer(
  questionId: string,
): string | null {
  const question = getStudyQuestionById(questionId);
  if (!question) {
    return null;
  }

  return getChoiceText(question, question.correctChoiceId);
}

export function resolveStudyWeakSpotDisplay(
  state: ReviewState,
): StudyWeakSpotDisplay | null {
  if (!isStudySubjectId(state.subject)) {
    return null;
  }

  const subjectMeta = getStudySubjectById(state.subject);
  const subjectTitle = subjectMeta?.title ?? state.subject;
  const question = getStudyQuestionById(state.itemId);

  if (!question) {
    const lessonId = typeof state.topic === "string" ? state.topic : "";
    const lesson = lessonId
      ? getStudyLesson(state.subject, lessonId)
      : undefined;

    return {
      subjectId: state.subject,
      subjectTitle,
      lessonId: lessonId || state.itemId,
      lessonTitle: lesson?.title ?? null,
      prompt: state.itemId,
      expectedAnswerText: "—",
      lessonHref:
        lessonId && hasStudySubjectContent(state.subject)
          ? `/subjects/${state.subject}/lessons/${lessonId}`
          : null,
      practiceHref:
        lessonId && hasStudySubjectContent(state.subject)
          ? `/subjects/${state.subject}/lessons/${lessonId}/practice`
          : null,
      isUnresolved: true,
      unresolvedMessage: UNRESOLVED_MESSAGE,
    };
  }

  const lesson = getStudyLesson(state.subject, question.lessonId);
  const hasContent = hasStudySubjectContent(state.subject);

  return {
    subjectId: state.subject,
    subjectTitle,
    lessonId: question.lessonId,
    lessonTitle: lesson?.title ?? null,
    prompt: question.prompt,
    expectedAnswerText: getChoiceText(question, question.correctChoiceId),
    lessonHref: hasContent
      ? `/subjects/${state.subject}/lessons/${question.lessonId}`
      : null,
    practiceHref: hasContent
      ? `/subjects/${state.subject}/lessons/${question.lessonId}/practice`
      : null,
    isUnresolved: false,
  };
}

export function formatReviewProgressLabel(state: ReviewState): string | null {
  if (state.status === "mastered") {
    return "Zvládnuto";
  }

  if (state.reviewBucket) {
    return `Opakování · koš ${state.reviewBucket}`;
  }

  switch (state.status) {
    case "weak":
      return "Slabé místo";
    case "improving":
      return "Zlepšuje se";
    case "learning":
      return "Učení";
    case "new":
      return "Nové";
    default:
      return null;
  }
}
