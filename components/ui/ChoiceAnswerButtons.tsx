import type { KeyboardEvent, RefObject } from "react";

export type ChoiceAnswerOption = {
  value: string;
  label: string;
};

type ChoiceAccent = "math" | "study";

type ChoiceAnswerButtonsProps = {
  options: ChoiceAnswerOption[];
  selectedValue: string;
  onSelect: (value: string) => void;
  disabled: boolean;
  firstButtonRef?: RefObject<HTMLButtonElement | null>;
  heading: string;
  columns?: 2 | 3 | 4;
  variant?: "label" | "symbol";
  accent?: ChoiceAccent;
  canSubmit?: boolean;
  onSubmit?: () => void;
};

const selectedAccentStyles: Record<ChoiceAccent, string> = {
  math: "border-math bg-math/10 text-math",
  study: "border-practice bg-practice/10 text-practice",
};

export function ChoiceAnswerButtons({
  options,
  selectedValue,
  onSelect,
  disabled,
  firstButtonRef,
  heading,
  columns = 3,
  variant = "label",
  accent = "math",
  canSubmit = false,
  onSubmit,
}: ChoiceAnswerButtonsProps) {
  const gridClassName =
    columns === 2
      ? "grid grid-cols-2 gap-3"
      : columns === 4
        ? "grid grid-cols-2 gap-3 sm:grid-cols-4"
        : "grid grid-cols-3 gap-3";
  const buttonTextClassName =
    variant === "symbol"
      ? "text-3xl font-bold sm:text-4xl"
      : "text-lg font-semibold sm:text-xl";

  const handleChoiceKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Enter" || disabled || !canSubmit || !selectedValue) {
      return;
    }

    event.preventDefault();
    onSubmit?.();
  };

  return (
    <div className="space-y-3">
      <span className="text-base font-semibold">{heading}</span>
      <div className={gridClassName} onKeyDown={handleChoiceKeyDown}>
        {options.map((option, index) => (
          <button
            key={option.value}
            ref={index === 0 ? firstButtonRef : undefined}
            type="button"
            onClick={() => onSelect(option.value)}
            disabled={disabled}
            aria-pressed={selectedValue === option.value}
            className={`min-h-16 rounded-2xl border px-3 py-3 transition-colors sm:min-h-20 ${buttonTextClassName} ${
              selectedValue === option.value
                ? selectedAccentStyles[accent]
                : "border-foreground/20 hover:bg-foreground/5"
            } disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
