import { CheckCircle2, X } from "lucide-react";

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-slate-900/90 p-4 text-white shadow-2xl backdrop-blur-xl animate-bounceIn max-w-md">
      <CheckCircle2 className="h-6 w-6 text-emerald-400 shrink-0" />
      <div className="flex-1">
        <h4 className="text-sm font-bold text-white">{toast.title || "Message Sent!"}</h4>
        <p className="text-xs text-slate-300 mt-0.5">{toast.message}</p>
      </div>
      <button
        onClick={onClose}
        className="rounded-lg p-1 text-slate-400 hover:bg-slate-800 hover:text-white"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
