import { Reveal } from '../ui/Reveal';
import { motion } from 'motion/react';
import expertPortrait from '../../assets/images/expert.jpg';

const results = [
  { num: '01', title: 'Управление голосом и речью', desc: 'Дикция, темп, тембр, интонация. Голос становится инструментом, а не источником тревоги.' },
  { num: '02', title: 'Свобода в публичном пространстве', desc: 'Выступления, переговоры, новые знакомства — без подготовки, без зажимов, без страха.' },
  { num: '03', title: 'Невербальная убедительность', desc: 'Жест, взгляд, пластика, пауза — всё работает на вас. Тело перестаёт противоречить словам.' },
  { num: '04', title: 'Личный стиль коммуникации', desc: 'Узнаваемый, органичный, запоминающийся. Не роль — ваш собственный способ присутствовать.' },
];

export function Results() {
  return (
    <section id="results" className="py-24 lg:py-48 px-6 lg:px-16 bg-cream overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[50vw] h-[70vh] bg-mist/40 rounded-bl-[200px] pointer-events-none -z-0" />
      <div className="absolute top-[40%] -left-32 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-sand/20 rounded-tr-[400px] rounded-br-[200px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 mb-32 lg:mb-48 relative z-10">
        <Reveal className="flex-1">
          <div>
            <h2 className="font-serif text-[clamp(40px,5vw,72px)] font-light leading-tight lg:leading-[1.1] max-w-2xl">
              Сцена как{' '}
              <br className="hidden lg:block" />
              <em className="italic text-terracotta opacity-90 inline-block my-2 md:my-0 lg:ml-4">тренажёр</em>
              <br />
              для реальности
            </h2>
            <div className="w-32 h-px bg-ink/20 mt-12 md:max-w-none md:absolute md:top-full md:left-48 hidden md:block" />
          </div>
        </Reveal>
        
        <Reveal delay={0.2} className="flex-1 w-full max-w-md lg:max-w-none ml-auto">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <img src={expertPortrait} alt="Сцена" className="w-full h-full object-cover object-center filter grayscale-[10%]" />
            <div className="absolute inset-0 bg-ink/20 mix-blend-multiply"></div>
          </div>
        </Reveal>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 pb-20">
        {results.map((r, i) => {
          let layoutClasses = "";
          let numberClasses = "text-[60px] lg:text-[100px] xl:text-[140px]";
          let textContainerClasses = "";
          
          if (i === 0) {
            layoutClasses = "md:w-1/2 md:pr-12 md:mr-auto mb-16 md:mb-12";
            numberClasses += " md:-ml-8 opacity-40 text-mist";
            textContainerClasses = "md:ml-12";
          } else if (i === 1) {
            layoutClasses = "md:w-1/2 md:pl-24 md:ml-auto mb-16 md:-mt-24";
            numberClasses += " text-terracotta/20 right-0 top-0 absolute -z-10 translate-x-4 md:translate-x-12 -translate-y-12";
            textContainerClasses = "relative z-10 p-8 lg:p-12 bg-white/60 backdrop-blur-md border border-white/40 shadow-xl shadow-ink/[0.02]";
          } else if (i === 2) {
            layoutClasses = "md:w-5/12 mx-auto mb-16 md:mb-16 md:mt-12 ml-12 md:ml-auto";
            numberClasses += " opacity-60 text-sand absolute -left-16 md:-left-24 top-1/2 -translate-y-1/2";
            textContainerClasses = "pl-4 md:pl-16 relative border-l border-terracotta/30 py-4";
          } else {
            layoutClasses = "md:w-1/2 md:mr-auto md:ml-12 pb-8 md:pb-0 md:mt-4";
            numberClasses += " text-mist absolute bottom-0 right-4 md:right-12 translate-y-1/4 opacity-30 mix-blend-multiply";
            textContainerClasses = "relative md:-top-8 z-10";
          }

          return (
            <Reveal key={r.num} delay={i * 0.1}>
              <motion.div 
                whileHover="hover"
                initial="initial"
                className={`relative ${layoutClasses} group`}
              >
                <div className={`font-serif leading-none tracking-tighter transition-colors duration-700 ease-out font-light ${numberClasses}`}>
                  {r.num}
                </div>
                
                {/* Custom floating shapes based on index */}
                {i === 0 && (
                   <div className="absolute top-1/2 right-0 md:-right-8 w-16 h-16 md:w-32 md:h-32 pointer-events-none flex items-center justify-center -translate-y-1/2 overflow-visible">
                     <motion.div
                       variants={{
                         initial: { y: 20, opacity: 0 },
                         hover: { y: 0, opacity: 0.1 }
                       }}
                       transition={{ duration: 1, ease: "backOut" }}
                       className="absolute w-24 h-24 bg-ink rounded-full"
                     />
                     <motion.div
                       variants={{
                         initial: { y: -20, opacity: 0 },
                         hover: { y: 0, opacity: 0.3 }
                       }}
                       transition={{ duration: 1, delay: 0.2, ease: "backOut" }}
                       className="absolute w-24 h-24 border border-terracotta rounded-full translate-x-4 -translate-y-4"
                     />
                   </div>
                 )}
                
                {i === 1 && (
                   <div className="absolute bottom-0 md:-bottom-12 left-0 md:-left-8 pointer-events-none w-full h-[80%] overflow-hidden z-0 rounded-bl-3xl">
                     <motion.div
                       variants={{
                         initial: { y: 100, opacity: 0 },
                         hover: { y: 0, opacity: 1 }
                       }}
                       transition={{ duration: 0.8, ease: "easeOut" }}
                       className="absolute inset-0 bg-mist/50 mix-blend-multiply w-[110%] rounded-tr-[100px] origin-bottom"
                     />
                     <motion.div
                       variants={{
                         initial: { x: -50, opacity: 0 },
                         hover: { x: 0, opacity: 0.2 }
                       }}
                       transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                       className="absolute bottom-0 right-10 w-32 h-32 border-[2px] border-terracotta rounded-full"
                     />
                   </div>
                 )}

                {i === 2 && (
                   <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
                     <motion.div
                       variants={{
                         initial: { scale: 0, opacity: 0, x: 100, y: -100 },
                         hover: { scale: 2, opacity: 0.3, x: 0, y: 0 }
                       }}
                       transition={{ duration: 1.2, ease: "easeOut" }}
                       className="absolute -top-12 -right-12 w-64 h-64 bg-terracotta/20 rounded-full blur-2xl"
                     />
                     <motion.div
                       variants={{
                         initial: { opacity: 0, scale: 0.5 },
                         hover: { opacity: 1, scale: 1 }
                       }}
                       transition={{ duration: 0.5, delay: 0.3 }}
                       className="absolute top-8 right-12 w-3 h-3 bg-terracotta rounded-full shadow-[0_0_15px_rgba(200,90,70,0.5)]"
                     />
                   </div>
                 )}

                {i === 3 && (
                   <div className="absolute top-1/2 left-0 w-16 h-24 md:w-24 md:h-32 pointer-events-none -translate-x-4 -translate-y-1/2 md:-translate-x-24">
                     <motion.div
                       variants={{
                         initial: { scaleY: 0, opacity: 0, y: 50 },
                         hover: { scaleY: 1, opacity: 0.4, y: 0 }
                       }}
                       transition={{ duration: 0.5, ease: "easeOut" }}
                       className="absolute top-0 right-14 w-[3px] h-full bg-terracotta origin-bottom"
                     />
                     <motion.div
                       variants={{
                         initial: { scaleY: 0, opacity: 0, y: -50 },
                         hover: { scaleY: 1, opacity: 0.3, y: 20 }
                       }}
                       transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                       className="absolute top-8 right-10 w-[2px] h-[80%] bg-ink origin-top"
                     />
                     <motion.div
                       variants={{
                         initial: { scale: 0, opacity: 0 },
                         hover: { scale: 1, opacity: 1 }
                       }}
                       transition={{ duration: 0.4, delay: 0.3, type: "spring", stiffness: 300 }}
                       className="absolute top-4 right-12 w-3 h-3 bg-terracotta rounded-full"
                     />
                   </div>
                 )}

                <motion.div 
                  variants={{
                    initial: { y: 0 },
                    hover: { y: -8 }
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className={`${textContainerClasses}`}
                >
                  <h3 className="font-serif text-[28px] lg:text-[36px] font-normal leading-tight mb-4 lg:mb-6">
                    {r.title}
                  </h3>
                  <p className="text-[16px] lg:text-[18px] leading-[1.7] text-ink/80 font-light max-w-sm">
                    {r.desc}
                  </p>
                </motion.div>
              </motion.div>
            </Reveal>
          )
        })}
      </div>
    </section>
  );
}
