/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Database, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenAdmin: () => void;
  adminCount: number;
}

export default function Header({ onOpenAdmin, adminCount }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const handleScroll = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-white/30 shadow-sm leading-tight">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center h-20">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img 
            alt="NAVPAHAL Logo" 
            className="h-12 w-auto object-contain" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcVpOjOeinu0YHZ2q0TApJ6v9CHOVY7H6TtPBZnr6vahiXiWLBnX77eJKRRzz4XI_OfAh-ocSywJYInaMF33TnJAETlepSq-2oRZEIhpldd6Ezr2DcQRw7F4XerfPKclfuOev1Ckpm2AXnNW9dQXrgrkVH2DuqGNJiuWTcJa2WTUowPl7zASEIiZDIrFQfD2DeZnbD22_ou4AcpttR3C27pXVdg-F6Tt33U3g-_Zrjb4E0QFVwylqQ_dbOw3h6zIU_OrnL3OUt93w"
            referrerPolicy="no-referrer"
          />
          <span className="text-2xl font-bold tracking-tight text-[#0072CE] font-headline hidden sm:block">
            NAVPAHAL
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => handleScroll('foundation-section')}
            className="text-[#0072CE] font-semibold text-sm hover:text-[#72BF44] transition-colors duration-300 pointer-events-auto"
          >
            Mission
          </button>
          <button 
            onClick={() => handleScroll('pillars-section')}
            className="text-[#44474e] font-semibold text-sm hover:text-[#0072CE] transition-colors duration-300"
          >
            Ecosystem
          </button>
          <button 
            onClick={() => handleScroll('services-section')}
            className="text-[#44474e] font-semibold text-sm hover:text-[#0072CE] transition-colors duration-300"
          >
            Academy
          </button>
          <button 
            onClick={() => handleScroll('experts-section')}
            className="text-[#44474e] font-semibold text-sm hover:text-[#0072CE] transition-colors duration-300"
          >
            Network
          </button>
        </nav>

        {/* Call to Actions */}
        <div className="flex items-center gap-3">
          {/* Admin Dashboard Trigger */}
          <button
            onClick={onOpenAdmin}
            className="relative p-2 text-[#44474e] hover:text-[#0072CE] hover:bg-slate-100 rounded-lg transition-all flex items-center gap-1.5 text-xs font-semibold"
            title="Open Submissions Console"
          >
            <Database className="w-5 h-5 text-[#0072CE]" />
            <span className="hidden lg:inline text-slate-600">Console</span>
            {adminCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#F7941D] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold animate-pulse">
                {adminCount}
              </span>
            )}
          </button>

          <button 
            onClick={() => handleScroll('volunteer-section')}
            className="bg-gradient-to-r from-[#0072CE] to-[#00B5E2] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-95 active:scale-95 transition-all shadow-md flex items-center gap-1"
          >
            Join Initiative
          </button>

          {/* Mobile menu trigger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#44474e] hover:bg-slate-100 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-6 py-6 space-y-4 shadow-inner">
          <button 
            onClick={() => handleScroll('foundation-section')}
            className="block w-full text-left font-semibold text-[#0072CE] hover:text-[#72BF44]"
          >
            Mission
          </button>
          <button 
            onClick={() => handleScroll('pillars-section')}
            className="block w-full text-left font-semibold text-[#44474e] hover:text-[#0072CE]"
          >
            Ecosystem
          </button>
          <button 
            onClick={() => handleScroll('services-section')}
            className="block w-full text-left font-semibold text-[#44474e] hover:text-[#0072CE]"
          >
            Academy
          </button>
          <button 
            onClick={() => handleScroll('experts-section')}
            className="block w-full text-left font-semibold text-[#44474e] hover:text-[#0072CE]"
          >
            Network
          </button>
          <button 
            onClick={onOpenAdmin}
            className="flex items-center gap-2 w-full text-left font-semibold text-[#0072CE] pt-2 border-t border-slate-100"
          >
            <Database className="w-4 h-4" />
            <span>Developer App Console ({adminCount} entries)</span>
          </button>
        </div>
      )}
    </header>
  );
}
