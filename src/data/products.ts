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
    name: 'Purple Thread Bangles',
    subtitle: 'BANGLES Handwoven Collection',
    description: 'Vibrant purple thread-wrapped bangles crafted with traditional Indian patterns. Each bangle is a wearable piece of art celebrating color, culture, and craftsmanship.',
    tag: 'Bestseller',
    category: 'Bangles',
    colors: { primary: '#4F1D74', secondary: '#d4af37' },
  },
  {
    id: 2,
    name: 'Golden Thread Bangles',
    subtitle: 'Festival Special',
    description: 'Elegant golden-yellow thread bangles with intricate woven patterns. Perfect for festivals, weddings, and everyday wear with pride.',
    tag: 'Premium',
    category: 'Bangles',
    colors: { primary: '#4F1D74', secondary: '#d4af37' },
  },
  {
    id: 3,
    name: 'Thread Necklace - Purple',
    subtitle: 'Modern Traditional Design',
    description: 'Handmade thread necklace blending traditional Indian design with modern elegance. Perfect for festivals, weddings, and everyday wear.',
    tag: 'Trending',
    category: 'Necklace',
    colors: { primary: '#4F1D74', secondary: '#d4af37' },
  },
  {
    id: 4,
    name: 'Thread Jhumka Earrings',
    subtitle: 'Lightweight & Vibrant',
    description: 'Beautifully crafted thread jhumka earrings in various styles. Lightweight, colorful, and uniquely Indian. Each pair tells a story of heritage.',
    tag: 'Limited',
    category: 'Earrings',
    colors: { primary: '#4F1D74', secondary: '#d4af37' },
  },
  {
    id: 5,
    name: 'Festive Bangle Set - 6pc',
    subtitle: 'Diwali Special',
    description: 'A vibrant set of 6 thread bangles in mixed colors with traditional Indian motifs. Perfect for festive occasions and celebrations.',
    tag: 'Value Pack',
    category: 'Bangles',
    colors: { primary: '#4F1D74', secondary: '#d4af37' },
  },
  {
    id: 6,
    name: 'Bridal Thread Collection',
    subtitle: 'Complete Set',
    description: 'An elaborate handmade collection combining thread bangles, necklaces, and earrings for the ultimate bridal statement with authentic tradition.',
    tag: 'New Launch',
    category: 'Necklace',
    colors: { primary: '#4F1D74', secondary: '#d4af37' },
  },
];

export const categories = ['All', 'Bangles', 'Necklace', 'Earrings'] as const;

export type Category = (typeof categories)[number];

export const getProductsByCategory = (category: Category): Product[] => {
  if (category === 'All') return products;
  return products.filter((p) => p.category === category);
};
