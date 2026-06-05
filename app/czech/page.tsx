import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Čeština",
  description: "Procvičuj pravopis i/y – vyber správné písmeno.",
};

export default function CzechPage() {
  return (
    <PageShell showBackLink>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Čeština
      </h1>
      <p className="mt-4 text-lg text-foreground/70">
        Tato sekce se připravuje.
      </p>
    </PageShell>
  );
}
