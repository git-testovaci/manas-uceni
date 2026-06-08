import type { MathPracticePresetId } from "@/data/math/practicePresets";
import type { SchoolGrade } from "@/types";

export type CustomMathGradeTopic =
  | "addition"
  | "subtraction"
  | "multiplication"
  | "division"
  | "division-remainder";

export type CustomMathGradePreset = {
  readonly grade: SchoolGrade;
  readonly label: string;
  readonly description: string;
  readonly recommendedPresets: Readonly<
    Partial<Record<CustomMathGradeTopic, MathPracticePresetId>>
  >;
};

const GRADE_1: CustomMathGradePreset = {
  grade: 1,
  label: "1. třída",
  description: "Malé sčítání a odčítání do 20.",
  recommendedPresets: {
    addition: "math-preset-addition-20",
    subtraction: "math-preset-subtraction-20",
  },
};

const GRADE_2: CustomMathGradePreset = {
  grade: 2,
  label: "2. třída",
  description:
    "Sčítání a odčítání do 100, začátek násobilky a dělení v malé násobilce.",
  recommendedPresets: {
    addition: "math-preset-addition-100",
    subtraction: "math-preset-subtraction-100",
    multiplication: "math-preset-multiplication-1-5",
    division: "math-preset-division-table",
  },
};

const GRADE_3: CustomMathGradePreset = {
  grade: 3,
  label: "3. třída",
  description:
    "Větší čísla do 1000, celá malá násobilka, dělení v násobilce a úvod ke zbytku.",
  recommendedPresets: {
    addition: "math-preset-addition-1000",
    subtraction: "math-preset-subtraction-1000",
    multiplication: "math-preset-multiplication-table-1-10",
    division: "math-preset-division-table",
    "division-remainder": "math-preset-division-remainder-intro",
  },
};

const GRADE_4: CustomMathGradePreset = {
  grade: 4,
  label: "4. třída",
  description:
    "Procvičování větších čísel, pokročilejší dělení a dělení se zbytkem v násobilce.",
  recommendedPresets: {
    addition: "math-preset-addition-1000",
    subtraction: "math-preset-subtraction-1000",
    multiplication: "math-preset-multiplication-selected",
    division: "math-preset-division-advanced",
    "division-remainder": "math-preset-division-remainder-table",
  },
};

const GRADE_5: CustomMathGradePreset = {
  grade: 5,
  label: "5. třída",
  description:
    "Upevnění násobilky, dělení podle rozsahu a dělení se zbytkem v malých číslech.",
  recommendedPresets: {
    addition: "math-preset-addition-1000",
    subtraction: "math-preset-subtraction-1000",
    multiplication: "math-preset-multiplication-table-1-10",
    division: "math-preset-division-advanced",
    "division-remainder": "math-preset-division-remainder-table",
  },
};

export const CUSTOM_MATH_GRADE_PRESETS: readonly CustomMathGradePreset[] = [
  GRADE_1,
  GRADE_2,
  GRADE_3,
  GRADE_4,
  GRADE_5,
] as const;

export function getCustomMathGradePresets(): readonly CustomMathGradePreset[] {
  return CUSTOM_MATH_GRADE_PRESETS;
}

export function getCustomMathGradePresetByGrade(
  grade: SchoolGrade,
): CustomMathGradePreset | undefined {
  return CUSTOM_MATH_GRADE_PRESETS.find((preset) => preset.grade === grade);
}
