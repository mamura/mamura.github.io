import type { SmartGoalDraft } from './types';

/** Validated ISO dates are formatted without parsing a Date or changing timezone. */
export function formatSmartDeadline(draft: SmartGoalDraft): string {
  if (draft.deadlineType === 'horizon') return draft.deadlineHorizon;
  const [year, month, day] = draft.deadlineDate.trim().split('-');
  return `${day}/${month}/${year}`;
}

/** Labels organize the supplied answers; their text and line breaks are untouched. */
export function formatSmartGoal(draft: SmartGoalDraft): string {
  const measurable = [
    `Indicador de sucesso:\n${draft.successIndicator}`,
    ...(draft.baseline.trim() ? [`Situação inicial:\n${draft.baseline}`] : []),
    `Resultado esperado:\n${draft.expectedOutcome}`,
  ].join('\n\n');

  return [
    `Objetivo principal:\n${draft.objective}`,
    `S — Específica\n${draft.objective}`,
    `M — Mensurável\n${measurable}`,
    `A — Atingível\n${draft.feasibility}`,
    `R — Relevante\n${draft.relevance}`,
    `T — Temporal\nPrazo:\n${formatSmartDeadline(draft)}`,
  ].join('\n\n');
}
