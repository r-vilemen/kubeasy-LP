import { useState, useEffect, type FC } from 'react';
import { Layers, Menu, X, Terminal } from 'lucide-react';
import { Button } from '../ui/Button';

export interface HeaderProps {
  onOpenEarlyAccess: () => void;
}

export const Header: FC<HeaderProps> = ({ onOpenEarlyAccess }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'O Problema', href: '#problema' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Arquitetura', href: '#diferenciais' },
    { label: 'Cenários', href: '#cenarios' },
    { label: 'Integrações', href: '#integracoes' },
    { label: 'Governança', href: '#governanca' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-150 ${
        scrolled
          ? 'bg-canvas/95 backdrop-blur-sm border-b border-border-subtle py-2.5 shadow-panel'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo de Engenharia */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 rounded bg-surface-elevated border border-border-medium flex items-center justify-center text-brand-sky">
            <Layers className="w-4 h-4" />
          </div>
          <span className="font-bold text-base tracking-tight text-text-primary">
            Kubeasy
          </span>
          <span className="text-border-medium">/</span>
          <span className="text-xs font-mono text-text-muted hidden sm:inline">
            Incident Investigation
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-mono text-text-secondary hover:text-text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions Desktop */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => {
              const el = document.getElementById('cenarios');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-xs font-mono text-text-muted hover:text-text-primary transition-colors px-2 py-1"
          >
            Ver Simulação
          </button>
          <Button
            variant="primary"
            size="sm"
            onClick={onOpenEarlyAccess}
            icon={<Terminal className="w-3.5 h-3.5" />}
          >
            Acesso Antecipado
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-1.5 text-text-secondary hover:text-text-primary border border-border-subtle rounded"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-subtle border-b border-border-subtle px-4 pt-3 pb-5">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-mono text-text-secondary hover:text-text-primary py-1.5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-border-subtle mt-2">
              <Button
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEarlyAccess();
                }}
              >
                Solicitar Acesso Antecipado
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
