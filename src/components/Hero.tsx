import { motion } from "motion/react";
import { ArrowRight, Users, BookOpen, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { HERO_CONTENT, BRAND } from "../content/siteContent";
import { StatusBadge } from "../components/ui";

const gradientText = "One Initiative";
const titleBefore = HERO_CONTENT.title.slice(0, HERO_CONTENT.title.indexOf(gradientText));
const titleAfter = HERO_CONTENT.title.slice(titleBefore.length + gradientText.length);

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 overflow-hidden bg-gradient-to-b from-[#F0F8FF]/80 via-[var(--color-bg)] to-[var(--color-bg)]">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[var(--color-secondary)]/80 opacity-[0.06] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 md:space-y-8"
        >
          <div className="flex items-center gap-3 flex-wrap">
            <StatusBadge status={HERO_CONTENT.status} />
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-[var(--color-secondary)]/20 text-[var(--color-secondary)] rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-secondary)] animate-pulse" />
              {HERO_CONTENT.tagline}
            </div>
          </div>

          <h1 className="text-4.5xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--color-primary)] font-headline leading-[1.15]">
            {titleBefore}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B5E2] to-[var(--color-primary)]">
              {gradientText}
            </span>
            {titleAfter}
          </h1>

          <p className="text-base sm:text-lg text-[var(--color-text-muted)] max-w-xl leading-relaxed">
            {HERO_CONTENT.description}
          </p>

          <div className="flex items-center gap-3">
            <span className="w-10 h-[2px] bg-[var(--color-accent)]" />
            <span className="text-xs font-bold text-[var(--color-accent)] tracking-widest uppercase">
              {BRAND.tagline}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-5 pt-2">
            <Link
              to={HERO_CONTENT.ctaPrimary.to}
              className="bg-gradient-to-r from-[var(--color-accent)] to-[#e67e17] text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide transition-all shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-98"
            >
              {HERO_CONTENT.ctaPrimary.label}
            </Link>
            <Link
              to={HERO_CONTENT.ctaSecondary.to}
              className="flex items-center gap-2 text-[var(--color-primary)] font-bold text-sm hover:translate-x-1.5 transition-transform"
            >
              <span>{HERO_CONTENT.ctaSecondary.label}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#00B5E2] to-[var(--color-secondary)] opacity-10 rounded-[3rem] blur-2xl group-hover:opacity-15 transition-opacity duration-500" />

          <div className="relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden aspect-[4/3] shadow-2xl border-4 border-white bg-gradient-to-br from-[var(--color-primary)]/10 via-[var(--color-bg)] to-[var(--color-secondary)]/10 flex items-center justify-center">
            <div className="flex flex-col items-center gap-6 text-center px-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-[var(--color-primary)]/15 flex items-center justify-center text-[var(--color-primary)]">
                  <Users className="w-8 h-8" aria-hidden="true" />
                </div>
                <div className="w-16 h-16 rounded-2xl bg-[var(--color-secondary)]/15 flex items-center justify-center text-[var(--color-secondary)]">
                  <BookOpen className="w-8 h-8" aria-hidden="true" />
                </div>
                <div className="w-16 h-16 rounded-2xl bg-[var(--color-accent)]/15 flex items-center justify-center text-[var(--color-accent)]">
                  <ShieldCheck className="w-8 h-8" aria-hidden="true" />
                </div>
              </div>
              <p className="text-sm font-bold text-[var(--color-text-muted)] uppercase tracking-widest">
                Community &middot; Training &middot; Preparedness
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
