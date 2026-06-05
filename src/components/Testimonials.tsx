'use client';

import { useState, useEffect } from 'react';

const reviews = [
  {
    text: 'The emerald bangdi set I ordered for my wedding was absolutely breathtaking. Every guest complimented them. The gold shimmer is even more stunning in person — it caught the light beautifully in every photograph.',
    author: 'Ananya Sharma',
    city: 'Mumbai',
    product: 'Royal Emerald Set',
    rating: 5,
  },
  {
    text: 'I have never owned jewelry that feels so substantial yet delicate at the same time. The craftsmanship is evident in every detail. My Bridal Haath Phool was the talk of my sangeet ceremony.',
    author: 'Priya Mehta',
    city: 'Delhi',
    product: 'Bridal Haath Phool',
    rating: 5,
  },
  {
    text: 'Three years since I purchased my Emerald Rani Kada and it looks as brilliant as day one. The lifetime polish service is genuine — they restored it to its original glory within a week.',
    author: 'Ritu Verma',
    city: 'Jaipur',
    product: 'Emerald Rani Kada',
    rating: 5,
  },
  {
    text: 'Ordered the festive set for Diwali and was blown away by the packaging alone. The emeralds are a rich, deep green — exactly what I wanted. My mother-in-law immediately asked where I got them.',
    author: 'Kavita Reddy',
    city: 'Bangalore',
    product: 'Festive Bangdi Set 12pc',
    rating: 5,
  },
];

const StarRating = () => (
  <div className="flex gap-1 justify-center">
    {[1, 2, 3, 4, 5].map((i) => (
      <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="#ef2a28" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 0L12.25 7.75L20 10L12.25 12.25L10 20L7.75 12.25L0 10L7.75 7.75L10 0Z" />
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const switchReview = (i: number) => {
    if (i === activeIndex || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveIndex(i);
      setAnimating(false);
    }, 300);
  };

  const r = reviews[activeIndex];

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-dark-surface relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,_rgba(239,42,40,0.06)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <p className="font-accent text-red-500 text-xs tracking-[0.3em] uppercase mb-4">
            Testimonials
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Voices of <span className="text-red-shimmer">Our Brides</span>
          </h2>
          <div className="divider-gold w-24 mx-auto mt-4" />
        </div>

        {/* Quote card */}
        <div className="relative bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl p-8 md:p-12 text-center mb-10">
          {/* Decorative quote mark */}
          <div className="absolute top-4 left-6 md:top-6 md:left-8 pointer-events-none">
            <svg width="48" height="40" viewBox="0 0 60 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 48V28L8 0H20L16 24H28V48H0ZM32 48V28L40 0H52L48 24H60V48H32Z" fill="#ef2a28" opacity="0.15" />
            </svg>
          </div>

          <div className={`transition-opacity duration-300 ${animating ? 'opacity-0' : 'opacity-100'}`}>
            <StarRating />

            <p className="font-body italic text-xl md:text-2xl text-gray-700 dark:text-gray-200 leading-relaxed my-6 md:my-8 max-w-2xl mx-auto">
              &ldquo;{r.text}&rdquo;
            </p>

            <p className="font-display text-gray-900 dark:text-white text-lg font-semibold">{r.author}</p>
            <p className="font-body text-gray-500 dark:text-gray-400 text-sm mb-2">{r.city}</p>
            <span className="inline-block font-accent text-[10px] tracking-[0.15em] uppercase text-red-500 bg-red-50 dark:bg-dark-surface border border-gray-200 dark:border-dark-border px-3 py-1 rounded">
              {r.product}
            </span>
          </div>
        </div>

        {/* Reviewer selector */}
        <div className="flex flex-wrap justify-center gap-3">
          {reviews.map((review, i) => (
            <button
              key={i}
              onClick={() => switchReview(i)}
              className={`font-accent text-xs tracking-[0.1em] uppercase px-4 py-2.5 rounded transition-all duration-300 ${
                i === activeIndex
                  ? 'bg-red-500 text-white font-semibold'
                  : 'bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border text-gray-500 dark:text-gray-400 hover:text-red-500 hover:border-red-500/50'
              }`}
            >
              {review.author.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
