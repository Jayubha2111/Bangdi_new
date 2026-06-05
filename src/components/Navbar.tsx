'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';

const navLinks = [
  { label: 'Collection', href: '#collection' },
  { label: 'Craftsmanship', href: '#craftsmanship' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? theme === 'dark'
            ? 'navbar-scrolled'
            : 'navbar-scrolled-light'
          : theme === 'dark'
          ? 'bg-transparent'
          : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className={`font-accent text-xl md:text-2xl tracking-[0.25em] ${
            theme === 'dark' ? 'text-red-shimmer' : 'text-red-500'
          }`}>
            DHAGAJI 
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-accent text-xs tracking-[0.15em] transition-colors duration-300 uppercase ${
                  theme === 'dark'
                    ? 'text-gray-300 hover:text-red-500'
                    : 'text-gray-600 hover:text-red-500'
                }`}
              >
                {link.label}
              </a>
            ))}
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded transition-all duration-300 text-lg ${
                theme === 'dark'
                  ? 'bg-red-500/20 text-red-500 hover:bg-red-500/30'
                  : 'bg-red-100 text-red-500 hover:bg-red-200'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>

            <a
              href="#contact"
              className="btn-gold px-6 py-2.5 text-xs tracking-[0.15em] rounded"
            >
              Enquire Now
            </a>
          </div>

          {/* Hamburger + Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-red-500/20 text-red-500 hover:bg-red-500/30'
                  : 'bg-red-100 text-red-500 hover:bg-red-200'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>

            <button
              className={`md:hidden flex flex-col gap-1.5 p-2 ${mobileOpen ? 'hamburger-open' : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span className="hamburger-line" />
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden mobile-menu-enter ${
          theme === 'dark'
            ? 'bg-dark-card/95'
            : 'bg-white/95'
        } backdrop-blur-lg ${
          theme === 'dark'
            ? 'border-dark-border'
            : 'border-gray-200'
        } border-t ${
          mobileOpen ? 'mobile-menu-open' : ''
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              className={`font-accent text-sm tracking-[0.15em] transition-colors py-2 uppercase ${
                theme === 'dark'
                  ? 'text-gray-300 hover:text-red-500'
                  : 'text-gray-600 hover:text-red-500'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMobile}
            className="btn-gold text-center px-6 py-3 text-xs tracking-[0.15em] rounded mt-2"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </nav>
  );
}
