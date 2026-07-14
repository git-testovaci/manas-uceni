import { PageShell } from "@/components/layout/PageShell";
import {
  getStudyLesson,
  getStudyPracticeQuestionsForLesson,
  getStudySubjectById,
} from "@/data/subjects";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type LessonPageProps = {
  params: Promise<{ subjectSlug: string; lessonSlug: string }>;
};

export async function generateMetadata({
  params,
}: LessonPageProps): Promise<Metadata> {
  const { subjectSlug, lessonSlug } = await params;
  const lesson = getStudyLesson(subjectSlug, lessonSlug);

  return {
    title: lesson?.title ?? "Lekce",
  };
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { subjectSlug, lessonSlug } = await params;
  const subject = getStudySubjectById(subjectSlug);
  const lesson = getStudyLesson(subjectSlug, lessonSlug);

  if (!subject || !lesson) {
    notFound();
  }

  const practiceQuestions = getStudyPracticeQuestionsForLesson(
    subjectSlug,
    lessonSlug,
  );
  const hasPractice = practiceQuestions.length > 0;

  return (
    <PageShell showBackLink>
      <header className="space-y-3">
        <p className="text-sm font-medium text-foreground/60">{subject.title}</p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {lesson.title}
        </h1>
        {lesson.summary && (
          <p className="text-lg text-foreground/70">{lesson.summary}</p>
        )}
      </header>

      <div className="mt-8 space-y-6">
        {lesson.studySections.map((section) => (
          <section
            key={section.id}
            className="rounded-2xl border border-foreground/15 bg-white/70 p-5"
          >
            {section.title && (
              <h2 className="text-lg font-semibold">{section.title}</h2>
            )}

            {section.body && (
              <p className={`text-base leading-relaxed text-foreground/80 ${section.title ? "mt-3" : ""}`}>
                {section.body}
              </p>
            )}

            {section.type === "keyTerms" && section.terms && (
              <dl className={`space-y-3 ${section.title || section.body ? "mt-4" : ""}`}>
                {section.terms.map((term) => (
                  <div key={term.term}>
                    <dt className="font-semibold">{term.term}</dt>
                    <dd className="mt-1 text-foreground/80">{term.definition}</dd>
                  </div>
                ))}
              </dl>
            )}
          </section>
        ))}
      </div>

      <div className="mt-8">
        {hasPractice ? (
          <Link
            href={`/subjects/${subjectSlug}/lessons/${lessonSlug}/practice`}
            className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-practice px-6 py-3 text-base font-semibold text-white transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
          >
            Procvičovat
          </Link>
        ) : (
          <p className="rounded-2xl border border-foreground/10 bg-foreground/5 px-4 py-5 text-base text-foreground/60">
            Procvičování pro tuto lekci se připravuje.
          </p>
        )}
      </div>
    </PageShell>
  );
}
