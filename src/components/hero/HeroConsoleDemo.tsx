import { useState, type FC } from 'react';
import { ConsoleWindow } from '../ui/ConsoleWindow';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import {
  GitCommit,
  GitBranch,
  ShieldCheck,
  CheckCircle2,
  Fingerprint
} from 'lucide-react';

export const HeroConsoleDemo: FC = () => {
  const [activeTab, setActiveTab] = useState<'treestore' | 'traces' | 'diff'>('treestore');
  const [authorized, setAuthorized] = useState(false);

  return (
    <ConsoleWindow
      title="k8s://prod-sa-east-1/incidents/KB-8924"
      badge={
        <div className="flex items-center gap-2 ml-2">
          <Badge variant="error" size="sm">SEV-1 ACTIVE</Badge>
          <span className="text-[10px] text-text-muted hidden md:inline">16:42:18 UTC</span>
        </div>
      }
      headerRight={
        <div className="flex items-center gap-1 bg-surface-subtle p-0.5 rounded border border-border-subtle text-xs">
          <button
            onClick={() => setActiveTab('treestore')}
            className={`px-2.5 py-1 rounded transition-colors ${
              activeTab === 'treestore'
                ? 'bg-surface-elevated text-text-primary font-mono'
                : 'text-text-muted hover:text-text-secondary font-mono'
            }`}
          >
            TreeStore DAG
          </button>
          <button
            onClick={() => setActiveTab('traces')}
            className={`px-2.5 py-1 rounded transition-colors ${
              activeTab === 'traces'
                ? 'bg-surface-elevated text-text-primary font-mono'
                : 'text-text-muted hover:text-text-secondary font-mono'
            }`}
          >
            Spans & Traces
          </button>
          <button
            onClick={() => setActiveTab('diff')}
            className={`px-2.5 py-1 rounded transition-colors ${
              activeTab === 'diff'
                ? 'bg-surface-elevated text-text-primary font-mono'
                : 'text-text-muted hover:text-text-secondary font-mono'
            }`}
          >
            GitOps Diff
          </button>
        </div>
      }
      className="w-full text-left max-w-5xl mx-auto border-border-subtle"
    >
      {/* TAB 1: TREESTORE DAG */}
      {activeTab === 'treestore' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-border-subtle text-xs font-mono gap-2">
            <div className="flex items-center gap-2">
              <span className="text-brand-sky font-semibold">ARVORE DETERMINISTICA (TREESTORE)</span>
              <span className="text-text-muted">·</span>
              <span className="text-text-muted">4 nós correlacionados</span>
            </div>
            <div className="text-text-muted">
              MTTD: <span className="text-text-primary font-semibold">14 segundos</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 font-mono text-xs">
            {/* Lista estruturada de nós do TreeStore */}
            <div className="lg:col-span-7 space-y-2">
              <div className="p-3 bg-surface-elevated rounded border border-border-subtle">
                <div className="flex items-center justify-between mb-1">
                  <span className="flex items-center gap-2 text-text-primary font-semibold">
                    <GitCommit className="w-3.5 h-3.5 text-brand-sky" />
                    [NÓ 0] Rollout Helm: checkout-service:v2.4.1
                  </span>
                  <Badge variant="neutral" size="sm">TRIGGER</Badge>
                </div>
                <div className="text-text-muted text-[11px]">
                  ReplicaSet rollout concluído às 16:40:12 UTC. 3 Pods ativos.
                </div>
              </div>

              <div className="p-3 bg-surface-elevated rounded border-l-2 border-l-status-error border-y border-r border-border-subtle pl-3.5">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-rose-400 font-semibold flex items-center gap-1.5">
                    [NÓ 1] Istio Gateway: HTTP 502 Rate Spike (14.8%)
                  </span>
                  <Badge variant="error" size="sm">ANOMALIA</Badge>
                </div>
                <div className="text-text-muted text-[11px]">
                  94 requisições rejeitadas por timeout na rota `/checkout/process`.
                </div>
              </div>

              <div className="p-3 bg-surface-elevated rounded border border-border-subtle">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-text-secondary flex items-center gap-1.5">
                    [NÓ 2] K8s Topology Agent: Pods 3/3 Running
                  </span>
                  <Badge variant="ok" size="sm">STATUS OK</Badge>
                </div>
                <div className="text-text-muted text-[11px]">
                  Zero OOMKilled, CPU utilization em 28%, health probes respondendo.
                </div>
              </div>

              <div className="p-3 bg-brand-indigo/15 rounded border-l-2 border-l-brand-sky border-y border-r border-brand-indigo/30 pl-3.5">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-brand-sky font-semibold flex items-center gap-1.5">
                    <GitBranch className="w-3.5 h-3.5" />
                    [NÓ 3] CAUSA-RAIZ: DB_MAX_OPEN_CONNS=5 saturado
                  </span>
                  <Badge variant="cyan" size="sm">VEREDITO</Badge>
                </div>
                <div className="text-text-secondary text-[11px]">
                  Log Forensics detectou: <code className="text-brand-sky">sql: connection pool exhausted</code> no driver Postgres.
                </div>
              </div>
            </div>

            {/* Painel de Ação Governada */}
            <div className="lg:col-span-5 bg-surface-elevated rounded border border-border-subtle p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border-subtle">
                  <ShieldCheck className="w-4 h-4 text-purple-400" />
                  <span className="text-xs font-semibold text-text-primary">
                    GOVERNANÇA & REMEDIAÇÃO
                  </span>
                </div>

                <div className="space-y-2 text-[11px] text-text-secondary mb-4">
                  <div className="text-amber-400 font-semibold">PROPOSTA DE REMEDIAÇÃO:</div>
                  <div className="bg-canvas p-2.5 rounded border border-border-subtle space-y-1">
                    <div>1. Rollback automático de <span className="text-text-primary">v2.4.1</span> para <span className="text-text-primary">v2.4.0</span></div>
                    <div>2. Abrir Pull Request com correção de ConfigMap</div>
                    <div>3. Notificar equipe no canal #incident-war-room</div>
                  </div>
                  <p className="text-text-muted pt-1">
                    Política: Ação de produção requer validação criptográfica via chave FIDO2 ou token TOTP.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                {!authorized ? (
                  <Button
                    variant="primary"
                    size="sm"
                    className="w-full justify-center"
                    icon={<Fingerprint className="w-4 h-4 text-brand-sky" />}
                    onClick={() => setAuthorized(true)}
                  >
                    Autorizar Rollback (FIDO2 / TOTP)
                  </Button>
                ) : (
                  <div className="p-2 bg-status-ok/10 border border-status-ok/30 rounded text-center">
                    <span className="flex items-center justify-center gap-1.5 text-xs text-emerald-400 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Rollback disparado via GitOps PR #419
                    </span>
                    <span className="text-[10px] text-text-muted block mt-0.5">
                      Hash de auditoria gravado no nó TreeStore.
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: SPANS & TRACES */}
      {activeTab === 'traces' && (
        <div className="space-y-3 font-mono text-xs">
          <div className="text-text-muted text-[11px] pb-2 border-b border-border-subtle">
            Trace ID: <span className="text-text-primary">4bf92f3577b34da6a3ce929d0e0e4736</span> · Total Latency: <span className="text-rose-400 font-semibold">4820ms</span> (Threshold: 500ms)
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
              <div className="text-[10px] text-text-muted mt-1.5">
                Connection pool max limit (5) reached. 18 goroutines blocked in wait queue.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: GITOPS DIFF */}
      {activeTab === 'diff' && (
        <div className="font-mono text-xs space-y-2">
          <div className="text-text-muted text-[11px] pb-2 border-b border-border-subtle flex items-center justify-between">
            <span>Diff do Pull Request: <code className="text-text-primary">deployments/checkout/values.yaml</code></span>
            <Badge variant="cyan" size="sm">Branch: hotfix/rollback-kb-8924</Badge>
          </div>
          <div className="p-3 bg-canvas rounded border border-border-subtle text-[11px] space-y-1">
            <div className="text-text-muted">@@ -14,7 +14,7 @@ checkout:</div>
            <div className="text-text-secondary">   replicaCount: 3</div>
            <div className="text-text-secondary">   image:</div>
            <div className="text-text-secondary">     repository: registry.internal/checkout-service</div>
            <div className="bg-rose-950/40 text-rose-300 px-1 py-0.5 rounded">-    tag: v2.4.1</div>
            <div className="bg-emerald-950/40 text-emerald-300 px-1 py-0.5 rounded">+    tag: v2.4.0</div>
            <div className="text-text-secondary">   env:</div>
            <div className="bg-rose-950/40 text-rose-300 px-1 py-0.5 rounded">-    - name: DB_MAX_OPEN_CONNS\n-      value: "5"</div>
            <div className="bg-emerald-950/40 text-emerald-300 px-1 py-0.5 rounded">+    - name: DB_MAX_OPEN_CONNS\n+      value: "50"</div>
          </div>
        </div>
      )}

      {/* Rodapé técnico de transparência */}
      <div className="mt-3 pt-2.5 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-text-muted gap-1">
        <span>* Simulação baseada na arquitetura conceitual e determinística do Kubeasy.</span>
        <span className="text-text-secondary">Auditável via API Kubernetes & GitOps</span>
      </div>
    </ConsoleWindow>
  );
};
