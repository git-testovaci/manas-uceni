import Link from "next/link";

export function BackLink() {
  return (
    <Link
      href="/"
      aria-label="Zpět na hlavní stránku"
      className="mb-6 inline-flex min-h-11 items-center text-base font-medium text-foreground underline-offset-4 hover:underline focus-visible:rounded-sm"
    >
      ← Zpět
    </Link>
  );
}
