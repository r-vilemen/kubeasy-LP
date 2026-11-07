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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-lg rounded-lg border border-border-subtle bg-surface-subtle p-6 text-left font-mono text-xs shadow-console"
      >
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-4 right-4 text-text-muted hover:text-text-primary transition-colors p-1"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <>
            <div className="flex items-center gap-2 mb-2 text-brand-sky">
              <Terminal className="w-3.5 h-3.5" />
              <span className="font-semibold text-[11px]">ACESSO ANTECIPADO // SESSÃO TÉCNICA</span>
            </div>
            <h2 id="modal-title" className="text-lg font-bold text-text-primary mb-2 font-sans">
              Solicitar Sessão de Arquitetura do Kubeasy
            </h2>
            <p className="text-text-secondary mb-5 font-sans text-xs leading-relaxed">
              Demonstração técnica da arquitetura TreeStore e do runtime multiagente aplicada aos cenários e clusters da sua empresa.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] text-text-muted mb-1">
                  NOME COMPLETO *
                </label>
                <input
                  required
                  type="text"
                  placeholder="Ex: Carlos Mendes"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 bg-surface-elevated border border-border-subtle rounded text-text-primary text-xs focus:border-brand-sky focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] text-text-muted mb-1">
                  E-MAIL CORPORATIVO *
                </label>
                <input
                  required
                  type="email"
                  placeholder="carlos@empresa.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 bg-surface-elevated border border-border-subtle rounded text-text-primary text-xs focus:border-brand-sky focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] text-text-muted mb-1">
                    EMPRESA
                  </label>
                  <input
                    type="text"
                    placeholder="Sua empresa"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3 py-2 bg-surface-elevated border border-border-subtle rounded text-text-primary text-xs focus:border-brand-sky focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-text-muted mb-1">
                    PORTE DO CLUSTER K8S
                  </label>
                  <select
                    value={formData.clusterSize}
                    onChange={(e) => setFormData({ ...formData, clusterSize: e.target.value })}
                    className="w-full px-3 py-2 bg-surface-elevated border border-border-subtle rounded text-text-primary text-xs focus:border-brand-sky focus:outline-none"
                  >
                    <option value="1-10">1 a 10 nós</option>
                    <option value="10-50">10 a 50 nós</option>
                    <option value="50-200">50 a 200 nós</option>
                    <option value="200+">200+ nós (Multi-cluster)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <Button type="submit" variant="primary" size="md" className="w-full justify-center">
                  Confirmar Solicitação de Briefing
                </Button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-text-muted mt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero spam. Apenas contato técnico para engenheiros.</span>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-5 space-y-3 font-sans">
            <div className="w-10 h-10 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-text-primary">
              Solicitação Registrada
            </h3>
            <p className="text-xs text-text-secondary max-w-sm mx-auto leading-relaxed">
              Obrigado, <strong className="text-text-primary">{formData.name}</strong>. Nossa equipe de engenharia entrará em contato em <strong className="text-text-primary">{formData.email}</strong> para o agendamento da sessão.
            </p>
            <div className="pt-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
              >
                Fechar
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
