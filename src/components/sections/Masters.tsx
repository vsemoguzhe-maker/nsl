import { Reveal } from '../ui/Reveal';
import { motion } from 'motion/react';

const masters = [
  {
    name: 'Надежда Игнатьева',
    role: 'Вокальное искусство · Музыкальный руководитель',
    image: '/ignatyeva.jpg',
    desc: 'Раскрывает природное звучание голоса. Помогает убрать горловые зажимы, научиться дышать диафрагмой и сделать голос объёмным, глубоким и убедительным. С ней вы полюбите то, как вы звучите.'
  },
  {
    name: 'Диана Желтаногова',
    role: 'Речь и коммуникация',
    image: '/diana.jpg',
    desc: 'Научит доносить смыслы точно и уверенно. Структурирование речи, логика, дикция и умение держать паузу. Под её руководством вы научитесь управлять вниманием зала только с помощью слов.'
  },
  {
    name: 'Андрей Калеев',
    role: 'Речь · Актёрское мастерство',
    image: '/kaleev.jpg',
    desc: 'Мастер телесного и эмоционального раскрепощения. Энергия, пластика, снятие физических блоков. Через актёрские этюды и импровизацию помогает найти свободу движения.'
  },
];

export function Masters() {
  return (
    <section id="masters" className="py-24 lg:py-36 px-6 lg:px-16 bg-cream border-t border-mist/50">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="flex flex-col items-center mb-24 relative">
            <p className="text-[10px] tracking-[0.2em] uppercase text-terracotta font-medium mb-6 relative z-10">
              Практики с опытом сцены и преподавания
            </p>
            <h2 className="font-serif text-[clamp(40px,5vw,60px)] font-light leading-[1.1] text-center relative z-10">
              Мастера <em className="italic text-terracotta pr-2">курса</em>
            </h2>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sand/30 rounded-full blur-3xl pointer-events-none" />
          </div>
        </Reveal>

        <div className="space-y-24 lg:space-y-32">
          {masters.map((master, i) => (
            <Reveal key={master.name} delay={0.1}>
              <motion.div 
                initial="initial"
                whileHover="hover"
                className={`flex flex-col md:flex-row gap-10 lg:gap-20 items-center group ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="w-full md:w-5/12">
                  <div className="w-[85vw] max-w-[360px] lg:w-full aspect-[3/4] mx-auto relative cursor-pointer border border-mist hover:border-terracotta/40 p-2 transition-colors duration-500 bg-white">
                    <div className="relative w-full h-full overflow-hidden z-10 bg-mist/20">
                      <motion.img 
                        variants={{
                          initial: { scale: 1, filter: "grayscale(30%) sepia(10%) contrast(1.05)" },
                          hover: { scale: 1.02, filter: "grayscale(0%) sepia(0%) contrast(1.05)" }
                        }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        src={master.image} 
                        alt={master.name} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-7/12 flex flex-col items-center md:items-start text-center md:text-left">
                  <motion.div
                    variants={{
                      initial: { x: 0 },
                      hover: { x: i % 2 !== 0 ? -10 : 10 }
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <h3 className="font-serif text-3xl lg:text-4xl font-light text-ink mb-2">{master.name}</h3>
                    <p className="text-[11px] tracking-[0.1em] uppercase text-terracotta mb-8 font-medium">
                      {master.role}
                    </p>
                    <div className="w-12 h-px bg-mist mb-8 transition-colors duration-500 group-hover:bg-terracotta mx-auto md:mx-0" />
                    <p className="text-[16px] leading-[1.85] text-ink/70 font-light max-w-lg">
                      {master.desc}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
