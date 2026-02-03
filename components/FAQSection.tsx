
import React, { useState } from 'react';

const FAQItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-blue-400 transition-colors"
      >
        <span className="text-lg font-bold pr-8">{q}</span>
        <span className={`text-2xl transform transition-transform ${isOpen ? 'rotate-45' : ''}`}>+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-gray-400 leading-relaxed">{a}</p>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const faqs = [
    {
      q: "Может ли AI совершить критическую ошибку?",
      a: "Мы используем жесткие схемы валидации и контроль уровня уверенности (Confidence Level). Если AI сомневается, задача немедленно передается человеку. Никаких финальных подписей или платежей без Human-in-the-loop."
    },
    {
      q: "Как долго длится внедрение?",
      a: "Пилотный запуск занимает всего 14 дней. Полноценное развертывание на все отделы обычно занимает от 1 до 3 месяцев, в зависимости от сложности процессов."
    },
    {
      q: "У нас уже есть свои AI-боты. Нужно ли от них отказываться?",
      a: "Нет. AI COO OS может выступать как оркестратор над вашими текущими инструментами, связывая их в единую операционную логику и контролируя их работу."
    },
    {
      q: "Где хранятся наши данные?",
      a: "Система может быть развернута в вашем облачном контуре. Мы соблюдаем строгие протоколы безопасности и GDPR/SLA вашей компании."
    },
    {
      q: "Какая модель ИИ используется внутри?",
      a: "Мы мультимодельная платформа. AI COO выбирает оптимальную модель (GPT-4, Claude 3, Gemini или локальные Llama 3) под конкретную задачу для баланса цены и качества."
    }
  ];

  return (
    <section className="py-24 bg-[#0a0f1d]">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Часто задаваемые вопросы</h2>
        <div className="glass rounded-3xl p-8 border border-white/5">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
