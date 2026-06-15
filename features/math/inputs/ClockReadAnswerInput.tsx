import type { KeyboardEvent, RefObject } from "react";

type ClockReadAnswerInputProps = {
  hourValue: string;
  minuteValue: string;
  onHourChange: (value: string) => void;
  onMinuteChange: (value: string) => void;
  onHourKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  onMinuteKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  hourInputRef: RefObject<HTMLInputElement | null>;
  minuteInputRef: RefObject<HTMLInputElement | null>;
  disabled: boolean;
  expectedMinute: number;
};

const INPUT_CLASS_NAME =
  "min-h-12 w-full rounded-xl border border-foreground/20 px-4 text-2xl text-center focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2";

function sanitizeClockField(value: string, maxLength: number): string {
  return value.replace(/\D/g, "").slice(0, maxLength);
}

export function ClockReadAnswerInput({
  hourValue,
  minuteValue,
  onHourChange,
  onMinuteChange,
  onHourKeyDown,
  onMinuteKeyDown,
  hourInputRef,
  minuteInputRef,
  disabled,
  expectedMinute,
}: ClockReadAnswerInputProps) {
  const minuteLabel =
    expectedMinute === 30 ? "Minuty (např. 30)" : "Minuty (volitelně 00)";

  return (
    <fieldset className="space-y-2" disabled={disabled}>
      <legend className="text-base font-semibold">Tvoje odpověď</legend>
      <div className="flex items-end gap-2 sm:gap-3">
        <label className="block min-w-0 flex-1 space-y-2">
          <span className="text-sm font-medium text-foreground/80">Hodiny</span>
          <input
            ref={hourInputRef}
            type="text"
            inputMode="numeric"
            value={hourValue}
            onChange={(event) =>
              onHourChange(sanitizeClockField(event.target.value, 2))
            }
            onKeyDown={onHourKeyDown}
            disabled={disabled}
            aria-label="Hodiny"
            className={INPUT_CLASS_NAME}
          />
        </label>
        <span
          aria-hidden="true"
          className="pb-3 text-3xl font-bold text-foreground/70"
        >
          :
        </span>
        <label className="block min-w-0 flex-1 space-y-2">
          <span className="text-sm font-medium text-foreground/80">
            {minuteLabel}
          </span>
          <input
            ref={minuteInputRef}
            type="text"
            inputMode="numeric"
            value={minuteValue}
            onChange={(event) =>
              onMinuteChange(sanitizeClockField(event.target.value, 2))
            }
            onKeyDown={onMinuteKeyDown}
            disabled={disabled}
            aria-label="Minuty"
            className={INPUT_CLASS_NAME}
          />
        </label>
      </div>
    </fieldset>
  );
}
