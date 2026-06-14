export const EXPLANATION_MAX_DOTS = 36;
export const EXPLANATION_MAX_GROUPS = 10;
export const EXPLANATION_MAX_ROW_DOTS = EXPLANATION_MAX_DOTS / 2;

export function exceedsExplanationRowLimit(value: number): boolean {
  return value > EXPLANATION_MAX_ROW_DOTS;
}

export function exceedsExplanationTotalLimit(value: number): boolean {
  return value > EXPLANATION_MAX_DOTS;
}

export function exceedsExplanationVisibleDotLimit(count: number): boolean {
  return count > EXPLANATION_MAX_DOTS;
}
