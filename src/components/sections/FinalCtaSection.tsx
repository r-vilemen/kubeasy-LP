import type { FC } from 'react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Terminal, Shield, ArrowRight } from 'lucide-react';

export interface FinalCtaProps {
  onOpenEarlyAccess: () => void;
}

export const FinalCtaSection: FC<FinalCtaProps> = ({ onOpenEarlyAccess }) => {
  return (
    <section id="acesso" className="py-20 md:py-28 bg-canvas border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-vignette opacity-70 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <Badge variant="indigo" dot>PROGRAMA DE EARLY ACCESS TÉCNICO</Badge>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary leading-tight">
          Traga previsibilidade e rigor de engenharia para a operação do seu cluster
        </h2>

        <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
          Participe do programa de acesso antecipado e descubra como o Kubeasy reduz o tempo de investigação e aumenta a segurança dos seus deploys Kubernetes.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="primary"
            size="lg"
            onClick={onOpenEarlyAccess}
            icon={<Terminal className="w-4 h-4 text-brand-cyan" />}
            className="w-full sm:w-auto px-8 py-3.5 font-bold shadow-glow-indigo text-base"
          >
            Solicitar Acesso Antecipado
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              const el = document.getElementById('cenarios');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
            className="w-full sm:w-auto px-6 py-3.5"
          >
            Rever Cenários Práticos
          </Button>
        </div>

        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-text-muted">
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-status-ok" />
            <span>Sem cartão de crédito</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
            <span>Briefing direto com engenheiros fundadores</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-status-gov" />
            <span>Vagas restritas por coorte técnica</span>
          </div>
        </div>
      </div>
    </section>
  );
};
