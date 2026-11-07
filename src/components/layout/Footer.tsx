import type { FC } from 'react';
import { Layers, ShieldCheck } from 'lucide-react';

export const Footer: FC = () => {
  return (
    <footer className="bg-canvas py-12 md:py-16 text-text-secondary text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-border-subtle">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded bg-surface-elevated border border-border-medium flex items-center justify-center text-brand-sky">
                <Layers className="w-3.5 h-3.5" />
              </div>
              <span className="font-bold text-sm text-text-primary font-sans">
                Kubeasy
              </span>
            </div>
            <p className="text-text-muted max-w-sm text-xs leading-relaxed font-sans">
              Automação de observabilidade, correlação multiagente e investigação assistida de incidentes em ambientes Kubernetes.
            </p>
            <div className="flex items-center gap-2 text-text-muted text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Investigação determinística baseada na árvore TreeStore</span>
            </div>
          </div>

          {/* Navegação Rápida */}
          <div className="space-y-2.5">
            <div className="text-text-primary font-semibold uppercase text-[11px]">
              Arquitetura
            </div>
            <ul className="space-y-1.5 text-text-muted">
              <li><a href="#problema" className="hover:text-text-primary transition-colors">O Custo Operacional</a></li>
              <li><a href="#como-funciona" className="hover:text-text-primary transition-colors">Pipeline em 5 Etapas</a></li>
              <li><a href="#diferenciais" className="hover:text-text-primary transition-colors">TreeStore & Multiagente</a></li>
              <li><a href="#cenarios" className="hover:text-text-primary transition-colors">Casos de Simulação</a></li>
            </ul>
          </div>

          {/* Governança */}
          <div className="space-y-2.5">
            <div className="text-text-primary font-semibold uppercase text-[11px]">
              Segurança & Stack
            </div>
            <ul className="space-y-1.5 text-text-muted">
              <li><a href="#integracoes" className="hover:text-text-primary transition-colors">Padrões Abertos (Istio, K8s, RDS)</a></li>
              <li><a href="#governanca" className="hover:text-text-primary transition-colors">Governança FIDO2 & WebAuthn</a></li>
              <li><a href="#acesso" className="hover:text-text-primary transition-colors">Acesso Antecipado</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-text-muted text-[11px]">
          <div>
            © {new Date().getFullYear()} Kubeasy. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-text-primary transition-colors cursor-pointer" onClick={() => alert('Termos de Uso em revisão jurídica para o lançamento.')}>
              Termos
            </span>
            <span>·</span>
            <span className="hover:text-text-primary transition-colors cursor-pointer" onClick={() => alert('Privacidade: Nenhuma telemetria ou dado sensível de cliente é persistido sem consentimento formal.')}>
              Privacidade
            </span>
            <span>·</span>
            <span className="text-emerald-400 font-semibold">
              Sistemas Operacionais
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
