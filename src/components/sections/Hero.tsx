import { motion } from 'motion/react';
import { Stamp } from '../ui/Stamp';

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col lg:grid lg:grid-cols-12 relative overflow-hidden bg-cream border-b border-mist/50">
      {/* Decorative vertical lines for magazine grid feel */}
      <div className="hidden lg:block absolute top-0 bottom-0 left-1/4 w-px bg-mist/20 z-0"></div>
      <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-px bg-mist/20 z-0"></div>
      <div className="hidden lg:block absolute top-0 bottom-0 right-1/4 w-px bg-mist/20 z-0"></div>

      {/* Stamp / Logo Float */}
      <motion.div 
        className="absolute top-32 left-6 lg:left-12 z-20 w-24 h-24 hidden md:block opacity-40 mix-blend-multiply"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <img src="/logo.png" alt="NS Logo" className="w-full h-full object-contain" />
      </motion.div>

      {/* Left Column */}
      <div className="lg:col-span-6 flex flex-col justify-end px-6 pt-32 pb-16 lg:px-16 lg:pb-24 lg:pt-48 relative z-10 bg-cream">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-terracotta font-medium mb-6 flex items-center gap-4"
        >
          <span className="w-8 h-px bg-terracotta"></span>
          Авторский курс актёрского мастерства и публичной речи
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[clamp(52px,8vw,110px)] font-light leading-[0.9] tracking-tight mb-8"
        >
          Жизнь<br />
          <em className="italic text-terracotta pr-4">Игра</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="text-[15px] leading-relaxed text-ink/70 max-w-[380px] font-light mb-12 text-balance"
        >
          Методика на основе театральных техник и алгоритмов ораторского искусства — для тех, кто хочет говорить убедительно и оставаться собой.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          <a
            href="#program"
            className="hover-trigger relative inline-flex items-center justify-center px-10 py-5 bg-terracotta text-white text-[11px] tracking-[0.15em] uppercase font-medium overflow-hidden group"
          >
            <span className="absolute inset-0 w-full h-full bg-ink transform -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
            <span className="relative z-10 flex items-center gap-2">
              Узнать о программе
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
            {/* Corner creative cuts */}
            <span className="absolute top-0 right-0 w-3 h-3 bg-cream transform translate-x-1.5 -translate-y-1.5 rotate-45 z-20"></span>
            <span className="absolute bottom-0 left-0 w-3 h-3 bg-cream transform -translate-x-1.5 translate-y-1.5 rotate-45 z-20"></span>
          </a>
          <div className="flex flex-col">
            <p className="text-[12px] text-ink/50 tracking-[0.05em] italic font-serif">
              Старт — 15 июня
            </p>
            <p className="text-[11px] text-ink/40 tracking-[0.05em] font-sans mt-2">Более 200 выпускников · Очный формат · Старт 15 июня</p>
          </div>
        </motion.div>
      </div>

      {/* Right Column / Visual */}
      <div className="lg:col-span-6 relative min-h-[50vh] lg:min-h-screen bg-ink overflow-hidden border-l border-mist/30">
        <div className="absolute inset-0">
          <img src="/isaeva_hero.jpg" alt="Надежда Исаева" className="w-full h-full object-cover object-center opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-ink/40" />
        </div>

        <div className="absolute top-10 right-10 font-serif text-[180px] font-light text-white/10 leading-none select-none z-10">
          01
        </div>

        <motion.blockquote
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 1.5, ease: "easeOut" }}
          className="absolute bottom-10 lg:bottom-16 left-6 lg:left-12 right-6 lg:right-12 font-serif italic text-[clamp(24px,3vw,38px)] font-light text-blush tracking-tight leading-[1.3] z-10"
        >
          «Когда человек позволяет<br />себе играть — он впервые<br />становится настоящим»
          <span className="block mt-6 font-sans not-italic text-[11px] tracking-[0.15em] uppercase text-terracotta font-medium">
            Надежда Исаева
          </span>
        </motion.blockquote>
      </div>
    </section>
  );
}
