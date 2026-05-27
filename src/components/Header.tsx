import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Youtube, Music } from 'lucide-react';

interface HeaderProps {
  onEyeDonia: () => void;
}

export default function Header({ onEyeDonia }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Vault', href: '#the-vault', action: null },
    { name: 'Frsh Drop', href: '#frsh-drop', action: null },
    { name: 'Lookbook', href: '#lookbook', action: null },
    { name: 'Eye-donia', href: null, action: onEyeDonia },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 h-20 flex items-center ${
          isScrolled ? 'bg-brand-black/90 backdrop-blur-md shadow-2xl' : 'bg-transparent'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <a href="#home" className="font-sans text-2xl font-black tracking-tighter hover:text-brand-gold transition-colors">
              AIDONIA
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) =>
                link.action ? (
                  <button
                    key={link.name}
                    onClick={link.action}
                    className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 hover:text-brand-gold transition-colors"
                  >
                    {link.name}
                  </button>
                ) : (
                  <a
                    key={link.name}
                    href={link.href!}
                    className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 hover:text-brand-gold transition-colors"
                  >
                    {link.name}
                  </a>
                )
              )}
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-4 text-white/40">
              <a href="https://www.instagram.com/aidonia4thgenna/" target="_blank" rel="noopener noreferrer">
                <Instagram size={18} className="hover:text-brand-gold cursor-pointer transition-colors" />
              </a>
              <a href="https://www.youtube.com/@AidoniaVEVO" target="_blank" rel="noopener noreferrer">
                <Youtube size={18} className="hover:text-brand-gold cursor-pointer transition-colors" />
              </a>
              <a href="https://music.apple.com/us/artist/aidonia/183142674" target="_blank" rel="noopener noreferrer">
                <Music size={18} className="hover:text-brand-gold cursor-pointer transition-colors" />
              </a>
            </div>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-brand-gold transition-colors"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 100 }}
            className="fixed inset-0 z-50 bg-brand-gold text-brand-black p-12 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <p className="font-sans text-xl font-black">AIDONIA</p>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-12 h-12 border border-brand-black/20 flex items-center justify-center hover:rotate-90 transition-transform"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-8">
              <a href="#home" onClick={() => setIsMenuOpen(false)}
                className="font-sans text-6xl md:text-8xl font-black hover:opacity-60 transition-opacity">
                Home
              </a>
              {navLinks.map((link) =>
                link.action ? (
                  <button
                    key={link.name}
                    onClick={() => { setIsMenuOpen(false); link.action!(); }}
                    className="font-sans text-6xl md:text-8xl font-black hover:opacity-60 transition-opacity text-left"
                  >
                    {link.name}
                  </button>
                ) : (
                  <a
                    key={link.name}
                    href={link.href!}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-sans text-6xl md:text-8xl font-black hover:opacity-60 transition-opacity"
                  >
                    {link.name}
                  </a>
                )
              )}
            </nav>

            <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-8">
              <div className="space-y-4">
                <p className="font-sans font-bold uppercase tracking-widest text-xs opacity-50">Follow the movement</p>
                <div className="flex gap-6">
                  <a href="https://www.instagram.com/aidonia4thgenna/" target="_blank" rel="noopener noreferrer"><Instagram size={24} /></a>
                  <a href="https://www.youtube.com/@AidoniaVEVO" target="_blank" rel="noopener noreferrer"><Youtube size={24} /></a>
                  <a href="https://music.apple.com/us/artist/aidonia/183142674" target="_blank" rel="noopener noreferrer"><Music size={24} /></a>
                </div>
              </div>
              <p className="font-sans font-bold uppercase tracking-[0.5em] text-[10px] opacity-40">
                © 2025 4th Genna Records
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
