import type { Metadata } from "next";
import SkipLink from "@/components/SkipLink";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Navpahal | Aware. Engage. Empower.",
    template: "%s | Navpahal",
  },
  description:
    "Navpahal proposes to empower communities through awareness, preparedness, and training. Learn about our planned mission and how to get involved.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#f7f9fb] text-slate-800 selection:bg-[#0072CE]/20 selection:text-[#0072CE] font-sans antialiased overflow-x-hidden">
        <SkipLink />
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
