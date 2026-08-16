import { X, Copy, Check, Share2, Mail } from "lucide-react";
import { useState } from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

export default function ProjectShareModal({ project, onClose, onShowToast }) {
  const [copied, setCopied] = useState(false);

  if (!project) return null;

  const projectUrl = `${window.location.origin}/#project/${project.slug}`;
  const shareTitle = `Check out ${project.title} by Rishav Kumar`;

  const copyUrl = () => {
    navigator.clipboard.writeText(projectUrl);
    setCopied(true);
    if (onShowToast) {
      onShowToast({
        title: "Link Copied to Clipboard! 🔗",
        message: `Project link for "${project.title}" copied!`,
      });
    }
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(projectUrl)}`;
    window.open(url, "_blank");
  };

  const shareTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(projectUrl)}`;
    window.open(url, "_blank");
  };

  const shareEmail = () => {
    const url = `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(`Check out this project: ${projectUrl}`)}`;
    window.open(url, "_blank");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md transition-all animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md overflow-hidden rounded-[32px] border border-[var(--color-border)] bg-[var(--color-card)] p-7 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-6 top-6 grid h-9 w-9 place-items-center rounded-full border border-[var(--color-border)] bg-[var(--color-card-soft)] text-[var(--color-text)] transition hover:bg-[var(--color-card-soft-strong)]"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Share2 className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-[var(--color-text)]">
              Share Project
            </h3>
            <p className="text-xs text-[var(--color-section-muted)]">
              {project.title}
            </p>
          </div>
        </div>

        {/* Copy Link Input */}
        <div className="mt-6">
          <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-section-muted)] mb-2">
            Project Direct Link
          </label>
          <div className="flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-card-soft-2)] p-2">
            <input
              type="text"
              readOnly
              value={projectUrl}
              className="flex-1 bg-transparent px-2 text-xs font-mono text-[var(--color-text)] outline-none"
            />
            <button
              onClick={copyUrl}
              className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 px-3.5 py-2 text-xs font-bold text-slate-950 transition"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-slate-950" /> Copied
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" /> Copy
                </>
              )}
            </button>
          </div>
        </div>

        {/* Social Share Grid */}
        <div className="mt-6 pt-4 border-t border-[var(--color-border)] grid grid-cols-3 gap-3">
          <button
            onClick={shareLinkedIn}
            className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card-soft-2)] p-4 text-[var(--color-text)] transition hover:scale-105 hover:bg-[#0077b5]/20 hover:border-[#0077b5]/50"
          >
            <FaLinkedin className="h-5 w-5 text-[#0077b5]" />
            <span className="text-xs font-bold">LinkedIn</span>
          </button>

          <button
            onClick={shareTwitter}
            className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card-soft-2)] p-4 text-[var(--color-text)] transition hover:scale-105 hover:bg-[#1da1f2]/20 hover:border-[#1da1f2]/50"
          >
            <FaTwitter className="h-5 w-5 text-[#1da1f2]" />
            <span className="text-xs font-bold">X / Twitter</span>
          </button>

          <button
            onClick={shareEmail}
            className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card-soft-2)] p-4 text-[var(--color-text)] transition hover:scale-105 hover:bg-emerald-500/20 hover:border-emerald-500/50"
          >
            <Mail className="h-5 w-5 text-emerald-400" />
            <span className="text-xs font-bold">Email</span>
          </button>
        </div>
      </div>
    </div>
  );
}
