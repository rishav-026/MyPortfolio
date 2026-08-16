import { useState } from "react";
import { X, Server, Cpu, Database, ShieldCheck, Zap, Code2, Copy, Check, Terminal } from "lucide-react";

export default function ArchitectureNodeModal({ nodeData, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!nodeData) return null;

  const copyPayload = () => {
    if (nodeData.payload) {
      navigator.clipboard.writeText(typeof nodeData.payload === "string" ? nodeData.payload : JSON.stringify(nodeData.payload, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-all animate-fadeIn font-sans"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl overflow-hidden rounded-[32px] border border-emerald-500/30 bg-[var(--color-card)] p-6 sm:p-8 shadow-[0_0_50px_rgba(16,185,129,0.25)] transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 grid h-9 w-9 place-items-center rounded-full border border-[var(--color-border)] bg-[var(--color-card-soft)] text-[var(--color-text)] transition hover:bg-[var(--color-card-soft-strong)]"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-5">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Cpu className="h-6 w-6" />
          </span>
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-md border border-emerald-500/20">
              {nodeData.step || "System Architecture Node"}
            </span>
            <h3 className="text-2xl font-extrabold text-[var(--color-text)] leading-tight mt-1">
              {nodeData.tech || "Node Inspector"}
            </h3>
          </div>
        </div>

        {/* Details & Architecture Specs */}
        <div className="mt-6 space-y-5">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-section-muted)] mb-1.5">
              Node Responsibility & Execution Detail
            </h4>
            <p className="text-sm leading-relaxed text-[var(--color-body)] font-medium">
              {nodeData.detail}
            </p>
          </div>

          {/* System SLA Specs */}
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card-soft-2)] p-4">
              <span className="text-[10px] font-extrabold uppercase text-[var(--color-section-muted)] flex items-center gap-1.5 mb-1">
                <Zap className="h-3.5 w-3.5 text-amber-400" /> Latency SLA
              </span>
              <p className="text-base font-extrabold text-[var(--color-text)]">
                {nodeData.latency || "< 45ms"}
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card-soft-2)] p-4">
              <span className="text-[10px] font-extrabold uppercase text-[var(--color-section-muted)] flex items-center gap-1.5 mb-1">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" /> Security & Isolation
              </span>
              <p className="text-base font-extrabold text-[var(--color-text)]">
                {nodeData.isolation || "Container Isolated (--memory=512m)"}
              </p>
            </div>
          </div>

          {/* Sample Protocol / API Payload JSON */}
          {nodeData.payload && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-section-muted)] flex items-center gap-1.5">
                  <Terminal className="h-4 w-4 text-emerald-400" /> Protocol Payload / Query Spec
                </h4>
                <button
                  onClick={copyPayload}
                  className="flex items-center gap-1 rounded-md border border-[var(--color-border)] bg-[var(--color-card-soft)] px-2.5 py-1 text-[11px] font-semibold text-[var(--color-body)] transition hover:text-[var(--color-text)]"
                >
                  {copied ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                  <span>{copied ? "Copied" : "Copy Payload"}</span>
                </button>
              </div>

              <div className="overflow-x-auto rounded-2xl bg-[#0d1117] p-4 text-xs font-mono text-emerald-400 border border-[var(--color-border)]">
                <pre className="whitespace-pre-wrap font-mono">{typeof nodeData.payload === "string" ? nodeData.payload : JSON.stringify(nodeData.payload, null, 2)}</pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
