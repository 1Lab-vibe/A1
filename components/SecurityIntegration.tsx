
import React from 'react';

const SecurityIntegration: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#050a18] border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Безопасность и интеграции</h2>
            <p className="text-base md:text-xl text-gray-400 mb-8 italic font-light leading-relaxed">
              A1 адаптирован под российский рынок. Мы понимаем важность суверенитета данных и связи с вашим стеком.
            </p>

            <div className="space-y-4 md:space-y-6">
              <div className="flex gap-3 md:gap-4 p-4 glass rounded-xl border-l-4 border-blue-500">
                <div className="text-xl md:text-2xl">🛡️</div>
                <div>
                  <h4 className="font-bold text-white text-sm md:text-base mb-0.5">Соответствие 152-ФЗ</h4>
                  <p className="text-[10px] md:text-sm text-gray-500 leading-relaxed">Персональные данные хранятся и обрабатываются только на серверах внутри РФ.</p>
                </div>
              </div>
              <div className="flex gap-3 md:gap-4 p-4 glass rounded-xl border-l-4 border-emerald-500">
                <div className="text-xl md:text-2xl">🔌</div>
                <div>
                  <h4 className="font-bold text-white text-sm md:text-base mb-0.5">Российская экосистема</h4>
                  <p className="text-[10px] md:text-sm text-gray-500 leading-relaxed">Нативные интеграции с Битрикс24, amoCRM, 1C, DaData и банками РФ.</p>
                </div>
              </div>
              <div className="flex gap-3 md:gap-4 p-4 glass rounded-xl border-l-4 border-purple-500">
                <div className="text-xl md:text-2xl">🧱</div>
                <div>
                  <h4 className="font-bold text-white text-sm md:text-base mb-0.5">On-premise решение</h4>
                  <p className="text-[10px] md:text-sm text-gray-500 leading-relaxed">Возможность развертывания A1 в вашем закрытом контуре безопасности.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-3 sm:grid-cols-2 gap-2 md:gap-4 w-full">
            {[
              { name: "Битрикс24", logo: "B24" },
              { name: "amoCRM", logo: "amo" },
              { name: "1C", logo: "1C" },
              { name: "Ya Cloud", logo: "Ya" },
              { name: "TG (RU)", logo: "TG" },
              { name: "DaData", logo: "DD" }
            ].map((sys, idx) => (
              <div key={idx} className="glass p-3 md:p-6 rounded-xl md:rounded-2xl flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors group">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-white/5 flex items-center justify-center mb-2 md:mb-3 group-hover:scale-110 transition-transform font-black text-blue-500 text-[10px] md:text-base">
                  {sys.logo}
                </div>
                <div className="text-[8px] md:text-xs font-bold uppercase tracking-wider text-gray-500">{sys.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityIntegration;
