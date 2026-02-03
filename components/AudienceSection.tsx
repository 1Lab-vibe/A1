
import React from 'react';

const AudienceSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-4xl font-bold mb-10 md:mb-16 text-center">Кому подходит AI COO OS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          <div className="glass p-6 md:p-10 rounded-2xl md:rounded-3xl border-l-4 border-emerald-500">
            <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 flex items-center gap-3">
              <span className="text-emerald-500 text-2xl md:text-3xl">✓</span> Подходит:
            </h3>
            <ul className="space-y-3 md:space-y-6">
              {[
                "SMB компании, использующие AI фрагментарно",
                "SaaS-платформы для Customer Success",
                "Digital-агентства с большим объемом лидов",
                "B2B компании со сложной координацией",
                "Бизнесы, желающие масштабироваться"
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 md:gap-4 items-start">
                  <span className="text-emerald-500 mt-1 md:mt-1.5 shrink-0">•</span>
                  <p className="text-gray-300 font-medium text-xs md:text-base">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass p-6 md:p-10 rounded-2xl md:rounded-3xl border-l-4 border-red-500/50">
            <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 flex items-center gap-3">
              <span className="text-red-500 text-2xl md:text-3xl">×</span> Не подходит:
            </h3>
            <ul className="space-y-3 md:space-y-6">
              {[
                "Микро-бизнесу без выстроенных процессов",
                "Тем, кто ищет «волшебную кнопку»",
                "Кто не готов доверять автоматизации рутину",
                "Бизнесам с крайне низкой цифровизацией"
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 md:gap-4 items-start opacity-70">
                  <span className="text-red-500 mt-1 md:mt-1.5 shrink-0">•</span>
                  <p className="text-gray-400 text-xs md:text-base">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
