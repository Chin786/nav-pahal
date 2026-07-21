import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Eye, Rocket, Quote, RefreshCw, Heart } from "lucide-react";
import { FOUNDATION_CONTENT, FOUNDATION_SUBTITLE } from "../content/siteContent";
import { StatusBadge } from "../components/ui";

const PHILOSOPHY_QUOTES = [
  {
    text: "The greatness of a community is most accurately measured by the compassionate actions of its members.",
    author: "CORE PHILOSOPHY",
  },
  {
    text: "Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it's the only thing that ever has.",
    author: "MARGARET MEAD",
  },
  {
    text: "We cannot live only for ourselves. A thousand fibers connect us with our fellow men.",
    author: "HERMAN MELVILLE",
  },
  {
    text: "Alone we can do so little; together we can do so many things.",
    author: "HELEN KELLER",
  },
];

export default function Foundation() {
  const [quoteIndex, setQuoteIndex] = React.useState(0);
  const [visionExpanded, setVisionExpanded] = React.useState(false);
  const [missionExpanded, setMissionExpanded] = React.useState(false);

  const cycleQuote = () => {
    setQuoteIndex((prev) => (prev + 1) % PHILOSOPHY_QUOTES.length);
  };

  return (
    <section
      id="foundation-section"
      className="py-24 bg-[var(--color-bg)] scroll-mt-20 leading-tight"
    >
      <div className="max-w-[var(--content-max-width)] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Side Content & Accordion */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl font-extrabold text-[var(--color-primary)] font-headline">
                Our Foundation
              </h2>
              <div className="flex items-center gap-3">
                <p className="text-[var(--color-text-muted)] text-sm sm:text-base leading-relaxed">
                  {FOUNDATION_SUBTITLE}
                </p>
                <StatusBadge status={FOUNDATION_CONTENT.status} />
              </div>
            </div>

            <div className="grid gap-6">
              {/* Vision Card */}
              <motion.div
                className="glass-card p-6 sm:p-8 rounded-2xl border-l-[6px] border-[var(--color-primary)] shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[var(--color-primary)]/10 rounded-xl text-[var(--color-primary)]">
                    <Eye className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="flex justify-between items-center">
                      <h4
                        id="vision-heading"
                        className="text-lg font-bold text-[var(--color-text)] font-headline"
                      >
                        Our Vision
                      </h4>
                      <button
                        type="button"
                        aria-expanded={visionExpanded}
                        aria-controls="vision-panel"
                        onClick={() => setVisionExpanded(!visionExpanded)}
                        className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider focus-ring"
                      >
                        {visionExpanded ? "Show Less" : "Read Deeply"}
                      </button>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {FOUNDATION_CONTENT.value.vision.summary}
                    </p>

                    <AnimatePresence>
                      {visionExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div
                            id="vision-panel"
                            role="region"
                            aria-labelledby="vision-heading"
                            className="pt-4 border-t border-slate-100 mt-3 text-xs text-slate-500 space-y-2 leading-relaxed"
                          >
                            <p>{FOUNDATION_CONTENT.value.vision.details}</p>
                            <p className="font-semibold text-[var(--color-primary)]">
                              &bull; Decentralized growth &bull; Audit-mapped pipeline &bull;
                              Inclusive action
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>

              {/* Mission Card */}
              <motion.div
                className="glass-card p-6 sm:p-8 rounded-2xl border-l-[6px] border-[var(--color-secondary)] shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[var(--color-secondary)]/10 rounded-xl text-[var(--color-secondary)]">
                    <Rocket className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="flex justify-between items-center">
                      <h4
                        id="mission-heading"
                        className="text-lg font-bold text-[var(--color-text)] font-headline"
                      >
                        Our Mission
                      </h4>
                      <button
                        type="button"
                        aria-expanded={missionExpanded}
                        aria-controls="mission-panel"
                        onClick={() => setMissionExpanded(!missionExpanded)}
                        className="text-xs font-bold text-[var(--color-secondary)] uppercase tracking-wider focus-ring"
                      >
                        {missionExpanded ? "Show Less" : "Read Deeply"}
                      </button>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {FOUNDATION_CONTENT.value.mission.summary}
                    </p>

                    <AnimatePresence>
                      {missionExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div
                            id="mission-panel"
                            role="region"
                            aria-labelledby="mission-heading"
                            className="pt-4 border-t border-slate-100 mt-3 text-xs text-slate-500 space-y-2 leading-relaxed"
                          >
                            <p>{FOUNDATION_CONTENT.value.mission.details}</p>
                            <p className="font-semibold text-[var(--color-secondary)]">
                              &bull; Direct execution &bull; Cross-sector synergy &bull; Capacity
                              building
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Side Visual Placeholder & Rotated Card */}
          <div className="relative flex justify-center items-center h-[500px]">
            <div className="w-full max-w-md aspect-square rounded-[2.5rem] md:rounded-[3rem] border-8 border-white shadow-2xl rotate-3 hover:rotate-1 transition-transform duration-500 bg-gradient-to-br from-[var(--color-primary)]/10 via-white to-[var(--color-secondary)]/10 flex items-center justify-center">
              <div className="flex flex-col items-center gap-4 text-center px-6">
                <div className="w-20 h-20 rounded-full bg-[var(--color-primary)]/15 flex items-center justify-center text-[var(--color-primary)]">
                  <Heart className="w-10 h-10" aria-hidden="true" />
                </div>
                <p className="text-sm font-bold text-[var(--color-text-muted)] uppercase tracking-widest">
                  Community &middot; Unity &middot; Impact
                </p>
              </div>
            </div>

            {/* Overlapping Glassmorphic Quote */}
            <motion.div
              className="absolute glass-card p-8 sm:p-10 rounded-2xl sm:rounded-3xl shadow-2xl -rotate-2 hover:rotate-0 transition-all duration-300 max-w-sm border-gradient-brand text-center space-y-6 bg-white/90"
              whileHover={{ scale: 1.03 }}
            >
              <div className="relative inline-flex items-center justify-center">
                <Quote
                  className="text-[var(--color-accent)] w-12 h-12 stroke-[1.5] scale-x-[-1]"
                  aria-hidden="true"
                />
                <button
                  onClick={cycleQuote}
                  className="absolute -right-14 p-2 text-slate-400 hover:text-[var(--color-primary)] rounded-full hover:bg-slate-100 transition-all"
                  title="Cycle Philosophy Quotes"
                  aria-label="Show next community quote"
                >
                  <RefreshCw className="w-4 h-4 animate-spin-slow" aria-hidden="true" />
                </button>
              </div>

              <div className="min-h-[120px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={quoteIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-base sm:text-lg font-bold font-headline text-[var(--color-primary)] italic leading-relaxed"
                  >
                    &ldquo;{PHILOSOPHY_QUOTES[quoteIndex].text}&rdquo;
                  </motion.p>
                </AnimatePresence>
              </div>

              <div className="space-y-1">
                <p className="font-extrabold text-[11px] tracking-[0.15em] text-[var(--color-secondary)]">
                  {PHILOSOPHY_QUOTES[quoteIndex].author}
                </p>
                <div className="w-12 h-[2px] bg-[var(--color-accent)] mx-auto mt-2" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
