import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'О курсе', href: '#about' },
    { name: 'Программы', href: '#program' },
    { name: 'Спектакли', href: '#performances' },
    { name: 'Мастера', href: '#masters' },
    { name: 'Контакты', href: '#join' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-16 py-4 md:py-6 transition-all duration-500 ${
          scrolled ? 'bg-cream/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <a href="#" className="font-serif text-lg md:text-xl font-light tracking-wider text-ink hover-trigger">
          Жизнь <em className="italic text-terracotta">Игра</em>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-[11px] tracking-[0.15em] uppercase font-medium text-ink relative group hover-trigger"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-terracotta origin-right transform scale-x-0 transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-ink hover-trigger"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Menu"
        >
          <Menu strokeWidth={1.5} size={28} />
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 z-[100] bg-cream flex flex-col items-center justify-center gap-8"
          >
            <button
              className="absolute top-6 right-6 text-ink hover-trigger"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X strokeWidth={1.5} size={32} />
            </button>
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.2 }}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-3xl font-light text-ink hover:text-terracotta transition-colors hover-trigger"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#join"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 bg-terracotta text-white px-8 py-4 text-xs tracking-widest uppercase font-medium hover:bg-ink transition-colors hover-trigger"
            >
              Записаться
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
