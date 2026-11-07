import { useState, useEffect, type FC } from 'react';
import { ConsoleWindow } from '../ui/ConsoleWindow';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import {
  GitCommit,
  GitBranch,
  ShieldCheck,
  CheckCircle2,
  Fingerprint,
  Play,
  Pause,
  RotateCcw,
  Network,
  Cpu,
  Database,
  Terminal,
  Activity
} from 'lucide-react';

export const HeroConsoleDemo: FC = () => {
  const [activeTab, setActiveTab] = useState<'simulator' | 'topology' | 'treestore' | 'traces'>('simulator');
  const [isPlaying, setIsPlaying] = useState(true);
  const [step, setStep] = useState(2); // 0 a 4
  const [authorized, setAuthorized] = useState(false);
  const [selectedNode, setSelectedNode] = useState<string>('checkout');

  // Loop da simulação ao vivo quando em play
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setStep((prev) => (prev < 4 ? prev + 1 : 0));
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const timelineSteps = [
    {
      time: '16:40:00',
      title: 'Rollout Helm Triggered',
      badge: 'TRIGGER',
      badgeVar: 'neutral' as const,
      detail: 'checkout-service:v2.4.1 implantado no namespace production. ReplicaSet 3/3.',
      icon: <GitCommit className="w-3.5 h-3.5 text-brand-sky" />
    },
    {
      time: '16:40:18',
      title: 'Istio Ingress Anomaly',
      badge: 'ALERT',
      badgeVar: 'error' as const,
      detail: 'Taxa de HTTP 502 salta para 14.8%. 94 conexões rejeitadas por timeout.',
      icon: <Activity className="w-3.5 h-3.5 text-rose-400" />
    },
    {
      time: '16:40:32',
      title: 'TreeStore DAG Branching',
      badge: 'ANALYSIS',
      badgeVar: 'indigo' as const,
      detail: 'Multiagente descarta CPU e comprova esgotamento do pool no driver Postgres.',
      icon: <GitBranch className="w-3.5 h-3.5 text-indigo-400" />
    },
    {
      time: '16:40:45',
      title: 'Remediation Formatted',
      badge: 'PRESCRIPTIVE',
      badgeVar: 'cyan' as const,
      detail: 'GitOps PR #419 gerado para rollback imediato para v2.4.0 com DB_MAX_OPEN_CONNS=50.',
      icon: <Terminal className="w-3.5 h-3.5 text-brand-sky" />
    },
    {
      time: '16:41:00',
      title: 'Governance Checkpoint',
      badge: 'GOVERNED',
      badgeVar: 'gov' as const,
      detail: 'Aguardando validação com chave física FIDO2 ou token TOTP do líder de plantão.',
      icon: <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
    }
  ];

  return (
    <ConsoleWindow
      title="k8s://prod-sa-east-1/incidents/KB-8924"
      badge={
        <div className="flex items-center gap-2 ml-2">
          <Badge variant={authorized ? 'ok' : 'error'} size="sm">
            {authorized ? 'RESOLVED VIA GITOPS' : 'SEV-1 ACTIVE'}
          </Badge>
          <span className="text-[10px] text-text-muted hidden md:inline">
            Latência P99: <strong className={authorized ? 'text-emerald-400' : 'text-rose-400'}>{authorized ? '124ms' : '4820ms'}</strong>
          </span>
        </div>
      }
      headerRight={
        <div className="flex items-center gap-1 bg-surface-subtle p-0.5 rounded border border-border-subtle text-xs">
          <button
            onClick={() => setActiveTab('simulator')}
            className={`px-2.5 py-1 rounded transition-colors font-mono ${
              activeTab === 'simulator'
                ? 'bg-surface-elevated text-text-primary border border-border-medium'
                : 'text-text-muted hover:text-text-secondary'
            }`}
          >
            Live Simulator
          </button>
          <button
            onClick={() => setActiveTab('topology')}
            className={`px-2.5 py-1 rounded transition-colors font-mono ${
              activeTab === 'topology'
                ? 'bg-surface-elevated text-text-primary border border-border-medium'
                : 'text-text-muted hover:text-text-secondary'
            }`}
          >
            Grafo Interativo
          </button>
          <button
            onClick={() => setActiveTab('treestore')}
            className={`px-2.5 py-1 rounded transition-colors font-mono ${
              activeTab === 'treestore'
                ? 'bg-surface-elevated text-text-primary border border-border-medium'
                : 'text-text-muted hover:text-text-secondary'
            }`}
          >
            TreeStore DAG
          </button>
          <button
            onClick={() => setActiveTab('traces')}
            className={`px-2.5 py-1 rounded transition-colors font-mono ${
              activeTab === 'traces'
                ? 'bg-surface-elevated text-text-primary border border-border-medium'
                : 'text-text-muted hover:text-text-secondary'
            }`}
          >
            Traces
          </button>
        </div>
      }
      className="w-full text-left max-w-5xl mx-auto border-border-subtle shadow-console"
    >
      {/* ================= ABA 1: SIMULADOR AO VIVO (INTERATIVO COM PLAYER) ================= */}
      {activeTab === 'simulator' && (
        <div className="space-y-4">
          {/* Barra de Controle de Playback da Investigação */}
          <div className="flex flex-wrap items-center justify-between pb-3 border-b border-border-subtle text-xs font-mono gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-1.5 rounded bg-surface-elevated border border-border-medium text-text-primary hover:text-brand-sky transition-colors flex items-center gap-1.5 px-2.5"
                title={isPlaying ? 'Pausar simulação' : 'Iniciar simulação contínua'}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
                <span>{isPlaying ? 'Pausar' : 'Play'}</span>
              </button>
              <button
                onClick={() => { setStep(0); setAuthorized(false); }}
                className="p-1.5 rounded bg-surface-elevated border border-border-subtle text-text-muted hover:text-text-primary transition-colors"
                title="Reiniciar simulação"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              <span className="text-text-muted text-[11px] ml-2 hidden sm:inline">
                Passo {step + 1} de 5: <span className="text-text-primary font-semibold">{timelineSteps[step].title}</span>
              </span>
            </div>

            {/* Stepper interativo com cliques */}
            <div className="flex items-center gap-1">
              {timelineSteps.map((s, idx) => (
                <button
                  key={s.title}
                  onClick={() => setStep(idx)}
                  className={`w-6 h-6 rounded flex items-center justify-center text-[10px] font-mono transition-all ${
                    idx === step
                      ? 'bg-brand-sky text-black font-bold scale-110 shadow-sm'
                      : idx < step
                      ? 'bg-surface-elevated text-emerald-400 border border-emerald-500/30'
                      : 'bg-surface-subtle text-text-muted border border-border-subtle hover:text-text-primary'
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 font-mono text-xs">
            {/* Lado Esquerdo: Timeline Dinâmica com Highlight de Passo */}
            <div className="lg:col-span-7 space-y-2">
              {timelineSteps.map((item, idx) => {
                const isCurrent = idx === step;
                const isPassed = idx < step;
                return (
                  <div
                    key={item.title}
                    onClick={() => setStep(idx)}
                    className={`p-3 rounded border transition-all cursor-pointer ${
                      isCurrent
                        ? 'bg-surface-elevated border-brand-sky shadow-panel translate-x-1'
                        : isPassed
                        ? 'bg-surface-elevated/40 border-border-subtle opacity-75 hover:opacity-100'
                        : 'bg-surface-subtle border-border-subtle/50 opacity-40 hover:opacity-70'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        {item.icon}
                        <span className={`font-semibold ${isCurrent ? 'text-text-primary' : 'text-text-secondary'}`}>
                          {item.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-text-muted text-[10px]">{item.time}</span>
                        <Badge variant={item.badgeVar} size="sm">{item.badge}</Badge>
                      </div>
                    </div>
                    <p className="text-text-muted text-[11px] leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Lado Direito: War Room HUD & Painel de Autorização FIDO2 */}
            <div className="lg:col-span-5 bg-surface-elevated rounded border border-border-subtle p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-border-subtle">
                  <div className="flex items-center gap-1.5 text-text-primary font-semibold text-xs">
                    <ShieldCheck className="w-4 h-4 text-purple-400" />
                    <span>CHECKPOINT DE REMEDIAÇÃO</span>
                  </div>
                  <Badge variant="gov" size="sm">FIDO2 ACTIVE</Badge>
                </div>

                <div className="space-y-2.5 text-[11px]">
                  <div className="text-text-muted">Ação Prescritiva Calculada:</div>
                  <div className="p-2.5 rounded bg-canvas border border-border-subtle font-mono text-[10px] space-y-1">
                    <div className="text-emerald-400 font-semibold">// GitOps Pull Request #419</div>
                    <div className="text-text-secondary">target: production/checkout/values.yaml</div>
                    <div className="text-rose-400">- image.tag: v2.4.1 (POOL_MAX=5)</div>
                    <div className="text-emerald-400">+ image.tag: v2.4.0 (POOL_MAX=50)</div>
                  </div>

                  <div className="p-2 rounded bg-surface-subtle border border-border-subtle text-text-muted text-[10px]">
                    Impacto Estimado: Zero downtime · Istio mTLS intacto · Latência P99 normalizada para 120ms em ~12s.
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border-subtle mt-4">
                {!authorized ? (
                  <Button
                    variant="primary"
                    size="md"
                    className="w-full justify-center group font-semibold"
                    icon={<Fingerprint className="w-4 h-4 text-brand-sky group-hover:scale-110 transition-transform" />}
                    onClick={() => {
                      setAuthorized(true);
                      setStep(4);
                    }}
                  >
                    Autorizar Rollback (Toque na Chave)
                  </Button>
                ) : (
                  <div className="p-2.5 bg-status-ok/15 border border-status-ok/40 rounded text-center font-mono space-y-1 animate-in fade-in duration-200">
                    <div className="flex items-center justify-center gap-1.5 text-emerald-400 font-semibold text-xs">
                      <CheckCircle2 className="w-4 h-4" />
                      Rollback Executado com Sucesso!
                    </div>
                    <div className="text-[10px] text-text-muted">
                      PR #419 mergeado · Argo CD sincronizado · Alertas resolvidos.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= ABA 2: GRAFO TOPOLÓGICO INTERATIVO COM SVG PACKET FLOW ================= */}
      {activeTab === 'topology' && (
        <div className="space-y-4 font-mono text-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-border-subtle text-[11px] text-text-muted gap-2">
            <div>Clique em qualquer nó do cluster para inspecionar dependências e telemetria:</div>
            <div className="text-brand-sky font-semibold">Nó Selecionado: {selectedNode}</div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
            {/* Grafo SVG Interativo */}
            <div className="lg:col-span-8 bg-canvas p-6 rounded border border-border-subtle relative overflow-hidden">
              {/* Conectores SVG com animação de traço */}
              <svg className="w-full h-48 sm:h-56" viewBox="0 0 500 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Linhas de conexão */}
                <path d="M 80 100 L 220 100" stroke="#1E2638" strokeWidth="2" />
                <path d="M 280 100 L 400 50" stroke={selectedNode === 'rds' || selectedNode === 'checkout' ? '#DC2626' : '#1E2638'} strokeWidth="2" strokeDasharray={selectedNode === 'checkout' ? '4 4' : 'none'} className="animate-pulse" />
                <path d="M 280 100 L 400 150" stroke="#1E2638" strokeWidth="2" />

                {/* Pulso de pacotes animados no SVG */}
                <circle cx="150" cy="100" r="3" fill="#38BDF8">
                  <animate attributeName="cx" from="80" to="220" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="340" cy="75" r="3" fill="#DC2626">
                  <animate attributeName="cx" from="280" to="400" dur="1.5s" repeatCount="indefinite" />
                  <animate attributeName="cy" from="100" to="50" dur="1.5s" repeatCount="indefinite" />
                </circle>
              </svg>

              {/* Nós de HTML sobrepostos com botões de clique */}
              <div className="absolute inset-0 p-4 flex justify-between items-center pointer-events-none">
                {/* Nó 1: Ingress */}
                <button
                  onClick={() => setSelectedNode('ingress')}
                  className={`pointer-events-auto p-3 rounded-lg border text-left transition-all ${
                    selectedNode === 'ingress'
                      ? 'bg-surface-elevated border-brand-sky shadow-panel scale-105'
                      : 'bg-surface-subtle border-border-subtle hover:border-border-medium'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-text-primary font-semibold text-[11px]">
                    <Network className="w-3.5 h-3.5 text-brand-sky" />
                    <span>istio-ingress</span>
                  </div>
                  <div className="text-[10px] text-rose-400 mt-1">HTTP 502 Rate: 14.8%</div>
                </button>

                {/* Nó 2: Checkout Service */}
                <button
                  onClick={() => setSelectedNode('checkout')}
                  className={`pointer-events-auto p-3 rounded-lg border text-left transition-all ${
                    selectedNode === 'checkout'
                      ? 'bg-surface-elevated border-rose-500 shadow-panel scale-105 ring-1 ring-rose-500/50'
                      : 'bg-surface-subtle border-border-subtle hover:border-border-medium'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-text-primary font-semibold text-[11px]">
                    <Cpu className="w-3.5 h-3.5 text-rose-400" />
                    <span>checkout-api</span>
                  </div>
                  <div className="text-[10px] text-rose-400 mt-1">P99: 4820ms (Spike)</div>
                </button>

                {/* Nós 3 e 4: RDS e Redis */}
                <div className="space-y-6 pointer-events-auto">
                  <button
                    onClick={() => setSelectedNode('rds')}
                    className={`block w-full p-2.5 rounded-lg border text-left transition-all ${
                      selectedNode === 'rds'
                        ? 'bg-surface-elevated border-rose-500 shadow-panel scale-105'
                        : 'bg-surface-subtle border-border-subtle hover:border-border-medium'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 text-text-primary font-semibold text-[11px]">
                      <Database className="w-3.5 h-3.5 text-rose-400" />
                      <span>aws-rds-postgres</span>
                    </div>
                    <div className="text-[10px] text-rose-400 mt-0.5">Pool: 5/5 (100% Sat)</div>
                  </button>

                  <button
                    onClick={() => setSelectedNode('redis')}
                    className={`block w-full p-2.5 rounded-lg border text-left transition-all ${
                      selectedNode === 'redis'
                        ? 'bg-surface-elevated border-brand-sky shadow-panel scale-105'
                        : 'bg-surface-subtle border-border-subtle hover:border-border-medium'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 text-text-primary font-semibold text-[11px]">
                      <Database className="w-3.5 h-3.5 text-emerald-400" />
                      <span>cart-redis</span>
                    </div>
                    <div className="text-[10px] text-emerald-400 mt-0.5">Latency: 1.1ms (OK)</div>
                  </button>
                </div>
              </div>
            </div>

            {/* Painel Lateral com Detalhes do Nó Inspecionado */}
            <div className="lg:col-span-4 bg-surface-elevated rounded border border-border-subtle p-4 space-y-3">
              <div className="text-xs font-semibold text-text-primary pb-2 border-b border-border-subtle flex items-center justify-between">
                <span>INSPEÇÃO: {selectedNode.toUpperCase()}</span>
                <Badge variant={selectedNode === 'redis' ? 'ok' : 'error'} size="sm">
                  {selectedNode === 'redis' ? 'HEALTHY' : 'DEGRADED'}
                </Badge>
              </div>

              {selectedNode === 'checkout' && (
                <div className="space-y-2 text-[11px] text-text-secondary">
                  <div>Pod: <code className="text-text-primary">checkout-api-7b9c4-v4k</code></div>
                  <div>CPU: 28% (Dentro da quota de 500m)</div>
                  <div>Memória: 340Mi / 1Gi (Sem OOM)</div>
                  <div className="text-rose-400 font-semibold">
                    Falha: Espera por conexão no pool Postgres excedeu 5000ms.
                  </div>
                </div>
              )}

              {selectedNode === 'rds' && (
                <div className="space-y-2 text-[11px] text-text-secondary">
                  <div>Endpoint: <code className="text-text-primary">pg-primary.internal</code></div>
                  <div>Conexões Ativas: 5 / 5 (Max)</div>
                  <div>Fila de Espera: 84 requisições bloqueadas</div>
                  <div className="text-rose-400 font-semibold">
                    Causa: ConfigMap com limite configurado muito baixo no deploy.
                  </div>
                </div>
              )}

              {selectedNode === 'ingress' && (
                <div className="space-y-2 text-[11px] text-text-secondary">
                  <div>Ingress Gateway: Envoy Proxy v1.28</div>
                  <div>Retries: 3 tentativas por requisição</div>
                  <div>HTTP 502 Bad Gateway: 14.8% das requisições</div>
                </div>
              )}

              {selectedNode === 'redis' && (
                <div className="space-y-2 text-[11px] text-text-secondary">
                  <div>Cluster: Redis 7.2 Standalone</div>
                  <div>Cache Hit Ratio: 94.2%</div>
                  <div className="text-emerald-400">Totalmente operacional sem gargalos.</div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ================= ABA 3: TREESTORE DAG ================= */}
      {activeTab === 'treestore' && (
        <div className="space-y-3 font-mono text-xs">
          <div className="flex justify-between items-center text-text-muted pb-2 border-b border-border-subtle text-[11px]">
            <span>Árvore de Decisão Determinística (DAG)</span>
            <span className="text-brand-sky">Zero Alucinação: 100% ancorado em telemetria</span>
          </div>

          <div className="p-3 bg-surface-elevated rounded border border-border-subtle">
            <div className="flex items-center justify-between text-brand-sky font-semibold mb-1 text-[11px]">
              <span>[NÓ 0 - RAIZ] Anomalia Istio HTTP 502 Rate Spike</span>
              <Badge variant="error" size="sm">CONFIRMADO</Badge>
            </div>
            <p className="text-text-muted text-[10px]">
              Evidência: Métrica Envoy `cluster.checkout_service.upstream_rq_502` com 94 erros em 60s.
            </p>
          </div>

          <div className="ml-5 pl-4 border-l border-border-medium space-y-2">
            <div className="p-2.5 bg-surface-elevated/50 rounded border border-border-subtle">
              <div className="flex justify-between text-[11px] mb-0.5">
                <span className="text-text-secondary">Hipótese A: CPU Throttling por quota CFS</span>
                <span className="text-emerald-400 font-semibold">REFUTADA</span>
              </div>
              <p className="text-text-muted text-[10px]">
                Métrica `container_cpu_cfs_throttled_periods_total` = 0 em todos os pods réplica.
              </p>
            </div>

            <div className="p-2.5 bg-surface-elevated/50 rounded border border-border-subtle">
              <div className="flex justify-between text-[11px] mb-0.5">
                <span className="text-text-secondary">Hipótese B: Pod OOMKilled / Memory Leak</span>
                <span className="text-emerald-400 font-semibold">REFUTADA</span>
              </div>
              <p className="text-text-muted text-[10px]">
                Restarts: 0. Pods em estado Running há 4 horas ininterruptas.
              </p>
            </div>

            <div className="p-2.5 bg-brand-indigo/15 rounded border border-brand-indigo/30">
              <div className="flex justify-between text-[11px] mb-0.5">
                <span className="text-brand-sky font-semibold">Hipótese C: DB Connection Pool Exhaustion</span>
                <span className="text-brand-sky font-semibold">COMPROVADA (100%)</span>
              </div>
              <p className="text-text-secondary text-[10px]">
                Logs comprovam: `connection pool limit (5) reached`. Correlacionado com Helm Revision #42.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ================= ABA 4: SPANS & TRACES ================= */}
      {activeTab === 'traces' && (
        <div className="space-y-3 font-mono text-xs">
          <div className="text-text-muted text-[11px] pb-2 border-b border-border-subtle">
            Trace ID: <span className="text-text-primary">4bf92f3577b34da6a3ce929d0e0e4736</span> · Latência Total: <span className="text-rose-400 font-semibold">4820ms</span>
          </div>

          <div className="space-y-2">
            <div className="p-2.5 bg-surface-elevated rounded border border-border-subtle">
              <div className="flex justify-between text-[11px] mb-1">
                <span className="text-text-primary font-semibold">istio-ingressgateway: ingress-to-mesh</span>
                <span className="text-text-muted">4820ms</span>
              </div>
              <div className="w-full bg-canvas h-1.5 rounded overflow-hidden">
                <div className="bg-rose-500 h-full w-full" />
              </div>
            </div>

            <div className="p-2.5 bg-surface-elevated rounded border border-border-subtle ml-4">
              <div className="flex justify-between text-[11px] mb-1">
                <span className="text-text-primary font-semibold">checkout-service: POST /checkout/process</span>
                <span className="text-text-muted">4808ms</span>
              </div>
              <div className="w-full bg-canvas h-1.5 rounded overflow-hidden">
                <div className="bg-rose-500 h-full w-[99%]" />
              </div>
            </div>

            <div className="p-2.5 bg-brand-indigo/15 rounded border border-brand-indigo/30 ml-8">
              <div className="flex justify-between text-[11px] mb-1">
                <span className="text-brand-sky font-semibold">postgresql: acquire_connection (WAITING_LOCK)</span>
                <span className="text-rose-400 font-bold">4795ms (TIMEOUT)</span>
              </div>
              <div className="w-full bg-canvas h-1.5 rounded overflow-hidden">
                <div className="bg-brand-sky h-full w-[98%]" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer do Console */}
      <div className="mt-3 pt-2.5 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-text-muted gap-1">
        <span>* Simulação interativa baseada na arquitetura Kubeasy</span>
        <span className="text-emerald-400 flex items-center gap-1">
          <Activity className="w-3 h-3" />
          Telemetria Conectada
        </span>
      </div>
    </ConsoleWindow>
  );
};
