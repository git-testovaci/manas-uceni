import { PageShell } from "@/components/layout/PageShell";
import { SubjectCard } from "@/components/ui/SubjectCard";
import {
  getStudySubjectCardDescription,
  getStudySubjects,
  hasStudySubjectContent,
} from "@/data/subjects";

export default function Home() {
  const subjects = getStudySubjects();

  return (
    <PageShell>
      <header className="mb-8 text-center sm:mb-10">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Co dnes procvičíme?
        </h1>
        <p className="mt-3 text-lg text-foreground/70">
          Vyber předmět a začni studovat nebo procvičovat.
        </p>
      </header>

      <nav aria-label="Hlavní navigace" className="flex flex-col gap-8">
        <SubjectCard
          href="/practice"
          title="Moje procvičování"
          description="Opakování slabých míst napříč předměty"
          variant="practice"
        />

        <section aria-labelledby="mandatory-subjects-heading" className="space-y-4">
          <h2
            id="mandatory-subjects-heading"
            className="text-xl font-semibold tracking-tight sm:text-2xl"
          >
            Povinné předměty
          </h2>

          <div className="flex flex-col gap-4">
            {subjects.map((subject) => {
              const hasContent = hasStudySubjectContent(subject.id);

              return (
                <SubjectCard
                  key={subject.id}
                  href={`/subjects/${subject.id}`}
                  title={subject.title}
                  description={getStudySubjectCardDescription(subject)}
                  note={hasContent ? undefined : "Připravuje se"}
                  variant="study"
                />
              );
            })}
          </div>
        </section>
      </nav>
    </PageShell>
  );
}
