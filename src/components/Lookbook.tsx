import { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import { X, Maximize2 } from 'lucide-react';

interface ImgDef { src: string; caption: string; style: 'wide' | 'tall' | 'square'; }

const IMAGES: ImgDef[] = [
  { src: '/aidonia-lb-5.jpg', caption: 'On Stage • Live', style: 'wide' },
  { src: '/aidonia-lb-1.jpg', caption: 'Backstage • The Look', style: 'tall' },
  { src: '/aidonia-lb-6.jpg', caption: 'Dressing Room • London', style: 'tall' },
  { src: '/aidonia-lb-4.jpg', caption: 'Studio Session', style: 'tall' },
  { src: '/aidonia-lb-2.jpg', caption: 'The Bar • Off-duty', style: 'tall' },
  { src: '/aidonia-lb-3.jpg', caption: 'The Detail • 4th Genna', style: 'square' },
];

function GalleryItem({ img, idx, onClick }: { img: ImgDef; idx: number; onClick: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(useSpring(y), [-0.5, 0.5], ['7deg', '-7deg']);
  const rotateY = useTransform(useSpring(x), [-0.5, 0.5], ['-7deg', '7deg']);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.08, duration: 0.6 }}
      onMouseMove={(e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      onClick={onClick}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={`relative group overflow-hidden border border-brand-gold/10 bg-neutral-900 cursor-pointer shadow-2xl hover:border-brand-gold/40 transition-colors duration-500 ${
        img.style === 'wide' ? 'aspect-[16/9]' : img.style === 'tall' ? 'aspect-[3/4]' : 'aspect-square'
      }`}
    >
      <div style={{ transform: 'translateZ(30px)' }} className="absolute inset-0">
        <img
          src={img.src}
          alt={img.caption}
          className="w-full h-full object-cover object-top grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
        />
      </div>
      <div
        style={{ transform: 'translateZ(60px)' }}
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 z-10"
      >
        <p className="font-sans text-sm font-light text-brand-gold mb-3">{img.caption}</p>
        <div className="w-10 h-10 rounded-full border border-brand-gold/20 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all">
          <Maximize2 size={16} />
        </div>
      </div>
      <div
        style={{ transform: 'translateZ(80px)' }}
        className="absolute top-0 right-0 w-10 h-10 border-t border-r border-brand-gold/20 group-hover:border-brand-gold transition-colors z-20"
      />
    </motion.div>
  );
}

export default function Lookbook() {
  const [selected, setSelected] = useState<ImgDef | null>(null);

  return (
    <section id="lookbook" className="py-32 px-6 perspective-1000">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-brand-gold font-sans font-bold uppercase tracking-[0.4em] text-[10px] mb-4">Visual Identity</p>
            <h3 className="font-sans text-5xl md:text-7xl font-black uppercase leading-none">The Lookbook</h3>
          </div>
          <p className="text-[10px] font-bold tracking-[0.4em] text-white/20 uppercase">
            Est. 4th Genna Records · {IMAGES.length} Frames
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {IMAGES.map((img, idx) => (
            <div key={idx} className={idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''}>
              <GalleryItem img={img} idx={idx} onClick={() => setSelected(img)} />
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12"
            onClick={() => setSelected(null)}
          >
            <button className="absolute top-6 right-6 text-white/50 hover:text-brand-gold transition-colors p-2" onClick={() => setSelected(null)}>
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className="max-w-3xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.src}
                alt={selected.caption}
                className="max-w-full max-h-[72vh] object-contain border border-brand-gold/20"
              />
              <div className="mt-6 text-center">
                <p className="font-sans font-light text-brand-gold text-lg">{selected.caption}</p>
                <div className="h-[1px] w-20 bg-brand-gold/30 mx-auto mt-3" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
