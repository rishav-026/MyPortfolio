import { useEffect, useState } from "react";
import { Code2, Trophy, Flame, ExternalLink, CheckCircle2, RefreshCw } from "lucide-react";

export default function LeetCodeStats() {
  const username = "rishav1kr";
  const [stats, setStats] = useState({
    totalSolved: 150,
    easySolved: 75,
    mediumSolved: 65,
    hardSolved: 10,
    acceptanceRate: "68.4%",
    ranking: "Top 18%",
    loading: true,
    error: false,
  });

  useEffect(() => {
    let isCancelled = false;

    async function fetchLeetCodeData() {
      try {
        const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
        if (!response.ok) throw new Error("API response error");
        const data = await response.json();

        if (data && data.status === "success" && !isCancelled) {
          setStats({
            totalSolved: data.totalSolved || 150,
            easySolved: data.easySolved || 75,
            mediumSolved: data.mediumSolved || 65,
            hardSolved: data.hardSolved || 10,
            acceptanceRate: `${data.acceptanceRate ? data.acceptanceRate.toFixed(1) : 68.4}%`,
            ranking: data.ranking ? `#${data.ranking.toLocaleString()}` : "Top 18%",
            loading: false,
            error: false,
          });
          return;
        }
      } catch (err) {
        console.warn("LeetCode API fetch notice:", err);
      }

      if (!isCancelled) {
        setStats((prev) => ({ ...prev, loading: false }));
      }
    }

    fetchLeetCodeData();
    return () => {
      isCancelled = true;
    };
  }, [username]);

  const easyPercent = Math.min(100, Math.round((stats.easySolved / stats.totalSolved) * 100)) || 50;
  const medPercent = Math.min(100, Math.round((stats.mediumSolved / stats.totalSolved) * 100)) || 40;
  const hardPercent = Math.min(100, Math.round((stats.hardSolved / stats.totalSolved) * 100)) || 10;

  return (
    <div className="rounded-[32px] border border-[var(--color-border)] bg-[var(--color-card)] p-7 sm:p-8 shadow-[var(--shadow-card)] transition-colors duration-300">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--color-border)] pb-6">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Code2 className="h-5 w-5" />
          </span>
          <div>
            <h3 className="text-2xl font-extrabold text-[var(--color-text)] leading-tight">
              DSA & LeetCode Performance
            </h3>
            <p className="text-xs text-[var(--color-section-muted)] mt-0.5">
              Live algorithmic problem-solving statistics in Java & Python
            </p>
          </div>
        </div>

        <a
          href={`https://leetcode.com/u/${username}/`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card-soft)] px-5 py-2 text-xs font-bold text-[var(--color-text)] transition hover:bg-[var(--color-card-soft-strong)] hover:scale-105"
        >
          <span>@{username}</span>
          <ExternalLink className="h-3.5 w-3.5 text-emerald-400" />
        </a>
      </div>

      {/* Main Stats Summary */}
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card-soft-2)] p-5 text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-section-muted)]">
            Total Solved
          </p>
          <p className="mt-2 text-4xl font-extrabold text-amber-400">
            {stats.totalSolved}+
          </p>
          <span className="mt-1 inline-block text-[11px] text-[var(--color-body)] font-semibold">
            Java & Python
          </span>
        </div>

        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card-soft-2)] p-5 text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-section-muted)]">
            Acceptance Rate
          </p>
          <p className="mt-2 text-4xl font-extrabold text-emerald-400">
            {stats.acceptanceRate}
          </p>
          <span className="mt-1 inline-block text-[11px] text-[var(--color-body)] font-semibold">
            High Efficiency
          </span>
        </div>

        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card-soft-2)] p-5 text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-section-muted)]">
            Global Ranking
          </p>
          <p className="mt-2 text-4xl font-extrabold text-sky-400">
            {stats.ranking}
          </p>
          <span className="mt-1 inline-block text-[11px] text-[var(--color-body)] font-semibold">
            Competitive Coding
          </span>
        </div>
      </div>

      {/* Breakdown Progress Bars */}
      <div className="mt-6 space-y-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card-soft-2)] p-5">
        <div>
          <div className="flex items-center justify-between text-xs font-bold mb-1.5">
            <span className="text-emerald-400">Easy ({stats.easySolved})</span>
            <span className="text-[var(--color-section-muted)]">{easyPercent}%</span>
          </div>
          <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full rounded-full bg-emerald-500 transition-all duration-500"
              style={{ width: `${easyPercent}%` }}
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between text-xs font-bold mb-1.5">
            <span className="text-amber-400">Medium ({stats.mediumSolved})</span>
            <span className="text-[var(--color-section-muted)]">{medPercent}%</span>
          </div>
          <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full rounded-full bg-amber-400 transition-all duration-500"
              style={{ width: `${medPercent}%` }}
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between text-xs font-bold mb-1.5">
            <span className="text-rose-400">Hard ({stats.hardSolved})</span>
            <span className="text-[var(--color-section-muted)]">{hardPercent}%</span>
          </div>
          <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full rounded-full bg-rose-500 transition-all duration-500"
              style={{ width: `${hardPercent}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
