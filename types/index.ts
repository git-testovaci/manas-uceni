export type Subject = "math" | "czech" | "english";

export type Difficulty = "easy" | "medium" | "hard";

export type ReviewStatus =
  | "new"
  | "learning"
  | "weak"
  | "improving"
  | "mastered";

export type PracticeMode = "subject" | "mixed" | "weak-spots" | "custom";

export type LanguageCode = "cs" | "en" | "sk";

export type AnswerDirection = "cz-to-en" | "en-to-cz" | "mixed";

export type MathTopic =
  | "addition"
  | "subtraction"
  | "multiplication"
  | "division"
  | "division-remainder"
  | "mixed";

export type CzechTopic = "i-y" | "grammar";

export type EnglishTopic = "vocabulary";

export type TopicId = MathTopic | CzechTopic | EnglishTopic;

export type MathOperation =
  | "add"
  | "subtract"
  | "multiply"
  | "divide"
  | "divide-with-remainder";

export type WordCategory =
  | "noun"
  | "verb"
  | "adjective"
  | "adverb"
  | "phrase"
  | "other";

export interface NumberRange {
  min?: number;
  max?: number;
}

export interface NumberSelection {
  values?: number[];
  ranges?: NumberRange[];
}

export interface PracticeItem {
  id: string;
  subject: Subject;
  topic: TopicId;
  prompt: string;
  correctAnswer: string;
  explanation?: string;
  difficulty?: Difficulty;
}

export interface ExerciseBase extends PracticeItem {
  createdBy?: "system" | "user";
  tags?: string[];
}

export interface MathVisualHint {
  type: "groups" | "number-line" | "remainder" | "none";
  rows?: number;
  cols?: number;
  note?: string;
}

export interface DivisionRemainderAnswer {
  quotient: number;
  remainder: number;
}

export interface MathPracticeConfig {
  enabledTopics: MathTopic[];
  minValue?: number;
  maxValue?: number;
  maxResult?: number;
  selectedValues?: NumberSelection;
  selectedMultipliers?: number[];
  selectedDivisors?: number[];
  questionCount?: number;
  allowRemainders?: boolean;
}

export interface MathExercise extends ExerciseBase {
  subject: "math";
  topic: MathTopic;
  operation: MathOperation;
  operandA: number;
  operandB: number;
  expectedRemainder?: number;
  visualHint?: MathVisualHint;
}

export interface CzechPracticeConfig {
  enabledTopics: CzechTopic[];
  questionCount?: number;
}

export interface CzechExercise extends ExerciseBase {
  subject: "czech";
  topic: CzechTopic;
  sentenceWithGap: string;
  gapIndex: number;
  options: string[];
  correctOption: string;
  fullSentence: string;
}

export interface EnglishWord {
  id: string;
  czech: string;
  english: string;
  category?: WordCategory;
  mnemonic?: string;
  visualHint?: string;
  lessonId?: string;
}

export interface EnglishLesson {
  id: string;
  title: string;
  description?: string;
  source: "system" | "user";
  words: EnglishWord[];
}

export interface EnglishPracticeConfig {
  lessonIds?: string[];
  wordIds?: string[];
  direction: AnswerDirection;
  questionCount?: number;
}

export interface EnglishExercise extends ExerciseBase {
  subject: "english";
  topic: "vocabulary";
  wordId: string;
  direction: AnswerDirection;
  sourceText: string;
  targetText: string;
  mnemonic?: string;
  category?: WordCategory;
}

export interface PracticeSessionConfig {
  mode: PracticeMode;
  subjects: Subject[];
  mathConfig?: MathPracticeConfig;
  czechConfig?: CzechPracticeConfig;
  englishConfig?: EnglishPracticeConfig;
  includeWeakSpots?: boolean;
  mixSubjects?: boolean;
  questionCount?: number;
}

export interface PracticeSessionSummary {
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  fixedMistakes: number;
  startedAt: string;
  finishedAt?: string;
}

export interface ReviewState {
  itemId: string;
  subject: Subject;
  topic: TopicId;
  correctCount: number;
  wrongCount: number;
  streak: number;
  status: ReviewStatus;
  reviewStep: number;
  lastAnsweredAt?: string;
  nextReviewAt?: string;
}

export type ReviewStateMap = Record<string, ReviewState>;

export interface AnswerResult {
  isCorrect: boolean;
  wasPreviouslyWrong: boolean;
  feedbackKey: string;
  correctAnswer: string;
}

export interface PracticeHistoryEntry {
  itemId: string;
  subject: Subject;
  topic: TopicId;
  answeredAt: string;
  isCorrect: boolean;
  userAnswer: string;
  correctAnswer: string;
}

export type PracticeHistory = PracticeHistoryEntry[];

export interface UserSettings {
  soundsEnabled: boolean;
  animationsEnabled: boolean;
  language: LanguageCode;
}

export interface StorageEnvelope<T> {
  version: number;
  updatedAt: string;
  data: T;
}
