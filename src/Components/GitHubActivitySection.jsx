import { useEffect, useRef, useState } from "react";
import GitHubHeatmap from "./GitHubHeatmap";
import StatCard from "./StatCard";
import { githubProfileUrl, githubContributionsApi } from "./githubConfig";
import { buildGithubHeatmap, generateFallbackGithubContributions } from "./githubUtils";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

function GitHubActivitySection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [tooltip, setTooltip] = useState(null);
  const [data, setData] = useState({
    total: 0,
    weeks: [],
    months: [],
    weekdayLabels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function loadGithubData() {
      try {
        const [y2025, y2026] = await Promise.all([
          fetch(`${githubContributionsApi}?y=2025`).then((r) => r.json()),
          fetch(`${githubContributionsApi}?y=2026`).then((r) => r.json()),
        ]);

        const merged = [
          ...(y2025.contributions || []),
          ...(y2026.contributions || []),
        ];

        const heatmap = buildGithubHeatmap(
          merged.length ? merged : generateFallbackGithubContributions()
        );

        if (!cancelled) {
          setData(heatmap);
        }
      } catch (err) {
        console.error("GitHub contributions fetch error:", err);
        if (!cancelled) {
          setData(buildGithubHeatmap(generateFallbackGithubContributions()));
        }
      }
    }

    loadGithubData();
    return () => {
      cancelled = true;
    };
  }, []);

  const totalDisplay = data.total > 0 ? `${data.total}` : "200+";

  return (
    <section
      ref={sectionRef}
      className={`mt-24 transition-all duration-700 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <div className="rounded-[32px] border border-[var(--color-border)] bg-[var(--color-card)] p-8 shadow-[var(--shadow-card)]">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <FaGithub className="text-4xl text-[var(--color-text)]" />
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[var(--color-text)]">
                GitHub Activity
              </h2>
            </div>
            <p className="mt-3 text-base sm:text-lg text-[var(--color-body)]">
              Live contribution heatmap and open-source commit history synced from GitHub.
            </p>
          </div>

          <a
            href={githubProfileUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card-soft)] px-6 py-3 text-sm font-semibold text-[var(--color-text)] transition-all hover:scale-105 hover:bg-[var(--color-card-soft-strong)]"
          >
            <span>@rishav-026</span>
            <FiArrowUpRight className="text-emerald-400" />
          </a>
        </div>

        {/* Dynamic Metric Cards */}
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <StatCard icon="🔥" title="Total Commits" value={totalDisplay} />
          <StatCard icon="💻" title="DSA Problems" value="150+" />
          <StatCard icon="🚀" title="Projects Built" value="8+" />
          <StatCard icon="🏆" title="Hackathons Won" value="2×" />
        </div>

        {/* Heatmap Grid */}
        <div className="mt-12">
          <GitHubHeatmap data={data} tooltip={tooltip} onTooltip={setTooltip} />
        </div>
      </div>
    </section>
  );
}

export default GitHubActivitySection;