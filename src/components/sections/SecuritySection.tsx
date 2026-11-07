import type { FC } from 'react';
import {
  Fingerprint,
  FileCheck2,
  Lock,
  UserCheck,
  EyeOff
} from 'lucide-react';

export const SecuritySection: FC = () => {
  const policies = [
    {
      title: 'Human-in-the-Loop Obrigatório',
      icon: <UserCheck className="w-4 h-4 text-purple-400" />,
      policyId: 'SEC-POL-01',
      desc: 'Nenhuma mutação estrutural (rollback, escalonamento, alteração de réplica) é aplicada sem autorização explícita do engenheiro.'
    },
    {
      title: 'Autenticação Forte FIDO2 & WebAuthn',
      icon: <Fingerprint className="w-4 h-4 text-brand-sky" />,
      policyId: 'SEC-POL-02',
      desc: 'Suporte a chaves físicas de segurança (YubiKeys / Passkeys) e tokens TOTP para assinatura criptográfica de comandos executados.'
    },
    {
      title: 'Trilha de Auditoria Imutável no TreeStore',
      icon: <FileCheck2 className="w-4 h-4 text-emerald-400" />,
      policyId: 'SEC-POL-03',
      desc: 'Cada consulta de agente, evidência correlacionada e autorização humana é gravada no nó do incidente, garantindo conformidade para pós-morte.'
    },
    {
      title: 'Isolamento de Segredos e Dados Sensíveis',
      icon: <EyeOff className="w-4 h-4 text-amber-400" />,
      policyId: 'SEC-POL-04',
      desc: 'O Kubeasy analisa apenas metadados de telemetria, topologia e logs de erro técnico. Dados de segredos K8s e dados pessoais de bancos nunca são processados.'
    }
  ];

  return (
    <section id="governanca" className="py-20 md:py-28 bg-surface-subtle border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="text-xs font-mono text-purple-400 uppercase font-semibold">
            Governança & Segurança
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-text-primary">
            Controle humano absoluto sobre cada comando de produção
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            A automação inteligente não pode significar perda de controle. O Kubeasy atua como copiloto investigativo, garantindo que o poder de decisão final permaneça 100% com a sua equipe.
          </p>
        </div>

        {/* Políticas de Segurança em Grid Técnico */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {policies.map((p) => (
            <div
              key={p.policyId}
              className="rounded-lg border border-border-subtle bg-canvas p-5 flex flex-col justify-between font-mono text-xs"
            >
              <div>
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-border-subtle text-[11px] text-text-muted">
                  <div className="flex items-center gap-2 text-text-primary font-semibold font-sans">
                    {p.icon}
                    <span>{p.title}</span>
                  </div>
                  <span>{p.policyId}</span>
                </div>

                <p className="text-text-secondary text-xs leading-relaxed font-sans">
                  {p.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-border-subtle flex items-center justify-between text-[10px] text-text-muted">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <Lock className="w-3 h-3" />
                  Política Mandatória
                </span>
                <span>RBAC Enforced</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
