'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface ProductImageCarouselProps {
  images: string[];
  alts: string[];
  productName: string;
}

export default function ProductImageCarousel({
  images,
  alts,
  productName,
}: ProductImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [direction, setDirection] = useState<'left' | 'right'>('left');
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayTimer = useRef<NodeJS.Timeout>();

  // Intersection Observer - pause when not visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAutoPlay(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-play carousel with smooth transitions
  useEffect(() => {
    if (!isAutoPlay || images.length <= 1) return;

    autoPlayTimer.current = setInterval(() => {
      setDirection('left');
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => {
      if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
    };
  }, [isAutoPlay, images.length]);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 'left' : 'right');
    setCurrentIndex(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 3000);
  };

  const goToPrevious = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 3000);
  };

  const goToNext = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 3000);
  };

  return (
    <div
      ref={carouselRef}
      className="relative w-full bg-gradient-to-br from-purple-100/30 via-gray-50 dark:from-gray-900/50 dark:via-gray-950 dark:to-black/30 overflow-hidden rounded-lg group"
    >
      {/* Main carousel container */}
      <div className="relative w-full h-80 md:h-96 overflow-hidden">
        {/* Images container with slide animation */}
        <div className="relative w-full h-full">
          {images.map((image, index) => {
            let position = 'translate-x-full';
            let opacity = 0;

            if (index === currentIndex) {
              position = 'translate-x-0';
              opacity = 1;
            } else if (
              (direction === 'left' && index < currentIndex) ||
              (direction === 'right' && index > currentIndex)
            ) {
              position = '-translate-x-full';
              opacity = 0;
            }

            return (
             <div
    key={index}
    className={`absolute inset-0 transition-all duration-700 ease-in-out ${position}`}
    style={{
      opacity: opacity === 0 ? 0 : 1,
    }}
  >
    <Image
      src={image}
      alt={alts[index] || productName}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      priority={index === 0}
    />
              </div>
            );
          })}
        </div>

        {/* Navigation arrows - visible on hover */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 bg-black/20 hover:bg-black/40 dark:bg-transparent dark:hover:bg-white/10 text-white dark:text-amber-400 p-2 rounded-full border border-white/20 dark:border-amber-400/40"
              aria-label="Previous image"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 bg-black/20 hover:bg-black/40 dark:bg-transparent dark:hover:bg-white/10 text-white dark:text-amber-400 p-2 rounded-full border border-white/20 dark:border-amber-400/40"
              aria-label="Next image"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}

        {/* Image counter - top right */}
        {images.length > 1 && (
          <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-purple-900/80 to-black/80 dark:from-amber-500/80 dark:to-purple-900/80 text-white dark:text-black px-3.5 py-1.5 rounded-full text-sm font-semibold border border-white/20 dark:border-amber-400/30">
            <span className="font-bold">{currentIndex + 1}</span>
            <span className="text-white/60 dark:text-gray-200 mx-1">/</span>
            <span>{images.length}</span>
          </div>
        )}
      </div>

      {/* Thumbnail strip at bottom */}
      {images.length > 1 && (
        <div className="flex gap-2 p-3 md:p-4 bg-gradient-to-t from-black/5 to-transparent dark:from-black/30 overflow-x-auto scrollbar-hide">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden transition-all duration-300 border-2 ${
                index === currentIndex
                  ? 'border-amber-400 shadow-lg scale-105'
                  : 'border-white/30 dark:border-gray-700 opacity-60 hover:opacity-100'
              }`}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />

              {/* Active indicator */}
              {index === currentIndex && (
                <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 to-transparent" />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Progress bar */}
      {images.length > 1 && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 dark:bg-gray-800/30">
          <div
            className="h-full bg-gradient-to-r from-purple-900 to-amber-400 dark:from-amber-400 dark:to-purple-500 transition-all duration-500"
            style={{
              width: `${((currentIndex + 1) / images.length) * 100}%`,
            }}
          />
        </div>
      )}
    </div>
  );
}

