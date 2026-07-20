import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/programs", label: "Programs" },
  { path: "/training", label: "Training" },
  { path: "/get-involved", label: "Get Involved" },
  { path: "/impact", label: "Impact" },
  { path: "/resources", label: "Resources" },
  { path: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-white/30 shadow-sm leading-tight">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center h-20">
        {/* Logo and Brand */}
        <Link to="/" className="flex items-center gap-3">
          <span className="text-2xl font-bold tracking-tight text-[#0072CE] font-headline">
            NAVPAHAL
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-semibold text-sm transition-colors duration-300 ${
                location.pathname === item.path
                  ? "text-[#0072CE]"
                  : "text-[#44474e] hover:text-[#0072CE]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Call to Actions */}
        <div className="flex items-center gap-3">
          <Link
            to="/get-involved"
            className="bg-gradient-to-r from-[#0072CE] to-[#00B5E2] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-95 active:scale-95 transition-all shadow-md"
          >
            Join Initiative
          </Link>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#44474e] hover:bg-slate-100 rounded-lg"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-6 py-6 space-y-4 shadow-inner">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={closeMobile}
              className={`block w-full text-left font-semibold ${
                location.pathname === item.path
                  ? "text-[#0072CE]"
                  : "text-[#44474e] hover:text-[#0072CE]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
