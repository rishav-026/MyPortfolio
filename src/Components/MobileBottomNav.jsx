import { Home, FolderGit2, Bot, QrCode, Mail } from "lucide-react";

export default function MobileBottomNav({
  onOpenAiWidget,
  onOpenRecruiterCard,
  onOpenContact,
}) {
  const scrollToSection = (id) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 block md:hidden border-t border-[var(--color-border)] bg-[var(--color-card)]/90 backdrop-blur-xl px-2 py-2 shadow-[0_-5px_25px_rgba(0,0,0,0.4)]">
      <div className="flex items-center justify-around">
        <button
          onClick={() => scrollToSection("top")}
          className="flex flex-col items-center gap-1 p-1.5 text-[10px] font-bold text-[var(--color-section-muted)] hover:text-emerald-400 transition"
        >
          <Home className="h-4 w-4" />
          <span>Home</span>
        </button>

        <button
          onClick={() => scrollToSection("projects")}
          className="flex flex-col items-center gap-1 p-1.5 text-[10px] font-bold text-[var(--color-section-muted)] hover:text-emerald-400 transition"
        >
          <FolderGit2 className="h-4 w-4" />
          <span>Projects</span>
        </button>

        <button
          onClick={onOpenAiWidget}
          className="flex flex-col items-center gap-1 p-1.5 text-[10px] font-bold text-emerald-400 transition"
        >
          <span className="relative flex h-2 w-2 mb-0.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <Bot className="h-4 w-4" />
          <span>AI Assistant</span>
        </button>

        <button
          onClick={onOpenRecruiterCard}
          className="flex flex-col items-center gap-1 p-1.5 text-[10px] font-bold text-[var(--color-section-muted)] hover:text-emerald-400 transition"
        >
          <QrCode className="h-4 w-4" />
          <span>Cheat Sheet</span>
        </button>

        <button
          onClick={onOpenContact}
          className="flex flex-col items-center gap-1 p-1.5 text-[10px] font-bold text-[var(--color-section-muted)] hover:text-emerald-400 transition"
        >
          <Mail className="h-4 w-4" />
          <span>Contact</span>
        </button>
      </div>
    </nav>
  );
}
