import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shringaar | Premium Bangdi Collection",
  description: "Luxurious handcrafted bangles — where tradition meets opulence. Emerald & gold bangdi for the discerning woman.",
  keywords: "bangdi, bangles, premium bangles, emerald bangles, gold bangles, Indian jewelry",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="grain">{children}</body>
    </html>
  );
}
