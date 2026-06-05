import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#fefce8",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15",
          500: "#d4a017",
          600: "#b8860b",
          700: "#92700a",
          800: "#78580a",
          900: "#54400b",
        },
        emerald: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
          950: "#022c22",
        },
        dark: {
          bg: "#0a0a0a",
          card: "#111111",
          surface: "#1a1a1a",
          border: "#2a2a2a",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'Cormorant Garamond'", "serif"],
        accent: ["'Cinzel'", "serif"],
      },
      animation: {
        shimmer: "shimmer 2.5s linear infinite",
        "float-up": "floatUp 0.8s ease forwards",
        sparkle: "sparkle 1.5s ease-in-out infinite",
        "fade-in": "fadeIn 1s ease forwards",
        "slide-in": "slideIn 0.7s ease forwards",
        "rotate-slow": "rotateSlow 20s linear infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        floatUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        sparkle: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.2)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        rotateSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(212,160,23,0.3)" },
          "100%": { boxShadow: "0 0 60px rgba(212,160,23,0.8), 0 0 100px rgba(212,160,23,0.3)" },
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #d4a017 0%, #f5d76e 50%, #b8860b 100%)",
        "emerald-gradient": "linear-gradient(135deg, #022c22 0%, #065f46 50%, #047857 100%)",
        "luxury-gradient": "linear-gradient(180deg, #0a0a0a 0%, #111111 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
