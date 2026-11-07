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
  const [scenarioActionExecuted, setScenarioActionExecuted] = useState<Record<number, boolean>>({});

  const handleApproveAction = (scenarioId: number) => {
    setScenarioActionExecuted((prev) => ({ ...prev, [scenarioId]: true }));
  };

  return (
    <section id="cenarios" className="py-20 md:py-28 bg-surface-subtle/50 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <Badge variant="cyan" dot>CENÁRIOS PRÁTICOS DE INVESTIGAÇÃO</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
            A investigação assistida em ação
          </h2>
          <p className="text-base text-text-secondary leading-relaxed">
            Navegue pelos três cenários reais de infraestrutura e veja como o Kubeasy correlaciona evidências e estrutura o caminho até a causa-raiz.
          </p>

          {/* Scenario Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
            <button
              onClick={() => setActiveScenario(1)}
              className={`p-3.5 rounded-xl border text-left transition-all ${
                activeScenario === 1
                  ? 'bg-surface-elevated border-brand-indigo shadow-glow-indigo/30'
                  : 'bg-surface-subtle border-white/5 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono mb-1">
                <span className={activeScenario === 1 ? 'text-brand-cyan font-bold' : 'text-text-muted'}>
                  CENÁRIO 01
                </span>
                <Badge variant="error" size="sm">HTTP 5xx</Badge>
              </div>
              <div className="text-sm font-semibold text-text-primary truncate">Deploy com Erros 502/503</div>
              <div className="text-xs text-text-muted mt-0.5">Rollout vs. Istio Gateway</div>
            </button>

            <button
              onClick={() => setActiveScenario(2)}
              className={`p-3.5 rounded-xl border text-left transition-all ${
                activeScenario === 2
                  ? 'bg-surface-elevated border-brand-indigo shadow-glow-indigo/30'
                  : 'bg-surface-subtle border-white/5 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono mb-1">
                <span className={activeScenario === 2 ? 'text-brand-cyan font-bold' : 'text-text-muted'}>
                  CENÁRIO 02
                </span>
                <Badge variant="warn" size="sm">OOMKilled</Badge>
              </div>
              <div className="text-sm font-semibold text-text-primary truncate">Pressão de Memória em Pods</div>
              <div className="text-xs text-text-muted mt-0.5">CrashLoop vs. cgroups heap</div>
            </button>

            <button
              onClick={() => setActiveScenario(3)}
              className={`p-3.5 rounded-xl border text-left transition-all ${
                activeScenario === 3
                  ? 'bg-surface-elevated border-brand-indigo shadow-glow-indigo/30'
                  : 'bg-surface-subtle border-white/5 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono mb-1">
                <span className={activeScenario === 3 ? 'text-brand-cyan font-bold' : 'text-text-muted'}>
                  CENÁRIO 03
                </span>
                <Badge variant="indigo" size="sm">AWS RDS</Badge>
              </div>
              <div className="text-sm font-semibold text-text-primary truncate">Lentidão no RDS sem Alarme</div>
              <div className="text-xs text-text-muted mt-0.5">P99 Spike vs. Shared Lock</div>
            </button>
          </div>
        </div>

        {/* Scenario Interactive Card */}
        <div className="bg-canvas border border-white/10 rounded-2xl p-6 sm:p-8 shadow-console">
          {/* ================= CENÁRIO 1 ================= */}
          {activeScenario === 1 && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/5">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-text-primary">
                      Cenário 01: Deploy recente provocando aumento de respostas HTTP 5xx
                    </h3>
                  </div>
                  <p className="text-sm text-text-secondary mt-1">
                    Uma nova versão do microsserviço de checkout foi liberada via pipeline e imediatamente gerou erros para os usuários.
                  </p>
                </div>
                <Badge variant="error" dot>Incidente Crítico Simulado</Badge>
              </div>

              {/* Grid de 3 Colunas: Sintoma -> TreeStore -> Remediação */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Coluna 1: Sintoma e Detecção */}
                <div className="space-y-3">
                  <span className="text-xs font-mono text-brand-cyan font-semibold block">
                    1. DETECÇÃO & CORRELAÇÃO
                  </span>
                  <div className="p-4 bg-surface-elevated rounded-xl border border-white/5 space-y-3 font-mono text-xs">
                    <div className="flex items-center gap-2 text-text-primary">
                      <GitCommit className="w-4 h-4 text-brand-cyan" />
                      <span>Deploy: checkout-service:v2.4.1</span>
                    </div>
                    <div className="text-text-muted text-[11px]">
                      Implantado às 16:40:00 UTC via Helm.
                    </div>
                    <div className="p-2.5 bg-status-error/10 border border-status-error/30 rounded text-status-error">
                      Istio Ingress detectou taxa de HTTP 502 saltando para 14.8% no path `/api/v1/checkout`.
                    </div>
                  </div>
                </div>

                {/* Coluna 2: Investigação no TreeStore */}
                <div className="space-y-3">
                  <span className="text-xs font-mono text-brand-indigo font-semibold block">
                    2. EVIDÊNCIAS NO TREESTORE
                  </span>
                  <div className="p-4 bg-surface-elevated rounded-xl border border-white/5 space-y-2 font-mono text-xs">
                    <div className="p-2 rounded bg-black/40 border border-white/5 text-[11px] text-text-muted">
                      ✓ Hipótese 1: Pods em CrashLoop? <strong className="text-status-ok">Refutada (Pods 3/3 Running)</strong>
                    </div>
                    <div className="p-2 rounded bg-brand-indigo/15 border border-brand-indigo/40 text-[11px] text-indigo-200">
                      ★ Hipótese 2: ConfigMap Pool Exhaustion? <strong className="text-brand-cyan">Comprovada (100%)</strong>
                    </div>
                    <p className="text-[11px] text-text-secondary leading-relaxed pt-1">
                      O Log Forensics Agent identificou: <code className="text-brand-cyan bg-white/5 px-1 py-0.5 rounded">connection pool timeout</code> após requisições concorrentes excederem limite de 5 conexões.
                    </p>
                  </div>
                </div>

                {/* Coluna 3: Ação Governada */}
                <div className="space-y-3">
                  <span className="text-xs font-mono text-status-gov font-semibold block">
                    3. REMEDIAÇÃO GOVERNADA
                  </span>
                  <div className="p-4 bg-surface-overlay rounded-xl border border-white/10 space-y-3">
                    <div className="text-xs font-mono text-text-primary">
                      Plano de ação: Reverter commit no repositório GitOps para versão estável <span className="text-brand-cyan font-bold">v2.4.0</span>.
                    </div>

                    {!scenarioActionExecuted[1] ? (
                      <Button
                        variant="primary"
                        size="sm"
                        className="w-full justify-center"
                        icon={<Fingerprint className="w-4 h-4 text-brand-cyan" />}
                        onClick={() => handleApproveAction(1)}
                      >
                        Autorizar Rollback (FIDO2)
                      </Button>
                    ) : (
                      <div className="p-2.5 bg-status-ok/10 border border-status-ok/30 rounded text-center font-mono text-xs text-status-ok">
                        <CheckCircle2 className="w-4 h-4 inline-block mr-1.5" />
                        Rollback aplicado via GitOps PR #419!
                      </div>
                    )}

                    <span className="block text-[11px] font-mono text-text-muted text-center">
                      Requer autorização com token físico FIDO2 ou TOTP.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= CENÁRIO 2 ================= */}
          {activeScenario === 2 && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/5">
                <div>
                  <h3 className="text-xl font-bold text-text-primary">
                    Cenário 02: Pressão de memória nos Pods e CrashLoopBackOff
                  </h3>
                  <p className="text-sm text-text-secondary mt-1">
                    Pods de processamento assíncrono começam a sofrer reinícios abruptos em cascata no namespace production.
                  </p>
                </div>
                <Badge variant="warn" dot>Pressão de Recursos Simulada</Badge>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <span className="text-xs font-mono text-brand-cyan font-semibold block">
                    1. DETECÇÃO & ANOMALIA
                  </span>
                  <div className="p-4 bg-surface-elevated rounded-xl border border-white/5 space-y-3 font-mono text-xs">
                    <div className="flex items-center gap-2 text-text-primary">
                      <Cpu className="w-4 h-4 text-status-warn" />
                      <span>worker-events-consumer-7d4f-x8</span>
                    </div>
                    <div className="p-2.5 bg-status-warn/10 border border-status-warn/30 rounded text-status-warn">
                      Status: OOMKilled (ExitCode 137). Restart count: 6 vezes nos últimos 20 minutos.
                    </div>
                    <div className="text-text-muted text-[11px]">
                      Agente de Métricas: Consumo de memória ultrapassou o limit de 2Gi.
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-mono text-brand-indigo font-semibold block">
                    2. EVIDÊNCIAS NO TREESTORE
                  </span>
                  <div className="p-4 bg-surface-elevated rounded-xl border border-white/5 space-y-2 font-mono text-xs">
                    <div className="p-2 rounded bg-black/40 border border-white/5 text-[11px] text-text-muted">
                      ✓ Hipótese 1: Noisy Neighbor no Nó? <strong className="text-status-ok">Refutada (Outros pods normais)</strong>
                    </div>
                    <div className="p-2 rounded bg-brand-indigo/15 border border-brand-indigo/40 text-[11px] text-indigo-200">
                      ★ Hipótese 2: Heap buffer leak em batch? <strong className="text-brand-cyan">Comprovada (98%)</strong>
                    </div>
                    <p className="text-[11px] text-text-secondary leading-relaxed pt-1">
                      O Log Forensics encontrou payloads JSON de 18MB não compactados sendo descarregados no heap sem garbage collection imediato.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-mono text-status-gov font-semibold block">
                    3. REMEDIAÇÃO GOVERNADA
                  </span>
                  <div className="p-4 bg-surface-overlay rounded-xl border border-white/10 space-y-3">
                    <div className="text-xs font-mono text-text-primary">
                      Plano de ação: Reduzir <code className="text-brand-cyan">BATCH_SIZE=20</code> temporariamente e emitir PR para ajustar memory request de 2Gi para 4Gi.
                    </div>

                    {!scenarioActionExecuted[2] ? (
                      <Button
                        variant="primary"
                        size="sm"
                        className="w-full justify-center"
                        icon={<RefreshCw className="w-4 h-4 text-brand-cyan" />}
                        onClick={() => handleApproveAction(2)}
                      >
                        Aprovar Throttling de Fila
                      </Button>
                    ) : (
                      <div className="p-2.5 bg-status-ok/10 border border-status-ok/30 rounded text-center font-mono text-xs text-status-ok">
                        <CheckCircle2 className="w-4 h-4 inline-block mr-1.5" />
                        Batch size ajustado no ConfigMap com sucesso!
                      </div>
                    )}

                    <span className="block text-[11px] font-mono text-text-muted text-center">
                      Ação executada sem perda de mensagens no broker Kafka.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= CENÁRIO 3 ================= */}
          {activeScenario === 3 && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/5">
                <div>
                  <h3 className="text-xl font-bold text-text-primary">
                    Cenário 03: Lentidão no AWS RDS sem alertas diretos no Kubernetes
                  </h3>
                  <p className="text-sm text-text-secondary mt-1">
                    A aplicação fica lenta, mas os pods continuam saudáveis e o RDS não atinge o limite de alerta de CPU da AWS.
                  </p>
                </div>
                <Badge variant="indigo" dot>Correlação Cruzada Simulada</Badge>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <span className="text-xs font-mono text-brand-cyan font-semibold block">
                    1. DETECÇÃO & CORRELAÇÃO
                  </span>
                  <div className="p-4 bg-surface-elevated rounded-xl border border-white/5 space-y-3 font-mono text-xs">
                    <div className="flex items-center gap-2 text-text-primary">
                      <Database className="w-4 h-4 text-brand-indigo" />
                      <span>aws-rds-postgresql-primary</span>
                    </div>
                    <div className="p-2.5 bg-status-warn/10 border border-status-warn/30 rounded text-status-warn">
                      CPU do RDS: 42% (Abaixo do threshold de alarme de 80%). Latência de leitura: 3.4s por transação.
                    </div>
                    <div className="text-text-muted text-[11px]">
                      Istio tracing acusa bloqueio no span `SELECT * FROM orders WHERE customer_uuid = ?`.
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-mono text-brand-indigo font-semibold block">
                    2. EVIDÊNCIAS NO TREESTORE
                  </span>
                  <div className="p-4 bg-surface-elevated rounded-xl border border-white/5 space-y-2 font-mono text-xs">
                    <div className="p-2 rounded bg-black/40 border border-white/5 text-[11px] text-text-muted">
                      ✓ Hipótese 1: Esgotamento de IOPS da AWS? <strong className="text-status-ok">Refutada (Burst balance 100%)</strong>
                    </div>
                    <div className="p-2 rounded bg-brand-indigo/15 border border-brand-indigo/40 text-[11px] text-indigo-200">
                      ★ Hipótese 2: Seq Scan gerando lock de leitura? <strong className="text-brand-cyan">Comprovada (100%)</strong>
                    </div>
                    <p className="text-[11px] text-text-secondary leading-relaxed pt-1">
                      Migration recente removeu índice composto da tabela `orders`, forçando varredura sequencial em 14 milhões de registros.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-mono text-status-gov font-semibold block">
                    3. REMEDIAÇÃO GOVERNADA
                  </span>
                  <div className="p-4 bg-surface-overlay rounded-xl border border-white/10 space-y-3">
                    <div className="text-xs font-mono text-text-primary">
                      Plano de ação: Gerar PR com migration corretiva contendo <code className="text-brand-cyan">CREATE INDEX CONCURRENTLY</code>.
                    </div>

                    {!scenarioActionExecuted[3] ? (
                      <Button
                        variant="primary"
                        size="sm"
                        className="w-full justify-center"
                        icon={<ArrowRight className="w-4 h-4 text-brand-cyan" />}
                        onClick={() => handleApproveAction(3)}
                      >
                        Gerar PR de Migração
                      </Button>
                    ) : (
                      <div className="p-2.5 bg-status-ok/10 border border-status-ok/30 rounded text-center font-mono text-xs text-status-ok">
                        <CheckCircle2 className="w-4 h-4 inline-block mr-1.5" />
                        PR #420 criado no repositório de banco de dados!
                      </div>
                    )}

                    <span className="block text-[11px] font-mono text-text-muted text-center">
                      Zero impacto de bloqueio exclusivo de tabela com `CONCURRENTLY`.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Rodapé da Demonstração */}
          <div className="mt-8 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-text-muted gap-2">
            <span>* Simulações conceituais baseadas na arquitetura determinística do Kubeasy.</span>
            <span className="text-brand-indigo">Nenhuma métrica de cliente simulada como fato real de produção.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
