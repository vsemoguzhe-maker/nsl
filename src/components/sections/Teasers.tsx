import { useState } from 'react';
import { Reveal } from '../ui/Reveal';
import { Play, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import oneginImage from '../../assets/images/onegin_play_1780058290834.png';
import chekhovImage from '../../assets/images/chekhov_anatomy_1780058309859.png';
import cabaretImage from '../../assets/images/cabaret_play_1780058327172.png';

const teasers = [
  {
    title: '«По следам Онегина»',
    desc: 'Выпускной спектакль',
    image: oneginImage,
    duration: '2:45',
    videoUrl: 'https://www.youtube.com/embed/mZvR8HB5QJU?autoplay=1'
  },
  {
    title: '«Анатомия любви по Чехову»',
    desc: 'Выпускной спектакль',
    image: chekhovImage,
    duration: '1:12',
    videoUrl: 'https://www.youtube.com/embed/Jf1dm_3AJCE?autoplay=1'
  },
  {
    title: '«Кабаре»',
    desc: 'Выпускной спектакль',
    image: cabaretImage,
    duration: 'Скоро',
    videoUrl: '' 
  }
];

export function Teasers() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="performances" className="py-24 lg:py-36 px-6 lg:px-16 bg-ink text-cream relative overflow-hidden">
      {/* Asymmetrical background accents */}
      <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 -right-32 w-96 h-96 bg-terracotta/10 rounded-full blur-[100px] pointer-events-none" 
      />
      <motion.div 
          animate={{ x: [0, -40, 0], y: [0, 60, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -left-32 w-80 h-80 bg-blush/5 rounded-full blur-[80px] pointer-events-none" 
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 lg:mb-24 gap-8">
          <Reveal>
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-terracotta font-medium mb-6">
                Результаты работы
              </p>
              <h2 className="font-serif text-[clamp(40px,5vw,60px)] font-light leading-[1.1]">
                Выпускные <em className="italic text-terracotta pr-2">спектакли</em>
              </h2>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <p className="text-[15px] leading-[1.8] text-white/50 font-light max-w-sm md:text-right">
              Финальное выступление — обязательная часть каждой программы. Смотрите, как участники выходят на сцену после курса.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {teasers.map((teaser, i) => (
            <Reveal key={teaser.title} delay={0.1 * (i + 1)}>
              <motion.div 
                initial="initial"
                whileHover="hover"
                className={`group cursor-pointer ${i === 1 ? 'md:mt-16' : i === 2 ? 'lg:mt-32' : ''}`}
                onClick={() => teaser.videoUrl && setSelectedVideo(teaser.videoUrl)}
              >
                <div className="relative aspect-video bg-mist overflow-hidden mb-6 z-10">
                  {/* Image Background */}
                  <motion.img 
                    variants={{
                        initial: { scale: 1 },
                        hover: { scale: 1.05 }
                    }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    src={teaser.image} 
                    alt={teaser.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter contrast-[1.1] opacity-60"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />
                  
                  {/* Minimalist Border on Hover */}
                  <div className="absolute inset-4 border border-cream/0 group-hover:border-cream/20 transition-all duration-700 pointer-events-none z-20" />

                  {/* Play Button */}
                  {teaser.videoUrl && (
                    <div className="absolute inset-x-0 inset-y-0 flex items-center justify-center z-20">
                      <motion.div 
                        variants={{
                            initial: { scale: 1, opacity: 0.8 },
                            hover: { scale: 1.1, opacity: 1 }
                        }}
                        className="w-20 h-20 rounded-full border border-white/20 flex flex-col items-center justify-center transition-all duration-500 overflow-hidden bg-ink/30 backdrop-blur-sm"
                      >
                        <Play className="w-6 h-6 ml-1 text-white border-none" fill="currentColor" />
                      </motion.div>
                    </div>
                  )}

                  {/* Duration Badge */}
                  <motion.div 
                      variants={{ initial: { y: 20, opacity: 0 }, hover: { y: 0, opacity: 1 } }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="absolute bottom-4 right-4 bg-ink/80 backdrop-blur-sm px-3 py-1 rounded text-xs font-mono text-cream border border-terracotta z-20 shadow-lg"
                  >
                    {teaser.duration}
                  </motion.div>
                </div>

                <div>
                  <h3 className="font-serif text-2xl lg:text-3xl font-light mb-2 group-hover:text-terracotta transition-colors duration-300">
                    {teaser.title}
                  </h3>
                  <div className="inline-block relative">
                    <p className="text-[14px] text-white/50 font-light uppercase tracking-widest relative z-10">
                      {teaser.desc}
                    </p>
                    <motion.span 
                        variants={{ initial: { scaleX: 0 }, hover: { scaleX: 1 } }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="absolute -bottom-1 left-0 h-[1px] bg-terracotta/50 w-full origin-left"
                    />
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Placeholder for Video Reviews */}
        <Reveal delay={0.3}>
          <div className="mt-24 lg:mt-32 border border-white/10 p-8 lg:p-12 text-center flex flex-col items-center bg-white/[0.02]">
            <p className="text-[12px] tracking-[0.2em] uppercase text-white/50 mb-4">
              Отзывы участников курса
            </p>
            <h3 className="font-serif text-2xl lg:text-3xl font-light mb-6">
              Видеоотзывы выпускников появятся здесь в ближайшее время
            </h3>
            <div className="w-full max-w-sm h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
        </Reveal>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 backdrop-blur-md p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-8 right-8 text-cream hover:text-terracotta transition-colors z-10"
            >
              <X size={40} strokeWidth={1} />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl aspect-video bg-ink rounded-lg overflow-hidden border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={selectedVideo}
                allow="autoplay; encrypted-media; fullscreen"
                className="w-full h-full border-0"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
