import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "../content/siteContent";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const menuButtonRef = React.useRef<HTMLButtonElement>(null);
  const mobileMenuRef = React.useRef<HTMLDivElement>(null);
  const location = useLocation();

  const closeMobile = React.useCallback(() => {
    setMobileMenuOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  React.useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMobile();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen, closeMobile]);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-white/30 shadow-sm leading-tight">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center h-20">
        <Link
          to="/"
          className="flex items-center gap-3 focus-ring rounded"
          aria-label="Navpahal home"
        >
          <span className="text-2xl font-bold tracking-tight text-[var(--color-primary)] font-headline">
            NAVPAHAL
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              aria-current={isActive(item.path) ? "page" : undefined}
              className={`font-semibold text-sm transition-colors duration-300 focus-ring rounded px-1 py-2 ${
                isActive(item.path)
                  ? "text-[var(--color-primary)]"
                  : "text-[var(--color-text-muted)] hover:text-[var(--color-primary)]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/get-involved"
            className="hidden md:inline-flex bg-gradient-to-r from-[var(--color-primary)] to-[#00B5E2] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-95 active:scale-95 transition-all shadow-md focus-ring"
          >
            Join Initiative
          </Link>

          <button
            ref={menuButtonRef}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[var(--color-text-muted)] hover:bg-slate-100 rounded-lg focus-ring"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          className="md:hidden bg-white border-b border-slate-100 px-6 py-6 space-y-4 shadow-inner"
          role="dialog"
          aria-label="Mobile navigation"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={closeMobile}
              aria-current={isActive(item.path) ? "page" : undefined}
              className={`block w-full text-left font-semibold focus-ring rounded px-2 py-2 ${
                isActive(item.path)
                  ? "text-[var(--color-primary)]"
                  : "text-[var(--color-text-muted)] hover:text-[var(--color-primary)]"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/get-involved"
            onClick={closeMobile}
            className="block w-full text-center bg-gradient-to-r from-[var(--color-primary)] to-[#00B5E2] text-white px-5 py-3 rounded-lg text-sm font-semibold mt-4 focus-ring"
          >
            Join Initiative
          </Link>
        </div>
      )}
    </header>
  );
}
