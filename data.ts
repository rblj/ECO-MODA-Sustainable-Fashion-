
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Organic Cotton Everyday Tee',
    price: 35,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
    category: 'Men',
    description: 'A breathable, soft t-shirt made from 100% GOTS certified organic cotton. Designed for comfort and long-term durability.',
    ecoTag: '100% Organic Cotton',
    materials: ['Organic Cotton', 'Natural Dyes'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '2',
    name: 'Recycled Ocean Plastic Jacket',
    price: 120,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800',
    category: 'Recycled',
    description: 'High-performance weather protection crafted from recycled marine plastic. Water-resistant and breathable.',
    ecoTag: 'Recycled Ocean Plastic',
    materials: ['Recycled Polyester', 'Non-toxic DWR'],
    sizes: ['M', 'L', 'XL']
  },
  {
    id: '3',
    name: 'Sustainable Flax Linen Trousers',
    price: 85,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800',
    category: 'Women',
    description: 'Effortlessly elegant trousers made from locally sourced flax linen. Naturally cooling and completely biodegradable.',
    ecoTag: 'Biodegradable Flax',
    materials: ['Natural Linen', 'Cotton Thread'],
    sizes: ['XS', 'S', 'M', 'L']
  },
  {
    id: '4',
    name: 'Upcycled Denim Tote Bag',
    price: 45,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800',
    category: 'Accessories',
    description: 'Each bag is unique, crafted from salvaged vintage denim. Features internal pockets for your essentials.',
    ecoTag: 'Upcycled Fabric',
    materials: ['Salvaged Denim', 'Recycled Canvas'],
    sizes: ['One Size']
  },
  {
    id: '5',
    name: 'Bamboo Fiber Lounge Set',
    price: 95,
    image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&q=80&w=800',
    category: 'Women',
    description: 'Ultra-soft loungewear made from fast-growing bamboo fibers. Anti-bacterial and moisture-wicking properties.',
    ecoTag: 'Sustainable Bamboo',
    materials: ['Bamboo Viscose', 'Recycled Elastane'],
    sizes: ['S', 'M', 'L']
  },
  {
    id: '6',
    name: 'Cork Minimalist Wallet',
    price: 28,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=800',
    category: 'Accessories',
    description: 'Vegan-friendly alternative to leather, made from durable, harvested Mediterranean cork.',
    ecoTag: 'Vegan Cork',
    materials: ['Natural Cork', 'Recycled Polyester Lining'],
    sizes: ['One Size']
  }
];

export const IMPACT_STATS = [
  { label: 'Water Saved', value: '450,000L', description: 'Equivalent to 6,000 bathtubs' },
  { label: 'Fabric Recycled', value: '2,400kg', description: 'Saved from landfills this month' },
  { label: 'Trees Planted', value: '1,200', description: 'Through our partner reforestation' }
];
