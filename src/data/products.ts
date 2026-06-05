export interface Product {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  tag: string;
  category: string;
  colors: { primary: string; secondary: string };
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Royal Emerald Set',
    subtitle: 'Panchkala Kada Collection',
    description: 'A majestic set of five handcrafted emerald-studded gold bangles, each adorned with intricate filigree work and traditional motifs inspired by Rajasthani royalty.',
    tag: 'Bestseller',
    category: 'Bridal',
    colors: { primary: '#1a1a1a', secondary: '#ef2a28' },
  },
  {
    id: 2,
    name: 'Emerald Rani Kada',
    subtitle: 'Mughal Inspired Design',
    description: 'A regal kada featuring a bold emerald centrepiece framed by intricate gold scrollwork and miniature floral engravings along the entire circumference.',
    tag: 'Premium',
    category: 'Luxury',
    colors: { primary: '#1a1a1a', secondary: '#ef2a28' },
  },
  {
    id: 3,
    name: 'Delicate Hara Chooda',
    subtitle: 'Traditional Bridal Set',
    description: 'A lightweight set of 21 green and gold bangles worn by Punjabi brides, featuring a smooth glossy finish with delicate gold foil accents on each bangle.',
    tag: 'Trending',
    category: 'Bridal',
    colors: { primary: '#1a1a1a', secondary: '#ef2a28' },
  },
  {
    id: 4,
    name: 'Kundan Emerald Bangle',
    subtitle: 'Jaipur Kundan Craft',
    description: 'A single exquisite bangle crafted in the traditional Kundan style, with emeralds set in 22K gold-plated meenakari work featuring intricate floral patterns.',
    tag: 'Limited',
    category: 'Luxury',
    colors: { primary: '#1a1a1a', secondary: '#ef2a28' },
  },
  {
    id: 5,
    name: 'Festive Bangdi Set 12pc',
    subtitle: 'Diwali Puja Special',
    description: 'A vibrant set of 12 emerald-green bangles with gold-plated rims and embossed traditional motifs, perfect for festive occasions and daily puja wear.',
    tag: 'Value Pack',
    category: 'Festive',
    colors: { primary: '#1a1a1a', secondary: '#ef2a28' },
  },
  {
    id: 6,
    name: 'Bridal Haath Phool',
    subtitle: 'Complete Hand Ornament',
    description: 'An elaborate haath phool set combining emerald-studded bangles with intricate gold chains, ring, and palm engraving for the ultimate bridal statement.',
    tag: 'New Launch',
    category: 'Bridal',
    colors: { primary: '#1a1a1a', secondary: '#ef2a28' },
  },
];

export const categories = ['All', 'Bridal', 'Festive', 'Everyday', 'Luxury'] as const;

export type Category = (typeof categories)[number];

export const getProductsByCategory = (category: Category): Product[] => {
  if (category === 'All') return products;
  return products.filter((p) => p.category === category);
};
