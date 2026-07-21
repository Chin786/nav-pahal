import { motion } from "motion/react";
import { Check, Send, User, Mail, Compass, HelpCircle } from "lucide-react";
import { FORM_DISCLOSURE } from "../content/siteContent";

export default function Volunteers() {
  return (
    <section
      id="volunteer-section"
      tabIndex={-1}
      className="py-24 bg-white scroll-mt-20 leading-tight"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="bg-gradient-to-br from-[var(--color-primary)] via-[#00B5E2] to-[var(--color-primary)] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden relative p-8 md:p-16 lg:p-20 text-white shadow-2xl">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[var(--color-secondary)]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-headline leading-tight">
                  Get Involved
                </h2>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  Explore ways to contribute to community development through volunteering,
                  mentoring, or partnership.
                </p>
              </div>

              <ul className="space-y-4 text-sm font-semibold">
                <li className="flex items-center gap-4">
                  <div className="bg-white/20 p-2 rounded-full shrink-0">
                    <Check className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <span>Explore community volunteering opportunities</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="bg-white/20 p-2 rounded-full shrink-0">
                    <Check className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <span>Learn about future workshops</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="bg-white/20 p-2 rounded-full shrink-0">
                    <Check className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <span>Express interest in community initiatives</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl border border-slate-100 text-slate-800">
              <h3 className="text-[var(--color-primary)] font-bold font-headline text-2xl mb-6">
                Join the Registry
              </h3>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-4"
                aria-label="Volunteer registration form (not yet active)"
              >
                <div className="p-3 bg-amber-50 text-amber-800 rounded-xl text-xs font-semibold flex items-center gap-1.5 border border-amber-200">
                  <HelpCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>{FORM_DISCLOSURE}</span>
                </div>

                <motion.div
                  initial={{ opacity: 1 }}
                  className="space-y-4 opacity-60 pointer-events-none"
                  aria-disabled="true"
                >
                  <div className="relative">
                    <label htmlFor="vol-full-name" className="sr-only">
                      Full Name
                    </label>
                    <User
                      className="absolute left-4 top-4.5 w-4 h-4 text-slate-400"
                      aria-hidden="true"
                    />
                    <input
                      id="vol-full-name"
                      type="text"
                      placeholder="Full Name"
                      disabled
                      className="w-full bg-[var(--color-bg)]/70 border border-slate-200 rounded-xl pl-11 pr-5 py-4 text-xs sm:text-sm font-medium"
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor="vol-email" className="sr-only">
                      Email Address
                    </label>
                    <Mail
                      className="absolute left-4 top-4.5 w-4 h-4 text-slate-400"
                      aria-hidden="true"
                    />
                    <input
                      id="vol-email"
                      type="email"
                      placeholder="Email Address"
                      disabled
                      className="w-full bg-[var(--color-bg)]/70 border border-slate-200 rounded-xl pl-11 pr-5 py-4 text-xs sm:text-sm font-medium"
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor="vol-interest" className="sr-only">
                      Interest Area
                    </label>
                    <Compass
                      className="absolute left-4 top-4.5 w-4 h-4 text-slate-400"
                      aria-hidden="true"
                    />
                    <select
                      id="vol-interest"
                      disabled
                      className="w-full bg-[var(--color-bg)]/70 border border-slate-200 rounded-xl pl-11 pr-5 py-4 text-slate-500 text-xs sm:text-sm font-medium appearance-none"
                    >
                      <option value="">Select Interest Area</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Education">Education</option>
                      <option value="Environment">Environment</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled
                    className="w-full bg-slate-300 text-white py-4 rounded-xl font-bold text-sm cursor-not-allowed flex items-center justify-center gap-2 mt-2"
                    title="Submissions are not yet active"
                  >
                    <Send className="w-4 h-4" aria-hidden="true" />
                    <span>Submit Application</span>
                  </button>
                </motion.div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
