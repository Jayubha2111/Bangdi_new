// Product image data - Maps products to their image paths
// Images should be placed in public/images/products/ folder

export interface ProductImageData {
  id: number;
  imagePath: string;
  alt: string;
}

export const productImageData: ProductImageData[] = [
  {
    id: 1,
    imagePath: '/download.jpeg',
    alt: 'Royal Emerald Set - Panchkala Kada Collection',
  },
  {
    id: 2,
    imagePath: '/download1.jpeg',
    alt: 'Emerald Rani Kada - Mughal Inspired Design',
  },
  {
    id: 3,
    imagePath: '/download2.jpeg',
    alt: 'Delicate Hara Chooda - Traditional Bridal Set',
  },
  {
    id: 4,
    imagePath: '/download3.jpeg',
    alt: 'Kundan Emerald Bangle - Jaipur Kundan Craft',
  },
  {
    id: 5,
    imagePath: '/download4.jpeg',
    alt: 'Festive Bangdi Set 12pc - Diwali Puja Special',
  },
  {
    id: 6,
    imagePath: '/download5.jpeg',
    alt: 'Bridal Haath Phool - Complete Hand Ornament',
  },
];

export const getProductImagePath = (productId: number): string => {
  const image = productImageData.find((img) => img.id === productId);
  return image?.imagePath || '/images/products/placeholder.jpg';
};

export const getProductImageAlt = (productId: number): string => {
  const image = productImageData.find((img) => img.id === productId);
  return image?.alt || 'DHAGAJI Bangdi Product';
};
