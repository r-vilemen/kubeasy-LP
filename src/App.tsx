import { useState, type FC } from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/hero/Hero';
import { ProblemSection } from './components/sections/ProblemSection';
import { ValueProposalSection } from './components/sections/ValueProposalSection';
import { ArchitectureSection } from './components/sections/ArchitectureSection';
import { ScenariosSection } from './components/sections/ScenariosSection';
import { IntegrationsSection } from './components/sections/IntegrationsSection';
import { SecuritySection } from './components/sections/SecuritySection';
import { FinalCtaSection } from './components/sections/FinalCtaSection';
import { Footer } from './components/layout/Footer';
import { EarlyAccessModal } from './components/ui/EarlyAccessModal';

export const App: FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-canvas text-text-primary selection:bg-brand-indigo/30 selection:text-white flex flex-col">
      {/* Header Fixo com Navegação e CTA */}
      <Header onOpenEarlyAccess={() => setModalOpen(true)} />

      {/* Main Content */}
      <main className="flex-1">
        {/* ETAPA 03: Hero Section com Console Interativo */}
        <Hero onOpenEarlyAccess={() => setModalOpen(true)} />

        {/* ETAPA 04: O Problema (Fragmentação Operacional) */}
        <ProblemSection />

        {/* ETAPA 04: A Proposta (Fluxo em 5 Etapas) */}
        <ValueProposalSection />

        {/* ETAPA 05: Diferenciais e Arquitetura Profunda */}
        <ArchitectureSection />

        {/* ETAPA 06: Demonstrações Práticas de 3 Cenários */}
        <ScenariosSection />

        {/* ETAPA 07: Integrações da Stack Moderna */}
        <IntegrationsSection />

        {/* ETAPA 07: Governança, Segurança e Human-in-the-Loop */}
        <SecuritySection />

        {/* ETAPA 07: CTA Final de Conversão */}
        <FinalCtaSection onOpenEarlyAccess={() => setModalOpen(true)} />
      </main>

      {/* ETAPA 07: Footer Institucional e Navegação */}
      <Footer />

      {/* Modal Acessível de Early Access / Demonstração Técnica */}
      <EarlyAccessModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default App;
