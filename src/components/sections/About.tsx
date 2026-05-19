import { Reveal } from '../ui/Reveal';
import { Stamp } from '../ui/Stamp';

export function About() {
  return (
    <section id="author" className="py-24 px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center bg-cream">
      <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
        <Reveal delay={0.1}>
          <div className="w-[85vw] max-w-[420px] lg:w-full aspect-[3/4] bg-mist relative group">
            {/* Outline box */}
            <div className="absolute top-6 left-6 -right-6 -bottom-6 border-l border-b border-terracotta/30 z-0 transition-transform duration-700 ease-out group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <div className="absolute inset-0 z-10 overflow-hidden bg-blush/20">
              <img src="/isaeva.jpg" alt="Надежда Исаева" className="w-full h-full object-cover object-top filter contrast-[1.05] sepia-[0.1] transition-all duration-1000" />
            </div>
            {/* The NS stamp overlapping */}
            <div className="absolute -top-12 -right-12 w-32 h-32 z-20 opacity-80 mix-blend-multiply drop-shadow-xl pointer-events-none">
              <img src="/logo.png" alt="NS Logo" className="w-full h-full object-contain" />
            </div>
          </div>
        </Reveal>
      </div>
      
      <div className="lg:col-span-1"></div>
      
      <div className="lg:col-span-6 flex flex-col justify-center">
        <Reveal delay={0.2}>
          <div className="inline-flex items-center gap-4 text-[10px] tracking-[0.2em] uppercase text-terracotta font-medium mb-6">
            <span className="w-5 h-px bg-terracotta"></span>
            Автор и ведущая
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
              Моя задача — не научить вас "правильно" стоять на сцене или "красиво" звучать. 
              Моя цель — помочь вам снять социальные маски, которые мешают вашему природному таланту проявляться.
            </p>
            <p className="mb-4 text-[15px] leading-[1.85]">
               Более 11 лет я работаю с голосом, речью и сценическим присутствием. Я видела, как меняются люди, когда позволяют себе наконец сыграть свою главную роль — самих себя.
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
