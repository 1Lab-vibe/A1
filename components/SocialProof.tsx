
import React from 'react';

const SocialProof: React.FC = () => {
  const botUrl = "https://t.me/ai_1lab_bot";
  return (
    <section className="py-24 bg-[#0a0f1d]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center">Опыт внедрения и кейсы</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass p-8 rounded-2xl border border-white/10">
              <div className="text-blue-500 text-sm font-bold mb-2 uppercase tracking-widest">SaaS Платформа</div>
              <h4 className="text-xl font-bold mb-4">Автоматизация Customer Success</h4>
              <p className="text-gray-400 mb-6 text-sm">Внедрение AI COO для координации 5 агентов поддержки. Результат: время первого ответа снижено с 14 минут до 15 секунд.</p>
              <div className="flex items-center gap-4 border-t border-white/5 pt-4">
                <div className="w-10 h-10 rounded-full bg-gray-700"></div>
                <div>
                  <div className="text-sm font-bold">Сергей В.</div>
                  <div className="text-xs text-gray-500">CEO & Founder</div>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-2xl border border-white/10">
              <div className="text-blue-500 text-sm font-bold mb-2 uppercase tracking-widest">Digital Агентство</div>
              <h4 className="text-xl font-bold mb-4">Управление холодными продажами</h4>
              <p className="text-gray-400 mb-6 text-sm">AI COO координирует лидген-агентов и Sales-команду. Конверсия из лида в звонок выросла на 40% за счет мгновенной реакции.</p>
              <div className="flex items-center gap-4 border-t border-white/5 pt-4">
                <div className="w-10 h-10 rounded-full bg-gray-700"></div>
                <div>
                  <div className="text-sm font-bold">Анна М.</div>
                  <div className="text-xs text-gray-500">Head of Operations</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PILLOT OFFER BLOCK */}
        <div id="pilot" className="max-w-5xl mx-auto glass p-8 md:p-16 rounded-[2.5rem] border-2 border-emerald-500/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8">
            <div className="bg-emerald-500 text-black px-4 py-1 rounded-full text-xs font-black uppercase tracking-tighter">Limited Offer</div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12 relative z-10">
            <div className="lg:w-3/5">
              <h2 className="text-4xl font-black mb-4">🚀 ПИЛОТ: AI COO OS — 14 ДНЕЙ</h2>
              <p className="text-xl text-gray-300 mb-8 italic">Запустите AI без хаоса за 2 недели через @ai_1lab_bot.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                <div>
                  <h5 className="font-bold text-emerald-400 mb-4 uppercase text-xs tracking-widest">Что мы делаем:</h5>
                  <ul className="space-y-3 text-sm text-gray-300">
                    <li className="flex gap-2"><span>✅</span> Выбираем 1 бизнес-процесс</li>
                    <li className="flex gap-2"><span>✅</span> Настраиваем AI COO</li>
                    <li className="flex gap-2"><span>✅</span> Подключаем 2–3 AI-агента</li>
                    <li className="flex gap-2"><span>✅</span> Включаем контроль и эскалацию</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-emerald-400 mb-4 uppercase text-xs tracking-widest">Что вы получаете:</h5>
                  <ul className="space-y-3 text-sm text-gray-300">
                    <li className="flex gap-2"><span>✅</span> Работающий AI в вашем контуре</li>
                    <li className="flex gap-2"><span>✅</span> Реальный бизнес-кейс</li>
                    <li className="flex gap-2"><span>✅</span> Измеримый результат</li>
                    <li className="flex gap-2"><span>✅</span> Roadmap масштабирования</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                   <span className="text-emerald-500">⏱</span> <strong>Сроки:</strong> старт за 2–3 дня
                </div>
                <div className="flex items-center gap-2">
                   <span className="text-emerald-500">🔒</span> <strong>Гарантии:</strong> 152-ФЗ & Security
                </div>
              </div>
            </div>

            <div className="lg:w-2/5 flex flex-col justify-center items-center bg-white/5 rounded-3xl p-8 border border-white/10">
              <div className="text-sm uppercase tracking-widest text-gray-400 mb-2">Стоимость пилота</div>
              <div className="text-5xl font-black text-white mb-2">€1 000 – 2 000</div>
              <div className="text-xs text-gray-500 mb-8 text-center italic">Заявки обрабатываются ботом @ai_1lab_bot</div>
              <a href={botUrl} target="_blank" rel="noopener noreferrer" className="w-full text-center py-4 bg-emerald-500 text-black font-black rounded-xl hover:scale-105 transition-transform shadow-xl shadow-emerald-500/20">
                Запустить пилот
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
