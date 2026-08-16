import { useState } from "react";
import { X, QrCode, Download, Copy, Check, Mail, Phone, MapPin, Award, ShieldCheck, ExternalLink, Sparkles } from "lucide-react";

export default function RecruiterCardModal({ isOpen, onClose, onShowToast, onOpenResume }) {
  const [copied, setCopied] = useState(false);
  const currentUrl =
    typeof window !== "undefined" && window.location.hostname !== "localhost" && window.location.hostname !== "127.0.0.1"
      ? window.location.origin + window.location.pathname
      : "https://my-portfolio-one-beryl-52.vercel.app/";
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(currentUrl)}&color=10-185-129&bgcolor=15-23-42`;

  if (!isOpen) return null;

  const copyPortfolioUrl = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    if (onShowToast) {
      onShowToast({
        title: "Portfolio Link Copied! 📋",
        message: "Direct URL copied to clipboard. Ready to share with your team!",
      });
    }
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-all animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl overflow-hidden rounded-[32px] border border-emerald-500/30 bg-[var(--color-card)] p-6 sm:p-8 shadow-[0_0_50px_rgba(16,185,129,0.2)] transition-all font-sans"
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
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <QrCode className="h-5 w-5" />
          </span>
          <div>
            <h3 className="text-2xl font-extrabold text-[var(--color-text)] leading-tight">
              Recruiter Cheat Sheet & QR Profile
            </h3>
            <p className="text-xs text-[var(--color-section-muted)] mt-0.5">
              Instant 1-page executive candidate summary for hiring teams.
            </p>
          </div>
        </div>

        {/* Content Layout */}
        <div className="mt-6 grid gap-6 md:grid-cols-[170px_1fr]">
          {/* QR Code Column */}
          <div className="flex flex-col items-center justify-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-card-soft-2)] p-4 text-center">
            <div className="overflow-hidden rounded-xl border border-emerald-500/30 bg-slate-900 p-2 shadow-inner">
              <img
                src={qrUrl}
                alt="Rishav Kumar Portfolio QR Code"
                className="h-36 w-36 object-contain"
              />
            </div>
            <p className="mt-3 text-[11px] font-bold text-emerald-400">
              Scan with Phone Camera
            </p>
            <p className="text-[10px] text-[var(--color-section-muted)] mt-0.5">
              Open mobile portfolio instantly
            </p>
          </div>

          {/* Candidate Executive Summary Column */}
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between">
                <h4 className="text-2xl font-extrabold text-[var(--color-text)]">
                  Rishav Kumar 👋
                </h4>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[10px] font-extrabold uppercase text-emerald-400 border border-emerald-500/20">
                  Open for Hire
                </span>
              </div>
              <p className="text-xs font-semibold text-emerald-400 mt-0.5">
                Full-Stack, Cloud & AI Engineer
              </p>
            </div>

            {/* Education */}
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card-soft-2)] p-3 text-xs">
              <p className="font-bold text-[var(--color-text)]">B.E. Information Science and Engineering</p>
              <p className="text-[11px] text-[var(--color-section-muted)] mt-0.5">
                Acharya Institute of Technology, Bengaluru (2023 - 2027) • <strong className="text-emerald-400">CGPA: 8.20 / 10</strong>
              </p>
            </div>

            {/* Core Tech Stack */}
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-wider text-[var(--color-section-muted)] mb-1.5">
                Primary Stack & Expertise
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Java (DSA)", "Python", "JavaScript", "React", "Node.js", "FastAPI", "Docker", "AWS", "MySQL", "MongoDB"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-[var(--color-card-soft-strong)] border border-[var(--color-border)] px-2 py-0.5 text-[11px] font-semibold text-[var(--color-text)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Accomplishments */}
            <div className="space-y-1 text-xs text-[var(--color-body)]">
              <p className="flex items-center gap-2">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                <span><strong>2× Hackathon Winner:</strong> Srujana 2025 (2nd) & ImpactX Finalist</span>
              </p>
              <p className="flex items-center gap-2">
                <ShieldCheck className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                <span><strong>Oracle Certified:</strong> Cloud OCI AI Foundations Associate (2025)</span>
              </p>
              <p className="flex items-center gap-2">
                <ShieldCheck className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                <span><strong>150+ DSA Solved:</strong> Arrays, Trees, Graphs, Dynamic Programming</span>
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--color-section-muted)] border-t border-[var(--color-border)] pt-3">
              <span className="flex items-center gap-1.5 text-[var(--color-text)]">
                <Mail className="h-3.5 w-3.5 text-emerald-400" /> rishavkumar7034@gmail.com
              </span>
              <span className="flex items-center gap-1.5 text-[var(--color-text)]">
                <Phone className="h-3.5 w-3.5 text-sky-400" /> +91 6204627879
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-[var(--color-border)] pt-5">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 py-2.5 px-4 text-xs font-extrabold text-slate-950 shadow-md transition hover:scale-105"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Download PDF Resume</span>
          </a>

          <button
            onClick={copyPortfolioUrl}
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-card-soft-strong)] py-2.5 px-4 text-xs font-extrabold text-[var(--color-text)] transition hover:bg-[var(--color-card-soft)]"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copied ? "Copied Link!" : "Copy Link"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
