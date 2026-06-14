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
  | "divide-with-remainder"
  | "missing-addend-to-10";

export type MissingAddendPosition = "left" | "right";

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

export interface MathRangeConfig {
  min: number;
  max: number;
}

export interface AdditionConfig {
  enabled: boolean;
  addendA: MathRangeConfig;
  addendB: MathRangeConfig;
  maxResult?: number;
  questionCount?: number;
}

export interface SubtractionConfig {
  enabled: boolean;
  minuend: MathRangeConfig;
  subtrahend: MathRangeConfig;
  allowNegativeResults?: boolean;
  questionCount?: number;
}

export interface MultiplicationConfig {
  enabled: boolean;
  multiplicand: MathRangeConfig;
  multiplier: MathRangeConfig;
  selectedMultipliers?: number[];
  maxResult?: number;
  wholeNumbersOnly?: boolean;
  questionCount?: number;
}

export interface DivisionConfig {
  enabled: boolean;
  dividend: MathRangeConfig;
  divisor: MathRangeConfig;
  quotient?: MathRangeConfig;
  selectedDivisors?: number[];
  wholeNumbersOnly?: boolean;
  questionCount?: number;
}

export interface DivisionRemainderConfig {
  enabled: boolean;
  dividend: MathRangeConfig;
  divisor: MathRangeConfig;
  quotient?: MathRangeConfig;
  selectedDivisors?: number[];
  requireRemainder?: boolean;
  questionCount?: number;
}

export interface MissingAddendConfig {
  enabled: boolean;
  targetSum: number;
  knownAddend: MathRangeConfig;
}

export interface MathTopicConfigs {
  addition?: AdditionConfig;
  subtraction?: SubtractionConfig;
  multiplication?: MultiplicationConfig;
  division?: DivisionConfig;
  divisionRemainder?: DivisionRemainderConfig;
  missingAddend?: MissingAddendConfig;
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
  topicConfigs?: MathTopicConfigs;
}

export type SchoolGrade = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type MathCurriculumArea =
  | "number-operations"
  | "geometry"
  | "measurement"
  | "fractions-decimals"
  | "algebra"
  | "data-statistics"
  | "word-problems"
  | "entrance-exam";

export type MathDifficultyProfile =
  | "early-counting"
  | "within-10"
  | "within-20"
  | "within-100"
  | "within-1000"
  | "basic-facts"
  | "times-table"
  | "division-facts"
  | "division-remainder-basic"
  | "two-digit-by-one-digit"
  | "written-algorithms"
  | "fractions-basic"
  | "decimals-basic"
  | "integers"
  | "rational-numbers"
  | "algebra-basic"
  | "geometry-basic"
  | "exam-practice";

export interface MathLessonPreset {
  mathConfig?: MathPracticeConfig;
  recommendedTopics?: MathTopic[];
  notes?: string[];
}

export interface MathLesson {
  id: string;
  grade: SchoolGrade;
  order: number;
  title: string;
  description: string;
  area: MathCurriculumArea;
  topics: MathTopic[];
  difficultyProfile: MathDifficultyProfile;
  preset?: MathLessonPreset;
}

export interface MathGradeCurriculum {
  grade: SchoolGrade;
  title: string;
  description: string;
  lessons: MathLesson[];
}

export interface MathExercise extends ExerciseBase {
  subject: "math";
  topic: MathTopic;
  operation: MathOperation;
  operandA: number;
  operandB: number;
  missingPosition?: MissingAddendPosition;
  targetSum?: number;
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
  correctInStep?: number;
  nextReviewQuestionNumber?: number;
  lastAnsweredQuestionNumber?: number;
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
