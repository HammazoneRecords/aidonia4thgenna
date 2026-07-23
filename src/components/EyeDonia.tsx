import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import PreOrderCapture from './PreOrderCapture';

interface EyeDoniaProps {
  onBack: () => void;
}

const FRAMES = [
  {
    productId: 'eyedonia-the-4th',
    name: 'The 4th',
    frame: 'Matte Black Oversized Square',
    lens: 'Dark Smoked',
    vibe: 'Classic. The hero frame.',
    tag: 'SIGNATURE',
    image: '/eyedonia-the-4th.png',
  },
  {
    productId: 'eyedonia-the-don',
    name: 'The Don',
    frame: 'Gold Metal Thin Frame',
    lens: 'Amber Gradient',
    vibe: 'Vintage Kingston power.',
    tag: 'BESTSELLER',
    image: '/eyedonia-the-don.png',
  },
  {
    productId: 'eyedonia-the-shell',
    name: 'The Shell',
    frame: 'Tortoiseshell Acetate',
    lens: 'Smoked Grey',
    vibe: 'Street to boardroom.',
    tag: 'NEW',
    image: '/eyedonia-the-shell.png',
  },
  {
    productId: 'eyedonia-the-clear',
    name: 'The Clear',
    frame: 'Matte Black + Clear Lens',
    lens: 'UV Clear',
    vibe: 'Indoor / outdoor crossover.',
    tag: 'COMING SOON',
    image: '/eyedonia-the-clear.png',
  },
];

export default function EyeDonia({ onBack }: EyeDoniaProps) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-brand-black text-white overflow-x-hidden">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-10 py-5 bg-brand-black/80 backdrop-blur-xl">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-sans uppercase tracking-widest text-white/50 hover:text-brand-gold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Site
        </button>
        <div className="font-sans text-lg font-black tracking-tighter">
          <span className="text-brand-gold">Eye</span>-donia
        </div>
        <div className="w-24" />
      </nav>

      {/* Hero — collapsed to spacer only */}
      <header className="relative pt-12 pb-0 md:pt-16 md:pb-0 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1000] via-brand-black to-brand-black" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />
      </header>

      {/* Tagline strip */}
      <div className="border-y border-white/5 py-5 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-6 text-xs font-sans uppercase tracking-widest text-white/30">
          <span>"See different."</span>
          <span className="text-brand-gold/40">·</span>
          <span>"The view from the top."</span>
          <span className="text-brand-gold/40">·</span>
          <span>"4th Genna Vision."</span>
        </div>
      </div>

      {/* Frames */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <h2 className="text-4xl md:text-6xl font-sans font-black uppercase leading-none">
              The <span className="text-brand-gold">Collection</span>
            </h2>
            <p className="text-white/30 font-sans text-xs uppercase tracking-widest max-w-xs text-right">
              Four frames. One vision. All 4th Genna.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FRAMES.map((frame, i) => (
              <motion.div
                key={frame.productId}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group bg-white/[0.02] border border-white/10 rounded-none overflow-hidden hover:border-brand-gold/30 transition-all duration-500 flex flex-col"
              >
                <div className="aspect-square relative bg-gradient-to-br from-[#1a1200] to-brand-black flex items-center justify-center overflow-hidden">
                  <img
                    src={frame.image}
                    alt={`${frame.name} — ${frame.frame}`}
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.2]"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement | null;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div
                    className="absolute inset-0 hidden items-center justify-center text-6xl opacity-10 select-none transition-transform duration-500 group-hover:scale-[1.2]"
                  >
                    🕶️
                  </div>
                  <span
                    className="absolute top-4 left-4 px-3 py-1 text-[9px] font-black uppercase tracking-widest z-10"
                    style={{ background: '#D4A017', color: '#0C0C0C' }}
                  >
                    {frame.tag}
                  </span>
                </div>
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div>
                    <p className="font-sans text-[9px] uppercase tracking-[0.4em] text-brand-gold/50 mb-2">{frame.lens}</p>
                    <h3 className="font-sans text-xl font-black uppercase mb-2 group-hover:text-brand-gold transition-colors">{frame.name}</h3>
                    <p className="font-sans text-xs text-white/30 mb-2">{frame.frame}</p>
                    <p className="font-sans text-sm text-white/50 leading-relaxed">{frame.vibe}</p>
                  </div>
                  <div className="mt-auto">
                    <PreOrderCapture productId={frame.productId} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#1a1200] to-brand-black border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-xs uppercase tracking-[0.5em] text-brand-gold/50 mb-4">Coming Soon</p>
          <h2 className="text-4xl md:text-6xl font-sans font-black uppercase mb-6 leading-none">
            4th Genna<br /><span className="text-brand-gold">Vision</span>
          </h2>
          <p className="text-white/40 mb-10 font-sans leading-relaxed max-w-md mx-auto">
            The Eye-donia collection is in production. Follow Aidonia's socials for the drop announcement.
          </p>
          <a
            href="https://www.instagram.com/aidonia4thgenna/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-gold text-brand-black px-10 py-4 font-black uppercase tracking-widest text-sm hover:bg-white transition-colors"
          >
            <ExternalLink className="w-4 h-4" /> Follow on Instagram
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5 text-center">
        <p className="text-white/20 font-sans text-xs uppercase tracking-widest">
          © Eye-donia · An Aidonia Brand ·{' '}
          <button onClick={onBack} className="text-brand-gold/40 hover:text-brand-gold transition-colors underline underline-offset-4">
            Back to Aidonia
          </button>
        </p>
      </footer>
    </div>
  );
}
