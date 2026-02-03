
import React from 'react';

const SEODetails: React.FC = () => {
  return (
    <section className="py-12 bg-black border-t border-white/5 hidden md:block">
      <div className="container mx-auto px-6">
        <div className="glass p-8 rounded-2xl opacity-40 hover:opacity-100 transition-opacity">
          <h5 className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-4">SEO & Metadata (1lab Studio)</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs font-mono">
            <div>
              <p className="mb-2"><span className="text-gray-500">Title:</span> A1 — Гибкий AI-конструктор для бизнеса от студии 1lab</p>
              <p className="mb-2"><span className="text-gray-500">Description:</span> Соберите свою идеальную AI-систему с A1 от 1lab. Модульный конструктор, готовые бизнес-профили и умные дополнения для максимальной автоматизации без хаоса.</p>
              <p><span className="text-gray-500">Slug:</span> /a1-constructor-1lab</p>
            </div>
            <div>
              <p className="mb-2"><span className="text-gray-500">Keywords:</span></p>
              <ul className="list-disc list-inside">
                <li>A1 by 1lab</li>
                <li>AI конструктор для бизнеса</li>
                <li>1lab AI студия</li>
                <li>модульные AI системы</li>
                <li>AI профили для компаний</li>
                <li>автоматизация 1lab</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEODetails;
