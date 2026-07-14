import { PageShell } from "@/components/layout/PageShell";
import {
  getStudySubjectById,
  getStudySubjectContent,
} from "@/data/subjects";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type SubjectPageProps = {
  params: Promise<{ subjectSlug: string }>;
};

export async function generateMetadata({
  params,
}: SubjectPageProps): Promise<Metadata> {
  const { subjectSlug } = await params;
  const subject = getStudySubjectById(subjectSlug);

  return {
    title: subject?.title ?? "Předmět",
    description: subject?.description,
  };
}

export default async function SubjectPage({ params }: SubjectPageProps) {
  const { subjectSlug } = await params;
  const subject = getStudySubjectById(subjectSlug);

  if (!subject) {
    notFound();
  }

  const content = getStudySubjectContent(subjectSlug);
  const units = content
    ? [...content.units].sort((left, right) => left.order - right.order)
    : [];

  return (
    <PageShell showBackLink>
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {subject.title}
        </h1>
        {subject.description && (
          <p className="text-lg text-foreground/70">{subject.description}</p>
        )}
      </header>

      {!content || units.length === 0 ? (
        <p className="mt-8 rounded-2xl border border-foreground/10 bg-foreground/5 px-4 py-5 text-base text-foreground/60">
          Obsah tohoto předmětu se připravuje.
        </p>
      ) : (
        <div className="mt-8 space-y-8">
          {units.map((unit) => {
            const lessons = [...unit.lessons].sort(
              (left, right) => left.order - right.order,
            );

            return (
              <section key={unit.id} className="space-y-4">
                <div>
                  <h2 className="text-xl font-semibold">{unit.title}</h2>
                  {unit.description && (
                    <p className="mt-1 text-base text-foreground/70">
                      {unit.description}
                    </p>
                  )}
                </div>

                <ul className="space-y-3">
                  {lessons.map((lesson) => (
                    <li key={lesson.id}>
                      <Link
                        href={`/subjects/${subjectSlug}/lessons/${lesson.id}`}
                        className="block rounded-2xl border border-foreground/15 bg-white/70 px-4 py-4 transition-colors hover:bg-white focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
                      >
                        <span className="text-base font-semibold">
                          {lesson.order}. {lesson.title}
                        </span>
                        {lesson.summary && (
                          <span className="mt-1 block text-sm text-foreground/70">
                            {lesson.summary}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      )}
    </PageShell>
  );
}
