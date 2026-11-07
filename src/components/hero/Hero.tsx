import type { FC } from 'react';
import { Button } from '../ui/Button';
import { HeroConsoleDemo } from './HeroConsoleDemo';
import { Terminal, Shield, ArrowDown, Activity } from 'lucide-react';

export interface HeroProps {
  onOpenEarlyAccess: () => void;
}

export const Hero: FC<HeroProps> = ({ onOpenEarlyAccess }) => {
  const scrollToScenarios = () => {
    const el = document.getElementById('cenarios');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 border-b border-border-subtle bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-5">
          {/* Tagline de Categoria: simples, técnica, sem estrelinhas decorativas */}
          <div className="text-xs font-mono text-brand-sky tracking-wider uppercase font-semibold">
            Plataforma de Investigação Assistida & Governança Kubernetes
          </div>

          {/* Headline Principal: Forte, Editorial, Precisa */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary leading-[1.15]">
            Da detecção à remediação governada em clusters Kubernetes
          </h1>

          {/* Subheadline: Clara, sem jargões de marketing genérico */}
          <p className="text-base sm:text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            O Kubeasy integra sinais de telemetria, topologia e deploys em uma árvore determinística de evidências (<span className="text-text-primary font-mono font-medium">TreeStore</span>). Sua equipe investiga com assistência multiagente especializada e executa ações de remediação sob aprovação humana obrigatória via GitOps.
          </p>

          {/* CTAs Diretos */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
            <Button
              variant="primary"
              size="lg"
              onClick={onOpenEarlyAccess}
              icon={<Terminal className="w-4 h-4 text-brand-sky" />}
              className="w-full sm:w-auto px-6 py-2.5"
            >
              Solicitar Acesso Antecipado
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={scrollToScenarios}
              icon={<ArrowDown className="w-4 h-4 text-text-muted" />}
              iconPosition="right"
              className="w-full sm:w-auto px-5 py-2.5"
            >
              Explorar Simulações de Incidentes
            </Button>
          </div>

          {/* Barra de Especificação Técnica: Limpa e sem bolinhas repetitivas */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-text-muted">
            <div className="flex items-center gap-2">
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
              <span>Investigação determinística</span>
            </div>
            <span className="text-border-medium hidden sm:inline">·</span>
            <div className="flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-purple-400" />
              <span>Chaves FIDO2 & WebAuthn</span>
            </div>
            <span className="text-border-medium hidden sm:inline">·</span>
            <div className="flex items-center gap-2">
              <span className="text-text-primary font-semibold">TreeStore</span>
              <span>Árvore de evidências imutável</span>
            </div>
          </div>
        </div>

        {/* Live War Room Console Mockup */}
        <div className="mt-12 sm:mt-14">
          <HeroConsoleDemo />
        </div>
      </div>
    </section>
  );
};
