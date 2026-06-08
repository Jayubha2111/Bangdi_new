import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#f9f5fc',
          100: '#f3e5f5',
          200: '#e1bee7',
          300: '#ce93d8',
          400: '#ba68c8',
          500: '#ab47bc',
          600: '#9c27b0',
          700: '#8e24aa',
          800: '#7b1fa2',
          900: '#4a148c',
          950: '#2d0055',
        },
        gold: {
          50: '#fffbf0',
          100: '#fff8e1',
          200: '#ffecb3',
          300: '#ffe082',
          400: '#ffd54f',
          500: '#ffca28',
          600: '#ffb300',
          700: '#ffa000',
          800: '#ff8f00',
          900: '#ff6f00',
          950: '#e65100',
        },
        red: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef2a28',
          600: '#dc143c',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#500f0f',
        },
        black: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
        dark: {
          DEFAULT: '#0a0a0a',
          bg: '#0a0a0a',
          card: '#141414',
          surface: '#1a1a1a',
          border: '#2a2a2a',
          muted: '#6b7280',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Cormorant Garamond', 'serif'],
        accent: ['Cinzel', 'serif'],
      },
      backgroundImage: {
        'red-gradient': 'linear-gradient(135deg, #ef2a28, #ff4444, #ef2a28)',
        'black-gradient': 'linear-gradient(135deg, #1a1a1a, #2a2a2a, #1a1a1a)',
        'luxury-gradient': 'linear-gradient(135deg, #0a0a0a 0%, #ef2a28 50%, #0a0a0a 100%)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        floatUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(239,42,40,0.3)' },
          '50%': { boxShadow: '0 0 25px rgba(239,42,40,0.6), 0 0 50px rgba(239,42,40,0.3)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        shimmerSweep: {
          '0%': { left: '-100%' },
          '100%': { left: '200%' },
        },
      },
      animation: {
        shimmer: 'shimmer 3s ease-in-out infinite',
        floatUp: 'floatUp 0.6s ease-out',
        fadeIn: 'fadeIn 0.5s ease-out',
        fadeUp: 'fadeUp 0.6s ease-out',
        fadeDown: 'fadeDown 0.6s ease-out',
        scaleIn: 'scaleIn 0.5s ease-out',
        slideLeft: 'slideLeft 0.6s ease-out',
        slideRight: 'slideRight 0.6s ease-out',
        sparkle: 'sparkle 2s ease-in-out infinite',
        rotateSlow: 'rotateSlow 20s linear infinite',
        glow: 'glow 2s ease-in-out infinite',
        slideIn: 'slideIn 0.5s ease-out',
        'shimmer-sweep': 'shimmerSweep 0.6s ease-in-out',
      },
    },
  },
  plugins: [],
};

export default config;
