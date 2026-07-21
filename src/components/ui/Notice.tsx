"use client";

import { AlertCircle, CheckCircle, Info, AlertTriangle, X } from "lucide-react";
import type { ReactNode } from "react";

interface NoticeProps {
  variant?: "info" | "success" | "warning" | "error";
  children: ReactNode;
  className?: string;
  onDismiss?: () => void;
}

const ICONS = {
  info: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  error: AlertCircle,
};

const STYLES: Record<string, string> = {
  info: "bg-[var(--color-info)]/10 border-[var(--color-info)]/20 text-[var(--color-info)]",
  success:
    "bg-[var(--color-success)]/10 border-[var(--color-success)]/20 text-[var(--color-success)]",
  warning:
    "bg-[var(--color-warning)]/10 border-[var(--color-warning)]/20 text-[var(--color-warning)]",
  error: "bg-[var(--color-error)]/10 border-[var(--color-error)]/20 text-[var(--color-error)]",
};

export default function Notice({
  variant = "info",
  children,
  className = "",
  onDismiss,
}: NoticeProps) {
  const Icon = ICONS[variant];

  return (
    <div
      className={`flex items-start gap-3 p-4 rounded-xl border text-sm leading-relaxed ${STYLES[variant]} ${className}`}
      role="alert"
    >
      <Icon className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
      <span className="flex-1">{children}</span>
      {onDismiss && (
        <button
          onClick={onDismiss}
          className="shrink-0 p-1 rounded hover:bg-black/5 transition-colors"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
