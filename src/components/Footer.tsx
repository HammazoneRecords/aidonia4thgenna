import { Instagram, Youtube, Music, ArrowUp } from 'lucide-react';

export default function Footer({ className = '', onEyeDonia }: { className?: string; onEyeDonia?: () => void }) {
  return (
    <footer className={`bg-brand-black pt-24 pb-12 px-6 md:px-12 border-t border-brand-gold/5 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <h4 className="font-sans text-2xl font-black uppercase mb-6">Stay in the Loop</h4>
            <p className="font-sans text-white/40 mb-8 max-w-sm leading-relaxed">
              Join the 4th Genna movement — exclusive drops, private listenings, and tour announcements.
            </p>
            <div className="flex bg-white/5 border border-white/10 p-1">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="bg-transparent border-none outline-none font-sans text-xs tracking-widest px-4 py-3 flex-grow focus:ring-0"
              />
              <button className="bg-brand-gold text-brand-black font-sans font-bold text-xs uppercase tracking-widest px-8 py-3 hover:bg-white transition-colors">
                Join
              </button>
            </div>
          </div>

          <div>
            <h5 className="font-sans font-bold uppercase tracking-[0.3em] text-[10px] text-brand-gold mb-6">Navigation</h5>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#home', action: null },
                { label: 'The Vault', href: '#the-vault', action: null },
                { label: 'Frsh Drop', href: '#frsh-drop', action: null },
                { label: 'Lookbook', href: '#lookbook', action: null },
                { label: 'Eye-donia', href: null, action: onEyeDonia },
              ].map((l) => (
                <li key={l.label}>
                  {l.action ? (
                    <button onClick={l.action} className="font-sans text-base hover:text-brand-gold transition-colors text-white/70">
                      {l.label}
                    </button>
                  ) : (
                    <a href={l.href!} className="font-sans text-base hover:text-brand-gold transition-colors text-white/70">
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-sans font-bold uppercase tracking-[0.3em] text-[10px] text-brand-gold mb-6">Socials</h5>
            <ul className="space-y-3">
              <li>
                <a href="https://www.instagram.com/aidonia4thgenna/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 font-sans text-base hover:text-brand-gold transition-colors text-white/70">
                  <Instagram size={14} /> Instagram
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@AidoniaVEVO" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 font-sans text-base hover:text-brand-gold transition-colors text-white/70">
                  <Youtube size={14} /> YouTube
                </a>
              </li>
              <li>
                <a href="https://music.apple.com/us/artist/aidonia/183142674" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 font-sans text-base hover:text-brand-gold transition-colors text-white/70">
                  <Music size={14} /> Apple Music
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/5">
          <p className="font-sans text-[10px] font-bold uppercase tracking-[0.4em] text-white/25">
            © 2025 Aidonia Worldwide · All Rights Reserved
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-black hover:border-brand-gold transition-all duration-500"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
