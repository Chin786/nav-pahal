"use client";

import { motion } from "motion/react";
import { GraduationCap, BookOpen, Coins, Megaphone } from "lucide-react";
import { SERVICES_DATA } from "../data";
import { StatusBadge, Notice } from "./ui";

export default function Services() {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case "training":
        return (
          <GraduationCap className="w-8 h-8 text-[var(--color-secondary)]" aria-hidden="true" />
        );
      case "knowledge":
        return <BookOpen className="w-8 h-8 text-[var(--color-primary)]" aria-hidden="true" />;
      case "csr":
        return <Coins className="w-8 h-8 text-[var(--color-secondary)]" aria-hidden="true" />;
      case "awareness":
        return <Megaphone className="w-8 h-8 text-[var(--color-accent)]" aria-hidden="true" />;
      default:
        return <BookOpen className="w-8 h-8 text-[var(--color-primary)]" aria-hidden="true" />;
    }
  };

  const getBorderColor = (colorClass: string) => {
    switch (colorClass) {
      case "tertiary":
        return "border-l-4 border-l-[var(--color-accent)]";
      case "secondary":
        return "border-l-4 border-l-[var(--color-secondary)]";
      case "primary":
        return "border-l-4 border-l-[var(--color-primary)]";
      default:
        return "";
    }
  };

  return (
    <section
      id="services-section"
      className="py-24 bg-[var(--color-primary)] text-white scroll-mt-20 leading-tight"
    >
      <div className="mx-auto w-full max-w-[var(--content-max-width)] px-6 md:px-10">
        <div className="mb-16">
          <StatusBadge status="draft" />
          <h2 className="text-4xl font-extrabold font-headline mb-4">Proposed Program Areas</h2>
          <Notice variant="info" className="!bg-white !text-slate-800 !border-slate-200">
            All program areas listed here are proposed and under development. No active programs
            currently exist.
          </Notice>
          <p className="text-white/75 text-sm sm:text-base max-w-xl leading-relaxed">
            Community-focused programs designed to build awareness, develop skills, and create
            sustainable impact through collaborative partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES_DATA.map((service) => (
            <motion.div
              layoutId={`service-card-${service.id}`}
              key={service.id}
              className={`bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-all flex flex-col justify-between min-h-[220px] ${getBorderColor(service.colorClass)}`}
            >
              <div>
                <span className="inline-block mb-6">{getServiceIcon(service.id)}</span>
                <h3 className="text-xl font-bold font-headline mb-3 text-white">{service.title}</h3>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
