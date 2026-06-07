import type { Metadata } from "next";
import { MathPracticeClient } from "@/features/math/MathPracticeClient";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Matematika",
  description:
    "Procvičování matematiky – výběr témat, filtry a vlastní nastavení příkladů.",
};

export default function MathPage() {
  return (
    <PageShell showBackLink>
      <MathPracticeClient />
    </PageShell>
  );
}
