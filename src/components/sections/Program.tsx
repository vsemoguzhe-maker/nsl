import { Reveal } from '../ui/Reveal';
import { motion } from 'motion/react';

const programSteps = [
  { step: 'Этап I', title: 'Основы сценического присутствия', desc: 'Работа с внутренней опорой и телесными зажимами. Формирование уверенного публичного состояния через актёрские упражнения.' },
  { step: 'Этап II', title: 'Вербальное и невербальное', desc: 'Изучаем, как жест, мимика и пластика усиливают или опровергают слово. Практика синхронизации тела и речи.' },
  { step: 'Этап III', title: 'Управление вниманием аудитории', desc: 'Техники удержания контакта со слушателем. Работа с паузой, взглядом и пространством как инструментами влияния.' },
  { step: 'Этап IV', title: 'Эмоциональный интеллект на сцене', desc: 'Учимся экологично проживать и управлять эмоциями в публичном пространстве. Этюды, импровизация, разбор.' },
];

export function Program() {
  return (
    <section id="program" className="py-32 lg:py-48 px-6 lg:px-16 bg-warm-white relative overflow-hidden">
      {/* Asymmetrical background accents */}
      <div className="absolute top-0 right-0 w-[40vw] h-[60vh] bg-sand/30 rounded-bl-[300px] blur-3xl opacity-60 mix-blend-multiply pointer-events-none" />
      <div className="absolute top-[30%] -left-64 w-[800px] h-[800px] bg-terracotta/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -right-48 w-[40rem] h-[50rem] bg-blush/30 rounded-tl-[400px] blur-3xl mix-blend-multiply pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <Reveal>
          <div className="mb-32 lg:mb-48 md:ml-24 max-w-2xl relative">
            <h2 className="font-serif text-[clamp(40px,6vw,72px)] font-light leading-[1.05] relative z-10">
               Структура <br />
               <em className="italic text-terracotta relative -left-8 md:-left-16 inline-block mt-4 opacity-90">программы</em>
            </h2>
            <div className="absolute -top-12 -left-12 text-[120px] lg:text-[200px] font-serif font-light text-ink/[0.03] pointer-events-none z-0">
               Программа
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-16 lg:mt-24 border-t border-l border-mist/50">
          {programSteps.map((item, i) => {
             return (
               <Reveal key={i} delay={i * 0.1}>
                 <motion.div 
                   whileHover="hover"
                   initial="initial"
                   className="relative h-full border-r border-b border-mist/50 p-8 lg:p-12 bg-warm-white hover:bg-mist/10 transition-colors duration-500 group"
                 >                   
                   <div className="relative z-10 h-full">
                     
                     {/* Thematic Interactive Visuals */}
                     {i === 0 && (
                       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none rounded-xl">
                         <motion.div
                           variants={{
                             initial: { scale: 1, rotate: 0, opacity: 0.1 },
                             hover: { scale: 1.15, rotate: -5, opacity: 0.25 }
                           }}
                           transition={{ duration: 0.8, ease: "easeOut" }}
                           className="absolute -right-12 bottom-0 w-64 h-64 bg-[#7A1D2F] rounded-tl-[80px] rounded-br-[20px] rounded-tr-[20px] rounded-bl-[20px] mix-blend-multiply"
                         />
                         <motion.div
                           variants={{
                             initial: { scale: 1, x: 0, opacity: 0.2 },
                             hover: { scale: 1.1, x: -10, opacity: 0.4 }
                           }}
                           transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                           className="absolute right-12 bottom-16 w-32 h-32 border-[2px] border-[#7A1D2F] rounded-full"
                         />
                       </div>
                     )}
                     
                     {i === 1 && (
                       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none rounded-xl">
                         <div className="absolute top-8 right-12 w-48 h-48">
                           {/* Dark shape */}
                           <motion.div
                             variants={{
                               initial: { scale: 1, borderRadius: "20px", rotate: 45, opacity: 0.05 },
                               hover: { scale: 1.1, borderRadius: "50px", rotate: 30, opacity: 0.15 }
                             }}
                             transition={{ duration: 0.8, ease: "easeOut" }}
                             className="absolute top-0 right-0 w-32 h-32 bg-[#0B2321] origin-center mix-blend-multiply"
                           />
                           {/* Circle Outline */}
                           <motion.div
                             variants={{
                               initial: { scale: 1, x: 0, y: 0, opacity: 0.2 },
                               hover: { scale: 0.9, x: -10, y: 10, opacity: 0.4 }
                             }}
                             transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                             className="absolute bottom-0 left-0 w-28 h-28 border-[2px] border-[#7A1D2F] rounded-full"
                           />
                         </div>
                       </div>
                     )}

                     {i === 2 && (
                       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none rounded-xl">
                         <motion.div 
                           variants={{
                             initial: { scale: 1, rotate: 0, opacity: 0.3 },
                             hover: { scale: 1.15, rotate: 45, opacity: 0.8 }
                           }}
                           transition={{ duration: 1.2, ease: "easeOut" }}
                           className="absolute -right-8 top-12 w-48 h-48"
                         >
                           {/* Dotted circle */}
                           <div className="absolute inset-0 flex items-center justify-center -translate-y-6">
                              {[...Array(12)].map((_, index) => (
                                <div 
                                  key={index}
                                  className="absolute w-3 h-3 bg-[#7A1D2F] rounded-full"
                                  style={{
                                    transform: `rotate(${index * 30}deg) translateY(-40px)`
                                  }}
                                />
                              ))}
                           </div>
                           {/* Outline arc */}
                           <div className="absolute inset-[-10px] w-[calc(100%+20px)] h-[calc(100%+20px)] border-[1px] border-[#7A1D2F] rounded-full clip-half" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }} />
                         </motion.div>
                       </div>
                     )}

                     {i === 3 && (
                       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none rounded-xl">
                         <motion.div
                           variants={{
                             initial: { scale: 1, opacity: 0.2, x: 0, y: 0 },
                             hover: { scale: 1.3, opacity: 0.4, x: 20, y: -20 }
                           }}
                           transition={{ duration: 1.2, ease: "easeOut" }}
                           className="absolute -right-20 -bottom-20 w-[120%] h-[120%] bg-gradient-to-tr from-[#7A1D2F] via-[#0B2321] to-transparent rounded-full mix-blend-multiply filter blur-3xl"
                         />
                       </div>
                     )}

                     <div className="relative z-10">
                       <p className="font-sans text-[10px] uppercase tracking-widest text-terracotta mb-6">{item.step}</p>
                       <h3 className="font-serif text-[28px] lg:text-[32px] mb-4 leading-tight">{item.title}</h3>
                       <p className="text-[16px] text-ink/75 font-light leading-relaxed">{item.desc}</p>
                     </div>
                   </div>
                 </motion.div>
               </Reveal>
             )
          })}
        </div>
      </div>
    </section>
  );
}
