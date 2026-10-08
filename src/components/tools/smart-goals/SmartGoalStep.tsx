import type { ChangeEvent } from 'react';
import { SMART_FIELD_RULES } from '@/utils/smart-goals/validation';
import type { SmartFieldErrors, SmartGoalDraft, SmartStepDefinition, SmartTextField } from '@/utils/smart-goals/types';

interface Props {
  step: SmartStepDefinition;
  draft: SmartGoalDraft;
  errors: SmartFieldErrors;
  minimumDate: string;
  onChange: (field: SmartTextField, value: string) => void;
  onDeadlineTypeChange: (value: SmartGoalDraft['deadlineType']) => void;
}

export default function SmartGoalStep({ step, draft, errors, minimumDate, onChange, onDeadlineTypeChange }: Props) {
  const fields = step.fields.filter(({ field }) =>
    step.id !== 'temporal' || field === (draft.deadlineType === 'date' ? 'deadlineDate' : 'deadlineHorizon'));

  return (
    <>
      <p className="smart-form__question">{step.question}</p>
      <p className="smart-form__explanation">{step.explanation}</p>
      <details className="smart-form__example">
        <summary>Ver exemplo desta etapa</summary>
        <p>{step.example}</p>
      </details>
      {step.id === 'temporal' && (
        <fieldset className="smart-form__deadline">
          <legend>Como deseja definir o prazo?</legend>
          <label><input type="radio" name="deadlineType" value="horizon" checked={draft.deadlineType === 'horizon'} onChange={() => onDeadlineTypeChange('horizon')} /> Horizonte temporal</label>
          <label><input type="radio" name="deadlineType" value="date" checked={draft.deadlineType === 'date'} onChange={() => onDeadlineTypeChange('date')} /> Data específica</label>
        </fieldset>
      )}
      <div className="smart-form__fields">
        {fields.map(({ field, label, question, example }) => {
          const id = `smart-${field}`;
          const error = errors[field];
          const rule = SMART_FIELD_RULES[field];
          const description = `${id}-help ${id}-example ${id}-count${error ? ` ${id}-error` : ''}`;
          const props = {
            id, name: field, value: draft[field], required: rule.required,
            'aria-describedby': description, 'aria-invalid': Boolean(error),
            onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(field, event.target.value),
          };
          return (
            <div className="smart-form__field" key={field}>
              <label htmlFor={id}>{label}</label>
              <p id={`${id}-help`}>{question}</p>
              {field === 'deadlineDate'
                ? <input {...props} type="date" min={minimumDate || undefined} />
                : <textarea {...props} rows={4} maxLength={rule.maxLength} />}
              <p id={`${id}-example`} className="smart-form__hint">Exemplo: {example}</p>
              <p id={`${id}-count`} className="smart-form__hint">{field === 'deadlineDate' ? 'Escolha hoje ou uma data futura.' : `${draft[field].length} / ${rule.maxLength} caracteres`}</p>
              {error && <p id={`${id}-error`} className="smart-form__error" role="alert">Erro: {error.message}</p>}
            </div>
          );
        })}
      </div>
    </>
  );
}
