export const STUDY_SUBJECT_IDS = [
  "obecna-pedagogika",
  "predskolni-pedagogika",
  "mimoskolni-pedagogika",
  "specialni-pedagogika",
  "obecna-psychologie",
  "vyvojova-psychologie",
  "pedagogicka-a-socialni-psychologie",
  "osobnostni-a-socialni-vycvik",
  "biologie-ditete",
  "zdravotni-nauky",
  "telesna-vychova-s-metodikou",
  "dramaticka-vychova-s-metodikou",
  "vytvarna-vychova-s-metodikou",
  "hudebni-vychova-s-metodikou",
  "hra-na-hudebni-nastroj",
  "literarni-a-jazykove-praktikum",
  "logopedicke-minimum",
  "aplikovane-pravni-normy",
  "odborna-praxe",
] as const;

export type StudySubjectId = (typeof STUDY_SUBJECT_IDS)[number];

export type StudySectionType = "explanation" | "keyTerms" | "summary";

export type StudyQuestionType = "multiple-choice";

export type StudyDifficulty = "easy" | "medium" | "hard";

export interface StudySubjectMeta {
  id: StudySubjectId;
  title: string;
  shortTitle?: string;
  description?: string;
  studyPeriod?: string;
  teachingScope?: string;
  order: number;
  accent?: string;
}

export interface StudyChoice {
  id: string;
  text: string;
}

export interface StudyKeyTerm {
  term: string;
  definition: string;
}

export interface StudySection {
  id: string;
  type: StudySectionType;
  title?: string;
  body?: string;
  terms?: StudyKeyTerm[];
}

export interface StudyQuestion {
  id: string;
  subjectId: StudySubjectId;
  unitId: string;
  lessonId: string;
  type: StudyQuestionType;
  prompt: string;
  choices: StudyChoice[];
  correctChoiceId: string;
  explanation: string;
  order: number;
  difficulty?: StudyDifficulty;
  tags?: string[];
}

export interface StudyLesson {
  id: string;
  subjectId: StudySubjectId;
  unitId: string;
  title: string;
  summary?: string;
  order: number;
  studySections: StudySection[];
  practiceQuestions: StudyQuestion[];
  examQuestions: StudyQuestion[];
}

export interface StudyUnit {
  id: string;
  subjectId: StudySubjectId;
  title: string;
  description?: string;
  order: number;
  lessons: StudyLesson[];
}

export interface StudySubjectContent {
  subjectId: StudySubjectId;
  units: StudyUnit[];
}

export type StudySessionAnswerResult = "correct" | "needsPractice" | "corrected";

export interface StudySessionAnswerRecord {
  questionNumber: number;
  questionId: string;
  prompt: string;
  userAnswer: string;
  expectedAnswer: string;
  result: StudySessionAnswerResult;
}

export interface StudyAnswerValidation {
  isCorrect: boolean;
  normalizedInput: string;
  expectedAnswer: string;
  userAnswerText: string;
  expectedAnswerText: string;
  explanation: string;
}
