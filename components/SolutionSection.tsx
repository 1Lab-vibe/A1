
import React from 'react';

const SolutionSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24" id="solution">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight">Два пути внедрения A1</h2>
            <p className="text-lg md:text-xl text-gray-400 mb-6 md:mb-8 font-light italic">
              От студии 1lab: мы создали систему, которая адаптируется под вас, а не наоборот.
            </p>
            
            <div className="space-y-4 md:space-y-8">
              <div className="glass p-5 md:p-6 rounded-xl md:rounded-2xl border-l-4 border-blue-500">
                <h4 className="font-bold text-white text-lg md:text-xl mb-1 md:mb-2">1. Конструктор продукта</h4>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">Выбирайте только нужные модули: оркестратор, специфические агенты, интеграции. Платите только за то, что используете.</p>
              </div>

              <div className="glass p-5 md:p-6 rounded-xl md:rounded-2xl border-l-4 border-emerald-500">
                <h4 className="font-bold text-white text-lg md:text-xl mb-1 md:mb-2">2. Готовые профили + Допы</h4>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">Быстрый старт с преднастроенными профилями и возможность в один клик добавить "Допы" — голос, анализ или риск-менеджмент.</p>
              </div>

              <div className="flex gap-3 items-center pt-2">
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full accent-gradient flex items-center justify-center text-[10px] font-bold">A1</div>
                <p className="text-gray-300 text-xs md:text-sm font-medium">Бесшовная интеграция в любую бизнес-модель за счет архитектуры 1lab.</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2 relative w-full max-w-[400px] lg:max-w-none mx-auto">
             <div className="glass aspect-square rounded-2xl md:rounded-3xl p-4 md:p-8 flex items-center justify-center border-white/10 shadow-2xl">
                <div className="grid grid-cols-3 grid-rows-3 gap-2 md:gap-4 w-full h-full">
                   <div className="col-start-2 row-start-2 glass flex flex-col items-center justify-center rounded-xl md:rounded-2xl accent-gradient scale-110 md:scale-125 z-10 border-none shadow-xl">
                      <span className="text-white font-black text-lg md:text-2xl">A1</span>
                      <span className="text-[8px] md:text-[10px] uppercase opacity-70">CORE</span>
                   </div>
                   {/* Modules showing the "constructor" feel */}
                   <div className="col-start-1 row-start-1 glass rounded-lg md:rounded-2xl flex flex-col items-center justify-center text-[8px] md:text-[10px] uppercase font-bold text-blue-400 border-blue-500/20 text-center p-1">Sales</div>
                   <div className="col-start-3 row-start-1 glass rounded-lg md:rounded-2xl flex flex-col items-center justify-center text-[8px] md:text-[10px] uppercase font-bold text-emerald-400 border-emerald-500/20 text-center p-1">Voice</div>
                   <div className="col-start-1 row-start-3 glass rounded-lg md:rounded-2xl flex flex-col items-center justify-center text-[8px] md:text-[10px] uppercase font-bold text-purple-400 border-purple-500/20 text-center p-1">HR</div>
                   <div className="col-start-3 row-start-3 glass rounded-lg md:rounded-2xl flex flex-col items-center justify-center text-[8px] md:text-[10px] uppercase font-bold text-yellow-400 border-yellow-500/20 text-center p-1">Data</div>
                </div>
             </div>
             <div className="absolute -bottom-3 -right-3 md:-bottom-6 md:-right-6 glass px-3 py-1.5 md:px-6 md:py-3 rounded-lg md:rounded-xl border-emerald-500/30">
                <span className="text-emerald-500 font-bold text-[10px] md:text-base">1lab Certified</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
