"use client";

import { ChoiceAnswerButtons } from "@/components/ui/ChoiceAnswerButtons";
import { getStudyQuestionById } from "@/data/subjects";
import { applyReviewStateQueuePlacement } from "@/lib/review/buckets";
import { processStudyAnswer } from "@/lib/study/processStudyAnswer";
import { studyQuestionToPracticeItem } from "@/lib/study/practiceItem";
import { selectNextPracticeItem } from "@/lib/study/sessionSelection";
import { getReviewStateMap, saveReviewState } from "@/lib/storage";
import type {
  PracticeItem,
  ReviewStateMap,
  StudyQuestion,
  StudySessionAnswerRecord,
  StudySessionAnswerResult,
} from "@/types";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

type Phase = "practice" | "summary";

type StudyPracticeClientProps = {
  subjectId: string;
  lessonId: string;
  lessonTitle: string;
  questions: StudyQuestion[];
};

type FeedbackState = {
  isCorrect: boolean;
  message: string;
  explanation: string;
};

type SessionBootstrap = {
  phase: Phase;
  reviewMap: ReviewStateMap;
  currentQuestionNumber: number;
  answeredInSession: number;
  normalAnswersSinceSessionStart: number;
  reviewsInsertedSinceSessionStart: number;
  currentItem: PracticeItem | null;
  currentQuestion: StudyQuestion | null;
  currentItemIsReview: boolean;
  sessionDisplayCounts: Record<string, number>;
};

type PracticeSessionState = SessionBootstrap & {
  selectedChoiceId: string;
  hasSubmitted: boolean;
  feedback: FeedbackState | null;
  sessionAnswers: StudySessionAnswerRecord[];
};

function buildFeedback(
  isCorrect: boolean,
  feedbackKey: string,
  expectedAnswerText: string,
): Pick<FeedbackState, "isCorrect" | "message"> {
  if (isCorrect) {
    if (feedbackKey === "feedback.fixedMistake") {
      return { isCorrect: true, message: "Výborně, chybu jsi opravil/a." };
    }
    if (feedbackKey === "feedback.correctReview") {
      return { isCorrect: true, message: "Správně, pokračuj v opakování." };
    }
    return { isCorrect: true, message: "Správně!" };
  }

  return {
    isCorrect: false,
    message: `To není správně. Správná odpověď: ${expectedAnswerText}`,
  };
}

function toSessionResult(
  isCorrect: boolean,
  wasPreviouslyWrong: boolean,
): StudySessionAnswerResult {
  if (!isCorrect) {
    return "needsPractice";
  }

  return wasPreviouslyWrong ? "corrected" : "correct";
}

function bootstrapSession(
  candidates: PracticeItem[],
  questionById: Map<string, StudyQuestion>,
  questionCount: number,
): SessionBootstrap {
  const freshReviewMap = getReviewStateMap();
  const sessionDisplayCounts: Record<string, number> = {};

  const selection = selectNextPracticeItem({
    candidates,
    reviewMap: freshReviewMap,
    sessionDisplayCounts,
    normalAnswersSinceSessionStart: 0,
    reviewsInsertedSinceSessionStart: 0,
    questionCount,
  });

  if (!selection) {
    return {
      phase: "summary",
      reviewMap: freshReviewMap,
      currentQuestionNumber: 1,
      answeredInSession: 0,
      normalAnswersSinceSessionStart: 0,
      reviewsInsertedSinceSessionStart: 0,
      currentItem: null,
      currentQuestion: null,
      currentItemIsReview: false,
      sessionDisplayCounts,
    };
  }

  const reviewMap = selection.reviewMap ?? freshReviewMap;
  const rotatedState = reviewMap[selection.item.id];
  if (rotatedState) {
    saveReviewState(rotatedState);
  }

  return {
    phase: "practice",
    reviewMap,
    currentQuestionNumber: 1,
    answeredInSession: 0,
    normalAnswersSinceSessionStart: 0,
    reviewsInsertedSinceSessionStart: selection.isReview ? 1 : 0,
    currentItem: selection.item,
    currentQuestion: questionById.get(selection.item.id) ?? null,
    currentItemIsReview: selection.isReview,
    sessionDisplayCounts: selection.sessionDisplayCounts,
  };
}

function createInitialSessionState(
  candidates: PracticeItem[],
  questionById: Map<string, StudyQuestion>,
  questionCount: number,
): PracticeSessionState {
  const bootstrap = bootstrapSession(candidates, questionById, questionCount);

  return {
    ...bootstrap,
    selectedChoiceId: "",
    hasSubmitted: false,
    feedback: null,
    sessionAnswers: [],
  };
}

function SummaryRow({ record }: { record: StudySessionAnswerRecord }) {
  const isWrong = record.result === "needsPractice";

  return (
    <li>
      <div className="space-y-1 text-sm tabular-nums">
        <div className="flex flex-wrap items-center gap-x-2">
          <span className="text-foreground/70">{record.questionNumber}.</span>
          <span>
            Zadání: <span className="font-medium">{record.prompt}</span>
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-x-2 pl-6 sm:pl-8">
          <span>
            Tvoje odpověď:{" "}
            <span className="font-medium">{record.userAnswer}</span>
          </span>
          <span>{isWrong ? "❌" : "✅"}</span>
          {isWrong && (
            <span className="text-foreground/80">
              Správně: {record.expectedAnswer}
            </span>
          )}
        </div>
      </div>
    </li>
  );
}

export function StudyPracticeClient({
  subjectId,
  lessonId,
  lessonTitle,
  questions,
}: StudyPracticeClientProps) {
  const questionCount = questions.length;
  const candidates = useMemo(
    () => questions.map(studyQuestionToPracticeItem),
    [questions],
  );
  const questionById = useMemo(
    () => new Map(questions.map((question) => [question.id, question])),
    [questions],
  );

  const choiceFirstButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  const [session, setSession] = useState<PracticeSessionState>(() =>
    createInitialSessionState(candidates, questionById, questionCount),
  );

  const startSession = () => {
    const bootstrap = bootstrapSession(candidates, questionById, questionCount);
    setSession({
      ...bootstrap,
      selectedChoiceId: "",
      hasSubmitted: false,
      feedback: null,
      sessionAnswers: [],
    });
  };

  useEffect(() => {
    if (session.hasSubmitted) {
      nextButtonRef.current?.focus();
      return;
    }

    choiceFirstButtonRef.current?.focus();
  }, [session.currentItem?.id, session.hasSubmitted]);

  if (questionCount === 0) {
    return (
      <p className="rounded-2xl border border-foreground/15 bg-white/70 px-4 py-5 text-base text-foreground/70">
        V této lekci zatím nejsou žádné procvičovací otázky.
      </p>
    );
  }

  if (session.phase === "summary") {
    return (
      <div className="space-y-6">
        <header className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Shrnutí procvičování
          </h1>
          <p className="text-base text-foreground/70">{lessonTitle}</p>
        </header>

        {session.sessionAnswers.length === 0 ? (
          <p className="rounded-2xl border border-foreground/15 bg-white/70 px-4 py-5 text-base text-foreground/70">
            Žádné odpovědi k zobrazení.
          </p>
        ) : (
          <ol className="space-y-3">
            {session.sessionAnswers.map((record) => (
              <SummaryRow
                key={`${record.questionNumber}-${record.questionId}`}
                record={record}
              />
            ))}
          </ol>
        )}

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={startSession}
            className="min-h-12 rounded-2xl bg-practice px-5 py-3 text-base font-semibold text-white transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
          >
            Procvičit znovu
          </button>
          <Link
            href={`/subjects/${subjectId}/lessons/${lessonId}`}
            className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-foreground/20 px-5 py-3 text-base font-semibold transition-colors hover:bg-foreground/5 focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
          >
            Zpět na lekci
          </Link>
        </div>
      </div>
    );
  }

  const { currentItem, currentQuestion } = session;

  if (!currentItem || !currentQuestion) {
    return (
      <p className="text-base text-foreground/70">Načítám procvičování…</p>
    );
  }

  const isSessionComplete = session.answeredInSession >= questionCount;
  const progressLabel = `Otázka ${Math.min(
    session.answeredInSession + (session.hasSubmitted ? 0 : 1),
    questionCount,
  )} z ${questionCount}`;
  const choiceOptions = currentQuestion.choices.map((choice) => ({
    value: choice.id,
    label: choice.text,
  }));

  const handleSubmit = () => {
    if (session.hasSubmitted || !session.selectedChoiceId) {
      return;
    }

    const result = processStudyAnswer({
      question: currentQuestion,
      selectedChoiceId: session.selectedChoiceId,
      currentQuestionNumber: session.currentQuestionNumber,
      reviewState: session.reviewMap[currentQuestion.id],
    });

    const nextReviewMap = applyReviewStateQueuePlacement(
      session.reviewMap,
      result.reviewState,
      result.isCorrect,
    );
    const persistedReviewState = nextReviewMap[result.reviewState.itemId]!;

    saveReviewState(persistedReviewState);

    const feedbackBase = buildFeedback(
      result.isCorrect,
      result.answerResult.feedbackKey,
      result.expectedAnswerText,
    );

    setSession((current) => ({
      ...current,
      reviewMap: nextReviewMap,
      normalAnswersSinceSessionStart: current.currentItemIsReview
        ? current.normalAnswersSinceSessionStart
        : current.normalAnswersSinceSessionStart + 1,
      sessionAnswers: [
        ...current.sessionAnswers,
        {
          questionNumber: current.currentQuestionNumber,
          questionId: currentQuestion.id,
          prompt: currentQuestion.prompt,
          userAnswer: result.userAnswerText,
          expectedAnswer: result.expectedAnswerText,
          result: toSessionResult(
            result.isCorrect,
            result.answerResult.wasPreviouslyWrong,
          ),
        },
      ],
      feedback: {
        ...feedbackBase,
        explanation: result.explanation,
      },
      hasSubmitted: true,
      answeredInSession: current.answeredInSession + 1,
    }));
  };

  const handleNext = () => {
    if (session.answeredInSession >= questionCount) {
      setSession((current) => ({ ...current, phase: "summary" }));
      return;
    }

    const selection = selectNextPracticeItem({
      candidates,
      reviewMap: session.reviewMap,
      sessionDisplayCounts: session.sessionDisplayCounts,
      lastItemId: currentItem.id,
      questionCount,
      normalAnswersSinceSessionStart: session.normalAnswersSinceSessionStart,
      reviewsInsertedSinceSessionStart: session.reviewsInsertedSinceSessionStart,
    });

    if (!selection) {
      setSession((current) => ({ ...current, phase: "summary" }));
      return;
    }

    const nextReviewMap = selection.reviewMap ?? session.reviewMap;
    const rotatedState = nextReviewMap[selection.item.id];
    if (rotatedState) {
      saveReviewState(rotatedState);
    }

    setSession((current) => ({
      ...current,
      reviewMap: nextReviewMap,
      sessionDisplayCounts: selection.sessionDisplayCounts,
      currentQuestionNumber: current.currentQuestionNumber + 1,
      currentItem: selection.item,
      currentQuestion:
        questionById.get(selection.item.id) ??
        getStudyQuestionById(selection.item.id) ??
        null,
      currentItemIsReview: selection.isReview,
      reviewsInsertedSinceSessionStart: selection.isReview
        ? current.reviewsInsertedSinceSessionStart + 1
        : current.reviewsInsertedSinceSessionStart,
      selectedChoiceId: "",
      hasSubmitted: false,
      feedback: null,
    }));
  };

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-sm font-medium text-foreground/60">{lessonTitle}</p>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Procvičování
        </h1>
        <p className="text-sm text-foreground/70">{progressLabel}</p>
        {session.currentItemIsReview && (
          <p className="text-sm font-medium text-practice">
            Opakování slabého místa
          </p>
        )}
      </header>

      <div className="rounded-2xl border border-foreground/15 bg-white/70 p-5">
        <p className="text-lg font-semibold leading-relaxed">
          {currentQuestion.prompt}
        </p>

        <div className="mt-5">
          <ChoiceAnswerButtons
            options={choiceOptions}
            selectedValue={session.selectedChoiceId}
            onSelect={(value) =>
              setSession((current) => ({ ...current, selectedChoiceId: value }))
            }
            disabled={session.hasSubmitted}
            firstButtonRef={choiceFirstButtonRef}
            heading="Vyber odpověď"
            columns={2}
            accent="study"
            canSubmit={
              !session.hasSubmitted && session.selectedChoiceId.length > 0
            }
            onSubmit={handleSubmit}
          />
        </div>

        {!session.hasSubmitted && (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!session.selectedChoiceId}
            className="mt-5 min-h-12 w-full rounded-2xl bg-practice px-5 py-3 text-base font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
          >
            Zkontrolovat
          </button>
        )}

        {session.feedback && (
          <div
            className={`mt-5 rounded-2xl border px-4 py-4 ${
              session.feedback.isCorrect
                ? "border-green-200 bg-green-50 text-green-900"
                : "border-red-200 bg-red-50 text-red-900"
            }`}
          >
            <p className="font-semibold">{session.feedback.message}</p>
            <p className="mt-2 text-sm leading-relaxed">
              {session.feedback.explanation}
            </p>
          </div>
        )}

        {session.hasSubmitted && (
          <button
            ref={nextButtonRef}
            type="button"
            onClick={handleNext}
            className="mt-5 min-h-12 w-full rounded-2xl border border-foreground/20 px-5 py-3 text-base font-semibold transition-colors hover:bg-foreground/5 focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
          >
            {isSessionComplete ? "Zobrazit shrnutí" : "Další otázka"}
          </button>
        )}
      </div>
    </div>
  );
}
