import type { FC } from 'react';
import { Badge } from '../ui/Badge';
import { Layers, AlertOctagon, Clock, Split, Terminal, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export const ProblemSection: FC = () => {
  return (
    <section id="problema" className="py-20 md:py-28 bg-canvas border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="warn" dot>A DOR DA FRAGMENTAÇÃO OPERACIONAL</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
            O labirinto dos incidentes distribuídos em microsserviços
          </h2>
          <p className="text-base text-text-secondary leading-relaxed">
            Quando um pod entra em CrashLoop ou a latência P99 dispara, equipes de engenharia perdem horas alternando entre consoles desconexos e tentando correlacionar eventos mentalmente.
          </p>
        </div>

        {/* Visual Contrast Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card Esquerdo: O Cenário Fragmentado Atual */}
          <div className="rounded-2xl border border-status-error/30 bg-surface-subtle/80 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-status-error/5 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-status-error font-semibold flex items-center gap-2">
                  <AlertOctagon className="w-4 h-4" />
                  FLUXO MANUAL FRAGMENTADO (STATUS QUO)
                </span>
                <Badge variant="error" size="sm">Alto MTTR</Badge>
              </div>

              <h3 className="text-xl font-bold text-text-primary mb-3">
                5+ ferramentas abertas e análises desconectadas
              </h3>
              <p className="text-sm text-text-secondary mb-6 leading-relaxed">
                A equipe investiga cegamente: métricas no Prometheus, logs no Loki/CloudWatch, eventos no kubectl, releases no Argo CD e discussões frenéticas no Slack.
              </p>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-surface-elevated/70 border border-white/5 flex items-start gap-3">
                  <Split className="w-4 h-4 text-status-error shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-text-primary block">Silos de telemetria desintegrados</strong>
                    <span className="text-text-muted">Logs e traces não conversam com os eventos de deploy do Kubernetes.</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-surface-elevated/70 border border-white/5 flex items-start gap-3">
                  <Clock className="w-4 h-4 text-status-warn shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-text-primary block">Tempo perdido em hipóteses manuais</strong>
                    <span className="text-text-muted">Engenheiros precisam navegar por gigabytes de logs procurando por stacktraces.</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-surface-elevated/70 border border-white/5 flex items-start gap-3">
                  <Terminal className="w-4 h-4 text-status-error shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-text-primary block">Execução de comandos sem governança</strong>
                    <span className="text-text-muted">Ações reativas e comandos `kubectl` manuais em produção sem auditoria unificada.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-text-muted">
              <span>Impacto: Fadiga de alertas constante</span>
              <span className="text-status-error font-semibold">MTTR médio: 45m – 3h</span>
            </div>
          </div>

          {/* Card Direito: Com o Kubeasy */}
          <div className="rounded-2xl border border-brand-indigo/40 bg-surface-subtle/80 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-glow-indigo/10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-indigo/10 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-brand-cyan font-semibold flex items-center gap-2">
                  <Layers className="w-4 h-4 text-brand-cyan" />
                  FLUXO ESTRUTURADO KUBEASY
                </span>
                <Badge variant="indigo" size="sm">Determinístico</Badge>
              </div>

              <h3 className="text-xl font-bold text-text-primary mb-3">
                Investigação em árvore com evidências rastreáveis
              </h3>
              <p className="text-sm text-text-secondary mb-6 leading-relaxed">
                O Kubeasy correlaciona topologia, telemetria e deploys em um único grafo. Agentes especializados analisam evidências e estruturam a investigação no TreeStore.
              </p>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-surface-elevated/90 border border-brand-indigo/20 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-status-ok shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-text-primary block">Grafo vivo de infraestrutura</strong>
                    <span className="text-text-secondary">Relações imediatas entre Pods, Services, Ingress e recursos de banco de dados.</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-surface-elevated/90 border border-brand-indigo/20 flex items-start gap-3">
                  <Layers className="w-4 h-4 text-brand-indigo shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-text-primary block">TreeStore: Rastreabilidade ponta a ponta</strong>
                    <span className="text-text-secondary">Hipóteses validadas por dados, sem alucinações e com histórico para pós-morte imediato.</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-surface-elevated/90 border border-brand-indigo/20 flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-status-gov shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-text-primary block">Aprovação humana mandatória</strong>
                    <span className="text-text-secondary">Remediações via PR GitOps ou rollback com autenticação FIDO2/TOTP.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-text-muted">
              <span>Resultado: Decisões fundamentadas em segundos</span>
              <span className="text-status-ok font-semibold flex items-center gap-1">
                Investigação assistida <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
