// Product image data - Maps products to their image paths
// Images are stored in public/images/products/ folder

export interface ProductImageData {
  id: number;
  images: string[];
  alts: string[];
}

export const productImageData: ProductImageData[] = [
  {
    id: 1,
    images: [
      '/images/products/products1.jpeg',
      '/images/products/products2.jpeg',
      '/images/products/products3.jpeg',
    ],
    alts: [
      'Purple Thread Bangles - View 1',
      'Purple Thread Bangles - View 2',
      'Purple Thread Bangles - View 3',
    ],
  },
  {
    id: 2,
    images: [
      '/images/products/products4.jpeg',
      '/images/products/products5.jpeg',
      '/images/products/products6.jpeg',
    ],
    alts: [
      'Golden Thread Bangles - View 1',
      'Golden Thread Bangles - View 2',
      'Golden Thread Bangles - View 3',
    ],
  },
  {
    id: 3,
    images: [
      '/images/products/products7.jpeg',
      '/images/products/products8.jpeg',
      '/images/products/products9.jpeg',
    ],
    alts: [
      'Thread Necklace Purple - View 1',
      'Thread Necklace Purple - View 2',
      'Thread Necklace Purple - View 3',
    ],
  },
  {
    id: 4,
    images: [
      '/images/products/products10.jpeg',
      '/images/products/products11.jpeg',
      '/images/products/products12.jpeg',
    ],
    alts: [
      'Thread Jhumka Earrings - View 1',
      'Thread Jhumka Earrings - View 2',
      'Thread Jhumka Earrings - View 3',
    ],
  },
  {
    id: 5,
    images: [
      '/images/products/products13.jpeg',
      '/images/products/products14.jpeg',
      '/images/products/products15.jpeg',
    ],
    alts: [
      'Festive Bangle Set - View 1',
      'Festive Bangle Set - View 2',
      'Festive Bangle Set - View 3',
    ],
  },
  {
    id: 6,
    images: [
      '/images/products/products16.jpeg',
      '/images/products/products17.jpeg',
    ],
    alts: [
      'Bridal Thread Collection - View 1',
      'Bridal Thread Collection - View 2',
    ],
  },
];

export const getProductImages = (productId: number): string[] => {
  const product = productImageData.find((img) => img.id === productId);
  return product?.images || ['/images/products/products1.jpeg'];
};

export const getProductImageAlts = (productId: number): string[] => {
  const product = productImageData.find((img) => img.id === productId);
  return product?.alts || ['DHAGAJI Bangdi Product'];
};
