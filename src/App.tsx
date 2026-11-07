import { useState, type FC } from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/hero/Hero';
import { EarlyAccessModal } from './components/ui/EarlyAccessModal';

export const App: FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-canvas text-text-primary selection:bg-brand-indigo/30 selection:text-white">
      {/* Header Fixo com Navegação e CTA */}
      <Header onOpenEarlyAccess={() => setModalOpen(true)} />

      {/* Main Content */}
      <main>
        {/* ETAPA 03: Hero Section com Console Interativo */}
        <Hero onOpenEarlyAccess={() => setModalOpen(true)} />
      </main>

      {/* Modal Acessível de Early Access / Demonstração Técnica */}
      <EarlyAccessModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default App;
