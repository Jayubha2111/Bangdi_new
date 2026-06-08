'use client';

import { useReveal } from '@/helpers/useReveal';

const features = [
  { title: '100% Handmade', description: 'Every piece crafted by hand with love and skill — no machines, no shortcuts.' },
  { title: 'Indian Tradition', description: 'Deeply rooted in Indian cultural heritage and traditional craftsmanship.' },
  { title: 'MSME Registered', description: 'Officially registered, trusted, transparent, and committed to highest quality standards.' },
  { title: 'Women Empowerment', description: 'Empowering 1000+ women with skill, income, and dignity.' },
  { title: 'Premium Quality', description: 'Only the finest threads and materials ensuring durability and beauty.' },
  { title: 'Made With Purpose', description: 'Every purchase supports local women artisans and keeps tradition alive.' },
];

export default function About() {
  const { ref: headerRef, revealed: headerRevealed } = useReveal();
  const { ref: visionRef, revealed: visionRevealed } = useReveal();
  const { ref: missionRef, revealed: missionRevealed } = useReveal();
  const { ref: statsRef, revealed: statsRevealed } = useReveal();
  const { ref: whyHeaderRef, revealed: whyHeaderRevealed } = useReveal();
  const f0 = useReveal();
  const f1 = useReveal();
  const f2 = useReveal();
  const f3 = useReveal();
  const f4 = useReveal();
  const f5 = useReveal();

  return (
    <section id="about" className="py-20 md:py-28 bg-purple-100 dark:bg-gray-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div ref={headerRef} className={`text-center mb-16 md:mb-20 reveal ${headerRevealed ? 'revealed' : ''}`}>
          <p className="font-accent text-purple-900 dark:text-amber-400 text-xs tracking-[0.3em] uppercase mb-4">
            Our Story • Our Soul • Our Purpose
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-purple-900 dark:text-gray-50 mb-6">
            About Us
          </h2>
          <div className="divider-gold w-32 mx-auto mt-6 h-1 bg-amber-500 dark:bg-amber-400"/>
        </div>

        {/* MAIN STORY */}
        <div className="max-w-4xl mx-auto mb-16 md:mb-20">
          <p className="font-body text-lg text-gray-800 dark:text-gray-300 leading-relaxed mb-6">
            <span className="font-bold text-purple-900 dark:text-gray-300">Dhagaji Creation</span> is a proud MSME registered, 100% handmade thread jewellery brand rooted in the heart of Indian tradition. Born in <span className="font-bold">Himmatnagar, Sabarkantha, Gujarat</span> — every piece we craft carries the soul of our culture, woven with love, skill, and deep purpose.
          </p>
          
          <div className="bg-purple-200 dark:bg-purple-900 border-l-4 border-amber-500 dark:border-amber-400/50 p-6 md:p-8 rounded-lg mb-6">
            <p className="font-body text-base md:text-lg text-gray-800 dark:text-gray-300">
              We are more than a jewellery brand. <span className="font-bold">We are a movement</span> — empowering thousands of women around us by giving them a platform, a skill, and a dignified livelihood. From vibrant threads to stunning traditional designs, every creation is a celebration of Indian art, craftsmanship, and womanhood.
            </p>
          </div>

          <p className="font-body text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
            At Dhagaji Creation, we believe that <span className="font-bold">every thread tells a story</span> — a story of <span className="font-bold">culture, courage, and creativity</span>. We are committed to keeping the art of thread jewellery alive, one handcrafted piece at a time.
          </p>
        </div>

        {/* VISION & MISSION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20">
          {/* VISION */}
          <div ref={visionRef} className={`bg-purple-900 dark:bg-purple-950 rounded-lg p-8 md:p-10 text-white reveal-left ${visionRevealed ? 'revealed' : ''}`}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">✦</span>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-amber-400">OUR VISION</h3>
            </div>
            <div className="w-16 h-1 bg-amber-400 mb-6"/>
            <p className="font-body text-base md:text-lg leading-relaxed text-gray-100">
              To establish <span className="font-bold text-amber-400">Dhagaji Creation</span> as India's most trusted handcrafted thread jewellery brand — proudly carrying Indian traditional culture to every home, while empowering <span className="font-bold text-amber-400">1000+ women</span> through the timeless art of crafting.
            </p>
          </div>

          {/* MISSION */}
          <div ref={missionRef} className={`border-2 border-amber-500 dark:border-amber-400/50 rounded-lg p-8 md:p-10 dark:bg-gray-900 reveal-right ${missionRevealed ? 'revealed' : ''}`}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">✦</span>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-purple-900 dark:text-gray-50">OUR MISSION</h3>
            </div>
            <div className="w-16 h-1 bg-amber-500 dark:bg-amber-400 mb-6"/>
            <p className="font-body text-base md:text-lg leading-relaxed text-gray-800 dark:text-gray-300">
              To manufacture and deliver authentic handmade thread jewellery that reflects the richness of Indian tradition — while building a powerful community of skilled women artisans who craft with <span className="font-bold">pride, passion, and purpose.</span>
            </p>
          </div>
        </div>

        {/* STATS */}
        <div ref={statsRef} className={`bg-purple-900 dark:bg-purple-950 rounded-lg p-8 md:p-12 mb-16 md:mb-20 reveal ${statsRevealed ? 'revealed' : ''}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { number: '1000+', label: 'Women Empowered' },
              { number: '100%', label: 'Handmade' },
              { number: 'MSME', label: 'Registered' },
              { number: 'Made', label: 'IN INDIA' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="font-accent text-3xl md:text-4xl font-bold text-amber-400 mb-2">{stat.number}</p>
                <p className="font-body text-xs md:text-sm text-gray-300 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* WHY CHOOSE DHAGAJI */}
        <div>
          <div ref={whyHeaderRef} className={`text-center mb-14 reveal ${whyHeaderRevealed ? 'revealed' : ''}`}>
            <h3 className="font-display text-4xl md:text-5xl font-bold text-purple-900 dark:text-gray-50 mb-4">
              Why Choose Dhagaji?
            </h3>
            <p className="font-accent text-purple-700 dark:text-amber-400 text-xs tracking-[0.3em] uppercase">
              Reasons to Wear Our Tradition With Pride
            </p>
            <div className="divider-gold w-32 mx-auto mt-6 h-1 bg-amber-500 dark:bg-amber-400"/>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {features.map((feature, i) => (
              <div 
                key={i} 
                ref={[f0, f1, f2, f3, f4, f5][i].ref}
                className={`bg-white dark:bg-gray-900 rounded-lg p-6 md:p-8 border-l-4 border-amber-500 dark:border-amber-400/50 hover:shadow-lg transition-shadow reveal ${[f0, f1, f2, f3, f4, f5][i].revealed ? 'revealed' : ''}`}
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                    <span className="text-2xl text-purple-900 dark:text-amber-400">✦</span>
                  </div>
                  <div>
                    <h4 className="font-accent text-lg font-bold text-purple-900 dark:text-amber-400 mb-2">
                      {feature.title}
                    </h4>
                    <p className="font-body text-sm text-gray-700 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
