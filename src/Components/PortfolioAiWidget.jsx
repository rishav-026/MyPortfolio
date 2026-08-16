import { useState, useRef, useEffect } from "react";
import { Bot, X, Send, Sparkles } from "lucide-react";

export default function PortfolioAiWidget({ isOpen, onClose, onOpenContact }) {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "👋 Hi! I'm Rishav's AI Assistant.\n\nAsk me any question in plain English (e.g., 'What is his CGPA?', 'Tell me about Vercel Clone', 'What hackathons did he win?', or 'How to contact him?').",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  if (!isOpen) return null;

  const presetQuestions = [
    "Tell me about Rishav's 2 Hackathon Wins 🏆",
    "What is the Vercel Clone project? 🚀",
    "What is Rishav's CGPA & Education? 🎓",
    "How many DSA problems solved on LeetCode? 💻",
  ];

  const handleSend = (userText) => {
    const textToSend = userText || input;
    if (!textToSend.trim()) return;

    const newMessages = [...messages, { sender: "user", text: textToSend }];
    setMessages(newMessages);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const reply = getPreciseAnswer(textToSend.trim());
      setMessages((prev) => [...prev, { sender: "ai", text: reply }]);
      setIsTyping(false);
    }, 400);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-all animate-fadeIn font-sans"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-[32px] border border-emerald-500/30 bg-[var(--color-card)] p-6 shadow-[0_0_50px_rgba(16,185,129,0.25)] flex flex-col h-[590px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-4">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Bot className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-xl font-extrabold text-[var(--color-text)] leading-tight flex items-center gap-2">
                Ask Portfolio AI <Sparkles className="h-4 w-4 text-emerald-400 animate-pulse" />
              </h3>
              <p className="text-xs text-[var(--color-section-muted)]">
                Smart Semantic Matching Engine • Rishav&apos;s Portfolio DB
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="grid h-8 w-8 place-items-center rounded-full border border-[var(--color-border)] bg-[var(--color-card-soft)] text-[var(--color-text)] transition hover:bg-[var(--color-card-soft-strong)]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto py-4 space-y-3.5 pr-1 text-xs sm:text-sm">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex gap-3 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.sender === "ai" && (
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-emerald-500/20 text-emerald-400 font-bold text-[10px]">
                  AI
                </span>
              )}
              <div
                className={`max-w-[86%] rounded-2xl p-3.5 leading-relaxed whitespace-pre-wrap ${
                  msg.sender === "user"
                    ? "bg-emerald-500 text-slate-950 font-bold rounded-tr-none shadow-md"
                    : "bg-[var(--color-card-soft-2)] border border-[var(--color-border)] text-[var(--color-text)] rounded-tl-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
              <span className="animate-bounce">●</span>
              <span className="animate-bounce delay-100">●</span>
              <span className="animate-bounce delay-200">●</span>
              <span className="ml-1">Processing semantic query...</span>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Presets */}
        <div className="py-2 border-t border-[var(--color-border)] flex flex-wrap gap-1.5">
          {presetQuestions.map((q) => (
            <button
              key={q}
              onClick={() => handleSend(q)}
              className="rounded-full border border-[var(--color-border)] bg-[var(--color-card-soft)] px-3 py-1 text-[11px] font-semibold text-[var(--color-section-muted)] hover:border-emerald-500/30 hover:text-emerald-400 transition text-left"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend(input);
          }}
          className="mt-2 flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything (e.g. 'What is his CGPA?', 'Vercel Clone', 'Hackathons')..."
            className="flex-1 rounded-xl border border-[var(--color-border)] bg-[var(--color-card-soft-2)] px-4 py-2.5 text-xs text-[var(--color-text)] placeholder-[var(--color-section-muted)] outline-none focus:border-emerald-500/50"
          />
          <button
            type="submit"
            className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition font-bold"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
}

// Precise Intent Classifier & Semantic Matching Engine
function getPreciseAnswer(rawQuery) {
  const q = rawQuery.toLowerCase().trim();

  // Helper matcher
  const match = (terms) => terms.some((t) => q.includes(t));

  // 1. CGPA & MARKS
  if (match(["cgpa", "marks", "percentage", "gpa", "grade", "score"])) {
    return (
      "🎯 Academic Performance:\n\n" +
      "• CGPA: 8.20 / 10\n" +
      "• Degree: B.E. Information Science and Engineering\n" +
      "• College: Acharya Institute of Technology, Bengaluru (2023–2027)"
    );
  }

  // 2. LEETCODE & DSA
  if (match(["leetcode", "dsa", "data structures", "algo", "problem", "problems", "solved", "java dsa"])) {
    return (
      "💻 LeetCode & Problem Solving Stats:\n\n" +
      "• Total Solved: 150+ DSA Problems in Java\n" +
      "• Core Topics: Arrays, Strings, Trees, Graphs, Dynamic Programming, Heap, System Optimization\n" +
      "• Profile Link: https://leetcode.com/u/rishav1kr/\n" +
      "• Username: rishav1kr"
    );
  }

  // 3. HACKATHONS
  if (match(["hackathon", "hackathons", "srujana", "winner", "award", "win", "won", "prize", "competition"])) {
    return (
      "🏆 Rishav's 2× Hackathon Wins:\n\n" +
      "1. CivicSim (2nd Place @ Srujana State Hackathon 2025):\n" +
      "   • AI municipal document verification & corruption anomaly detector.\n" +
      "   • Tech: Python, FastAPI, Tesseract OCR, Gemini AI.\n\n" +
      "2. Sarkaar Sarthi (State Hackathon Winner):\n" +
      "   • Multilingual AI citizen assistant for government welfare schemes.\n" +
      "   • Tech: React, Node.js, Express, RAG Vector Search, MySQL."
    );
  }

  // 4. VERCEL CLONE
  if (match(["vercel", "deploy platform", "s3 build", "clone"])) {
    return (
      "🚀 Vercel Clone (Automated Full-Stack Deployment Platform):\n\n" +
      "• What it does: Clones GitHub repos, spins up isolated Docker container builds, and streams live deployment logs while uploading compiled assets to AWS S3.\n" +
      "• Tech Stack: React, Node.js, Docker, AWS S3, ECR, ECS.\n" +
      "• GitHub Repo: https://github.com/rishav-026/Vercel-clone"
    );
  }

  // 5. LOGINTELLIGENCE
  if (match(["logintelligence", "log", "incident", "llama", "fastapi log"])) {
    return (
      "🧠 LogIntelligence (DevOps AI Incident Diagnosis Platform):\n\n" +
      "• What it does: Analyzes raw production logs, identifies affected technologies (Postgres, Redis, Kafka, K8s), and executes deterministic operational playbooks with zero AI hallucinations.\n" +
      "• Tech Stack: FastAPI, Python, React, Next.js, LangChain, Ollama (Llama 3).\n" +
      "• Live App: https://logintelligence-nu.vercel.app/"
    );
  }

  // 6. INFRALEDGER
  if (match(["infraledger", "infra-ledger", "infra ledgar", "polygon", "ipfs", "blockchain"])) {
    return (
      "🛡️ InfraLedger (Blockchain Infrastructure Transparency Platform):\n\n" +
      "• What it does: Permanently records municipal project milestones and IPFS Pinata document hashes on the Polygon blockchain to eliminate corruption.\n" +
      "• Tech Stack: React, Node.js, Express, Polygon Blockchain, Ethers.js, IPFS, Prisma ORM.\n" +
      "• Live App: https://infra-ledgar-1.vercel.app/"
    );
  }

  // 7. CIVICSIM
  if (match(["civic", "civicsim", "fraud", "corruption", "ocr grant"])) {
    return (
      "🏛️ CivicSim (AI Civic Transparency - 2nd Place Winner @ Srujana 2025):\n\n" +
      "• What it does: 90%+ OCR data extraction accuracy on public grant receipts, cross-verifying line items against government APIs for corruption detection.\n" +
      "• Tech Stack: Python, React, FastAPI, Tesseract OCR, Google Gemini AI."
    );
  }

  // 8. SARKAAR SARTHI
  if (match(["sarkaar", "saarthi", "rag", "multilingual", "scheme"])) {
    return (
      "🇮🇳 Sarkaar Sarthi (AI Multilingual Welfare Assistant - Hackathon Winner):\n\n" +
      "• What it does: RAG-based AI chatbot providing step-by-step guidance on Indian government welfare schemes in English, Hindi, Kannada, Tamil + 7 Indian languages.\n" +
      "• Tech Stack: React, Node.js, Express, FAISS Vector Search, MySQL, RAG."
    );
  }

  // 9. INVOICE PROCESSING TOOL
  if (match(["invoice", "receipt", "billing", "cloud vision"])) {
    return (
      "📄 Invoice Processing Tool (OCR Document Automation Pipeline):\n\n" +
      "• What it does: Automated OCR extraction of vendor name, date, subtotal, and line items from handwritten & scanned invoices using Google Cloud Vision API with arithmetic validation.\n" +
      "• Tech Stack: Python, Flask, Google Cloud Vision, MySQL."
    );
  }

  // 10. CAREER PREDICTION
  if (match(["career", "predictor", "prediction", "autogluon"])) {
    return (
      "🎯 Career Prediction System (AutoGluon ML Model):\n\n" +
      "• What it does: Machine learning model achieving >85% accuracy predicting student career trajectories based on academic, technical & behavioral inputs.\n" +
      "• Tech Stack: Python, AutoGluon ML, Scikit-Learn, React."
    );
  }

  // 11. PROJECTS LISTING
  if (match(["project", "projects", "built", "work", "show", "list", "apps", "code", "repository", "repos"])) {
    return (
      "🚀 Rishav has built 8+ Production & AI Applications:\n\n" +
      "1. Vercel Clone (Full-Stack Deployment Platform)\n" +
      "2. LogIntelligence (DevOps AI Log Incident Triage) [Live: https://logintelligence-nu.vercel.app/]\n" +
      "3. InfraLedger (Polygon Blockchain Audit) [Live: https://infra-ledgar-1.vercel.app/]\n" +
      "4. CivicSim (Gemini AI & OCR Transparency - 2nd Place Srujana 2025)\n" +
      "5. Sarkaar Sarthi (Multilingual RAG Assistant - Hackathon Winner)\n" +
      "6. Invoice Processing Tool (OCR Automation Pipeline)\n" +
      "7. Career Prediction System (AutoGluon ML Model)\n\n" +
      "Ask about any specific project by name for detailed specs!"
    );
  }

  // 12. EDUCATION & COLLEGE
  if (match(["education", "college", "university", "degree", "acharya", "ait", "school", "study", "engineering", "b.e", "be"])) {
    return (
      "🎓 Education Details:\n\n" +
      "• Degree: B.E. Information Science and Engineering\n" +
      "• Institution: Acharya Institute of Technology, Bengaluru (2023–2027)\n" +
      "• Academic Score: CGPA 8.20 / 10\n" +
      "• Key Focus Areas: Full-Stack Web Architecture, Cloud DevOps, AI Systems & Data Structures."
    );
  }

  // 13. TECH STACK & SKILLS
  if (match(["skill", "skills", "stack", "tech", "language", "languages", "java", "python", "javascript", "docker", "aws", "react", "node", "fastapi", "mysql", "mongodb"])) {
    return (
      "💻 Rishav's Core Technical Stack:\n\n" +
      "• Languages: Java (150+ DSA Solved), Python, JavaScript (ES6+), SQL\n" +
      "• Frontend: React, Next.js, Tailwind CSS, Vite, HTML5/CSS3\n" +
      "• Backend & Cloud: Node.js, Express, FastAPI, Docker, AWS (S3, ECR, ECS), REST APIs\n" +
      "• Databases & AI: MySQL, MongoDB, SQLite, Prisma, LangChain, Ollama (Llama 3), Google Gemini AI, OCR"
    );
  }

  // 14. CERTIFICATIONS
  if (match(["certif", "certification", "oracle", "oci", "prompt engineering", "credentials", "badges"])) {
    return (
      "📜 Professional Certifications:\n\n" +
      "1. Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate (Oracle University)\n" +
      "2. Prompt Engineering & Generative AI (LinkedIn Learning)\n" +
      "3. Introduction to Large Language Models (LLMs)"
    );
  }

  // 15. CONTACT, HIRING & SOCIALS
  if (match(["contact", "hire", "email", "phone", "number", "resume", "github", "leetcode", "linkedin", "reach", "location", "bangalore", "bengaluru", "who is", "about"])) {
    return (
      "📬 Rishav Kumar - Candidate Profile & Contact Info:\n\n" +
      "• Role: Full-Stack, Cloud & AI Engineer\n" +
      "• Education: B.E. Information Science @ Acharya Institute of Technology (CGPA 8.20/10)\n" +
      "• Email: rishavkumar7034@gmail.com\n" +
      "• Phone: +91 6204627879\n" +
      "• Location: Bangalore, India\n" +
      "• GitHub: https://github.com/rishav-026\n" +
      "• LeetCode: https://leetcode.com/u/rishav1kr/ (150+ DSA Solved)\n\n" +
      "Status: Open for Full-Stack, Cloud & AI Engineering roles!"
    );
  }

  // 16. PRECISE FALLBACK
  return (
    `I found information related to '${rawQuery}' in Rishav's portfolio:\n\n` +
    "👤 Rishav Kumar — Full-Stack, Cloud & AI Engineer (B.E. ISE @ Acharya Institute of Technology, CGPA 8.20/10).\n\n" +
    "Try asking any of these precise questions:\n" +
    "• 'What is his CGPA?'\n" +
    "• 'Tell me about his 2 Hackathon Wins'\n" +
    "• 'What is Vercel Clone?'\n" +
    "• 'How many DSA problems has he solved?'\n" +
    "• 'What is his email or contact info?'"
  );
}
