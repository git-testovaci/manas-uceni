import Link from "next/link";

type SubjectVariant = "math" | "czech" | "practice" | "english" | "study";

type SubjectCardProps = {
  href?: string;
  title: string;
  description?: string;
  variant: SubjectVariant;
  disabled?: boolean;
  disabledHint?: string;
};

const variantStyles: Record<SubjectVariant, string> = {
  math: "bg-math",
  czech: "bg-czech",
  practice: "bg-practice",
  english: "bg-english",
  study: "bg-slate-700",
};

const cardContent = (
  title: string,
  description?: string,
  disabledHint?: string,
) => (
  <>
    <span className="text-xl font-semibold sm:text-2xl">{title}</span>
    {description && (
      <span className="text-base font-normal opacity-90 sm:text-lg">
        {description}
      </span>
    )}
    {disabledHint && (
      <span className="text-sm font-normal opacity-80">{disabledHint}</span>
    )}
  </>
);

export function SubjectCard({
  href,
  title,
  description,
  variant,
  disabled = false,
  disabledHint,
}: SubjectCardProps) {
  const baseClass =
    "flex min-h-16 w-full flex-col items-start justify-center gap-1 rounded-2xl px-6 py-4 text-white";

  if (disabled) {
    return (
      <div
        aria-disabled="true"
        className={`${baseClass} ${variantStyles[variant]} cursor-not-allowed opacity-60`}
      >
        {cardContent(title, description, disabledHint)}
      </div>
    );
  }

  if (!href) {
    return null;
  }

  return (
    <Link
      href={href}
      className={`${baseClass} ${variantStyles[variant]} transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background`}
    >
      {cardContent(title, description, disabledHint)}
    </Link>
  );
}
