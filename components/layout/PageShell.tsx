import { BackLink } from "@/components/layout/BackLink";

type PageShellProps = {
  children: React.ReactNode;
  showBackLink?: boolean;
};

export function PageShell({ children, showBackLink = false }: PageShellProps) {
  return (
    <div className="min-h-screen bg-background px-4 py-8 sm:px-6 sm:py-12">
      <main className="mx-auto w-full max-w-lg">
        {showBackLink && <BackLink />}
        {children}
      </main>
    </div>
  );
}
