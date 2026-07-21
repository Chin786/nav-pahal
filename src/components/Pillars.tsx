"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Users, Heart, GraduationCap, Building2, ExternalLink, X, CheckCircle } from "lucide-react";
import { PILLARS_DATA } from "../data";
import { StatusBadge } from "../components/ui";
import { Pillar } from "../types";

export default function Pillars() {
  const [selectedPillar, setSelectedPillar] = React.useState<Pillar | null>(null);
  const closeButtonRef = React.useRef<HTMLButtonElement>(null);
  const triggerButtonRefs = React.useRef<Map<string, HTMLButtonElement>>(new Map());
  const modalRef = React.useRef<HTMLDivElement>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "users":
        return <Users className="w-8 h-8" aria-hidden="true" />;
      case "volunteer_activism":
        return <Heart className="w-8 h-8 animate-pulse" aria-hidden="true" />;
      case "school":
        return <GraduationCap className="w-8 h-8" aria-hidden="true" />;
      case "corporate_fare":
        return <Building2 className="w-8 h-8" aria-hidden="true" />;
      default:
        return <Users className="w-8 h-8" aria-hidden="true" />;
    }
  };

  const getBorderColor = (color: string) => {
    switch (color) {
      case "primary":
        return "hover:border-[var(--color-primary)] border-b-4 border-[var(--color-primary)]/30";
      case "secondary":
        return "hover:border-[var(--color-secondary)] border-b-4 border-[var(--color-secondary)]/30";
      case "tertiary":
        return "hover:border-[var(--color-accent)] border-b-4 border-[var(--color-accent)]/30";
      default:
        return "hover:border-slate-300";
    }
  };

  const getPillarColorTheme = (color: string) => {
    switch (color) {
      case "primary":
        return {
          bg: "bg-[var(--color-primary)]/10",
          text: "text-[var(--color-primary)]",
          btn: "bg-[var(--color-primary)]",
        };
      case "secondary":
        return {
          bg: "bg-[var(--color-secondary)]/10",
          text: "text-[var(--color-secondary)]",
          btn: "bg-[var(--color-secondary)]",
        };
      case "tertiary":
        return {
          bg: "bg-[var(--color-accent)]/10",
          text: "text-[var(--color-accent)]",
          btn: "bg-[var(--color-accent)]",
        };
      default:
        return { bg: "bg-slate-100", text: "text-slate-700", btn: "bg-slate-700" };
    }
  };

  const [closingAction, setClosingAction] = React.useState<string | null>(null);

  const handleLearnMore = (pillar: Pillar, e: React.MouseEvent) => {
    e.preventDefault();
    setClosingAction(null);
    setSelectedPillar(pillar);
  };

  const dismissModal = React.useCallback(() => {
    const pillarId = selectedPillar?.id;
    setSelectedPillar(null);
    if (pillarId) {
      const trigger = triggerButtonRefs.current.get(pillarId);
      setTimeout(() => trigger?.focus(), 0);
    }
  }, [selectedPillar]);

  const handleActionClick = (targetId: string) => {
    setClosingAction(targetId);
    setSelectedPillar(null);
  };

  React.useEffect(() => {
    if (!selectedPillar) {
      if (closingAction) {
        const timer = setTimeout(() => {
          const element = document.getElementById(closingAction);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            element.focus({ preventScroll: true });
          }
          setClosingAction(null);
        }, 100);
        return () => clearTimeout(timer);
      }
      return;
    }

    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        dismissModal();
        return;
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timer);
    };
  }, [selectedPillar, dismissModal, closingAction]);

  return (
    <section id="pillars-section" className="py-24 bg-white scroll-mt-20 leading-tight">
      <div className="max-w-[var(--content-max-width)] mx-auto px-6 md:px-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <h2 className="text-4xl font-extrabold text-[var(--color-primary)] font-headline">
            The Four Pillars
          </h2>
          <StatusBadge status="draft" />
        </div>
        <p className="text-sm sm:text-base text-[var(--color-text-muted)] max-w-2xl mx-auto mt-4 mb-20 leading-relaxed">
          The proposed Navpahal ecosystem would bring together four stakeholder groups. Its
          structure and operating model remain under development.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PILLARS_DATA.map((pillar, idx) => {
            const colors = getPillarColorTheme(pillar.color);
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-8 rounded-3xl bg-[var(--color-bg)] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center border border-slate-100 ${getBorderColor(pillar.color)}`}
              >
                <div
                  className={`w-18 h-18 rounded-2xl ${colors.bg} ${colors.text} flex items-center justify-center mb-6`}
                >
                  {getIcon(pillar.iconName)}
                </div>

                <h4 className="text-xl font-bold font-headline text-[var(--color-text)] mb-3">
                  {pillar.title}
                </h4>

                <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">
                  {pillar.description}
                </p>

                <button
                  ref={(el) => {
                    if (el) triggerButtonRefs.current.set(pillar.id, el);
                  }}
                  onClick={(e) => handleLearnMore(pillar, e)}
                  className={`text-sm font-bold flex items-center gap-1 hover:underline transition-all ${colors.text}`}
                >
                  <span>Learn More</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedPillar && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
            role="presentation"
            onClick={dismissModal}
          >
            <motion.div
              ref={modalRef}
              key="modal-card"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="pillar-modal-title"
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-6 sm:p-10 max-w-lg w-full shadow-2xl relative border border-slate-100"
            >
              <button
                ref={closeButtonRef}
                onClick={dismissModal}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-all"
                aria-label="Close"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center ${getPillarColorTheme(selectedPillar.color).bg} ${getPillarColorTheme(selectedPillar.color).text}`}
                  >
                    {getIcon(selectedPillar.iconName)}
                  </div>
                  <div>
                    <h3
                      id="pillar-modal-title"
                      className="text-2xl font-bold text-[var(--color-text)] font-headline"
                    >
                      {selectedPillar.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                      Navpahal Strategic Pillar
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-slate-600 text-sm leading-relaxed bg-[var(--color-bg)] p-5 rounded-2xl border border-slate-100">
                    &ldquo;{selectedPillar.details}&rdquo;
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-extrabold text-slate-500 uppercase tracking-widest">
                    Proposed Roles and Opportunities
                  </h4>
                  <ul className="grid grid-cols-1 gap-2.5">
                    {selectedPillar.id === "citizens" && (
                      <>
                        <li className="flex items-start gap-2.5 text-xs text-slate-600">
                          <CheckCircle
                            className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span>
                            A future citizen pathway may allow structured needs and feedback
                            submissions.
                          </span>
                        </li>
                        <li className="flex items-start gap-2.5 text-xs text-slate-600">
                          <CheckCircle
                            className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span>
                            Transparent program and resource information would be made available.
                          </span>
                        </li>
                      </>
                    )}
                    {selectedPillar.id === "volunteers" && (
                      <>
                        <li className="flex items-start gap-2.5 text-xs text-slate-600">
                          <CheckCircle
                            className="w-4 h-4 text-[var(--color-secondary)] shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span>
                            Proposed volunteer activities may include awareness programs after
                            approval.
                          </span>
                        </li>
                        <li className="flex items-start gap-2.5 text-xs text-slate-600">
                          <CheckCircle
                            className="w-4 h-4 text-[var(--color-secondary)] shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span>
                            Leadership and workshop facilitation skills could be developed through
                            future training.
                          </span>
                        </li>
                      </>
                    )}
                    {selectedPillar.id === "trainers" && (
                      <>
                        <li className="flex items-start gap-2.5 text-xs text-slate-600">
                          <CheckCircle
                            className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span>
                            Future trainers may contribute to reviewed learning materials.
                          </span>
                        </li>
                        <li className="flex items-start gap-2.5 text-xs text-slate-600">
                          <CheckCircle
                            className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span>
                            Scheduling and mentoring frameworks would be developed once the network
                            is established.
                          </span>
                        </li>
                      </>
                    )}
                    {selectedPillar.id === "partners" && (
                      <>
                        <li className="flex items-start gap-2.5 text-xs text-slate-600">
                          <CheckCircle
                            className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span>
                            Potential partners may collaborate on approved program evaluation.
                          </span>
                        </li>
                        <li className="flex items-start gap-2.5 text-xs text-slate-600">
                          <CheckCircle
                            className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span>
                            Strategic alliances with research institutions and universities could be
                            explored.
                          </span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>

                <div className="pt-2">
                  {selectedPillar.id === "volunteers" ? (
                    <button
                      onClick={() => handleActionClick("volunteer-section")}
                      className="w-full py-3.5 bg-[var(--color-secondary)] text-white rounded-xl font-bold text-sm hover:opacity-95 shadow-md flex items-center justify-center gap-1.5"
                    >
                      <span>View participation status</span>
                    </button>
                  ) : selectedPillar.id === "trainers" ? (
                    <button
                      onClick={() => handleActionClick("experts-section")}
                      className="w-full py-3.5 bg-[var(--color-accent)] text-white rounded-xl font-bold text-sm hover:opacity-95 shadow-md flex items-center justify-center gap-1.5"
                    >
                      <span>Learn about proposed involvement</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => handleActionClick("connect-section")}
                      className="w-full py-3.5 bg-[var(--color-primary)] text-white rounded-xl font-bold text-sm hover:opacity-95 shadow-md flex items-center justify-center gap-1.5"
                    >
                      <span>View contact availability</span>
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
