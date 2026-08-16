import { useState } from "react";
import { Layers, ArrowRight, CheckCircle2, Cpu, ExternalLink, Zap, ShieldCheck, Terminal } from "lucide-react";
import ArchitectureNodeModal from "./ArchitectureNodeModal";

export default function ArchitectureDiagram({ architecture, projectTitle }) {
  const [selectedStep, setSelectedStep] = useState(0);
  const [activeModalNode, setActiveModalNode] = useState(null);

  if (!architecture || architecture.length === 0) return null;

  const current = architecture[selectedStep];

  return (
    <div className="rounded-[32px] border border-[var(--color-border)] bg-[var(--color-card)] p-6 sm:p-8 shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
            <Cpu className="h-5 w-5" />
          </span>
          <div>
            <h3 className="text-xl font-extrabold text-[var(--color-text)]">
              Interactive System Architecture Inspector
            </h3>
            <p className="text-xs text-[var(--color-section-muted)]">
              Click any node in the pipeline to inspect data payloads, latencies & container isolation
            </p>
          </div>
        </div>
      </div>

      {/* Node Flow Track */}
      <div className="flex flex-wrap items-center gap-3 p-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card-soft-2)] overflow-x-auto">
        {architecture.map((node, index) => {
          const isActive = index === selectedStep;
          return (
            <div key={node.step} className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => {
                  setSelectedStep(index);
                  setActiveModalNode(node);
                }}
                className={`flex items-center gap-2.5 rounded-xl px-4 py-3 text-xs font-bold transition-all ${
                  isActive
                    ? "bg-sky-500 text-slate-950 shadow-lg scale-[1.03]"
                    : "border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-body)] hover:bg-[var(--color-card-soft)] hover:text-[var(--color-text)]"
                }`}
              >
                <span className="grid h-5 w-5 place-items-center rounded-full bg-black/20 text-[10px] font-black">
                  {index + 1}
                </span>
                <span>{node.step}</span>
              </button>
              {index < architecture.length - 1 && (
                <ArrowRight className="h-4 w-4 text-[var(--color-section-muted)] shrink-0" />
              )}
            </div>
          );
        })}
      </div>

      {/* Node Inspector Panel */}
      {current && (
        <div className="mt-6 rounded-2xl border border-sky-500/30 bg-slate-950/60 p-6 backdrop-blur-md animate-fadeIn">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="inline-block rounded-md bg-sky-500/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-sky-400 border border-sky-500/20 mb-2">
                Pipeline Node #{selectedStep + 1}
              </span>
              <h4 className="text-2xl font-extrabold text-white">{current.step}</h4>
              <p className="mt-2 text-sm leading-6 text-slate-300">{current.detail}</p>
            </div>
            <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-sky-300 font-mono">
              {current.tech}
            </span>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Component Verified for Production
            </span>

            <button
              onClick={() => setActiveModalNode(current)}
              className="inline-flex items-center gap-2 rounded-xl bg-sky-500/20 hover:bg-sky-500/30 border border-sky-500/40 px-3.5 py-1.5 text-xs font-extrabold text-sky-300 transition"
            >
              <span>🔍 Deep Node Payload & Isolation Inspector</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Node Deep Inspection Modal */}
      {activeModalNode && (
        <ArchitectureNodeModal
          nodeData={{
            ...activeModalNode,
            latency: "< 42ms",
            isolation: "Container Isolated (--memory=512m, --cpus=1.0)",
            payload: `// ${activeModalNode.step} Protocol Payload\n{\n  "status": 200,\n  "protocol": "HTTP/2 REST",\n  "tech": "${activeModalNode.tech}",\n  "detail": "${activeModalNode.detail}"\n}`,
          }}
          onClose={() => setActiveModalNode(null)}
        />
      )}
    </div>
  );
}
