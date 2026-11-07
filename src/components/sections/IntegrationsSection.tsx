import type { FC } from 'react';
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
  const stack = [
    { name: 'Kubernetes', cat: 'Orquestração', protocol: 'K8s API & CRDs', role: 'Ingestão de pods, namespaces, deployments e réplicas', icon: <Layers className="w-4 h-4 text-brand-sky" /> },
    { name: 'Helm', cat: 'Pacotes & Releases', protocol: 'Helm Chart Metadata', role: 'Histórico de revisões e rollbacks automatizados', icon: <Terminal className="w-4 h-4 text-indigo-400" /> },
    { name: 'Istio', cat: 'Service Mesh', protocol: 'Envoy Telemetry & mTLS', role: 'Traces distribuídos, VirtualServices e latências P99', icon: <Network className="w-4 h-4 text-brand-sky" /> },
    { name: 'Prometheus', cat: 'Métricas', protocol: 'PromQL / TSDB Exporters', role: 'Telemetria de cgroups, CPU, saturação e taxas de I/O', icon: <Activity className="w-4 h-4 text-amber-400" /> },
    { name: 'Loki', cat: 'Agregação de Logs', protocol: 'LogQL / Stream Parser', role: 'Varredura forense e correlação de stacktraces', icon: <Terminal className="w-4 h-4 text-emerald-400" /> },
    { name: 'AWS CloudWatch', cat: 'Telemetria de Nuvem', protocol: 'CloudWatch Metrics API', role: 'Métricas de instâncias gerenciadas e créditos de CPU', icon: <Cloud className="w-4 h-4 text-brand-sky" /> },
    { name: 'AWS RDS', cat: 'Banco Gerenciado', protocol: 'Performance Insights / CloudWatch', role: 'Monitoramento de locks, pools de conexão e read latency', icon: <Database className="w-4 h-4 text-purple-400" /> },
    { name: 'GitHub App', cat: 'Controle de Versão', protocol: 'GitHub REST / GraphQL API', role: 'Geração de Pull Requests corretivos de ConfigMaps e manifests', icon: <GitBranch className="w-4 h-4 text-text-primary" /> },
    { name: 'Argo CD', cat: 'Entrega Contínua GitOps', protocol: 'Argo CD Application Controller', role: 'Sincronização declarativa com verificação de integridade', icon: <ShieldCheck className="w-4 h-4 text-brand-sky" /> },
  ];

  return (
    <section id="integracoes" className="py-20 md:py-28 bg-canvas border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="text-xs font-mono text-brand-sky uppercase font-semibold">
            Ecossistema & Protocolos
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-text-primary">
            Compatibilidade com padrões abertos da indústria
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            O Kubeasy não exige a substituição da sua infraestrutura existente. A plataforma opera sobre APIs abertas, exportadores de telemetria padrão e controladores GitOps.
          </p>
        </div>

        {/* Matriz Técnica de Integrações */}
        <div className="rounded-lg border border-border-subtle bg-surface-subtle overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs border-collapse">
              <thead>
                <tr className="bg-surface-elevated border-b border-border-subtle text-[11px] text-text-muted uppercase">
                  <th className="py-3 px-4 font-semibold">Ferramenta</th>
                  <th className="py-3 px-4 font-semibold">Categoria</th>
                  <th className="py-3 px-4 font-semibold hidden sm:table-cell">Mecanismo / Protocolo</th>
                  <th className="py-3 px-4 font-semibold">Papel no Kubeasy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle">
                {stack.map((item) => (
                  <tr key={item.name} className="hover:bg-surface-elevated/50 transition-colors">
                    <td className="py-3 px-4 flex items-center gap-2.5 text-text-primary font-semibold font-sans text-xs">
                      {item.icon}
                      <span>{item.name}</span>
                    </td>
                    <td className="py-3 px-4 text-text-secondary text-[11px]">
                      {item.cat}
                    </td>
                    <td className="py-3 px-4 text-brand-sky text-[11px] hidden sm:table-cell">
                      {item.protocol}
                    </td>
                    <td className="py-3 px-4 text-text-muted text-[11px] font-sans">
                      {item.role}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-4 text-[11px] font-mono text-text-muted">
          * Todas as integrações operam respeitando privilégios mínimos RBAC (Role-Based Access Control) dentro do cluster.
        </div>
      </div>
    </section>
  );
};
