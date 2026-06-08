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
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className={`font-accent text-xl md:text-2xl tracking-[0.25em] ${
            theme === 'dark' ? 'text-amber-400' : 'text-purple-900'
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
                    ? 'text-gray-300 hover:text-amber-400'
                    : 'text-gray-600 hover:text-purple-900'
                }`}
              >
                {link.label}
              </a>
            ))}
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-amber-400/20 text-amber-400 hover:bg-amber-400/30'
                  : 'bg-purple-100 text-purple-900 hover:bg-purple-200'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              )}
            </button>

            <a
              href="#contact"
              className="px-6 py-2.5 text-xs tracking-[0.15em] rounded font-bold transition-all bg-purple-900 text-amber-400 border-2 border-amber-400 hover:bg-amber-400 hover:text-purple-900"
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
                  ? 'bg-amber-400/20 text-amber-400 hover:bg-amber-400/30'
                  : 'bg-purple-100 text-purple-900 hover:bg-purple-200'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              )}
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
            ? 'bg-slate-900/95'
            : 'bg-white/95'
        } backdrop-blur-lg ${
          theme === 'dark'
            ? 'border-slate-700'
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
                  ? 'text-gray-300 hover:text-amber-400'
                  : 'text-gray-600 hover:text-purple-900'
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
