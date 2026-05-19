import { Reveal } from '../ui/Reveal';

export function CourseConcept() {
  return (
    <section id="about" className="py-24 lg:py-36 px-6 lg:px-16 bg-warm-white">
      <div className="max-w-4xl mx-auto text-center">
        <Reveal>
          <div className="inline-flex items-center justify-center gap-4 text-[10px] tracking-[0.2em] uppercase text-terracotta font-medium mb-12">
            <span className="w-8 h-px bg-terracotta"></span>
            О курсе
            <span className="w-8 h-px bg-terracotta"></span>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <h2 className="font-serif text-[clamp(40px,6vw,72px)] font-light leading-[1.1] mb-12">
            Позволь себе <em className="italic text-terracotta">сбыться</em>
          </h2>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="text-[18px] lg:text-[22px] leading-[1.6] text-ink/80 font-light mb-8 max-w-3xl mx-auto">
            Вы не просто учитесь говорить. Вы пересобираете своё внутреннее состояние. Мы берём глубокие актёрские практики, соединяем их с алгоритмами публичной речи и помогаем найти ваш истинный внутренний стержень.
          </p>
          <p className="text-[16px] leading-[1.8] text-ink/60 font-light max-w-2xl mx-auto">
            Это путь от скованности к абсолютной свободе в общении — будь то сцена, бизнес-встреча или просто жизнь.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
