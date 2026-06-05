'use client';

import { useState } from 'react';
import Image from 'next/image';
import { products, categories, type Category, getProductsByCategory } from '@/data/products';
import { getProductImagePath, getProductImageAlt } from '@/data/productImages';

export default function Collection() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const filtered = getProductsByCategory(activeCategory);

  return (
    <section id="collection" className="py-20 md:py-28 bg-white dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="font-accent text-red-500 text-xs tracking-[0.3em] uppercase mb-4">
            Our Collection
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Emerald &amp; Gold <span className="text-red-shimmer">Bangdi</span>
          </h2>
          <div className="divider-gold w-24 mx-auto mt-4" />
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-1 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`filter-tab font-accent text-xs tracking-[0.15em] uppercase px-5 py-2.5 transition-all duration-300 rounded ${
                activeCategory === cat
                  ? 'active text-red-500 bg-red-50 dark:bg-dark-surface'
                  : 'text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="card-glow bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg overflow-hidden group"
            >
              {/* Product image */}
              <div className="relative h-80 md:h-96 w-full bg-gradient-to-br from-red-100/50 via-gray-100 dark:from-red-900/20 dark:via-dark dark:to-black/50 overflow-hidden">
                <Image
                  src={getProductImagePath(product.id)}
                  alt={getProductImageAlt(product.id)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={product.id <= 3}
                />

                {/* Tag badge */}
                <span className="absolute top-4 right-4 font-accent text-[10px] tracking-[0.1em] uppercase bg-red-500 text-white px-3 py-1.5 rounded z-10">
                  {product.tag}
                </span>
              </div>

              {/* Product info */}
              <div className="p-5 md:p-6">
                <h3 className="font-display text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  {product.name}
                </h3>
                <p className="font-accent text-red-500 dark:text-red-400 text-xs tracking-[0.1em] mb-3 uppercase">
                  {product.subtitle}
                </p>
                <p className="font-body text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
