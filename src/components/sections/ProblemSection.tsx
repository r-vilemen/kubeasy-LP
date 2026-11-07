import type { FC } from 'react';
import { Badge } from '../ui/Badge';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

export const ProblemSection: FC = () => {
  return (
    <section id="problema" className="py-20 md:py-28 bg-canvas border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="text-xs font-mono text-amber-500 uppercase font-semibold">
            Análise Operacional de Incidentes
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-text-primary">
            O custo real da fragmentação investigativa às 03:00 da manhã
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            Quando um alerta de severidade 1 dispara em produção, a investigação manual dispersa em múltiplos silos eleva o tempo médio de resolução (MTTR) e aumenta o estresse operacional.
          </p>
        </div>

        {/* Linha do Tempo Comparativa Técnica */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Coluna 1: O Fluxo Fragmentado Atual (Status Quo) */}
          <div className="rounded-lg border border-border-subtle bg-surface-subtle p-6 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-border-subtle font-mono text-xs">
              <span className="text-rose-400 font-semibold flex items-center gap-2">
                <XCircle className="w-4 h-4" />
                FLUXO MANUAL FRAGMENTADO
              </span>
              <Badge variant="error" size="sm">MTTR: ~58 MIN</Badge>
            </div>

            <div className="space-y-4 font-mono text-xs">
              <div className="flex items-start gap-3">
                <span className="text-text-muted shrink-0 w-16">03:14:00</span>
                <div className="p-2.5 rounded bg-surface-elevated border border-border-subtle flex-1">
                  <div className="text-text-primary font-semibold">Alerta PagerDuty / Datadog</div>
                  <div className="text-text-muted text-[11px] mt-0.5">Spike de HTTP 502 no gateway de entrada.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-text-muted shrink-0 w-16">03:22:15</span>
                <div className="p-2.5 rounded bg-surface-elevated border border-border-subtle flex-1">
                  <div className="text-text-primary font-semibold">Investigação Desconexa em 5 Abas</div>
                  <div className="text-text-muted text-[11px] mt-0.5">
                    Engenheiro checa logs no Loki, métricas no Prometheus e pods via `kubectl get events`.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-text-muted shrink-0 w-16">03:39:40</span>
                <div className="p-2.5 rounded bg-surface-elevated border border-border-subtle flex-1">
                  <div className="text-rose-400 font-semibold">Hipótese Incorreta & Reinício de Pods</div>
                  <div className="text-text-muted text-[11px] mt-0.5">
                    Suposição de memory leak leva a restart forçado sem resolver a falha no pool de banco.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-text-muted shrink-0 w-16">04:12:00</span>
                <div className="p-2.5 rounded bg-surface-elevated border border-border-subtle flex-1">
                  <div className="text-text-primary font-semibold">Rollback Manual Tarde Demais</div>
                  <div className="text-text-muted text-[11px] mt-0.5">
                    Causa identificada após ler histórico manual de PRs. Incidente causou perda de transações.
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-border-subtle text-[11px] font-mono text-text-muted">
              Resultado: Desgaste da equipe de plantão, fadiga de alertas e documentação de pós-morte incompleta.
            </div>
          </div>

          {/* Coluna 2: O Fluxo com o Kubeasy */}
          <div className="rounded-lg border border-brand-indigo/40 bg-surface-subtle p-6 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-border-subtle font-mono text-xs">
              <span className="text-brand-sky font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                INVESTIGAÇÃO ESTRUTURADA KUBEASY
              </span>
              <Badge variant="ok" size="sm">MTTR: &lt; 3 MIN</Badge>
            </div>

            <div className="space-y-4 font-mono text-xs">
              <div className="flex items-start gap-3">
                <span className="text-brand-sky shrink-0 w-16 font-semibold">03:14:00</span>
                <div className="p-2.5 rounded bg-surface-elevated border border-brand-indigo/30 flex-1">
                  <div className="text-text-primary font-semibold">Gatilho de Anomalia & Ingestão Unificada</div>
                  <div className="text-text-muted text-[11px] mt-0.5">
                    Kubeasy correlaciona o erro 502 ao deploy recente de `checkout-service:v2.4.1`.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-brand-sky shrink-0 w-16 font-semibold">03:14:18</span>
                <div className="p-2.5 rounded bg-surface-elevated border border-brand-indigo/30 flex-1">
                  <div className="text-text-primary font-semibold">TreeStore Isola a Causa-Raiz</div>
                  <div className="text-text-muted text-[11px] mt-0.5">
                    Multiagente descarta CPU/Memória e comprova esgotamento de conexões via logs e métricas de pool.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-brand-sky shrink-0 w-16 font-semibold">03:15:02</span>
                <div className="p-2.5 rounded bg-surface-elevated border border-brand-indigo/30 flex-1">
                  <div className="text-text-primary font-semibold">Aprovação Humana Governada (FIDO2)</div>
                  <div className="text-text-muted text-[11px] mt-0.5">
                    SRE aprova a recomendação com toque na chave física YubiKey ou token TOTP.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-brand-sky shrink-0 w-16 font-semibold">03:16:10</span>
                <div className="p-2.5 rounded bg-surface-elevated border border-brand-indigo/30 flex-1">
                  <div className="text-emerald-400 font-semibold">Sincronização GitOps & Post-Mortem Pronto</div>
                  <div className="text-text-muted text-[11px] mt-0.5">
                    Argo CD conclui o rollback e o relatório completo do incidente é gerado a partir do TreeStore.
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-border-subtle text-[11px] font-mono text-emerald-400 flex items-center justify-between">
              <span>Rastreabilidade determinística completa</span>
              <span className="flex items-center gap-1">
                Zero comandos cegos <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
