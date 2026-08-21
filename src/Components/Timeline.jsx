import { useState } from "react";
import { GraduationCap, Laptop, Bot, Zap, Brain, Sparkles, ChevronDown, ChevronUp, Code2, Trophy, CheckCircle2 } from "lucide-react";

export default function Timeline() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const journeySteps = [
    {
      year: "2023",
      title: "The Beginning — Started My Engineering Journey",
      summary:
        "Started my B.E. in Information Science & Engineering and began building a strong foundation in programming, computer science, and problem-solving.",
      tech: ["B.E.", "Information Science", "Programming"],
      icon: <GraduationCap className="h-5 w-5 text-sky-400" />,
      projects: ["Java Algorithmic Solvers", "Personal Developer Portfolio V1"],
      achievements: ["Enrolled in B.E. ISE @ Acharya Institute of Technology", "Maintained 8.20 CGPA academic record"],
      lessons: "A solid grasp of core computer science fundamentals makes learning any framework fast and effortless.",
    },
    {
      year: "2024",
      title: "Building Strong Programming Foundations",
      summary:
        "Deepened my knowledge of Python, Java, SQL, and core programming concepts while exploring software development through hands-on projects.",
      tech: ["Python", "Java", "SQL", "Problem Solving"],
      icon: <Laptop className="h-5 w-5 text-indigo-400" />,
      projects: ["150+ LeetCode DSA Solutions", "Command Line Utility Apps"],
      achievements: ["Solved 150+ Data Structures & Algorithms challenges on LeetCode", "Mastered OOP in Java & Python"],
      lessons: "Problem-solving discipline and writing efficient algorithm solutions build strong engineering intuition.",
    },
    {
      year: "2024",
      title: "Exploring AI & Machine Learning",
      summary:
        "Started exploring Machine Learning, Deep Learning, NLP, and data processing, building practical projects to understand how AI can solve real-world problems.",
      tech: ["Machine Learning", "Deep Learning", "NLP", "Python"],
      icon: <Bot className="h-5 w-5 text-pink-400" />,
      projects: ["Career Prediction AutoGluon System", "Document Classification Engine"],
      achievements: ["Built AutoGluon ML model achieving 87%+ prediction accuracy", "HackMarch KLE Hackathon Finalist"],
      lessons: "Real-world ML models require clean feature engineering and handling of edge-case uncertainty.",
    },
    {
      year: "2025",
      title: "Backend Engineering — FastAPI & Databases",
      summary:
        "Focused on backend development and building REST APIs with FastAPI while working with PostgreSQL, MongoDB, MySQL, and SQLAlchemy.",
      tech: ["FastAPI", "REST APIs", "PostgreSQL", "MongoDB"],
      icon: <Zap className="h-5 w-5 text-amber-400" />,
      projects: ["FastAPI Microservice Gateway", "Invoice Processing Cloud OCR Tool"],
      achievements: ["Designed sub-100ms REST API endpoints with async handlers", "Built tabular OCR invoice extraction pipeline"],
      lessons: "Asynchronous I/O and strict database indexing keep APIs fast under heavy traffic concurrency.",
    },
    {
      year: "2025",
      title: "Generative AI & RAG",
      summary:
        "Moved deeper into LLMs, Generative AI, embeddings, vector databases, and Retrieval-Augmented Generation by building intelligent document-based applications.",
      tech: ["LLMs", "RAG", "LangChain", "ChromaDB"],
      icon: <Brain className="h-5 w-5 text-emerald-400" />,
      projects: ["CivicSim AI Transparency Platform", "Sarkaar Sarthi Multilingual Welfare Assistant"],
      achievements: [
        "🥈 2nd Place Winner @ Srujana State Hackathon 2025 (CivicSim)",
        "🏆 Winner @ State Hackathon (Sarkaar Sarthi AI Multilingual Platform)",
      ],
      lessons: "RAG architectures prevent LLM hallucinations by grounding responses in verified vector database context.",
    },
    {
      year: "NOW",
      title: "Building Cloud Platforms & Production Systems",
      summary:
        "Engineering Vercel-like automated cloud deployment pipelines, DevOps AI incident triage engines, and multi-agent AI verification platforms.",
      tech: ["Docker", "AWS", "FastAPI", "React", "Multi-Agent AI"],
      icon: <Sparkles className="h-5 w-5 text-cyan-400" />,
      projects: ["App Intel (Composio 100-App AI Research System)", "Vercel Clone (Docker/AWS S3)", "LogIntelligence (Llama 3/FastAPI)"],
      achievements: [
        "Oracle Cloud OCI 2025 Certified AI Foundations Associate",
        "Engineered 100-App multi-agent research pipeline with zero-wait model failover",
      ],
      lessons: "Production systems require container isolation, multi-model failover policies, and deterministic verification.",
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
          From starting my engineering journey in 2023 to building AI-powered systems, backend applications, and cloud solutions — here&apos;s how I&apos;ve grown as a developer.
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
                              <Code2 className="h-3.5 w-3.5" /> Projects Built
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

                        {/* Lessons Learned */}
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
