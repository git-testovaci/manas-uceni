import type {
  AdditionConfig,
  DivisionConfig,
  DivisionRemainderConfig,
  MathPracticeConfig,
  MathRangeConfig,
  MathTopicConfigs,
  MultiplicationConfig,
  SubtractionConfig,
} from "@/types";

export const DEFAULT_MATH_RANGE: MathRangeConfig = {
  min: 1,
  max: 100,
};

export const DEFAULT_ADDITION_CONFIG: AdditionConfig = {
  enabled: false,
  addendA: { min: 1, max: 100 },
  addendB: { min: 1, max: 100 },
  maxResult: 100,
};

export const DEFAULT_SUBTRACTION_CONFIG: SubtractionConfig = {
  enabled: false,
  minuend: { min: 1, max: 100 },
  subtrahend: { min: 1, max: 100 },
  allowNegativeResults: false,
};

export const DEFAULT_MULTIPLICATION_CONFIG: MultiplicationConfig = {
  enabled: true,
  multiplicand: { min: 1, max: 12 },
  multiplier: { min: 1, max: 12 },
  maxResult: 144,
  wholeNumbersOnly: true,
};

export const DEFAULT_DIVISION_CONFIG: DivisionConfig = {
  enabled: false,
  dividend: { min: 1, max: 120 },
  divisor: { min: 1, max: 12 },
  wholeNumbersOnly: true,
};

export const DEFAULT_DIVISION_REMAINDER_CONFIG: DivisionRemainderConfig = {
  enabled: false,
  dividend: { min: 1, max: 120 },
  divisor: { min: 1, max: 12 },
  requireRemainder: true,
};

export const DEFAULT_MATH_TOPIC_CONFIGS: MathTopicConfigs = {
  addition: DEFAULT_ADDITION_CONFIG,
  subtraction: DEFAULT_SUBTRACTION_CONFIG,
  multiplication: DEFAULT_MULTIPLICATION_CONFIG,
  division: DEFAULT_DIVISION_CONFIG,
  divisionRemainder: DEFAULT_DIVISION_REMAINDER_CONFIG,
};

export function createDefaultMathPracticeConfig(): MathPracticeConfig {
  return {
    enabledTopics: ["multiplication"],
    minValue: 1,
    maxValue: 12,
    maxResult: 100,
    questionCount: 10,
    allowRemainders: false,
    topicConfigs: DEFAULT_MATH_TOPIC_CONFIGS,
  };
}
