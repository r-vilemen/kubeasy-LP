import { useState, type FC } from 'react';
import { ConsoleWindow } from '../ui/ConsoleWindow';
import { Badge } from '../ui/Badge';
import {
  Fingerprint,
  Bot,
  HelpCircle
} from 'lucide-react';

export const ArchitectureSection: FC = () => {
  const [activeTab, setActiveTab] = useState<'treestore' | 'multiagent' | 'graph' | 'governance'>('treestore');
  const [selectedTreeNode, setSelectedTreeNode] = useState<'root' | 'cpu' | 'oom' | 'pool'>('pool');
  const [copilotQuestion, setCopilotQuestion] = useState<number>(0);

  const copilotQA = [
    {
      q: 'Qual o raio de impacto da falha no checkout-service nos demais serviços?',
      a: 'Consultando o Grafo Topológico: O serviço de pagamentos (payment-service) possui pool dedicado e opera com 100% de disponibilidade. No entanto, o serviço de inventário (inventory-api) depende diretamente de chamadas síncronas do checkout e já registra 14% de elevação na fila de retries.',
      target: 'Topo-Graph Map'
    },
    {
      q: 'O pod está sofrendo restarts ou OOMKilled no cluster?',
      a: 'Verificação do K8s Agent: Zero restarts nos últimos 180 minutos. Os 3 pods réplicas estão em estado Running. O problema é puramente no nível da camada de aplicação/driver de banco de dados, não de infraestrutura de hardware.',
      target: 'K8s Topology Agent'
    },
    {
      q: 'Qual o risco de executar o rollback recomendado via GitOps?',
      a: 'Análise de Risco: A versão v2.4.0 operou por 14 dias sem anomalias de conexão. O rollback não possui migração de esquema de banco destrutiva e o Istio fará o roteamento de tráfego progressivo (canary zero downtime).',
      target: 'GitOps Policy Engine'
    }
  ];

  return (
    <section id="diferenciais" className="py-20 md:py-28 bg-canvas border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="text-xs font-mono text-purple-400 uppercase font-semibold">
            Especificação Técnica & Arquitetura
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-text-primary">
            Engenharia interna: determinismo sem caixas-pretas
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            Navegue pelos componentes estruturais da plataforma. Cada nó da árvore e cada consulta multiagente operam sobre evidências auditáveis.
          </p>

          {/* Subnav Tabs de Arquitetura */}
          <div className="flex flex-wrap items-center gap-2 pt-3">
            <button
              onClick={() => setActiveTab('treestore')}
              className={`px-3 py-1.5 rounded text-xs font-mono transition-all ${
                activeTab === 'treestore'
                  ? 'bg-surface-elevated text-text-primary border border-brand-sky shadow-panel'
                  : 'text-text-muted hover:text-text-secondary border border-transparent'
              }`}
            >
              TreeStore Interativo
            </button>
            <button
              onClick={() => setActiveTab('multiagent')}
              className={`px-3 py-1.5 rounded text-xs font-mono transition-all ${
                activeTab === 'multiagent'
                  ? 'bg-surface-elevated text-text-primary border border-brand-sky shadow-panel'
                  : 'text-text-muted hover:text-text-secondary border border-transparent'
              }`}
            >
              Runtime Multiagente
            </button>
            <button
              onClick={() => setActiveTab('graph')}
              className={`px-3 py-1.5 rounded text-xs font-mono transition-all ${
                activeTab === 'graph'
                  ? 'bg-surface-elevated text-text-primary border border-brand-sky shadow-panel'
                  : 'text-text-muted hover:text-text-secondary border border-transparent'
              }`}
            >
              Grafo & Copiloto
            </button>
            <button
              onClick={() => setActiveTab('governance')}
              className={`px-3 py-1.5 rounded text-xs font-mono transition-all ${
                activeTab === 'governance'
                  ? 'bg-surface-elevated text-text-primary border border-brand-sky shadow-panel'
                  : 'text-text-muted hover:text-text-secondary border border-transparent'
              }`}
            >
              Governança & GitOps
            </button>
          </div>
        </div>

        {/* Dynamic Architectural Deep Dive */}
        <div className="rounded-lg border border-border-subtle bg-surface-subtle p-6 sm:p-8">
          {/* ================= TAB 1: TREESTORE INTERATIVO ================= */}
          {activeTab === 'treestore' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-4 font-mono text-xs">
                <div className="text-brand-sky font-semibold">
                  CLIQUE NOS NÓS PARA INSPECIONAR EVIDÊNCIAS
                </div>
                <p className="text-text-secondary font-sans text-xs leading-relaxed">
                  O TreeStore decompõe o incidente em uma árvore determinística. Ao selecionar um nó, veja os dados crus de telemetria que comprovam ou refutam cada ramo.
                </p>

                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => setSelectedTreeNode('root')}
                    className={`w-full p-2.5 rounded border text-left transition-all ${
                      selectedTreeNode === 'root'
                        ? 'bg-surface-elevated border-brand-sky text-text-primary shadow-panel'
                        : 'bg-canvas border-border-subtle text-text-muted hover:text-text-secondary'
                    }`}
                  >
                    <div className="font-semibold text-text-primary">[NÓ 0] Gatilho de Anomalia Istio</div>
                    <div className="text-[10px] text-rose-400">HTTP 502 Rate Spike</div>
                  </button>

                  <div className="ml-4 space-y-2 border-l border-border-medium pl-3">
                    <button
                      onClick={() => setSelectedTreeNode('cpu')}
                      className={`w-full p-2.5 rounded border text-left transition-all ${
                        selectedTreeNode === 'cpu'
                          ? 'bg-surface-elevated border-brand-sky text-text-primary shadow-panel'
                          : 'bg-canvas border-border-subtle text-text-muted hover:text-text-secondary'
                      }`}
                    >
                      <div className="flex justify-between items-center text-[11px]">
                        <span>[RAMO 1] Quota CPU / CFS</span>
                        <span className="text-emerald-400 text-[10px] font-bold">REFUTADA</span>
                      </div>
                    </button>

                    <button
                      onClick={() => setSelectedTreeNode('oom')}
                      className={`w-full p-2.5 rounded border text-left transition-all ${
                        selectedTreeNode === 'oom'
                          ? 'bg-surface-elevated border-brand-sky text-text-primary shadow-panel'
                          : 'bg-canvas border-border-subtle text-text-muted hover:text-text-secondary'
                      }`}
                    >
                      <div className="flex justify-between items-center text-[11px]">
                        <span>[RAMO 2] Pod OOMKilled</span>
                        <span className="text-emerald-400 text-[10px] font-bold">REFUTADA</span>
                      </div>
                    </button>

                    <button
                      onClick={() => setSelectedTreeNode('pool')}
                      className={`w-full p-2.5 rounded border text-left transition-all ${
                        selectedTreeNode === 'pool'
                          ? 'bg-surface-elevated border-brand-sky text-text-primary shadow-panel ring-1 ring-brand-sky'
                          : 'bg-canvas border-border-subtle text-text-muted hover:text-text-secondary'
                      }`}
                    >
                      <div className="flex justify-between items-center text-[11px]">
                        <span className="text-brand-sky font-semibold">[RAMO 3] DB Pool Exhaustion</span>
                        <span className="text-brand-sky text-[10px] font-bold">COMPROVADA</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Lado Direito: Inspeção de Evidência Crua do Nó Selecionado */}
              <div className="lg:col-span-7">
                <ConsoleWindow title={`treestore://node-inspect?id=${selectedTreeNode}`}>
                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between pb-2 border-b border-border-subtle text-[11px]">
                      <span className="text-text-secondary">DADOS DO NÓ: <strong className="text-brand-sky">{selectedTreeNode.toUpperCase()}</strong></span>
                      <span className="text-text-muted">Formato: JSON Telemetry Buffer</span>
                    </div>

                    {selectedTreeNode === 'root' && (
                      <div className="p-3 bg-canvas rounded border border-border-subtle text-[11px] leading-relaxed text-text-secondary space-y-1">
                        <div className="text-rose-400 font-semibold">// Gatilho de Anomalia</div>
                        <div>event_type: "ingress_anomaly"</div>
                        <div>target_route: "/checkout/process"</div>
                        <div>status_code: 502</div>
                        <div>threshold_p99: "500ms"</div>
                        <div>actual_p99: "4820ms"</div>
                        <div>confidence: 1.0</div>
                      </div>
                    )}

                    {selectedTreeNode === 'cpu' && (
                      <div className="p-3 bg-canvas rounded border border-border-subtle text-[11px] leading-relaxed text-text-secondary space-y-1">
                        <div className="text-emerald-400 font-semibold">// Hipótese Refutada por Métrica</div>
                        <div>hypothesis: "cgroup_cfs_throttling"</div>
                        <div>cpu_usage_avg: "28%"</div>
                        <div>cfs_throttled_periods_total: 0</div>
                        <div className="text-emerald-400">verdict: "REFUTED_BY_PROMETHEUS"</div>
                      </div>
                    )}

                    {selectedTreeNode === 'oom' && (
                      <div className="p-3 bg-canvas rounded border border-border-subtle text-[11px] leading-relaxed text-text-secondary space-y-1">
                        <div className="text-emerald-400 font-semibold">// Hipótese Refutada por K8s Agent</div>
                        <div>hypothesis: "oom_memory_exhaustion"</div>
                        <div>pod_phase: "Running"</div>
                        <div>restart_count: 0</div>
                        <div>exit_code: null</div>
                        <div className="text-emerald-400">verdict: "REFUTED_BY_KUBELET"</div>
                      </div>
                    )}

                    {selectedTreeNode === 'pool' && (
                      <div className="p-3 bg-canvas rounded border border-brand-indigo/30 text-[11px] leading-relaxed text-text-secondary space-y-1">
                        <div className="text-brand-sky font-semibold">// Causa-Raiz Comprovada (100% Determinística)</div>
                        <div>hypothesis: "db_connection_pool_starvation"</div>
                        <div>driver: "pgx/v5 (PostgreSQL)"</div>
                        <div>max_connections_limit: 5</div>
                        <div>current_waiting_goroutines: 84</div>
                        <div>wait_duration_p99: "4795ms"</div>
                        <div className="text-brand-sky">verdict: "ROOT_CAUSE_PROVEN"</div>
                        <div className="text-text-muted text-[10px] pt-1">
                          Correlacionado com revisão de Helm #42 (values.yaml modificado).
                        </div>
                      </div>
                    )}
                  </div>
                </ConsoleWindow>
              </div>
            </div>
          )}

          {/* ================= TAB 2: MULTIAGENTE ================= */}
          {activeTab === 'multiagent' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-4">
                <div className="text-xs font-mono text-brand-sky font-semibold">
                  WORKERS ESPECIALIZADOS
                </div>
                <h3 className="text-xl font-bold text-text-primary">
                  Federação de agentes desacoplados
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Em vez de um único LLM genérico que alucina, o Kubeasy usa agentes especializados em cada camada de telemetria.
                </p>

                <div className="space-y-2.5 font-mono text-xs">
                  <div className="p-2.5 bg-surface-elevated rounded border border-border-subtle flex items-center justify-between">
                    <span className="text-text-primary font-semibold">1. Metric Anomaly Agent</span>
                    <span className="text-brand-sky text-[11px]">PromQL Engine</span>
                  </div>
                  <div className="p-2.5 bg-surface-elevated rounded border border-border-subtle flex items-center justify-between">
                    <span className="text-text-primary font-semibold">2. Log Forensics Agent</span>
                    <span className="text-amber-400 text-[11px]">LogQL Stream Parser</span>
                  </div>
                  <div className="p-2.5 bg-surface-elevated rounded border border-border-subtle flex items-center justify-between">
                    <span className="text-text-primary font-semibold">3. K8s Topology Agent</span>
                    <span className="text-indigo-400 text-[11px]">K8s Informer / CRDs</span>
                  </div>
                  <div className="p-2.5 bg-surface-elevated rounded border border-border-subtle flex items-center justify-between">
                    <span className="text-text-primary font-semibold">4. Coordinator Agent</span>
                    <span className="text-emerald-400 text-[11px]">TreeStore DAG Builder</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <ConsoleWindow title="kubeasy-coordinator // real-time-synthesis">
                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-2.5 bg-canvas rounded border border-border-subtle text-text-muted text-[11px]">
                      Síntese Concorrente: 4 Workers processando em paralelo · Latência de análise: 420ms
                    </div>
                    <div className="p-3 bg-surface-elevated rounded border border-border-subtle text-[11px] text-text-secondary space-y-2">
                      <div className="text-emerald-400 font-semibold">RELATÓRIO DO COORDENADOR:</div>
                      <p>
                        "As evidências coletadas pelo Log Forensics casam em 100% de probabilidade com a alteração de ConfigMap identificada pelo K8s Topology Agent. CPU e memória foram formalmente descartadas pelo Metric Agent."
                      </p>
                    </div>
                  </div>
                </ConsoleWindow>
              </div>
            </div>
          )}

          {/* ================= TAB 3: GRAFO & COPILOTO INTERATIVO ================= */}
          {activeTab === 'graph' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-4 font-mono text-xs">
                <div className="text-brand-sky font-semibold">
                  TESTE O COPILOTO CONTEXTUAL
                </div>
                <p className="text-sm text-text-secondary font-sans leading-relaxed">
                  O Copiloto do Kubeasy não é um chatbot genérico. Ele é diretamente alimentado pelo Grafo Topológico e pelo TreeStore.
                </p>

                <div className="space-y-2 pt-2">
                  <div className="text-[10px] text-text-muted uppercase">Clique em uma pergunta para testar:</div>
                  {copilotQA.map((item, idx) => (
                    <button
                      key={item.q}
                      onClick={() => setCopilotQuestion(idx)}
                      className={`w-full p-2.5 rounded border text-left transition-all ${
                        copilotQuestion === idx
                          ? 'bg-surface-elevated border-brand-sky text-text-primary shadow-panel'
                          : 'bg-canvas border-border-subtle text-text-muted hover:text-text-secondary'
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        <HelpCircle className="w-3.5 h-3.5 text-brand-sky shrink-0 mt-0.5" />
                        <span className="text-[11px] font-sans font-medium">{item.q}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7">
                <ConsoleWindow title="kubeasy-copilot // contextual-terminal">
                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3 bg-canvas rounded border border-border-subtle text-[11px]">
                      <span className="text-brand-sky font-semibold block mb-1">PERGUNTA DO OPERADOR:</span>
                      <span className="text-text-primary font-sans">"{copilotQA[copilotQuestion].q}"</span>
                    </div>

                    <div className="p-3 bg-surface-elevated rounded border border-brand-indigo/30 space-y-2">
                      <div className="flex items-center gap-2 text-brand-sky text-[11px] font-semibold">
                        <Bot className="w-4 h-4" />
                        <span>RESPOSTA EMBASADA NO GRAFO:</span>
                      </div>
                      <p className="text-text-secondary text-[11px] leading-relaxed font-sans">
                        {copilotQA[copilotQuestion].a}
                      </p>
                      <div className="text-[10px] text-text-muted pt-1 border-t border-border-subtle flex items-center justify-between">
                        <span>Ancoragem: {copilotQA[copilotQuestion].target}</span>
                        <span className="text-emerald-400 font-semibold">Zero Alucinação</span>
                      </div>
                    </div>
                  </div>
                </ConsoleWindow>
              </div>
            </div>
          )}

          {/* ================= TAB 4: GOVERNANÇA ================= */}
          {activeTab === 'governance' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-4">
                <div className="text-xs font-mono text-purple-400 font-semibold">
                  SEGURANÇA EM NÍVEL DE HARDWARE
                </div>
                <h3 className="text-xl font-bold text-text-primary">
                  Governança GitOps e Human-in-the-Loop
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Toda remediação proposta é estruturada como um Pull Request declarativo e requer chave física FIDO2 ou TOTP para execução em produção.
                </p>

                <div className="space-y-2 text-xs font-mono text-text-secondary pt-2">
                  <div className="p-2.5 bg-surface-elevated rounded border border-border-subtle">
                    <strong>Chaves FIDO2 / WebAuthn:</strong> Assinatura de ações de alto privilégio via hardware (YubiKey) ou TOTP.
                  </div>
                  <div className="p-2.5 bg-surface-elevated rounded border border-border-subtle">
                    <strong>Trilha de Auditoria Imutável:</strong> Todo veredito, operador responsável e diff executado é auditável.
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <ConsoleWindow title="kubeasy-governance // policy-enforcer">
                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3 bg-surface-elevated rounded border border-purple-500/30 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Fingerprint className="w-4 h-4 text-purple-400" />
                        <span className="font-semibold text-text-primary text-[11px]">EXIGÊNCIA DE APROVAÇÃO MULTIFATOR</span>
                      </div>
                      <Badge variant="gov" size="sm">POLICY ACTIVE</Badge>
                    </div>

                    <div className="p-3 bg-canvas rounded border border-border-subtle text-[11px] space-y-1.5 text-text-muted">
                      <div>Ação Restrita: Mutação de namespace `production`.</div>
                      <div>Destino: Sincronização via Argo CD Application `checkout-prod`.</div>
                      <div className="text-emerald-400">Status: Aguardando toque de chave física WebAuthn do líder de plantão.</div>
                    </div>
                  </div>
                </ConsoleWindow>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
