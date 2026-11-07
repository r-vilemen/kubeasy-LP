import { useState, type FC } from 'react';
import { ConsoleWindow } from '../ui/ConsoleWindow';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import {
  GitCommit,
  AlertTriangle,
  CheckCircle,
  Network,
  GitBranch,
  Bot,
  ShieldAlert,
  ArrowRight,
  Database,
  Cpu,
  Fingerprint
} from 'lucide-react';

export const HeroConsoleDemo: FC = () => {
  const [activeTab, setActiveTab] = useState<'topology' | 'treestore' | 'copilot'>('treestore');
  const [actionApproved, setActionApproved] = useState(false);

  return (
    <ConsoleWindow
      title="kubeasy-core // live-incident #KB-4028 [cluster: prod-sa-east-1]"
      badge={
        <div className="flex items-center gap-2">
          <Badge variant="error" dot size="sm">
            INCIDENTE ATIVO (P1)
          </Badge>
          <span className="text-[11px] font-mono text-text-muted hidden sm:inline">
            MTTD: 14s
          </span>
        </div>
      }
      headerRight={
        <div className="flex items-center bg-surface-elevated rounded-lg p-0.5 border border-white/5 text-xs font-mono">
          <button
            onClick={() => setActiveTab('treestore')}
            className={`px-2.5 py-1 rounded transition-colors ${
              activeTab === 'treestore'
                ? 'bg-brand-indigo text-white font-medium shadow-sm'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            TreeStore
          </button>
          <button
            onClick={() => setActiveTab('topology')}
            className={`px-2.5 py-1 rounded transition-colors ${
              activeTab === 'topology'
                ? 'bg-brand-indigo text-white font-medium shadow-sm'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            Grafo Topológico
          </button>
          <button
            onClick={() => setActiveTab('copilot')}
            className={`px-2.5 py-1 rounded transition-colors ${
              activeTab === 'copilot'
                ? 'bg-brand-indigo text-white font-medium shadow-sm'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            Copiloto
          </button>
        </div>
      }
      className="w-full text-left max-w-5xl mx-auto shadow-glow-indigo/20 border-white/15"
    >
      {/* Visualização TreeStore */}
      {activeTab === 'treestore' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-white/5 gap-2">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-brand-cyan">ÁRVORE DE EVIDÊNCIAS DETERMINÍSTICA</span>
                <Badge variant="indigo" size="sm">4 NÓS INVESTIGADOS</Badge>
              </div>
              <p className="text-xs text-text-muted mt-0.5">
                Rastreabilidade de hipóteses correlacionadas entre Deploy, Istio e Banco de Dados.
              </p>
            </div>
            <div className="text-[11px] font-mono text-text-secondary">
              Tempo decorrido: <span className="text-text-primary">1m 42s</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Tree Nodes List */}
            <div className="lg:col-span-7 space-y-2.5">
              {/* Nó Raiz: Gatilho */}
              <div className="p-3 rounded-lg bg-surface-elevated/70 border border-white/10 hover:border-brand-indigo/40 transition-colors">
                <div className="flex items-center justify-between text-xs font-mono mb-1">
                  <span className="flex items-center gap-1.5 text-text-primary font-semibold">
                    <GitCommit className="w-3.5 h-3.5 text-brand-cyan" />
                    [Nó 01] Rollout: checkout-service:v2.4.1
                  </span>
                  <Badge variant="neutral" size="sm">Helm / Argo CD</Badge>
                </div>
                <p className="text-xs text-text-secondary">
                  Implantado às 16:40:12 UTC por pipeline CI/CD. ReplicaSet 3/3 pods ativos.
                </p>
              </div>

              {/* Nó Galho 1: Detecção de Anomalia */}
              <div className="p-3 rounded-lg bg-surface-elevated/70 border border-status-error/30 pl-4 border-l-4">
                <div className="flex items-center justify-between text-xs font-mono mb-1">
                  <span className="flex items-center gap-1.5 text-status-error font-semibold">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    [Nó 02] Istio Gateway: Taxa de HTTP 502 subiu para 14.8%
                  </span>
                  <Badge variant="error" size="sm">Evidência Crítica</Badge>
                </div>
                <p className="text-xs text-text-secondary">
                  Degradação iniciada 18s após início de tráfego na versão v2.4.1.
                </p>
              </div>

              {/* Nó Galho 2: Veredito e Causa Raiz */}
              <div className="p-3 rounded-lg bg-surface-elevated/90 border border-brand-indigo/50 pl-4 border-l-4">
                <div className="flex items-center justify-between text-xs font-mono mb-1">
                  <span className="flex items-center gap-1.5 text-indigo-300 font-semibold">
                    <GitBranch className="w-3.5 h-3.5 text-brand-indigo" />
                    [Nó 03] Hipótese Comprovada: DB Connection Pool Leak
                  </span>
                  <Badge variant="indigo" size="sm">Causa-Raiz Determinística</Badge>
                </div>
                <p className="text-xs text-text-secondary">
                  Variável <code className="text-indigo-200 bg-white/5 px-1 py-0.5 rounded">DB_MAX_OPEN_CONNS=5</code> configurada incorretamente no ConfigMap v2.4.1 gerando esgotamento do pool.
                </p>
              </div>
            </div>

            {/* Painel Lateral: Ação Governada */}
            <div className="lg:col-span-5 bg-surface-overlay/80 rounded-lg p-3.5 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <ShieldAlert className="w-4 h-4 text-status-gov" />
                  <span className="text-xs font-mono font-semibold text-text-primary">
                    GOVERNANÇA & REMEDIAÇÃO
                  </span>
                </div>
                <div className="p-2.5 rounded bg-black/40 border border-white/5 font-mono text-[11px] text-text-secondary space-y-1 mb-3">
                  <div className="text-status-warn font-semibold">PLANO DE AÇÃO PROPOSTO:</div>
                  <div>- Reverter deploy para <span className="text-text-primary">checkout-service:v2.4.0</span></div>
                  <div>- Criar PR corretivo no repositório GitOps</div>
                  <div>- Notificar canal #war-room no Slack</div>
                </div>
                <p className="text-[11px] text-text-muted">
                  Requer autenticação de engenheiro com credencial FIDO2 / YubiKey ou TOTP.
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 mt-3">
                {!actionApproved ? (
                  <Button
                    variant="primary"
                    size="sm"
                    className="w-full justify-center bg-brand-indigo hover:bg-brand-indigo/90"
                    icon={<Fingerprint className="w-4 h-4 text-brand-cyan" />}
                    onClick={() => setActionApproved(true)}
                  >
                    Aprovar Rollback com FIDO2
                  </Button>
                ) : (
                  <div className="p-2 bg-status-ok/10 border border-status-ok/30 rounded text-center">
                    <span className="flex items-center justify-center gap-1.5 text-xs font-mono text-status-ok font-semibold">
                      <CheckCircle className="w-4 h-4" />
                      Ação Executada via GitOps PR #419
                    </span>
                    <span className="block text-[10px] text-text-muted mt-0.5">
                      Trilha criptográfica registrada no TreeStore.
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Visualização Grafo Topológico */}
      {activeTab === 'topology' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/5">
            <div>
              <span className="text-xs font-mono text-brand-cyan">MAPA DE RELACIONAMENTO TOPOLÓGICO</span>
              <p className="text-xs text-text-muted">Sinais correlacionados entre Pods, Ingress e AWS RDS.</p>
            </div>
            <Badge variant="cyan" size="sm">ISTIO SERVICE MESH</Badge>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 py-4">
            <div className="p-3 bg-surface-elevated rounded-lg border border-white/10 text-center">
              <Network className="w-5 h-5 text-status-error mx-auto mb-1.5" />
              <div className="text-xs font-mono font-semibold text-text-primary truncate">istio-ingressgateway</div>
              <Badge variant="error" size="sm" className="mt-1">502 Bad Gateway</Badge>
            </div>

            <div className="p-3 bg-surface-elevated rounded-lg border border-brand-indigo/40 text-center relative">
              <Cpu className="w-5 h-5 text-brand-indigo mx-auto mb-1.5" />
              <div className="text-xs font-mono font-semibold text-text-primary truncate">checkout-service</div>
              <Badge variant="warn" size="sm" className="mt-1">P99: 4.8s</Badge>
            </div>

            <div className="p-3 bg-surface-elevated rounded-lg border border-white/10 text-center">
              <Database className="w-5 h-5 text-status-ok mx-auto mb-1.5" />
              <div className="text-xs font-mono font-semibold text-text-primary truncate">cart-redis-cluster</div>
              <Badge variant="ok" size="sm" className="mt-1">Latência: 1.2ms</Badge>
            </div>

            <div className="p-3 bg-surface-elevated rounded-lg border border-status-warn/40 text-center">
              <Database className="w-5 h-5 text-status-warn mx-auto mb-1.5" />
              <div className="text-xs font-mono font-semibold text-text-primary truncate">aws-rds-postgres</div>
              <Badge variant="warn" size="sm" className="mt-1">Pool Saturado</Badge>
            </div>
          </div>

          <div className="p-3 rounded bg-surface-elevated/40 border border-white/5 font-mono text-xs text-text-secondary flex items-center justify-between">
            <span>Relação detectada: checkout-service exauriu pool de 5 conexões com postgresql-master.</span>
            <span className="text-brand-cyan text-[11px] font-semibold flex items-center gap-1">
              Ver evidência <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      )}

      {/* Visualização Copiloto Contextual */}
      {activeTab === 'copilot' && (
        <div className="space-y-3 font-mono text-xs">
          <div className="p-3 rounded bg-surface-elevated/60 border border-white/5 text-text-secondary">
            <span className="text-brand-cyan font-bold block mb-1">USUÁRIO (SRE DE PLANTÃO):</span>
            "Kubeasy, por que o checkout-service começou a dar 502 se o pod não está sofrendo restart?"
          </div>

          <div className="p-3 rounded bg-surface-overlay border border-brand-indigo/30 text-text-primary space-y-2">
            <div className="flex items-center gap-1.5 text-brand-indigo font-bold">
              <Bot className="w-4 h-4 text-brand-cyan" />
              <span>COPILOTO KUBEASY (BASEADO NO TREESTORE):</span>
            </div>
            <p className="text-text-secondary leading-relaxed">
              O pod não reiniciou porque a falha não é de memória (OOM) nem de panic de processo. A anomalia decorre do esgotamento do pool de conexões com o PostgreSQL (<code className="text-brand-cyan bg-white/5 px-1 py-0.5 rounded">DB_MAX_OPEN_CONNS=5</code> na versão v2.4.1). As requisições HTTP empilharam e ultrapassaram o timeout de 5000ms do Istio Gateway, gerando os códigos HTTP 502.
            </p>
            <div className="pt-2 text-[11px] text-text-muted flex items-center gap-2">
              <Badge variant="indigo" size="sm">Evidência validada por Agent Logs & Agent Topology</Badge>
            </div>
          </div>
        </div>
      )}

      {/* Rodapé da Demonstração: Transparência */}
      <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[11px] text-text-muted font-mono">
        <span>* Simulação baseada na arquitetura conceitual e determinística do Kubeasy</span>
        <span className="text-brand-indigo hidden sm:inline">Zero alucinação: Respostas ancoradas em nós TreeStore</span>
      </div>
    </ConsoleWindow>
  );
};
