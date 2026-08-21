import { useState } from "react";
import { GraduationCap, Code2, Trophy, ShieldCheck, Sparkles, ChevronDown, ChevronUp, CheckCircle2, Cpu } from "lucide-react";

export default function Timeline() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const journeySteps = [
    {
      year: "2023",
      title: "Started B.E. Information Science & Engineering",
      summary:
        "Began my engineering degree at Acharya Institute of Technology, Bengaluru. Built a rock-solid foundation in computer science, core programming, discrete mathematics, and problem-solving.",
      tech: ["B.E. ISE", "Acharya Institute", "CGPA: 8.20/10", "Computer Science"],
      icon: <GraduationCap className="h-5 w-5 text-sky-400" />,
      projects: ["C/C++ Data Structure Implementations", "Personal Developer Portfolio V1"],
      achievements: ["Enrolled in B.E. ISE @ Acharya Institute of Technology", "Maintained 8.20 / 10 CGPA academic record"],
      lessons: "Mastering core computer science principles and problem-solving makes picking up any new framework fast and effortless.",
    },
    {
      year: "2024",
      title: "150+ DSA Problems Solved & Web Architecture",
      summary:
        "Deepened algorithmic problem-solving skills in Java, solving 150+ Data Structures & Algorithms challenges on LeetCode while mastering object-oriented design and full-stack web development.",
      tech: ["Java (DSA)", "150+ Solved", "LeetCode", "JavaScript ES6+", "SQL"],
      icon: <Code2 className="h-5 w-5 text-indigo-400" />,
      projects: ["Java Algorithmic Solver Repository", "Interactive Web Components"],
      achievements: [
        "Solved 150+ Data Structures & Algorithms problems on LeetCode (@rishav1kr)",
        "Mastered Arrays, Trees, Graphs, Dynamic Programming, and Heap optimization",
      ],
      lessons: "Daily algorithmic practice builds strong engineering intuition for optimizing runtime complexity and data structures.",
    },
    {
      year: "2025",
      title: "2× State Hackathon Wins & AI Document Processing",
      summary:
        "Achieved 2nd Place at Srujana State Hackathon 2025 for CivicSim AI Transparency Platform and won the State Hackathon for Sarkaar Sarthi Multilingual AI Welfare Assistant.",
      tech: ["CivicSim", "Sarkaar Sarthi", "Python", "FastAPI", "Gemini AI", "RAG"],
      icon: <Trophy className="h-5 w-5 text-amber-400" />,
      projects: [
        "CivicSim AI Transparency Platform (Srujana 2025 2nd Place)",
        "Sarkaar Sarthi AI Multilingual Welfare Assistant (State Winner)",
        "Invoice Processing Cloud OCR Tool",
      ],
      achievements: [
        "🥈 Winner (2nd Place) @ Srujana State Hackathon 2025 out of 100+ teams",
        "🏆 Winner @ State Hackathon for Sarkaar Sarthi AI Multilingual Platform",
        "Achieved 90%+ OCR data extraction accuracy on municipal grant documents",
      ],
      lessons: "Building under 24-hour hackathon constraints requires modular backend architecture and clear RAG vector database grounding.",
    },
    {
      year: "2026",
      title: "Oracle Cloud AI Certification & Distributed Backends",
      summary:
        "Earned Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate certification and architected production backend systems with FastAPI, Docker, Polygon Blockchain, and AWS.",
      tech: ["Oracle Certified", "Docker", "AWS S3", "Polygon", "Prisma", "FastAPI"],
      icon: <ShieldCheck className="h-5 w-5 text-emerald-400" />,
      projects: [
        "InfraLedger (Polygon Blockchain Audit Platform)",
        "Automated Docker Build Worker Service",
      ],
      achievements: [
        "📜 Earned Oracle Cloud OCI 2025 Certified AI Foundations Associate credential",
        "Recorded 100+ tamper-resistant project audit hashes on Polygon blockchain",
      ],
      lessons: "Container isolation, immutable blockchain records, and cloud storage ensure true system accountability.",
    },
    {
      year: "NOW",
      title: "Building Cloud Platforms & Multi-Agent AI Systems",
      summary:
        "Engineering scalable cloud deployment platforms, DevOps AI incident diagnosis tools, and Composio 100-App multi-agent research pipelines.",
      tech: ["App Intel", "Vercel Clone", "LogIntelligence", "Groq AI", "Playwright"],
      icon: <Sparkles className="h-5 w-5 text-cyan-400" />,
      projects: [
        "App Intel (Composio 100-App AI Research & Verification System)",
        "Vercel Clone (Docker/AWS Automated Deployment Platform)",
        "LogIntelligence (DevOps AI Incident Diagnosis Engine)",
      ],
      achievements: [
        "Built multi-agent research pipeline with zero-wait model failover across 100 apps",
        "Automated Git-to-S3 build pipeline with real-time log streaming",
      ],
      lessons: "Production AI systems require deterministic verification layers, multi-model failover, and strict data integrity.",
    },
  ];

  return (
    <section className="mt-24 font-sans" id="journey">
      {/* Header Matching Image Design */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold text-cyan-400 mb-4 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
          <span className="text-sm">🗓️</span>
          <span>Journey</span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent leading-tight">
          My Engineering Journey
        </h2>

        <p className="mt-4 text-sm sm:text-base text-[var(--color-section-muted)] leading-relaxed font-medium">
          From starting my engineering journey in 2023 to building 2× State Hackathon winning platforms, backend systems, and cloud solutions — here&apos;s how I&apos;ve grown as a developer.
        </p>

        <div className="mt-5 mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
      </div>

      {/* Vertical Timeline Track matching Image Layout */}
      <div className="relative mx-auto max-w-5xl px-4">
        {/* Center Vertical Glowing Line (Desktop) / Left Line (Mobile) */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 shadow-[0_0_15px_rgba(6,182,212,0.4)]" />

        <div className="space-y-12">
          {journeySteps.map((step, index) => {
            const isEven = index % 2 === 0;
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Center Circle Icon Node */}
                <div className="absolute left-6 md:left-1/2 top-0 -translate-x-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/40 bg-slate-950 p-2.5 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-transform hover:scale-110">
                  {step.icon}
                </div>

                {/* Card Container */}
                <div className="ml-14 md:ml-0 md:w-1/2 w-full md:px-8">
                  <div
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    className={`group relative rounded-[28px] border bg-[var(--color-card)] p-6 sm:p-7 shadow-2xl transition-all duration-300 cursor-pointer backdrop-blur-xl ${
                      isExpanded
                        ? "border-cyan-400/60 shadow-[0_0_30px_rgba(6,182,212,0.2)] bg-[var(--color-card)]"
                        : "border-[var(--color-border)] hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
                    }`}
                  >
                    {/* Year Badge at Top Right */}
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-lg sm:text-xl font-extrabold text-[var(--color-text)] leading-snug group-hover:text-cyan-400 transition-colors">
                        {step.title}
                      </h3>

                      <span
                        className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-extrabold tracking-wider border ${
                          step.year === "NOW"
                            ? "bg-cyan-500/20 text-cyan-400 border-cyan-500/40 animate-pulse"
                            : "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
                        }`}
                      >
                        {step.year}
                      </span>
                    </div>

                    {/* Summary Description */}
                    <p className="text-xs sm:text-sm text-[var(--color-body)] leading-relaxed font-medium">
                      {step.summary}
                    </p>

                    {/* Tech Pills */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {step.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-[var(--color-card-soft-strong)] border border-[var(--color-border)] px-3 py-1 text-[11px] font-semibold text-[var(--color-text)] transition-colors hover:border-cyan-400/40"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Expand Indicator */}
                    <div className="mt-4 flex items-center justify-between border-t border-[var(--color-border)] pt-3 text-[11px] font-bold text-cyan-400">
                      <span>{isExpanded ? "Collapse Details" : "Click for Achievements & Projects"}</span>
                      {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </div>

                    {/* Expandable Details Section */}
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-[var(--color-border)] space-y-4 animate-fadeIn">
                        <div className="grid gap-3 sm:grid-cols-2 text-xs">
                          {/* Projects Built */}
                          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card-soft-2)] p-3.5">
                            <h4 className="font-extrabold uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-1.5">
                              <Cpu className="h-3.5 w-3.5" /> Projects Built
                            </h4>
                            <ul className="space-y-1 text-[11px] text-[var(--color-body)]">
                              {step.projects.map((p) => (
                                <li key={p} className="flex items-center gap-1.5">
                                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                                  <span>{p}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Achievements */}
                          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card-soft-2)] p-3.5">
                            <h4 className="font-extrabold uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
                              <Trophy className="h-3.5 w-3.5" /> Key Achievements
                            </h4>
                            <ul className="space-y-1 text-[11px] text-[var(--color-body)]">
                              {step.achievements.map((a) => (
                                <li key={a} className="flex items-center gap-1.5">
                                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                                  <span>{a}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Takeaway Lessons */}
                        <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-3.5 text-xs text-cyan-300">
                          <strong>💡 Takeaway Lesson:</strong> {step.lessons}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
