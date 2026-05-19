import { motion } from 'motion/react';
import { Reveal } from './Reveal';

export function Divider({ text }: { text: string }) {
  return (
    <Reveal delay={0.1}>
      <div className="flex flex-col items-center justify-center w-full py-12 lg:py-24 px-6 opacity-60">
        <div className="w-full max-w-4xl flex items-center justify-center relative">
          <div className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-mist to-transparent"></div>
          <div className="relative z-10 bg-warm-white px-8 font-serif italic text-[15px] tracking-wide text-ink/50">
            {text}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
