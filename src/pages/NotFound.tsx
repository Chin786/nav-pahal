import { Link } from "react-router-dom";
import { Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="pt-32 pb-24 bg-[var(--color-bg)] min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto px-6 md:px-10 text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl sm:text-8xl font-extrabold text-[var(--color-primary)]/20 font-headline">
            404
          </h1>
          <p className="text-2xl sm:text-3xl font-extrabold text-[var(--color-primary)] font-headline">
            Page Not Found
          </p>
        </div>

        <p className="text-[var(--color-text-muted)] text-base leading-relaxed max-w-md mx-auto">
          The page you are looking for does not exist or has been moved. Please check the URL or
          navigate to one of our main pages.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide transition-all shadow-lg hover:opacity-90 active:scale-[0.98]"
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            <span>Return Home</span>
          </Link>
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-4 rounded-xl font-bold text-sm hover:bg-[var(--color-primary)] hover:text-white transition-all"
          >
            <span>View Programs</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
