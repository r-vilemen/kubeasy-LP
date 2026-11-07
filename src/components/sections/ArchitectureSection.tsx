import { useState, type FC } from 'react';
import { Badge } from '../ui/Badge';
import { ConsoleWindow } from '../ui/ConsoleWindow';
import {
  Cpu,
  Fingerprint
} from 'lucide-react';

export const ArchitectureSection: FC = () => {
  const [activeTab, setActiveTab] = useState<'treestore' | 'multiagent' | 'graph' | 'governance'>('treestore');

  return (
    <section id="diferenciais" className="py-20 md:py-28 bg-canvas border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="text-xs font-mono text-purple-400 uppercase font-semibold">
            Especificação de Engenharia
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-text-primary">
            Arquitetura interna e diferenciais técnicos
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            Sem modelos genéricos ou "mágica de IA". O Kubeasy opera com agentes desacoplados, estruturas imutáveis de grafos e rastreabilidade determinística.
          </p>

          {/* Subnav Tabs de Arquitetura */}
          <div className="flex flex-wrap items-center gap-2 pt-3">
            <button
              onClick={() => setActiveTab('treestore')}
              className={`px-3 py-1.5 rounded text-xs font-mono transition-colors ${
                activeTab === 'treestore'
                  ? 'bg-surface-elevated text-text-primary border border-border-medium'
                  : 'text-text-muted hover:text-text-secondary'
              }`}
            >
              TreeStore (Árvore Imutável)
            </button>
            <button
              onClick={() => setActiveTab('multiagent')}
              className={`px-3 py-1.5 rounded text-xs font-mono transition-colors ${
                activeTab === 'multiagent'
                  ? 'bg-surface-elevated text-text-primary border border-border-medium'
                  : 'text-text-muted hover:text-text-secondary'
              }`}
            >
              Runtime Multiagente
            </button>
            <button
              onClick={() => setActiveTab('graph')}
              className={`px-3 py-1.5 rounded text-xs font-mono transition-colors ${
                activeTab === 'graph'
                  ? 'bg-surface-elevated text-text-primary border border-border-medium'
                  : 'text-text-muted hover:text-text-secondary'
              }`}
            >
              Grafo Topológico & Copiloto
            </button>
            <button
              onClick={() => setActiveTab('governance')}
              className={`px-3 py-1.5 rounded text-xs font-mono transition-colors ${
                activeTab === 'governance'
                  ? 'bg-surface-elevated text-text-primary border border-border-medium'
                  : 'text-text-muted hover:text-text-secondary'
              }`}
            >
              Governança & GitOps
            </button>
          </div>
        </div>

        {/* Dynamic Architectural Deep Dive */}
        <div className="rounded-lg border border-border-subtle bg-surface-subtle p-6 sm:p-8">
          {/* TAB 1: TREESTORE */}
          {activeTab === 'treestore' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-4">
                <div className="text-xs font-mono text-brand-sky font-semibold">
                  ESTRUTURA DE DADOS DETERMINÍSTICA
                </div>
                <h3 className="text-xl font-bold text-text-primary">
                  TreeStore: Árvore imutável de evidências
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Em incidentes complexos, conclusões precipitadas geram downtime prolongado. O TreeStore organiza o diagnóstico como uma árvore formal de hipóteses validadas ou refutadas por dados objetivos.
                </p>

                <div className="space-y-3 text-xs font-mono text-text-secondary pt-2">
                  <div className="p-3 bg-surface-elevated rounded border border-border-subtle space-y-1">
                    <strong className="text-text-primary block">Rastreabilidade Determinística:</strong>
                    <span className="text-text-muted">Cada ramo registra a métrica, log ou trace que comprova ou refuta uma suposição.</span>
                  </div>
                  <div className="p-3 bg-surface-elevated rounded border border-border-subtle space-y-1">
                    <strong className="text-text-primary block">Preservação de Hipóteses Descartadas:</strong>
                    <span className="text-text-muted">Garante que a equipe não repita testes inúteis e alimenta o pós-morte imediato.</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <ConsoleWindow title="treestore-engine // incident-kb-8924.dag">
                  <div className="space-y-2.5 font-mono text-xs">
                    <div className="p-2.5 bg-surface-elevated rounded border border-border-subtle">
                      <div className="flex justify-between items-center text-[11px] mb-1">
                        <span className="text-brand-sky font-semibold">[ROOT] Anomalia P99 Latency &gt; 4000ms</span>
                        <span className="text-text-muted">Istio Ingress Gateway</span>
                      </div>
                      <div className="text-text-muted text-[10px]">Gatilho disparado às 16:40:20 UTC</div>
                    </div>

                    <div className="ml-5 pl-4 border-l border-border-medium space-y-2">
                      <div className="p-2.5 bg-surface-elevated/60 rounded border border-border-subtle">
                        <div className="flex justify-between items-center text-[11px] mb-0.5">
                          <span className="text-text-secondary">[BRANCH 1A] Hipótese CFS Quota / CPU Throttling</span>
                          <span className="text-emerald-400 font-semibold">REFUTADA</span>
                        </div>
                        <div className="text-text-muted text-[10px]">Uso de CPU estável em 28% nos 3 pods réplica.</div>
                      </div>

                      <div className="p-2.5 bg-brand-indigo/15 rounded border border-brand-indigo/30">
                        <div className="flex justify-between items-center text-[11px] mb-0.5">
                          <span className="text-brand-sky font-semibold">[BRANCH 1B] Hipótese DB Connection Pool Exhaustion</span>
                          <span className="text-brand-sky font-semibold">COMPROVADA</span>
                        </div>
                        <div className="text-text-secondary text-[10px]">
                          Driver acusa esgotamento após rollout de ConfigMap com pool max de 5 conexões.
                        </div>
                      </div>
                    </div>
                  </div>
                </ConsoleWindow>
              </div>
            </div>
          )}

          {/* TAB 2: MULTIAGENTE */}
          {activeTab === 'multiagent' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-4">
                <div className="text-xs font-mono text-brand-sky font-semibold">
                  RUNTIME PARALELO
                </div>
                <h3 className="text-xl font-bold text-text-primary">
                  Federação de agentes com escopo delimitado
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Nenhum agente opera de forma generalista. Cada worker possui ferramentas estritas para analisar uma dimensão da infraestrutura.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono pt-2">
                  <div className="p-2.5 bg-surface-elevated rounded border border-border-subtle">
                    <strong className="text-text-primary block mb-0.5">Metric Agent</strong>
                    <span className="text-text-muted text-[11px]">cgroups, latência P99, IOPS e rede.</span>
                  </div>
                  <div className="p-2.5 bg-surface-elevated rounded border border-border-subtle">
                    <strong className="text-text-primary block mb-0.5">Log Forensics</strong>
                    <span className="text-text-muted text-[11px]">Varredura de exceptions e códigos 5xx.</span>
                  </div>
                  <div className="p-2.5 bg-surface-elevated rounded border border-border-subtle">
                    <strong className="text-text-primary block mb-0.5">K8s Topology</strong>
                    <span className="text-text-muted text-[11px]">Eventos, ReplicaSets e Helm history.</span>
                  </div>
                  <div className="p-2.5 bg-surface-elevated rounded border border-border-subtle">
                    <strong className="text-text-primary block mb-0.5">Coordinator</strong>
                    <span className="text-text-muted text-[11px]">Consolidação do grafo no TreeStore.</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <ConsoleWindow title="kubeasy-agent-runtime // worker-pool">
                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-2.5 bg-canvas rounded border border-border-subtle flex items-center justify-between text-[11px]">
                      <span className="flex items-center gap-2 text-text-secondary">
                        <Cpu className="w-3.5 h-3.5 text-brand-sky" />
                        <span>COORDINATOR: Despachando queries concorrentes</span>
                      </span>
                      <span className="text-emerald-400 font-semibold">OK · 3 WORKERS ATIVOS</span>
                    </div>

                    <div className="p-3 bg-surface-elevated rounded border border-border-subtle text-[11px] text-text-secondary space-y-1.5">
                      <div className="text-brand-sky font-semibold">SÍNTESE DOS AGENTES CONCORRENTES:</div>
                      <div>• Metric Agent: Saturação de conexões ativas no banco atingiu 100% da cota alocada.</div>
                      <div>• Log Forensics: 84 ocorrências de `sql: pool exhausted` no namespace `production`.</div>
                      <div>• Topology Agent: O evento coincide com a revisão #14 do Helm deploy.</div>
                    </div>
                  </div>
                </ConsoleWindow>
              </div>
            </div>
          )}

          {/* TAB 3: GRAFO TOPOLÓGICO */}
          {activeTab === 'graph' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-4">
                <div className="text-xs font-mono text-brand-sky font-semibold">
                  CONTEXTO DINÂMICO
                </div>
                <h3 className="text-xl font-bold text-text-primary">
                  Grafo unificado de dependências
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Microsserviços formam malhas intrincadas de tráfego. O Kubeasy mantém a topologia viva para responder perguntas com precisão cirúrgica através do Copiloto.
                </p>

                <div className="space-y-2 text-xs font-mono text-text-secondary pt-2">
                  <div className="p-2.5 bg-surface-elevated rounded border border-border-subtle">
                    Correlaciona Ingress, Service Mesh, Pods e bancos gerenciados em uma única malha de dados.
                  </div>
                  <div className="p-2.5 bg-surface-elevated rounded border border-border-subtle">
                    Copiloto ancorado na árvore de evidências: zero alucinações de modelos generativos comuns.
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <ConsoleWindow title="kubeasy-topology // cluster-sa-east-1.graph">
                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-2.5 bg-canvas rounded border border-border-subtle text-text-muted text-[11px]">
                      Topologia Mapeada: 14 Pods · 3 Services · 1 IngressGateway · 1 AWS RDS Postgres
                    </div>

                    <div className="p-3 bg-surface-elevated rounded border border-border-subtle space-y-2">
                      <div className="text-brand-sky font-semibold text-[11px]">CONSULTA COPILOTO:</div>
                      <div className="text-text-muted text-[11px]">"Qual o raio de impacto da falha no checkout-service?"</div>
                      <div className="text-text-secondary text-[11px] leading-relaxed pt-1 border-t border-border-subtle">
                        O serviço de pagamentos (<code className="text-brand-sky">payment-service</code>) utiliza pool independente e não está degradado. Contudo, o serviço de notificações registra aumento de 12% no buffer de retry por dependência transitiva.
                      </div>
                    </div>
                  </div>
                </ConsoleWindow>
              </div>
            </div>
          )}

          {/* TAB 4: GOVERNANÇA */}
          {activeTab === 'governance' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-4">
                <div className="text-xs font-mono text-purple-400 font-semibold">
                  CONTROLE DE PRODUÇÃO
                </div>
                <h3 className="text-xl font-bold text-text-primary">
                  Governança GitOps e Human-in-the-Loop
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Automação sem controle humano representa risco inaceitável. O Kubeasy formata qualquer remediação como um Pull Request declarativo e exige autenticação forte.
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
