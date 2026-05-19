import { Reveal } from '../ui/Reveal';

const programSteps = [
  { step: 'Этап I', title: 'Диагностика и зажимы', desc: 'Выявляем телесные и речевые блоки. Учимся расслабляться, правильно дышать и звучать органично.' },
  { step: 'Этап II', title: 'Техника и мелодика речи', desc: 'Работаем над дикцией, артикуляцией и тембром. Делаем голос сильным, а интонацию — управляемой.' },
  { step: 'Этап III', title: 'Тело и пространство', desc: 'Учимся владеть собой в пространстве, использовать жесты, управлять вниманием аудитории.' },
  { step: 'Этап IV', title: 'Своя Игра и Харизма', desc: 'Выходим в публичное поле. Практикуем эмоциональный интеллект, игру чувств и уверенность.' },
];

export function Program() {
  return (
    <section id="program" className="py-24 lg:py-36 px-6 lg:px-16 bg-warm-white relative">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="text-center mb-24">
            <p className="text-[10px] tracking-[0.2em] uppercase text-terracotta font-medium mb-6 flex justify-center items-center gap-4">
              <span className="w-5 h-px bg-terracotta"></span>
              Структура курса
              <span className="w-5 h-px bg-terracotta"></span>
            </p>
            <h2 className="font-serif text-[clamp(36px,5vw,60px)] font-light leading-[1.1]">
              Сценарий <em className="italic text-terracotta px-1">преображения</em>
            </h2>
          </div>
        </Reveal>

        <div className="relative">
          {/* Main timeline line */}
          <div className="absolute left-[20px] md:left-1/2 top-4 bottom-8 w-px bg-mist md:-translate-x-1/2" />
          
          {programSteps.map((item, i) => (
            <Reveal key={i} delay={0.2}>
              <div className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-20 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Node */}
                <div className="absolute left-[20px] md:left-1/2 w-3 h-3 bg-terracotta rounded-full shadow-[0_0_0_6px_var(--color-warm-white)] transform -translate-x-[5px] md:-translate-x-1.5 z-10 top-6 md:top-auto" />

                {/* Left/Right content */}
                <div className={`w-full md:w-1/2 flex ${i % 2 !== 0 ? 'md:justify-start' : 'md:justify-end'} pl-16 md:pl-0`}>
                  <div className={`max-w-sm ${i % 2 !== 0 ? 'md:pl-10' : 'md:pr-10'}`}>
                    <p className="font-serif italic text-terracotta text-lg mb-2">{item.step}</p>
                    <h3 className="font-serif text-2xl lg:text-3xl mb-4 leading-tight">{item.title}</h3>
                    <p className="text-[15px] text-ink/70 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                
                <div className="hidden md:block w-1/2 pointer-events-none"></div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
