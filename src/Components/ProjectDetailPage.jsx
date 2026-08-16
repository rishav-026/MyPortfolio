import { useEffect, useState } from "react";
import { ArrowLeft, ExternalLink, Share2, Video, Layers, Sparkles, CheckCircle2, Sun, Moon, Copy, Check, Terminal, Cpu, Code2, Server } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import ArchitectureDiagram from "./ArchitectureDiagram";

export default function ProjectDetailPage({
  project,
  theme,
  onToggleTheme,
  onOpenContact,
  onOpenShare,
  onBack,
}) {
  const [activeTab, setActiveTab] = useState("overview");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [project.slug]);

  if (!project) return null;

  const copySnippet = () => {
    if (project.demoSnippet) {
      navigator.clipboard.writeText(project.demoSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300">
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Navigation Bar */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-5 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Projects</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenShare(project)}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-5 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5"
            >
              <Share2 className="h-4 w-4 text-emerald-400" />
              <span>Share</span>
            </button>

            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-5 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5"
            >
              Contact
            </button>

            <button
              onClick={onToggleTheme}
              className="grid h-10 w-10 place-items-center rounded-full border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-text)] transition hover:-translate-y-0.5"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Project Header Banner */}
        <div className="rounded-[32px] border border-[var(--color-border)] bg-[var(--color-card)] p-8 sm:p-10 shadow-[var(--shadow-card)] mb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-section-muted)]">
            <span className="rounded-md bg-emerald-500/10 px-2.5 py-1 text-emerald-400 border border-emerald-500/20">
              {project.category || "Full-Stack"}
            </span>
            <span>•</span>
            <span>{project.period}</span>
            <span>•</span>
            <span>{project.role}</span>
          </div>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl text-[var(--color-text)]">
            {project.title}
          </h1>

          <p className="mt-4 text-lg sm:text-xl font-medium text-[var(--color-body)] max-w-4xl">
            {project.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-600 px-6 py-3 text-sm font-extrabold text-slate-950 shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all duration-200 hover:scale-105"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Launch Live Application</span>
              </a>
            )}

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-6 py-3 text-sm font-extrabold text-emerald-400 shadow-md transition-all duration-200 hover:scale-105 hover:bg-emerald-500 hover:text-slate-950"
            >
              <FaGithub className="h-4 w-4" />
              <span>View Source Repository</span>
            </a>

            <button
              onClick={() => onOpenShare(project)}
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-card-soft-strong)] px-6 py-3 text-sm font-extrabold text-[var(--color-text)] transition hover:bg-[var(--color-card-soft)] hover:scale-105"
            >
              <Share2 className="h-4 w-4 text-emerald-400" />
              <span>Share Project</span>
            </button>
          </div>
        </div>

        {/* Interactive Multi-Tab Explorer Bar */}
        <div className="mb-8 flex flex-wrap gap-2.5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-2">
          {[
            { id: "overview", label: "📖 Overview & Highlights", show: true },
            { id: "video", label: "📹 Video Walkthrough", show: !!project.videoUrl },
            { id: "architecture", label: "🏗️ System Architecture", show: !!project.architecture },
            { id: "demo", label: "⚡ Terminal Log Output", show: !!project.demoSnippet },
          ]
            .filter((t) => t.show)
            .map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-xl px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider transition-all ${
                    isActive
                      ? "bg-emerald-500 text-slate-950 shadow-md scale-[1.02]"
                      : "text-[var(--color-section-muted)] hover:bg-[var(--color-card-soft)] hover:text-[var(--color-text)]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
        </div>

        {/* TAB 1: OVERVIEW & HIGHLIGHTS */}
        {activeTab === "overview" && (
          <section className="grid gap-8 xl:grid-cols-[2fr_0.85fr] animate-fadeIn">
            <article className="space-y-10 rounded-[32px] border border-[var(--color-border)] bg-[var(--color-card)] p-8 shadow-[var(--shadow-card)]">
              {/* Detailed Description */}
              {project.description && (
                <div>
                  <h2 className="mb-6 text-3xl font-bold text-[var(--color-text)] flex items-center gap-3">
                    <Layers className="h-6 w-6 text-emerald-400" />
                    Project Overview & Deep Dive
                  </h2>
                  <div className="space-y-5">
                    {project.description.map((paragraph, index) => (
                      <p key={index} className="text-[1.05rem] leading-8 text-[var(--color-body)]">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features & Highlights */}
              <div>
                <h2 className="mb-6 text-3xl font-bold text-[var(--color-text)] flex items-center gap-3">
                  <Sparkles className="h-6 w-6 text-amber-400" />
                  Key Achievements & Capabilities
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {project.highlights.map((item) => (
                    <div
                      key={item}
                      className="flex gap-3.5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card-soft-2)] p-5"
                    >
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                      <p className="text-sm leading-6 text-[var(--color-body)] font-medium">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h2 className="mb-5 text-3xl font-bold text-[var(--color-text)]">
                  Technologies & Frameworks
                </h2>
                <div className="flex flex-wrap gap-2.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-xl border border-[var(--color-border)] bg-[var(--color-card-soft-2)] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-text)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="rounded-[32px] border border-[var(--color-border)] bg-[var(--color-card)] p-7 shadow-[var(--shadow-card)]">
                <h3 className="mb-5 text-xl font-bold text-[var(--color-text)]">
                  Project Specifications
                </h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[var(--color-section-muted)] font-bold">
                      Engineering Role
                    </p>
                    <p className="mt-1 font-semibold text-[var(--color-text)]">{project.role}</p>
                  </div>
                  <div className="pt-3 border-t border-[var(--color-border)]">
                    <p className="text-xs uppercase tracking-wider text-[var(--color-section-muted)] font-bold">
                      Timeline
                    </p>
                    <p className="mt-1 font-semibold text-[var(--color-text)]">{project.period}</p>
                  </div>
                  <div className="pt-3 border-t border-[var(--color-border)]">
                    <p className="text-xs uppercase tracking-wider text-[var(--color-section-muted)] font-bold">
                      Domain Category
                    </p>
                    <p className="mt-1 font-semibold text-[var(--color-text)]">{project.category}</p>
                  </div>
                </div>
              </div>
            </aside>
          </section>
        )}

        {/* TAB 2: VIDEO WALKTHROUGH */}
        {activeTab === "video" && project.videoUrl && (
          <div className="space-y-8 animate-fadeIn">
            <div className="rounded-[32px] border border-[var(--color-border)] bg-[var(--color-card)] overflow-hidden shadow-2xl">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--color-border)] bg-[var(--color-card-soft-2)] px-6 py-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Video className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text)]">
                    Video Recording & Walkthrough Showcase
                  </span>
                </div>
                <span className="text-xs text-[var(--color-section-muted)] font-semibold">
                  Full HD MP4 Recording
                </span>
              </div>

              <div className="relative bg-slate-950 aspect-video w-full">
                <video
                  src={project.videoUrl}
                  controls
                  preload="metadata"
                  className="w-full h-full object-contain"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className="rounded-[32px] border border-[var(--color-border)] bg-[var(--color-card)] p-8">
              <h3 className="text-2xl font-extrabold text-[var(--color-text)] mb-3">
                📹 Video Walkthrough Notes & Key Demonstrated Workflows
              </h3>
              <p className="text-sm leading-relaxed text-[var(--color-body)]">
                This video demonstrates the end-to-end user journey for <strong>{project.title}</strong>, showcasing real-time UI interactions, backend API communications, and workflow execution.
              </p>
            </div>
          </div>
        )}

        {/* TAB 3: SYSTEM ARCHITECTURE */}
        {activeTab === "architecture" && project.architecture && (
          <div className="space-y-8 animate-fadeIn">
            <ArchitectureDiagram architecture={project.architecture} projectTitle={project.title} />

            <div className="rounded-[32px] border border-[var(--color-border)] bg-[var(--color-card)] p-8">
              <h3 className="text-2xl font-extrabold text-[var(--color-text)] mb-4 flex items-center gap-2">
                <Server className="h-6 w-6 text-emerald-400" /> System Architecture & Data Flow Breakdown
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.architecture.map((item, idx) => (
                  <div key={idx} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card-soft-2)] p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-extrabold uppercase text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                        {item.step}
                      </span>
                      <span className="text-[11px] font-mono text-[var(--color-section-muted)]">
                        {item.tech}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--color-body)] font-medium leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: TERMINAL LOG OUTPUT */}
        {activeTab === "demo" && project.demoSnippet && (
          <div className="space-y-8 animate-fadeIn">
            <div className="rounded-[32px] border border-[var(--color-border)] bg-[var(--color-card)] overflow-hidden shadow-2xl">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--color-border)] bg-[var(--color-card-soft-2)] px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                    <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                    <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-section-muted)] flex items-center gap-2">
                    <Terminal className="h-4 w-4 text-emerald-400" />
                    {project.demoTitle || "Interactive Demo Output"}
                  </span>
                </div>

                <button
                  onClick={copySnippet}
                  className="flex items-center gap-1.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-card-soft)] px-3.5 py-1.5 text-xs font-semibold text-[var(--color-body)] transition hover:bg-[var(--color-card-soft-strong)] hover:text-[var(--color-text)]"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" /> Copy Log
                    </>
                  )}
                </button>
              </div>

              <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed bg-[#0d1117] text-emerald-400/90 overflow-x-auto">
                <pre className="whitespace-pre-wrap font-mono">{project.demoSnippet}</pre>
              </div>
            </div>

            <div className="rounded-[32px] border border-[var(--color-border)] bg-[var(--color-card)] p-8">
              <h3 className="text-xl font-extrabold text-[var(--color-text)] mb-2">
                ⚡ Execution Log & API Payload Notes
              </h3>
              <p className="text-xs text-[var(--color-body)] leading-relaxed">
                This log payload captures real backend execution output, step timing, payload status, and response JSON generated during runtime operations.
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
