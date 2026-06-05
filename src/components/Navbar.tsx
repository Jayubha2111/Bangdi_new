"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Collection", "Craftsmanship", "About", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0a0a0aee] backdrop-blur-md border-b border-[#2a2a2a]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none">
          <span className="font-accent text-xl tracking-[0.25em] gold-shimmer font-semibold">SHRINGAAR</span>
          <span className="text-[10px] tracking-[0.4em] text-[#8a7a5a] font-body uppercase mt-0.5">Premium Bangdi</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="font-accent text-xs tracking-[0.2em] text-[#c5b89a] hover:text-[#d4a017] transition-colors duration-300 uppercase"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#collection"
          className="hidden md:block btn-gold text-xs font-semibold"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Shop Now
        </a>

        {/* Mobile Menu */}
        <button
          className="md:hidden text-[#d4a017] flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-px bg-[#d4a017] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-px bg-[#d4a017] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-[#d4a017] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f0f0f] border-t border-[#2a2a2a] px-6 py-6">
          <ul className="flex flex-col gap-5">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="font-accent text-sm tracking-[0.2em] text-[#c5b89a] hover:text-[#d4a017] transition-colors uppercase"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <a href="#collection" className="btn-gold block text-center">Shop Now</a>
          </div>
        </div>
      )}
    </nav>
  );
}
