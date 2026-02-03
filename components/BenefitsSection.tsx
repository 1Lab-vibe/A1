
import React from 'react';

const BenefitsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#0a0f1d]">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-4xl font-bold mb-10 md:mb-16 text-center">Результаты внедрения AI COO OS</h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {[
            { metric: "−30–50%", label: "Координации", sub: "Освободите топ-менеджмент" },
            { metric: "2.5x", label: "Скорость", sub: "Реакция на лиды и события" },
            { metric: "100%", label: "Прозрачность", sub: "Аудит каждого действия" },
            { metric: "0", label: "Хаос", sub: "Четкие SLA и границы" }
          ].map((item, idx) => (
            <div key={idx} className="glass p-4 md:p-8 rounded-xl md:rounded-2xl hover:border-blue-500/50 transition-colors">
              <div className="text-2xl md:text-4xl font-black text-blue-500 mb-1 md:mb-2">{item.metric}</div>
              <div className="text-sm md:text-lg font-bold text-white mb-2 md:mb-4 leading-tight">{item.label}</div>
              <p className="text-[10px] md:text-sm text-gray-500 md:text-gray-400">{item.sub}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-20 overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
          <table className="w-full text-left glass rounded-2xl md:rounded-3xl overflow-hidden border-separate border-spacing-0 min-w-[600px] md:min-w-0">
            <thead>
              <tr className="bg-white/5">
                <th className="p-4 md:p-6 text-xs md:text-base font-bold border-b border-white/10">Характеристика</th>
                <th className="p-4 md:p-6 text-xs md:text-base font-bold border-b border-white/10 text-red-400">Обычные AI</th>
                <th className="p-4 md:p-6 text-xs md:text-base font-bold border-b border-white/10 text-emerald-400">AI COO OS</th>
              </tr>
            </thead>
            <tbody className="text-[11px] md:text-sm">
              {[
                { feature: "Задача", old: "Делают работу", new: "Управляют процессами" },
                { feature: "Полномочия", old: "Без границ", new: "Роли и лимиты" },
                { feature: "Надежность", old: "Галлюцинации", new: "Схемы валидации" },
                { feature: "Человек", old: "Вслепую", new: "Human-in-the-loop" },
                { feature: "Контроль", old: "Неясный", new: "Полная трассировка" }
              ].map((row, i) => (
                <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 md:p-6 border-b border-white/5 font-medium">{row.feature}</td>
                  <td className="p-4 md:p-6 border-b border-white/5 text-gray-500">{row.old}</td>
                  <td className="p-4 md:p-6 border-b border-white/5 text-gray-200 font-semibold">{row.new}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
