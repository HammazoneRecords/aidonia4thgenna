import { motion } from 'motion/react';
import { ShoppingBag, ArrowUpRight } from 'lucide-react';

const MERCH = [
  {
    id: 'genna-longsleeve',
    name: 'Long Sleeve Genn4 Shirt',
    category: 'Apparel',
    tag: 'NEW',
    image: '/front-31-cutout.png',
  },
  {
    id: 'genna-jacket',
    name: '4th Genna Jacket',
    category: 'Outerwear',
    tag: 'SIGNATURE',
    image: '/Front (5).png',
  },
  {
    id: 'donia-pullover',
    name: 'Aidonia Donia Pullover',
    category: 'Apparel',
    tag: 'BESTSELLER',
    image: '/Front, Black (1).jpg',
  },
  {
    id: 'donia-tee',
    name: 'Aidonia Donia T-Shirt',
    category: 'Apparel',
    tag: 'FRESH',
    image: '/Front, Black.jpg',
  },
];

const STORE_URL = 'https://aidonia4thgenna.printify.me';

export default function FrshDrop() {
  return (
    <section id="frsh-drop" className="py-32 bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20">
          <p className="font-sans font-bold uppercase tracking-[0.4em] text-[10px] mb-4 text-brand-gold">Drop Catalogue</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h3 className="font-sans text-5xl md:text-7xl font-black uppercase leading-none">
              The <span className="text-brand-gold">Frsh</span> Drop
            </h3>
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold/60 hover:text-brand-gold transition-colors"
            >
              Full Store <ArrowUpRight size={14} />
            </a>
          </div>
          <p className="font-sans text-white/40 max-w-md text-base leading-relaxed mt-6">
            Luxury streetwear curated by Aidonia. Impeccable fit, premium fabrics, Genna certified.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {MERCH.map((item, idx) => (
            <motion.a
              key={item.id}
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer relative overflow-hidden border border-white/5 bg-brand-smoked/20 block"
            >
              <div className="aspect-square relative overflow-hidden bg-brand-smoked/30">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <span
                  className="absolute top-4 left-4 px-3 py-1 text-[9px] font-black uppercase tracking-widest z-10"
                  style={{ background: '#D4A017', color: '#0C0C0C' }}
                >
                  {item.tag}
                </span>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-brand-black/60 z-10">
                  <ShoppingBag size={28} className="text-brand-gold" />
                </div>
              </div>
              <div className="p-6">
                <p className="font-sans text-[9px] uppercase tracking-[0.3em] text-brand-gold/60 mb-2">{item.category}</p>
                <h4 className="font-sans text-lg font-bold group-hover:text-brand-gold transition-colors">{item.name}</h4>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center">
          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-gold text-brand-black font-sans font-black uppercase tracking-widest text-sm px-12 py-5 hover:bg-white transition-colors duration-500"
          >
            <ShoppingBag size={18} /> Visit Full Store
          </a>
        </div>
      </div>
    </section>
  );
}
