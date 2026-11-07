import type { FC } from 'react';
import {
  Radar,
  Network,
  GitFork,
  CheckSquare,
  ShieldCheck
} from 'lucide-react';

export const ValueProposalSection: FC = () => {
  const pipeline = [
    {
      id: 'STAGE-1',
      name: 'Telemetria & Ingestão',
      icon: <Radar className="w-4 h-4 text-brand-sky" />,
      input: 'Prometheus, Loki, Istio',
      output: 'Sinais Normalizados',
      desc: 'Ingestão contínua de métricas de nós e pods, traces distribuídos de Service Mesh e logs técnicos.'
    },
    {
      id: 'STAGE-2',
      name: 'Grafo Topológico',
      icon: <Network className="w-4 h-4 text-indigo-400" />,
      input: 'K8s API + Cloud Resources',
      output: 'DAG de Dependências',
      desc: 'Mapeamento imediato de relações entre Ingress, ReplicaSets, Pods e recursos externos como AWS RDS.'
    },
    {
      id: 'STAGE-3',
      name: 'Árvore TreeStore',
      icon: <GitFork className="w-4 h-4 text-amber-400" />,
      input: 'Agentes Especializados',
      output: 'Evidências Determinísticas',
      desc: 'Multiagente investiga em paralelo, validando ou descartando hipóteses com base em dados concretos.'
    },
    {
      id: 'STAGE-4',
      name: 'Remediação Prescritiva',
      icon: <CheckSquare className="w-4 h-4 text-emerald-400" />,
      input: 'Causa-Raiz Comprovada',
      output: 'GitOps Pull Request',
      desc: 'Geração de proposta de rollback, ajuste de réplicas ou correção de ConfigMap estruturada para Git.'
    },
    {
      id: 'STAGE-5',
      name: 'Governança & Execução',
      icon: <ShieldCheck className="w-4 h-4 text-purple-400" />,
      input: 'Chave FIDO2 / TOTP',
      output: 'Sincronização no Cluster',
      desc: 'Execução condicionada ao aval do operador humano, registrando assinatura criptográfica e pós-morte.'
    }
  ];

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-surface-subtle border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="text-xs font-mono text-brand-sky uppercase font-semibold">
            Pipeline de Investigação
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-text-primary">
            Arquitetura do ciclo de resolução em cinco etapas
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            O Kubeasy estrutura o processo investigativo em um pipeline determinístico e auditável, eliminando a dependência do feeling individual de cada profissional.
          </p>
        </div>

        {/* Pipeline Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {pipeline.map((stage) => (
            <div
              key={stage.id}
              className="rounded-lg border border-border-subtle bg-surface-elevated p-4 flex flex-col justify-between hover:border-border-medium transition-colors font-mono text-xs"
            >
              <div>
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-border-subtle text-[11px] text-text-muted">
                  <span>{stage.id}</span>
                  {stage.icon}
                </div>

                <div className="font-semibold text-text-primary text-sm mb-2 font-sans">
                  {stage.name}
                </div>

                <p className="text-text-secondary text-xs leading-relaxed font-sans mb-4">
                  {stage.desc}
                </p>
              </div>

              <div className="space-y-1.5 pt-3 border-t border-border-subtle text-[10px]">
                <div className="text-text-muted truncate">
                  <span className="text-text-secondary">IN:</span> {stage.input}
                </div>
                <div className="text-brand-sky truncate">
                  <span className="text-text-secondary">OUT:</span> {stage.output}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
