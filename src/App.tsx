import { useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Info } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import TheVault from './components/TheVault';
import FrshDrop from './components/FrshDrop';
import Lookbook from './components/Lookbook';
import Footer from './components/Footer';
import EyeDonia from './components/EyeDonia';

type Page = 'home' | 'eye-donia';

export default function App() {
  const [page, setPage] = useState<Page>('home');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  if (page === 'eye-donia') {
    return <EyeDonia onBack={() => setPage('home')} />;
  }

  return (
    <div className="min-h-screen bg-brand-black text-white relative">
      <Header onEyeDonia={() => setPage('eye-donia')} />

      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-brand-gold origin-left z-50"
        style={{ scaleX }}
      />

      <main className="relative">
        {/* Hero */}
        <section id="home" className="h-[90vh] lg:h-screen w-full relative">
          <Hero />
        </section>

        {/* Ghost watermark sections */}
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24 space-y-32 lg:space-y-48">

          <section className="relative group">
            <div className="absolute -top-10 -left-10 font-sans font-black text-[10vw] text-white/[0.03] uppercase select-none pointer-events-none group-hover:text-brand-gold/[0.04] transition-colors duration-1000">
              Archives
            </div>
            <TheVault />
          </section>

          <section className="lg:pl-[8%] relative group">
            <div className="absolute -top-10 -right-10 font-sans font-black text-[10vw] text-white/[0.03] uppercase select-none pointer-events-none text-right group-hover:text-brand-gold/[0.04] transition-colors duration-1000">
              Style
            </div>
            <FrshDrop />
          </section>

          <section className="relative group">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-sans font-black text-[14vw] text-white/[0.02] uppercase select-none pointer-events-none group-hover:text-brand-gold/[0.03] transition-colors duration-1000">
              Visuals
            </div>
            <div className="relative z-10">
              <Lookbook />
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="relative group">
            <div className="absolute -top-10 -left-10 font-sans font-black text-[10vw] text-white/[0.03] uppercase select-none pointer-events-none group-hover:text-brand-gold/[0.04] transition-colors duration-1000">
              Contact
            </div>
            <div className="py-20 md:py-24 px-6 md:px-12 border border-white/5 bg-white/[0.01] relative z-10">
              <div className="max-w-2xl">
                <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-gold/60 mb-4">Booking & Enquiries</p>
                <h2 className="font-sans text-4xl md:text-6xl font-black uppercase leading-none mb-8">
                  Work With<br /><span className="text-brand-gold">Aidonia</span>
                </h2>
                <p className="font-sans text-white/40 mb-10 leading-relaxed max-w-md">
                  For booking, collaboration, and press enquiries — reach the 4th Genna team below.
                </p>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="YOUR NAME"
                    className="w-full bg-transparent border border-white/10 px-6 py-4 font-sans text-sm tracking-widest text-white placeholder:text-white/20 focus:outline-none focus:border-brand-gold/40 transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="EMAIL ADDRESS"
                    className="w-full bg-transparent border border-white/10 px-6 py-4 font-sans text-sm tracking-widest text-white placeholder:text-white/20 focus:outline-none focus:border-brand-gold/40 transition-colors"
                  />
                  <textarea
                    placeholder="YOUR MESSAGE"
                    rows={4}
                    className="w-full bg-transparent border border-white/10 px-6 py-4 font-sans text-sm tracking-widest text-white placeholder:text-white/20 focus:outline-none focus:border-brand-gold/40 transition-colors resize-none"
                  />
                  <div className="relative">
                    <button
                      disabled
                      className="w-full py-4 bg-brand-gold/20 border border-brand-gold/20 text-brand-gold/40 font-sans font-bold text-xs uppercase tracking-widest cursor-not-allowed"
                    >
                      Send Message
                    </button>
                    <p className="mt-2 text-[10px] font-sans text-brand-gold/40 text-center tracking-wide">
                      Contact form activates after purchase — owner configures on setup
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>

        <Footer className="max-w-7xl mx-auto" onEyeDonia={() => setPage('eye-donia')} />
      </main>

      {/* DISCLAIMER BANNER */}
      <div className="fixed bottom-0 left-0 right-0 z-50 px-4 py-2 flex items-center justify-center gap-2" style={{ background: 'rgba(245,158,11,0.08)', borderTop: '1px solid rgba(245,158,11,0.2)' }}>
        <Info size={13} style={{ color: 'rgba(251,191,36,0.85)', flexShrink: 0 }} />
        <p className="font-sans text-[10px] uppercase tracking-widest text-center" style={{ color: 'rgba(251,191,36,0.65)' }}>
          Working draft — buyer assumes responsibility for clearing image &amp; likeness rights with Aidonia. This site is available for{' '}
          <a href="https://mindwaveja.com/marketplace/artist-digital-territory-license" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }} className="hover:opacity-100 transition-opacity">purchase</a>.
        </p>
      </div>

      {/* Fixed vertical branding rail — desktop only */}
      <div className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col items-center gap-10 z-40 opacity-20 hover:opacity-100 transition-opacity duration-500">
        <div className="w-px h-20 bg-brand-gold/40" />
        <p className="font-sans font-bold text-[9px] uppercase tracking-[0.5em] [writing-mode:vertical-rl] rotate-180 text-white/60">
          Aidonia · 4th Genna · J.O.P.
        </p>
        <div className="w-px h-20 bg-brand-gold/40" />
      </div>
    </div>
  );
}
