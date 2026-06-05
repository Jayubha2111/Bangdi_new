'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

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
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const handleMouse = (e: MouseEvent) => {
      if (!orbRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      orbRef.current.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    };
    window.addEventListener('mousemove', handleMouse, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouse);
  }, [mounted]);

  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: '100vh', width: '100%', display: 'flex', flexDirection: 'column' }}
    >
      {/* ── BACKGROUND IMAGE — full screen, no white overlay ── */}
      <img
        src="/download4.jpeg"
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 30%', // shows more of the jewelry, not too zoomed in
          display: 'block',
          zIndex: 0,
        }}
      />

      {/* ── Scrim: very light overlay just for text readability ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background:
            theme === 'dark'
              ? 'linear-gradient(to bottom, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0.30) 40%, rgba(0,0,0,0.60) 100%)'
              : 'linear-gradient(to bottom, rgba(255,255,255,0.30) 0%, rgba(255,255,255,0.10) 40%, rgba(255,255,255,0.35) 100%)',
        }}
      />

      {/* ── Red accent glow center ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          background: 'radial-gradient(ellipse at center, rgba(239,42,40,0.07) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Parallax orb ── */}
      <div
        ref={orbRef}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(239,42,40,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* ── Decorative geometric lines ── */}
      <div
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.10, zIndex: 2 }}
        dangerouslySetInnerHTML={{
          __html: `<svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
            <circle cx="600" cy="400" r="300" fill="none" stroke="#ef2a28" stroke-width="0.5" stroke-dasharray="8 8"/>
            <circle cx="600" cy="400" r="280" fill="none" stroke="#ef2a28" stroke-width="0.3"/>
            <polygon points="600,150 950,650 250,650" fill="none" stroke="#ef2a28" stroke-width="0.5" opacity="0.4"/>
            <line x1="600" y1="50" x2="600" y2="750" stroke="#ef2a28" stroke-width="0.3" opacity="0.2"/>
            <line x1="100" y1="400" x2="1100" y2="400" stroke="#ef2a28" stroke-width="0.3" opacity="0.2"/>
          </svg>`,
        }}
      />

      {/* ── Sparkles ── */}
      {sparklePositions.map((s, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: s.top,
            left: s.left,
            animation: `sparkle 2s ease-in-out infinite`,
            animationDelay: s.delay,
            pointerEvents: 'none',
            zIndex: 3,
          }}
        >
          <SparkleIcon size={s.size} />
        </div>
      ))}

      {/* ── MAIN CONTENT — centered vertically, padded for navbar ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '6rem',   // navbar height clearance
          paddingBottom: '7rem', // stats bar clearance
          padding: '6rem 1rem 7rem',
        }}
      >
        <div style={{ maxWidth: '56rem', width: '100%', textAlign: 'center' }}>
          <p
            className="font-accent animate-fadeIn"
            style={{
              color: '#ef2a28',
              fontSize: '0.7rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
              textShadow: theme === 'light' ? '0 1px 6px rgba(255,255,255,0.8)' : 'none',
            }}
          >
            Handcrafted Heritage Since 1998
          </p>

          <h1
            className="font-display animate-fadeIn"
            style={{
              fontSize: 'clamp(4rem, 13vw, 9rem)',
              fontWeight: 700,
              lineHeight: 1.0,
              marginBottom: '1.25rem',
              color: '#ef2a28',
              textShadow: '0 2px 40px rgba(239,42,40,0.35)',
            }}
          >
            DHAGAJI
          </h1>

          <p
            className="font-body animate-fadeIn"
            style={{
              fontStyle: 'italic',
              fontSize: 'clamp(1rem, 2.5vw, 1.6rem)',
              marginBottom: '2.5rem',
              color: theme === 'dark' ? '#f3f4f6' : '#1a1a1a',
              textShadow:
                theme === 'light'
                  ? '0 1px 12px rgba(255,255,255,0.9)'
                  : '0 1px 8px rgba(0,0,0,0.5)',
            }}
          >
            Adorning Indias Brides with Emerald &amp; Gold for Generations
          </p>

          <div
            className="animate-fadeIn"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
            }}
          >
            <a
              href="#collection"
              className="btn-gold"
              style={{
                padding: '0.875rem 2.5rem',
                fontSize: '0.8rem',
                letterSpacing: '0.15em',
                borderRadius: '0.25rem',
                display: 'inline-block',
              }}
            >
              Explore Collection
            </a>
            <a
              href="#craftsmanship"
              className="btn-gold-outline"
              style={{
                padding: '0.875rem 2.5rem',
                fontSize: '0.8rem',
                letterSpacing: '0.15em',
                borderRadius: '0.25rem',
                display: 'inline-block',
              }}
            >
              Our Craft
            </a>
          </div>
        </div>
      </div>

      {/* ── STATS BAR — pinned to bottom, above scroll indicator ── */}
      <div
        style={{
          position: 'absolute',
          bottom: '3.5rem',
          left: 0,
          width: '100%',
          zIndex: 10,
        }}
      >
        <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '0 1rem' }}>
          <div
            className="animate-fadeIn"
            style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(2rem, 8vw, 5rem)' }}
          >
            {[
              { value: '500+', label: 'Designs' },
              { value: '15K+', label: 'Customers' },
              { value: '25+', label: 'Years' },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <div
                  className="font-accent"
                  style={{
                    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                    fontWeight: 700,
                    color: '#ef2a28',
                    lineHeight: 1,
                    marginBottom: '0.25rem',
                    textShadow: '0 2px 20px rgba(239,42,40,0.3)',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="font-body"
                  style={{
                    fontSize: '0.65rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: theme === 'dark' ? '#d1d5db' : '#1a1a1a',
                    textShadow:
                      theme === 'light'
                        ? '0 1px 6px rgba(255,255,255,0.8)'
                        : '0 1px 4px rgba(0,0,0,0.5)',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <div
        style={{
          position: 'absolute',
          bottom: '1rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.4rem',
        }}
      >
        <span
          className="font-accent"
          style={{
            fontSize: '0.55rem',
            letterSpacing: '0.2em',
            color: '#ef2a28',
            textTransform: 'uppercase',
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 28,
            background: 'linear-gradient(to bottom, #ef2a28, transparent)',
            animation: 'scrollIndicator 1.5s ease-in-out infinite',
          }}
        />
      </div>
    </section>
  );
}