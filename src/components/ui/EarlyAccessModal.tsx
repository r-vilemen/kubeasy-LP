import { useState, useEffect, useRef, type FC, type FormEvent } from 'react';
import { X, CheckCircle2, ShieldCheck, Terminal } from 'lucide-react';
import { Button } from './Button';

export interface EarlyAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EarlyAccessModal: FC<EarlyAccessModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    clusterSize: '10-50 nodes',
    painPoint: 'slow-investigations',
  });
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-canvas/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-lg rounded-xl border border-white/10 bg-surface-subtle shadow-2xl overflow-hidden p-6 text-left"
      >
        <button
          onClick={onClose}
          aria-label="Fechar modal"
          className="absolute top-4 right-4 text-text-muted hover:text-text-primary transition-colors p-1"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            <div className="flex items-center gap-2 mb-2 text-brand-indigo font-mono text-xs">
              <Terminal className="w-4 h-4" />
              <span>PROGRAMA DE EARLY ACCESS</span>
            </div>
            <h2 id="modal-title" className="text-xl font-bold text-text-primary mb-2">
              Solicitar Demonstração Técnica do Kubeasy
            </h2>
            <p className="text-sm text-text-secondary mb-5">
              Receba um tour direcionado sobre a arquitetura TreeStore e o runtime multiagente aplicado ao seu cenário de cluster.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-text-secondary mb-1">
                  NOME COMPLETO *
                </label>
                <input
                  required
                  type="text"
                  placeholder="Ex: Carlos Mendes"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 bg-surface-elevated border border-white/10 rounded-lg text-sm text-text-primary focus:border-brand-indigo focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-text-secondary mb-1">
                  E-MAIL CORPORATIVO *
                </label>
                <input
                  required
                  type="email"
                  placeholder="carlos@empresa.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 bg-surface-elevated border border-white/10 rounded-lg text-sm text-text-primary focus:border-brand-indigo focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono text-text-secondary mb-1">
                    EMPRESA
                  </label>
                  <input
                    type="text"
                    placeholder="Sua empresa"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3 py-2 bg-surface-elevated border border-white/10 rounded-lg text-sm text-text-primary focus:border-brand-indigo focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-text-secondary mb-1">
                    PORTE DO CLUSTER K8S
                  </label>
                  <select
                    value={formData.clusterSize}
                    onChange={(e) => setFormData({ ...formData, clusterSize: e.target.value })}
                    className="w-full px-3 py-2 bg-surface-elevated border border-white/10 rounded-lg text-sm text-text-primary focus:border-brand-indigo focus:outline-none"
                  >
                    <option value="1-10">1 a 10 nós</option>
                    <option value="10-50">10 a 50 nós</option>
                    <option value="50-200">50 a 200 nós</option>
                    <option value="200+">200+ nós (Multi-cluster)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <Button type="submit" variant="primary" size="lg" className="w-full justify-center">
                  Confirmar Inscrição na Lista Técnica
                </Button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-text-muted mt-3">
                <ShieldCheck className="w-3.5 h-3.5 text-status-ok" />
                <span>Zero spam. Apenas convites de briefing técnico para SREs e DevOps.</span>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="w-12 h-12 bg-status-ok/10 text-status-ok rounded-full flex items-center justify-center mx-auto mb-4 border border-status-ok/30">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-text-primary mb-2">
              Solicitação Recebida com Sucesso!
            </h3>
            <p className="text-sm text-text-secondary max-w-sm mx-auto mb-6">
              Obrigado, <strong className="text-text-primary">{formData.name}</strong>. Nossa equipe de engenharia entrará em contato pelo e-mail <strong className="text-text-primary">{formData.email}</strong> para o agendamento da sessão de arquitetura.
            </p>
            <Button
              variant="secondary"
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mx-auto"
            >
              Fechar Janela
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
