import { PageShell } from "@/components/layout/PageShell";
import { SubjectCard } from "@/components/ui/SubjectCard";
import {
  getStudySubjects,
  hasStudySubjectContent,
} from "@/data/subjects";

export default function Home() {
  const subjects = getStudySubjects();

  return (
    <PageShell>
      <header className="mb-8 text-center sm:mb-10">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Studijní předměty
        </h1>
        <p className="mt-3 text-lg text-foreground/70">
          Vyber předmět programu a pokračuj v učení, procvičování a opakování.
        </p>
      </header>

      <nav aria-label="Studijní předměty" className="flex flex-col gap-4">
        {subjects.map((subject) => {
          const hasContent = hasStudySubjectContent(subject.id);

          return (
            <SubjectCard
              key={subject.id}
              href={hasContent ? `/subjects/${subject.id}` : undefined}
              title={subject.title}
              description={
                hasContent
                  ? (subject.description ?? "Otevřít předmět")
                  : undefined
              }
              disabled={!hasContent}
              disabledHint={hasContent ? undefined : "Připravuje se"}
              variant="study"
            />
          );
        })}

        <SubjectCard
          href="/practice"
          title="Moje procvičování"
          description="Slabá místa napříč předměty"
          variant="practice"
        />
      </nav>
    </PageShell>
  );
}
