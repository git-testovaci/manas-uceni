"use client";

import { PREDEFINED_IY_DICTATIONS, type IyDictation } from "@/data/czech";
import { useMemo, useState } from "react";

const IY_LETTERS = ["i", "í", "y", "ý"] as const;
const IY_PATTERN = /[iíyýIÍYÝ]/g;
const STORAGE_KEY = "vyukovy-czech-custom-iy-dictations";

type SetupMode = "predefined" | "custom";
type Phase = "setup" | "practice" | "results";

type BlankToken = {
  type: "blank";
  id: number;
  correct: string;
};

type TextToken = {
  type: "text";
  value: string;
};

type DictationToken = TextToken | BlankToken;

type ParsedDictation = {
  tokens: DictationToken[];
  blanks: BlankToken[];
};

type CustomDictationForm = {
  title: string;
  page: string;
  exercise: string;
  text: string;
};

const EMPTY_FORM: CustomDictationForm = {
  title: "",
  page: "",
  exercise: "",
  text: "",
};

function parseDictationText(text: string): ParsedDictation {
  const tokens: DictationToken[] = [];
  const blanks: BlankToken[] = [];
  let lastIndex = 0;
  let blankId = 0;

  for (const match of text.matchAll(IY_PATTERN)) {
    const index = match.index ?? 0;

    if (index > lastIndex) {
      tokens.push({ type: "text", value: text.slice(lastIndex, index) });
    }

    const blank: BlankToken = {
      type: "blank",
      id: blankId,
      correct: match[0],
    };
    blankId += 1;
    blanks.push(blank);
    tokens.push(blank);
    lastIndex = index + 1;
  }

  if (lastIndex < text.length) {
    tokens.push({ type: "text", value: text.slice(lastIndex) });
  }

  return { tokens, blanks };
}

function isIyAnswerCorrect(chosen: string, correct: string): boolean {
  return chosen.toLowerCase() === correct.toLowerCase();
}

function getGradeFromMistakes(mistakes: number): number {
  if (mistakes <= 0) {
    return 1;
  }
  if (mistakes === 1) {
    return 2;
  }
  if (mistakes === 2) {
    return 3;
  }
  if (mistakes === 3) {
    return 4;
  }
  return 5;
}

function generateTitleFromText(text: string): string {
  const trimmed = text.trim();
  const firstSentence = trimmed.split(/[.!?]/)[0]?.trim() ?? trimmed;

  if (!firstSentence) {
    return "Vlastní diktát";
  }

  if (firstSentence.length > 60) {
    return `${firstSentence.slice(0, 57)}...`;
  }

  return firstSentence;
}

function loadCustomDictations(): IyDictation[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.filter(
      (item): item is IyDictation =>
        typeof item === "object" &&
        item !== null &&
        typeof item.id === "string" &&
        typeof item.title === "string" &&
        typeof item.page === "string" &&
        typeof item.exercise === "string" &&
        typeof item.text === "string",
    );
  } catch {
    return [];
  }
}

function saveCustomDictations(dictations: IyDictation[]): void {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(dictations));
}

type DisplayUnit =
  | { type: "word"; parts: DictationToken[] }
  | { type: "space"; value: string };

function groupTokensForDisplay(tokens: DictationToken[]): DisplayUnit[] {
  const units: DisplayUnit[] = [];
  let currentWord: DictationToken[] = [];

  const flushWord = () => {
    if (currentWord.length > 0) {
      units.push({ type: "word", parts: currentWord });
      currentWord = [];
    }
  };

  for (const token of tokens) {
    if (token.type === "blank") {
      currentWord.push(token);
      continue;
    }

    const segments = token.value.split(/(\s+)/);
    for (const segment of segments) {
      if (!segment) {
        continue;
      }

      if (/^\s+$/.test(segment)) {
        flushWord();
        units.push({ type: "space", value: segment });
      } else {
        currentWord.push({ type: "text", value: segment });
      }
    }
  }

  flushWord();
  return units;
}

const BLANK_SLOT_BASE =
  "inline-flex h-[1.6rem] w-[1.15rem] min-w-[1.05rem] max-w-[1.25rem] touch-manipulation items-center justify-center rounded-sm border border-solid px-px align-middle text-inherit leading-none transition-colors";

function getPracticeBlankClassName(
  isActive: boolean,
  chosen: string | undefined,
): string {
  if (isActive) {
    return `${BLANK_SLOT_BASE} border-czech bg-czech/25 py-px -my-px font-semibold text-czech`;
  }

  if (chosen) {
    return `${BLANK_SLOT_BASE} border-czech/40 bg-czech/10 py-px -my-px font-medium text-foreground`;
  }

  return `${BLANK_SLOT_BASE} border-czech/35 bg-czech/12 py-px -my-px text-czech/65`;
}

function DictationTextDisplay({
  tokens,
  phase,
  answers,
  activeBlankId,
  evaluation,
  onBlankSelect,
}: {
  tokens: DictationToken[];
  phase: Phase;
  answers: Record<number, string>;
  activeBlankId: number | null;
  evaluation: { mistakeIds: Set<number> } | null;
  onBlankSelect: (blankId: number) => void;
}) {
  const units = groupTokensForDisplay(tokens);

  function renderBlank(token: BlankToken, key: string) {
    const chosen = answers[token.id];
    const isActive = phase === "practice" && activeBlankId === token.id;
    const isMistake = evaluation?.mistakeIds.has(token.id) ?? false;
    const isCorrect =
      phase === "results" &&
      chosen !== undefined &&
      isIyAnswerCorrect(chosen, token.correct);

    if (phase === "results") {
      return (
        <span key={key} className="inline align-middle">
          <span
            className={`${BLANK_SLOT_BASE} ${
              isMistake
                ? "border-red-400 bg-red-50 font-medium text-red-700"
                : "border-green-500/45 bg-green-50 font-medium text-green-900"
            }`}
            aria-label={
              isMistake
                ? `Chyba: napsal jsi ${chosen}, správně ${token.correct.toLowerCase()}`
                : `Správně ${chosen}`
            }
          >
            {chosen}
          </span>
          {isMistake && (
            <span className="ml-px text-[0.65rem] font-medium text-red-600">
              ({token.correct.toLowerCase()})
            </span>
          )}
          {isCorrect && <span className="sr-only">Správně</span>}
        </span>
      );
    }

    return (
      <button
        key={key}
        type="button"
        onClick={() => onBlankSelect(token.id)}
        aria-current={isActive ? "true" : undefined}
        aria-label={
          chosen
            ? `Místo ${token.id + 1}, zvoleno ${chosen}. Klepni pro změnu.`
            : `Místo ${token.id + 1}, zatím prázdné`
        }
        className={getPracticeBlankClassName(isActive, chosen)}
      >
        {chosen ?? (
          <span aria-hidden="true" className="text-[0.85em] leading-none">
            ·
          </span>
        )}
      </button>
    );
  }

  return (
    <p className="text-[19px] leading-[1.65]">
      {units.map((unit, unitIndex) => {
        if (unit.type === "space") {
          return (
            <span key={`space-${unitIndex}`} className="whitespace-pre-wrap">
              {unit.value}
            </span>
          );
        }

        return (
          <span key={`word-${unitIndex}`} className="whitespace-nowrap">
            {unit.parts.map((part, partIndex) => {
              const partKey = `${unitIndex}-${partIndex}`;

              if (part.type === "text") {
                return <span key={partKey}>{part.value}</span>;
              }

              return renderBlank(part, partKey);
            })}
          </span>
        );
      })}
    </p>
  );
}

function SetupModeSwitch({
  mode,
  onModeChange,
}: {
  mode: SetupMode;
  onModeChange: (mode: SetupMode) => void;
}) {
  const options: { value: SetupMode; label: string }[] = [
    { value: "predefined", label: "Předpřipravené diktáty" },
    { value: "custom", label: "Vlastní nastavení" },
  ];

  return (
    <fieldset>
      <legend className="sr-only">Způsob výběru diktátu</legend>
      <div
        role="radiogroup"
        aria-label="Způsob výběru diktátu"
        className="grid grid-cols-1 gap-2 sm:grid-cols-2"
      >
        {options.map(({ value, label }) => {
          const selected = mode === value;

          return (
            <label
              key={value}
              className={`flex min-h-12 cursor-pointer items-center justify-center rounded-2xl border px-4 py-3 text-center text-base font-semibold transition-colors focus-within:ring-2 focus-within:ring-foreground focus-within:ring-offset-2 ${
                selected
                  ? "border-czech bg-czech text-white"
                  : "border-foreground/20 hover:bg-foreground/5"
              }`}
            >
              <input
                type="radio"
                name="iy-setup-mode"
                value={value}
                checked={selected}
                onChange={() => onModeChange(value)}
                className="sr-only"
              />
              <span>{label}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

function DictationCard({
  dictation,
  onStart,
  onDelete,
}: {
  dictation: IyDictation;
  onStart: () => void;
  onDelete?: () => void;
}) {
  const meta = [dictation.page && `Strana ${dictation.page}`, dictation.exercise && `Cvičení ${dictation.exercise}`]
    .filter(Boolean)
    .join(" · ");

  return (
    <article className="rounded-2xl border border-foreground/15 bg-white/70 p-4 shadow-sm">
      <h3 className="text-lg font-semibold">{dictation.title}</h3>
      {meta && <p className="mt-1 text-sm text-foreground/60">{meta}</p>}
      <p className="mt-2 line-clamp-2 text-sm text-foreground/75">
        {dictation.text}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={onStart}
          className="rounded-xl bg-czech px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Začít diktát
        </button>
        {onDelete && (
          <button
            type="button"
            onClick={onDelete}
            className="rounded-xl border border-foreground/20 px-4 py-2 text-sm font-medium text-foreground/80 hover:bg-foreground/5"
          >
            Smazat
          </button>
        )}
      </div>
    </article>
  );
}

export function IyDictationClient() {
  const [setupMode, setSetupMode] = useState<SetupMode>("predefined");
  const [phase, setPhase] = useState<Phase>("setup");
  const [activeDictation, setActiveDictation] = useState<IyDictation | null>(
    null,
  );
  const [customDictations, setCustomDictations] = useState<IyDictation[]>([]);
  const [customDictationsLoaded, setCustomDictationsLoaded] = useState(false);
  const [form, setForm] = useState<CustomDictationForm>(EMPTY_FORM);
  const [formError, setFormError] = useState<string | null>(null);
  const [activeBlankId, setActiveBlankId] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  function handleSetupModeChange(mode: SetupMode) {
    setSetupMode(mode);

    if (mode === "custom" && !customDictationsLoaded) {
      setCustomDictations(loadCustomDictations());
      setCustomDictationsLoaded(true);
    }
  }

  const parsed = useMemo(() => {
    if (!activeDictation) {
      return null;
    }

    return parseDictationText(activeDictation.text);
  }, [activeDictation]);

  const blankCount = parsed?.blanks.length ?? 0;
  const answeredCount = parsed
    ? parsed.blanks.filter((blank) => answers[blank.id] !== undefined).length
    : 0;
  const allAnswered = blankCount > 0 && answeredCount === blankCount;

  const evaluation = useMemo(() => {
    if (!parsed || phase !== "results") {
      return null;
    }

    const mistakes = parsed.blanks.filter(
      (blank) => !isIyAnswerCorrect(answers[blank.id] ?? "", blank.correct),
    );

    return {
      mistakes: mistakes.length,
      grade: getGradeFromMistakes(mistakes.length),
      mistakeIds: new Set(mistakes.map((blank) => blank.id)),
    };
  }, [answers, parsed, phase]);

  function persistCustomDictations(next: IyDictation[]) {
    setCustomDictations(next);
    setCustomDictationsLoaded(true);
    saveCustomDictations(next);
  }

  function startDictation(dictation: IyDictation) {
    const nextParsed = parseDictationText(dictation.text);

    if (nextParsed.blanks.length === 0) {
      setActiveDictation(dictation);
      setPhase("practice");
      setAnswers({});
      setActiveBlankId(null);
      return;
    }

    setActiveDictation(dictation);
    setPhase("practice");
    setAnswers({});
    setActiveBlankId(nextParsed.blanks[0]?.id ?? null);
  }

  function handleAnswer(letter: string) {
    if (phase !== "practice" || activeBlankId === null || !parsed) {
      return;
    }

    const nextAnswers = { ...answers, [activeBlankId]: letter };
    setAnswers(nextAnswers);

    const nextUnanswered = parsed.blanks.find(
      (blank) => nextAnswers[blank.id] === undefined,
    );
    setActiveBlankId(nextUnanswered?.id ?? null);
  }

  function handleEvaluate() {
    if (!allAnswered) {
      return;
    }

    setPhase("results");
    setActiveBlankId(null);
  }

  function handleRetry() {
    if (!activeDictation) {
      return;
    }

    startDictation(activeDictation);
    setPhase("practice");
  }

  function handleBackToSetup() {
    setPhase("setup");
    setActiveDictation(null);
    setAnswers({});
    setActiveBlankId(null);
    setFormError(null);
  }

  function handleSaveCustomDictation() {
    const title = form.title.trim();
    const page = form.page.trim();
    const exercise = form.exercise.trim();
    const text = form.text.trim();

    if (!text) {
      setFormError("Text diktátu nesmí být prázdný.");
      return;
    }

    const parsedCustom = parseDictationText(text);
    if (parsedCustom.blanks.length === 0) {
      setFormError("V tomto diktátu není žádné i/y k doplnění.");
      return;
    }

    const dictation: IyDictation = {
      id: `custom-${Date.now()}`,
      title: title || generateTitleFromText(text),
      page,
      exercise,
      text,
    };

    persistCustomDictations([dictation, ...customDictations]);
    setForm(EMPTY_FORM);
    setFormError(null);
  }

  function handleDeleteCustom(id: string) {
    persistCustomDictations(customDictations.filter((item) => item.id !== id));
  }

  if (phase === "setup") {
    return (
      <div className="space-y-6">
        <header>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Procvičování i/y
          </h1>
          <p className="mt-4 text-base text-foreground/70">
            U každého prázdného místa vyber správné písmeno: i, í, y nebo ý.
            Klepni na místo ve větě a pak zvol odpověď tlačítkem.
          </p>
        </header>

        <SetupModeSwitch mode={setupMode} onModeChange={handleSetupModeChange} />

        {setupMode === "predefined" && (
          <section aria-label="Předpřipravené diktáty" className="space-y-4">
            {PREDEFINED_IY_DICTATIONS.map((dictation) => (
              <DictationCard
                key={dictation.id}
                dictation={dictation}
                onStart={() => startDictation(dictation)}
              />
            ))}
          </section>
        )}

        {setupMode === "custom" && (
          <section aria-label="Vlastní diktáty" className="space-y-6">
            <form
              className="space-y-4 rounded-2xl border border-foreground/15 bg-white/70 p-4"
              onSubmit={(event) => {
                event.preventDefault();
                handleSaveCustomDictation();
              }}
            >
              <h2 className="text-lg font-semibold">Nový vlastní diktát</h2>

              <label className="block space-y-1">
                <span className="text-sm font-medium">Název diktátu</span>
                <input
                  type="text"
                  value={form.title}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      title: event.target.value,
                    }))
                  }
                  className="w-full rounded-xl border border-foreground/20 bg-white px-3 py-2 text-base"
                  placeholder="Nech prázdné pro název z první věty"
                />
              </label>

              <div className="grid grid-cols-2 gap-3">
                <label className="block space-y-1">
                  <span className="text-sm font-medium">Strana</span>
                  <input
                    type="text"
                    value={form.page}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        page: event.target.value,
                      }))
                    }
                    className="w-full rounded-xl border border-foreground/20 bg-white px-3 py-2 text-base"
                  />
                </label>

                <label className="block space-y-1">
                  <span className="text-sm font-medium">Cvičení</span>
                  <input
                    type="text"
                    value={form.exercise}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        exercise: event.target.value,
                      }))
                    }
                    className="w-full rounded-xl border border-foreground/20 bg-white px-3 py-2 text-base"
                  />
                </label>
              </div>

              <label className="block space-y-1">
                <span className="text-sm font-medium">Text diktátu</span>
                <textarea
                  value={form.text}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      text: event.target.value,
                    }))
                  }
                  rows={6}
                  className="w-full rounded-xl border border-foreground/20 bg-white px-3 py-2 text-base leading-relaxed"
                  placeholder="Vlož věty s i, í, y nebo ý…"
                />
              </label>

              {formError && (
                <p className="text-sm font-medium text-red-700" role="alert">
                  {formError}
                </p>
              )}

              <button
                type="submit"
                className="rounded-xl bg-czech px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Uložit diktát
              </button>
            </form>

            {customDictations.length > 0 ? (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold">Uložené diktáty</h2>
                {customDictations.map((dictation) => (
                  <DictationCard
                    key={dictation.id}
                    dictation={dictation}
                    onStart={() => startDictation(dictation)}
                    onDelete={() => handleDeleteCustom(dictation.id)}
                  />
                ))}
              </div>
            ) : (
              <p className="text-sm text-foreground/60">
                Zatím nemáš uložený žádný vlastní diktát.
              </p>
            )}
          </section>
        )}
      </div>
    );
  }

  if (!activeDictation || !parsed) {
    return null;
  }

  if (blankCount === 0) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">{activeDictation.title}</h1>
        <p className="text-base text-foreground/70" role="status">
          V tomto diktátu není žádné i/y k doplnění.
        </p>
        <button
          type="button"
          onClick={handleBackToSetup}
          className="rounded-xl border border-foreground/20 px-4 py-2 text-sm font-medium hover:bg-foreground/5"
        >
          Zpět na výběr diktátu
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold sm:text-3xl">
          {activeDictation.title}
        </h1>
        {phase === "practice" && (
          <p className="mt-2 text-base text-foreground/70">
            Doplň všechna i/y. Vyber správné písmenko pro zvýrazněné místo.
          </p>
        )}
      </header>

      <section
        aria-label="Text diktátu"
        className="rounded-2xl border border-foreground/15 bg-white/70 p-4"
      >
        <DictationTextDisplay
          tokens={parsed.tokens}
          phase={phase}
          answers={answers}
          activeBlankId={activeBlankId}
          evaluation={evaluation}
          onBlankSelect={setActiveBlankId}
        />
      </section>

      {phase === "practice" && (
        <section aria-label="Výběr písmene" className="space-y-3">
          <p className="text-sm font-medium text-foreground/70">
            Vyber správné písmenko
            {activeBlankId !== null && (
              <span className="text-foreground/50">
                {" "}
                (místo {activeBlankId + 1} z {blankCount})
              </span>
            )}
          </p>
          <div className="grid grid-cols-4 gap-2">
            {IY_LETTERS.map((letter) => (
              <button
                key={letter}
                type="button"
                onClick={() => handleAnswer(letter)}
                disabled={activeBlankId === null}
                className="min-h-12 rounded-2xl border border-foreground/20 bg-white text-xl font-semibold transition-colors hover:bg-czech/10 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {letter}
              </button>
            ))}
          </div>
          <p className="text-sm text-foreground/60">
            Vyplněno {answeredCount} z {blankCount}
          </p>
          {allAnswered && (
            <button
              type="button"
              onClick={handleEvaluate}
              className="w-full rounded-2xl bg-czech px-4 py-3 text-base font-semibold text-white transition-opacity hover:opacity-90"
            >
              Vyhodnotit
            </button>
          )}
        </section>
      )}

      {phase === "results" && evaluation && (
        <section
          aria-label="Výsledek"
          className="space-y-4 rounded-2xl border border-foreground/15 bg-white/70 p-4"
        >
          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="rounded-xl bg-foreground/5 px-3 py-3">
              <p className="text-sm text-foreground/60">Chyby</p>
              <p className="text-2xl font-bold tabular-nums">
                {evaluation.mistakes}
              </p>
            </div>
            <div className="rounded-xl bg-foreground/5 px-3 py-3">
              <p className="text-sm text-foreground/60">Známka</p>
              <p className="text-2xl font-bold tabular-nums">
                {evaluation.grade}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={handleRetry}
              className="flex-1 rounded-xl bg-czech px-4 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Zkusit znovu
            </button>
            <button
              type="button"
              onClick={handleBackToSetup}
              className="flex-1 rounded-xl border border-foreground/20 px-4 py-3 text-sm font-medium hover:bg-foreground/5"
            >
              Zpět na výběr diktátu
            </button>
          </div>
        </section>
      )}

      {phase === "practice" && (
        <button
          type="button"
          onClick={handleBackToSetup}
          className="text-sm font-medium text-foreground/60 underline-offset-2 hover:underline"
        >
          Zpět na výběr diktátu
        </button>
      )}
    </div>
  );
}
