import { PageShell } from "@/components/layout/PageShell";
import { StudyPracticeClient } from "@/features/study/StudyPracticeClient";
import {
  getStudyLesson,
  getStudyPracticeQuestionsForLesson,
  getStudySubjectById,
} from "@/data/subjects";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type LessonPracticePageProps = {
  params: Promise<{ subjectSlug: string; lessonSlug: string }>;
};

export async function generateMetadata({
  params,
}: LessonPracticePageProps): Promise<Metadata> {
  const { subjectSlug, lessonSlug } = await params;
  const lesson = getStudyLesson(subjectSlug, lessonSlug);

  return {
    title: lesson ? `Procvičování: ${lesson.title}` : "Procvičování",
  };
}

export default async function LessonPracticePage({
  params,
}: LessonPracticePageProps) {
  const { subjectSlug, lessonSlug } = await params;
  const subject = getStudySubjectById(subjectSlug);
  const lesson = getStudyLesson(subjectSlug, lessonSlug);

  if (!subject || !lesson) {
    notFound();
  }

  const questions = getStudyPracticeQuestionsForLesson(subjectSlug, lessonSlug);

  if (questions.length === 0) {
    return (
      <PageShell showBackLink>
        <p className="rounded-2xl border border-foreground/15 bg-white/70 px-4 py-5 text-base text-foreground/70">
          V této lekci zatím nejsou žádné procvičovací otázky.
        </p>
      </PageShell>
    );
  }

  return (
    <PageShell showBackLink>
      <StudyPracticeClient
        key={`${subjectSlug}-${lessonSlug}`}
        subjectId={subjectSlug}
        lessonId={lessonSlug}
        lessonTitle={lesson.title}
        questions={questions}
      />
    </PageShell>
  );
}
