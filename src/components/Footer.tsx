export default function Footer() {
  return (
    <footer
      className="py-16 px-6 lg:px-12 border-t border-[#1a1a1a]"
      style={{ background: "#080808" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <span className="font-accent text-2xl tracking-[0.25em] gold-shimmer font-semibold">SHRINGAAR</span>
              <div className="text-[10px] tracking-[0.4em] text-[#5a4a3a] font-body uppercase mt-0.5">Premium Bangdi</div>
            </div>
            <p className="font-body text-sm text-[#5a4a3a] leading-relaxed font-light max-w-xs">
              Handcrafted emerald and gold bangdi from the heart of Rajasthan. Where every wrist tells a story of grace.
            </p>
            {/* Social */}
            <div className="flex gap-4 mt-6">
              {["Instagram", "Pinterest", "WhatsApp"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="font-accent text-[9px] tracking-[0.25em] text-[#4a3a2a] hover:text-[#d4a017] uppercase transition-colors border border-[#2a2a2a] hover:border-[#d4a01740] px-3 py-1.5"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="font-accent text-[10px] tracking-[0.35em] text-[#d4a017] uppercase mb-5">Shop</div>
            <ul className="space-y-3">
              {["New Arrivals", "Bridal Collection", "Festive Picks", "Everyday Wear", "Sale"].map((l) => (
                <li key={l}>
                  <a href="#" className="font-body text-sm text-[#5a4a3a] hover:text-[#c5b89a] transition-colors font-light">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-accent text-[10px] tracking-[0.35em] text-[#d4a017] uppercase mb-5">Info</div>
            <ul className="space-y-3">
              {["About Us", "Craftsmanship", "Sizing Guide", "Care Guide", "Returns"].map((l) => (
                <li key={l}>
                  <a href="#" className="font-body text-sm text-[#5a4a3a] hover:text-[#c5b89a] transition-colors font-light">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="divider-gold mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-[#3a2a1a]">
            © 2024 Shringaar. All rights reserved. Crafted with ❤ in Jaipur.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Shipping Policy"].map((l) => (
              <a key={l} href="#" className="font-accent text-[9px] tracking-widest text-[#3a2a1a] hover:text-[#d4a017] uppercase transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
