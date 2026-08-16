import { X, Award, ExternalLink, CheckCircle, ShieldCheck } from "lucide-react";

export default function CredentialModal({ credential, onClose }) {
  if (!credential) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md transition-all animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-[32px] border border-[var(--color-border)] bg-[var(--color-card)] p-7 sm:p-9 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-6 top-6 grid h-9 w-9 place-items-center rounded-full border border-[var(--color-border)] bg-[var(--color-card-soft)] text-[var(--color-text)] transition hover:bg-[var(--color-card-soft-strong)]"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-4">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20 text-2xl shrink-0">
            {credential.icon || "🏆"}
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-section-muted)]">
              {credential.issuer || "Verified Credential"}
            </span>
            <h3 className="text-2xl font-extrabold text-[var(--color-text)] leading-tight mt-0.5">
              {credential.title}
            </h3>
          </div>
        </div>

        <div className="mt-6 space-y-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card-soft-2)] p-5 text-sm">
          <div>
            <p className="text-xs uppercase font-bold text-[var(--color-section-muted)]">Description & Verification</p>
            <p className="mt-1 leading-6 text-[var(--color-body)]">{credential.description}</p>
          </div>

          {credential.skills && (
            <div className="pt-3 border-t border-[var(--color-border)]">
              <p className="text-xs uppercase font-bold text-[var(--color-section-muted)] mb-2">Verified Skills</p>
              <div className="flex flex-wrap gap-1.5">
                {credential.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-[var(--color-card-soft-strong)] px-2.5 py-1 text-xs font-bold text-emerald-400 border border-emerald-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {credential.date && (
            <div className="pt-3 border-t border-[var(--color-border)] flex items-center justify-between text-xs text-[var(--color-section-muted)]">
              <span>Issued Date: {credential.date}</span>
              <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                <ShieldCheck className="h-4 w-4" /> Verified Candidate
              </span>
            </div>
          )}
        </div>

        <div className="mt-6 flex gap-3">
          {credential.link && (
            <a
              href={credential.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 py-3 px-5 text-xs font-extrabold text-slate-950 shadow-md transition"
            >
              <span>Verify Official Credential</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
          <button
            onClick={onClose}
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card-soft)] hover:bg-[var(--color-card-soft-strong)] px-5 py-3 text-xs font-bold text-[var(--color-text)] transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
