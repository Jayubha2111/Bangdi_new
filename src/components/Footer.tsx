'use client';

const shopLinks = ['All Bangdi', 'Bridal Collection', 'Festive Wear', 'Luxury Edit', 'Gift Cards'];
const infoLinks = ['About Us', 'Craftsmanship', 'Size Guide', 'Care Instructions', 'Shipping & Returns', 'Privacy Policy'];
const socialLinks = ['instagram', 'pinterest', 'whatsapp'];

const socialIcon = (type: string) => {
  switch (type) {
    case 'instagram':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <rect x="2" y="2" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.2" fill="none" />
          <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.2" fill="none" />
          <circle cx="15" cy="5" r="1" fill="currentColor" />
        </svg>
      );
    case 'pinterest':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.2" fill="none" />
          <path d="M10 4C7.5 4 6 5.8 6 8c0 1.5.8 2.8 2 3.3.2.1.3 0 .3-.2l.1-.4c0-.2 0-.3-.1-.4-.4-.5-.6-1.1-.6-1.7 0-1.6 1.1-3 2.9-3 1.6 0 2.7 1 2.7 2.6 0 1.7-.7 3-1.7 3-.6 0-1-.5-.9-1.1l.6-2.5c.1-.4-.2-.7-.5-.7-.7 0-1.2.7-1.2 1.7 0 .6.2 1 .2 1l-.7 3c-.1.5-.1 1-.1 1.4 0 .3.2.4.4.3.4-.4 1-1.6 1.1-2.2.2-.6.6-1.1 1.1-1.5.8-.7 1.5-1 2.5-1 2.3 0 3.8-1.9 3.8-4.3C16 5.6 14 4 12 4z" fill="currentColor" />
        </svg>
      );
    case 'whatsapp':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.2" fill="none" />
          <path d="M10 5a5 5 0 0 0-4.3 7.6l-.5 1.5 1.6-.5A5 5 0 1 0 10 5zm.5 7.5c-.2.2-.5.3-.8.3-.7 0-1.4-.3-1.9-.7-.5-.5-.9-1.1-1-1.8 0-.3 0-.6.2-.8.1-.1.2-.2.3-.3h.2c.1 0 .2 0 .3.2l.4.7c0 .1.1.2 0 .3-.1.1-.1.2-.2.3-.1.1-.2.2-.1.3.3.4.7.7 1.1.9.1.1.2 0 .3-.1l.5-.5c.1-.1.2-.1.3-.1l1 .5c.1.1.2.1.2.2.1.2.1.4 0 .6z" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-dark-card border-t border-gray-200 dark:border-dark-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gold gradient divider */}
        <div className="divider-gold mb-12" />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="font-accent text-xl tracking-[0.25em] text-red-shimmer inline-block mb-4">
              DHAGAJI 
            </a>
            <p className="font-body text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
              Handcrafted emerald and gold bangdi for the modern bride. Jaipur since 1998.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-200 dark:border-dark-border flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-red-500 hover:border-red-500 transition-all duration-300"
                  aria-label={s}
                >
                  {socialIcon(s)}
                </a>
              ))}
            </div>
          </div>

          {/* Shop links */}
          <div>
            <h4 className="font-accent text-gray-900 dark:text-white text-xs tracking-[0.2em] uppercase mb-5">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="font-body text-gray-600 dark:text-gray-400 text-sm hover:text-red-500 transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info links */}
          <div>
            <h4 className="font-accent text-gray-900 dark:text-white text-xs tracking-[0.2em] uppercase mb-5">Info</h4>
            <ul className="space-y-3">
              {infoLinks.map((link) => (
                <li key={link}>
                  <a
                    href={link === 'About Us' ? '#about' : link === 'Craftsmanship' ? '#craftsmanship' : '#'}
                    className="font-body text-gray-600 dark:text-gray-400 text-sm hover:text-red-500 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Contact CTA */}
          <div>
            <h4 className="font-accent text-gray-900 dark:text-white text-xs tracking-[0.2em] uppercase mb-5">Connect</h4>
            <p className="font-body text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
              Subscribe for new collection launches and exclusive bridal offers.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white dark:bg-dark border border-gray-200 dark:border-dark-border rounded px-3 py-2.5 font-body text-gray-900 dark:text-white text-sm placeholder-gray-400 dark:placeholder-gray-500 input-gold transition-all"
              />
              <button className="btn-gold px-4 py-2.5 text-[10px] tracking-[0.15em] rounded uppercase flex-shrink-0">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="divider-gold mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="font-body text-gray-500 dark:text-gray-500 text-xs">
            &copy; {year} DHAGAJI . All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-gray-500 dark:text-gray-500 text-xs hover:text-red-500 transition-colors">Privacy Policy</a>
            <a href="#" className="font-body text-gray-500 dark:text-gray-500 text-xs hover:text-red-500 transition-colors">Terms of Service</a>
            <a href="#" className="font-body text-gray-500 dark:text-gray-500 text-xs hover:text-red-500 transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
