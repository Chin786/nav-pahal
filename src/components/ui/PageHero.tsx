"use client";

import Link from "next/link";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  tag?: string;
  align?: "left" | "center";
  className?: string;
  level?: 1 | 2 | 3;
}

function HeadingTag({
  level,
  title,
  className,
}: {
  level: 1 | 2 | 3;
  title: string;
  className: string;
}) {
  switch (level) {
    case 1:
      return <h1 className={className}>{title}</h1>;
    case 3:
      return <h3 className={className}>{title}</h3>;
    default:
      return <h2 className={className}>{title}</h2>;
  }
}

export function SectionHeading({
  title,
  subtitle,
  tag,
  align = "left",
  className = "",
  level = 2,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : ""} ${className}`}>
      {tag && (
        <span className="inline-block px-3 py-1 mb-3 text-xs font-bold uppercase tracking-wider text-[var(--color-secondary)] bg-[var(--color-secondary)]/10 rounded-full">
          {tag}
        </span>
      )}
      <HeadingTag
        level={level}
        title={title}
        className="text-3xl md:text-4xl font-extrabold text-[var(--color-primary)] font-headline"
      />
      {subtitle && (
        <p className="mt-3 text-[var(--color-text-muted)] max-w-2xl leading-relaxed text-sm md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "outline";
  className?: string;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all focus-ring";
  const variants: Record<string, string> = {
    primary:
      "bg-[var(--color-primary)] text-white hover:opacity-90 shadow-md hover:shadow-lg active:scale-[0.98]",
    secondary:
      "bg-[var(--color-secondary)] text-white hover:opacity-90 shadow-md hover:shadow-lg active:scale-[0.98]",
    accent:
      "bg-[var(--color-accent)] text-white hover:opacity-90 shadow-md hover:shadow-lg active:scale-[0.98]",
    outline:
      "border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white active:scale-[0.98]",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
