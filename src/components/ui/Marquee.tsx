import { motion } from 'motion/react';

const items = [
  "Уверенность в себе",
  "Свобода в общении",
  "Харизма в публичном пространстве",
  "Природные таланты — в жизнь",
];

export function Marquee() {
  // We duplicate items to create a seamless loop
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="bg-terracotta py-5 overflow-hidden flex w-full relative border-y border-ink/10">
      <motion.div
        className="flex gap-16 whitespace-nowrap px-8"
        animate={{
          x: [0, -1035], // Approximate width of one full set, adapt if needed
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 25,
            ease: 'linear',
          },
        }}
      >
        {repeatedItems.map((item, i) => (
          <div key={i} className="flex items-center gap-16 flex-shrink-0">
            <span className="font-serif italic text-xl text-white/90 tracking-wide">
              {item}
            </span>
            <span className="w-1.5 h-1.5 bg-white/40 rounded-full"></span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
