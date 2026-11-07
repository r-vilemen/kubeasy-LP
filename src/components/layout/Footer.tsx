import type { FC } from 'react';
import { Layers, ShieldCheck } from 'lucide-react';
import { Badge } from '../ui/Badge';

export const Footer: FC = () => {
  return (
    <footer className="bg-canvas border-t border-white/10 py-12 md:py-16 text-text-secondary text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/5">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-surface-elevated border border-brand-indigo/30 flex items-center justify-center text-brand-indigo">
                <Layers className="w-4 h-4 text-brand-cyan" />
              </div>
              <span className="font-bold text-base text-text-primary tracking-tight font-sans">
                Kubeasy
              </span>
              <Badge variant="neutral" size="sm" className="text-[10px]">
                v0.9.4 Core
              </Badge>
            </div>
            <p className="text-text-muted max-w-sm text-xs leading-relaxed font-sans">
              Plataforma de observabilidade integrada, correlação multiagente e investigação assistida de incidentes em Kubernetes.
            </p>
            <div className="flex items-center gap-2 text-text-muted text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-status-ok" />
              <span>Investigação determinística · Zero alucinações de IA</span>
            </div>
          </div>

          {/* Navegação Rápida */}
          <div className="space-y-3">
            <div className="text-text-primary font-bold uppercase tracking-wider text-[11px]">
              Arquitetura & Produto
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#problema" className="hover:text-text-primary transition-colors">
                  O Problema Operacional
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-text-primary transition-colors">
                  Como Funciona o Ciclo
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-text-primary transition-colors">
                  TreeStore & Multiagente
                </a>
              </li>
              <li>
                <a href="#cenarios" className="hover:text-text-primary transition-colors">
                  Cenários de Investigação
                </a>
              </li>
            </ul>
          </div>

          {/* Ecossistema & Governança */}
          <div className="space-y-3">
            <div className="text-text-primary font-bold uppercase tracking-wider text-[11px]">
              Segurança & Stack
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#integracoes" className="hover:text-text-primary transition-colors">
                  Integrações (K8s, Istio, RDS)
                </a>
              </li>
              <li>
                <a href="#governanca" className="hover:text-text-primary transition-colors">
                  Governança FIDO2 & TOTP
                </a>
              </li>
              <li>
                <a href="#acesso" className="hover:text-text-primary transition-colors">
                  Programa de Early Access
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-text-muted text-[11px]">
          <div>
            © {new Date().getFullYear()} Kubeasy. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-text-primary transition-colors cursor-pointer" onClick={() => alert('Termos de Uso em elaboração para o lançamento oficial.')}>
              Termos de Uso
            </span>
            <span>·</span>
            <span className="hover:text-text-primary transition-colors cursor-pointer" onClick={() => alert('Política de Privacidade técnica: nenhum dado de produção de cliente é coletado sem consentimento explícito.')}>
              Privacidade
            </span>
            <span>·</span>
            <span className="text-status-ok flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-status-ok" />
              Sistemas Operacionais
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
