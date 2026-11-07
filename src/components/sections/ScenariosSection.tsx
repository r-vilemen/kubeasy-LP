import { useState, type FC } from 'react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import {
  GitCommit,
  CheckCircle2,
  Database,
  ArrowRight,
  Fingerprint,
  RefreshCw,
  Cpu
} from 'lucide-react';

export const ScenariosSection: FC = () => {
  const [activeScenario, setActiveScenario] = useState<1 | 2 | 3>(1);
  const [executed, setExecuted] = useState<Record<number, boolean>>({});

  const handleExecute = (id: number) => {
    setExecuted((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="cenarios" className="py-20 md:py-28 bg-surface-subtle border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="text-xs font-mono text-brand-sky uppercase font-semibold">
            Simulações Interativas
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-text-primary">
            Casos reais de investigação assistida
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            Selecione um cenário para analisar como o Kubeasy correlaciona telemetria, decompõe a causa-raiz no TreeStore e propõe ações com governança.
          </p>

          {/* Scenario Selector */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
            <button
              onClick={() => setActiveScenario(1)}
              className={`p-3 rounded border text-left transition-colors font-mono ${
                activeScenario === 1
                  ? 'bg-surface-elevated border-brand-sky text-text-primary'
                  : 'bg-canvas border-border-subtle text-text-muted hover:text-text-secondary'
              }`}
            >
              <div className="text-[10px] text-text-muted uppercase">Cenário 01</div>
              <div className="text-xs font-semibold text-text-primary mt-0.5 truncate">HTTP 5xx pós-Deploy</div>
              <div className="text-[10px] text-rose-400 mt-1">Rollout vs. Istio Gateway</div>
            </button>

            <button
              onClick={() => setActiveScenario(2)}
              className={`p-3 rounded border text-left transition-colors font-mono ${
                activeScenario === 2
                  ? 'bg-surface-elevated border-brand-sky text-text-primary'
                  : 'bg-canvas border-border-subtle text-text-muted hover:text-text-secondary'
              }`}
            >
              <div className="text-[10px] text-text-muted uppercase">Cenário 02</div>
              <div className="text-xs font-semibold text-text-primary mt-0.5 truncate">Pressão de Memória (OOM)</div>
              <div className="text-[10px] text-amber-400 mt-1">CrashLoop em Worker Pods</div>
            </button>

            <button
              onClick={() => setActiveScenario(3)}
              className={`p-3 rounded border text-left transition-colors font-mono ${
                activeScenario === 3
                  ? 'bg-surface-elevated border-brand-sky text-text-primary'
                  : 'bg-canvas border-border-subtle text-text-muted hover:text-text-secondary'
              }`}
            >
              <div className="text-[10px] text-text-muted uppercase">Cenário 03</div>
              <div className="text-xs font-semibold text-text-primary mt-0.5 truncate">Lentidão no AWS RDS</div>
              <div className="text-[10px] text-brand-sky mt-1">Seq Scan & Shared Lock</div>
            </button>
          </div>
        </div>

        {/* Scenario Details Container */}
        <div className="rounded-lg border border-border-subtle bg-canvas p-6 sm:p-8 font-mono text-xs">
          {/* CENÁRIO 1 */}
          {activeScenario === 1 && (
            <div className="space-y-6">
              <div className="pb-4 border-b border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-text-primary font-sans">
                    Cenário 01: Deploy recente provocando aumento de erros HTTP 5xx
                  </h3>
                  <div className="text-xs text-text-muted mt-0.5">
                    Namespace: production · Service: checkout-api · Versão: v2.4.1
                  </div>
                </div>
                <Badge variant="error" size="sm">SEV-1 SIMULADO</Badge>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* 1. Detecção */}
                <div className="space-y-2">
                  <div className="text-[11px] text-brand-sky font-semibold">1. SINAIS DETECTADOS</div>
                  <div className="p-3 bg-surface-subtle rounded border border-border-subtle space-y-2 text-[11px]">
                    <div className="flex items-center gap-1.5 text-text-primary">
                      <GitCommit className="w-3.5 h-3.5 text-brand-sky" />
                      <span>Deploy: checkout-service:v2.4.1</span>
                    </div>
                    <div className="text-rose-400">
                      Taxa de HTTP 502 saltou de 0.01% para 14.8% no Istio Gateway.
                    </div>
                    <div className="text-text-muted">
                      Horário: 16:40 UTC via Helm release #42.
                    </div>
                  </div>
                </div>

                {/* 2. Árvore TreeStore */}
                <div className="space-y-2">
                  <div className="text-[11px] text-purple-400 font-semibold">2. EVIDÊNCIAS TREESTORE</div>
                  <div className="p-3 bg-surface-subtle rounded border border-border-subtle space-y-2 text-[11px]">
                    <div className="text-emerald-400">✓ Hipótese Pod Crash: Refutada (Pods 3/3 Running)</div>
                    <div className="text-brand-sky font-semibold">★ Causa-Raiz Comprovada: DB Connection Pool Exhaustion</div>
                    <div className="text-text-secondary leading-relaxed">
                      Nova variável <code className="text-text-primary">DB_MAX_OPEN_CONNS=5</code> subdimensionada provocou fila de espera e timeout de 5000ms.
                    </div>
                  </div>
                </div>

                {/* 3. Ação Governada */}
                <div className="space-y-2">
                  <div className="text-[11px] text-emerald-400 font-semibold">3. REMEDIAÇÃO GOVERNADA</div>
                  <div className="p-3 bg-surface-elevated rounded border border-border-subtle space-y-3">
                    <div className="text-[11px] text-text-primary">
                      Reverter para versão estável <span className="text-brand-sky font-semibold">v2.4.0</span> via Pull Request GitOps.
                    </div>

                    {!executed[1] ? (
                      <Button
                        variant="primary"
                        size="sm"
                        className="w-full justify-center"
                        icon={<Fingerprint className="w-4 h-4 text-brand-sky" />}
                        onClick={() => handleExecute(1)}
                      >
                        Autorizar Rollback (FIDO2)
                      </Button>
                    ) : (
                      <div className="p-2 bg-status-ok/15 border border-status-ok/30 rounded text-center text-emerald-400 text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5 inline mr-1" />
                        Rollback aplicado via GitOps PR #419
                      </div>
                    )}

                    <div className="text-[10px] text-text-muted text-center">
                      Exige validação com chave física WebAuthn.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CENÁRIO 2 */}
          {activeScenario === 2 && (
            <div className="space-y-6">
              <div className="pb-4 border-b border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-text-primary font-sans">
                    Cenário 02: Pressão de memória nos Pods e CrashLoopBackOff
                  </h3>
                  <div className="text-xs text-text-muted mt-0.5">
                    Namespace: batch-jobs · Deployment: event-consumer-worker
                  </div>
                </div>
                <Badge variant="warn" size="sm">OOMKILLED SIMULADO</Badge>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="text-[11px] text-brand-sky font-semibold">1. SINAIS DETECTADOS</div>
                  <div className="p-3 bg-surface-subtle rounded border border-border-subtle space-y-2 text-[11px]">
                    <div className="flex items-center gap-1.5 text-amber-400">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>Status: OOMKilled (ExitCode 137)</span>
                    </div>
                    <div className="text-text-muted">
                      Reinícios frequentes (6 restarts em 20 min).
                    </div>
                    <div className="text-text-muted">
                      Consumo de memória atingiu o limit configurado de 2Gi.
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-[11px] text-purple-400 font-semibold">2. EVIDÊNCIAS TREESTORE</div>
                  <div className="p-3 bg-surface-subtle rounded border border-border-subtle space-y-2 text-[11px]">
                    <div className="text-emerald-400">✓ Hipótese Noisy Neighbor: Refutada (Nó com 42% de memória livre)</div>
                    <div className="text-brand-sky font-semibold">★ Causa-Raiz: Heap buffer exhaustion em lotes assíncronos</div>
                    <div className="text-text-secondary leading-relaxed">
                      Lote de mensagens recebidas de 18MB causou acúmulo no heap da JVM sem tempo hábil para garbage collector.
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-[11px] text-emerald-400 font-semibold">3. REMEDIAÇÃO GOVERNADA</div>
                  <div className="p-3 bg-surface-elevated rounded border border-border-subtle space-y-3">
                    <div className="text-[11px] text-text-primary">
                      Ajustar temporariamente <code className="text-brand-sky">BATCH_SIZE=20</code> e elevar memory request para 4Gi via PR.
                    </div>

                    {!executed[2] ? (
                      <Button
                        variant="primary"
                        size="sm"
                        className="w-full justify-center"
                        icon={<RefreshCw className="w-4 h-4 text-brand-sky" />}
                        onClick={() => handleExecute(2)}
                      >
                        Aprovar Throttling de Lote
                      </Button>
                    ) : (
                      <div className="p-2 bg-status-ok/15 border border-status-ok/30 rounded text-center text-emerald-400 text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5 inline mr-1" />
                        ConfigMap de lote atualizado com sucesso
                      </div>
                    )}

                    <div className="text-[10px] text-text-muted text-center">
                      Prevenção contra perda de eventos no Kafka.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CENÁRIO 3 */}
          {activeScenario === 3 && (
            <div className="space-y-6">
              <div className="pb-4 border-b border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-text-primary font-sans">
                    Cenário 03: Lentidão no AWS RDS sem alerta prévio
                  </h3>
                  <div className="text-xs text-text-muted mt-0.5">
                    Infra: AWS RDS PostgreSQL Primary · Instância: db.r6g.xlarge
                  </div>
                </div>
                <Badge variant="indigo" size="sm">LATÊNCIA P99 SIMULADA</Badge>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="text-[11px] text-brand-sky font-semibold">1. SINAIS DETECTADOS</div>
                  <div className="p-3 bg-surface-subtle rounded border border-border-subtle space-y-2 text-[11px]">
                    <div className="flex items-center gap-1.5 text-text-primary">
                      <Database className="w-3.5 h-3.5 text-purple-400" />
                      <span>RDS CPU em 38% (Sem alarme na AWS)</span>
                    </div>
                    <div className="text-amber-400">
                      Latência P99 do microsserviço subiu para 3.8 segundos.
                    </div>
                    <div className="text-text-muted">
                      Istio tracing acusa bloqueio síncrono em queries SQL.
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-[11px] text-purple-400 font-semibold">2. EVIDÊNCIAS TREESTORE</div>
                  <div className="p-3 bg-surface-subtle rounded border border-border-subtle space-y-2 text-[11px]">
                    <div className="text-emerald-400">✓ Hipótese Esgotamento de IOPS: Refutada (Burst balance 100%)</div>
                    <div className="text-brand-sky font-semibold">★ Causa-Raiz: Sequential Scan gerando shared lock</div>
                    <div className="text-text-secondary leading-relaxed">
                      Migration recente removeu índice composto da tabela `orders`, forçando varredura em 14M de linhas por transação.
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-[11px] text-emerald-400 font-semibold">3. REMEDIAÇÃO GOVERNADA</div>
                  <div className="p-3 bg-surface-elevated rounded border border-border-subtle space-y-3">
                    <div className="text-[11px] text-text-primary">
                      Gerar Pull Request com migration contendo <code className="text-brand-sky">CREATE INDEX CONCURRENTLY</code>.
                    </div>

                    {!executed[3] ? (
                      <Button
                        variant="primary"
                        size="sm"
                        className="w-full justify-center"
                        icon={<ArrowRight className="w-4 h-4 text-brand-sky" />}
                        onClick={() => handleExecute(3)}
                      >
                        Gerar PR de Migração
                      </Button>
                    ) : (
                      <div className="p-2 bg-status-ok/15 border border-status-ok/30 rounded text-center text-emerald-400 text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5 inline mr-1" />
                        PR #420 gerado no repositório com plano de execução!
                      </div>
                    )}

                    <div className="text-[10px] text-text-muted text-center">
                      Criação concorrente sem bloqueio de escrita na tabela.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="mt-6 pt-3 border-t border-border-subtle text-[11px] text-text-muted flex justify-between items-center">
            <span>* Simulações conceituais de engenharia para visualização do fluxo investigativo.</span>
            <span className="text-text-secondary">TreeStore Rastreável</span>
          </div>
        </div>
      </div>
    </section>
  );
};
