import { useState, type Ref } from 'react';
import { smartGoalSteps } from '@/data/tools/smartGoalSteps';
import { formatSmartDeadline, formatSmartGoal } from '@/utils/smart-goals/format';
import type { SmartGoalDraft, SmartStepId } from '@/utils/smart-goals/types';

interface Props {
  draft: SmartGoalDraft;
  headingRef: Ref<HTMLHeadingElement>;
  onEdit: (step: SmartStepId) => void;
}

export default function SmartGoalResult({ draft, headingRef, onEdit }: Props) {
  const [copying, setCopying] = useState(false);
  const [message, setMessage] = useState('');

  async function copyGoal() {
    setCopying(true);
    setMessage('');
    try {
      if (typeof navigator === 'undefined' || !navigator.clipboard?.writeText) {
        setMessage('A cópia automática não está disponível neste navegador. Selecione o texto da meta e copie manualmente.');
        return;
      }
      await navigator.clipboard.writeText(formatSmartGoal(draft));
      setMessage('Meta copiada para a área de transferência.');
    } catch {
      setMessage('Não foi possível copiar a meta. Selecione o texto e copie manualmente ou tente novamente.');
    } finally {
      setCopying(false);
    }
  }

  return (
    <div className="smart-result">
      <p className="smart-result__print-only smart-result__brand">mamura.dev / Ferramentas</p>
      <h2 id="smart-heading" ref={headingRef} tabIndex={-1}>
        <span className="smart-result__screen-only">Sua meta SMART</span>
        <span className="smart-result__print-only">Minha Meta SMART</span>
      </h2>
      <div className="smart-result__objective">
        <h3>Objetivo principal</h3>
        <p className="smart-result__answer">{draft.objective}</p>
      </div>
      <div className="smart-result__criteria">
        {smartGoalSteps.map(step => (
          <section className="smart-result__criterion" key={step.id} aria-labelledby={`smart-result-${step.id}`}>
            <div className="smart-result__criterion-header">
              <h3 id={`smart-result-${step.id}`}>{step.letter} — {step.title}</h3>
              <button type="button" className="smart-form__button smart-form__button--secondary" aria-label={`Editar critério ${step.title}`} onClick={() => onEdit(step.id)}>Editar</button>
            </div>
            {step.id === 'temporal' ? (
              <dl><dt>Prazo</dt><dd className="smart-result__answer">{formatSmartDeadline(draft)}</dd></dl>
            ) : (
              <dl>
                {step.fields.filter(({ field }) => field !== 'baseline' || draft.baseline.trim()).map(({ field, label }) => (
                  <div key={field}>
                    <dt>{label}</dt>
                    <dd className="smart-result__answer">{draft[field]}</dd>
                  </div>
                ))}
              </dl>
            )}
          </section>
        ))}
      </div>
      <div className="smart-form__actions">
        <button type="button" className="smart-form__button" disabled={copying} onClick={copyGoal}>{copying ? 'Copiando…' : 'Copiar meta'}</button>
        <button type="button" className="smart-form__button smart-form__button--secondary" onClick={() => window.print()}>Imprimir / Salvar PDF</button>
      </div>
      <p className="smart-result__print-help">No diálogo de impressão do navegador, escolha uma impressora ou a opção de salvar como PDF.</p>
      <p className="smart-result__message" role="status" aria-live="polite" aria-atomic="true">{message}</p>
      <footer className="smart-result__print-only smart-result__footer">https://mamura.dev/ferramentas/metas-smart/</footer>
    </div>
  );
}
