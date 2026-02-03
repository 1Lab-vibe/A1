
import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24" id="how">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">Как это работает</h2>
        
        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-emerald-500 opacity-20"></div>
          
          <div className="space-y-20">
            {[
              { step: "1", title: "Любой вход данных", desc: "Telegram, CRM, Email, KPI или API — система мониторит все каналы взаимодействия в реальном времени." },
              { step: "2", title: "AI COO анализирует интент", desc: "Оркестратор определяет задачу, оценивает риски и выбирает наиболее подходящего агента или цепочку действий." },
              { step: "3", title: "Агенты выполняют задачи", desc: "Специализированные агенты отрабатывают процесс согласно жестко заданным правилам и SLA компании." },
              { step: "4", title: "Контроль и безопасность", desc: "Проверка качества ответа. Если уровень уверенности ниже порога — задача мгновенно эскалируется человеку." }
            ].map((item, idx) => (
              <div key={idx} className={`flex flex-col lg:flex-row items-center gap-8 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                  <div className="w-12 h-12 rounded-full accent-gradient text-white flex items-center justify-center font-bold mb-6 text-xl">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed max-w-md">{item.desc}</p>
                </div>
                <div className="lg:w-1/2">
                   <div className="glass h-48 w-full rounded-2xl flex items-center justify-center border-white/5">
                      <div className="text-blue-500/20 text-6xl font-black">STEP {item.step}</div>
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
