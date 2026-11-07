import type { FC } from 'react';
import { Badge } from '../ui/Badge';
import {
  ShieldCheck,
  Fingerprint,
  FileCheck2,
  Lock,
  UserCheck,
  EyeOff
} from 'lucide-react';

export const SecuritySection: FC = () => {
  const securityPillars = [
    {
      title: 'Human-in-the-Loop Obrigatório',
      icon: <UserCheck className="w-5 h-5 text-status-gov" />,
      tag: 'Supervisão Ativa',
      tagVariant: 'gov' as const,
      desc: 'Nenhuma ação de remediação estrutural (rollback, escalonamento ou alteração de réplicas) é executada sem autorização explícita do engenheiro responsável.'
    },
    {
      title: 'Autenticação Forte FIDO2 & TOTP',
      icon: <Fingerprint className="w-5 h-5 text-brand-cyan" />,
      tag: 'Hardware Keys',
      tagVariant: 'cyan' as const,
      desc: 'Suporte a chaves físicas de segurança (YubiKeys / Passkeys via WebAuthn) e autenticação de dois fatores TOTP para assinatura criptográfica de comandos.'
    },
    {
      title: 'Trilha de Auditoria Imutável',
      icon: <FileCheck2 className="w-5 h-5 text-status-ok" />,
      tag: 'Audit Trail',
      tagVariant: 'ok' as const,
      desc: 'Cada consulta, hipótese gerada pelos agentes e autorização humana fica registrada na árvore do TreeStore, permitindo auditoria e conformidade total.'
    },
    {
      title: 'Zero Acesso a Segredos ou Dados Sensíveis',
      icon: <EyeOff className="w-5 h-5 text-status-warn" />,
      tag: 'Privacidade Técnica',
      tagVariant: 'warn' as const,
      desc: 'O Kubeasy analisa metadados de telemetria, traces e logs técnicos de erro. Valores de segredos K8s e dados pessoais de bancos nunca são ingeridos.'
    }
  ];

  return (
    <section id="governanca" className="py-20 md:py-28 bg-surface-subtle/40 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="gov" dot>SEGURANÇA & GOVERNANÇA OPERACIONAL</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
            Automação com controle humano absoluto
          </h2>
          <p className="text-base text-text-secondary leading-relaxed">
            Acreditamos que a inteligência artificial deve auxiliar na investigação e acelerar a compreensão, deixando o poder de decisão final sempre nas mãos da engenharia.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {securityPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-xl border border-white/10 bg-surface-elevated/70 p-6 flex flex-col justify-between hover:border-status-gov/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 text-text-primary">
                    {pillar.icon}
                  </div>
                  <Badge variant={pillar.tagVariant} size="sm">
                    {pillar.tag}
                  </Badge>
                </div>

                <h3 className="text-lg font-bold text-text-primary mb-2">
                  {pillar.title}
                </h3>

                <p className="text-sm text-text-secondary leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-text-muted">
                <Lock className="w-3.5 h-3.5 text-status-gov" />
                <span>Política de segurança aplicada por padrão</span>
              </div>
            </div>
          ))}
        </div>

        {/* Banner de Integridade Técnica */}
        <div className="mt-12 p-5 rounded-2xl bg-surface-elevated border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-status-ok shrink-0" />
            <div className="text-xs sm:text-sm text-text-secondary">
              <strong className="text-text-primary block">Conformidade e Transparência de Engenharia:</strong>
              O Kubeasy não substitui a governança da sua empresa; ele reforça suas políticas GitOps e impede ações não documentadas.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
