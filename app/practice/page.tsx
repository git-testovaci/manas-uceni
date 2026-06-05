import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Moje procvičování",
  description: "Procvičuj slabá místa z dřívějších chyb.",
};

export default function PracticePage() {
  return (
    <PageShell showBackLink>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Moje procvičování
      </h1>
      <p className="mt-4 text-lg text-foreground/70">
        Tato sekce se připravuje.
      </p>
    </PageShell>
  );
}
