import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Násobilka",
  description: "Procvičuj násobilku – zadej výsledek a nauč se postup.",
};

export default function MathPage() {
  return (
    <PageShell showBackLink>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Matematika
      </h1>
      <p className="mt-4 text-lg text-foreground/70">
        Tato sekce se připravuje.
      </p>
    </PageShell>
  );
}
