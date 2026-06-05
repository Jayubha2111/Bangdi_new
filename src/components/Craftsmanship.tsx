"use client";

const steps = [
  {
    num: "01",
    title: "Master Design",
    desc: "Each design begins as a hand-drawn sketch by our master craftsmen, inspired by Mughal motifs and modern luxury aesthetics.",
    icon: "✦",
  },
  {
    num: "02",
    title: "Stone Selection",
    desc: "Only the finest emerald glass crystals and semi-precious stones are hand-selected for brilliance, colour, and cut uniformity.",
    icon: "◈",
  },
  {
    num: "03",
    title: "Gold Plating",
    desc: "Our brass base undergoes a 6-layer 24-karat gold electroplating process for deep, lasting lustre that won't tarnish.",
    icon: "◆",
  },
  {
    num: "04",
    title: "Hand Setting",
    desc: "Every stone is individually hand-set by artisans with 20+ years of experience, ensuring perfect alignment and secure seating.",
    icon: "❋",
  },
];

export default function Craftsmanship() {
  return (
    <section
      id="craftsmanship"
      className="relative py-28 px-6 lg:px-12 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #0c1510 50%, #0a0a0a 100%)" }}
    >
      {/* Decorative background */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 60px, #d4a01718 60px, #d4a01718 61px),
            repeating-linear-gradient(90deg, transparent, transparent 60px, #d4a01718 60px, #d4a01718 61px)
          `,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="divider-gold w-12" />
              <span className="font-accent text-[10px] tracking-[0.45em] text-[#d4a017] uppercase">Our Process</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-[#f5f0e8] mb-6 leading-tight">
              The Art of{" "}
              <span className="italic gold-shimmer">Craftsmanship</span>
            </h2>
            <p className="font-body text-lg text-[#8a7a6a] mb-8 leading-relaxed font-light">
              Every Shringaar bangdi carries within it the legacy of generations. Our artisans, based in the jewellery
              capital of Rajasthan, have been perfecting this craft for over a quarter century.
            </p>
            <p className="font-body text-base text-[#6a5a4a] mb-10 leading-relaxed font-light">
              We use only conflict-free materials, ethically sourced and processed in our family-owned workshop.
              No two pieces are identical — each one holds its own soul.
            </p>
            <a href="#collection" className="btn-gold inline-block">
              Discover the Pieces
            </a>
          </div>

          {/* Right — steps */}
          <div className="space-y-6">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="flex gap-5 p-6 border border-[#1e1e1e] bg-[#111111] hover:border-[#d4a01740] transition-all duration-300 group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Number */}
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center border border-[#2a2a2a] group-hover:border-[#d4a017] transition-colors">
                  <span className="font-accent text-sm text-[#d4a017] tracking-widest">{step.num}</span>
                </div>
                {/* Content */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#d4a017] text-sm">{step.icon}</span>
                    <h3 className="font-display text-lg font-semibold text-[#f0e8d8] group-hover:text-[#d4a017] transition-colors">
                      {step.title}
                    </h3>
                  </div>
                  <p className="font-body text-sm text-[#7a6a5a] leading-relaxed font-light">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Horizontal divider */}
        <div className="my-24 divider-gold" />

        {/* Features strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: "♾", label: "Lifetime Polish", sub: "Free touch-up guarantee" },
            { icon: "✦", label: "BIS Certified", sub: "Hallmarked gold plating" },
            { icon: "◈", label: "Custom Sizing", sub: "Made to your measure" },
            { icon: "❦", label: "Gift Wrapping", sub: "Luxury box included" },
          ].map((f) => (
            <div key={f.label} className="group">
              <div className="text-4xl mb-3 text-[#d4a017] group-hover:scale-110 transition-transform inline-block">
                {f.icon}
              </div>
              <div className="font-accent text-sm tracking-widest text-[#c5b89a] uppercase mb-1">{f.label}</div>
              <div className="font-body text-xs text-[#5a4a3a]">{f.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
