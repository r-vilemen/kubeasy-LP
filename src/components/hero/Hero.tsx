import type { FC } from 'react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { HeroConsoleDemo } from './HeroConsoleDemo';
import { Terminal, Shield, ArrowDown, Activity, Sparkles } from 'lucide-react';

export interface HeroProps {
  onOpenEarlyAccess: () => void;
}

export const Hero: FC<HeroProps> = ({ onOpenEarlyAccess }) => {
  const scrollToScenarios = () => {
    const el = document.getElementById('cenarios');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-vignette">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Category Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 p-1 pr-3 bg-surface-elevated/80 border border-brand-indigo/30 rounded-full shadow-sm">
            <span className="w-6 h-6 rounded-full bg-brand-indigo/20 flex items-center justify-center text-brand-cyan">
              <Sparkles className="w-3.5 h-3.5" />
            </span>
            <span className="text-xs font-mono font-medium text-text-primary">
              Observabilidade · Investigação Multiagente · Governança Kubernetes
            </span>
          </div>

          {/* Headline Principal */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary leading-[1.12]">
            Da detecção de incidentes à ação governada em ambientes Kubernetes
          </h1>

          {/* Subheadline Explicativa */}
          <p className="text-base sm:text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed font-normal">
            O Kubeasy integra sinais distribuídos, correlação multiagente e investigação determinística em árvore (<span className="text-brand-cyan font-mono font-medium">TreeStore</span>) para identificar a causa-raiz de falhas e executar remediações com aprovação humana obrigatória.
          </p>

          {/* CTAs de Alto Impacto */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Button
              variant="primary"
              size="lg"
              onClick={onOpenEarlyAccess}
              icon={<Terminal className="w-4 h-4 text-brand-cyan" />}
              className="w-full sm:w-auto px-6 py-3 font-semibold shadow-glow-indigo"
            >
              Solicitar Early Access Técnico
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={scrollToScenarios}
              icon={<ArrowDown className="w-4 h-4 text-text-muted" />}
              iconPosition="right"
              className="w-full sm:w-auto px-6 py-3"
            >
              Explorar Cenários Práticos
            </Button>
          </div>

          {/* Mini-Barra de Confiança Técnica */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-mono text-text-muted">
            <div className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-status-ok" />
              <span>Investigação determinística</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-status-gov" />
              <span>Governança FIDO2 & TOTP</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Badge variant="indigo" size="sm" className="py-0 px-1.5 text-[10px]">TreeStore</Badge>
              <span>Rastreabilidade ponta a ponta</span>
            </div>
          </div>
        </div>

        {/* Visual Hero Mockup: Console Interativo do Kubeasy */}
        <div className="mt-12 sm:mt-16">
          <HeroConsoleDemo />
        </div>
      </div>
    </section>
  );
};
