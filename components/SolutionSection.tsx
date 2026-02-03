
import React from 'react';

const SolutionSection: React.FC = () => {
  return (
    <section className="py-24" id="solution">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Два пути внедрения A1</h2>
            <p className="text-xl text-gray-400 mb-8 font-light italic">
              От студии 1lab: мы создали систему, которая адаптируется под вас, а не наоборот.
            </p>
            
            <div className="space-y-8">
              <div className="glass p-6 rounded-2xl border-l-4 border-blue-500">
                <h4 className="font-bold text-white text-xl mb-2">1. Конструктор продукта</h4>
                <p className="text-gray-400 text-sm">Выбирайте только нужные модули: оркестратор, специфические агенты, интеграции с вашим стеком. Платите только за то, что используете.</p>
              </div>

              <div className="glass p-6 rounded-2xl border-l-4 border-emerald-500">
                <h4 className="font-bold text-white text-xl mb-2">2. Готовые профили + Допы</h4>
                <p className="text-gray-400 text-sm">Быстрый старт с преднастроенными профилями (Sales, CS, Operations) и возможность в один клик добавить "Допы" — расширенный анализ данных, голосовые модули или сложный риск-менеджмент.</p>
              </div>

              <div className="flex gap-4 items-center pt-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full accent-gradient flex items-center justify-center text-xs font-bold">A1</div>
                <p className="text-gray-300 text-sm font-medium">Бесшовная интеграция в любую бизнес-модель за счет архитектуры 1lab.</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
             <div className="glass aspect-square rounded-3xl p-8 flex items-center justify-center border-white/10 shadow-3xl">
                <div className="grid grid-cols-3 grid-rows-3 gap-4 w-full h-full">
                   <div className="col-start-2 row-start-2 glass flex flex-col items-center justify-center rounded-2xl accent-gradient scale-125 z-10 border-none shadow-2xl">
                      <span className="text-white font-black text-2xl">A1</span>
                      <span className="text-[10px] uppercase opacity-70">CORE</span>
                   </div>
                   {/* Modules showing the "constructor" feel */}
                   <div className="col-start-1 row-start-1 glass rounded-2xl flex flex-col items-center justify-center text-[10px] uppercase font-bold text-blue-400 border-blue-500/20">Module: Sales</div>
                   <div className="col-start-3 row-start-1 glass rounded-2xl flex flex-col items-center justify-center text-[10px] uppercase font-bold text-emerald-400 border-emerald-500/20">Add-on: Voice</div>
                   <div className="col-start-1 row-start-3 glass rounded-2xl flex flex-col items-center justify-center text-[10px] uppercase font-bold text-purple-400 border-purple-500/20">Module: HR</div>
                   <div className="col-start-3 row-start-3 glass rounded-2xl flex flex-col items-center justify-center text-[10px] uppercase font-bold text-yellow-400 border-yellow-500/20">Add-on: Analytics</div>
                </div>
             </div>
             <div className="absolute -bottom-6 -right-6 glass px-6 py-3 rounded-xl border-emerald-500/30">
                <span className="text-emerald-500 font-bold">1lab Certified</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
