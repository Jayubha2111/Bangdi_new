"use client";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Royal Emerald Set",
    subtitle: "24k Gold-Plated • Handset Stones",
    price: "₹4,800",
    originalPrice: "₹6,200",
    tag: "Bestseller",
    desc: "Lush emerald crystal beads set in intricate 24k gold-plated brass. A timeless statement piece for weddings and festivities.",
    gems: 48,
    size: "2.6",
    colors: ["#065f46", "#d4a017"],
  },
  {
    id: 2,
    name: "Emerald Rani Kada",
    subtitle: "Antique Gold • Heritage Craft",
    price: "₹6,500",
    originalPrice: "₹8,000",
    tag: "New",
    desc: "Wide Rani kada with hand-engraved antique gold finish and rich emerald inlay. For the bride who commands attention.",
    gems: 72,
    size: "2.8",
    colors: ["#022c22", "#b8860b"],
  },
  {
    id: 3,
    name: "Delicate Hara Chooda",
    subtitle: "Lightweight • Daily Elegance",
    price: "₹2,200",
    originalPrice: "₹3,000",
    tag: "Popular",
    desc: "A delicate chooda set in deep emerald with gold beading — perfect for everyday luxury without compromise.",
    gems: 32,
    size: "2.4",
    colors: ["#047857", "#d4a017"],
  },
  {
    id: 4,
    name: "Kundan Emerald Bangle",
    subtitle: "Kundan Setting • Polki Accents",
    price: "₹9,200",
    originalPrice: "₹11,500",
    tag: "Luxury",
    desc: "Regal kundan-set emerald bangle with polki diamond accents and meenakari detailing. Heirloom-worthy craftsmanship.",
    gems: 96,
    size: "2.6",
    colors: ["#064e3b", "#f5d76e"],
  },
  {
    id: 5,
    name: "Festive Bangdi Set (12pc)",
    subtitle: "Glass & Metal Fusion",
    price: "₹1,800",
    originalPrice: "₹2,400",
    tag: "Set",
    desc: "A vibrant set of 12 matching bangdi in emerald green and gold. Stack them for a dramatic, celebration-ready look.",
    gems: 24,
    size: "2.6",
    colors: ["#10b981", "#d4a017"],
  },
  {
    id: 6,
    name: "Bridal Haath Phool",
    subtitle: "Finger Ring + Bangdi Combo",
    price: "₹7,800",
    originalPrice: "₹9,500",
    tag: "Bridal",
    desc: "An exquisite haath phool combining emerald bangdi with a finger ring chain — the ultimate bridal accessory.",
    gems: 120,
    size: "Custom",
    colors: ["#065f46", "#f5d76e"],
  },
];

const filters = ["All", "Bridal", "Festive", "Everyday", "Luxury"];

export default function Collection() {
  const [active, setActive] = useState("All");
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="collection" className="py-28 px-6 lg:px-12" style={{ background: "#0a0a0a" }}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="divider-gold w-16" />
            <span className="font-accent text-[10px] tracking-[0.45em] text-[#d4a017] uppercase">The Collection</span>
            <div className="divider-gold w-16" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-[#f5f0e8] mb-4">
            Emerald &{" "}
            <span className="italic gold-shimmer">Gold</span>
          </h2>
          <p className="font-body text-lg text-[#8a7a6a] max-w-xl mx-auto font-light leading-relaxed">
            Each bangdi is a work of art — hand-finished by master artisans with decades of heritage craftsmanship.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`font-accent text-[10px] tracking-[0.25em] uppercase px-5 py-2.5 border transition-all duration-300 ${
                active === f
                  ? "border-[#d4a017] text-[#d4a017] bg-[#d4a01718]"
                  : "border-[#2a2a2a] text-[#6a5a4a] hover:border-[#d4a01760] hover:text-[#c5b89a]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {products.map((p, i) => (
            <div
              key={p.id}
              className="card-glow relative bg-[#111111] border border-[#1e1e1e] overflow-hidden cursor-pointer group"
              style={{ transitionDelay: `${i * 0.05}s` }}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="font-accent text-[9px] tracking-[0.3em] text-[#0a0a0a] bg-[#d4a017] px-3 py-1 uppercase">
                  {p.tag}
                </span>
              </div>

              {/* Visual placeholder */}
              <div
                className="relative h-72 overflow-hidden flex items-center justify-center"
                style={{
                  background: `radial-gradient(ellipse at center, ${p.colors[0]}33 0%, #111111 70%)`,
                }}
              >
                {/* Bangdi visual illustration */}
                <div className="relative w-44 h-44 group-hover:scale-105 transition-transform duration-500">
                  {/* Outer ring */}
                  <div
                    className="absolute inset-0 rounded-full border-8"
                    style={{
                      borderColor: p.colors[0],
                      boxShadow: `0 0 30px ${p.colors[0]}66, inset 0 0 20px ${p.colors[0]}33`,
                    }}
                  />
                  {/* Inner ring */}
                  <div
                    className="absolute inset-4 rounded-full border-4"
                    style={{
                      borderColor: p.colors[1],
                      boxShadow: `0 0 15px ${p.colors[1]}44`,
                    }}
                  />
                  {/* Gems dots */}
                  {[...Array(16)].map((_, gi) => {
                    const angle = (gi / 16) * Math.PI * 2;
                    const r = 62;
                    const cx = 88 + r * Math.cos(angle);
                    const cy = 88 + r * Math.sin(angle);
                    return (
                      <div
                        key={gi}
                        className="absolute w-3 h-3 rounded-full"
                        style={{
                          left: cx - 6,
                          top: cy - 6,
                          background: gi % 3 === 0 ? p.colors[1] : p.colors[0],
                          boxShadow: `0 0 6px ${gi % 3 === 0 ? p.colors[1] : p.colors[0]}`,
                          animation: `sparkle ${1.5 + gi * 0.1}s ease-in-out infinite`,
                          animationDelay: `${gi * 0.1}s`,
                        }}
                      />
                    );
                  })}
                  {/* Center gem */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full"
                    style={{
                      background: `radial-gradient(circle at 35% 35%, ${p.colors[0]}cc, ${p.colors[0]}44)`,
                      boxShadow: `0 0 20px ${p.colors[0]}88`,
                    }}
                  />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
              </div>

              {/* Card body */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-display text-xl font-semibold text-[#f0e8d8] group-hover:text-[#d4a017] transition-colors">
                    {p.name}
                  </h3>
                </div>
                <p className="font-accent text-[10px] tracking-[0.2em] text-[#6a5a4a] uppercase mb-3">{p.subtitle}</p>
                <p className="font-body text-sm text-[#7a6a5a] leading-relaxed mb-5 font-light">{p.desc}</p>

                {/* Meta */}
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-[10px] font-accent tracking-widest text-[#5a4a3a] uppercase">
                    {p.gems} Gems
                  </span>
                  <span className="w-px h-3 bg-[#2a2a2a]" />
                  <span className="text-[10px] font-accent tracking-widest text-[#5a4a3a] uppercase">
                    Size {p.size}
                  </span>
                </div>

                {/* Price + CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-display text-2xl text-[#d4a017] font-bold">{p.price}</span>
                    <span className="ml-2 font-body text-sm text-[#4a3a2a] line-through">{p.originalPrice}</span>
                  </div>
                  <button className="btn-gold text-[10px] px-5 py-2.5">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-14">
          <a href="#" className="inline-flex items-center gap-3 font-accent text-xs tracking-[0.25em] text-[#d4a017] uppercase hover:gap-5 transition-all duration-300">
            View Full Catalogue
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
