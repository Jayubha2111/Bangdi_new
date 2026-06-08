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
      fill="url(#goldGrad)"
    />
    <defs>
      <linearGradient id="goldGrad" x1="0" y1="0" x2="20" y2="20">
        <stop offset="0%" stopColor="#d4af37" />
        <stop offset="100%" stopColor="#ffd700" />
      </linearGradient>
    </defs>
  </svg>
);

// ─── Props: pass desktopImage & mobileImage from parent ───
interface HeroProps {
  desktopImage?: string;
  mobileImage?: string;
}

export default function Hero({
  desktopImage = '/download6.jpeg',
  mobileImage  = '/download6.jpeg',             // if not passed, falls back to desktopImage
}: HeroProps) {
  const orbRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
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

  // Pick correct image
  const bgImage = isMobile && mobileImage ? mobileImage : desktopImage;

  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: '100vh', width: '100%', display: 'flex', flexDirection: 'column' }}
    >
      {/* ── BACKGROUND IMAGE ── */}
      <img
        src={bgImage}
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: isMobile ? 'center center' : 'center 30%',
          display: 'block',
          zIndex: 0,
        }}
      />







      {/* ── Decorative geometric lines ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: 0.10,
          zIndex: 2,
          display: isMobile ? 'none' : 'block',
        }}
        dangerouslySetInnerHTML={{
          __html: `<svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
            <circle cx="600" cy="400" r="300" fill="none" stroke="#d4af37" stroke-width="0.5" stroke-dasharray="8 8"/>
            <circle cx="600" cy="400" r="280" fill="none" stroke="#d4af37" stroke-width="0.3"/>
            <polygon points="600,150 950,650 250,650" fill="none" stroke="#d4af37" stroke-width="0.5" opacity="0.4"/>
            <line x1="600" y1="50" x2="600" y2="750" stroke="#d4af37" stroke-width="0.3" opacity="0.2"/>
            <line x1="100" y1="400" x2="1100" y2="400" stroke="#d4af37" stroke-width="0.3" opacity="0.2"/>
          </svg>`,
        }}
      />

      {/* ── Sparkles ── */}
      {sparklePositions
        // on mobile show fewer sparkles
        .filter((_, i) => !isMobile || i % 3 === 0)
        .map((s, i) => (
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

      {/* ── MAIN CONTENT ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: isMobile ? '5rem 1.25rem 8rem' : '6rem 1rem 7rem',
        }}
      >
        <div style={{ maxWidth: '56rem', width: '100%', textAlign: 'center' }}>
          <p
            className="font-accent animate-fadeIn"
            style={{
              color: '#d4af37',
              fontSize: isMobile ? '0.6rem' : '0.7rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
              textShadow: '0 1px 6px rgba(0,0,0,0.5)',
            }}
          >
            ✦ MSME Registered Brand ✦
          </p>

          <h1
            className="font-display animate-fadeIn"
            style={{
              fontSize: isMobile ? 'clamp(2.5rem, 18vw, 4.5rem)' : 'clamp(3.5rem, 12vw, 7.5rem)',
              fontWeight: 700,
              lineHeight: 1.0,
              marginBottom: '0.5rem',
              color: '#ffffff',
              textShadow: '0 2px 40px rgba(107,46,127,0.4), 0 1px 0 rgba(0,0,0,0.3)',
            }}
          >
            DHAGAJI
          </h1>

          <h2
            className="font-accent animate-fadeIn"
            style={{
              fontSize: isMobile ? '1.1rem' : '1.5rem',
              fontWeight: 600,
              marginBottom: '1.5rem',
              color: '#d4af37',
              textShadow: '0 2px 30px rgba(107,46,127,0.3)',
              letterSpacing: '0.05em',
            }}
          >
            CREATION
          </h2>

          <p
            className="font-body animate-fadeIn"
            style={{
              fontStyle: 'italic',
              fontSize: isMobile ? 'clamp(0.85rem, 3.5vw, 1rem)' : 'clamp(0.95rem, 2.2vw, 1.4rem)',
              marginBottom: '2rem',
              color: '#f3f4f6',
              textShadow: '0 1px 10px rgba(0,0,0,0.6)',
            }}
          >
            Threads of India • 100% Handmade • Women Empowered
          </p>

          <div
            className="animate-fadeIn"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.875rem',
            }}
          >
            <a
              href="#collection"
              style={{
                padding: isMobile ? '0.75rem 1.75rem' : '0.875rem 2.5rem',
                fontSize: '0.8rem',
                letterSpacing: '0.15em',
                borderRadius: '0.25rem',
                display: 'inline-block',
                backgroundColor: '#6b2e7f',
                color: '#d4af37',
                textDecoration: 'none',
                border: '2px solid #d4af37',
                fontWeight: 600,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#d4af37';
                e.currentTarget.style.color = '#4F1D74';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#4F1D74';
                e.currentTarget.style.color = '#d4af37';
              }}
            >
              Explore Collection
            </a>
            <a
              href="#craftsmanship"
              style={{
                padding: isMobile ? '0.75rem 1.75rem' : '0.875rem 2.5rem',
                fontSize: '0.8rem',
                letterSpacing: '0.15em',
                borderRadius: '0.25rem',
                display: 'inline-block',
                backgroundColor: 'transparent',
                color: '#d4af37',
                textDecoration: 'none',
                border: '2px solid #d4af37',
                fontWeight: 600,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#d4af37';
                e.currentTarget.style.color = '#4F1D74';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#d4af37';
              }}
            >
              About Us
            </a>
          </div>
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div
        style={{
          position: 'absolute',
          bottom: isMobile ? '2.75rem' : '3.5rem',
          left: 0,
          width: '100%',
          zIndex: 10,
        }}
      >
        <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '0 1rem' }}>
          <div
            className="animate-fadeIn"
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: isMobile ? '2rem' : 'clamp(2rem, 8vw, 5rem)',
            }}
          >
            {[
              { value: '1000+', label: 'Women Empowered' },
              { value: '100%', label: 'Handmade' },
              { value: 'MSME', label: 'Registered' },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <div
                  className="font-accent"
                  style={{
                    fontSize: isMobile ? 'clamp(1.2rem, 5vw, 1.6rem)' : 'clamp(1.5rem, 3.5vw, 2.2rem)',
                    fontWeight: 700,
                    color: '#d4af37',
                    lineHeight: 1,
                    marginBottom: '0.2rem',
                    textShadow: '0 2px 20px rgba(107,46,127,0.4)',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="font-body"
                  style={{
                    fontSize: isMobile ? '0.5rem' : '0.6rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#e5e7eb',
                    textShadow: '0 1px 4px rgba(0,0,0,0.6)',
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
          bottom: '0.75rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.3rem',
        }}
      >
        <span
          className="font-accent"
          style={{
            fontSize: '0.5rem',
            letterSpacing: '0.2em',
            color: '#d4af37',
            textTransform: 'uppercase',
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 24,
            background: 'linear-gradient(to bottom, #d4af37, transparent)',
            animation: 'scrollIndicator 1.5s ease-in-out infinite',
          }}
        />
      </div>
    </section>
  );
}