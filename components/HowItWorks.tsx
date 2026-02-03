
import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 md:py-24" id="how">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-4xl font-bold mb-10 md:mb-16 text-center">Как это работает</h2>
        
        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-emerald-500 opacity-20"></div>
          
          <div className="space-y-12 md:space-y-20">
            {[
              { step: "1", title: "Любой вход данных", desc: "TG, CRM, Email, KPI или API — система мониторит каналы в реальном времени." },
              { step: "2", title: "Анализ интента", desc: "Оркестратор определяет задачу, оценивает риски и выбирает агента или цепочку действий." },
              { step: "3", title: "Выполнение задач", desc: "Агенты отрабатывают процесс согласно жестко заданным правилам и SLA компании." },
              { step: "4", title: "Контроль качества", desc: "Если уровень уверенности ниже порога — задача мгновенно эскалируется человеку." }
            ].map((item, idx) => (
              <div key={idx} className={`flex flex-col lg:flex-row items-center gap-6 md:gap-8 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full accent-gradient text-white flex items-center justify-center font-bold mb-4 md:mb-6 text-lg md:text-xl">
                    {item.step}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">{item.title}</h3>
                  <p className="text-sm md:text-gray-400 leading-relaxed max-w-md">{item.desc}</p>
                </div>
                <div className="lg:w-1/2 w-full max-w-sm lg:max-w-none">
                   <div className="glass h-32 md:h-48 w-full rounded-xl md:rounded-2xl flex items-center justify-center border-white/5">
                      <div className="text-blue-500/10 text-4xl md:text-6xl font-black">STEP {item.step}</div>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
