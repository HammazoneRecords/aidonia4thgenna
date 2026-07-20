import { useState } from 'react';
import type { FormEvent } from 'react';
import { Check, Loader2 } from 'lucide-react';
import { SITE_SLUG, ARTIST_NAME, getProduct } from '../raas-catalog';

interface PreOrderCaptureProps {
  productId: string;
  className?: string;
}

const ENDPOINT = (import.meta.env.VITE_RAAS_API as string | undefined) ?? '';

export default function PreOrderCapture({ productId, className }: PreOrderCaptureProps) {
  const product = getProduct(productId);
  if (!product) return null;

  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [variant, setVariant] = useState(product.variants[0] ?? '');
  const [priceTierKey, setPriceTierKey] = useState(product.priceTiers[0].key);
  const [merchInterest, setMerchInterest] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const priceTier = product!.priceTiers.find(t => t.key === priceTierKey)!;
    const payload = {
      siteSlug: SITE_SLUG,
      artistName: ARTIST_NAME,
      productId: product!.id,
      productName: product!.name,
      variant,
      email,
      location,
      priceTierKey: priceTier.key,
      priceTierLabel: priceTier.label,
      brandedMerchInterest: merchInterest,
    };

    try {
      if (!ENDPOINT) throw new Error('Lead capture endpoint is not configured');
      const res = await fetch(`${ENDPOINT}/v1/interest`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Lead capture failed with status ${res.status}`);
      setDone(true);
    } catch (err) {
      console.error(err);
      setError('We could not save your interest. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`w-full bg-brand-gold text-brand-black font-sans font-black uppercase tracking-widest text-xs py-3 hover:bg-white transition-colors ${className ?? ''}`}
      >
        Register Interest
      </button>
    );
  }

  if (done) {
    return (
      <div className={`bg-brand-gold/10 border border-brand-gold/30 p-5 text-center ${className ?? ''}`}>
        <Check className="w-5 h-5 text-brand-gold mx-auto mb-2" />
        <p className="font-sans text-xs uppercase tracking-widest text-brand-gold">Interest Logged</p>
        <p className="font-sans text-[11px] text-white/40 mt-2">We'll let you know when it drops.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`space-y-3 bg-white/[0.03] border border-white/10 p-4 ${className ?? ''}`}
    >
      <input
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full bg-brand-black/60 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-brand-gold/60"
      />
      <input
        type="text"
        required
        value={location}
        onChange={e => setLocation(e.target.value)}
        placeholder="Location (parish / city)"
        className="w-full bg-brand-black/60 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-brand-gold/60"
      />

      {product.variants.length > 1 && (
        <select
          value={variant}
          onChange={e => setVariant(e.target.value)}
          className="w-full bg-brand-black/60 border border-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-gold/60"
        >
          {product.variants.map(v => (
            <option key={v} value={v}>{v}</option>
          ))}
        </select>
      )}

      <fieldset className="space-y-1.5 pt-1">
        <legend className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">
          Price you'd pay
        </legend>
        {product.priceTiers.map(t => (
          <label key={t.key} className="flex items-center gap-2 text-xs text-white/70 cursor-pointer hover:text-white">
            <input
              type="radio"
              name={`tier-${productId}`}
              value={t.key}
              checked={priceTierKey === t.key}
              onChange={() => setPriceTierKey(t.key)}
              className="accent-brand-gold"
            />
            {t.label}
          </label>
        ))}
      </fieldset>

      <label className="flex items-start gap-2 text-xs text-white/60 cursor-pointer pt-2 border-t border-white/5">
        <input
          type="checkbox"
          checked={merchInterest}
          onChange={e => setMerchInterest(e.target.checked)}
          className="accent-brand-gold mt-0.5"
        />
        <span>I'd also like to know about Aidonia branded merch drops</span>
      </label>

      {error && <p className="text-red-400 text-xs">{error}</p>}

      <div className="flex gap-2 pt-1">
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="px-4 py-3 text-xs font-sans uppercase tracking-widest text-white/40 hover:text-white"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={submitting}
          className="flex-1 bg-brand-gold text-brand-black font-sans font-black uppercase tracking-widest text-xs py-3 hover:bg-white transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Submit Interest'}
        </button>
      </div>
    </form>
  );
}
