import { useState, useEffect, type FC } from 'react';
import { Layers, Menu, X, Terminal } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

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
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Cenários Práticos', href: '#cenarios' },
    { label: 'Integrações', href: '#integracoes' },
    { label: 'Governança', href: '#governanca' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-canvas/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo rounded-lg p-1">
          <div className="w-9 h-9 rounded-lg bg-surface-elevated border border-brand-indigo/30 flex items-center justify-center text-brand-indigo group-hover:border-brand-indigo/60 transition-colors shadow-sm">
            <Layers className="w-5 h-5 text-brand-cyan" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg tracking-tight text-text-primary">
                Kubeasy
              </span>
              <Badge variant="neutral" size="sm" className="hidden sm:inline-flex text-[10px] py-0 px-1.5">
                v0.9.4
              </Badge>
            </div>
            <span className="text-[10px] font-mono text-text-muted hidden sm:block">
              Kubernetes Incident Automation
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-text-secondary hover:text-text-primary transition-colors focus:outline-none focus-visible:text-brand-cyan"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions Desktop */}
        <div className="hidden sm:flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              const el = document.getElementById('cenarios');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-xs"
          >
            Ver Demonstração
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={onOpenEarlyAccess}
            icon={<Terminal className="w-3.5 h-3.5" />}
          >
            Solicitar Early Access
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-text-secondary hover:text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo rounded-lg"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-subtle/95 backdrop-blur-lg border-b border-white/10 px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-text-secondary hover:text-text-primary py-1.5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <Button
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEarlyAccess();
                }}
              >
                Solicitar Early Access
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
