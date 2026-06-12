import { PageShell } from "@/components/layout/PageShell";
import { PracticeDashboardClient } from "@/features/practice/PracticeDashboardClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moje procvičování",
  description:
    "Smíšené procvičování napříč předměty – slabá místa nebo vlastní výběr.",
};

export default function PracticePage() {
  return (
    <PageShell showBackLink>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Moje procvičování
      </h1>
      <div className="mt-6">
        <PracticeDashboardClient />
      </div>
    </PageShell>
  );
}
