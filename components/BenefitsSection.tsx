
import React from 'react';

const BenefitsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0f1d]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">Результаты внедрения AI COO OS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { metric: "−30–50%", label: "Ручной координации", sub: "Освободите топ-менеджмент от рутины" },
            { metric: "2.5x", label: "Скорость реакции", sub: "На лиды, инциденты и изменения рынка" },
            { metric: "100%", label: "Прозрачность", sub: "Аудит каждого действия нейросети" },
            { metric: "0", label: "Хаос", sub: "Четкие SLA и границы ответственности" }
          ].map((item, idx) => (
            <div key={idx} className="glass p-8 rounded-2xl hover:border-blue-500/50 transition-colors">
              <div className="text-4xl font-black text-blue-500 mb-2">{item.metric}</div>
              <div className="text-lg font-bold text-white mb-4 leading-tight">{item.label}</div>
              <p className="text-sm text-gray-400">{item.sub}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 overflow-x-auto">
          <table className="w-full text-left glass rounded-3xl overflow-hidden border-separate border-spacing-0">
            <thead>
              <tr className="bg-white/5">
                <th className="p-6 font-bold border-b border-white/10">Характеристика</th>
                <th className="p-6 font-bold border-b border-white/10 text-red-400">Обычные AI-решения</th>
                <th className="p-6 font-bold border-b border-white/10 text-emerald-400">AI COO OS</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[
                { feature: "Основная задача", old: "Делают работу", new: "Управляют процессами" },
                { feature: "Границы полномочий", old: "Без границ", new: "Жёсткие роли и лимиты" },
                { feature: "Надежность", old: "Галлюцинации", new: "Confidence + Схемы валидации" },
                { feature: "Роль человека", old: "Автономно (вслепую)", new: "Human-in-the-loop" },
                { feature: "Ответственность", old: "Неясная ответственность", new: "Полная трассировка всех шагов" }
              ].map((row, i) => (
                <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-6 border-b border-white/5 font-medium">{row.feature}</td>
                  <td className="p-6 border-b border-white/5 text-gray-500">{row.old}</td>
                  <td className="p-6 border-b border-white/5 text-gray-200 font-semibold">{row.new}</td>
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
