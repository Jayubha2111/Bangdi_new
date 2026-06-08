'use client';

const steps = [
  {
    num: '01',
    title: 'Master Design',
    desc: 'Our master artisans sketch each piece by hand, drawing from centuries-old Indian design traditions, then digitize for precision.',
  },
  {
    num: '02',
    title: 'Thread Selection',
    desc: 'Only the finest quality threads in vibrant colors are carefully hand-selected for their durability and brilliance.',
  },
  {
    num: '03',
    title: 'Thread Wrapping',
    desc: 'Each piece is meticulously hand-wrapped with thread through traditional techniques, creating beautiful patterns and designs.',
  },
  {
    num: '04',
    title: 'Hand Finishing',
    desc: 'Every piece is individually finished by skilled artisans using traditional methods, ensuring precision and beauty.',
  },
];

const SparkleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-400 dark:text-amber-400">
    <path d="M12 2l1.5 6.5L20 10l-6.5 1.5L12 18l-1.5-6.5L4 10l6.5-1.5z"/>
    <path d="M22 12l-1.5 6.5L14 19l6.5-1.5L22 12z" opacity="0.5"/>
    <path d="M10 22l-1.5-6.5L2 14l6.5 1.5L10 22z" opacity="0.5"/>
  </svg>
);
const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400 dark:text-amber-400">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const RulerIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400 dark:text-amber-400">
    <path d="M2 22L22 2"/>
    <path d="M12 12l5-5"/>
    <path d="M16 8l2-2"/>
    <path d="M8 16l-2 2"/>
    <path d="M4 20l1-1"/>
  </svg>
);
const GiftIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400 dark:text-amber-400">
    <polyline points="20 12 20 22 4 22 4 12"/>
    <rect x="2" y="7" width="20" height="5"/>
    <line x1="12" y1="22" x2="12" y2="7"/>
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
  </svg>
);

const features = [
  { icon: <SparkleIcon />, label: 'Lifetime Polish' },
  { icon: <CheckIcon />, label: 'BIS Certified' },
  { icon: <RulerIcon />, label: 'Custom Sizing' },
  { icon: <GiftIcon />, label: 'Gift Wrapping' },
];

export default function Craftsmanship() {
  return (
    <section id="craftsmanship" className="py-20 md:py-28 bg-white dark:bg-slate-950 relative">
      {/* Grid background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30"
        dangerouslySetInnerHTML={{
          __html: `<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
            <defs>
              <pattern id="craftGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#d4af37" stroke-width="0.3" opacity="0.08"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#craftGrid)"/>
          </svg>`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <p className="font-accent text-purple-900 dark:text-amber-400 text-xs tracking-[0.3em] uppercase mb-4">
            Our Craftsmanship
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-purple-900 dark:text-white mb-4">
            Mastery in <span className="text-amber-500 dark:text-amber-400">Every Detail</span>
          </h2>
          <div className="divider-gold w-24 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Text */}
          <div className="animate-fadeIn">
            <p className="font-body text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              At Dhagaji Creation, every thread jewellery piece is born from a legacy of master craftsmanship passed down through generations. Our artisans in Himmatnagar, Gujarat have been creating handmade thread jewellery since we started, combining traditional techniques with modern precision.
            </p>
            <p className="font-body text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
              We combine centuries-old hand-wrapping techniques with modern precision to craft pieces that are as durable as they are beautiful. Each piece passes through the hands of skilled women artisans who work with pride and passion.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3.5 text-xs tracking-[0.15em] rounded uppercase font-bold transition-all bg-purple-900 text-amber-400 border-2 border-amber-400 hover:bg-amber-400 hover:text-purple-900"
            >
              Contact Us
            </a>
          </div>

          {/* Right: Process steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {steps.map((step) => (
              <div
                key={step.num}
                className="process-step bg-white dark:bg-slate-800 border-2 border-amber-500 dark:border-amber-400 rounded-lg p-5 md:p-6 group transition-all duration-300 hover:shadow-lg"
              >
                <span className="font-accent text-amber-500 dark:text-amber-400 text-4xl font-bold block mb-2">{step.num}</span>
                <h3 className="font-accent text-purple-900 dark:text-white text-sm tracking-[0.1em] uppercase mb-2">{step.title}</h3>
                <p className="font-body text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features strip */}
        <div className="mt-16 pt-10 border-t border-gray-200 dark:border-slate-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((f) => (
              <div
                key={f.label}
                className="feature-icon-wrap flex items-center gap-3 bg-white dark:bg-slate-800 border-2 border-amber-500 dark:border-amber-400 rounded-lg px-4 py-3 md:px-5 md:py-4 hover:shadow-md transition-all"
              >
                <span className="flex-shrink-0">{f.icon}</span>
                <span className="font-accent text-purple-900 dark:text-amber-400 text-xs tracking-[0.1em] uppercase">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
