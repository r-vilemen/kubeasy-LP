import { useState, type FC } from 'react';
import { Badge } from '../ui/Badge';
import { ConsoleWindow } from '../ui/ConsoleWindow';
import {
  GitFork,
  Cpu,
  Bot,
  ShieldCheck,
  CheckCircle2,
  FileCode,
  Network,
  Fingerprint,
  Layers,
  Search,
  Activity,
  GitPullRequest
} from 'lucide-react';

export const ArchitectureSection: FC = () => {
  const [activeTab, setActiveTab] = useState<'treestore' | 'multiagent' | 'graph' | 'governance'>('treestore');

  return (
    <section id="diferenciais" className="py-20 md:py-28 bg-canvas border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="indigo" dot>ARQUITETURA & DIFERENCIAIS TÉCNICOS</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
            Engenharia construída para ambientes de missão crítica
          </h2>
          <p className="text-base text-text-secondary leading-relaxed">
            Sem caixas-pretas ou promessas mágicas. O Kubeasy combina algoritmos determinísticos de correlação, agentes especializados e controle humano em cada decisão.
          </p>

          {/* Feature Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveTab('treestore')}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                activeTab === 'treestore'
                  ? 'bg-brand-indigo text-white shadow-glow-indigo/50'
                  : 'bg-surface-elevated text-text-secondary hover:text-text-primary border border-white/5'
              }`}
            >
              1. TreeStore Determinístico
            </button>
            <button
              onClick={() => setActiveTab('multiagent')}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                activeTab === 'multiagent'
                  ? 'bg-brand-indigo text-white shadow-glow-indigo/50'
                  : 'bg-surface-elevated text-text-secondary hover:text-text-primary border border-white/5'
              }`}
            >
              2. Runtime Multiagente
            </button>
            <button
              onClick={() => setActiveTab('graph')}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                activeTab === 'graph'
                  ? 'bg-brand-indigo text-white shadow-glow-indigo/50'
                  : 'bg-surface-elevated text-text-secondary hover:text-text-primary border border-white/5'
              }`}
            >
              3. Grafo Unificado & Copiloto
            </button>
            <button
              onClick={() => setActiveTab('governance')}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                activeTab === 'governance'
                  ? 'bg-brand-indigo text-white shadow-glow-indigo/50'
                  : 'bg-surface-elevated text-text-secondary hover:text-text-primary border border-white/5'
              }`}
            >
              4. Governança & GitOps
            </button>
          </div>
        </div>

        {/* Dynamic Architecture Display */}
        <div className="bg-surface-subtle border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-console">
          {/* TAB 1: TREESTORE */}
          {activeTab === 'treestore' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <Badge variant="indigo">ESTRUTURA DE DADOS IMUTÁVEL</Badge>
                <h3 className="text-2xl font-bold text-text-primary">
                  TreeStore: Investigação estruturada em árvore
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Em vez de conversas caóticas em chats ou diagnósticos que se perdem no histórico, o TreeStore organiza a investigação como uma árvore formal de hipóteses e evidências.
                </p>

                <ul className="space-y-3 text-xs font-mono text-text-secondary pt-2">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-status-ok shrink-0 mt-0.5" />
                    <span><strong>Rastreabilidade Total:</strong> Cada nó registra a fonte de dados (métrica, log, evento K8s) e o timestamp exato.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-status-ok shrink-0 mt-0.5" />
                    <span><strong>Hipóteses Refutadas:</strong> Caminhos investigados que não explicam o problema são preservados para o pós-morte.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-status-ok shrink-0 mt-0.5" />
                    <span><strong>Exportação Automática:</strong> Gere relatórios de post-mortem completos em Markdown com um clique.</span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-7">
                <ConsoleWindow title="treestore-graph-viewer --incident=KB-4028">
                  <div className="space-y-3 font-mono text-xs">
                    {/* Nó Raiz */}
                    <div className="p-3 bg-surface-elevated rounded border border-white/10">
                      <div className="flex items-center justify-between text-brand-cyan mb-1 font-semibold">
                        <span className="flex items-center gap-1.5">
                          <GitFork className="w-3.5 h-3.5" />
                          ROOT NODE: Anomalia de Latência P99 [checkout-service]
                        </span>
                        <Badge variant="neutral" size="sm">Telemetria Istio</Badge>
                      </div>
                      <p className="text-text-muted text-[11px]">
                        Detecção: Latência P99 excedeu 4500ms às 16:40:20 UTC.
                      </p>
                    </div>

                    {/* Ramo 1: Refutado */}
                    <div className="ml-6 pl-4 border-l-2 border-white/10 space-y-2">
                      <div className="p-2.5 bg-surface-elevated/40 rounded border border-white/5">
                        <div className="flex items-center justify-between text-text-muted mb-0.5">
                          <span>RAMO 1A: Hipótese CPU Throttling / Limites CFS</span>
                          <Badge variant="neutral" size="sm">Refutada (CPU &lt; 35%)</Badge>
                        </div>
                        <p className="text-[11px] text-text-muted">Agente de Métricas validou que pods operam dentro da quota.</p>
                      </div>

                      {/* Ramo 2: Comprovado */}
                      <div className="p-3 bg-brand-indigo/10 rounded border border-brand-indigo/40">
                        <div className="flex items-center justify-between text-indigo-300 font-semibold mb-1">
                          <span className="flex items-center gap-1.5">
                            <Layers className="w-3.5 h-3.5 text-brand-cyan" />
                            RAMO 1B: Hipótese Esgotamento do DB Connection Pool
                          </span>
                          <Badge variant="indigo" size="sm">Comprovada (100% conf.)</Badge>
                        </div>
                        <p className="text-[11px] text-text-secondary">
                          Logs indicam <code className="text-brand-cyan">sql: connection pool exhausted</code> após rollout do ConfigMap v2.4.1.
                        </p>
                      </div>
                    </div>
                  </div>
                </ConsoleWindow>
              </div>
            </div>
          )}

          {/* TAB 2: RUNTIME MULTIAGENTE */}
          {activeTab === 'multiagent' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <Badge variant="cyan">FEDERAÇÃO DE AGENTES</Badge>
                <h3 className="text-2xl font-bold text-text-primary">
                  Runtime Multiagente Especializado
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Em vez de um único modelo genérico que tenta resolver tudo, o Kubeasy utiliza agentes com responsabilidades estritas e ferramentas direcionadas.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="p-3 bg-surface-elevated rounded-lg border border-white/5">
                    <strong className="text-xs font-mono text-brand-cyan block mb-1">1. Metric Anomaly Agent</strong>
                    <p className="text-xs text-text-muted">Inspeciona saturação de cgroups, saturação de rede, taxas de requisições e spikes de latência.</p>
                  </div>
                  <div className="p-3 bg-surface-elevated rounded-lg border border-white/5">
                    <strong className="text-xs font-mono text-status-warn block mb-1">2. Log Forensics Agent</strong>
                    <p className="text-xs text-text-muted">Varre fluxos do Loki e CloudWatch buscando stacktraces, exceptions recorrentes e erros 5xx.</p>
                  </div>
                  <div className="p-3 bg-surface-elevated rounded-lg border border-white/5">
                    <strong className="text-xs font-mono text-brand-indigo block mb-1">3. K8s Topology Agent</strong>
                    <p className="text-xs text-text-muted">Cruza eventos do ReplicaSet, Pod restarts, OOMKilled e histórico de revisões Helm.</p>
                  </div>
                  <div className="p-3 bg-surface-elevated rounded-lg border border-white/5">
                    <strong className="text-xs font-mono text-status-ok block mb-1">4. Coordinator & Synthesis Agent</strong>
                    <p className="text-xs text-text-muted">Consolida achados no TreeStore e formula a hipótese de causa-raiz para o operador humano.</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <ConsoleWindow title="kubeasy-agent-runtime --active-workers">
                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3 bg-black/40 rounded border border-white/5 text-text-muted flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-brand-cyan animate-pulse" />
                        <span>COORDINATOR: Despachando análise para 3 agentes paralelos</span>
                      </span>
                      <Badge variant="cyan" size="sm">Sincronizado</Badge>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      <div className="p-3 bg-surface-elevated rounded border border-white/10 text-center">
                        <Activity className="w-5 h-5 text-brand-cyan mx-auto mb-1" />
                        <div className="font-semibold text-text-primary text-[11px]">Metric Agent</div>
                        <Badge variant="ok" size="sm" className="mt-1">Queries: 12 ok</Badge>
                      </div>
                      <div className="p-3 bg-surface-elevated rounded border border-white/10 text-center">
                        <Search className="w-5 h-5 text-status-warn mx-auto mb-1" />
                        <div className="font-semibold text-text-primary text-[11px]">Log Forensics</div>
                        <Badge variant="warn" size="sm" className="mt-1">Found 84 errors</Badge>
                      </div>
                      <div className="p-3 bg-surface-elevated rounded border border-white/10 text-center">
                        <Network className="w-5 h-5 text-brand-indigo mx-auto mb-1" />
                        <div className="font-semibold text-text-primary text-[11px]">K8s Topology</div>
                        <Badge variant="indigo" size="sm" className="mt-1">Diff Detectado</Badge>
                      </div>
                    </div>

                    <div className="p-3 bg-surface-overlay rounded border border-white/5 text-text-secondary text-[11px] leading-relaxed">
                      <span className="text-status-ok font-semibold block mb-0.5">SÍNTESE DO COORDENADOR:</span>
                      "Correlação determinística confirmada entre o rollout Helm v2.4.1 (K8s Agent) e a mensagem de exaustão do pool (Log Agent). Nenhuma falha de hardware ou CPU detectada."
                    </div>
                  </div>
                </ConsoleWindow>
              </div>
            </div>
          )}

          {/* TAB 3: GRAFO UNIFICADO & COPILOTO */}
          {activeTab === 'graph' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <Badge variant="cyan">CONTEXTO TOPOLÓGICO VIVO</Badge>
                <h3 className="text-2xl font-bold text-text-primary">
                  Grafo Unificado de Infraestrutura & Copiloto
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Microsserviços não falham no vácuo. O Grafo Unificado do Kubeasy mapeia em tempo real como pods, serviços, proxies e dependências de nuvem se comunicam.
                </p>

                <div className="space-y-3 text-xs font-mono text-text-secondary pt-2">
                  <div className="flex items-start gap-2.5">
                    <Network className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                    <span>Visão de dependências em camadas: Ingress → Service Mesh → Pods → RDS.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Bot className="w-4 h-4 text-brand-indigo shrink-0 mt-0.5" />
                    <span>Copiloto que consulta o Grafo diretamente: zero alucinações.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <FileCode className="w-4 h-4 text-status-ok shrink-0 mt-0.5" />
                    <span>Pergunte sobre qualquer componente em linguagem natural técnica.</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <ConsoleWindow title="kubeasy-contextual-copilot --session=live">
                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-2.5 bg-black/40 rounded border border-white/5 text-text-muted flex items-center justify-between">
                      <span>Topologia Ativa: 18 Microsserviços · 4 Bancos AWS RDS · 2 Redis</span>
                      <Badge variant="ok" size="sm">Grafo Sincronizado</Badge>
                    </div>

                    <div className="p-3 bg-surface-elevated/70 rounded border border-white/10 text-text-secondary">
                      <span className="text-brand-cyan font-bold block mb-1">ENGENHEIRO DE PLANTÃO:</span>
                      "O problema no checkout pode afetar o serviço de pagamentos ou o inventário?"
                    </div>

                    <div className="p-3 bg-surface-overlay rounded border border-brand-indigo/30 text-text-primary space-y-1.5">
                      <span className="text-brand-indigo font-bold flex items-center gap-1.5">
                        <Bot className="w-3.5 h-3.5 text-brand-cyan" />
                        COPILOTO KUBEASY:
                      </span>
                      <p className="text-text-secondary text-[11px] leading-relaxed">
                        Consultando o Grafo Unificado: O serviço de pagamentos (<code className="text-brand-cyan">payment-service</code>) utiliza um pool independente e opera com 100% de disponibilidade. No entanto, o serviço de inventário (<code className="text-brand-cyan">inventory-api</code>) depende diretamente de chamadas síncronas do checkout e já registra aumento de 8% na fila de retry.
                      </p>
                      <div className="pt-1 text-[10px] text-text-muted">
                        Evidência ancorada em Istio VirtualService routes e métricas Envoy.
                      </div>
                    </div>
                  </div>
                </ConsoleWindow>
              </div>
            </div>
          )}

          {/* TAB 4: GOVERNANÇA & GITOPS */}
          {activeTab === 'governance' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <Badge variant="gov">CONTROLE E CONFORMIDADE</Badge>
                <h3 className="text-2xl font-bold text-text-primary">
                  Governança, GitOps & Human-in-the-Loop
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  A automação sem controle gera riscos inaceitáveis em produção. No Kubeasy, nenhuma alteração de infraestrutura é executada sem passar por políticas estritas de governança.
                </p>

                <div className="space-y-3 text-xs font-mono text-text-secondary pt-2">
                  <div className="flex items-start gap-2.5">
                    <Fingerprint className="w-4 h-4 text-status-gov shrink-0 mt-0.5" />
                    <span><strong>MFA Obrigatório:</strong> Liberação de ações críticas via chaves FIDO2 (YubiKey/Passkeys) ou TOTP.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <GitPullRequest className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                    <span><strong>GitOps First:</strong> Remediações sugeridas são formatadas como Pull Requests rastreáveis no GitHub / Argo CD.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-status-ok shrink-0 mt-0.5" />
                    <span><strong>Trilha de Auditoria Imutável:</strong> Todo comando, aprovação e diagnóstico é registrado e auditável.</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <ConsoleWindow title="kubeasy-governance-checkpoint // policy-enforcer">
                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3 bg-surface-elevated rounded border border-status-gov/30 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Fingerprint className="w-5 h-5 text-status-gov" />
                        <div>
                          <div className="font-semibold text-text-primary text-[11px]">AUTENTICAÇÃO FIDO2 NECESSÁRIA</div>
                          <span className="text-text-muted text-[10px]">Ação: Executar rollback de deployment em cluster de produção</span>
                        </div>
                      </div>
                      <Badge variant="gov" size="sm">Human-in-the-Loop</Badge>
                    </div>

                    <div className="p-3 bg-surface-overlay rounded border border-white/5 space-y-2 text-[11px]">
                      <div className="text-brand-cyan font-semibold">ARQUIVOS AFETADOS NO PULL REQUEST GITOPS:</div>
                      <div className="bg-black/40 p-2 rounded text-text-muted space-y-1">
                        <div>M deployments/checkout/values.yaml</div>
                        <div className="text-status-error">- tag: v2.4.1</div>
                        <div className="text-status-ok">+ tag: v2.4.0</div>
                      </div>
                      <div className="text-text-secondary">
                        Políticas ativas: Zero downtime deployment · Argo CD Sync automatic disabled · Requer 1 aprovação SRE.
                      </div>
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
