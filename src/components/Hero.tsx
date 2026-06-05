"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      const orb = heroRef.current.querySelector(".orb-main") as HTMLElement;
      if (orb) {
        orb.style.transform = `translate(${x}px, ${y}px)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "radial-gradient(ellipse at center top, #0d1a14 0%, #0a0a0a 60%)" }}
    >
      {/* Decorative orbs */}
      <div
        className="orb-main absolute w-[600px] h-[600px] rounded-full pointer-events-none transition-transform duration-700 ease-out"
        style={{
          background: "radial-gradient(circle, rgba(6,95,70,0.25) 0%, transparent 70%)",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
      <div
        className="absolute w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(212,160,23,0.12) 0%, transparent 70%)",
          bottom: "15%",
          right: "10%",
        }}
      />
      <div
        className="absolute w-48 h-48 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(212,160,23,0.08) 0%, transparent 70%)",
          top: "20%",
          left: "8%",
        }}
      />

      {/* Geometric lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute w-full h-full opacity-5" viewBox="0 0 1440 900" fill="none">
          <line x1="720" y1="0" x2="720" y2="900" stroke="#d4a017" strokeWidth="0.5" />
          <line x1="0" y1="450" x2="1440" y2="450" stroke="#d4a017" strokeWidth="0.5" />
          <circle cx="720" cy="450" r="300" stroke="#d4a017" strokeWidth="0.5" />
          <circle cx="720" cy="450" r="200" stroke="#d4a017" strokeWidth="0.3" />
          <polygon points="720,150 970,600 470,600" stroke="#d4a017" strokeWidth="0.3" fill="none" opacity="0.5" />
        </svg>
      </div>

      {/* Floating sparkles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{
            top: `${15 + Math.random() * 70}%`,
            left: `${5 + Math.random() * 90}%`,
            animation: `sparkle ${2 + Math.random() * 2}s ease-in-out infinite`,
            animationDelay: `${i * 0.25}s`,
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="#d4a017" opacity={0.3 + Math.random() * 0.4}>
            <path d="M12 2L13.5 9L20 10.5L13.5 12L12 19L10.5 12L4 10.5L10.5 9Z" />
          </svg>
        </div>
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Top badge */}
        <div
          className="inline-flex items-center gap-3 mb-10 opacity-0 animate-float-up delay-100"
          style={{ animationFillMode: "forwards" }}
        >
          <div className="divider-gold w-12" />
          <span className="font-accent text-[11px] tracking-[0.4em] text-[#d4a017] uppercase">
            Handcrafted Excellence
          </span>
          <div className="divider-gold w-12" />
        </div>

        {/* Headline */}
        <h1
          className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-none mb-6 opacity-0 animate-float-up delay-200"
          style={{ animationFillMode: "forwards" }}
        >
          <span className="gold-shimmer">Shringaar</span>
        </h1>

        {/* Subtitle */}
        <p
          className="font-display text-2xl md:text-3xl lg:text-4xl italic text-[#c5b89a] mb-4 opacity-0 animate-float-up delay-300 font-light"
          style={{ animationFillMode: "forwards" }}
        >
          Where Tradition Meets Opulence
        </p>

        {/* Description */}
        <p
          className="font-body text-lg md:text-xl text-[#8a7a6a] max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-float-up delay-400"
          style={{ animationFillMode: "forwards", fontWeight: 300 }}
        >
          Discover our exclusive collection of emerald and gold bangdi — each piece meticulously crafted
          to adorn the most discerning woman.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-5 opacity-0 animate-float-up delay-500"
          style={{ animationFillMode: "forwards" }}
        >
          <a href="#collection" className="btn-gold w-52">
            Explore Collection
          </a>
          <a
            href="#craftsmanship"
            className="w-52 text-center py-3.5 px-8 border border-[#3a3a3a] text-[#c5b89a] font-accent text-xs tracking-[0.2em] uppercase hover:border-[#d4a017] hover:text-[#d4a017] transition-all duration-300"
          >
            Our Story
          </a>
        </div>

        {/* Stats bar */}
        <div
          className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16 opacity-0 animate-float-up delay-600"
          style={{ animationFillMode: "forwards" }}
        >
          {[
            { num: "500+", label: "Unique Designs" },
            { num: "15K+", label: "Happy Customers" },
            { num: "25+", label: "Years of Craft" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl md:text-4xl gold-shimmer font-bold">{stat.num}</div>
              <div className="font-body text-xs tracking-[0.2em] text-[#6a5a4a] uppercase mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="font-accent text-[9px] tracking-[0.3em] text-[#d4a017] uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#d4a017] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
