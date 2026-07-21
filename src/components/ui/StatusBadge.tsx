import type { ContentStatus } from "../../content/siteContent";

interface BadgeProps {
  status: ContentStatus;
  className?: string;
}

const LABELS: Record<string, string> = {
  draft: "Draft",
  proposed: "Proposed",
  "awaiting-verification": "Awaiting Verification",
  "under-development": "Under Development",
  approved: "Approved",
};

const STYLES: Record<string, string> = {
  draft: "bg-slate-200 text-slate-600",
  proposed: "bg-[var(--color-accent)]/10 text-[var(--color-accent)]",
  "awaiting-verification": "bg-yellow-100 text-yellow-800",
  "under-development": "bg-blue-100 text-blue-800",
  approved: "bg-green-100 text-green-800",
};

export default function StatusBadge({ status, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${STYLES[status]} ${className}`}
    >
      {LABELS[status]}
    </span>
  );
}
