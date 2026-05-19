import { Reveal } from '../ui/Reveal';

const tariffs = [
  {
    title: 'Зритель',
    subtitle: 'Самостоятельное погружение',
    price: '15 000 ₽',
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
    features: ['Доступ ко всем лекциям', 'Записи всех занятий', 'Дополнительные материалы', 'Общий чат сообщества']
  },
  {
    title: 'С куратором',
    subtitle: 'Практика с обратной связью',
    price: '25 000 ₽',
    img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop',
    features: ['Всё, что в тарифе «Зритель»', 'Практика с обратной связью', 'Разбор домашних заданий', 'Ответы на вопросы от куратора']
  },
  {
    title: 'С мастером',
    subtitle: 'Личное ведение Надежды',
    price: '45 000 ₽',
    img: 'https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?q=80&w=2672&auto=format&fit=crop',
    features: ['Всё, что в тарифе «С куратором»', 'Участие в живых разборах', 'Три индивидуальных зум-встречи', 'Личная обратная связь от Надежды']
  }
];

export function Tariffs() {
  return (
    <section id="tariffs" className="py-24 lg:py-36 px-6 lg:px-16 bg-cream border-t border-mist/50">
      <Reveal>
        <h2 className="font-serif text-[clamp(40px,5vw,60px)] font-light text-center mb-16 text-ink/90">
          Варианты <em className="italic text-terracotta">участия</em>
        </h2>
      </Reveal>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {tariffs.map((t, i) => (
          <Reveal key={i} delay={i * 0.2}>
            <div className="bg-warm-white border border-mist/40 p-6 flex flex-col h-full relative group">
              {/* Image box top */}
              <div className="w-full aspect-[4/3] overflow-hidden mb-6 filter sepia-[0.3] contrast-[1.1] grayscale-[0.4] group-hover:sepia-0 group-hover:grayscale-0 transition-all duration-700">
                <img src={t.img} referrerPolicy="no-referrer" alt={t.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              </div>
              
              <h3 className="font-serif text-3xl font-light text-center mb-0 text-ink">{t.title}</h3>
              <p className="text-center font-serif italic text-terracotta/80 text-[15px] mb-6">{t.subtitle}</p>
              
              <div className="w-8 h-px bg-terracotta/40 mx-auto mb-6" />
              
              <ul className="flex-1 mb-8 space-y-4 px-2">
                {t.features.map((f, j) => (
                  <li key={j} className="text-[13px] text-ink/80 font-light flex items-start gap-3">
                    <span className="w-[3px] h-[3px] bg-terracotta rounded-full mt-2 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              
              <div className="text-center mt-auto">
                <p className="font-serif text-3xl font-light mb-6 text-ink/90">{t.price}</p>
                <a href="#join" className="inline-block w-full py-4 bg-terracotta text-white text-[11px] tracking-[0.15em] uppercase font-medium hover:bg-ink transition-colors duration-300">
                  Выбрать тариф
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
