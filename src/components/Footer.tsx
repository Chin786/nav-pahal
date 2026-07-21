"use client";

import React from "react";
import Link from "next/link";
import { Share2, AlertCircle, ChevronRight } from "lucide-react";
import { BRAND, SERVICE_BOUNDARY, FORM_DISCLOSURE } from "../content/siteContent";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = React.useState("");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full rounded-t-[2.5rem] md:rounded-t-[3.5rem] bg-slate-900 text-white mt-[-2rem] relative z-20 leading-tight">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <span className="text-xl font-extrabold tracking-tight font-headline text-white">
                {BRAND.name.toUpperCase()}
              </span>
            </Link>

            <p className="text-sm text-slate-400 italic">&ldquo;{BRAND.tagline}&rdquo;</p>

            <span className="block text-xs text-slate-500 leading-relaxed max-w-xs">
              &copy; {currentYear} {BRAND.name.toUpperCase()}. Empowering communities through
              strategic social impact.
            </span>

            <div className="flex gap-3">
              <a
                href="#share"
                onClick={(e) => {
                  e.preventDefault();
                  navigator.clipboard.writeText(window.location.href);
                  alert("URL copied to your clipboard!");
                }}
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white transition-all text-slate-400"
                title="Share this page"
              >
                <Share2 className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h6 className="font-extrabold text-sm text-[var(--color-primary)] uppercase tracking-widest">
              Platform
            </h6>
            <ul className="space-y-3.5 text-sm font-semibold">
              <li>
                <Link
                  href="/"
                  className="hover:text-white text-slate-400 transition-all flex items-center gap-1.5"
                >
                  <ChevronRight
                    className="w-4 h-4 text-[var(--color-primary)]/60"
                    aria-hidden="true"
                  />{" "}
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white text-slate-400 transition-all flex items-center gap-1.5"
                >
                  <ChevronRight
                    className="w-4 h-4 text-[var(--color-primary)]/60"
                    aria-hidden="true"
                  />{" "}
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="hover:text-white text-slate-400 transition-all flex items-center gap-1.5"
                >
                  <ChevronRight
                    className="w-4 h-4 text-[var(--color-primary)]/60"
                    aria-hidden="true"
                  />{" "}
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white text-slate-400 transition-all flex items-center gap-1.5"
                >
                  <ChevronRight
                    className="w-4 h-4 text-[var(--color-primary)]/60"
                    aria-hidden="true"
                  />{" "}
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h6 className="font-extrabold text-sm text-[var(--color-secondary)] uppercase tracking-widest">
              Get Involved
            </h6>
            <ul className="space-y-3.5 text-slate-400 text-sm font-semibold">
              <li>
                <Link
                  href="/get-involved"
                  className="hover:text-white transition-all flex items-center gap-1.5"
                >
                  <ChevronRight
                    className="w-4 h-4 text-[var(--color-secondary)]/60"
                    aria-hidden="true"
                  />{" "}
                  Volunteer
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="hover:text-white transition-all flex items-center gap-1.5"
                >
                  <ChevronRight
                    className="w-4 h-4 text-[var(--color-secondary)]/60"
                    aria-hidden="true"
                  />{" "}
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/training"
                  className="hover:text-white transition-all flex items-center gap-1.5"
                >
                  <ChevronRight
                    className="w-4 h-4 text-[var(--color-secondary)]/60"
                    aria-hidden="true"
                  />{" "}
                  Training
                </Link>
              </li>
              <li>
                <Link
                  href="/impact"
                  className="hover:text-white transition-all flex items-center gap-1.5"
                >
                  <ChevronRight
                    className="w-4 h-4 text-[var(--color-secondary)]/60"
                    aria-hidden="true"
                  />{" "}
                  Impact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-5">
            <h6 className="font-extrabold text-sm text-[var(--color-accent)] uppercase tracking-widest">
              Newsletter
            </h6>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Subscribe for quarterly updates on community programs and impact activities.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-3 text-xs">
              <div className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-[10px] text-slate-400 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                <span>{FORM_DISCLOSURE}</span>
              </div>
              <div className="relative">
                <label htmlFor="footer-newsletter-email" className="sr-only">
                  Your Email
                </label>
                <input
                  id="footer-newsletter-email"
                  type="email"
                  placeholder="Your Email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  disabled
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 w-full text-white placeholder:text-white/30 text-xs font-semibold"
                />
              </div>
              <button
                type="submit"
                disabled
                className="w-full bg-slate-700 text-slate-400 font-bold py-3.5 rounded-xl cursor-not-allowed flex items-center justify-center gap-1.5"
                title="Submissions are not yet active"
              >
                <span>Subscribe</span>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <p
              className="text-xs text-slate-400 leading-relaxed max-w-3xl mx-auto"
              data-testid="service-boundary"
            >
              <strong className="text-slate-300">Important:</strong> {SERVICE_BOUNDARY}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
