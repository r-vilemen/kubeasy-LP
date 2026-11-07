import type { FC } from 'react';
import { Button } from '../ui/Button';
import { Terminal, Shield, ArrowRight } from 'lucide-react';

export interface FinalCtaProps {
  onOpenEarlyAccess: () => void;
}

export const FinalCtaSection: FC<FinalCtaProps> = ({ onOpenEarlyAccess }) => {
  return (
    <section id="acesso" className="py-20 md:py-28 bg-canvas border-b border-border-subtle">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="text-xs font-mono text-brand-sky uppercase font-semibold">
          Acesso Antecipado & Sessões de Arquitetura
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary leading-tight">
          Traga previsibilidade e rigor para a operação dos seus clusters
        </h2>

        <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
          Inscreva sua equipe técnica para avaliar o Kubeasy em sessões direcionadas de arquitetura, focadas na redução de MTTR e governança GitOps.
        </p>

        <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            variant="primary"
            size="lg"
            onClick={onOpenEarlyAccess}
            icon={<Terminal className="w-4 h-4 text-brand-sky" />}
            className="w-full sm:w-auto px-7 py-3"
          >
            Solicitar Acesso Antecipado
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => {
              const el = document.getElementById('cenarios');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
            className="w-full sm:w-auto px-5 py-3"
          >
            Rever Cenários de Investigação
          </Button>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-text-muted">
          <div className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span>Sessões conduzidas diretamente por engenheiros de sistemas</span>
          </div>
          <span>·</span>
          <div>Zero cartão de crédito ou compromisso financeiro</div>
        </div>
      </div>
    </section>
  );
};
