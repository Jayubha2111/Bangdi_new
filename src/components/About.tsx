'use client';

const values = [
  'Ethical Sourcing — Every emerald is conflict-free and traceable to its mine of origin.',
  'No-Tarnish Guarantee — Our gold plating resists oxidation for a lifetime of wear.',
  'Artisan Fair Pay — We ensure living wages and safe conditions for every crafts-person.',
  'Heritage Techniques — Traditional kundan and meenakari methods preserved and honoured.',
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-accent text-red-500 text-xs tracking-[0.3em] uppercase mb-4">
            About DHAGAJI 
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            A Legacy of <span className="text-red-shimmer">Grace</span>
          </h2>
          <div className="divider-gold w-24 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Animated SVG Visual */}
          <div className="relative flex items-center justify-center animate-fadeIn">
            <div className="relative w-full max-w-[400px] mx-auto aspect-square">
              {/* Rotating outer ring */}
              <div className="absolute inset-0" style={{ animation: 'rotateRing 20s linear infinite' }}>
                <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="200" cy="200" r="185" fill="none" stroke="#ef2a28" strokeWidth="1" strokeDasharray="4 6" opacity="0.5" />
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                    const rad = (angle * Math.PI) / 180;
                    return (
                      <circle
                        key={i}
                        cx={200 + 185 * Math.cos(rad)}
                        cy={200 + 185 * Math.sin(rad)}
                        r="4"
                        fill="#ef2a28"
                        opacity="0.8"
                      />
                    );
                  })}
                </svg>
              </div>

              {/* Static middle ring */}
              <div className="absolute inset-[40px]">
                <svg viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="160" cy="160" r="140" fill="none" stroke="#ef2a28" strokeWidth="0.5" opacity="0.35" />
                </svg>
              </div>

              {/* Emerald sphere */}
              <div className="absolute inset-[80px] flex items-center justify-center"
                style={{ animation: 'emeraldPulse 4s ease-in-out infinite' }}
              >
                <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <defs>
                    <radialGradient id="aboutEmerald" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="50%" stopColor="#065f46" />
                      <stop offset="100%" stopColor="#022c22" />
                    </radialGradient>
                  </defs>
                  <circle cx="120" cy="120" r="100" fill="url(#aboutEmerald)" opacity="0.9" />
                  <circle cx="120" cy="120" r="100" fill="none" stroke="#ef2a28" strokeWidth="1.5" opacity="0.6" />
                  <circle cx="120" cy="120" r="70" fill="none" stroke="#ef2a28" strokeWidth="0.5" opacity="0.3" />
                  <circle cx="120" cy="120" r="40" fill="none" stroke="#ef2a28" strokeWidth="0.5" opacity="0.3" />
                  <text x="120" y="124" textAnchor="middle" fill="#ff4444" fontFamily="Cinzel" fontSize="32" fontWeight="600">25</text>
                  <text x="120" y="148" textAnchor="middle" fill="#ef2a28" fontFamily="Cinzel" fontSize="12" opacity="0.8">YEARS</text>
                </svg>
              </div>

              {/* Floating stat badges */}
              <div className="absolute top-2 left-0 animate-fadeIn delay-200">
                <div className="bg-dark-card/90 backdrop-blur-sm border border-dark-border rounded-lg px-4 py-2">
                  <div className="stat-value font-accent text-lg font-bold">500+</div>
                  <div className="font-body text-gray-400 text-xs">Designs</div>
                </div>
              </div>
              <div className="absolute bottom-2 right-0 animate-fadeIn delay-300">
                <div className="bg-dark-card/90 backdrop-blur-sm border border-dark-border rounded-lg px-4 py-2">
                  <div className="stat-value font-accent text-lg font-bold">15K+</div>
                  <div className="font-body text-gray-400 text-xs">Customers</div>
                </div>
              </div>

              {/* Sparkles */}
              <div className="absolute top-[15%] right-[10%]" style={{ animation: 'sparkle 2.5s ease-in-out infinite' }}>
                <svg width="12" height="12" viewBox="0 0 20 20" fill="#ff4444">
                  <path d="M10 0L12.25 7.75L20 10L12.25 12.25L10 20L7.75 12.25L0 10L7.75 7.75L10 0Z" />
                </svg>
              </div>
              <div className="absolute bottom-[20%] left-[8%]" style={{ animation: 'sparkle 3s ease-in-out infinite 0.5s' }}>
                <svg width="10" height="10" viewBox="0 0 20 20" fill="#ef2a28">
                  <path d="M10 0L12.25 7.75L20 10L12.25 12.25L10 20L7.75 12.25L0 10L7.75 7.75L10 0Z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right: Brand story */}
          <div>
            <p className="font-body text-gray-300 text-lg leading-relaxed mb-6">
              For over twenty-five years, DHAGAJI  has been the name synonymous with exquisite emerald and gold bangdi craftsmanship. What began as a small family workshop in the Pink City has grown into a beloved brand trusted by brides across India and the diaspora.
            </p>
            <p className="font-body text-gray-400 text-lg leading-relaxed mb-8">
              Every DHAGAJI  piece tells a story — of the artisan who shaped it, the stone that was perfectly cut, and the tradition that lives on through each generation of wearers.
            </p>

            {/* Value checkmarks */}
            <div className="space-y-3">
              {values.map((v, i) => (
                <div key={i} className="flex items-start gap-3 animate-slideIn" style={{ animationDelay: `${i * 0.1}s` }}>
                  <svg width="20" height="20" viewBox="0 0 18 18" className="flex-shrink-0 mt-0.5">
                    <circle cx="9" cy="9" r="9" fill="#ef2a28" />
                    <path d="M5 9L8 12L13 6" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="font-body text-gray-300 text-base">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
