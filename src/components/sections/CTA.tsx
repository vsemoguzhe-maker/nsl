import { Reveal } from '../ui/Reveal';
import { Stamp } from '../ui/Stamp';
import { useState } from 'react';
import { ContactModal } from '../ui/ContactModal';

export function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            Записаться
            <span className="w-4 h-px bg-terracotta"></span>
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <h2 className="font-serif text-[clamp(40px,6vw,72px)] font-light leading-[1.1] mb-8 text-ink">
            Ваш следующий шаг —<br />
            <em className="italic text-terracotta">первое занятие</em>
          </h2>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="text-[16px] text-ink/70 leading-[1.8] font-light max-w-2xl lg:max-w-3xl mb-12">
            Группы не более 12 человек — для глубокой работы с каждым участником. Задайте вопрос или забронируйте место на следующий поток.
          </p>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="flex flex-col gap-2 mb-10 text-[13px] text-ink/50 font-light">
            <span>✓ Очный формат, Москва</span>
            <span>✓ Сертификат по окончании</span>
            <span>✓ Возможна рассрочка</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center flex-wrap">
            <button
              onClick={() => setIsModalOpen(true)}
              className="hover-trigger relative inline-flex items-center justify-center px-12 py-5 bg-terracotta text-white text-[11px] tracking-[0.15em] uppercase font-medium overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-ink transform -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
              <span className="relative z-10">Записаться на консультацию</span>
            </button>
            <a
              href="https://t.me/NS_talks"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-trigger inline-flex items-center justify-center px-12 py-5 border border-terracotta text-terracotta text-[11px] tracking-[0.15em] uppercase font-medium hover:bg-terracotta hover:text-white transition-colors duration-300"
            >
              Наш Telegram
            </a>
            <a
              href="https://www.instagram.com/ns.isaeva?igsh=MTNua2hwcXV3YzY4aQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover-trigger inline-flex items-center justify-center px-12 py-5 border border-terracotta text-terracotta text-[11px] tracking-[0.15em] uppercase font-medium hover:bg-terracotta hover:text-white transition-colors duration-300"
            >
              Наш Instagram
            </a>
          </div>
        </Reveal>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
