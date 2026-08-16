import { useState, useEffect, useRef } from "react";
import { X, Terminal as TerminalIcon, Sparkles } from "lucide-react";

export default function TerminalModal({ isOpen, onClose, onOpenContact }) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "system", text: "SYSTEM_READY. TYPE \"help\" FOR AVAILABLE COMMANDS." },
    { type: "hint", text: "[HINT: TRY TYPING \"matrix\", \"play doom\", OR \"sudo rm -rf /\" FOR COOL EASTER EGGS]" },
  ]);
  const [isMatrixMode, setIsMatrixMode] = useState(false);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  if (!isOpen) return null;

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: "user", text: `C:\\USERS\\RISHAV> ${input}` }];

    switch (cmd) {
      case "help":
        newHistory.push({
          type: "output",
          text: "COMMANDS: help, whoami, skills, projects, contact, clear, matrix, play doom, sudo rm -rf /",
        });
        break;

      case "whoami":
        newHistory.push({
          type: "output",
          text: "Rishav Kumar — Full-Stack, Cloud & AI Engineer. B.E. Information Science @ Acharya Institute of Technology (CGPA: 8.20). Passionate about scalable backend systems & AI products.",
        });
        break;

      case "skills":
        newHistory.push({
          type: "output",
          text: "SKILLS: Java, Python, JavaScript, React.js, Node.js, Express.js, FastAPI, Docker, AWS, MySQL, MongoDB, LangChain, Ollama, IPFS, Polygon.",
        });
        break;

      case "projects":
        newHistory.push({
          type: "output",
          text: "PROJECTS: 1. Vercel Clone  2. LogIntelligence  3. InfraLedger  4. CivicSim  5. Sarkaar Sarthi  6. Invoice Processing Tool",
        });
        window.location.hash = "projects";
        break;

      case "contact":
        newHistory.push({
          type: "output",
          text: "Opening direct contact modal...",
        });
        onOpenContact();
        onClose();
        break;

      case "matrix":
        setIsMatrixMode((prev) => !prev);
        newHistory.push({
          type: "output",
          text: isMatrixMode ? "MATRIX_MODE: DEACTIVATED" : "MATRIX_MODE: ACTIVATED (Wake up, Neo...)",
        });
        break;

      case "play doom":
        newHistory.push({
          type: "output",
          text: "🎮 LAUNCHING RETRO DOOM SIMULATOR... IDDQD (GOD MODE ACTIVATED). Solved 150+ DSA problems!",
        });
        break;

      case "sudo rm -rf /":
        newHistory.push({
          type: "error",
          text: "⚠️ WARNING: ACCESS DENIED! Nice try hacker 😎 Root permissions protected by Rishav's security sandbox.",
        });
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        newHistory.push({
          type: "error",
          text: `Command not recognized: "${cmd}". Type "help" for a list of valid commands.`,
        });
        break;
    }

    setHistory(newHistory);
    setInput("");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md transition-all animate-fadeIn"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-3xl overflow-hidden rounded-2xl border-2 border-yellow-400/80 bg-[#0c0c0c] shadow-[0_0_50px_rgba(234,179,8,0.25)] font-mono transition-all ${
          isMatrixMode ? "text-green-400 border-green-400 shadow-[0_0_50px_rgba(34,197,94,0.3)]" : "text-slate-100"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title Bar */}
        <div className="flex items-center justify-between border-b border-white/10 bg-[#161616] px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-sm bg-red-500" />
              <span className="h-3 w-3 rounded-sm bg-yellow-400" />
              <span className="h-3 w-3 rounded-sm bg-blue-500" />
            </div>
            <span className="text-xs font-mono font-bold tracking-widest text-slate-300">
              RISHAV_TERM.EXE [SECURE]
            </span>
          </div>

          <button
            onClick={onClose}
            className="grid h-7 w-7 place-items-center rounded bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Terminal Screen Body */}
        <div className="h-[380px] sm:h-[420px] overflow-y-auto p-5 font-mono text-xs sm:text-sm leading-relaxed select-text">
          {history.map((item, index) => (
            <div key={index} className="mb-2">
              {item.type === "system" && (
                <p className="font-bold tracking-wider text-slate-200">{item.text}</p>
              )}
              {item.type === "hint" && (
                <p className="text-yellow-400/90 font-semibold">{item.text}</p>
              )}
              {item.type === "user" && (
                <p className="text-yellow-400 font-bold">{item.text}</p>
              )}
              {item.type === "output" && (
                <p className={isMatrixMode ? "text-green-400" : "text-slate-300"}>{item.text}</p>
              )}
              {item.type === "error" && (
                <p className="text-rose-400 font-semibold">{item.text}</p>
              )}
            </div>
          ))}

          {/* Active Input Line */}
          <form onSubmit={handleCommandSubmit} className="mt-4 flex items-center gap-2">
            <span className="text-yellow-400 font-bold shrink-0">C:\USERS\RISHAV&gt;</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent text-yellow-400 font-mono outline-none caret-yellow-400 font-bold text-sm"
              autoFocus
            />
          </form>
          <div ref={bottomRef} />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-white/10 bg-[#121212] px-4 py-2 text-[11px] text-slate-400 font-mono">
          <span>STATUS: ONLINE</span>
          <span>TYPE &quot;help&quot; FOR COMMANDS</span>
        </div>
      </div>
    </div>
  );
}
