import { motion } from "motion/react";
import { MapPin, Mail, Phone, Send, AlertCircle } from "lucide-react";

const FORM_DISCLOSURE =
  "Online submissions are not yet active. No information entered here is transmitted to Navpahal.";

export default function Contact() {
  return (
    <section
      id="connect-section"
      className="py-24 bg-[#f2f4f6]/60 border-t border-slate-100 scroll-mt-20 leading-tight"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-extrabold text-[#0072CE] font-headline">
              Let&apos;s Connect
            </h2>
            <p className="text-sm sm:text-base text-[#44474e] leading-relaxed">
              Whether you&apos;re looking to volunteer, partner, or just want to learn more, our
              team is here to help.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-5 group">
              <div className="w-14 h-14 rounded-2xl bg-[#0072CE]/10 flex items-center justify-center shrink-0 group-hover:bg-[#0072CE] group-hover:text-white transition-all text-[#0072CE]">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h5 className="text-lg font-bold text-[#0072CE] font-headline">Headquarters</h5>
                <p className="text-[#44474e] text-sm leading-relaxed">
                  Official contact details will be published after verification.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5 group">
              <div className="w-14 h-14 rounded-2xl bg-[#72BF44]/15 flex items-center justify-center shrink-0 group-hover:bg-[#72BF44] group-hover:text-white transition-all text-[#72BF44]">
                <Mail className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h5 className="text-lg font-bold text-[#0072CE] font-headline">Email Us</h5>
                <p className="text-[#44474e] text-sm">
                  Official contact details will be published after verification.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5 group">
              <div className="w-14 h-14 rounded-2xl bg-[#F7941D]/15 flex items-center justify-center shrink-0 group-hover:bg-[#F7941D] group-hover:text-white transition-all text-[#F7941D]">
                <Phone className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h5 className="text-lg font-bold text-[#0072CE] font-headline">Phone</h5>
                <p className="text-[#44474e] text-sm">
                  Official contact details will be published after verification.
                </p>
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
              <AlertCircle className="w-4 h-4 shrink-0" />
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
                    className="font-extrabold text-[#0072CE] text-[10px] uppercase tracking-wider block"
                  >
                    First Name
                  </label>
                  <input
                    id="contact-first-name"
                    type="text"
                    placeholder="John"
                    disabled
                    className="w-full border border-slate-200 rounded-xl px-4 py-3.5 bg-[#f7f9fb] text-slate-800 text-xs sm:text-sm"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1 space-y-2">
                  <label
                    htmlFor="contact-last-name"
                    className="font-extrabold text-[#0072CE] text-[10px] uppercase tracking-wider block"
                  >
                    Last Name
                  </label>
                  <input
                    id="contact-last-name"
                    type="text"
                    placeholder="Doe"
                    disabled
                    className="w-full border border-slate-200 rounded-xl px-4 py-3.5 bg-[#f7f9fb] text-slate-800 text-xs sm:text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-subject"
                  className="font-extrabold text-[#0072CE] text-[10px] uppercase tracking-wider block"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="Partnership Inquiry"
                  disabled
                  className="w-full border border-slate-200 rounded-xl px-4 py-3.5 bg-[#f7f9fb] text-slate-800 text-xs sm:text-sm"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-message"
                  className="font-extrabold text-[#0072CE] text-[10px] uppercase tracking-wider block"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Tell us how we can collaborate..."
                  disabled
                  className="w-full border border-slate-200 rounded-xl px-4 py-3.5 bg-[#f7f9fb] text-slate-800 text-xs sm:text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled
                className="w-full bg-slate-300 text-white py-4 rounded-xl font-bold text-sm cursor-not-allowed flex items-center justify-center gap-2 mt-4"
                title="Submissions are not yet active"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </motion.div>
          </form>
        </div>
      </div>
    </section>
  );
}
