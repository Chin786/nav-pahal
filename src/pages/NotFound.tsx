import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="pt-32 pb-24 bg-[#f7f9fb] min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto px-6 md:px-10 text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl sm:text-8xl font-extrabold text-[#0072CE]/20 font-headline">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0072CE] font-headline">
            Page Not Found
          </h2>
        </div>

        <p className="text-[#44474e] text-base leading-relaxed max-w-md mx-auto">
          The page you are looking for does not exist or has been moved. Please check the URL or
          navigate back to the home page.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0072CE] to-[#00B5E2] text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide transition-all shadow-lg hover:opacity-95 active:scale-95"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
      </div>
    </section>
  );
}
