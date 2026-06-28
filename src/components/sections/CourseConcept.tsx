import { Reveal } from '../ui/Reveal';

export function CourseConcept() {
  return (
    <section id="about" className="py-24 lg:py-36 px-6 lg:px-16 bg-warm-white relative overflow-hidden">
      {/* Decorative text watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[20vw] font-light text-ink/[0.02] pointer-events-none whitespace-nowrap z-0">
        искусство быть
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
        <div className="flex-1 text-left">
          <Reveal>
            <div className="inline-flex items-center gap-4 text-[10px] tracking-[0.2em] uppercase text-terracotta font-medium mb-12">
              <span className="w-8 h-px bg-terracotta"></span>
              Авторская методика
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="font-serif text-[clamp(40px,5vw,64px)] font-light leading-[1.1] mb-12">
              Театр как инструмент <br className="lg:hidden" /><em className="italic text-terracotta">прикладной методики</em>
            </h2>
          </Reveal>
          <Reveal delay={0.3} className="border-t border-mist/50 pt-8 mt-4">
            <p className="text-[18px] lg:text-[22px] leading-[1.6] text-ink/80 font-light mb-8">
              <span className="float-left text-[80px] leading-[0.7] pt-2 pr-4 font-serif text-terracotta">К</span>
              урс «ЖизньИгра» построен на пересечении двух дисциплин: профессионального актёрского мастерства и прикладной риторики. Вы не изучаете теорию — вы работаете с собственным голосом, телом и состоянием на каждом занятии.
            </p>
            <p className="text-[16px] leading-[1.8] text-ink/60 font-light max-w-[500px]">
              Методика разработана Надеждой Исаевой на основе системы Станиславского и современных алгоритмов публичной речи. Результат применим сразу: в переговорах, выступлениях, личном общении.
            </p>
          </Reveal>
        </div>
        
        <Reveal delay={0.4} className="flex-1 w-full relative">
          <div className="w-full aspect-[4/3] object-cover relative group border p-3 border-mist/40 bg-white">
             <img src="/space.jpg" alt="Атмосфера курса" className="w-full h-full object-cover object-center opacity-90 filter grayscale-[10%] sepia-[10%] contrast-[1.05]" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
