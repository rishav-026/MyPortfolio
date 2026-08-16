import { X, Download, Printer, ExternalLink, FileText } from "lucide-react";

export default function ResumeModal({ isOpen, onClose, onShowToast }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Rishav-Kumar-Resume.pdf";
    link.click();
    if (onShowToast) {
      onShowToast({
        title: "Resume Downloaded 📄",
        message: "Rishav Kumar's Full-Stack Resume PDF has been saved to your downloads.",
      });
    }
  };

  const handlePrint = () => {
    const iframe = document.getElementById("resume-pdf-iframe");
    if (iframe) {
      iframe.contentWindow?.focus();
      iframe.contentWindow?.print();
    } else {
      window.open("/resume.pdf", "_blank");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md transition-all animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative flex flex-col w-full max-w-5xl h-[88vh] overflow-hidden rounded-[32px] border border-[var(--color-border)] bg-[var(--color-card)] shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--color-border)] bg-[var(--color-card-soft-2)] px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-[var(--color-text)]">
                Rishav Kumar — Full-Stack Resume
              </h3>
              <p className="text-xs text-[var(--color-section-muted)]">
                Official PDF Document • 2026 Edition
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 px-4 py-2 text-xs font-bold text-slate-950 transition shadow-md"
            >
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Download PDF</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-card-soft)] hover:bg-[var(--color-card-soft-strong)] px-3.5 py-2 text-xs font-semibold text-[var(--color-text)] transition"
              title="Print Resume"
            >
              <Printer className="h-4 w-4" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-card-soft)] hover:bg-[var(--color-card-soft-strong)] px-3.5 py-2 text-xs font-semibold text-[var(--color-text)] transition"
              title="Open in new tab"
            >
              <ExternalLink className="h-4 w-4" />
            </a>

            <button
              onClick={onClose}
              className="grid h-9 w-9 place-items-center rounded-xl border border-[var(--color-border)] bg-[var(--color-card-soft)] text-[var(--color-text)] transition hover:bg-[var(--color-card-soft-strong)]"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* PDF Frame Container */}
        <div className="flex-1 w-full bg-slate-950/50 p-2 sm:p-4 overflow-hidden">
          <iframe
            id="resume-pdf-iframe"
            src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=1"
            className="w-full h-full rounded-2xl border border-[var(--color-border)] shadow-inner"
            title="Rishav Kumar Resume PDF"
          />
        </div>
      </div>
    </div>
  );
}
