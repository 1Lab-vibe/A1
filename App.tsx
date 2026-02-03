
import React from 'react';
import Hero from './components/Hero';
import PainSection from './components/PainSection';
import SolutionSection from './components/SolutionSection';
import BenefitsSection from './components/BenefitsSection';
import SecurityIntegration from './components/SecurityIntegration';
import HowItWorks from './components/HowItWorks';
import SocialProof from './components/SocialProof';
import AudienceSection from './components/AudienceSection';
import FAQSection from './components/FAQSection';
import FinalCTA from './components/FinalCTA';
import SEODetails from './components/SEODetails';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 w-full z-50 glass border-b border-white/5 py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg accent-gradient flex items-center justify-center text-white">1L</span>
            A1 <span className="text-xs font-normal opacity-50 ml-1">by 1lab</span>
          </div>
          <a 
            href="#pilot" 
            className="hidden md:block bg-white text-black hover:bg-gray-200 px-6 py-2 rounded-full text-sm font-semibold transition-all"
          >
            Собрать свой A1
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <PainSection />
        <SolutionSection />
        <BenefitsSection />
        <SecurityIntegration />
        <HowItWorks />
        <SocialProof />
        <AudienceSection />
        <FAQSection />
        <FinalCTA />
        <SEODetails />
      </main>

      <footer className="bg-black py-12 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} 1lab Studio. Все права защищены.
          </div>
          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-white">Конфиденциальность</a>
            <a href="#" className="hover:text-white">Условия</a>
            <a href="mailto:hello@1lab.ai" className="hover:text-white">hello@1lab.ai</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
