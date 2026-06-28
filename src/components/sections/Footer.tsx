export function Footer() {
  return (
    <footer className="bg-ink px-6 lg:px-16 py-16 flex flex-col md:flex-row justify-between items-center gap-10 border-t border-white/5 relative overflow-hidden">
      {/* Subtle stamp in footer */}
      <div className="absolute -right-16 -top-16 lg:-right-32 lg:-top-32 w-64 lg:w-96 opacity-[0.03] pointer-events-none select-none">
        <img src="/logo.png" alt="NS Logo" className="w-full h-full object-contain" />
      </div>

      <div className="flex flex-col items-center md:items-start gap-4 relative z-10">
        <p className="font-serif text-[24px] font-light text-cream tracking-wide flex items-center gap-4">
          <img src="/logo.png" alt="NS Logo" className="w-8 h-8 object-contain" />
          <span>Жизнь <em className="italic text-terracotta pr-1">Игра</em></span>
        </p>
        <p className="font-serif italic text-white/30 text-[13px]">
          Авторская театральная студия Надежды Исаевой
        </p>
        <p className="font-sans text-white/20 text-[11px] tracking-widest mt-1">Методика на основе системы Станиславского</p>
      </div>

      <ul className="flex flex-wrap justify-center gap-6 lg:gap-10 relative z-10">
        <li>
          <a href="#program" className="text-[10px] tracking-[0.15em] uppercase text-white/40 hover:text-terracotta transition-colors font-medium hover-trigger">
            ЖизньИгра.СТАРТ
          </a>
        </li>
        <li>
          <a href="#program" className="text-[10px] tracking-[0.15em] uppercase text-white/40 hover:text-terracotta transition-colors font-medium hover-trigger">
            ЖизньИгра.РЕЧЬ
          </a>
        </li>
        <li>
          <a href="#program" className="text-[10px] tracking-[0.15em] uppercase text-white/40 hover:text-terracotta transition-colors font-medium hover-trigger">
            ЖизньИгра.ПРО
          </a>
        </li>
        <li>
          <a href="https://t.me/NS_talks" target="_blank" rel="noopener noreferrer" className="text-[10px] tracking-[0.15em] uppercase text-white/40 hover:text-terracotta transition-colors font-medium hover-trigger">
            Telegram
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/ns.isaeva?igsh=MTNua2hwcXV3YzY4aQ==" target="_blank" rel="noopener noreferrer" className="text-[10px] tracking-[0.15em] uppercase text-white/40 hover:text-terracotta transition-colors font-medium hover-trigger">
            Instagram
          </a>
        </li>
      </ul>

      <p className="font-serif italic text-[12px] text-white/20 relative z-10">
        © {new Date().getFullYear()} Жизнь Игра
      </p>
    </footer>
  );
}

