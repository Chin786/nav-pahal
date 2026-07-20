import { FileQuestion } from "lucide-react";
import type { ReactNode } from "react";

interface PlaceholderPanelProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  className?: string;
}

export default function PlaceholderPanel({
  icon,
  title,
  description,
  className = "",
}: PlaceholderPanelProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 p-12 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 text-center ${className}`}
    >
      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
        {icon || <FileQuestion className="w-6 h-6" aria-hidden="true" />}
      </div>
      <div>
        <p className="font-semibold text-slate-600">{title}</p>
        {description && <p className="text-sm text-slate-400 mt-1">{description}</p>}
      </div>
    </div>
  );
}
