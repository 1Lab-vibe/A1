
import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
       {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter italic">Соберите свой A1 сегодня</h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Начните с конструктора или выберите готовый профиль от студии 1lab. Мы поможем настроить систему под ваши уникальные бизнес-задачи за 14 дней.
        </p>

        <div className="flex flex-col items-center gap-6">
          <a href="#pilot" className="px-12 py-6 text-2xl font-black bg-white text-black rounded-2xl hover:scale-105 transition-transform shadow-2xl shadow-white/10">
            Начать сборку A1
          </a>
          <div className="flex flex-col sm:flex-row gap-8 mt-4 text-sm text-gray-500">
             <div className="flex items-center gap-2"><span>✅</span> Гибкая модульная архитектура</div>
             <div className="flex items-center gap-2"><span>✅</span> Экспертиза студии 1lab</div>
             <div className="flex items-center gap-2"><span>✅</span> Готовые отраслевые профили</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
