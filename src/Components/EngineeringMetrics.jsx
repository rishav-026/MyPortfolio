import { Zap, ShieldCheck, Target, Code2, ArrowUpRight, Cpu } from "lucide-react";

export default function EngineeringMetrics() {
  const metrics = [
    {
      title: "Sub-100ms API Latency",
      subtitle: "FastAPI & Async Python Gateway",
      value: "<100ms",
      icon: <Zap className="h-5 w-5 text-amber-400" />,
      description: "Optimized async event loops and Regex pattern compilation for high-throughput production log processing.",
      tag: "Backend Latency",
    },
    {
      title: "99.9% Isolation Security",
      subtitle: "Docker Container Runtime",
      value: "99.9%",
      icon: <ShieldCheck className="h-5 w-5 text-emerald-400" />,
      description: "Isolated ephemeral container environments for zero-spill build pipelines and secure code execution.",
      tag: "DevOps & Cloud",
    },
    {
      title: "90%+ OCR Accuracy",
      subtitle: "CivicSim Data Extraction",
      value: "90%+",
      icon: <Target className="h-5 w-5 text-sky-400" />,
      description: "Google Gemini AI & Tesseract OCR pipeline for automated document authenticity and corruption anomaly scoring.",
      tag: "AI & Data ML",
    },
    {
      title: "150+ DSA Algorithms",
      subtitle: "Java Data Structures",
      value: "150+",
      icon: <Code2 className="h-5 w-5 text-indigo-400" />,
      description: "Algorithmic problem solving across Trees, Graphs, Dynamic Programming, and System Optimization on LeetCode.",
      tag: "Problem Solving",
    },
  ];

  return (
    <section className="mt-24" id="engineering-metrics">
      <div className="rounded-[32px] border border-[var(--color-border)] bg-[var(--color-card)] p-8 shadow-[var(--shadow-card)] transition-colors duration-300">
        {/* Section Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-[var(--color-border)] pb-6">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Cpu className="h-5 w-5" />
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--color-text)]">
                Engineered for Scale & Performance
              </h2>
            </div>
            <p className="mt-2 text-sm sm:text-base text-[var(--color-body)]">
              Production benchmarks, system optimization metrics, and backend SLAs.
            </p>
          </div>

          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-extrabold text-emerald-400 self-start sm:self-auto">
            <span>Verified System SLAs</span>
          </span>
        </div>

        {/* Metrics Grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map((item) => (
            <div
              key={item.title}
              className="group relative flex flex-col justify-between rounded-2xl border border-[var(--color-border)] bg-[var(--color-card-soft-2)] p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-[var(--color-card-soft-strong)]"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--color-card-soft)] border border-[var(--color-border)]">
                    {item.icon}
                  </span>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    {item.tag}
                  </span>
                </div>

                <p className="text-4xl font-black text-[var(--color-text)] group-hover:text-emerald-400 transition-colors">
                  {item.value}
                </p>

                <h3 className="mt-2 text-base font-extrabold text-[var(--color-text)]">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-[var(--color-section-muted)] mt-0.5">
                  {item.subtitle}
                </p>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-[var(--color-body)] border-t border-[var(--color-border)] pt-3">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
