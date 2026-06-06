import { PageShell } from "@/components/layout/PageShell";
import { SubjectCard } from "@/components/ui/SubjectCard";

export default function Home() {
  return (
    <PageShell>
      <header className="mb-8 text-center sm:mb-10">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Co dnes procvičíme?
        </h1>
        <p className="mt-3 text-lg text-foreground/70">
          Vyber předmět a začni procvičovat.
        </p>
      </header>

      <nav aria-label="Výběr předmětu" className="flex flex-col gap-4">
        <SubjectCard
          href="/math"
          title="Matematika"
          description="Příklady, témata a vlastní nastavení"
          variant="math"
        />
        <SubjectCard
          href="/czech"
          title="Čeština"
          description="Pravopis a jazyková cvičení"
          variant="czech"
        />
        <SubjectCard
          href="/practice"
          title="Moje procvičování"
          description="Slabá místa napříč předměty"
          variant="practice"
        />
        <SubjectCard
          title="Angličtina"
          description="Slovíčka, lekce a opakování"
          variant="english"
          disabled
        />
      </nav>
    </PageShell>
  );
}
