import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X, ExternalLink, Youtube } from 'lucide-react';

interface Album {
  id: string;
  title: string;
  year: string;
  cover: string;
  tracklist: string[];
  spotifyUrl: string;
  youtubeUrl?: string;
}

const ALBUMS: Album[] = [
  {
    id: 'occupied-mind',
    title: 'Occupied Mind',
    year: '2023',
    cover: 'https://i.scdn.co/image/ab67616d00001e02353cb91ac3d9f546a6bebf8f',
    tracklist: ['Introduction', 'Occupied Mind', 'Faith', 'Success', 'Generations', 'Link Up', 'Genna Way'],
    spotifyUrl: 'https://music.apple.com/us/artist/aidonia/183142674',
    youtubeUrl: 'https://www.youtube.com/playlist?list=OLAK5uy_lqYlmXIBwSAkvgK20W1_ALcz4W5Nod1mg',
  },
  {
    id: 'dats-a-trap',
    title: "Dat's A Trap",
    year: '2020',
    cover: 'https://i.scdn.co/image/ab67616d00001e02100130751821c90786b7bd44',
    tracklist: ["Dat's A Trap", 'Hot Tool', 'VVS', 'Done Already', 'Big Mood', 'Genna Move', 'Fire'],
    spotifyUrl: 'https://music.apple.com/us/artist/aidonia/183142674',
    youtubeUrl: 'https://www.youtube.com/playlist?list=OLAK5uy_mJs6fHv56TTgCF3u95SvRj037zZWbQFUI',
  },
  {
    id: 'project-sweat',
    title: 'Project Sweat',
    year: '2015',
    cover: 'https://i.scdn.co/image/ab67616d00001e02b0dc9c55a5d650c837baa948',
    tracklist: ['Nuh Boring Gal', 'Sidewalk', 'Dat A Di Thing', 'Check It', 'Work', 'Bad Man Forward', 'More'],
    spotifyUrl: 'https://music.apple.com/us/artist/aidonia/183142674',
  },
];

export default function TheVault() {
  const [selected, setSelected] = useState<Album | null>(null);

  return (
    <section id="the-vault" className="py-32 px-6 md:px-12 bg-brand-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <p className="text-brand-gold font-sans font-bold uppercase tracking-[0.3em] text-[10px] mb-4">The Vault</p>
            <h3 className="font-sans text-5xl md:text-7xl font-black uppercase leading-none">Music Archive</h3>
          </div>
          <p className="font-sans text-brand-gold/50 max-w-sm text-base leading-relaxed">
            Impeccable vocals, authoritative style, and the sound that defines 4th Genna.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {ALBUMS.map((album, idx) => (
            <motion.div
              key={album.id}
              onClick={() => setSelected(album)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className={`group cursor-pointer ${
                idx === 0 ? 'md:col-span-8' : idx === 1 ? 'md:col-span-4 md:mt-24' : 'md:col-span-4 md:-mt-16'
              }`}
            >
              <div className="relative aspect-square overflow-hidden border border-brand-gold/20 bg-neutral-900">
                <img
                  src={album.cover}
                  alt={album.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-gold/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Play className="text-brand-black" fill="currentColor" size={40} />
                </div>
              </div>
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <h4 className="font-sans text-2xl md:text-3xl font-black group-hover:text-brand-gold transition-colors uppercase">{album.title}</h4>
                  <p className="font-sans text-xs text-white/40 uppercase tracking-[0.4em] mt-2">{album.year} · LP Archive</p>
                </div>
                <div className="h-[1px] w-12 bg-brand-gold/20 mt-4 shrink-0" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-brand-black/95 backdrop-blur-xl"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-brand-black border border-brand-gold/20 p-8 md:p-12 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-6 right-6 text-white/50 hover:text-brand-gold transition-colors"
              >
                <X size={28} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="aspect-square border border-brand-gold/20 overflow-hidden">
                  <img src={selected.cover} alt={selected.title} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-brand-gold font-sans font-bold uppercase tracking-[0.3em] text-xs mb-4">Album Spotlight</p>
                  <h3 className="font-sans text-3xl font-black uppercase mb-2">{selected.title}</h3>
                  <p className="font-sans text-xs text-white/40 uppercase tracking-[0.2em] mb-8">{selected.year} · 4th Genna Records</p>

                  <div className="space-y-3 mb-10">
                    <p className="font-sans font-bold text-xs uppercase tracking-widest text-brand-gold/70 mb-4">Tracklist</p>
                    {selected.tracklist.map((track, i) => (
                      <div key={track} className="flex items-center group border-b border-white/5 pb-3">
                        <span className="font-sans text-[10px] text-brand-gold/40 mr-4 tabular-nums">0{i + 1}</span>
                        <span className="font-sans text-sm group-hover:text-brand-gold transition-colors">{track}</span>
                        <Play size={10} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-brand-gold" fill="currentColor" />
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-3">
                    <a
                      href={selected.spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-4 bg-brand-gold text-brand-black font-sans font-black uppercase tracking-widest text-sm hover:bg-white transition-colors"
                    >
                      <ExternalLink size={16} /> Apple Music
                    </a>
                    {selected.youtubeUrl && (
                      <a
                        href={selected.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-4 border border-white/20 text-white font-sans font-black uppercase tracking-widest text-sm hover:border-brand-gold hover:text-brand-gold transition-colors"
                      >
                        <Youtube size={16} /> YouTube
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
