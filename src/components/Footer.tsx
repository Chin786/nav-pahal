import React from "react";
import { Link } from "react-router-dom";
import { Share2, Globe, ArrowUpRight, CheckCircle2, ChevronRight } from "lucide-react";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = React.useState("");
  const [subscribed, setSubscribed] = React.useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes("@")) {
      return;
    }
    setSubscribed(true);
    setNewsletterEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full rounded-t-[2.5rem] md:rounded-t-[3.5rem] bg-slate-900 text-white mt-[-2rem] relative z-20 leading-tight">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Logo & Info column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <span className="text-xl font-extrabold tracking-tight font-headline text-white">
                NAVPAHAL
              </span>
            </Link>

            <p className="text-sm text-slate-400 italic">&ldquo;Aware. Engage. Empower.&rdquo;</p>

            <span className="block text-xs text-slate-500 leading-relaxed max-w-xs">
              &copy; {currentYear} NAVPAHAL. Empowering communities through strategic social impact.
              Bridging resources with real-world needs.
            </span>

            <div className="flex gap-3">
              <a
                href="#share"
                onClick={(e) => {
                  e.preventDefault();
                  navigator.clipboard.writeText(window.location.href);
                  alert("URL copied to your clipboard!");
                }}
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#0072CE] hover:text-white transition-all text-slate-400"
                title="Share this page"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href="https://navpahal.org"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#72BF44] hover:text-white transition-all text-slate-400"
                title="Visit Navpahal Website"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Platform links column */}
          <div className="space-y-6">
            <h6 className="font-extrabold text-sm text-[#0072CE] uppercase tracking-widest">
              Platform
            </h6>
            <ul className="space-y-3.5 text-sm font-semibold">
              <li>
                <Link
                  to="/"
                  className="hover:text-white text-slate-400 transition-all flex items-center gap-1.5"
                >
                  <ChevronRight className="w-4 h-4 text-[#0072CE]/60" /> Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white text-slate-400 transition-all flex items-center gap-1.5"
                >
                  <ChevronRight className="w-4 h-4 text-[#0072CE]/60" /> About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="hover:text-white text-slate-400 transition-all flex items-center gap-1.5"
                >
                  <ChevronRight className="w-4 h-4 text-[#0072CE]/60" /> Programs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white text-slate-400 transition-all flex items-center gap-1.5"
                >
                  <ChevronRight className="w-4 h-4 text-[#0072CE]/60" /> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Impact links column */}
          <div className="space-y-6">
            <h6 className="font-extrabold text-sm text-[#72BF44] uppercase tracking-widest">
              Get Involved
            </h6>
            <ul className="space-y-3.5 text-slate-400 text-sm font-semibold">
              <li>
                <Link
                  to="/get-involved"
                  className="hover:text-white transition-all flex items-center gap-1.5"
                >
                  <ChevronRight className="w-4 h-4 text-[#72BF44]/60" /> Volunteer
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="hover:text-white transition-all flex items-center gap-1.5"
                >
                  <ChevronRight className="w-4 h-4 text-[#72BF44]/60" /> Programs
                </Link>
              </li>
              <li>
                <Link
                  to="/training"
                  className="hover:text-white transition-all flex items-center gap-1.5"
                >
                  <ChevronRight className="w-4 h-4 text-[#72BF44]/60" /> Training
                </Link>
              </li>
              <li>
                <Link
                  to="/impact"
                  className="hover:text-white transition-all flex items-center gap-1.5"
                >
                  <ChevronRight className="w-4 h-4 text-[#72BF44]/60" /> Impact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter subscription form */}
          <div className="space-y-5">
            <h6 className="font-extrabold text-sm text-[#F7941D] uppercase tracking-widest">
              Newsletter
            </h6>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Subscribe for quarterly updates on community programs and impact activities.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-3 text-xs">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 w-full focus:ring-1 focus:ring-[#F7941D] text-white placeholder:text-white/30 text-xs font-semibold focus:outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#F7941D] to-[#e67e17] text-white font-bold py-3.5 rounded-xl hover:opacity-95 transition-all shadow-lg flex items-center justify-center gap-1.5"
              >
                <span>Subscribe</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              {subscribed && (
                <div className="flex items-center gap-1.5 text-xs text-lime-400 font-bold bg-white/5 p-2 rounded-lg animate-pulse">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Subscribed successfully!</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Service Boundary */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <p
              className="text-xs text-slate-400 leading-relaxed max-w-3xl mx-auto"
              data-testid="service-boundary"
            >
              <strong className="text-slate-300">Important:</strong> In an active emergency, contact
              the appropriate official emergency service immediately. Navpahal provides awareness,
              preparedness and community training; it does not replace doctors, hospitals, police,
              fire services, ambulances or professional emergency responders.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
