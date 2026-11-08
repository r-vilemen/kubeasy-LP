import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { VideoSection } from "./components/VideoSection";
import { ProblemSection } from "./components/ProblemSection";
import { MethodSection } from "./components/MethodSection";
import { InvestigationSection } from "./components/InvestigationSection";
import { GovernanceSection } from "./components/GovernanceSection";
import { IntegrationsSection, CostSection } from "./components/MoreSections";
import { FinalCta, Footer } from "./components/FinalCta";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <VideoSection />
        <ProblemSection />
        <MethodSection />
        <InvestigationSection />
        <GovernanceSection />
        <IntegrationsSection />
        <CostSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
