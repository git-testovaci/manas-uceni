import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Čeština",
  description:
    "Procvičování češtiny – výběr gramatických témat a jazykových cvičení.",
};

export default function CzechPage() {
  return (
    <PageShell showBackLink>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Čeština
      </h1>
      <p className="mt-4 text-lg text-foreground/70">
        Tato sekce se připravuje. První téma bude i/y, ale čeština tím
        nekončí – později půjdou přidat další gramatická témata uvnitř tohoto
        předmětu.
      </p>
    </PageShell>
  );
}
