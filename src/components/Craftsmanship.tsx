'use client';

const steps = [
  {
    num: '01',
    title: 'Master Design',
    desc: 'Our master artisans sketch each piece by hand, drawing from centuries-old Mughal and Rajasthani design traditions, then digitize for precision.',
  },
  {
    num: '02',
    title: 'Stone Selection',
    desc: 'Only grade-A emeralds from Zambian and Colombian mines are hand-selected for their deep green hue, clarity, and natural brilliance.',
  },
  {
    num: '03',
    title: 'Gold Plating',
    desc: 'Each bangle receives 22K gold plating through a multi-layer electroforming process, ensuring a rich, lasting lustre that never fades.',
  },
  {
    num: '04',
    title: 'Hand Setting',
    desc: 'Every gem is individually set by skilled craftsmen using traditional kundan and pave techniques, secured with precision-cut prongs.',
  },
];

const features = [
  { icon: '✨', label: 'Lifetime Polish' },
  { icon: '✓', label: 'BIS Certified' },
  { icon: '📏', label: 'Custom Sizing' },
  { icon: '🎁', label: 'Gift Wrapping' },
];

export default function Craftsmanship() {
  return (
    <section id="craftsmanship" className="py-20 md:py-28 bg-white dark:bg-dark relative">
      {/* Grid background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30"
        dangerouslySetInnerHTML={{
          __html: `<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
            <defs>
              <pattern id="craftGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#ef2a28" stroke-width="0.3" opacity="0.08"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#craftGrid)"/>
          </svg>`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <p className="font-accent text-red-500 text-xs tracking-[0.3em] uppercase mb-4">
            Our Craftsmanship
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Mastery in <span className="text-red-shimmer">Every Detail</span>
          </h2>
          <div className="divider-gold w-24 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Text */}
          <div className="animate-fadeIn">
            <p className="font-body text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              At DHAGAJI , every bangdi is born from a legacy of master craftsmanship that spans four generations. Our atelier in Jaipur&apos;s historic gem district has been creating heirloom-quality emerald and gold bangles since 1998.
            </p>
            <p className="font-body text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
              We combine ancient hand-tooling techniques with modern precision to craft pieces that are as durable as they are beautiful. Each bangle passes through the hands of twelve master artisans before it reaches you.
            </p>
            <a
              href="#contact"
              className="btn-gold inline-block px-8 py-3.5 text-xs tracking-[0.15em] rounded uppercase"
            >
              Visit Our Studio
            </a>
          </div>

          {/* Right: Process steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {steps.map((step) => (
              <div
                key={step.num}
                className="process-step bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-5 md:p-6 group transition-all duration-300"
              >
                <span className="font-accent text-red-500 text-3xl font-bold block mb-2">{step.num}</span>
                <h3 className="font-accent text-gray-900 dark:text-white text-sm tracking-[0.1em] uppercase mb-2">{step.title}</h3>
                <p className="font-body text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features strip */}
        <div className="mt-16 pt-10 border-t border-gray-200 dark:border-dark-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((f) => (
              <div
                key={f.label}
                className="feature-icon-wrap flex items-center gap-3 bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg px-4 py-3 md:px-5 md:py-4"
              >
                <span className="text-lg">{f.icon}</span>
                <span className="font-accent text-gray-700 dark:text-gray-300 text-xs tracking-[0.1em] uppercase">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
