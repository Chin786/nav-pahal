import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Eye, Rocket, Quote, RefreshCw } from "lucide-react";

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
    <section id="foundation-section" className="py-24 bg-[#f2f4f6] scroll-mt-20 leading-tight">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Side Content & Accordion */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl font-extrabold text-[#0072CE] font-headline">
                Our Foundation
              </h2>
              <p className="text-[#44474e] text-sm sm:text-base leading-relaxed">
                Navpahal&apos;s foundations are structured to drive transparency, thoughtful
                execution, and deep systemic improvements in grassroots community welfare.
              </p>
            </div>

            <div className="grid gap-6">
              {/* Vision Card */}
              <motion.div
                onClick={() => setVisionExpanded(!visionExpanded)}
                className="glass-card p-6 sm:p-8 rounded-2xl border-l-[6px] border-[#0072CE] shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden"
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#0072CE]/10 rounded-xl text-[#0072CE]">
                    <Eye className="w-6 h-6" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="flex justify-between items-center">
                      <h4 className="text-lg font-bold text-[#031635] font-headline">Our Vision</h4>
                      <span className="text-xs font-bold text-[#0072CE] uppercase tracking-wider">
                        {visionExpanded ? "Show Less" : "Read Deeply"}
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      To build a world where every community has the tools, network, and expertise
                      to drive their own sustainable evolution.
                    </p>

                    <AnimatePresence>
                      {visionExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pt-4 border-t border-slate-100 mt-3 text-xs text-slate-500 space-y-2 leading-relaxed"
                        >
                          <p>
                            We aim to bypass traditional delays in resource distribution. Through
                            technology frameworks and community partnerships, we enable verification
                            of grassroots needs to secure matching with corporate capital and expert
                            mentoring.
                          </p>
                          <p className="font-semibold text-[#0072CE]">
                            &bull; Decentralized growth &bull; Audit-mapped pipeline &bull;
                            Inclusive action
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>

              {/* Mission Card */}
              <motion.div
                onClick={() => setMissionExpanded(!missionExpanded)}
                className="glass-card p-6 sm:p-8 rounded-2xl border-l-[6px] border-[#72BF44] shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden"
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#72BF44]/10 rounded-xl text-[#72BF44]">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="flex justify-between items-center">
                      <h4 className="text-lg font-bold text-[#031635] font-headline">
                        Our Mission
                      </h4>
                      <span className="text-xs font-bold text-[#72BF44] uppercase tracking-wider">
                        {missionExpanded ? "Show Less" : "Read Deeply"}
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Systemizing social impact through innovative technology, community training
                      networks, and cross-sector collaboration.
                    </p>

                    <AnimatePresence>
                      {missionExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pt-4 border-t border-slate-100 mt-3 text-xs text-slate-500 space-y-2 leading-relaxed"
                        >
                          <p>
                            By integrating our four pillars (Citizens, Volunteers, Trainers &amp;
                            Mentors, Partners) under one cohesive engine, we accelerate skills
                            development, scale community training, and drive structural
                            accountability.
                          </p>
                          <p className="font-semibold text-[#72BF44]">
                            &bull; Direct execution &bull; Cross-sector synergy &bull; Capacity
                            building
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Side Image & Rotated Card */}
          <div className="relative flex justify-center items-center h-[500px]">
            {/* Background Image Container */}
            <div className="w-full max-w-md aspect-square rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl rotate-3 hover:rotate-1 transition-transform duration-500 bg-slate-200">
              <img
                alt="Community unity hands"
                className="w-full h-full object-cover grayscale-[30%] hover:scale-[1.03] transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmPkKz5XnYYtVkQTeb4i2m4L4KOgC8SCVsnxe_A-WRXAfRxNbQWxkcprnchGNLfMPaY0qiII_P_8DXMV0mlJdtYrGXdTmWB0yMzxS0IkPvKk8qs5TMZW8acnhz_PjKBDQFwanjGepsIK2Qt1_aByJFLQsHvbo3rA8TrBcUX3HFCQoRxVYez3tvnfTWdBy2j7wlMbADjniIjroX8eGNOya7HKGviKgRnksBs7mrKkZJs_pkoddKqoLB2TBYAc4ndDqbVWgwcf7m5y4"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Overlapping Glassmorphic Quote */}
            <motion.div
              className="absolute glass-card p-8 sm:p-10 rounded-2xl sm:rounded-3xl shadow-2xl -rotate-2 hover:rotate-0 transition-all duration-300 max-w-sm border-gradient-brand text-center space-y-6 bg-white/90"
              whileHover={{ scale: 1.03 }}
            >
              <div className="relative inline-flex items-center justify-center">
                <Quote className="text-[#F7941D] w-12 h-12 stroke-[1.5] scale-x-[-1]" />
                <button
                  onClick={cycleQuote}
                  className="absolute -right-14 p-2 text-slate-400 hover:text-[#0072CE] rounded-full hover:bg-slate-100 transition-all"
                  title="Cycle Philosophy Quotes"
                >
                  <RefreshCw className="w-4 h-4 animate-spin-slow" />
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
                    className="text-base sm:text-lg font-bold font-headline text-[#0072CE] italic leading-relaxed"
                  >
                    &ldquo;{PHILOSOPHY_QUOTES[quoteIndex].text}&rdquo;
                  </motion.p>
                </AnimatePresence>
              </div>

              <div className="space-y-1">
                <p className="font-extrabold text-[11px] tracking-[0.15em] text-[#72BF44]">
                  {PHILOSOPHY_QUOTES[quoteIndex].author}
                </p>
                <div className="w-12 h-[2px] bg-[#F7941D] mx-auto mt-2" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
