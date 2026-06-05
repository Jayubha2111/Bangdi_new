import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/context/ThemeContext';

export const metadata: Metadata = {
  title: 'DHAGAJI  — Premium Indian Bangdi Jewelry',
  description:
    'Discover DHAGAJI \'s exquisite collection of handcrafted emerald and gold bangdi (bangles). 500+ designs crafted by master artisans with 25+ years of heritage.',
  keywords: ['bangdi', 'bangles', 'emerald jewelry', 'gold bangles', 'Indian jewelry', 'bridal bangles', 'DHAGAJI '],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth light">
      <body className="antialiased">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
