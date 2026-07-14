import {
  formatReviewProgressLabel,
  type StudyWeakSpotDisplay,
} from "@/lib/study/weakSpotDisplay";
import type { ReviewState } from "@/types";
import Link from "next/link";
import { useState } from "react";

type WeakSpotStatsProps = {
  state: ReviewState;
};

function WeakSpotStats({ state }: WeakSpotStatsProps) {
  const progressLabel = formatReviewProgressLabel(state);

  return (
    <p className="mt-1 text-xs tabular-nums text-foreground/70">
      {progressLabel && (
        <>
          <span className="font-medium text-foreground/80">{progressLabel}</span>
          {" · "}
        </>
      )}
      Chyby{" "}
      <span className="font-semibold text-red-600">{state.wrongCount}×</span>
      {state.correctCount > 0 && (
        <>
          {" · Správně "}
          <span className="font-semibold text-green-700">
            {state.correctCount}×
          </span>
        </>
      )}
      {state.streak > 0 && (
        <>
          {" · V řadě "}
          <span className="font-semibold text-blue-600">{state.streak}×</span>
        </>
      )}
    </p>
  );
}

type FixedWeakSpotChipProps = {
  onRemove: () => void;
};

function FixedWeakSpotChip({ onRemove }: FixedWeakSpotChipProps) {
  const [confirming, setConfirming] = useState(false);

  if (confirming) {
    return (
      <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-[0.7rem] font-semibold leading-tight text-green-800">
        <span>Odebrat?</span>
        <button
          type="button"
          aria-label="Potvrdit odebrání"
          onClick={() => {
            onRemove();
            setConfirming(false);
          }}
          className="inline-flex h-4 w-4 items-center justify-center rounded-full hover:bg-green-200 focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-1"
        >
          ✓
        </button>
        <button
          type="button"
          aria-label="Zrušit odebrání"
          onClick={() => setConfirming(false)}
          className="inline-flex h-4 w-4 items-center justify-center rounded-full hover:bg-green-200 focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-1"
        >
          ×
        </button>
      </span>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setConfirming(true)}
      aria-label="Opraveno. Klepnutím odeberete ze slabých míst."
      className="group min-w-[4.75rem] shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-center text-[0.7rem] font-semibold leading-tight text-green-800 transition-colors hover:bg-green-200 focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
    >
      <span className="group-hover:hidden group-focus-visible:hidden">
        Opraveno
      </span>
      <span className="hidden group-hover:inline group-focus-visible:inline">
        Odebrat
      </span>
    </button>
  );
}

type StudyWeakSpotCardProps = {
  state: ReviewState;
  display: StudyWeakSpotDisplay;
  onRemove: () => void;
};

export function StudyWeakSpotCard({
  state,
  display,
  onRemove,
}: StudyWeakSpotCardProps) {
  const fixed = state.streak >= 10;

  return (
    <article className="rounded-xl border border-foreground/15 bg-white/70 px-3 py-2.5">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1 space-y-1">
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
            <span className="text-xs font-medium text-foreground/55">
              {display.subjectTitle}
            </span>
            {display.lessonTitle && (
              <span className="text-xs font-medium text-foreground/55">
                · {display.lessonTitle}
              </span>
            )}
          </div>

          <p className="text-base font-semibold leading-snug">{display.prompt}</p>

          {!display.isUnresolved && (
            <p className="text-sm text-foreground/70">
              Správná odpověď:{" "}
              <span className="font-medium text-foreground">
                {display.expectedAnswerText}
              </span>
            </p>
          )}

          {display.isUnresolved && display.unresolvedMessage && (
            <p className="text-sm text-amber-800">{display.unresolvedMessage}</p>
          )}

          <WeakSpotStats state={state} />

          {(display.lessonHref || display.practiceHref) && (
            <div className="flex flex-wrap gap-2 pt-1">
              {display.lessonHref && (
                <Link
                  href={display.lessonHref}
                  className="text-sm font-semibold text-practice underline-offset-2 hover:underline focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
                >
                  Lekce
                </Link>
              )}
              {display.practiceHref && (
                <Link
                  href={display.practiceHref}
                  className="text-sm font-semibold text-practice underline-offset-2 hover:underline focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
                >
                  Procvičovat
                </Link>
              )}
            </div>
          )}
        </div>

        {fixed && <FixedWeakSpotChip onRemove={onRemove} />}
      </div>
    </article>
  );
}
