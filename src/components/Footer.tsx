'use client';

import { useReveal } from '@/helpers/useReveal';

const shopLinks = ['Bangles', 'Necklaces', 'Earrings', 'All Products'];
const infoLinks = ['About Us', 'Craftsmanship', 'Care Instructions', 'Shipping & Returns', 'Contact'];
const socialLinks = [
  { name: 'Instagram', url: 'https://instagram.com/dhagaji_creation' },
  { name: 'WhatsApp', url: 'https://wa.me/919409270532' },
];

const LocationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><circle cx="17.5" cy="6.5" r="1.5"/>
  </svg>
);

const socialIcon = (type: string) => {
  switch (type) {
    case 'instagram':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><circle cx="17.5" cy="6.5" r="1.5"/>
        </svg>
      );
    case 'whatsapp':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      );
    default:
      return null;
  }
};

export default function Footer() {
  const { ref: brandRef, revealed: brandRevealed } = useReveal();
  const { ref: shopRef, revealed: shopRevealed } = useReveal();
  const { ref: infoRef, revealed: infoRevealed } = useReveal();
  const { ref: valuesRef, revealed: valuesRevealed } = useReveal();
  const { ref: bottomRef, revealed: bottomRevealed } = useReveal();

  const year = new Date().getFullYear();

  return (
    <footer className="bg-purple-900 dark:bg-gray-950 border-t-2 border-amber-500 dark:border-amber-400/50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Divider */}
        <div className="h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mb-12"/>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand */}
          <div ref={brandRef} className={`lg:col-span-2 reveal ${brandRevealed ? 'revealed' : ''}`}>
            <a href="#" className="font-accent text-xl tracking-[0.25em] inline-block mb-4 text-amber-400">
              DHAGAJI
            </a>
            <p className="font-body text-sm leading-relaxed mb-6 text-amber-400/60">
              100% Handmade Thread Jewellery • Women Empowered • Indian Tradition
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5 text-amber-400">
                  <LocationIcon />
                </div>
                <div>
                  <p className="font-accent text-amber-400 text-xs uppercase tracking-wider">Location</p>
                  <p className="font-body text-amber-400/80 text-sm">Himmatnagar, Sabarkantha, Gujarat</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5 text-amber-400">
                  <PhoneIcon />
                </div>
                <div>
                  <p className="font-accent text-amber-400 text-xs uppercase tracking-wider">WhatsApp / Call</p>
                  <a href="tel:+919409270532" className="font-body text-amber-400/80 text-sm hover:text-amber-400 transition-colors">+91 94092 70532</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5 text-amber-400">
                  <InstagramIcon />
                </div>
                <div>
                  <p className="font-accent text-amber-400 text-xs uppercase tracking-wider">Instagram</p>
                  <a href="https://instagram.com/dhagaji_creation" className="font-body text-amber-400/80 text-sm hover:text-amber-400 transition-colors">@dhagaji_creation</a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border-2 border-amber-400 flex items-center justify-center transition-all duration-300 text-amber-400 hover:bg-amber-400 hover:text-purple-900"
                  aria-label={s.name}
                >
                  {socialIcon(s.name.toLowerCase())}
                </a>
              ))}
            </div>
          </div>

          {/* Shop links */}
          <div ref={shopRef} className={`reveal ${shopRevealed ? 'revealed' : ''}`}>
            <h4 className="font-accent text-amber-400 text-xs tracking-[0.2em] uppercase mb-5">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="font-body text-amber-400/70 text-sm hover:text-amber-400 transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info links */}
          <div ref={infoRef} className={`reveal ${infoRevealed ? 'revealed' : ''}`}>
            <h4 className="font-accent text-amber-400 text-xs tracking-[0.2em] uppercase mb-5">Info</h4>
            <ul className="space-y-3">
              {infoLinks.map((link) => (
                <li key={link}>
                  <a
                    href={link === 'About Us' ? '#about' : link === 'Craftsmanship' ? '#craftsmanship' : link === 'Contact' ? '#contact' : '#'}
                    className="font-body text-amber-400/70 text-sm hover:text-amber-400 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand Values */}
          <div ref={valuesRef} className={`reveal ${valuesRevealed ? 'revealed' : ''}`}>
            <h4 className="font-accent text-amber-400 text-xs tracking-[0.2em] uppercase mb-5">Why Choose Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 font-body text-amber-400/70">
                <span className="text-amber-400">✦</span> MSME Registered
              </li>
              <li className="flex items-center gap-2 font-body text-amber-400/70">
                <span className="text-amber-400">✦</span> 100% Handmade
              </li>
              <li className="flex items-center gap-2 font-body text-amber-400/70">
                <span className="text-amber-400">✦</span> Women Empowered
              </li>
              <li className="flex items-center gap-2 font-body text-amber-400/70">
                <span className="text-amber-400">✦</span> Made in India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div ref={bottomRef} className={`border-t-2 border-amber-400/30 pt-8 reveal ${bottomRevealed ? 'revealed' : ''}`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-xs text-amber-400/60">
              © {year} Dhagaji Creation. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="font-body text-xs text-amber-400/60 hover:text-amber-400 transition-colors">Privacy Policy</a>
              <a href="#" className="font-body text-xs text-amber-400/60 hover:text-amber-400 transition-colors">Terms of Service</a>
              <a href="#" className="font-body text-xs text-amber-400/60 hover:text-amber-400 transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>

        {/* Brand tagline */}
        <div className="text-center mt-8">
          <p className="font-accent text-xs tracking-[0.2em] uppercase text-amber-400/60">
            Crafted by Women • Inspired by Tradition • Worn with Pride
          </p>
        </div>
      </div>
    </footer>
  );
}
