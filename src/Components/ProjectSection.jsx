import { useState, useMemo, useRef } from "react";
import { Search, X, BookOpen, ExternalLink, ArrowUpRight, Code2, Share2 } from "lucide-react";
import { projects, projectCategories } from "../data/projectsData";

export default function ProjectSection({ onOpenShare }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" ||
        project.category === selectedCategory ||
        (selectedCategory === "Full-Stack" && project.stack.includes("React") && project.stack.includes("Node.js")) ||
        (selectedCategory === "AI & Python" && (project.stack.includes("Python") || project.stack.includes("FastAPI") || project.stack.includes("ML"))) ||
        (selectedCategory === "Cloud & DevOps" && (project.stack.includes("Docker") || project.stack.includes("AWS") || project.stack.includes("CI/CD"))) ||
        (selectedCategory === "Blockchain" && (project.stack.includes("Polygon") || project.stack.includes("IPFS")));

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.subtitle.toLowerCase().includes(q) ||
        project.summary.toLowerCase().includes(q) ||
        project.stack.some((tech) => tech.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className="mt-24" id="projects">
      {/* Header */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-card-soft)] text-[var(--color-text)]">
              <BookOpen className="h-5 w-5" />
            </span>
            <h2 className="text-[2.8rem] leading-none font-extrabold tracking-[-0.05em] text-[var(--color-text)] sm:text-[3.2rem]">
              Featured Projects
            </h2>
          </div>
          <p className="mt-3 text-[1.05rem] text-[var(--color-section-muted)]">
            Full-stack, Cloud, AI & Blockchain products built from scratch with interactive detailed walkthroughs.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative min-w-[280px] sm:min-w-[340px]">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-section-muted)]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects or tech (e.g. React, Docker)..."
            className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] py-3 pl-11 pr-10 text-sm text-[var(--color-text)] placeholder-[var(--color-section-muted)] outline-none transition focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 grid h-6 w-6 -translate-y-1/2 place-items-center rounded-full text-[var(--color-section-muted)] hover:bg-[var(--color-card-soft-strong)] hover:text-[var(--color-text)]"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="mt-8 flex flex-wrap gap-2.5">
        {projectCategories.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] transition-all duration-200 ${
                isActive
                  ? "bg-[var(--color-text)] text-[var(--color-card)] shadow-md scale-[1.02]"
                  : "border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-section-muted)] hover:bg-[var(--color-card-soft)] hover:text-[var(--color-text)]"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Count Indicator */}
      <div className="mt-4 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[var(--color-section-muted)]">
        <span>Showing {filteredProjects.length} of {projects.length} Projects</span>
        {searchQuery && <span>Filter: &quot;{searchQuery}&quot;</span>}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              onOpenShare={onOpenShare}
              onFilterTech={(t) => setSearchQuery(t)}
            />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-[30px] border border-[var(--color-border)] bg-[var(--color-card)] p-12 text-center">
          <Code2 className="mx-auto h-12 w-12 text-[var(--color-section-muted)] opacity-50" />
          <h3 className="mt-4 text-xl font-bold text-[var(--color-text)]">No matching projects found</h3>
          <p className="mt-2 text-sm text-[var(--color-section-muted)]">
            Try adjusting your search query or switching category filter tabs.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[var(--color-card-soft-strong)] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[var(--color-text)] transition hover:scale-105"
          >
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );
}

function ProjectCard({ project, onOpenShare, onFilterTech }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  const handleCardClick = (e) => {
    if (e.target.closest(".share-btn") || e.target.closest("button")) return;
    window.location.hash = `project/${project.slug}`;
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      onClick={handleCardClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col justify-between rounded-[28px] border border-[var(--color-border)] bg-[var(--color-card)] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/15 hover:shadow-[var(--shadow-card)] cursor-pointer overflow-hidden"
    >
      {/* Video Preview Overlay on Hover */}
      {project.videoUrl && (
        <div className={`absolute inset-0 z-0 opacity-0 transition-opacity duration-500 bg-slate-950/90 ${isHovered ? "opacity-100" : ""}`}>
          <video
            ref={videoRef}
            src={project.videoUrl}
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute top-3 right-3 rounded-full bg-emerald-500/20 backdrop-blur-md px-2.5 py-1 text-[10px] font-extrabold uppercase text-emerald-400 border border-emerald-500/30">
            ▶ Preview
          </div>
        </div>
      )}

      <div className="relative z-10">
        <div className="mb-3 flex items-start justify-between gap-4">
          <div>
            <p className="mb-1 text-[0.72rem] font-bold tracking-[0.28em] uppercase text-[var(--color-section-muted)]">
              {project.period} • {project.category}
            </p>
            <h3 className="text-[1.85rem] leading-tight font-extrabold tracking-[-0.04em] text-[var(--color-text)] group-hover:text-emerald-400 transition-colors">
              {project.title}
            </h3>
            <p className="mt-1 text-[0.92rem] font-semibold text-[var(--color-section-muted)]">
              {project.subtitle}
            </p>
          </div>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[var(--color-border)] bg-[var(--color-card-soft)] text-[var(--color-section-muted)] transition duration-300 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 group-hover:text-emerald-400">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>

        <p className="mt-4 text-[0.98rem] leading-7 text-[var(--color-body)] transition-colors duration-300">
          {project.summary}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, 3).map((tech) => (
            <button
              key={tech}
              onClick={(e) => {
                e.stopPropagation();
                onFilterTech && onFilterTech(tech);
              }}
              className="inline-flex items-center rounded-full bg-[var(--color-card-soft)] px-2.5 py-1 text-[0.76rem] font-semibold uppercase tracking-[0.1em] text-[var(--color-section-muted)] hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-400 border border-transparent transition"
            >
              {tech}
            </button>
          ))}
          {project.stack.length > 3 && (
            <span className="inline-flex items-center rounded-full bg-[var(--color-card-soft)] px-2 py-1 text-[0.72rem] font-semibold text-[var(--color-section-muted)]">
              +{project.stack.length - 3}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-extrabold text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 transition"
              title="Launch Live Application"
            >
              <span>Live App</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
          {onOpenShare && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenShare(project);
              }}
              className="share-btn p-1.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-card-soft)] text-[var(--color-section-muted)] hover:text-emerald-400 hover:border-emerald-500/30 transition"
              title="Share Project"
            >
              <Share2 className="h-3.5 w-3.5" />
            </button>
          )}
          <span className="text-xs font-bold text-emerald-400 opacity-80 group-hover:opacity-100 transition flex items-center gap-1">
            Explore <ExternalLink className="h-3 w-3" />
          </span>
        </div>
      </div>
    </div>
  );
}
