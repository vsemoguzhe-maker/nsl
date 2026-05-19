import { Reveal } from '../ui/Reveal';

const results = [
  { num: '01', title: 'Уверенность без усилий', desc: 'Перестать готовиться к каждому разговору, как к выступлению. Просто быть.' },
  { num: '02', title: 'Сцена перестаёт пугать', desc: 'Публичные выступления, переговоры, новые знакомства — туда, где раньше было страшно, теперь хочется.' },
  { num: '03', title: 'Таланты — в дело', desc: 'Голос, пластика, эмоциональный интеллект — всё, что было внутри, начинает работать на вас.' },
  { num: '04', title: 'Харизма в бизнесе', desc: 'Для тех, кто ведёт переговоры, управляет командами или строит личный бренд.' },
];

export function Results() {
  return (
    <section id="results" className="py-24 lg:py-36 px-6 lg:px-16 bg-cream overflow-hidden">
      <Reveal>
        <h2 className="font-serif text-[clamp(36px,5vw,64px)] font-light leading-[1.1] text-center mb-24 max-w-4xl mx-auto">
          Сцена как тренажёр<br />
          <em className="italic text-terracotta">для реальности</em>
        </h2>
      </Reveal>

      <div className="max-w-6xl mx-auto">
        {results.map((r, i) => (
          <Reveal key={r.num} delay={i * 0.1}>
            <div className={`flex flex-col md:flex-row items-baseline gap-6 md:gap-16 mb-16 ${i % 2 !== 0 ? 'md:ml-auto md:w-3/4 lg:w-2/3' : 'md:w-3/4 lg:w-2/3'}`}>
              <div className="font-serif text-[64px] lg:text-[88px] text-mist/60 leading-none shrink-0 self-start mt-2">
                {r.num}
              </div>
              <div className="flex-1 mt-4 md:mt-0 relative">
                {/* Decorative line */}
                <div className="absolute -left-4 md:-left-8 top-4 bottom-0 w-px bg-terracotta/20 hidden md:block" />
                <h3 className="font-serif text-[24px] lg:text-[32px] font-normal leading-tight mb-4">
                  {r.title}
                </h3>
                <p className="text-[15px] leading-[1.8] text-ink/70 font-light max-w-md">
                  {r.desc}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
