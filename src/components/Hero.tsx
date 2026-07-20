import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 overflow-hidden bg-gradient-to-b from-[#F0F8FF]/80 via-[#f7f9fb] to-[#f7f9fb]">
      {/* Background radial highlight blobs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#0072CE]/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#72BF44]/80 opacity-[0.06] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Interactive Information */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 md:space-y-8"
        >
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-[#72BF44]/20 text-[#72BF44] rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#72BF44] animate-pulse" />
            Social Innovation 2.0
          </div>

          {/* Heading */}
          <h1 className="text-4.5xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0072CE] font-headline leading-[1.15]">
            Empowering Communities, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B5E2] to-[#0072CE]">
              One Initiative
            </span>{" "}
            at a Time
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-[#44474e] max-w-xl leading-relaxed">
            Navpahal bridges the gap between institutional resources and grassroots needs, creating
            a resilient ecosystem for sustainable community development through awareness,
            preparedness, and training.
          </p>

          <div className="flex items-center gap-3">
            <span className="w-10 h-[2px] bg-[#F7941D]" />
            <span className="text-xs font-bold text-[#F7941D] tracking-widest uppercase">
              AWARE. ENGAGE. EMPOWER.
            </span>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-5 pt-2">
            <Link
              to="/get-involved"
              className="bg-gradient-to-r from-[#F7941D] to-[#e67e17] text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide transition-all shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-98"
            >
              Join the Movement
            </Link>
            <Link
              to="/impact"
              className="flex items-center gap-2 text-[#0072CE] font-bold text-sm hover:translate-x-1.5 transition-transform"
            >
              <span>View Our Impact</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        {/* Right Image/Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="relative group"
        >
          {/* Background fuzzy shadows */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#00B5E2] to-[#72BF44] opacity-10 rounded-[3rem] blur-2xl group-hover:opacity-15 transition-opacity duration-500" />

          {/* Frame mockup for the community photo */}
          <div className="relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden aspect-[4/3] shadow-2xl border-4 border-white bg-slate-100">
            <img
              alt="Diverse community group working together"
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmGi0fo44x4iWO-h1iYIIQMtTFOXEcPC6Nx7o23K335WNlevqUiZXLEtW_vJ6EJgmlV3qunjiTSgXI4HHs1knLRu--STy7rVNCkYGsPtQLTcX3kEa-7k13SXahp98iq_pCL_d12aLuzie2ZWRVtMEuJYzpIKntsoAwFGJGC6vhk3XZa7ugp0ICcBBoVNSq3UW-zcd613JMzgTSWQj2uyuDrYa4IZrAnlAJhTZ1tzW1BsWGU9_jgZBalOpuK42lhjr2miP1BJwdVmc"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
