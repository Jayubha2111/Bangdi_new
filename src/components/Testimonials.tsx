"use client";
import { useState } from "react";

const reviews = [
  {
    name: "Priya Mehta",
    location: "Mumbai",
    rating: 5,
    text: "I wore the Emerald Rani Kada at my cousin's wedding — every single guest asked where I got them. The quality is extraordinary for the price. The gold plating feels incredibly thick and genuine.",
    product: "Emerald Rani Kada",
  },
  {
    name: "Ananya Sharma",
    location: "Jaipur",
    rating: 5,
    text: "The Royal Emerald Set is everything I dreamed of. The stones catch light in the most magical way. Arrived in the most gorgeous gift box — already planning to order the Bridal Haath Phool set!",
    product: "Royal Emerald Set",
  },
  {
    name: "Ritika Bose",
    location: "Kolkata",
    rating: 5,
    text: "I've bought bangles from all over India. Shringaar is in a different league entirely. The custom sizing was perfect and the craftsmanship rivals pieces I've seen at double the price.",
    product: "Kundan Emerald Bangle",
  },
  {
    name: "Deepa Nair",
    location: "Chennai",
    rating: 5,
    text: "Bought the Festive Bangdi Set for Diwali and I cannot stop wearing them. The colour is so rich and vivid. Customer service was also impeccable — they helped me choose the right size.",
    product: "Festive Bangdi Set",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-28 px-6 lg:px-12" style={{ background: "#0a0a0a" }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="divider-gold w-12" />
            <span className="font-accent text-[10px] tracking-[0.45em] text-[#d4a017] uppercase">Testimonials</span>
            <div className="divider-gold w-12" />
          </div>
          <h2 className="font-display text-5xl font-bold text-[#f5f0e8]">
            Worn with{" "}
            <span className="italic gold-shimmer">Love</span>
          </h2>
        </div>

        {/* Main review */}
        <div
          className="border border-[#1e1e1e] bg-[#111111] p-10 md:p-14 mb-8 relative overflow-hidden"
          key={active}
          style={{ animation: "fadeIn 0.5s ease forwards" }}
        >
          {/* Decorative quote mark */}
          <div
            className="absolute top-6 right-8 font-display text-9xl text-[#d4a01710] leading-none select-none"
            aria-hidden
          >
            "
          </div>

          {/* Stars */}
          <div className="flex gap-1 mb-6">
            {[...Array(reviews[active].rating)].map((_, i) => (
              <span key={i} className="text-[#d4a017] text-lg">★</span>
            ))}
          </div>

          {/* Text */}
          <p className="font-body text-xl md:text-2xl text-[#c5b89a] leading-relaxed mb-8 italic font-light">
            "{reviews[active].text}"
          </p>

          {/* Author */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="font-accent text-sm tracking-widest text-[#d4a017] uppercase">{reviews[active].name}</div>
              <div className="font-body text-xs text-[#5a4a3a] mt-0.5">{reviews[active].location}</div>
            </div>
            <div className="font-accent text-[10px] tracking-[0.2em] text-[#3a2a1a] bg-[#1a1508] border border-[#2a1e08] px-3 py-1.5 uppercase">
              {reviews[active].product}
            </div>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex items-center justify-center gap-3">
          {reviews.map((r, i) => (
            <button
              key={r.name}
              onClick={() => setActive(i)}
              className={`transition-all duration-300 font-accent text-[10px] tracking-widest uppercase px-4 py-2 border ${
                active === i
                  ? "border-[#d4a017] text-[#d4a017]"
                  : "border-[#2a2a2a] text-[#3a2a1a] hover:border-[#5a4a2a]"
              }`}
            >
              {r.name.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
