
import React from 'react';

const FounderSection: React.FC = () => {
  const botUrl = "https://t.me/ai_1lab_bot";
  return (
    <section className="py-24 relative overflow-hidden bg-black/40">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-2/5 relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden glass border border-white/10 relative z-10">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20"></div>
              {/* Profile Image Placeholder */}
              <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white/10 text-9xl font-black">
                IT
              </div>
              <div className="absolute bottom-8 left-8 z-30">
                <div className="text-3xl font-black text-white">Иван Трушков</div>
                <div className="text-blue-400 font-medium text-sm tracking-widest uppercase">Founder 1lab & A1 Architect</div>
              </div>
            </div>
            {/* Decorative background circle */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600/20 blur-[60px] rounded-full pointer-events-none"></div>
          </div>

          <div className="lg:w-3/5">
            <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase glass rounded-full text-blue-400 border border-blue-500/20">
              Экспертиза и Видение
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Инженерия смыслов <br/><span className="text-blue-500">и архитектура прибыли</span></h2>
            
            <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed">
              <p>
                Я создаю A1 не как очередной IT-продукт, а как решение боли, которую видел изнутри более 10 лет. Мой путь — это сплав жесткого программирования и управления реальными бизнес-системами.
              </p>
              <p>
                Я знаю, как «тонут» бюджеты в неконтролируемом хаосе и как микроменеджмент убивает потенциал роста. Именно поэтому в 1lab мы строим AI, который не просто «пишет текст», а **заменяет операционную рутину на измеримый результат**.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="flex gap-4">
                <div className="text-blue-500 text-2xl">⚡</div>
                <div>
                  <h4 className="font-bold text-white mb-1">10+ лет опыта</h4>
                  <p className="text-sm text-gray-500">В управлении бизнесом, системном программировании и глубокой автоматизации.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-emerald-500 text-2xl">🧠</div>
                <div>
                  <h4 className="font-bold text-white mb-1">AI-архитектор</h4>
                  <p className="text-sm text-gray-500">Проектирую системы, которые понимают бизнес-цели, а не только команды.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-purple-500 text-2xl">🏗️</div>
                <div>
                  <h4 className="font-bold text-white mb-1">Прагматичный подход</h4>
                  <p className="text-sm text-gray-500">Автоматизация ради денег и эффективности, а не ради «хайпа» вокруг нейросетей.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-yellow-500 text-2xl">🤝</div>
                <div>
                  <h4 className="font-bold text-white mb-1">Личный контроль</h4>
                  <p className="text-sm text-gray-500">Курирую каждый пилотный проект A1, гарантируя выход на плановые показатели.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <a href={botUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-black font-black rounded-xl hover:scale-105 transition-transform flex items-center gap-3">
                Обсудить проект с Иваном
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
              <div className="hidden sm:block text-xs text-gray-500 font-mono italic">
                // "Автоматизация — это не мода, <br/> это гигиена выживания в 2024"
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
