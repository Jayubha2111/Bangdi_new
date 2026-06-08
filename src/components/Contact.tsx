'use client';

import { useState } from 'react';

const contactInfo = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'Location',
    value: 'Himmatnagar, Sabarkantha, Gujarat',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: 'WhatsApp / Call',
    value: '+91 94092 70532',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="1" />
        <circle cx="19" cy="12" r="1" />
        <circle cx="5" cy="12" r="1" />
      </svg>
    ),
    label: 'Instagram',
    value: '@dhagaji_creation',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    label: 'Products',
    value: 'Bangles • Necklaces • Earrings',
  },
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send enquiry');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });

      // Reset form after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-purple-100 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-accent text-purple-900 dark:text-amber-400 text-xs tracking-[0.3em] uppercase mb-4">
            Handcrafted • Traditional • Women Empowered
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-purple-900 dark:text-white mb-4">
            Connect With Us
          </h2>
          <p className="font-body text-gray-700 dark:text-gray-400 text-lg">
            Reach out to explore our handmade thread jewellery collection or place your order
          </p>
          <div className="divider-gold w-32 mx-auto mt-6 h-1 bg-amber-500 dark:bg-amber-400"/>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Form */}
          <div>
            {submitted ? (
                <div className="h-full flex flex-col items-center justify-center bg-white dark:bg-slate-800 border-2 border-amber-500 dark:border-amber-400 rounded-xl p-10 text-center">
                <div style={{ animation: 'starSpin 0.8s ease-out' }}>
                  <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 0L19.6 11.2L32 12.4L22.8 21.2L25.6 34L16 26.8L6.4 34L9.2 21.2L0 12.4L12.4 11.2L16 0Z" fill="#d4af37" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl text-white mt-4 mb-2">Thank You!</h3>
                <p className="font-body text-gray-300 text-lg">We've received your enquiry. Our team will contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="bg-amber-400/10 border-2 border-amber-400 rounded-lg p-4 dark:bg-amber-400/20">
                    <p className="font-body text-amber-700 dark:text-amber-300 text-sm">{error}</p>
                  </div>
                )}

                <div>
                  <label className="font-accent text-purple-900 dark:text-amber-400 text-xs tracking-[0.15em] uppercase block mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-lg px-4 py-3.5 font-body text-gray-900 dark:text-white text-base placeholder-gray-400 dark:placeholder-gray-500 transition-all focus:border-purple-500 focus:dark:border-amber-400"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="font-accent text-purple-900 dark:text-amber-400 text-xs tracking-[0.15em] uppercase block mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-lg px-4 py-3.5 font-body text-gray-900 dark:text-white text-base placeholder-gray-400 dark:placeholder-gray-500 transition-all focus:border-purple-500 focus:dark:border-amber-400"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="font-accent text-purple-900 dark:text-amber-400 text-xs tracking-[0.15em] uppercase block mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-lg px-4 py-3.5 font-body text-gray-900 dark:text-white text-base placeholder-gray-400 dark:placeholder-gray-500 transition-all focus:border-purple-500 focus:dark:border-amber-400"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="font-accent text-purple-900 dark:text-amber-400 text-xs tracking-[0.15em] uppercase block mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-lg px-4 py-3.5 font-body text-gray-900 dark:text-white text-base placeholder-gray-400 dark:placeholder-gray-500 transition-all resize-none focus:border-purple-500 focus:dark:border-amber-400"
                    placeholder="Tell us about your vision..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 text-sm tracking-[0.15em] rounded uppercase disabled:opacity-50 disabled:cursor-not-allowed font-bold transition-all bg-purple-900 text-amber-400 border-2 border-amber-400 hover:bg-amber-400 hover:text-purple-900"
                >
                  {loading ? 'Sending...' : 'Send Enquiry'}
                </button>
              </form>
            )}
          </div>

          {/* Right: Info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 content-start">
            {contactInfo.map((info, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 border-2 border-amber-500 dark:border-amber-400 rounded-lg p-5 md:p-6 hover:shadow-lg transition-shadow">
                <div className="mb-3">{info.icon}</div>
                <h4 className="font-accent text-purple-900 dark:text-amber-400 text-xs tracking-[0.15em] uppercase mb-1">{info.label}</h4>
                <p className="font-body text-gray-700 dark:text-gray-400 text-sm leading-relaxed">{info.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
