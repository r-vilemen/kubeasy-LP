import { useState, type FC } from 'react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import {
  CheckCircle2,
  Database,
  Fingerprint,
  RefreshCw,
  Cpu,
  Activity,
  Play,
  RotateCcw
} from 'lucide-react';

export const ScenariosSection: FC = () => {
  const [activeScenario, setActiveScenario] = useState<1 | 2 | 3>(1);
  const [executed, setExecuted] = useState<Record<number, boolean>>({});

  const handleExecute = (id: number) => {
    setExecuted((prev) => ({ ...prev, [id]: true }));
  };

  const handleReset = (id: number) => {
    setExecuted((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <section id="cenarios" className="py-20 md:py-28 bg-surface-subtle border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="text-xs font-mono text-brand-sky uppercase font-semibold">
            Laboratório Interativo de Incidentes
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-text-primary">
            Teste a remediação governada em três cenários reais
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            Interaja com as simulações abaixo: autorize o plano de remediação e observe as métricas e o status do cluster normalizarem em tempo real.
          </p>

          {/* Scenario Tabs com feedback de status */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
            <button
              onClick={() => setActiveScenario(1)}
              className={`p-3.5 rounded border text-left transition-all font-mono ${
                activeScenario === 1
                  ? 'bg-surface-elevated border-brand-sky text-text-primary shadow-panel'
                  : 'bg-canvas border-border-subtle text-text-muted hover:text-text-secondary'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] text-text-muted uppercase">
                <span>Cenário 01</span>
                <span className={executed[1] ? 'text-emerald-400 font-bold' : 'text-rose-400'}>
                  {executed[1] ? 'RESOLVIDO' : 'SEV-1 ATIVO'}
                </span>
              </div>
              <div className="text-xs font-semibold text-text-primary mt-1 truncate">HTTP 5xx pós-Deploy</div>
              <div className="text-[10px] text-text-muted mt-0.5">Istio Gateway Timeout</div>
            </button>

            <button
              onClick={() => setActiveScenario(2)}
              className={`p-3.5 rounded border text-left transition-all font-mono ${
                activeScenario === 2
                  ? 'bg-surface-elevated border-brand-sky text-text-primary shadow-panel'
                  : 'bg-canvas border-border-subtle text-text-muted hover:text-text-secondary'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] text-text-muted uppercase">
                <span>Cenário 02</span>
                <span className={executed[2] ? 'text-emerald-400 font-bold' : 'text-amber-400'}>
                  {executed[2] ? 'RESOLVIDO' : 'ALERTA ATIVO'}
                </span>
              </div>
              <div className="text-xs font-semibold text-text-primary mt-1 truncate">Pressão de Memória (OOM)</div>
              <div className="text-[10px] text-text-muted mt-0.5">Worker CrashLoopBackOff</div>
            </button>

            <button
              onClick={() => setActiveScenario(3)}
              className={`p-3.5 rounded border text-left transition-all font-mono ${
                activeScenario === 3
                  ? 'bg-surface-elevated border-brand-sky text-text-primary shadow-panel'
                  : 'bg-canvas border-border-subtle text-text-muted hover:text-text-secondary'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] text-text-muted uppercase">
                <span>Cenário 03</span>
                <span className={executed[3] ? 'text-emerald-400 font-bold' : 'text-brand-sky'}>
                  {executed[3] ? 'RESOLVIDO' : 'LATÊNCIA P99'}
                </span>
              </div>
              <div className="text-xs font-semibold text-text-primary mt-1 truncate">Lentidão no AWS RDS</div>
              <div className="text-[10px] text-text-muted mt-0.5">Shared Lock em Transações</div>
            </button>
          </div>
        </div>

        {/* Painel do Cenário com Gráfico de Telemetria Dinâmico */}
        <div className="rounded-lg border border-border-subtle bg-canvas p-6 sm:p-8 font-mono text-xs shadow-console">
          {/* ================= CENÁRIO 1: DEPLOY COM ERROS HTTP 5xx ================= */}
          {activeScenario === 1 && (
            <div className="space-y-6">
              <div className="pb-4 border-b border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-text-primary font-sans">
                      Deploy de checkout-service:v2.4.1 gerando pico de HTTP 502
                    </h3>
                  </div>
                  <div className="text-xs text-text-muted mt-0.5">
                    Istio VirtualService /checkout · Production Namespace
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={executed[1] ? 'ok' : 'error'} size="sm">
                    {executed[1] ? 'INCIDENTE NORMALIZADO' : 'SEV-1 EM ANDAMENTO'}
                  </Badge>
                  <button
                    onClick={() => handleReset(1)}
                    className="p-1 rounded bg-surface-subtle border border-border-subtle text-text-muted hover:text-text-primary"
                    title="Reiniciar este cenário"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Sparkline Dinâmico de Telemetria em Tempo Real */}
              <div className="p-4 bg-surface-subtle rounded border border-border-subtle space-y-2">
                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-text-secondary flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-brand-sky" />
                    TELEMETRIA AO VIVO: Taxa de Erro HTTP 502 (% do tráfego total)
                  </span>
                  <span className={`font-bold ${executed[1] ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {executed[1] ? '0.01% (Normal)' : '14.82% (Crítico)'}
                  </span>
                </div>

                {/* Gráfico SVG de Linha */}
                <svg className="w-full h-16 sm:h-20" viewBox="0 0 600 80" fill="none">
                  {/* Linha de Referência */}
                  <line x1="0" y1="70" x2="600" y2="70" stroke="#1E2638" strokeWidth="1" strokeDasharray="3 3" />
                  
                  {/* Gráfico de Erro antes/depois da remediação */}
                  {!executed[1] ? (
                    <>
                      <path
                        d="M 0 70 L 150 70 L 220 15 L 450 12 L 600 14"
                        stroke="#DC2626"
                        strokeWidth="2.5"
                        fill="none"
                      />
                      <circle cx="600" cy="14" r="4" fill="#DC2626" className="animate-ping" />
                      <circle cx="600" cy="14" r="3" fill="#DC2626" />
                    </>
                  ) : (
                    <>
                      <path
                        d="M 0 70 L 150 70 L 220 15 L 350 15 L 450 68 L 600 70"
                        stroke="#059669"
                        strokeWidth="2.5"
                        fill="none"
                      />
                      <circle cx="600" cy="70" r="3" fill="#059669" />
                    </>
                  )}
                </svg>
                <div className="flex justify-between text-[10px] text-text-muted">
                  <span>16:35 UTC (Baseline)</span>
                  <span>16:40 UTC (Deploy v2.4.1)</span>
                  <span>{executed[1] ? '16:42 UTC (Rollback Aplicado)' : '16:42 UTC (Incidente Ativo)'}</span>
                </div>
              </div>

              {/* 3 Colunas: Diagnóstico -> Proposta -> Ação */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="text-[11px] text-brand-sky font-semibold">1. DIAGNÓSTICO TREESTORE</div>
                  <div className="p-3 bg-surface-subtle rounded border border-border-subtle space-y-2 text-[11px]">
                    <div className="text-text-muted">
                      • Deploy Helm #42 correlacionado ao aumento de erros.
                    </div>
                    <div className="text-text-muted">
                      • Pods saudáveis (zero restarts de processo).
                    </div>
                    <div className="text-brand-sky font-semibold">
                      • Causa-Raiz: ConfigMap com <code className="text-text-primary">DB_MAX_OPEN_CONNS=5</code> subdimensionado.
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-[11px] text-purple-400 font-semibold">2. PLANO PRESCRITIVO</div>
                  <div className="p-3 bg-surface-subtle rounded border border-border-subtle space-y-1.5 text-[11px]">
                    <div className="text-text-primary font-semibold">PR GitOps #419:</div>
                    <div className="text-rose-400">- image: checkout:v2.4.1</div>
                    <div className="text-emerald-400">+ image: checkout:v2.4.0 (Rollback estável)</div>
                    <div className="text-text-muted pt-1">
                      Destino: Argo CD sync automático com zero downtime.
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-[11px] text-emerald-400 font-semibold">3. EXECUÇÃO GOVERNADA</div>
                  <div className="p-3 bg-surface-elevated rounded border border-border-subtle space-y-3">
                    {!executed[1] ? (
                      <Button
                        variant="primary"
                        size="md"
                        className="w-full justify-center font-semibold"
                        icon={<Fingerprint className="w-4 h-4 text-brand-sky" />}
                        onClick={() => handleExecute(1)}
                      >
                        Autorizar Rollback com FIDO2
                      </Button>
                    ) : (
                      <div className="p-2.5 bg-status-ok/15 border border-status-ok/30 rounded text-center text-emerald-400 text-[11px] space-y-1">
                        <div className="flex items-center justify-center gap-1.5 font-bold">
                          <CheckCircle2 className="w-4 h-4" />
                          Rollback Concluído
                        </div>
                        <div className="text-[10px] text-text-muted">
                          Taxa de 502 normalizada para 0.01%.
                        </div>
                      </div>
                    )}
                    <div className="text-[10px] text-text-muted text-center">
                      Assinatura de segurança registrada no log imutável.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= CENÁRIO 2: PRESSÃO DE MEMÓRIA (OOM) ================= */}
          {activeScenario === 2 && (
            <div className="space-y-6">
              <div className="pb-4 border-b border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-text-primary font-sans">
                    Pressão de memória em Pods de Worker (CrashLoopBackOff)
                  </h3>
                  <div className="text-xs text-text-muted mt-0.5">
                    Namespace: batch-jobs · Pods: event-consumer-worker-7d
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={executed[2] ? 'ok' : 'warn'} size="sm">
                    {executed[2] ? 'MEMÓRIA ESTÁVEL' : 'OOMKILLED ATIVO'}
                  </Badge>
                  <button
                    onClick={() => handleReset(2)}
                    className="p-1 rounded bg-surface-subtle border border-border-subtle text-text-muted hover:text-text-primary"
                    title="Reiniciar este cenário"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Sparkline Dinâmico de Memória */}
              <div className="p-4 bg-surface-subtle rounded border border-border-subtle space-y-2">
                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-text-secondary flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-amber-400" />
                    CONSUMO DE MEMÓRIA DO POD (Limit: 2048 MB)
                  </span>
                  <span className={`font-bold ${executed[2] ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {executed[2] ? '680 MB (Estável)' : '2044 MB (OOMKilled)'}
                  </span>
                </div>

                <svg className="w-full h-16 sm:h-20" viewBox="0 0 600 80" fill="none">
                  <line x1="0" y1="20" x2="600" y2="20" stroke="#DC2626" strokeWidth="1" strokeDasharray="3 3" />
                  
                  {!executed[2] ? (
                    <>
                      <path
                        d="M 0 65 L 120 50 L 240 35 L 360 22 L 480 20 L 520 75 L 560 30 L 600 20"
                        stroke="#D97706"
                        strokeWidth="2.5"
                        fill="none"
                      />
                      <circle cx="600" cy="20" r="3" fill="#D97706" className="animate-ping" />
                    </>
                  ) : (
                    <>
                      <path
                        d="M 0 65 L 120 50 L 240 35 L 360 22 L 480 50 L 600 52"
                        stroke="#059669"
                        strokeWidth="2.5"
                        fill="none"
                      />
                      <circle cx="600" cy="52" r="3" fill="#059669" />
                    </>
                  )}
                </svg>
                <div className="flex justify-between text-[10px] text-text-muted">
                  <span>Limite CGroup (2048 MB)</span>
                  <span>{executed[2] ? 'Throttling de Batch Aplicado' : 'Ciclos de CrashLoopBackOff'}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="text-[11px] text-brand-sky font-semibold">1. DIAGNÓSTICO TREESTORE</div>
                  <div className="p-3 bg-surface-subtle rounded border border-border-subtle space-y-1.5 text-[11px]">
                    <div className="text-text-muted">• Pods reiniciando por OOM (ExitCode 137).</div>
                    <div className="text-text-muted">• Nó com 45% de RAM disponível (sem noisy neighbor).</div>
                    <div className="text-brand-sky font-semibold">• Causa-Raiz: Lotes assíncronos não comprimidos de 18MB.</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-[11px] text-purple-400 font-semibold">2. PLANO PRESCRITIVO</div>
                  <div className="p-3 bg-surface-subtle rounded border border-border-subtle space-y-1.5 text-[11px]">
                    <div>Reduzir <code className="text-brand-sky">BATCH_SIZE=20</code> temporariamente.</div>
                    <div className="text-emerald-400">Abrir PR para escalar Memory Limit para 4Gi.</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-[11px] text-emerald-400 font-semibold">3. EXECUÇÃO GOVERNADA</div>
                  <div className="p-3 bg-surface-elevated rounded border border-border-subtle space-y-3">
                    {!executed[2] ? (
                      <Button
                        variant="primary"
                        size="md"
                        className="w-full justify-center font-semibold"
                        icon={<RefreshCw className="w-4 h-4 text-brand-sky" />}
                        onClick={() => handleExecute(2)}
                      >
                        Aprovar Throttling de Lote
                      </Button>
                    ) : (
                      <div className="p-2.5 bg-status-ok/15 border border-status-ok/30 rounded text-center text-emerald-400 text-[11px] space-y-1">
                        <div className="flex items-center justify-center gap-1.5 font-bold">
                          <CheckCircle2 className="w-4 h-4" />
                          Memória Normalizada
                        </div>
                        <div className="text-[10px] text-text-muted">
                          Pods operando com consumo estável de 680 MB.
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= CENÁRIO 3: LENTIDÃO NO RDS ================= */}
          {activeScenario === 3 && (
            <div className="space-y-6">
              <div className="pb-4 border-b border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-text-primary font-sans">
                    Lentidão no AWS RDS PostgreSQL sem alerta prévio
                  </h3>
                  <div className="text-xs text-text-muted mt-0.5">
                    Infra: db.r6g.xlarge · Latência P99 de Checkout
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={executed[3] ? 'ok' : 'cyan'} size="sm">
                    {executed[3] ? 'LATÊNCIA P99 NORMAL' : 'SHARED LOCK ATIVO'}
                  </Badge>
                  <button
                    onClick={() => handleReset(3)}
                    className="p-1 rounded bg-surface-subtle border border-border-subtle text-text-muted hover:text-text-primary"
                    title="Reiniciar este cenário"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Sparkline Dinâmico de Latência */}
              <div className="p-4 bg-surface-subtle rounded border border-border-subtle space-y-2">
                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-text-secondary flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5 text-purple-400" />
                    LATÊNCIA P99 DE TRANSAÇÃO (Threshold: 500ms)
                  </span>
                  <span className={`font-bold ${executed[3] ? 'text-emerald-400' : 'text-purple-400'}`}>
                    {executed[3] ? '98ms (Otimizado)' : '3840ms (Gargalo)'}
                  </span>
                </div>

                <svg className="w-full h-16 sm:h-20" viewBox="0 0 600 80" fill="none">
                  <line x1="0" y1="50" x2="600" y2="50" stroke="#1E2638" strokeWidth="1" strokeDasharray="3 3" />
                  
                  {!executed[3] ? (
                    <>
                      <path
                        d="M 0 65 L 150 65 L 250 15 L 450 12 L 600 15"
                        stroke="#7C3AED"
                        strokeWidth="2.5"
                        fill="none"
                      />
                      <circle cx="600" cy="15" r="3" fill="#7C3AED" className="animate-ping" />
                    </>
                  ) : (
                    <>
                      <path
                        d="M 0 65 L 150 65 L 250 15 L 400 15 L 500 68 L 600 70"
                        stroke="#059669"
                        strokeWidth="2.5"
                        fill="none"
                      />
                      <circle cx="600" cy="70" r="3" fill="#059669" />
                    </>
                  )}
                </svg>
                <div className="flex justify-between text-[10px] text-text-muted">
                  <span>Operação Normal (~100ms)</span>
                  <span>{executed[3] ? 'Índice Concorrente Criado' : 'Sequential Scan em 14M Linhas'}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="text-[11px] text-brand-sky font-semibold">1. DIAGNÓSTICO TREESTORE</div>
                  <div className="p-3 bg-surface-subtle rounded border border-border-subtle space-y-1.5 text-[11px]">
                    <div className="text-text-muted">• CPU do RDS em 38% (sem disparar alerta AWS).</div>
                    <div className="text-text-muted">• IOPS burst balance em 100%.</div>
                    <div className="text-brand-sky font-semibold">• Causa-Raiz: Remoção acidental de índice em `orders`.</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-[11px] text-purple-400 font-semibold">2. PLANO PRESCRITIVO</div>
                  <div className="p-3 bg-surface-subtle rounded border border-border-subtle space-y-1.5 text-[11px]">
                    <div>Executar migration corretiva com:</div>
                    <code className="text-brand-sky text-[10px]">CREATE INDEX CONCURRENTLY</code>
                    <div className="text-text-muted">Zero lock de escrita nas tabelas em produção.</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-[11px] text-emerald-400 font-semibold">3. EXECUÇÃO GOVERNADA</div>
                  <div className="p-3 bg-surface-elevated rounded border border-border-subtle space-y-3">
                    {!executed[3] ? (
                      <Button
                        variant="primary"
                        size="md"
                        className="w-full justify-center font-semibold"
                        icon={<Play className="w-4 h-4 text-brand-sky" />}
                        onClick={() => handleExecute(3)}
                      >
                        Aplicar Índice Concorrente
                      </Button>
                    ) : (
                      <div className="p-2.5 bg-status-ok/15 border border-status-ok/30 rounded text-center text-emerald-400 text-[11px] space-y-1">
                        <div className="flex items-center justify-center gap-1.5 font-bold">
                          <CheckCircle2 className="w-4 h-4" />
                          Índice Criado com Sucesso
                        </div>
                        <div className="text-[10px] text-text-muted">
                          Latência P99 restabelecida em 98ms.
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="mt-6 pt-3 border-t border-border-subtle text-[11px] text-text-muted flex justify-between items-center">
            <span>* Simulações conceituais com reatividade de dados em tempo real.</span>
            <span className="text-emerald-400">Feedback Imediato</span>
          </div>
        </div>
      </div>
    </section>
  );
};
