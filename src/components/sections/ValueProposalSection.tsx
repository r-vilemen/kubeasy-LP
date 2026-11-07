import type { FC } from 'react';
import { Badge } from '../ui/Badge';
import {
  Radar,
  Network,
  GitFork,
  CheckSquare,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

export const ValueProposalSection: FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Detectar e Ingerir',
      icon: <Radar className="w-5 h-5 text-brand-cyan" />,
      tag: 'Telemetria Contínua',
      tagVariant: 'cyan' as const,
      desc: 'Normalização contínua de métricas do Prometheus, traces distribuídos do Istio e logs agregados do Loki/CloudWatch em tempo real.',
      tech: 'Prometheus · Loki · Istio'
    },
    {
      step: '02',
      title: 'Correlacionar Topologia',
      icon: <Network className="w-5 h-5 text-brand-indigo" />,
      tag: 'Grafo Vivo',
      tagVariant: 'indigo' as const,
      desc: 'Construção imediata do grafo de dependências entre namespaces, ReplicaSets, Service Mesh e recursos de banco gerenciado (ex: AWS RDS).',
      tech: 'Kubernetes API · AWS Cloud'
    },
    {
      step: '03',
      title: 'Investigar no TreeStore',
      icon: <GitFork className="w-5 h-5 text-status-warn" />,
      tag: 'Runtime Multiagente',
      tagVariant: 'warn' as const,
      desc: 'Agentes especializados colaboram em paralelo para validar ou refutar hipóteses, estruturando cada achado em uma árvore de evidências determinística.',
      tech: 'TreeStore Engine · Multiagent'
    },
    {
      step: '04',
      title: 'Recomendar Remediação',
      icon: <CheckSquare className="w-5 h-5 text-status-ok" />,
      tag: 'Ação Prescritiva',
      tagVariant: 'ok' as const,
      desc: 'Geração de proposta de correção cirúrgica baseada na causa-raiz comprovada (ex: ajuste de pool, rollback de versão ou correção de ConfigMap).',
      tech: 'GitOps PR · Helm / Argo CD'
    },
    {
      step: '05',
      title: 'Aprovar & Governar',
      icon: <ShieldCheck className="w-5 h-5 text-status-gov" />,
      tag: 'Controle Humano',
      tagVariant: 'gov' as const,
      desc: 'Execução governada e transparente. Ação somente é aplicada após validação do operador humano via token TOTP ou chave física FIDO2.',
      tech: 'FIDO2 · TOTP · Audit Trail'
    }
  ];

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-surface-subtle/40 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="indigo" dot>O CICLO DE INVESTIGAÇÃO KUBEASY</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
            Uma ponte determinística entre observabilidade e ação
          </h2>
          <p className="text-base text-text-secondary leading-relaxed">
            Em vez de um assistente genérico de chat ou outro dashboard passivo, o Kubeasy orquestra o diagnóstico de ponta a ponta com rigor de engenharia.
          </p>
        </div>

        {/* Steps Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="rounded-xl border border-white/10 bg-surface-elevated/70 p-5 flex flex-col justify-between hover:border-brand-indigo/40 transition-all group relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-text-muted group-hover:text-brand-cyan transition-colors">
                    PASSO {item.step}
                  </span>
                  <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-text-primary">
                    {item.icon}
                  </div>
                </div>

                <Badge variant={item.tagVariant} size="sm" className="mb-2.5">
                  {item.tag}
                </Badge>

                <h3 className="text-base font-bold text-text-primary mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-text-secondary leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 font-mono text-[11px] text-text-muted">
                {item.tech}
              </div>

              {/* Conector visual para desktop entre passos */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-20 pointer-events-none text-white/20">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
