
import React from 'react';

const AudienceSection: React.FC = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">Кому подходит AI COO OS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="glass p-10 rounded-3xl border-l-4 border-emerald-500">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="text-emerald-500 text-3xl">✓</span> Идеально подходит:
            </h3>
            <ul className="space-y-6">
              {[
                "SMB и растущие компании, которые уже используют AI фрагментарно",
                "SaaS-платформы, стремящиеся к автоматизации Customer Success",
                "Digital-агентства с большим объемом входящих лидов и коммуникаций",
                "B2B компании с длинным циклом сделки и сложной координацией",
                "Сервисные компании, желающие масштабироваться без кратного роста штата"
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <span className="text-emerald-500 mt-1">•</span>
                  <p className="text-gray-300 font-medium">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass p-10 rounded-3xl border-l-4 border-red-500/50">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="text-red-500 text-3xl">×</span> Не подходит:
            </h3>
            <ul className="space-y-6">
              {[
                "Микро-бизнесу из 1-2 человек без выстроенных процессов",
                "Компаниям, ищущим «волшебную кнопку» без участия человека",
                "Тем, кто не готов доверять автоматизации часть операционных задач",
                "Бизнесам с крайне низким уровнем цифровизации (всё на бумаге)"
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start opacity-70">
                  <span className="text-red-500 mt-1">•</span>
                  <p className="text-gray-400">{item}</p>
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
