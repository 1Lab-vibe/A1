
import React from 'react';

const PainSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0f1d]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Почему AI в компаниях не работает на 100%</h2>
          <p className="text-gray-400 text-lg">
            AI внедряют фрагментами: боты, агенты, автоматизация. Но без единой системы контроля это ведет к хаосу.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="glass p-8 rounded-2xl border border-red-500/10">
            <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-6">
              <span className="text-red-500 text-2xl font-bold">❌</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Хаос процессов</h3>
            <p className="text-gray-400">Нет понимания, кто что делает, где границы и кто отвечает за финальный результат.</p>
          </div>
          
          <div className="glass p-8 rounded-2xl border border-red-500/10">
            <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-6">
              <span className="text-red-500 text-2xl font-bold">❌</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Недоверие руководства</h3>
            <p className="text-gray-400">Сложно делегировать ответственность машине, когда нет прозрачной трассировки действий.</p>
          </div>

          <div className="glass p-8 rounded-2xl border border-red-500/10">
            <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-6">
              <span className="text-red-500 text-2xl font-bold">❌</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Ручной микроменеджмент</h3>
            <p className="text-gray-400">Все равно приходится «ручками» координировать работу разных ИИ-инструментов.</p>
          </div>
        </div>

        <div className="glass p-10 rounded-3xl border-l-4 border-blue-500 max-w-3xl mx-auto">
          <h4 className="text-2xl font-bold mb-4 text-blue-400">Проблема не в AI. Проблема — в отсутствии операционной модели.</h4>
          <p className="text-gray-300 leading-relaxed italic">
            Компании не нужен “ещё один AI”. Компании нужен AI COO, который знает правила бизнеса, управляет агентами, эскалирует риски и вовлекает человека там, где это нужно.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
