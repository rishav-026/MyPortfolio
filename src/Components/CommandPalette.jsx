import { useState, useEffect, useMemo, useRef } from "react";
import {
  Command,
  Search,
  FolderGit2,
  User,
  FileText,
  Sun,
  Moon,
  Mail,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function CommandPalette({
  isOpen,
  onClose,
  onToggleTheme,
  theme,
  onOpenContact,
}) {
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSearch("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const actions = useMemo(
    () => [
      {
        id: "projects",
        label: "View Featured Projects",
        category: "Navigation",
        icon: <FolderGit2 className="h-4 w-4 text-emerald-400" />,
        shortcut: "G P",
        run: () => {
          window.location.hash = "projects";
          onClose();
        },
      },
      {
        id: "about",
        label: "About Rishav Kumar",
        category: "Navigation",
        icon: <User className="h-4 w-4 text-sky-400" />,
        shortcut: "G A",
        run: () => {
          window.location.hash = "about";
          onClose();
        },
      },
      {
        id: "resume",
        label: "View / Download Resume (PDF)",
        category: "Actions",
        icon: <FileText className="h-4 w-4 text-amber-400" />,
        shortcut: "G R",
        run: () => {
          window.open("/resume.pdf", "_blank");
          onClose();
        },
      },
      {
        id: "contact",
        label: "Send Message (Contact Modal)",
        category: "Actions",
        icon: <Mail className="h-4 w-4 text-rose-400" />,
        shortcut: "C",
        run: () => {
          onClose();
          onOpenContact();
        },
      },
      {
        id: "theme",
        label: `Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`,
        category: "Preferences",
        icon:
          theme === "dark" ? (
            <Sun className="h-4 w-4 text-yellow-400" />
          ) : (
            <Moon className="h-4 w-4 text-indigo-400" />
          ),
        shortcut: "T",
        run: () => {
          onToggleTheme();
          onClose();
        },
      },
      {
        id: "github",
        label: "Open GitHub Profile",
        category: "External Links",
        icon: <FaGithub className="h-4 w-4 text-purple-400" />,
        shortcut: "GH",
        run: () => {
          window.open("https://github.com/rishav-026", "_blank");
          onClose();
        },
      },
      {
        id: "linkedin",
        label: "Open LinkedIn Profile",
        category: "External Links",
        icon: <FaLinkedin className="h-4 w-4 text-blue-400" />,
        shortcut: "LI",
        run: () => {
          window.open("https://www.linkedin.com/in/rishavkumar12/", "_blank");
          onClose();
        },
      },
    ],
    [onClose, onOpenContact, onToggleTheme, theme]
  );

  const filtered = useMemo(() => {
    if (!search.trim()) return actions;
    const q = search.toLowerCase();
    return actions.filter(
      (action) =>
        action.label.toLowerCase().includes(q) ||
        action.category.toLowerCase().includes(q)
    );
  }, [actions, search]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filtered.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          filtered[selectedIndex].run();
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filtered, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-md transition-all animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)] shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input Bar */}
        <div className="flex items-center gap-3 border-b border-[var(--color-border)] px-5 py-4">
          <Search className="h-5 w-5 text-[var(--color-section-muted)]" />
          <input
            ref={inputRef}
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Type a command or search (e.g. projects, resume, theme)..."
            className="w-full bg-transparent text-base text-[var(--color-text)] placeholder-[var(--color-section-muted)] outline-none"
          />
          <kbd className="hidden sm:inline-flex items-center rounded-lg border border-[var(--color-border)] bg-[var(--color-card-soft-2)] px-2 py-1 text-[10px] font-bold uppercase text-[var(--color-section-muted)]">
            ESC
          </kbd>
        </div>

        {/* List */}
        <div className="max-h-[340px] overflow-y-auto p-3">
          {filtered.length > 0 ? (
            filtered.map((action, index) => {
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={action.id}
                  onClick={() => action.run()}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left transition-all ${
                    isSelected
                      ? "bg-[var(--color-card-soft-strong)] text-[var(--color-text)] scale-[1.01]"
                      : "text-[var(--color-body)] hover:bg-[var(--color-card-soft)]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-8 w-8 place-items-center rounded-lg border border-[var(--color-border)] bg-[var(--color-card-soft)]">
                      {action.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--color-text)]">
                        {action.label}
                      </p>
                      <p className="text-[11px] text-[var(--color-section-muted)]">
                        {action.category}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {action.shortcut && (
                      <kbd className="rounded-md border border-[var(--color-border)] bg-[var(--color-card-soft-2)] px-2 py-0.5 text-[10px] font-mono text-[var(--color-section-muted)]">
                        {action.shortcut}
                      </kbd>
                    )}
                    <ArrowRight
                      className={`h-4 w-4 transition-transform ${
                        isSelected
                          ? "translate-x-1 text-emerald-400 opacity-100"
                          : "opacity-0"
                      }`}
                    />
                  </div>
                </button>
              );
            })
          ) : (
            <div className="py-12 text-center text-sm text-[var(--color-section-muted)]">
              No commands matching &quot;{search}&quot;
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-[var(--color-border)] bg-[var(--color-card-soft)] px-5 py-3 text-xs text-[var(--color-section-muted)]">
          <span className="flex items-center gap-1.5 font-medium">
            <Sparkles className="h-3.5 w-3.5 text-emerald-400" /> Use <kbd className="font-mono">↑↓</kbd> to navigate, <kbd className="font-mono">↵</kbd> to select
          </span>
          <span>Press <kbd className="font-mono">ESC</kbd> to exit</span>
        </div>
      </div>
    </div>
  );
}
