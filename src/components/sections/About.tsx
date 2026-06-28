import { Reveal } from '../ui/Reveal';
import { Stamp } from '../ui/Stamp';

export function About() {
  return (
    <section id="author" className="py-16 lg:py-24 px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center bg-warm-white border-t border-mist/50">
      <div className="lg:col-span-4 relative flex justify-center lg:justify-start lg:ml-12">
        <Reveal delay={0.1} className="w-full flex justify-center lg:justify-start">
          <div className="w-[85vw] max-w-[420px] lg:w-full aspect-[3/4] bg-mist relative group mt-8 lg:mt-0">
            {/* Outline box */}
            <div className="absolute top-2 left-2 -right-2 -bottom-2 lg:top-4 lg:left-4 lg:-right-4 lg:-bottom-4 border border-mist/60 z-0"></div>
            <div className="absolute inset-0 z-10 overflow-hidden bg-cream p-2 border border-mist/20">
              <img src="/isaeva.jpg" alt="Надежда Исаева" className="w-full h-full object-cover object-top filter contrast-[1.05] grayscale-[0.3]" />
            </div>
            {/* The NS stamp overlapping */}
            <div className="absolute -top-4 -right-4 lg:-top-8 lg:-right-8 w-24 h-24 lg:w-32 lg:h-32 z-20 opacity-30 mix-blend-multiply drop-shadow-sm pointer-events-none">
              <img src="/logo.png" alt="NS Logo" className="w-full h-full object-contain" />
            </div>
          </div>
        </Reveal>
      </div>
      
      <div className="lg:col-span-2"></div>
      
      <div className="lg:col-span-5 flex flex-col justify-center">
        <Reveal delay={0.2}>
          <div className="inline-flex items-center gap-4 text-[10px] tracking-[0.2em] uppercase text-terracotta font-medium mb-6">
            <span className="w-5 h-px bg-terracotta"></span>
            Автор программы
          </div>
        </Reveal>
        
        <Reveal delay={0.3}>
          <h2 className="font-serif text-[clamp(40px,5vw,56px)] font-light leading-[1.1] mb-6">
            Надежда Исаева
          </h2>
        </Reveal>
        
        <Reveal delay={0.4}>
          <div className="text-ink/70 font-light mb-8">
            <p className="mb-6 text-[15px] leading-[1.85]">
              Надежда Исаева — режиссёр-постановщик, педагог актёрского мастерства. Выпускница ГИТИСа. Более 11 лет работает с голосом, речью и сценическим присутствием в профессиональном театре и авторской студии.
            </p>
            <p className="mb-4 text-[15px] leading-[1.85]">
               Автор методики, объединяющей систему Станиславского и алгоритмы современного ораторского искусства. Создала курс «Жизнь Игра» как пространство, где театральные инструменты становятся прикладным навыком для жизни.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="font-serif italic text-2xl text-terracotta border-l px-6 border-mist mt-4">
            «Когда человек позволяет себе играть — он впервые становится настоящим.»
          </div>
        </Reveal>
      </div>
    </section>
  );
}
