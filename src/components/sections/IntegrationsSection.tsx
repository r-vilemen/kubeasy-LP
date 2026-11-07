import type { FC } from 'react';
import { Badge } from '../ui/Badge';
import {
  Layers,
  Network,
  Activity,
  Database,
  GitBranch,
  Terminal,
  ShieldCheck,
  Cloud
} from 'lucide-react';

export const IntegrationsSection: FC = () => {
  const integrations = [
    {
      category: 'Orquestração & Pacotes',
      tools: [
        { name: 'Kubernetes', role: 'Clusters locais, EKS, GKE e AKS', icon: <Layers className="w-5 h-5 text-brand-cyan" /> },
        { name: 'Helm', role: 'Gerenciamento de releases e rollbacks', icon: <Terminal className="w-5 h-5 text-brand-indigo" /> },
      ]
    },
    {
      category: 'Service Mesh & Tráfego',
      tools: [
        { name: 'Istio', role: 'VirtualServices, Gateways e mTLS', icon: <Network className="w-5 h-5 text-brand-cyan" /> },
      ]
    },
    {
      category: 'Telemetria & Observabilidade',
      tools: [
        { name: 'Prometheus', role: 'Métricas de nós, pods e cgroups', icon: <Activity className="w-5 h-5 text-status-warn" /> },
        { name: 'Loki', role: 'Agregação e varredura forense de logs', icon: <Terminal className="w-5 h-5 text-status-ok" /> },
        { name: 'AWS CloudWatch', role: 'Métricas de serviços gerenciados', icon: <Cloud className="w-5 h-5 text-brand-cyan" /> },
      ]
    },
    {
      category: 'Bancos e Dados Gerenciados',
      tools: [
        { name: 'AWS RDS', role: 'PostgreSQL, MySQL e Aurora DB', icon: <Database className="w-5 h-5 text-status-warn" /> },
      ]
    },
    {
      category: 'GitOps & Entrega Contínua',
      tools: [
        { name: 'GitHub App', role: 'Abertura de Pull Requests corretivos', icon: <GitBranch className="w-5 h-5 text-text-primary" /> },
        { name: 'Argo CD', role: 'Sincronização declarativa de clusters', icon: <ShieldCheck className="w-5 h-5 text-brand-indigo" /> },
      ]
    }
  ];

  return (
    <section id="integracoes" className="py-20 md:py-28 bg-canvas border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="indigo" dot>ECOSSISTEMA & COMPATIBILIDADE</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
            Projetado para a sua stack de infraestrutura
          </h2>
          <p className="text-base text-text-secondary leading-relaxed">
            O Kubeasy integra-se aos padrões abertos e tecnologias maduras de nuvem que sua equipe de engenharia já confia no dia a dia.
          </p>
        </div>

        {/* Integration Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((cat) => (
            <div
              key={cat.category}
              className="rounded-xl border border-white/10 bg-surface-subtle p-6 hover:border-brand-indigo/30 transition-colors"
            >
              <h3 className="text-xs font-mono font-bold text-text-muted uppercase tracking-wider mb-4 pb-2 border-b border-white/5">
                {cat.category}
              </h3>

              <div className="space-y-3">
                {cat.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="p-3 bg-surface-elevated/80 rounded-lg border border-white/5 flex items-center gap-3 group hover:border-white/15 transition-all"
                  >
                    <div className="p-2 rounded bg-black/40 border border-white/5 shrink-0 group-hover:scale-105 transition-transform">
                      {tool.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-text-primary">{tool.name}</div>
                      <div className="text-xs text-text-muted font-mono">{tool.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Transparência Técnica */}
        <div className="mt-12 p-4 rounded-xl bg-surface-subtle border border-white/5 max-w-3xl mx-auto text-center font-mono text-xs text-text-muted">
          * Integrações projetadas para interoperabilidade através de APIs públicas, CRDs do Kubernetes e padrões abertos de telemetria.
        </div>
      </div>
    </section>
  );
};
