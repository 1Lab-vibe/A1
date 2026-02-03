
import React from 'react';
import Hero from './components/Hero';
import PainSection from './components/PainSection';
import SolutionSection from './components/SolutionSection';
import BenefitsSection from './components/BenefitsSection';
import SecurityIntegration from './components/SecurityIntegration';
import FounderSection from './components/FounderSection';
import HowItWorks from './components/HowItWorks';
import SocialProof from './components/SocialProof';
import AudienceSection from './components/AudienceSection';
import FAQSection from './components/FAQSection';
import FinalCTA from './components/FinalCTA';
import SEODetails from './components/SEODetails';

const App: React.FC = () => {
  const botUrl = "https://t.me/ai_1lab_bot";

  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 w-full z-50 glass border-b border-white/5 py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg accent-gradient flex items-center justify-center text-white">1L</span>
            A1 <span className="text-xs font-normal opacity-50 ml-1">by 1lab</span>
          </div>
          <a 
            href={botUrl}
            target="_blank"
            rel="noopener noreferrer"
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
        <FounderSection />
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
            <a href={botUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">@ai_1lab_bot</a>
          </div>
        </div>
      </footer>

      {/* Floating Telegram Button */}
      <a 
        href={botUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#229ED9] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-bounce"
        aria-label="Написать в Telegram"
      >
        <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.35-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.35-.49.96-.75 3.78-1.65 6.31-2.74 7.58-3.27 3.61-1.51 4.35-1.77 4.84-1.78.11 0 .35.03.5.16.12.1.16.23.18.33.02.11.02.23.01.34z"/>
        </svg>
      </a>
    </div>
  );
};

export default App;
