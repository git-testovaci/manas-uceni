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

function isWeakSpot(state: ReviewState): boolean {
  if (state.status === "mastered") {
    return true;
  }

  if (state.wrongCount > 0) {
    return true;
  }

  return state.status === "weak" || state.status === "improving";
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

function getReviewStatusLabel(state: ReviewState): string | null {
  if (state.status === "mastered") {
    return "Zvládnuté";
  }

  if (state.status === "weak") {
    return "Čeká na zopakování";
  }

  if (state.status === "improving" || state.status === "learning") {
    return "Procvičuje se";
  }

  return null;
}

function getMasteredIndicator(state: ReviewState): string | null {
  if (state.status !== "mastered") {
    return null;
  }

  if (state.streak >= 10) {
    return `${state.streak}× správně v řadě`;
  }

  return "Zvládnuté";
}

function compareWeakSpots(a: ReviewState, b: ReviewState): number {
  const statusOrder: Record<ReviewState["status"], number> = {
    weak: 0,
    improving: 1,
    learning: 2,
    new: 3,
    mastered: 4,
  };

  const statusDiff = statusOrder[a.status] - statusOrder[b.status];
  if (statusDiff !== 0) {
    return statusDiff;
  }

  if (b.wrongCount !== a.wrongCount) {
    return b.wrongCount - a.wrongCount;
  }

  return a.itemId.localeCompare(b.itemId);
}

type SubjectStats = {
  totalWeakSpots: number;
  dueCount: number | null;
  masteredCount: number | null;
};

function computeSubjectStats(states: ReviewState[]): SubjectStats {
  const weakSpots = states.filter(isWeakSpot);

  if (weakSpots.length === 0) {
    return {
      totalWeakSpots: 0,
      dueCount: null,
      masteredCount: null,
    };
  }

  const dueCount = weakSpots.filter(
    (state) => state.status === "weak" || state.status === "improving",
  ).length;

  const masteredCount = weakSpots.filter(
    (state) => state.status === "mastered",
  ).length;

  return {
    totalWeakSpots: weakSpots.length,
    dueCount: dueCount > 0 ? dueCount : null,
    masteredCount: masteredCount > 0 ? masteredCount : null,
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

type WeakSpotCardProps = {
  state: ReviewState;
  subjectLabel: string;
  exerciseDisplay: string | null;
  topicLabel: string | null;
  statusLabel: string | null;
  masteredIndicator: string | null;
  onRemove?: () => void;
};

function WeakSpotCard({
  state,
  subjectLabel,
  exerciseDisplay,
  topicLabel,
  statusLabel,
  masteredIndicator,
  onRemove,
}: WeakSpotCardProps) {
  return (
    <article className="rounded-2xl border border-foreground/15 bg-white/70 p-4">
      <div className="space-y-2">
        <p className="text-lg font-semibold leading-snug">
          {exerciseDisplay ?? state.itemId}
        </p>
        <p className="text-sm font-medium text-foreground/60">{subjectLabel}</p>
        {topicLabel && (
          <p className="text-sm text-foreground/70">{topicLabel}</p>
        )}
      </div>

      <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
        {state.wrongCount > 0 && (
          <div>
            <dt className="text-foreground/60">Chybně</dt>
            <dd className="font-semibold tabular-nums">{state.wrongCount}×</dd>
          </div>
        )}
        {state.correctCount > 0 && (
          <div>
            <dt className="text-foreground/60">Správně</dt>
            <dd className="font-semibold tabular-nums">{state.correctCount}×</dd>
          </div>
        )}
        {state.streak > 0 && (
          <div>
            <dt className="text-foreground/60">Správně v řadě</dt>
            <dd className="font-semibold tabular-nums">{state.streak}×</dd>
          </div>
        )}
      </dl>

      {(statusLabel || masteredIndicator) && (
        <div className="mt-4 flex flex-wrap gap-2">
          {masteredIndicator && (
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">
              {masteredIndicator}
            </span>
          )}
          {statusLabel && state.status !== "mastered" && (
            <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-900">
              {statusLabel}
            </span>
          )}
        </div>
      )}

      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          className="mt-4 min-h-10 w-full rounded-xl border border-foreground/20 px-4 py-2 text-sm font-semibold transition-colors hover:bg-foreground/5 focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
        >
          Odebrat ze slabých míst
        </button>
      )}
    </article>
  );
}

export function PracticeDashboardClient() {
  const [selectedSubject, setSelectedSubject] =
    useState<DashboardSubject>("math");
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

  const mathWeakSpots = useMemo(
    () =>
      reviewStates
        .filter((state) => state.subject === "math")
        .filter(isWeakSpot)
        .sort(compareWeakSpots),
    [reviewStates],
  );

  const czechWeakSpots = useMemo(
    () =>
      reviewStates
        .filter((state) => state.subject === "czech")
        .filter(isWeakSpot),
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
            value={
              activeStats.totalWeakSpots > 0
                ? String(activeStats.totalWeakSpots)
                : "0"
            }
          />
          <StatCard
            label="Čeká na opakování"
            value={
              activeStats.dueCount !== null
                ? String(activeStats.dueCount)
                : "Zatím není dost dat."
            }
          />
          <StatCard
            label="Zvládnuté"
            value={
              activeStats.masteredCount !== null
                ? String(activeStats.masteredCount)
                : "Zatím není dost dat."
            }
          />
        </div>
      </section>

      {selectedSubject === "math" && (
        <section aria-label="Slabá místa z matematiky" className="space-y-3">
          <h2 className="text-base font-semibold">Slabá místa z matematiky</h2>
          {mathWeakSpots.length === 0 ? (
            <p className="rounded-2xl border border-foreground/15 bg-white/70 px-4 py-5 text-base text-foreground/70">
              Zatím tu nejsou žádná slabá místa z matematiky.
            </p>
          ) : (
            <div className="space-y-3">
              {mathWeakSpots.map((state) => (
                <WeakSpotCard
                  key={state.itemId}
                  state={state}
                  subjectLabel="Matematika"
                  exerciseDisplay={parseMathExerciseDisplay(state.itemId)}
                  topicLabel={getMathTopicLabel(state.topic)}
                  statusLabel={getReviewStatusLabel(state)}
                  masteredIndicator={getMasteredIndicator(state)}
                  onRemove={
                    state.status === "mastered"
                      ? () => handleRemoveWeakSpot(state.itemId)
                      : undefined
                  }
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
            <div className="space-y-3">
              {czechWeakSpots.map((state) => (
                <WeakSpotCard
                  key={state.itemId}
                  state={state}
                  subjectLabel="Český jazyk"
                  exerciseDisplay={null}
                  topicLabel={null}
                  statusLabel={getReviewStatusLabel(state)}
                  masteredIndicator={getMasteredIndicator(state)}
                  onRemove={
                    state.status === "mastered"
                      ? () => handleRemoveWeakSpot(state.itemId)
                      : undefined
                  }
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
