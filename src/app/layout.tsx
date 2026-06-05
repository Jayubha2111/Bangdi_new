import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'DHAGAJI  — Premium Indian Bangdi Jewelry',
  description:
    'Discover DHAGAJI \'s exquisite collection of handcrafted emerald and gold bangdi (bangles). 500+ designs crafted by master artisans with 25+ years of heritage.',
  keywords: ['bangdi', 'bangles', 'emerald jewelry', 'gold bangles', 'Indian jewelry', 'bridal bangles', 'DHAGAJI '],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
