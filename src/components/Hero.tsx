import { motion } from 'motion/react';

export default function Hero({ onEyeDonia }: { onEyeDonia?: () => void }) {
  return (
    <section
      id="home"
      className="relative h-full w-full overflow-hidden flex items-end p-8 md:p-16 bg-brand-black"
    >
      {/* Stage background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/aidonia-hero-1.jpg"
          alt="Aidonia on stage"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-brand-black/50 to-brand-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />
      </div>

      {/* Gold dust particles */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-brand-gold/50 rounded-full"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
            }}
            animate={{
              y: [null, '-24px'],
              opacity: [0, 0.7, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 6,
            }}
          />
        ))}
      </div>

      {/* Text content */}
      <div className="relative z-10 text-left w-full max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-brand-gold tracking-[0.8em] font-sans font-bold text-[9px] uppercase mb-6"
        >
          A 4th Genna Experience
        </motion.p>

        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="font-sans text-7xl md:text-9xl font-black tracking-tighter uppercase leading-none"
          >
            AIDONIA
          </motion.h1>
        </div>

        <div className="overflow-hidden mb-8">
          <motion.p
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="font-sans text-2xl md:text-4xl font-light tracking-widest uppercase"
            style={{
              background: 'linear-gradient(90deg, #D4A017, #F0B429, #D4A017)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundSize: '200% auto',
            }}
          >
            4th Genna
          </motion.p>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.7, ease: 'circOut' }}
          className="h-[1px] bg-brand-gold/40 w-full origin-left mb-10"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#frsh-drop"
            className="px-10 py-4 bg-brand-gold text-brand-black font-sans font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors duration-500"
          >
            Frsh Drop
          </a>
          <button
            onClick={onEyeDonia}
            className="px-10 py-4 border border-white/20 text-white font-sans font-bold uppercase tracking-widest text-sm hover:border-brand-gold hover:text-brand-gold transition-all duration-300"
          >
            Eye-donia
          </button>
        </motion.div>
      </div>

      {/* Decorative rings */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-brand-gold/10 rounded-full z-0 pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/3 w-16 h-16 border border-brand-gold/15 rotate-45 z-0 pointer-events-none" />
    </section>
  );
}
