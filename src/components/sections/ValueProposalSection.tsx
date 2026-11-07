import { useState, type FC } from 'react';
import {
  Radar,
  Network,
  GitFork,
  CheckSquare,
  ShieldCheck,
  ArrowRight,
  Play
} from 'lucide-react';

export const ValueProposalSection: FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);

  const pipeline = [
    {
      id: '01',
      code: 'INGEST',
      name: 'Telemetria & Ingestão',
      icon: <Radar className="w-4 h-4 text-brand-sky" />,
      input: 'Prometheus (TSDB) · Loki (Streams) · Istio (Envoy)',
      output: '24,000 eventos/s normalizados em stream unificado',
      desc: 'Normalização contínua de métricas de nós e pods, traces distribuídos de Service Mesh e logs técnicos.',
      samplePayload: '{"source":"istio_proxy","metric":"upstream_rq_502","count":94,"threshold_exceeded":true}'
    },
    {
      id: '02',
      code: 'TOPOLOGY',
      name: 'Grafo Topológico',
      icon: <Network className="w-4 h-4 text-indigo-400" />,
      input: 'K8s API + Cloud Resources + VPC Peering',
      output: 'Grafo DAG de Dependências (18 serviços correlacionados)',
      desc: 'Mapeamento imediato de relações entre Ingress, ReplicaSets, Pods e recursos externos como AWS RDS.',
      samplePayload: '{"parent":"ingress-gateway","child":"checkout-api","upstream":"rds-postgres-primary"}'
    },
    {
      id: '03',
      code: 'TREESTORE',
      name: 'Árvore TreeStore',
      icon: <GitFork className="w-4 h-4 text-amber-400" />,
      input: 'Runtime Multiagente (Metric, Log, Topology, Coordinator)',
      output: 'Árvore formal com 1 causa-raiz comprovada e 2 refutadas',
      desc: 'Multiagente investiga em paralelo, validando ou descartando hipóteses com base em dados concretos.',
      samplePayload: '{"node":"branch_1b","hypothesis":"db_pool_exhausted","verdict":"proven","confidence":1.0}'
    },
    {
      id: '04',
      code: 'PRESCRIPTION',
      name: 'Remediação Prescritiva',
      icon: <CheckSquare className="w-4 h-4 text-emerald-400" />,
      input: 'Diagnóstico Determinístico do TreeStore',
      output: 'Pull Request GitOps pronto para Argo CD / Helm',
      desc: 'Geração de proposta de rollback, ajuste de réplicas ou correção de ConfigMap estruturada para Git.',
      samplePayload: '{"pr_id":419,"target":"production/values.yaml","action":"rollback","tag":"v2.4.0"}'
    },
    {
      id: '05',
      code: 'GOVERNANCE',
      name: 'Governança & Execução',
      icon: <ShieldCheck className="w-4 h-4 text-purple-400" />,
      input: 'Chave FIDO2 / YubiKey + Assinatura Criptográfica',
      output: 'Sincronização no cluster com zero downtime e auditoria',
      desc: 'Execução condicionada ao aval do operador humano, registrando assinatura criptográfica e pós-morte.',
      samplePayload: '{"auth_method":"webauthn_fido2","approved_by":"sre-lead@empresa.com","cluster_synced":true}'
    }
  ];

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-surface-subtle border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="text-xs font-mono text-brand-sky uppercase font-semibold">
            Pipeline de Investigação Interativo
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-text-primary">
            Da telemetria dispersa à resolução em cinco etapas
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            Clique em cada etapa do pipeline abaixo para ver o payload de dados e como a informação é processada de ponta a ponta sem adivinhações.
          </p>
        </div>

        {/* Pipeline Steps Tracker */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 mb-6 font-mono text-xs">
          {pipeline.map((stage, idx) => (
            <button
              key={stage.id}
              onClick={() => setActiveStage(idx)}
              className={`p-3 rounded border text-left transition-all ${
                idx === activeStage
                  ? 'bg-surface-elevated border-brand-sky text-text-primary shadow-panel scale-102 ring-1 ring-brand-sky/40'
                  : 'bg-canvas border-border-subtle text-text-muted hover:text-text-secondary hover:border-border-medium'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] mb-1">
                <span className={idx === activeStage ? 'text-brand-sky font-bold' : 'text-text-muted'}>
                  {stage.code}
                </span>
                {stage.icon}
              </div>
              <div className="font-semibold text-text-primary truncate text-[11px] font-sans">
                {stage.name}
              </div>
            </button>
          ))}
        </div>

        {/* Dynamic Stage Inspector */}
        <div className="rounded-lg border border-border-subtle bg-canvas p-6 sm:p-8 font-mono text-xs">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-border-subtle">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-surface-elevated border border-border-medium flex items-center justify-center text-brand-sky font-bold">
                {pipeline[activeStage].id}
              </div>
              <div>
                <h3 className="text-base font-bold text-text-primary font-sans">
                  Estágio {pipeline[activeStage].id}: {pipeline[activeStage].name}
                </h3>
                <div className="text-xs text-text-muted mt-0.5 font-sans">
                  {pipeline[activeStage].desc}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveStage((prev) => (prev > 0 ? prev - 1 : 4))}
                className="px-2.5 py-1 rounded bg-surface-subtle border border-border-subtle text-text-muted hover:text-text-primary"
              >
                ← Anterior
              </button>
              <button
                onClick={() => setActiveStage((prev) => (prev < 4 ? prev + 1 : 0))}
                className="px-2.5 py-1 rounded bg-surface-elevated border border-border-medium text-brand-sky font-semibold hover:border-brand-sky flex items-center gap-1"
              >
                <span>Próximo Estágio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-5">
            <div className="lg:col-span-6 space-y-3">
              <div className="p-3 bg-surface-subtle rounded border border-border-subtle space-y-1.5">
                <div className="text-[10px] text-text-muted uppercase">Fontes de Entrada (Input):</div>
                <div className="text-text-primary font-semibold text-[11px]">{pipeline[activeStage].input}</div>
              </div>

              <div className="p-3 bg-surface-subtle rounded border border-border-subtle space-y-1.5">
                <div className="text-[10px] text-text-muted uppercase">Resultado Estruturado (Output):</div>
                <div className="text-emerald-400 font-semibold text-[11px]">{pipeline[activeStage].output}</div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-2">
              <div className="text-[11px] text-brand-sky font-semibold flex items-center gap-1.5">
                <Play className="w-3 h-3 text-emerald-400" />
                <span>PAYLOAD EM TRÂNSITO (INSPECTION BUFFER):</span>
              </div>
              <div className="p-3 bg-surface-elevated rounded border border-border-subtle text-[11px] text-text-secondary overflow-x-auto">
                <code className="text-brand-sky font-mono leading-relaxed">
                  {pipeline[activeStage].samplePayload}
                </code>
              </div>
              <div className="text-[10px] text-text-muted pt-1">
                Determinismo estrito: Cada transição de estágio possui validação criptográfica de integridade.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
