import { Reveal } from '../ui/Reveal';
import { Stamp } from '../ui/Stamp';

export function CTA() {
  return (
    <section id="join" className="py-32 lg:py-48 px-6 lg:px-16 bg-cream border-t border-mist/50 relative overflow-hidden">
      {/* Background stamp center */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[800px] opacity-[0.03] pointer-events-none z-0 mix-blend-multiply">
        <img src="/logo.png" alt="NS Logo" className="w-full h-full object-contain" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        <Reveal>
          <p className="text-[10px] tracking-[0.2em] uppercase text-terracotta font-medium mb-8 flex items-center gap-4">
            <span className="w-4 h-px bg-terracotta"></span>
            Начать путь
            <span className="w-4 h-px bg-terracotta"></span>
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <h2 className="font-serif text-[clamp(40px,6vw,72px)] font-light leading-[1.1] mb-8 text-ink">
            Ваша лучшая роль —<br />
            <em className="italic text-terracotta">быть собой</em>
          </h2>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="text-[16px] text-ink/70 leading-[1.8] font-light max-w-2xl lg:max-w-3xl mb-12">
            Задайте любые вопросы или забронируйте место на следующий поток. Мы всегда открыты к общению и готовы помочь вам сделать первый шаг навстречу изменениям.
          </p>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-trigger relative inline-flex items-center justify-center px-12 py-5 bg-terracotta text-white text-[11px] tracking-[0.15em] uppercase font-medium overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-ink transform -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
              <span className="relative z-10">Написать в Telegram</span>
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-trigger inline-flex items-center justify-center px-12 py-5 border border-terracotta text-terracotta text-[11px] tracking-[0.15em] uppercase font-medium hover:bg-terracotta hover:text-white transition-colors duration-300"
            >
              Наш Instagram
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
