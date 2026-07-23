// Interest-capture catalog — single source of truth for the Aidonia site.
// Drives <PreOrderCapture> dropdowns so users never type product names.

export const SITE_SLUG = 'aidonia-4thgenna';
export const ARTIST_NAME = 'Aidonia';

export type PriceTier = { key: string; label: string };
export type ProductCategory = 'eyewear' | 'apparel' | 'outerwear';

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  variants: string[];
  priceTiers: PriceTier[];
};

const EYEWEAR_TIERS: PriceTier[] = [
  { key: 't1', label: '$100 – $250 USD' },
  { key: 't2', label: '$250 – $500 USD' },
  { key: 't3', label: '$500 – $1000 USD' },
  { key: 'any', label: "Price doesn't matter" },
];

export const PRODUCTS: Product[] = [
  {
    id: 'eyedonia-the-4th',
    name: 'The 4th',
    category: 'eyewear',
    variants: ['Matte Black', 'Tortoiseshell', 'Clear'],
    priceTiers: EYEWEAR_TIERS,
  },
  {
    id: 'eyedonia-the-don',
    name: 'The Don',
    category: 'eyewear',
    variants: ['Gold / Amber Gradient'],
    priceTiers: EYEWEAR_TIERS,
  },
  {
    id: 'eyedonia-the-shell',
    name: 'The Shell',
    category: 'eyewear',
    variants: ['Tortoiseshell / Smoked Grey'],
    priceTiers: EYEWEAR_TIERS,
  },
  {
    id: 'eyedonia-the-clear',
    name: 'The Clear',
    category: 'eyewear',
    variants: ['Matte Black / Clear Lens'],
    priceTiers: EYEWEAR_TIERS,
  },
];

export function getProduct(id: string): Product | undefined {
  return PRODUCTS.find(p => p.id === id);
}
