
import React from 'react';

const Hero: React.FC = () => {
  const botUrl = "https://t.me/ai_1lab_bot";
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-600/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wide uppercase glass rounded-full text-blue-400 border border-blue-500/20">
          AI Studio 1lab presents
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight max-w-4xl mx-auto text-gradient">
          A1: Ваша идеальная AI-система. Соберите как конструктор.
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto italic font-light">
          Возьмите готовый профиль с дополнениями или соберите уникальное решение под задачи вашего бизнеса через наш бот.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
          {[
            "Гибкий конструктор модулей",
            "Готовые бизнес-профили",
            "Умные допы (Add-ons)"
          ].map((benefit, i) => (
            <div key={i} className="flex items-center justify-center gap-2 text-gray-300">
              <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-sm font-medium">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={botUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10 py-4 text-lg font-bold bg-white text-black rounded-xl hover:scale-105 transition-transform shadow-2xl shadow-white/10">
            Настроить профиль A1
          </a>
          <a href={botUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10 py-4 text-lg font-bold glass text-white rounded-xl hover:bg-white/5 transition-colors border border-white/10">
            Посмотреть готовые решения
          </a>
        </div>

        <div className="mt-12 text-sm text-gray-500 font-medium">
          Powered by 1lab • Заявки принимаются в @ai_1lab_bot
        </div>
      </div>
    </section>
  );
};

export default Hero;
