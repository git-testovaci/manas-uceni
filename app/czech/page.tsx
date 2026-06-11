import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { SubjectCard } from "@/components/ui/SubjectCard";

export const metadata: Metadata = {
  title: "Čeština",
  description:
    "Procvičování češtiny – pravopis a jazyková cvičení.",
};

export default function CzechPage() {
  return (
    <PageShell showBackLink>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Čeština</h1>
      <p className="mt-4 text-lg text-foreground/70">
        Pravopis a jazyková cvičení
      </p>

      <nav
        aria-label="Témata češtiny"
        className="mt-8 flex flex-col gap-4"
      >
        <SubjectCard
          href="/czech/iy"
          title="Procvičování i/y"
          description="Doplň i, í, y nebo ý ve větách."
          variant="czech"
        />
      </nav>
    </PageShell>
  );
}
