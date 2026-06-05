export default function About() {
  return (
    <section
      id="about"
      className="py-28 px-6 lg:px-12 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #080f0b 100%)" }}
    >
      {/* BG pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #d4a017 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Visual */}
          <div className="relative flex items-center justify-center">
            {/* Rotating outer ring */}
            <div
              className="absolute w-80 h-80 rounded-full border border-[#d4a01720]"
              style={{ animation: "rotateSlow 25s linear infinite" }}
            >
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-[#d4a017]"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: `rotate(${i * 45}deg) translateY(-158px) translateX(-4px)`,
                    opacity: 0.6,
                  }}
                />
              ))}
            </div>

            {/* Inner emerald circle */}
            <div
              className="w-60 h-60 rounded-full flex items-center justify-center relative"
              style={{
                background: "radial-gradient(circle at 35% 30%, #0d6b4b 0%, #065f46 40%, #022c22 100%)",
                boxShadow: "0 0 60px rgba(6,95,70,0.4), inset 0 2px 10px rgba(255,255,255,0.1)",
              }}
            >
              {/* Bangdi rings on sphere */}
              <div className="absolute inset-6 rounded-full border-4 border-[#d4a01760]" />
              <div className="absolute inset-10 rounded-full border-2 border-[#d4a01740]" />
              <div className="text-center">
                <div className="gold-shimmer font-accent text-3xl font-bold">25</div>
                <div className="font-body text-xs text-[#8a7a6a] tracking-widest uppercase">Years</div>
              </div>
            </div>

            {/* Floating badges */}
            <div
              className="absolute top-4 right-4 bg-[#111111] border border-[#d4a01740] px-4 py-3 text-center"
              style={{ boxShadow: "0 0 20px rgba(212,160,23,0.15)" }}
            >
              <div className="gold-shimmer font-accent text-xl font-bold">500+</div>
              <div className="font-body text-[10px] text-[#6a5a4a] tracking-widest uppercase">Designs</div>
            </div>
            <div
              className="absolute bottom-6 left-0 bg-[#111111] border border-[#d4a01740] px-4 py-3 text-center"
              style={{ boxShadow: "0 0 20px rgba(212,160,23,0.15)" }}
            >
              <div className="gold-shimmer font-accent text-xl font-bold">15K+</div>
              <div className="font-body text-[10px] text-[#6a5a4a] tracking-widest uppercase">Customers</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="divider-gold w-12" />
              <span className="font-accent text-[10px] tracking-[0.45em] text-[#d4a017] uppercase">Our Story</span>
            </div>
            <h2 className="font-display text-5xl font-bold text-[#f5f0e8] mb-6 leading-tight">
              Born in{" "}
              <span className="italic gold-shimmer">Rajasthan</span>
              ,<br />
              Loved Across India
            </h2>
            <p className="font-body text-lg text-[#8a7a6a] mb-6 leading-relaxed font-light">
              Shringaar was founded in 1999 by master artisan Shri Ramesh Soni in the heart of Jaipur's jewellery district.
              What began as a small workshop crafting bangles for local brides has grown into India's most trusted premium
              bangdi brand.
            </p>
            <p className="font-body text-base text-[#6a5a4a] mb-8 leading-relaxed font-light">
              Our philosophy is simple: every woman deserves to feel like royalty. We believe the right bangdi doesn't
              just accessorise an outfit — it tells your story, carries your culture, and announces your arrival.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              {[
                "Ethical Sourcing",
                "No-Tarnish Guarantee",
                "Artisan Fair Pay",
                "Heritage Techniques",
              ].map((v) => (
                <div key={v} className="flex items-center gap-3">
                  <span className="text-[#d4a017] text-xs">✦</span>
                  <span className="font-body text-sm text-[#8a7a6a] font-light">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
