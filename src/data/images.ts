// SVG Image data for products - RED THEME
export const productImages = {
  bangdi: (primaryColor: string = '#1a1a1a', secondaryColor: string = '#ef2a28'): string => {
    const cx = 50;
    const cy = 50;
    const ri = 28;
    const ro = 40;
    const dots = 16;
    const dotPositions = Array.from({ length: dots }, (_, i) => {
      const angle = (i * 2 * Math.PI) / dots - Math.PI / 2;
      const r = ri + (ro - ri) / 2;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      const isRed = i % 3 === 0;
      return { x, y, color: isRed ? secondaryColor : primaryColor };
    });

    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <!-- Outer ring -->
      <circle cx="${cx}" cy="${cy}" r="${ro}" fill="none" stroke="${secondaryColor}" stroke-width="2.5" opacity="0.8"/>
      <!-- Inner ring -->
      <circle cx="${cx}" cy="${cy}" r="${ri}" fill="none" stroke="${secondaryColor}" stroke-width="2" opacity="0.6"/>
      <!-- Mid ring dots -->
      ${dotPositions.map((d) => `<circle cx="${d.x}" cy="${d.y}" r="3" fill="${d.color}" opacity="0.8"/>`).join('\n      ')}
      <!-- Connecting spokes -->
      ${dotPositions
        .filter((_, i) => i % 2 === 0)
        .map((d) => {
          const angle = Math.atan2(d.y - cy, d.x - cx);
          const innerX = cx + ri * Math.cos(angle);
          const innerY = cy + ri * Math.sin(angle);
          const outerX = cx + ro * Math.cos(angle);
          const outerY = cy + ro * Math.sin(angle);
          return `<line x1="${innerX}" y1="${innerY}" x2="${outerX}" y2="${outerY}" stroke="${secondaryColor}" stroke-width="0.8" opacity="0.3"/>`;
        })
        .join('\n      ')}
      <!-- Center gem -->
      <circle cx="${cx}" cy="${cy}" r="10" fill="${primaryColor}" stroke="${secondaryColor}" stroke-width="2" opacity="0.9"/>
      <circle cx="${cx}" cy="${cy}" r="4" fill="${secondaryColor}" opacity="0.7"/>
    </svg>`;
  },

  sparkle: (): string => {
    return `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 0L12.25 7.75L20 10L12.25 12.25L10 20L7.75 12.25L0 10L7.75 7.75L10 0Z" fill="url(#redSparkle)"/>
      <defs>
        <linearGradient id="redSparkle" x1="0" y1="0" x2="20" y2="20">
          <stop offset="0%" stop-color="#ef2a28"/>
          <stop offset="100%" stop-color="#ff4444"/>
        </linearGradient>
      </defs>
    </svg>`;
  },

  geometric: (): string => {
    return `<svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg" opacity="0.15">
      <!-- Large circle -->
      <circle cx="600" cy="400" r="300" fill="none" stroke="#ef2a28" stroke-width="0.5" stroke-dasharray="8 8"/>
      <circle cx="600" cy="400" r="280" fill="none" stroke="#ef2a28" stroke-width="0.3"/>
      <!-- Triangle -->
      <polygon points="600,150 950,650 250,650" fill="none" stroke="#ef2a28" stroke-width="0.5" opacity="0.4"/>
      <!-- Cross lines -->
      <line x1="200" y1="200" x2="1000" y2="600" stroke="#1a1a1a" stroke-width="0.5" opacity="0.3"/>
      <line x1="200" y1="600" x2="1000" y2="200" stroke="#1a1a1a" stroke-width="0.5" opacity="0.3"/>
      <line x1="600" y1="50" x2="600" y2="750" stroke="#ef2a28" stroke-width="0.3" opacity="0.2"/>
      <line x1="100" y1="400" x2="1100" y2="400" stroke="#ef2a28" stroke-width="0.3" opacity="0.2"/>
      <!-- Small decorative circles -->
      <circle cx="300" cy="250" r="40" fill="none" stroke="#1a1a1a" stroke-width="0.4" opacity="0.3"/>
      <circle cx="900" cy="550" r="50" fill="none" stroke="#1a1a1a" stroke-width="0.4" opacity="0.3"/>
      <circle cx="400" cy="600" r="30" fill="none" stroke="#ef2a28" stroke-width="0.3" opacity="0.2"/>
      <circle cx="850" cy="200" r="35" fill="none" stroke="#ef2a28" stroke-width="0.3" opacity="0.2"/>
    </svg>`;
  },
};

export const getProductImage = (productId: number, primary: string, secondary: string): string => {
  return productImages.bangdi(primary, secondary);
};
