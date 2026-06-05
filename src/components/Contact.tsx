"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="py-28 px-6 lg:px-12"
      style={{ background: "#0a0a0a" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="divider-gold w-12" />
            <span className="font-accent text-[10px] tracking-[0.45em] text-[#d4a017] uppercase">Get in Touch</span>
            <div className="divider-gold w-12" />
          </div>
          <h2 className="font-display text-5xl font-bold text-[#f5f0e8]">
            Custom{" "}
            <span className="italic gold-shimmer">Orders</span>{" "}
            Welcome
          </h2>
          <p className="font-body text-lg text-[#8a7a6a] mt-4 max-w-xl mx-auto font-light">
            For bridal sets, bulk orders, or bespoke requests — our team is ready to create something unforgettable just for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-[#111111] border border-[#1e1e1e] p-8 md:p-10">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="text-5xl text-[#d4a017] mb-4">✦</div>
                <h3 className="font-display text-2xl text-[#f0e8d8] mb-3">Message Received</h3>
                <p className="font-body text-[#8a7a6a] font-light">
                  Thank you for reaching out. Our artisan team will respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block font-accent text-[10px] tracking-[0.3em] text-[#6a5a4a] uppercase mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-[#0a0a0a] border border-[#2a2a2a] text-[#c5b89a] font-body px-4 py-3 text-sm focus:outline-none focus:border-[#d4a017] transition-colors"
                    placeholder="Priya Sharma"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-accent text-[10px] tracking-[0.3em] text-[#6a5a4a] uppercase mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-[#0a0a0a] border border-[#2a2a2a] text-[#c5b89a] font-body px-4 py-3 text-sm focus:outline-none focus:border-[#d4a017] transition-colors"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label className="block font-accent text-[10px] tracking-[0.3em] text-[#6a5a4a] uppercase mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-[#0a0a0a] border border-[#2a2a2a] text-[#c5b89a] font-body px-4 py-3 text-sm focus:outline-none focus:border-[#d4a017] transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-accent text-[10px] tracking-[0.3em] text-[#6a5a4a] uppercase mb-2">
                    Your Enquiry
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-[#0a0a0a] border border-[#2a2a2a] text-[#c5b89a] font-body px-4 py-3 text-sm focus:outline-none focus:border-[#d4a017] transition-colors resize-none"
                    placeholder="I'm looking for a bridal bangdi set in size 2.6, emerald and gold..."
                  />
                </div>
                <button type="submit" className="btn-gold w-full py-4">
                  Send Enquiry
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col justify-between gap-8">
            {[
              {
                icon: "📍",
                title: "Visit Our Studio",
                lines: ["Johari Bazaar, Jaipur", "Rajasthan — 302003"],
              },
              {
                icon: "📞",
                title: "Call / WhatsApp",
                lines: ["+91 98765 43210", "Mon–Sat, 10am–7pm"],
              },
              {
                icon: "✉",
                title: "Email Us",
                lines: ["namaste@shringaar.in", "Replies within 24 hours"],
              },
              {
                icon: "📦",
                title: "Shipping",
                lines: ["Pan-India free shipping", "International on request"],
              },
            ].map((info) => (
              <div
                key={info.title}
                className="flex gap-5 p-6 border border-[#1e1e1e] bg-[#111111] hover:border-[#d4a01740] transition-all duration-300"
              >
                <div className="w-10 h-10 flex items-center justify-center text-xl flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <div className="font-accent text-xs tracking-widest text-[#d4a017] uppercase mb-1">{info.title}</div>
                  {info.lines.map((l) => (
                    <div key={l} className="font-body text-sm text-[#8a7a6a] font-light">{l}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
