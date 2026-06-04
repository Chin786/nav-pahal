/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Share2, Globe, ArrowUpRight, Send, CheckCircle2, ChevronRight } from 'lucide-react';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = React.useState('');
  const [subscribed, setSubscribed] = React.useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) {
      return;
    }
    // Set subscribed locally
    setSubscribed(true);
    setNewsletterEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full rounded-t-[2.5rem] md:rounded-t-[3.5rem] bg-slate-900 text-white mt-[-2rem] relative z-20 leading-tight">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Logo & Info column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 cursor-pointer" onClick={handleScrollToTop}>
              <img 
                alt="NAVPAHAL Logo" 
                className="h-14 w-auto brightness-0 invert" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcVpOjOeinu0YHZ2q0TApJ6v9CHOVY7H6TtPBZnr6vahiXiWLBnX77eJKRRzz4XI_OfAh-ocSywJYInaMF33TnJAETlepSq-2oRZEIhpldd6Ezr2DcQRw7F4XerfPKclfuOev1Ckpm2AXnNW9dQXrgrkVH2DuqGNJiuWTcJa2WTUowPl7zASEIiZDIrFQfD2DeZnbD22_ou4AcpttR3C27pXVdg-F6Tt33U3g-_Zrjb4E0QFVwylqQ_dbOw3h6zIU_OrnL3OUt93w"
                referrerPolicy="no-referrer"
              />
              <span className="text-xl font-extrabold tracking-tight font-headline text-white">NAVPAHAL</span>
            </div>
            
            <p className="text-sm text-slate-400 italic">
              "Aware. Engage. Empower."
            </p>

            <span className="block text-xs text-slate-500 leading-relaxed max-w-xs">
              © {currentYear} NAVPAHAL. Empowering communities through strategic social impact. Bridging resources with real-world needs.
            </span>

            {/* Social shares */}
            <div className="flex gap-3">
              <a 
                href="#share" 
                onClick={(e) => { e.preventDefault(); navigator.clipboard.writeText(window.location.href); alert('Applet URL copied to your clipboard!'); }}
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#0072CE] hover:text-white transition-all text-slate-400"
                title="Share this Applet"
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

          {/* Platform Platform links column */}
          <div className="space-y-6">
            <h6 className="font-extrabold text-sm text-[#0072CE] uppercase tracking-widest">Platform</h6>
            <ul className="space-y-3.5 text-slate-450 text-sm font-semibold">
              <li>
                <a onClick={handleScrollToTop} className="hover:text-white text-slate-400 transition-all flex items-center gap-1.5 cursor-pointer">
                  <ChevronRight className="w-4 h-4 text-[#0072CE]/60" /> Home
                </a>
              </li>
              <li>
                <a onClick={() => document.getElementById('foundation-section')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white text-slate-400 transition-all flex items-center gap-1.5 cursor-pointer">
                  <ChevronRight className="w-4 h-4 text-[#0072CE]/60" /> Our Mission
                </a>
              </li>
              <li>
                <a onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white text-slate-400 transition-all flex items-center gap-1.5 cursor-pointer">
                  <ChevronRight className="w-4 h-4 text-[#0072CE]/60" /> Academy Services
                </a>
              </li>
              <li>
                <a onClick={() => document.getElementById('experts-section')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white text-slate-400 transition-all flex items-center gap-1.5 cursor-pointer">
                  <ChevronRight className="w-4 h-4 text-[#0072CE]/60" /> Experts Network
                </a>
              </li>
            </ul>
          </div>

          {/* Impact links column */}
          <div className="space-y-6">
            <h6 className="font-extrabold text-sm text-[#72BF44] uppercase tracking-widest">Impact Model</h6>
            <ul className="space-y-3.5 text-slate-400 text-sm font-semibold">
              <li>
                <a onClick={() => document.getElementById('stats-block')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-all flex items-center gap-1.5 cursor-pointer">
                  <ChevronRight className="w-4 h-4 text-[#72BF44]/60" /> Impact Numbers
                </a>
              </li>
              <li>
                <a onClick={() => document.getElementById('pillars-section')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-all flex items-center gap-1.5 cursor-pointer">
                  <ChevronRight className="w-4 h-4 text-[#72BF44]/60" /> Four Pillars
                </a>
              </li>
              <li>
                <a onClick={() => document.getElementById('volunteer-section')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-all flex items-center gap-1.5 cursor-pointer">
                  <ChevronRight className="w-4 h-4 text-[#72BF44]/60" /> Join Registry
                </a>
              </li>
              <li>
                <a onClick={() => document.getElementById('connect-section')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-all flex items-center gap-1.5 cursor-pointer">
                  <ChevronRight className="w-4 h-4 text-[#72BF44]/60" /> Contact Support
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter subscription form */}
          <div className="space-y-5">
            <h6 className="font-extrabold text-sm text-[#F7941D] uppercase tracking-widest">Newsletter</h6>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Subscribe for quarterly impact summaries, health strategies, and grassroots audits.
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
                  <span>Subscribed Core reports!</span>
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </footer>
  );
}
