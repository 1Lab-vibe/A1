
import React from 'react';

const FounderSection: React.FC = () => {
  const botUrl = "https://t.me/ai_1lab_bot";
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-black/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-center">
          <div className="w-full max-w-[320px] md:max-w-none lg:w-2/5 relative">
            <div className="aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden glass border border-white/10 relative z-10">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20"></div>
              {/* Profile Image Placeholder */}
              <div className="w-full h-full bg-gray-800/50 flex items-center justify-center text-white/5 text-7xl md:text-9xl font-black">
                IT
              </div>
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-30">
                <div className="text-xl md:text-3xl font-black text-white">Иван Трушков</div>
                <div className="text-blue-400 font-medium text-[10px] md:text-sm tracking-widest uppercase">Founder 1lab & A1 Architect</div>
              </div>
            </div>
            {/* Decorative background circle */}
            <div className="absolute -top-5 -left-5 w-32 h-32 md:-top-10 md:-left-10 md:w-40 md:h-40 bg-blue-600/10 blur-[40px] md:blur-[60px] rounded-full pointer-events-none"></div>
          </div>

          <div className="lg:w-3/5 text-center lg:text-left">
            <div className="inline-block px-3 py-1 mb-4 md:mb-6 text-[10px] md:text-xs font-bold tracking-widest uppercase glass rounded-full text-blue-400 border border-blue-500/20">
              Экспертиза и Видение
            </div>
            <h2 className="text-2xl md:text-5xl font-black mb-6 md:mb-8 leading-tight">Инженерия смыслов <br/><span className="text-blue-500">и архитектура прибыли</span></h2>
            
            <div className="space-y-4 md:space-y-6 text-gray-400 text-sm md:text-lg font-light leading-relaxed">
              <p>
                Я создаю A1 не как очередной IT-продукт, а как решение боли, которую видел изнутри более 10 лет. Мой путь — это сплав жесткого программирования и управления реальными бизнес-системами.
              </p>
              <p>
                Я знаю, как «тонут» бюджеты в хаосе и как микроменеджмент убивает рост. Мы строим AI, который не просто «пишет текст», а заменяет рутину на измеримый результат.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 mt-10 md:mt-12 text-left">
              <div className="flex gap-3 md:gap-4 p-4 glass rounded-xl border border-white/5">
                <div className="text-blue-500 text-xl md:text-2xl">⚡</div>
                <div>
                  <h4 className="font-bold text-white text-sm md:text-base mb-1">10+ лет опыта</h4>
                  <p className="text-[10px] md:text-sm text-gray-500 leading-tight">В управлении, программировании и автоматизации.</p>
                </div>
              </div>
              <div className="flex gap-3 md:gap-4 p-4 glass rounded-xl border border-white/5">
                <div className="text-emerald-500 text-xl md:text-2xl">🧠</div>
                <div>
                  <h4 className="font-bold text-white text-sm md:text-base mb-1">AI-архитектор</h4>
                  <p className="text-[10px] md:text-sm text-gray-500 leading-tight">Проектирую системы, понимающие бизнес-цели.</p>
                </div>
              </div>
            </div>

            <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 md:gap-8">
              <a href={botUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-6 py-4 md:px-8 md:py-4 bg-white text-black font-black rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-3 text-sm md:text-base">
                Обсудить проект
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
              <div className="text-[10px] md:text-xs text-gray-500 font-mono italic text-center sm:text-left">
                // "Автоматизация — это не мода, <br className="hidden sm:block" /> это гигиена выживания"
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
