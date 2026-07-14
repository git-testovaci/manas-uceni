import { OBECNA_PEDAGOGIKA_CONTENT } from "@/data/subjects/obecna-pedagogika";
import { STUDY_SUBJECTS } from "@/data/subjects/registry";
import type {
  StudyLesson,
  StudyQuestion,
  StudySubjectContent,
  StudySubjectId,
  StudySubjectMeta,
} from "@/types/study";

const SUBJECT_CONTENT: Partial<Record<StudySubjectId, StudySubjectContent>> = {
  "obecna-pedagogika": OBECNA_PEDAGOGIKA_CONTENT,
};

export function getStudySubjects(): StudySubjectMeta[] {
  return [...STUDY_SUBJECTS].sort((left, right) => left.order - right.order);
}

export function getStudySubjectById(
  subjectId: string,
): StudySubjectMeta | undefined {
  return STUDY_SUBJECTS.find((subject) => subject.id === subjectId);
}

export function hasStudySubjectContent(subjectId: string): boolean {
  return subjectId in SUBJECT_CONTENT;
}

export function getStudySubjectContent(
  subjectId: string,
): StudySubjectContent | undefined {
  if (!hasStudySubjectContent(subjectId)) {
    return undefined;
  }

  return SUBJECT_CONTENT[subjectId as StudySubjectId];
}

export function getStudyLesson(
  subjectId: string,
  lessonId: string,
): StudyLesson | undefined {
  const content = getStudySubjectContent(subjectId);
  if (!content) {
    return undefined;
  }

  for (const unit of content.units) {
    const lesson = unit.lessons.find((item) => item.id === lessonId);
    if (lesson) {
      return lesson;
    }
  }

  return undefined;
}

export function getStudyQuestionById(
  questionId: string,
): StudyQuestion | undefined {
  for (const content of Object.values(SUBJECT_CONTENT)) {
    if (!content) {
      continue;
    }

    for (const unit of content.units) {
      for (const lesson of unit.lessons) {
        const practiceMatch = lesson.practiceQuestions.find(
          (question) => question.id === questionId,
        );
        if (practiceMatch) {
          return practiceMatch;
        }

        const examMatch = lesson.examQuestions.find(
          (question) => question.id === questionId,
        );
        if (examMatch) {
          return examMatch;
        }
      }
    }
  }

  return undefined;
}

export function getStudyPracticeQuestionsForLesson(
  subjectId: string,
  lessonId: string,
): StudyQuestion[] {
  const lesson = getStudyLesson(subjectId, lessonId);
  if (!lesson) {
    return [];
  }

  return [...lesson.practiceQuestions].sort(
    (left, right) => left.order - right.order,
  );
}

export { STUDY_SUBJECTS } from "@/data/subjects/registry";
