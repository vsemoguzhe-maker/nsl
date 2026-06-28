import { motion } from 'motion/react';

const items = [
  "АКТЁРСКОЕ МАСТЕРСТВО",
  "ПОСТАНОВКА ГОЛОСА",
  "ПУБЛИЧНАЯ РЕЧЬ",
  "СЦЕНИЧЕСКОЕ ПРИСУТСТВИЕ",
  "СИСТЕМА СТАНИСЛАВСКОГО",
  "СТАРТ 15 ИЮНЯ",
];

export function Marquee() {
  // We duplicate items to create a seamless loop
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="bg-ink py-8 lg:py-12 overflow-hidden flex w-full relative z-10 border-y border-ink">
      {/* Subtle LED/Dot-matrix overlay for that digital billboard feel, but kept elegant */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:8px_8px] opacity-20 pointer-events-none mix-blend-overlay"></div>
      
      {/* Soft gradient edges to blend the infinite scroll */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-ink to-transparent z-20 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-ink to-transparent z-20 pointer-events-none"></div>

      <motion.div
        className="flex gap-8 lg:gap-16 whitespace-nowrap w-max relative z-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: { repeat: Infinity, repeatType: 'loop', duration: 35, ease: 'linear' },
        }}
      >
        {repeatedItems.map((item, i) => (
          <div key={i} className="flex items-center gap-8 lg:gap-16 flex-shrink-0">
            <span 
              className={`font-sans text-5xl md:text-7xl lg:text-[100px] font-black uppercase tracking-tighter leading-none`}
              style={{
                color: i % 2 === 0 ? '#F2EFE9' : 'transparent', // cream
                WebkitTextStroke: i % 2 !== 0 ? '1.5px #F2EFE9' : 'none',
                textShadow: i % 2 === 0 ? '0 0 30px rgba(242, 239, 233, 0.3)' : 'none'
              }}
            >
              {item}
            </span>
            <span className="text-terracotta text-3xl md:text-5xl lg:text-6xl px-4 lg:px-8">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
