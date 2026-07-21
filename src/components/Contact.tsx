import { motion } from "motion/react";
import { MapPin, Mail, Phone, Send, AlertCircle } from "lucide-react";
import { FORM_DISCLOSURE, CONTACT_VERIFICATION } from "../content/siteContent";

export default function Contact() {
  return (
    <section
      id="connect-section"
      tabIndex={-1}
      className="py-24 bg-[var(--color-bg)]/60 border-t border-slate-100 scroll-mt-20 leading-tight"
    >
      <div className="mx-auto w-full max-w-[var(--content-max-width)] px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-extrabold text-[var(--color-primary)] font-headline">
              Let&apos;s Connect
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
              Whether you&apos;re looking to volunteer, partner, or just want to learn more, our
              team is here to help.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-5 group">
              <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all text-[var(--color-primary)]">
                <MapPin className="w-6 h-6" aria-hidden="true" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-[var(--color-primary)] font-headline">
                  Headquarters
                </h3>
                <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                  {CONTACT_VERIFICATION}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5 group">
              <div className="w-14 h-14 rounded-2xl bg-[var(--color-secondary)]/15 flex items-center justify-center shrink-0 group-hover:bg-[var(--color-secondary)] group-hover:text-white transition-all text-[var(--color-secondary)]">
                <Mail className="w-6 h-6" aria-hidden="true" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-[var(--color-primary)] font-headline">
                  Email Us
                </h3>
                <p className="text-[var(--color-text-muted)] text-sm">{CONTACT_VERIFICATION}</p>
              </div>
            </div>

            <div className="flex items-start gap-5 group">
              <div className="w-14 h-14 rounded-2xl bg-[var(--color-accent)]/15 flex items-center justify-center shrink-0 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all text-[var(--color-accent)]">
                <Phone className="w-6 h-6" aria-hidden="true" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-[var(--color-primary)] font-headline">
                  Phone
                </h3>
                <p className="text-[var(--color-text-muted)] text-sm">{CONTACT_VERIFICATION}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 sm:p-12 rounded-[2rem] sm:rounded-[2.5rem] shadow-xl border border-slate-100">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-6"
            aria-label="Contact form (not yet active)"
          >
            <div className="p-3 bg-amber-50 text-amber-800 rounded-xl text-xs font-semibold flex items-center gap-1.5 border border-amber-200">
              <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>{FORM_DISCLOSURE}</span>
            </div>

            <motion.div
              initial={{ opacity: 1 }}
              className="space-y-6 opacity-60 pointer-events-none"
              aria-disabled="true"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2 sm:col-span-1 space-y-2">
                  <label
                    htmlFor="contact-first-name"
                    className="font-extrabold text-[var(--color-primary)] text-[10px] uppercase tracking-wider block"
                  >
                    First Name
                  </label>
                  <input
                    id="contact-first-name"
                    type="text"
                    placeholder="John"
                    disabled
                    className="w-full border border-slate-200 rounded-xl px-4 py-3.5 bg-[var(--color-bg)] text-slate-800 text-xs sm:text-sm"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1 space-y-2">
                  <label
                    htmlFor="contact-last-name"
                    className="font-extrabold text-[var(--color-primary)] text-[10px] uppercase tracking-wider block"
                  >
                    Last Name
                  </label>
                  <input
                    id="contact-last-name"
                    type="text"
                    placeholder="Doe"
                    disabled
                    className="w-full border border-slate-200 rounded-xl px-4 py-3.5 bg-[var(--color-bg)] text-slate-800 text-xs sm:text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-subject"
                  className="font-extrabold text-[var(--color-primary)] text-[10px] uppercase tracking-wider block"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="Partnership Inquiry"
                  disabled
                  className="w-full border border-slate-200 rounded-xl px-4 py-3.5 bg-[var(--color-bg)] text-slate-800 text-xs sm:text-sm"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-message"
                  className="font-extrabold text-[var(--color-primary)] text-[10px] uppercase tracking-wider block"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Tell us how we can collaborate..."
                  disabled
                  className="w-full border border-slate-200 rounded-xl px-4 py-3.5 bg-[var(--color-bg)] text-slate-800 text-xs sm:text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled
                className="w-full bg-slate-300 text-white py-4 rounded-xl font-bold text-sm cursor-not-allowed flex items-center justify-center gap-2 mt-4"
                title="Submissions are not yet active"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" aria-hidden="true" />
              </button>
            </motion.div>
          </form>
        </div>
      </div>
    </section>
  );
}
