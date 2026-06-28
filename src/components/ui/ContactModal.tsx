import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send');
      }

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setName('');
        setPhone('');
        onClose();
      }, 3000);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'Произошла ошибка при отправке. Пожалуйста, попробуйте позже.');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-ink/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: '-50%', x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
            className="fixed top-1/2 left-1/2 w-full max-w-md bg-cream p-8 md:p-12 z-50 border border-mist shadow-2xl flex flex-col"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-ink/50 hover:text-terracotta transition-colors"
            >
              <X className="w-6 h-6" strokeWidth={1} />
            </button>

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-terracotta text-2xl">✓</span>
                </div>
                <h3 className="font-serif text-2xl text-ink mb-4">Спасибо за заявку!</h3>
                <p className="text-ink/70 font-light">
                  Мы свяжемся с вами в ближайшее время для проведения консультации.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-terracotta font-medium mb-4">
                    Первый шаг
                  </p>
                  <h3 className="font-serif text-3xl font-light text-ink mb-2">
                    Запись на консультацию
                  </h3>
                  <p className="text-[14px] text-ink/70 font-light">
                    Оставьте ваши данные, и мы свяжемся с вами для уточнения деталей.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[11px] tracking-[0.1em] uppercase text-ink/70 font-medium">
                      Имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-transparent border-b border-ink/20 py-3 text-ink font-light focus:outline-none focus:border-terracotta transition-colors rounded-none placeholder:text-ink/30"
                      placeholder="Ваше имя"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-[11px] tracking-[0.1em] uppercase text-ink/70 font-medium">
                      Контактный телефон
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-transparent border-b border-ink/20 py-3 text-ink font-light focus:outline-none focus:border-terracotta transition-colors rounded-none placeholder:text-ink/30"
                      placeholder="+7 (999) 000-00-00"
                    />
                  </div>

                  {error && (
                    <div className="text-terracotta text-sm text-center">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="mt-4 w-full bg-terracotta text-white py-5 text-[11px] tracking-[0.15em] uppercase font-medium hover:bg-ink transition-colors duration-300"
                  >
                    Отправить заявку
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
