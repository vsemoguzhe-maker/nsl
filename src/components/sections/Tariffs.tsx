import { Reveal } from '../ui/Reveal';
import actingPathImage from '../../assets/images/acting_path_start_1780057959578.png';
import { useState } from 'react';
import { ContactModal } from '../ui/ContactModal';

export function Tariffs() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="tariffs" className="py-24 lg:py-36 px-6 lg:px-16 bg-cream border-t border-mist/50">
      <Reveal>
        <h2 className="font-serif text-[clamp(40px,5vw,60px)] font-light text-center mb-16 text-ink/90">
          Программа <em className="italic text-terracotta">ЖизньИгра.СТАРТ</em>
        </h2>
      </Reveal>
      
      <div className="max-w-5xl mx-auto">
        <Reveal delay={0.2}>
          <div className="bg-warm-white border border-mist/40 flex flex-col md:flex-row group">
            {/* Image Box */}
            <div className="w-full md:w-[45%] lg:w-1/2 overflow-hidden group-hover:opacity-90 transition-all duration-700 relative bg-ink">
              <div className="absolute inset-0 bg-ink/10 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-700" />
              <img 
                src={actingPathImage} 
                alt="Жизнь Игра.Старт" 
                className="w-full h-full object-cover min-h-[400px] md:min-h-full group-hover:scale-[1.03] transition-transform duration-1000 opacity-90" 
              />
            </div>
            
            {/* Content Box */}
            <div className="w-full md:w-[55%] lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="mb-8">
                 <p className="text-[10px] tracking-[0.2em] uppercase text-terracotta font-medium mb-4">
                  Набор открыт
                </p>
                <h3 className="font-serif text-3xl md:text-4xl font-light text-ink mb-4 leading-tight">
                  Базовый курс актёрского мастерства
                </h3>
                <p className="text-ink/70 font-light leading-relaxed">
                  Четыре модуля очных занятий для тех, кто начинает работу с публичностью. Малая группа — индивидуальный подход к каждому участнику.
                </p>
              </div>
              
              <div className="w-12 h-px bg-terracotta/30 mb-8" />
              
              <ul className="mb-12 space-y-4">
                {[
                  '4 очных занятия · малая группа до 12 человек',
                  'Видеозапись каждого занятия для самостоятельного разбора',
                  'Разбор домашних заданий от куратора',
                  'Доступ к закрытому чату участников',
                  'Сертификат об окончании курса',
                ].map((f, j) => (
                  <li key={j} className="text-[14px] md:text-[15px] text-ink/80 font-light flex items-start gap-4 leading-relaxed">
                    <span className="w-1.5 h-1.5 bg-terracotta rounded-full shrink-0 mt-2" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto">
                <p className="font-serif text-3xl font-light mb-2 text-ink">
                  25 000 ₽
                </p>
                <p className="text-[12px] text-ink/40 font-serif italic mb-8">Возможна рассрочка · Очный формат, Москва</p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-block px-10 py-5 bg-terracotta text-white text-[11px] tracking-[0.15em] uppercase font-medium hover:bg-ink transition-colors duration-300 text-center w-full sm:w-auto"
                >
                  Записаться на консультацию
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
