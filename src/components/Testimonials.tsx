'use client';

import { useState, useEffect } from 'react';

const reviews = [
  {
    text: 'The purple thread bangles I ordered are absolutely stunning! The quality is exceptional and they\'re so comfortable to wear. Every piece feels like a work of art, and I love knowing that my purchase supports women artisans. Highly recommend!',
    author: 'Priya Sharma',
    city: 'Mumbai',
    product: 'Purple Thread Bangles',
    rating: 5,
  },
  {
    text: 'I purchased the complete thread jewelry collection for my wedding and I was blown away. The craftsmanship is exquisite, and the packaging was beautiful. These handmade pieces are truly unique and special.',
    author: 'Anjali Singh',
    city: 'Delhi',
    product: 'Bridal Collection',
    rating: 5,
  },
  {
    text: 'The thread necklace and matching earrings are gorgeous! The colors are vibrant, and you can really see the skill and love that went into creating these pieces. Perfect for festivals and everyday wear.',
    author: 'Kavya Reddy',
    city: 'Bangalore',
    product: 'Thread Necklace Set',
    rating: 5,
  },
  {
    text: 'Supporting Dhagaji Creation is like supporting your sisters. The 1000+ women artisans behind these pieces make the jewelry even more meaningful. Not just beautiful products, but a movement for women empowerment.',
    author: 'Meera Gupta',
    city: 'Jaipur',
    product: 'Bangles Set',
    rating: 5,
  },
];

const StarRating = () => (
  <div className="flex gap-1 justify-center">
    {[1, 2, 3, 4, 5].map((i) => (
      <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="#d4af37" xmlns="http://www.w3.org/2000/svg">
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
    <section className="py-20 md:py-28 bg-purple-100 dark:bg-slate-900 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,_rgba(107,46,127,0.08)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <p className="font-accent text-purple-900 dark:text-amber-400 text-xs tracking-[0.3em] uppercase mb-4">
            Testimonials
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-purple-900 dark:text-white mb-4">
            What Our <span className="text-amber-500 dark:text-amber-400">Customers Say</span>
          </h2>
          <div className="divider-gold w-24 mx-auto mt-4 h-1 bg-amber-500 dark:bg-amber-400"/>
        </div>

        {/* Quote card */}
        <div className="relative bg-white dark:bg-slate-800 border-2 border-amber-500 dark:border-amber-400 rounded-xl p-8 md:p-12 text-center mb-10">
          {/* Decorative quote mark */}
          <div className="absolute top-4 left-6 md:top-6 md:left-8 pointer-events-none">
            <svg width="48" height="40" viewBox="0 0 60 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 48V28L8 0H20L16 24H28V48H0ZM32 48V28L40 0H52L48 24H60V48H32Z" fill="#d4af37" opacity="0.15" />
            </svg>
          </div>

          <div className={`transition-opacity duration-300 ${animating ? 'opacity-0' : 'opacity-100'}`}>
            <StarRating />

            <p className="font-body italic text-xl md:text-2xl text-gray-700 dark:text-gray-200 leading-relaxed my-6 md:my-8 max-w-2xl mx-auto">
              &ldquo;{r.text}&rdquo;
            </p>

            <p className="font-display text-purple-900 dark:text-white text-lg font-semibold">{r.author}</p>
            <p className="font-body text-gray-600 dark:text-gray-400 text-sm mb-2">{r.city}</p>
            <span className="inline-block font-accent text-[10px] tracking-[0.15em] uppercase text-purple-900 dark:text-slate-900 bg-purple-100 dark:bg-amber-400 border-2 border-amber-500 dark:border-amber-400 px-3 py-1 rounded">
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
                  ? 'bg-purple-900 text-amber-400 dark:bg-amber-400 dark:text-purple-900 font-semibold'
                  : 'bg-white dark:bg-slate-800 border border-amber-500 dark:border-amber-400 text-purple-900 dark:text-amber-400 hover:bg-amber-500 hover:text-purple-900'
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
