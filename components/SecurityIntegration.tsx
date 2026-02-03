
import React from 'react';

const SecurityIntegration: React.FC = () => {
  return (
    <section className="py-24 bg-[#050a18] border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6">Безопасность и интеграции</h2>
            <p className="text-xl text-gray-400 mb-8 italic font-light leading-relaxed">
              A1 полностью адаптирован под российский рынок. Мы понимаем важность суверенитета данных и бесшовной связи с вашим текущим стеком.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 p-4 glass rounded-xl border-l-4 border-blue-500">
                <div className="text-2xl">🛡️</div>
                <div>
                  <h4 className="font-bold text-white mb-1">Соответствие 152-ФЗ</h4>
                  <p className="text-sm text-gray-400">Персональные данные хранятся и обрабатываются исключительно на серверах внутри РФ (Yandex Cloud / Selectel).</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 glass rounded-xl border-l-4 border-emerald-500">
                <div className="text-2xl">🔌</div>
                <div>
                  <h4 className="font-bold text-white mb-1">Российская экосистема</h4>
                  <p className="text-sm text-gray-400">Нативные интеграции с Битрикс24, amoCRM, 1C, DaData и API российских банков.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 glass rounded-xl border-l-4 border-purple-500">
                <div className="text-2xl">🧱</div>
                <div>
                  <h4 className="font-bold text-white mb-1">On-premise решение</h4>
                  <p className="text-sm text-gray-400">Возможность развертывания A1 в вашем закрытом контуре для максимального контроля безопасности.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            {[
              { name: "Битрикс24", logo: "B24" },
              { name: "amoCRM", logo: "amo" },
              { name: "1C:Предприятие", logo: "1C" },
              { name: "Yandex Cloud", logo: "Ya" },
              { name: "Telegram (RU)", logo: "TG" },
              { name: "DaData", logo: "DD" }
            ].map((sys, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform font-black text-blue-500">
                  {sys.logo}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-500">{sys.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityIntegration;
