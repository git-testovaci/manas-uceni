"use client";

import { getReviewStateMap, removeReviewState } from "@/lib/storage";
import type { MathTopic, ReviewState } from "@/types";
import { useCallback, useEffect, useMemo, useState } from "react";

type DashboardSubject = "math" | "czech" | "english";

const MATH_TOPIC_LABELS: Record<MathTopic, string> = {
  addition: "Sčítání",
  subtraction: "Odčítání",
  multiplication: "Násobení",
  division: "Dělení",
  "division-remainder": "Dělení se zbytkem",
  mixed: "Smíšené",
};

const SUBJECT_FILTERS: {
  id: DashboardSubject;
  label: string;
  disabled?: boolean;
  disabledHint?: string;
}[] = [
  { id: "math", label: "Matematika" },
  { id: "czech", label: "Český jazyk" },
  {
    id: "english",
    label: "Angličtina",
    disabled: true,
    disabledHint: "Připravuje se",
  },
];

function isValidReviewState(value: unknown): value is ReviewState {
  if (!value || typeof value !== "object") {
    return false;
  }

  const state = value as Record<string, unknown>;

  return (
    typeof state.itemId === "string" &&
    typeof state.subject === "string" &&
    typeof state.topic === "string" &&
    typeof state.correctCount === "number" &&
    Number.isFinite(state.correctCount) &&
    typeof state.wrongCount === "number" &&
    Number.isFinite(state.wrongCount) &&
    typeof state.streak === "number" &&
    Number.isFinite(state.streak) &&
    typeof state.status === "string"
  );
}

function loadReviewStates(): ReviewState[] {
  try {
    const reviewMap = getReviewStateMap();

    if (!reviewMap || typeof reviewMap !== "object") {
      return [];
    }

    return Object.values(reviewMap).filter(isValidReviewState);
  } catch {
    return [];
  }
}

function isRealWeakSpot(state: ReviewState): boolean {
  return typeof state.wrongCount === "number" && state.wrongCount > 0;
}

function parseMathExerciseDisplay(itemId: string): string | null {
  const addMatch = /^math-add-(\d+)-(\d+)$/.exec(itemId);
  if (addMatch) {
    const a = Number(addMatch[1]);
    const b = Number(addMatch[2]);
    return `${a} + ${b} = ${a + b}`;
  }

  const subtractMatch = /^math-subtract-(\d+)-(\d+)$/.exec(itemId);
  if (subtractMatch) {
    const a = Number(subtractMatch[1]);
    const b = Number(subtractMatch[2]);
    return `${a} − ${b} = ${a - b}`;
  }

  const multiplyMatch = /^math-multiply-(\d+)x(\d+)$/.exec(itemId);
  if (multiplyMatch) {
    const a = Number(multiplyMatch[1]);
    const b = Number(multiplyMatch[2]);
    return `${a} × ${b} = ${a * b}`;
  }

  const divideMatch = /^math-divide-(\d+)-by-(\d+)$/.exec(itemId);
  if (divideMatch) {
    const a = Number(divideMatch[1]);
    const b = Number(divideMatch[2]);
    if (b === 0) {
      return null;
    }
    return `${a} ÷ ${b} = ${a / b}`;
  }

  const remainderMatch = /^math-divide-rem-(\d+)-by-(\d+)$/.exec(itemId);
  if (remainderMatch) {
    const a = Number(remainderMatch[1]);
    const b = Number(remainderMatch[2]);
    if (b === 0) {
      return null;
    }
    const quotient = Math.floor(a / b);
    const remainder = a % b;
    return `${a} ÷ ${b} = ${quotient} zbytek ${remainder}`;
  }

  return null;
}

function getMathTopicLabel(topic: string): string | null {
  if (topic in MATH_TOPIC_LABELS) {
    return MATH_TOPIC_LABELS[topic as MathTopic];
  }

  return null;
}

function isFixedWeakSpot(state: ReviewState): boolean {
  return state.streak >= 10;
}

function WeakSpotStats({ state }: { state: ReviewState }) {
  return (
    <p className="mt-1 text-xs tabular-nums text-foreground/70">
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

type WeakSpotSortMode =
  | "best-streak"
  | "worst-streak"
  | "most-mistakes"
  | "fewest-mistakes";

const WEAK_SPOT_SORT_OPTIONS: {
  value: WeakSpotSortMode;
  label: string;
}[] = [
  { value: "best-streak", label: "Nejlepší série" },
  { value: "worst-streak", label: "Nejnižší série" },
  { value: "most-mistakes", label: "Nejvíc chyb" },
  { value: "fewest-mistakes", label: "Nejméně chyb" },
];

function sortWeakSpots(
  items: ReviewState[],
  mode: WeakSpotSortMode,
  getDisplayKey: (state: ReviewState) => string,
): ReviewState[] {
  return [...items].sort((a, b) => {
    const displayA = getDisplayKey(a);
    const displayB = getDisplayKey(b);

    switch (mode) {
      case "best-streak": {
        if (b.streak !== a.streak) {
          return b.streak - a.streak;
        }
        if (b.wrongCount !== a.wrongCount) {
          return b.wrongCount - a.wrongCount;
        }
        return displayA.localeCompare(displayB, "cs");
      }
      case "worst-streak": {
        if (a.streak !== b.streak) {
          return a.streak - b.streak;
        }
        if (b.wrongCount !== a.wrongCount) {
          return b.wrongCount - a.wrongCount;
        }
        return displayA.localeCompare(displayB, "cs");
      }
      case "most-mistakes": {
        if (b.wrongCount !== a.wrongCount) {
          return b.wrongCount - a.wrongCount;
        }
        if (b.streak !== a.streak) {
          return b.streak - a.streak;
        }
        return displayA.localeCompare(displayB, "cs");
      }
      case "fewest-mistakes": {
        if (a.wrongCount !== b.wrongCount) {
          return a.wrongCount - b.wrongCount;
        }
        if (a.streak !== b.streak) {
          return a.streak - b.streak;
        }
        return displayA.localeCompare(displayB, "cs");
      }
    }
  });
}

function isNeedsPractice(state: ReviewState): boolean {
  return isRealWeakSpot(state) && state.streak < 10;
}

type SubjectStats = {
  totalWeakSpots: number;
  practiceCount: number;
  fixedCount: number;
};

function computeSubjectStats(states: ReviewState[]): SubjectStats {
  const weakSpots = states.filter(isRealWeakSpot);

  return {
    totalWeakSpots: weakSpots.length,
    practiceCount: weakSpots.filter(isNeedsPractice).length,
    fixedCount: weakSpots.filter(isFixedWeakSpot).length,
  };
}

type SubjectFilterButtonProps = {
  label: string;
  selected: boolean;
  disabled?: boolean;
  disabledHint?: string;
  onClick: () => void;
};

function SubjectFilterButton({
  label,
  selected,
  disabled = false,
  disabledHint,
  onClick,
}: SubjectFilterButtonProps) {
  if (disabled) {
    return (
      <button
        type="button"
        disabled
        aria-disabled="true"
        className="min-h-12 cursor-not-allowed rounded-2xl border border-foreground/10 bg-foreground/5 px-4 py-3 text-left text-base font-semibold text-foreground/45"
      >
        <span className="block">{label}</span>
        {disabledHint && (
          <span className="mt-1 block text-xs font-normal">{disabledHint}</span>
        )}
      </button>
    );
  }

  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`min-h-12 rounded-2xl border px-4 py-3 text-left text-base font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 ${
        selected
          ? "border-practice bg-practice/10 text-practice shadow-sm"
          : "border-foreground/20 hover:bg-foreground/5"
      }`}
    >
      {label}
      {selected && <span className="sr-only">Vybráno</span>}
    </button>
  );
}

type StatCardProps = {
  label: string;
  value: string;
};

function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-foreground/15 bg-white/70 p-4">
      <p className="text-sm text-foreground/60">{label}</p>
      <p className="mt-1 text-2xl font-bold tabular-nums">{value}</p>
    </div>
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

type WeakSpotCardProps = {
  state: ReviewState;
  exerciseDisplay: string | null;
  topicLabel: string | null;
  onRemove: () => void;
};

function WeakSpotCard({
  state,
  exerciseDisplay,
  topicLabel,
  onRemove,
}: WeakSpotCardProps) {
  const fixed = isFixedWeakSpot(state);

  return (
    <article className="rounded-xl border border-foreground/15 bg-white/70 px-3 py-2.5">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
            <p className="text-base font-semibold leading-snug">
              {exerciseDisplay ?? state.itemId}
            </p>
            {topicLabel && (
              <span className="text-xs font-medium text-foreground/55">
                {topicLabel}
              </span>
            )}
          </div>
          <WeakSpotStats state={state} />
        </div>
        {fixed && <FixedWeakSpotChip onRemove={onRemove} />}
      </div>
    </article>
  );
}

export function PracticeDashboardClient() {
  const [selectedSubject, setSelectedSubject] =
    useState<DashboardSubject>("math");
  const [mathWeakSpotSort, setMathWeakSpotSort] =
    useState<WeakSpotSortMode>("best-streak");
  const [reviewStates, setReviewStates] = useState<ReviewState[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    return loadReviewStates();
  });

  const refresh = useCallback(() => {
    setReviewStates(loadReviewStates());
  }, []);

  useEffect(() => {
    const handleFocus = () => {
      refresh();
    };

    const handleStorage = (event: StorageEvent) => {
      if (event.key?.includes("reviewState")) {
        refresh();
      }
    };

    window.addEventListener("focus", handleFocus);
    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("storage", handleStorage);
    };
  }, [refresh]);

  const mathWeakSpots = useMemo(() => {
    const filtered = reviewStates
      .filter((state) => state.subject === "math")
      .filter(isRealWeakSpot);

    return sortWeakSpots(filtered, mathWeakSpotSort, (state) =>
      parseMathExerciseDisplay(state.itemId) ?? state.itemId,
    );
  }, [reviewStates, mathWeakSpotSort]);

  const czechWeakSpots = useMemo(
    () =>
      reviewStates
        .filter((state) => state.subject === "czech")
        .filter(isRealWeakSpot),
    [reviewStates],
  );

  const mathStats = useMemo(
    () => computeSubjectStats(reviewStates.filter((s) => s.subject === "math")),
    [reviewStates],
  );

  const czechStats = useMemo(
    () =>
      computeSubjectStats(reviewStates.filter((s) => s.subject === "czech")),
    [reviewStates],
  );

  const activeStats =
    selectedSubject === "czech" ? czechStats : mathStats;

  const handleRemoveWeakSpot = (itemId: string) => {
    removeReviewState(itemId);
    refresh();
  };

  return (
    <div className="space-y-8">
      <p className="text-lg text-foreground/70">
        Tady uvidíš slabá místa a přehled procvičování napříč předměty.
      </p>

      <section aria-label="Filtr předmětů" className="space-y-3">
        <h2 className="text-base font-semibold">Předmět</h2>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          {SUBJECT_FILTERS.map(({ id, label, disabled, disabledHint }) => (
            <SubjectFilterButton
              key={id}
              label={label}
              selected={selectedSubject === id}
              disabled={disabled}
              disabledHint={disabledHint}
              onClick={() => {
                if (!disabled) {
                  setSelectedSubject(id);
                }
              }}
            />
          ))}
        </div>
      </section>

      <section aria-label="Přehled statistik" className="space-y-3">
        <h2 className="text-base font-semibold">Přehled</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          <StatCard
            label="Slabá místa"
            value={String(activeStats.totalWeakSpots)}
          />
          <StatCard
            label="K procvičení"
            value={String(activeStats.practiceCount)}
          />
          <StatCard
            label="Opraveno"
            value={String(activeStats.fixedCount)}
          />
        </div>
      </section>

      {selectedSubject === "math" && (
        <section aria-label="Slabá místa z matematiky" className="space-y-3">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-base font-semibold">Slabá místa z matematiky</h2>
            {mathWeakSpots.length > 0 && (
              <label className="flex items-center gap-2 text-sm text-foreground/70">
                <span>Řadit</span>
                <select
                  value={mathWeakSpotSort}
                  onChange={(event) =>
                    setMathWeakSpotSort(event.target.value as WeakSpotSortMode)
                  }
                  className="min-h-9 rounded-lg border border-foreground/20 bg-white px-2 py-1 text-sm font-medium text-foreground focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
                >
                  {WEAK_SPOT_SORT_OPTIONS.map(({ value, label }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </label>
            )}
          </div>
          {mathWeakSpots.length === 0 ? (
            <p className="rounded-2xl border border-foreground/15 bg-white/70 px-4 py-5 text-base text-foreground/70">
              Zatím tu nejsou žádná slabá místa z matematiky.
            </p>
          ) : (
            <div className="space-y-2">
              {mathWeakSpots.map((state) => (
                <WeakSpotCard
                  key={state.itemId}
                  state={state}
                  exerciseDisplay={parseMathExerciseDisplay(state.itemId)}
                  topicLabel={getMathTopicLabel(state.topic)}
                  onRemove={() => handleRemoveWeakSpot(state.itemId)}
                />
              ))}
            </div>
          )}
        </section>
      )}

      {selectedSubject === "czech" && (
        <section aria-label="Slabá místa z češtiny" className="space-y-3">
          <h2 className="text-base font-semibold">Slabá místa z češtiny</h2>
          {czechWeakSpots.length === 0 ? (
            <p className="rounded-2xl border border-foreground/15 bg-white/70 px-4 py-5 text-base text-foreground/70">
              Slabá místa z češtiny zatím sbíráme až v další verzi.
            </p>
          ) : (
            <div className="space-y-2">
              {czechWeakSpots.map((state) => (
                <WeakSpotCard
                  key={state.itemId}
                  state={state}
                  exerciseDisplay={null}
                  topicLabel={null}
                  onRemove={() => handleRemoveWeakSpot(state.itemId)}
                />
              ))}
            </div>
          )}
        </section>
      )}

      {selectedSubject === "english" && (
        <section aria-label="Angličtina" className="space-y-3">
          <h2 className="text-base font-semibold">Angličtina</h2>
          <p className="rounded-2xl border border-foreground/10 bg-foreground/5 px-4 py-5 text-base text-foreground/60">
            Angličtina se připravuje.
          </p>
        </section>
      )}
    </div>
  );
}
