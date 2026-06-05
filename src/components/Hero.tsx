'use client';

import { useEffect, useRef, useState } from 'react';

const sparklePositions = [
  { top: '10%', left: '8%', delay: '0s', size: 14 },
  { top: '20%', left: '85%', delay: '0.3s', size: 10 },
  { top: '40%', left: '5%', delay: '0.6s', size: 16 },
  { top: '30%', left: '92%', delay: '0.9s', size: 12 },
  { top: '55%', left: '12%', delay: '0.2s', size: 8 },
  { top: '60%', left: '80%', delay: '0.5s', size: 14 },
  { top: '75%', left: '7%', delay: '0.8s', size: 10 },
  { top: '15%', left: '50%', delay: '1.1s', size: 12 },
  { top: '45%', left: '50%', delay: '0.4s', size: 9 },
  { top: '80%', left: '88%', delay: '0.7s', size: 11 },
  { top: '70%', left: '50%', delay: '1s', size: 13 },
  { top: '50%', left: '95%', delay: '0.1s', size: 10 },
];

const SparkleIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10 0L12.25 7.75L20 10L12.25 12.25L10 20L7.75 12.25L0 10L7.75 7.75L10 0Z"
      fill="url(#redGrad)"
    />
    <defs>
      <linearGradient id="redGrad" x1="0" y1="0" x2="20" y2="20">
        <stop offset="0%" stopColor="#ef2a28" />
        <stop offset="100%" stopColor="#ff4444" />
      </linearGradient>
    </defs>
  </svg>
);

export default function Hero() {
  const orbRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const handleMouse = (e: MouseEvent) => {
      if (!orbRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      orbRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener('mousemove', handleMouse, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouse);
  }, [mounted]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1a1a1a_0%,_#0f0f0f_40%,_#0a0a0a_70%)]" />

      {/* Parallax orb */}
      <div
        ref={orbRef}
        className="parallax-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,_rgba(239,42,40,0.15)_0%,_transparent_70%)] pointer-events-none"
      />

      {/* Decorative geometric lines */}
      <div className="absolute inset-0 pointer-events-none" dangerouslySetInnerHTML={{
        __html: `<svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg" opacity="0.12" class="w-full h-full">
          <circle cx="600" cy="400" r="300" fill="none" stroke="#ef2a28" stroke-width="0.5" stroke-dasharray="8 8"/>
          <circle cx="600" cy="400" r="280" fill="none" stroke="#ef2a28" stroke-width="0.3"/>
          <polygon points="600,150 950,650 250,650" fill="none" stroke="#ef2a28" stroke-width="0.5" opacity="0.4"/>
          <line x1="200" y1="200" x2="1000" y2="600" stroke="#1a1a1a" stroke-width="0.5" opacity="0.3"/>
          <line x1="200" y1="600" x2="1000" y2="200" stroke="#1a1a1a" stroke-width="0.5" opacity="0.3"/>
          <line x1="600" y1="50" x2="600" y2="750" stroke="#ef2a28" stroke-width="0.3" opacity="0.2"/>
          <line x1="100" y1="400" x2="1100" y2="400" stroke="#ef2a28" stroke-width="0.3" opacity="0.2"/>
          <circle cx="300" cy="250" r="40" fill="none" stroke="#1a1a1a" stroke-width="0.4" opacity="0.3"/>
          <circle cx="900" cy="550" r="50" fill="none" stroke="#1a1a1a" stroke-width="0.4" opacity="0.3"/>
        </svg>`
      }} />

      {/* Sparkle stars */}
      {sparklePositions.map((s, i) => (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{
            top: s.top,
            left: s.left,
            animation: `sparkle 2s ease-in-out infinite`,
            animationDelay: s.delay,
          }}
        >
          <SparkleIcon size={s.size} />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <p className="font-accent text-red-500 text-xs md:text-sm tracking-[0.3em] uppercase mb-6 animate-fadeIn">
          Handcrafted Heritage Since 1998
        </p>

        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight">
          <span className="text-red-shimmer">DHAGAJI </span>
        </h1>

        <p className="font-body italic text-xl md:text-2xl lg:text-3xl text-gray-300 mb-10 animate-fadeIn delay-200">
          Adorning Indias Brides with Emerald &amp; Gold for Generations
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeIn delay-300 mb-4">
          <a href="#collection" className="btn-gold px-10 py-3.5 text-sm tracking-[0.15em] rounded">
            Explore Collection
          </a>
          <a href="#craftsmanship" className="btn-gold-outline px-10 py-3.5 text-sm tracking-[0.15em] rounded">
            Our Craft
          </a>
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-12 left-0 w-full z-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center gap-12 md:gap-20 animate-fadeIn delay-500">
            {[
              { value: '500+', label: 'Designs' },
              { value: '15K+', label: 'Customers' },
              { value: '25+', label: 'Years' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-accent text-3xl md:text-4xl font-bold text-red-500 leading-none mb-1">{stat.value}</div>
                <div className="font-body text-gray-400 text-xs md:text-sm tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fadeIn delay-700">
        <span className="font-accent text-[10px] tracking-[0.2em] text-red-500 uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-red-500 to-transparent" style={{ animation: 'scrollIndicator 1.5s ease-in-out infinite' }} />
      </div>
    </section>
  );
}
