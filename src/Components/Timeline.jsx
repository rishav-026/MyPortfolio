import { useState } from "react";
import { GraduationCap, Trophy, Award, Calendar, ChevronDown, ChevronUp, Code2, Sparkles, CheckCircle2 } from "lucide-react";

export default function Timeline() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const milestones = [
    {
      year: "NOW",
      title: "Building AI & Full-Stack Cloud Products 🚀",
      subtitle: "Full-Stack, DevOps & Generative AI",
      summary: "Designing automated cloud platforms, AI log diagnostics, and full-stack web applications.",
      icon: <Sparkles className="h-5 w-5 text-emerald-400" />,
      projects: ["Vercel Clone (Docker/AWS)", "LogIntelligence (Llama 3/FastAPI)", "InfraLedger (Polygon/IPFS)"],
      technologies: ["React", "FastAPI", "Docker", "AWS", "LangChain", "Ollama"],
      achievements: ["Engineered Sub-100ms FastAPI API gateways", "99.9% Docker isolated container runtimes"],
      lessons: "Production systems require deterministic fallback rules, clean error handling, and robust monitoring.",
    },
    {
      year: "2026",
      title: "Full-Stack Cloud & DevOps Infrastructure",
      subtitle: "Distributed Systems & Automation",
      summary: "Focused on backend microservices, containerization with Docker, and cloud deployments on AWS.",
      icon: <Award className="h-5 w-5 text-sky-400" />,
      projects: ["Automated Build Pipeline Worker", "Multi-Tenant Cloud Hosting Dashboard"],
      technologies: ["Node.js", "Express", "Docker", "AWS S3/ECS", "Prisma ORM"],
      achievements: ["Oracle Certified Cloud OCI AI Foundations Associate", "Built 8+ production web repositories"],
      lessons: "Infrastructure isolation and containerized build pipelines prevent multi-tenant build conflicts.",
    },
    {
      year: "2025",
      title: "Hackathons & AI Document Processing",
      subtitle: "AI/ML Solutions & Competitive Coding",
      summary: "Won Srujana State Hackathon (2nd Place) out of 100+ teams and achieved 3rd Place at ImpactX'25.",
      icon: <Trophy className="h-5 w-5 text-amber-400" />,
      projects: ["CivicSim AI Transparency Platform", "Invoice OCR Extraction Tool", "Health Sarthi AI Bot"],
      technologies: ["Python", "FastAPI", "Gemini AI", "Tesseract OCR", "scikit-learn"],
      achievements: [
        "Winner (2nd Place) @ Srujana State Hackathon 2025 (CivicSim)",
        "Hackathon Winner @ State Hackathon (Sarkaar Sarthi AI Platform)",
      ],
      lessons: "Fast prototyping under 24-hour hackathon constraints requires modular backend architecture.",
    },
    {
      year: "2024",
      title: "Started Software Engineering & DSA Foundations",
      subtitle: "Data Structures & Java Algorithms",
      summary: "Solves 150+ algorithmic DSA challenges in Java and built core web fundamentals.",
      icon: <GraduationCap className="h-5 w-5 text-indigo-400" />,
      projects: ["Java Algorithmic Problem Solving Repository", "Personal Developer Portfolio V1"],
      technologies: ["Java OOP", "JavaScript ES6+", "HTML5/CSS3", "Git/GitHub"],
      achievements: ["Solved 150+ DSA problems on LeetCode", "Enrolled in B.E. Information Science (8.20 CGPA)"],
      lessons: "Mastering fundamental data structures makes picking up new frameworks and languages effortless.",
    },
  ];

  return (
    <section className="mt-24" id="timeline">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-card-soft)] text-emerald-400">
            <Calendar className="h-5 w-5" />
          </span>
          <div>
            <h2 className="text-[2.8rem] leading-none font-extrabold tracking-[-0.05em] text-[var(--color-text)] sm:text-[3.2rem]">
              Interactive Developer Journey
            </h2>
            <p className="mt-2 text-[1.05rem] text-[var(--color-section-muted)]">
              Click any milestone node to expand details, achievements, and lessons learned.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Expandable Timeline Track */}
      <div className="relative border-l-2 border-[var(--color-border)] ml-4 sm:ml-6 space-y-6 pl-6 sm:pl-8">
        {milestones.map((item, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <div key={index} className="group relative">
              {/* Timeline Bullet Node */}
              <button
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
                className={`absolute -left-[35px] sm:-left-[43px] top-2 grid h-9 w-9 place-items-center rounded-full border bg-[var(--color-card)] text-[var(--color-text)] shadow-md transition duration-300 ${
                  isExpanded
                    ? "border-emerald-400 bg-emerald-500/20 scale-110"
                    : "border-[var(--color-border)] group-hover:border-emerald-500/40"
                }`}
              >
                {item.icon}
              </button>

              {/* Content Card */}
              <div
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
                className={`rounded-[28px] border bg-[var(--color-card)] p-6 sm:p-7 shadow-[var(--shadow-card)] transition duration-300 cursor-pointer ${
                  isExpanded
                    ? "border-emerald-500/40 ring-1 ring-emerald-500/20 bg-[var(--color-card)]"
                    : "border-[var(--color-border)] hover:border-white/15"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-wider border ${
                        item.year === "NOW"
                          ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30 animate-pulse"
                          : "bg-[var(--color-card-soft-strong)] text-[var(--color-text)] border-[var(--color-border)]"
                      }`}
                    >
                      {item.year}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--color-text)] leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--color-card-soft)] text-[var(--color-section-muted)] shrink-0">
                    {isExpanded ? <ChevronUp className="h-4 w-4 text-emerald-400" /> : <ChevronDown className="h-4 w-4" />}
                  </span>
                </div>

                <p className="mt-2 text-sm font-semibold text-[var(--color-section-muted)]">
                  {item.subtitle}
                </p>

                <p className="mt-2 text-sm leading-relaxed text-[var(--color-body)]">
                  {item.summary}
                </p>

                {/* Expanded Details Section */}
                {isExpanded && (
                  <div className="mt-6 pt-5 border-t border-[var(--color-border)] space-y-5 animate-fadeIn">
                    <div className="grid gap-4 sm:grid-cols-2">
                      {/* Projects Built */}
                      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card-soft-2)] p-4">
                        <h4 className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 mb-2.5 flex items-center gap-2">
                          <Code2 className="h-4 w-4" /> Projects Built
                        </h4>
                        <ul className="space-y-1.5 text-xs text-[var(--color-body)]">
                          {item.projects.map((p) => (
                            <li key={p} className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements */}
                      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card-soft-2)] p-4">
                        <h4 className="text-xs font-extrabold uppercase tracking-wider text-amber-400 mb-2.5 flex items-center gap-2">
                          <Trophy className="h-4 w-4" /> Key Achievements
                        </h4>
                        <ul className="space-y-1.5 text-xs text-[var(--color-body)]">
                          {item.achievements.map((a) => (
                            <li key={a} className="flex items-center gap-2">
                              <CheckCircle2 className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                              <span>{a}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Technologies Learned */}
                    <div>
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-[var(--color-section-muted)] mb-2">
                        Technologies Learned
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {item.technologies.map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-[var(--color-card-soft-strong)] border border-[var(--color-border)] px-3 py-1 text-xs font-semibold text-[var(--color-text)]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Lessons Learned */}
                    <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-xs text-emerald-300">
                      <strong>💡 Lesson Learned:</strong> {item.lessons}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
