import { useEffect, useMemo, useState } from "react";
import profilePhoto from "../assets/profile/photo.jpeg";
import GitHubActivitySection from "./Components/GitHubActivitySection";
import EngineeringMetrics from "./Components/EngineeringMetrics";
import ProjectSection from "./Components/ProjectSection";
import ProjectDetailPage from "./Components/ProjectDetailPage";
import Timeline from "./Components/Timeline";
import CommandPalette from "./Components/CommandPalette";
import ContactModal from "./Components/ContactModal";
import ResumeModal from "./Components/ResumeModal";
import CredentialModal from "./Components/CredentialModal";
import ProjectShareModal from "./Components/ProjectShareModal";
import TerminalModal from "./Components/TerminalModal";
import RecruiterCardModal from "./Components/RecruiterCardModal";
import PortfolioAiWidget from "./Components/PortfolioAiWidget";
import MobileBottomNav from "./Components/MobileBottomNav";
import Toast from "./Components/Toast";
import CursorGlow from "./Components/CursorGlow";
import CursorCat from "./Components/CursorCat";
import { playSound } from "./utils/soundEffects";
import { projects } from "./data/projectsData";
import { Command, FileText, Send, Sparkles, Terminal as TerminalIcon, ShieldCheck, Volume2, VolumeX } from "lucide-react";

const skillsGroups = [
  {
    title: "Languages",
    items: [
      { name: "Java", iconSrc: "https://cdn.simpleicons.org/openjdk" },
      { name: "Python", iconSrc: "https://cdn.simpleicons.org/python" },
      { name: "JavaScript", iconSrc: "https://cdn.simpleicons.org/javascript" },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "React", iconSrc: "https://cdn.simpleicons.org/react" },
      { name: "Node.js", iconSrc: "https://cdn.simpleicons.org/nodedotjs" },
      { name: "Express", iconSrc: "https://cdn.simpleicons.org/express" },
      { name: "FastAPI", iconSrc: "https://cdn.simpleicons.org/fastapi" },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "AWS", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Docker", iconSrc: "https://cdn.simpleicons.org/docker" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", iconSrc: "https://cdn.simpleicons.org/git" },
      { name: "GitHub", iconSrc: "https://cdn.simpleicons.org/github" },
      { name: "Linux (Ubuntu)", iconSrc: "https://cdn.simpleicons.org/ubuntu" },
      { name: "VS Code", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "LaTeX", iconSrc: "https://cdn.simpleicons.org/latex" },
      { name: "Postman", iconSrc: "https://cdn.simpleicons.org/postman" },
    ],
  },
  {
    title: "Networking & Databases",
    items: [
      { name: "TCP/IP" },
      { name: "HTTP/HTTPS" },
      { name: "DNS" },
      { name: "Computer Networks" },
      { name: "MySQL", iconSrc: "https://cdn.simpleicons.org/mysql" },
      { name: "MongoDB", iconSrc: "https://cdn.simpleicons.org/mongodb" },
    ],
  },
];

const achievementsData = [
  {
    title: "Winner (2nd Place) - Srujana Hackathon 2025",
    issuer: "Srujana State Hackathon",
    date: "Jul 2025",
    icon: "🏆",
    description: "Secured 2nd Place out of 100+ competing teams for building CivicSim, an AI-powered civic transparency platform using FastAPI, Gemini AI, OCR, and data.gov.in public analytics.",
    skills: ["Python", "FastAPI", "Gemini AI", "OCR", "Data Analytics"],
  },
  {
    title: "Hackathon Winner — Sarkaar Sarthi AI Platform",
    issuer: "State Hackathon Winner",
    date: "2025",
    icon: "🏆",
    description: "Won Hackathon award for building Sarkaar Sarthi, an AI-powered multilingual government scheme discovery & healthcare navigation platform with document OCR verification.",
    skills: ["AI & LLMs", "Multilingual NLP", "FastAPI", "OCR", "React"],
  },
  {
    title: "150+ DSA Problems Solved",
    issuer: "LeetCode (@rishav1kr)",
    icon: "💻",
    description: "Solved 150+ algorithmic problem-solving challenges in Java covering Arrays, Trees, Graphs, Dynamic Programming, and System Optimization.",
    skills: ["Java", "Data Structures", "Algorithms", "Problem Solving"],
    link: "https://leetcode.com/u/rishav1kr/",
  },
  {
    title: "8+ Production & AI Projects Built",
    issuer: "GitHub Portfolio Showcase",
    icon: "🚀",
    description: "Engineered 8+ full-stack, AI, and cloud-native software projects with Docker isolation, AWS deployment, and RAG architectures.",
    skills: ["React", "Node.js", "Docker", "AWS", "FastAPI"],
  },
];

const certificatesData = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle University",
    date: "Oct 2025",
    icon: "🎓",
    description: "Certified by Oracle University in AI & Machine Learning concepts, Large Language Models, Cloud Infrastructure, and AI service architecture.",
    skills: ["Oracle Cloud", "Artificial Intelligence", "LLMs", "Machine Learning"],
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=A252166271A30DD15B38D1F80919C4C0FE40E2BF840FC6E1101C9D88E49AADCF",
  },
  {
    title: "Introduction to Prompt Engineering & Generative AI",
    issuer: "LinkedIn Learning",
    date: "Sep 2025",
    icon: "📜",
    description: "Mastered prompt engineering techniques, zero-shot/few-shot prompting, RAG architectures, and fine-tuning AI responses.",
    skills: ["Generative AI", "Prompt Engineering", "LLM Fine-tuning"],
    link: "https://www.linkedin.com/learning/certificates/e7aeea83fc41b40cca3f2fb43c361be237cc228858036b43ca1d05423566e39b?trk=share_certificate",
  },
  {
    title: "Introduction to LLM - LinkedIn Learning",
    issuer: "LinkedIn Learning",
    date: "2025",
    icon: "🤖",
    description: "Verified understanding of Large Language Model architectures, tokenization, embeddings, and generative AI capabilities.",
    skills: ["LLM", "Generative AI", "Transformers"],
    link: "https://www.linkedin.com/in/rishavkumar12/overlay/Certifications/1810675348/treasury/?profileId=ACoAADiqoAMB9qAPpn_beHJt1WfCAQWYdvvBh-8",
  },
];

const profileLinks = [
  { label: "GitHub", href: "https://github.com/rishav-026" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rishavkumar12/" },
  { label: "Email", href: "mailto:rishavkumar7034@gmail.com" },
  { label: "Phone", href: "tel:+916204627879" },
];

const heroRoles = ["Full Stack Developer", "Web Developer", "AI Engineer"];

function App() {
  const [time, setTime] = useState("");
  const [route, setRoute] = useState(getRouteFromHash);
  const [heroRoleIndex, setHeroRoleIndex] = useState(0);

  // Modals & Popups State
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isRecruiterCardOpen, setIsRecruiterCardOpen] = useState(false);
  const [isAiWidgetOpen, setIsAiWidgetOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [selectedCredential, setSelectedCredential] = useState(null);
  const [selectedShareProject, setSelectedShareProject] = useState(null);
  const [toast, setToast] = useState(null);

  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return window.localStorage.getItem("portfolio-theme") || "dark";
  });

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    const tick = () => setTime(`${formatter.format(new Date())} (Asia/Kolkata)`);
    tick();
    const intervalId = window.setInterval(tick, 1000);
    return () => window.clearInterval(intervalId);
  }, []);

  // Global Click Sound Effect Listener
  useEffect(() => {
    const handleGlobalClick = () => {
      if (soundEnabled) {
        playSound("click", true);
      }
    };

    window.addEventListener("click", handleGlobalClick);
    return () => window.removeEventListener("click", handleGlobalClick);
  }, [soundEnabled]);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setHeroRoleIndex((currentIndex) => (currentIndex + 1) % heroRoles.length);
    }, 2200);
    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  // Dedicated Route Sync Listener
  useEffect(() => {
    const syncRoute = () => {
      setRoute(getRouteFromHash());
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    };
    syncRoute();
    window.addEventListener("hashchange", syncRoute);
    return () => window.removeEventListener("hashchange", syncRoute);
  }, []);

  // Command Palette Shortcut Listener (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const selectedProject = useMemo(() => {
    if (route.type !== "project") return null;
    return projects.find((project) => project.slug === route.projectSlug) || null;
  }, [route]);

  useEffect(() => {
    if (route.type === "about") {
      document.title = "About Rishav Kumar | Portfolio";
      return;
    }
    document.title = selectedProject
      ? `${selectedProject.title} | Rishav Kumar`
      : "Rishav Kumar | Portfolio";
  }, [route.type, selectedProject]);

  const toggleTheme = () => setTheme((curr) => (curr === "dark" ? "light" : "dark"));

  const showToastNotification = (data) => {
    setToast(data);
    setTimeout(() => setToast(null), 4000);
  };

  return (
    <>
      <CursorGlow theme={theme} />
      <CursorCat />

      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        onToggleTheme={toggleTheme}
        theme={theme}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        onShowToast={showToastNotification}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onShowToast={showToastNotification}
      />

      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <RecruiterCardModal
        isOpen={isRecruiterCardOpen}
        onClose={() => setIsRecruiterCardOpen(false)}
        onShowToast={showToastNotification}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      <PortfolioAiWidget
        isOpen={isAiWidgetOpen}
        onClose={() => setIsAiWidgetOpen(false)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <CredentialModal
        credential={selectedCredential}
        onClose={() => setSelectedCredential(null)}
      />

      <ProjectShareModal
        project={selectedShareProject}
        onClose={() => setSelectedShareProject(null)}
        onShowToast={showToastNotification}
      />

      <Toast toast={toast} onClose={() => setToast(null)} />

      {route.type === "project" && selectedProject ? (
        <ProjectDetailPage
          project={selectedProject}
          theme={theme}
          onToggleTheme={toggleTheme}
          onOpenContact={() => setIsContactOpen(true)}
          onOpenShare={(proj) => setSelectedShareProject(proj)}
          onBack={() => {
            window.location.hash = "";
          }}
        />
      ) : route.type === "about" ? (
        <AboutPage
          theme={theme}
          onToggleTheme={toggleTheme}
          onOpenContact={() => setIsContactOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
          onBack={() => {
            window.location.hash = "";
          }}
        />
      ) : (
        <PortfolioHome
          time={time}
          theme={theme}
          onToggleTheme={() => {
            playSound("pop", soundEnabled);
            toggleTheme();
          }}
          soundEnabled={soundEnabled}
          onToggleSound={() => {
            const next = !soundEnabled;
            setSoundEnabled(next);
            if (next) playSound("success", true);
          }}
          heroRole={heroRoles[heroRoleIndex]}
          onOpenCommand={() => {
            playSound("click", soundEnabled);
            setIsCommandOpen(true);
          }}
          onOpenContact={() => {
            playSound("click", soundEnabled);
            setIsContactOpen(true);
          }}
          onOpenResume={() => {
            playSound("click", soundEnabled);
            setIsResumeOpen(true);
          }}
          onOpenTerminal={() => {
            playSound("terminal", soundEnabled);
            setIsTerminalOpen(true);
          }}
          onOpenRecruiterCard={() => {
            playSound("pop", soundEnabled);
            setIsRecruiterCardOpen(true);
          }}
          onOpenAiWidget={() => {
            playSound("pop", soundEnabled);
            setIsAiWidgetOpen(true);
          }}
          onOpenCredential={(cred) => {
            playSound("click", soundEnabled);
            setSelectedCredential(cred);
          }}
          onOpenShare={(proj) => {
            playSound("click", soundEnabled);
            setSelectedShareProject(proj);
          }}
        />
      )}
    </>
  );
}

function PortfolioHome({
  time,
  theme,
  onToggleTheme,
  soundEnabled,
  onToggleSound,
  heroRole,
  onOpenCommand,
  onOpenContact,
  onOpenResume,
  onOpenTerminal,
  onOpenRecruiterCard,
  onOpenAiWidget,
  onOpenCredential,
  onOpenShare,
}) {
  return (
    <div className="min-h-screen bg-transparent text-[var(--color-text)] transition-colors duration-300">
      <div className="pointer-events-none fixed inset-0 border-t-[10px] border-[var(--color-topbar)]" />
      <div className="pointer-events-none fixed inset-y-0 right-0 w-[32vw] bg-[radial-gradient(circle_at_top,var(--color-right-glow),transparent_60%)]" />

      <main className="mx-auto w-[min(1320px,calc(100%-32px))] pb-16 pt-12 sm:pt-16">
        {/* Navigation Top Bar */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-extrabold text-emerald-400 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Open for Full-Stack, Cloud & AI Engineering Roles</span>
          </div>

          {/* Header Action Controls */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Terminal CLI Easter Egg Trigger */}
            <button
              onClick={onOpenTerminal}
              className="inline-flex items-center gap-2 rounded-2xl border border-yellow-400/50 bg-yellow-400/10 px-4 py-2.5 text-xs font-mono font-extrabold text-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.2)] transition hover:-translate-y-0.5 hover:bg-yellow-400/20"
            >
              <TerminalIcon className="h-4 w-4 text-yellow-400" />
              <span>RISHAV_TERM.EXE</span>
            </button>

            {/* Command Palette Button */}
            <button
              onClick={onOpenCommand}
              className="inline-flex items-center gap-2 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-2.5 text-xs font-bold text-[var(--color-text)] shadow-md transition hover:-translate-y-0.5 hover:border-emerald-500/40"
            >
              <Command className="h-4 w-4 text-emerald-400" />
              <span>Search</span>
              <kbd className="rounded-md bg-[var(--color-card-soft-strong)] px-1.5 py-0.5 text-[10px] font-mono">
                ⌘K
              </kbd>
            </button>

            {/* In-Browser Resume Modal Trigger */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-2.5 text-xs font-bold text-[var(--color-text)] shadow-md transition hover:-translate-y-0.5"
            >
              <FileText className="h-4 w-4 text-amber-400" />
              <span>Resume</span>
            </button>

            {/* Recruiter Card Trigger */}
            <button
              onClick={onOpenRecruiterCard}
              className="inline-flex items-center gap-2 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-2.5 text-xs font-extrabold text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)] transition hover:-translate-y-0.5 hover:bg-emerald-500/20"
            >
              <span>📱 QR & Cheat Sheet</span>
            </button>

            {/* Sound Effects Toggle Button */}
            <button
              type="button"
              onClick={onToggleSound}
              className={`grid h-10 w-10 place-items-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] transition hover:-translate-y-0.5 ${
                soundEnabled ? "text-emerald-400 border-emerald-500/30" : "text-[var(--color-section-muted)]"
              }`}
              title={soundEnabled ? "Mute Developer Sound Effects" : "Enable Developer Sound Effects"}
            >
              {soundEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
            </button>

            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={onToggleTheme}
              className="grid h-10 w-10 place-items-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-text)] transition hover:-translate-y-0.5"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>

        {/* Headline Header */}
        <header className="mb-12">
          <h1 className="text-[2.35rem] leading-[1.05] font-extrabold tracking-[-0.06em] sm:text-[3.9rem] xl:text-[4.5rem]">
            <span>Hi, I&apos;m Rishav — </span>
            <span
              key={heroRole}
              className="role-swap bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent transition-all duration-300 font-extrabold drop-shadow-sm inline-block"
            >
              {heroRole}
            </span>
          </h1>
        </header>

        {/* Hero Section */}
        <section className="grid gap-5 xl:grid-cols-[1.95fr_0.88fr]">
          <article className="rounded-[32px] border border-[var(--color-border)] bg-[var(--color-card)] p-6 sm:p-8 shadow-[var(--shadow-card)] transition-colors duration-300 relative overflow-hidden">
            {/* Background Glow Overlay */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />

            <div className="mb-8 flex items-start justify-between">
              {/* Profile Image with Glowing Gradient Halo Ring */}
              <div className="relative group">
                <div className="absolute -inset-1 rounded-[30px] bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 opacity-75 blur-md transition duration-500 group-hover:opacity-100 group-hover:blur-lg" />
                <img
                  className="relative h-44 w-44 rounded-[26px] object-cover object-top border-2 border-white/20 shadow-2xl transition duration-300 group-hover:scale-[1.02]"
                  src={profilePhoto}
                  alt="Rishav Kumar avatar"
                />
              </div>

              <div className="mt-3 text-emerald-400 animate-pulse">
                <SparkIcon />
              </div>
            </div>

            <h2 className="mb-3 text-[3.2rem] leading-none font-extrabold tracking-[-0.05em] text-[var(--color-text)]">
              About me.
            </h2>

            <p className="max-w-[760px] text-[1.08rem] leading-[2.15rem] text-[var(--color-body)] transition-colors duration-300">
              I build production-ready web and AI applications using{" "}
              <InlineBadge tone="blue">Java</InlineBadge>,{" "}
              <InlineBadge tone="sky">Python</InlineBadge>,{" "}
              <InlineBadge tone="neutral">JavaScript</InlineBadge>,{" "}
              <InlineBadge tone="green">React</InlineBadge>, and{" "}
              <InlineBadge tone="teal">Node.js</InlineBadge> — focused on clean UX, performance, and real user impact.
            </p>

            {/* Quick Hero Key Stats Bar */}
            <div className="my-7 grid grid-cols-3 gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card-soft-2)] p-3.5 text-center">
              <div>
                <p className="text-2xl font-black text-emerald-400">8+</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-section-muted)] mt-0.5">Projects Built</p>
              </div>
              <div className="border-x border-[var(--color-border)]">
                <p className="text-2xl font-black text-amber-400">2× Winner</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-section-muted)] mt-0.5">Hackathons</p>
              </div>
              <div>
                <p className="text-2xl font-black text-sky-400">150+</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-section-muted)] mt-0.5">DSA Solved</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-3 rounded-[18px] bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-600 px-8 py-4 text-[1.1rem] font-extrabold text-slate-950 shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(16,185,129,0.55)] hover:scale-105"
              >
                <SendIcon />
                <span>Let&apos;s Connect</span>
              </button>

              <a
                href="#projects"
                className="inline-flex items-center rounded-[18px] border border-emerald-500/30 bg-[var(--color-card-soft)] px-7 py-4 text-[1.05rem] font-bold text-emerald-400 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:bg-emerald-500/10"
              >
                View Projects →
              </a>
            </div>
          </article>

          {/* Technical Skills Sidebar */}
          <aside className="rounded-[30px] border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-[var(--shadow-card)] transition-colors duration-300 sm:p-7 lg:row-span-2">
            <div className="mb-6 flex items-center gap-3 text-[var(--color-section-muted)] transition-colors duration-300">
              <ArrowBracketIcon />
              <p className="text-[0.95rem] font-bold tracking-[0.22em] uppercase">
                Technical Skills
              </p>
            </div>
            <div className="space-y-7">
              {skillsGroups.map((group) => (
                <div key={group.title}>
                  <p className="mb-3 text-[0.72rem] font-bold tracking-[0.28em] uppercase text-[var(--color-section-soft)] transition-colors duration-300">
                    {group.title}
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {group.items.map((item) => (
                      <SkillChip key={item.name} name={item.name} iconSrc={item.iconSrc} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <AboutCard time={time} />

          <article className="grid gap-4 rounded-[30px] border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-[var(--shadow-card)] transition-colors duration-300 sm:grid-cols-2">
            {profileLinks.map((link) => (
              <SocialCard key={link.label} href={link.href} label={link.label} />
            ))}
          </article>
        </section>

        {/* GitHub Activity Heatmap */}
        <GitHubActivitySection />

        {/* Engineering System Metrics */}
        <EngineeringMetrics />

        {/* Filterable Projects Section */}
        <ProjectSection onOpenShare={onOpenShare} />

        {/* Interactive Milestone Timeline */}
        <Timeline />

        {/* Achievements & Certifications Modals Grid */}
        <section className="mt-24 grid gap-6 md:grid-cols-2">
          <InteractivePanel
            title="Achievements & Awards"
            items={achievementsData}
            onOpenCredential={onOpenCredential}
          />
          <InteractivePanel
            title="Certifications & Credentials"
            items={certificatesData}
            onOpenCredential={onOpenCredential}
          />
        </section>

        <Footer
          onOpenResume={onOpenResume}
          onOpenContact={onOpenContact}
          onOpenRecruiterCard={onOpenRecruiterCard}
          onOpenAiWidget={onOpenAiWidget}
        />
      </main>

      {/* Floating Bottom Action Badges for Desktop */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col gap-3 items-end">
        <button
          onClick={onOpenAiWidget}
          className="group flex items-center gap-2.5 rounded-full border border-emerald-500/50 bg-emerald-500/10 px-5 py-3 text-xs font-extrabold text-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.3)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-emerald-500 hover:text-slate-950"
        >
          <Sparkles className="h-4 w-4 text-emerald-400 group-hover:text-slate-950 animate-pulse" />
          <span>🤖 Ask Portfolio AI</span>
        </button>

        <button
          onClick={onOpenRecruiterCard}
          className="group flex items-center gap-2.5 rounded-full border border-emerald-500/40 bg-slate-900/90 px-5 py-3 text-xs font-extrabold text-emerald-400 shadow-[0_10px_35px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-emerald-400 hover:bg-emerald-500 hover:text-slate-950"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 group-hover:bg-slate-950" />
          </span>
          <span>📱 Recruiter Cheat Sheet</span>
        </button>
      </div>

      {/* Mobile Touch Native Bottom Navigation Bar */}
      <MobileBottomNav
        onOpenAiWidget={onOpenAiWidget}
        onOpenRecruiterCard={onOpenRecruiterCard}
        onOpenContact={onOpenContact}
      />
    </div>
  );
}

function AboutPage({ theme, onToggleTheme, onOpenContact, onOpenResume, onBack }) {
  return (
    <div className="min-h-screen bg-transparent text-[var(--color-text)] transition-colors duration-300">
      <div className="pointer-events-none fixed inset-0 border-t-[10px] border-[var(--color-topbar)]" />
      <div className="pointer-events-none fixed inset-y-0 right-0 w-[32vw] bg-[radial-gradient(circle_at_top,var(--color-right-glow),transparent_60%)]" />

      <main className="mx-auto w-[min(1320px,calc(100%-32px))] pb-16 pt-14 sm:pt-20">
        <div className="mb-8 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-5 py-3 text-[0.95rem] font-semibold text-[var(--color-text)] transition hover:-translate-y-0.5"
          >
            <ArrowLeftIcon />
            Back to home
          </button>
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-5 py-3 text-[0.95rem] font-semibold text-[var(--color-text)] transition hover:-translate-y-0.5"
            >
              <FileText className="h-4 w-4 text-amber-400" />
              View Resume
            </button>
            <button
              type="button"
              onClick={onToggleTheme}
              className="grid h-11 w-11 place-items-center rounded-full border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-text)] transition hover:-translate-y-0.5"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>

        <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-[32px] border border-[var(--color-border)] bg-[var(--color-card)] p-7 shadow-[var(--shadow-card)] sm:p-9">
            <div className="mb-6 overflow-hidden rounded-[24px] bg-[var(--color-card-soft-2)] p-2 shadow-xl border border-[var(--color-border)]">
              <img
                className="w-full max-h-[460px] rounded-[20px] object-cover object-top"
                src={profilePhoto}
                alt="Rishav Kumar profile"
              />
            </div>
            <h1 className="text-[2.8rem] leading-[0.95] font-extrabold tracking-[-0.06em] sm:text-[3.8rem]">
              About me.
            </h1>
            <p className="mt-4 text-[1.08rem] leading-[2.1rem] text-[var(--color-body)]">
              I am a Software Engineering student at Acharya Institute of Technology, Bengaluru (B.E. Information Science, CGPA: 8.20).
              Specialized in building full-stack products, cloud infrastructure pipelines, and AI-driven automated systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-3 rounded-[18px] bg-gradient-to-r from-emerald-400 to-teal-500 px-7 py-3.5 text-[1rem] font-extrabold text-slate-950 shadow-lg transition hover:-translate-y-0.5"
              >
                <SendIcon />
                Contact me
              </button>
              <a
                href="https://github.com/rishav-026"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-[18px] border border-[var(--color-border)] bg-[var(--color-card-soft)] px-6 py-3.5 text-[0.98rem] font-bold text-[var(--color-text)] transition hover:-translate-y-0.5"
              >
                GitHub Profile
              </a>
            </div>
          </article>

          <article className="space-y-6">
            <div className="rounded-[32px] border border-[var(--color-border)] bg-[var(--color-card)] p-7 shadow-[var(--shadow-card)]">
              <p className="mb-3 text-[0.8rem] font-bold tracking-[0.28em] uppercase text-[var(--color-section-muted)]">
                Academic Background
              </p>
              <h3 className="text-xl font-bold text-[var(--color-text)]">B.E. Information Science and Engineering</h3>
              <p className="text-sm font-semibold text-emerald-400 mt-1">Acharya Institute of Technology, Bengaluru (2023 – 2027)</p>
              <p className="mt-2 text-sm text-[var(--color-body)] leading-relaxed">
                Academic CGPA: <strong className="text-[var(--color-text)]">8.20 / 10</strong>. Coursework covers Data Structures & Algorithms, Database Management Systems (DBMS), Computer Networks, Operating Systems, and Web Software Engineering.
              </p>
            </div>

            <div className="rounded-[32px] border border-[var(--color-border)] bg-[var(--color-card)] p-7 shadow-[var(--shadow-card)]">
              <p className="mb-3 text-[0.8rem] font-bold tracking-[0.28em] uppercase text-[var(--color-section-muted)]">
                What I do & Focus Areas
              </p>
              <p className="text-[1.02rem] leading-8 text-[var(--color-body)]">
                I build full-stack web products, automated cloud deployment pipelines, and AI-driven systems. Focused on clean system design, backend scalability, and high-performance interfaces.
              </p>
            </div>

            <div className="rounded-[32px] border border-[var(--color-border)] bg-[var(--color-card)] p-7 shadow-[var(--shadow-card)]">
              <p className="mb-4 text-[0.8rem] font-bold tracking-[0.28em] uppercase text-[var(--color-section-muted)]">
                Core Strengths & Tech Stack
              </p>
              <div className="flex flex-wrap gap-2.5">
                {[
                  "Full-stack development (React, Node.js)",
                  "Python & FastAPI",
                  "Java OOP & Algorithms",
                  "AWS & Docker Deployment",
                  "AI Workflows & LLM Orchestration",
                  "MySQL & MongoDB",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full bg-[var(--color-card-soft-strong)] border border-[var(--color-border)] px-3.5 py-1.5 text-xs font-semibold text-[var(--color-text)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-[var(--color-border)] bg-[var(--color-card)] p-7 shadow-[var(--shadow-card)]">
              <p className="mb-3 text-[0.8rem] font-bold tracking-[0.28em] uppercase text-[var(--color-section-muted)]">
                Quick links
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {profileLinks.map((link) => (
                  <SocialCard key={link.label} href={link.href} label={link.label} />
                ))}
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

function AboutCard() {
  return (
    <a
      href="#about"
      className="group block overflow-hidden rounded-[30px] border border-[var(--color-border)] bg-[var(--color-card)] p-5 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:bg-[var(--color-card-soft)]"
    >
      <div className="flex items-center gap-5 rounded-[24px] border border-[var(--color-border)] bg-[var(--color-card-soft)] p-5">
        <div className="relative shrink-0">
          <img
            src={profilePhoto}
            alt="Rishav Kumar"
            className="h-20 w-20 rounded-full object-cover object-center ring-2 ring-[var(--color-border)] transition duration-300 group-hover:scale-105"
          />
          <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full bg-emerald-500 border-2 border-[var(--color-card)]" />
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-[11px] uppercase tracking-[0.35em] font-semibold text-[var(--color-section-muted)]">
            ABOUT ME
          </p>

          <h2 className="mt-1 text-2xl font-bold text-[var(--color-text)]">
            Hi, I&apos;m Rishav Kumar 👋
          </h2>

          <p className="mt-2 text-sm leading-6 text-[var(--color-body)]">
            Software Engineering student passionate about building scalable backend systems, AI-powered applications, cloud-native products, and solving real-world problems.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-[var(--color-card-soft-strong)] px-3 py-1 text-xs font-medium text-[var(--color-text)]">
              Backend
            </span>
            <span className="rounded-full bg-[var(--color-card-soft-strong)] px-3 py-1 text-xs font-medium text-[var(--color-text)]">
              AI
            </span>
            <span className="rounded-full bg-[var(--color-card-soft-strong)] px-3 py-1 text-xs font-medium text-[var(--color-text)]">
              Cloud
            </span>
            <span className="rounded-full bg-[var(--color-card-soft-strong)] px-3 py-1 text-xs font-medium text-[var(--color-text)]">
              DevOps
            </span>
          </div>
        </div>

        <div className="hidden sm:flex items-center rounded-full bg-[var(--color-button)] px-5 py-3 text-sm font-bold text-[var(--color-button-text)] transition-all duration-300 group-hover:scale-105">
          View →
        </div>
      </div>
    </a>
  );
}

function SkillChip({ name, iconSrc }) {
  const [imgError, setImgError] = useState(false);

  return (
    <span className="inline-flex min-h-10 shrink-0 items-center gap-2 whitespace-nowrap rounded-[14px] border border-[var(--color-border)] bg-[var(--color-card-soft-2)] px-3 py-2 text-[0.9rem] font-semibold text-[var(--color-text)]">
      {iconSrc && !imgError ? (
        <img
          className="h-5 w-5 shrink-0"
          src={iconSrc}
          alt=""
          aria-hidden="true"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="grid h-5 w-5 place-items-center rounded-[4px] bg-[rgba(255,255,255,0.06)] text-[0.68rem] font-black">
          {techBadgeFor(name)}
        </span>
      )}
      <span>{name}</span>
    </span>
  );
}

function InlineBadge({ children, tone = "neutral" }) {
  const tones = {
    neutral: "border-white/10 bg-white/[0.04] text-zinc-100",
    emerald: "border-emerald-400/20 bg-emerald-500/8 text-emerald-200",
    sky: "border-sky-400/20 bg-sky-500/8 text-sky-200",
    green: "border-emerald-400/20 bg-emerald-500/8 text-emerald-200",
    teal: "border-teal-400/20 bg-teal-500/8 text-teal-200",
    orange: "border-orange-400/20 bg-orange-500/8 text-orange-200",
    blue: "border-blue-400/20 bg-blue-500/8 text-blue-200",
    indigo: "border-indigo-400/20 bg-indigo-500/8 text-indigo-200",
  };

  return (
    <span className={`mx-1 inline-flex items-center rounded-[12px] border px-3 py-1.5 text-[0.98rem] font-bold ${tones[tone]}`}>
      {children}
    </span>
  );
}

function SocialCard({ href, label }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group flex min-h-[124px] flex-col items-center justify-center rounded-[18px] border border-[var(--color-border)] bg-[var(--color-card-soft-2)] text-[var(--color-section-muted)] transition duration-300 hover:-translate-y-0.5 hover:border-white/10 hover:bg-[var(--color-card-soft-strong)] hover:text-[var(--color-text)]"
    >
      <span className="text-[0.95rem] font-semibold">{label}</span>
      <span className="mt-2 text-[0.82rem]">Open</span>
    </a>
  );
}

function techBadgeFor(name) {
  const badges = {
    Java: "J",
    Python: "Py",
    JavaScript: "JS",
    React: "R",
    "Node.js": "N",
    Express: "Ex",
    FastAPI: "FA",
    AWS: "A",
    Docker: "D",
    Git: "G",
    GitHub: "GH",
    "Linux (Ubuntu)": "L",
    "VS Code": "VS",
    LaTeX: "Lx",
    Postman: "PM",
    "TCP/IP": "TCP",
    "HTTP/HTTPS": "HTTP",
    DNS: "DNS",
    "Computer Networks": "CN",
    MySQL: "My",
    MongoDB: "MDB",
  };
  return badges[name] || name.slice(0, 2).toUpperCase();
}

function InteractivePanel({ title, items, onOpenCredential }) {
  return (
    <article className="rounded-[28px] border border-[var(--color-border)] bg-[var(--color-card)] p-7 transition-colors duration-300">
      <p className="mb-4 text-[0.8rem] font-bold tracking-[0.22em] uppercase text-[var(--color-section-muted)] transition-colors duration-300 flex items-center justify-between">
        <span>{title}</span>
        <span className="text-[10px] text-emerald-400 font-mono">Click to inspect</span>
      </p>
      <div className="space-y-3">
        {items.map((item) => (
          <button
            key={item.title}
            onClick={() => onOpenCredential(item)}
            className="flex w-full items-center justify-between gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card-soft-2)] p-4 text-left transition hover:scale-[1.01] hover:bg-[var(--color-card-soft-strong)] hover:border-emerald-500/30"
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">{item.icon}</span>
              <div>
                <h4 className="text-sm font-bold text-[var(--color-text)]">{item.title}</h4>
                <p className="text-xs text-[var(--color-section-muted)] mt-0.5">{item.issuer}</p>
              </div>
            </div>
            <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0 opacity-70" />
          </button>
        ))}
      </div>
    </article>
  );
}

function Footer({ onOpenResume, onOpenContact, onOpenRecruiterCard, onOpenAiWidget }) {
  return (
    <footer className="mt-28 border-t border-[var(--color-border)] pt-12 pb-8 font-sans">
      {/* Top CTA Banner */}
      <div className="relative overflow-hidden rounded-[32px] border border-emerald-500/30 bg-[var(--color-card)] p-8 sm:p-10 shadow-2xl backdrop-blur-xl mb-16">
        <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -left-10 -bottom-10 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold text-emerald-400 mb-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for Hire</span>
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-text)] tracking-tight">
              Let&apos;s build something extraordinary together 🚀
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-[var(--color-body)] leading-relaxed">
              Open for Full-Stack Web Development, Cloud DevOps & Multi-Agent AI Engineering roles.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 px-6 py-3 text-xs font-extrabold text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
            >
              <SendIcon />
              <span>Let&apos;s Connect</span>
            </button>

            <button
              onClick={onOpenRecruiterCard}
              className="inline-flex items-center gap-2 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-5 py-3 text-xs font-extrabold text-emerald-400 transition hover:bg-emerald-500/20 hover:scale-105"
            >
              <span>📱 Recruiter Cheat Sheet</span>
            </button>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card-soft-2)] px-5 py-3 text-xs font-bold text-[var(--color-text)] transition hover:bg-[var(--color-card-soft-strong)] hover:scale-105"
            >
              <FileText className="h-4 w-4 text-amber-400" />
              <span>Resume PDF</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Multi-Column Grid */}
      <div className="grid gap-10 md:grid-cols-12 lg:gap-12">
        {/* Column 1: Brand & Profile Info (5 cols) */}
        <div className="md:col-span-6 lg:col-span-5 space-y-4">
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-black bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent tracking-tight">
              Rishav Kumar
            </h3>
            <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 text-[10px] font-extrabold text-emerald-400">
              🟢 Active
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[var(--color-body)] leading-relaxed max-w-md">
            Software Engineering Student @ Acharya Institute of Technology, Bengaluru (B.E. ISE, CGPA: 8.20). Building full-stack deployment platforms, DevOps AI incident diagnosis tools, and multi-agent verification systems.
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            <span className="rounded-full bg-[var(--color-card-soft-strong)] border border-[var(--color-border)] px-3 py-1 text-[11px] font-bold text-[var(--color-text)]">
              💻 150+ DSA Solved (Java)
            </span>
            <span className="rounded-full bg-[var(--color-card-soft-strong)] border border-[var(--color-border)] px-3 py-1 text-[11px] font-bold text-[var(--color-text)]">
              🏆 2× State Hackathon Winner
            </span>
            <span className="rounded-full bg-[var(--color-card-soft-strong)] border border-[var(--color-border)] px-3 py-1 text-[11px] font-bold text-[var(--color-text)]">
              📜 Oracle AI Certified
            </span>
          </div>
        </div>

        {/* Column 2: Quick Links (3 cols) */}
        <div className="md:col-span-3 lg:col-span-3 space-y-3">
          <h4 className="text-xs font-extrabold uppercase tracking-widest text-[var(--color-section-muted)]">
            Quick Navigation
          </h4>
          <ul className="space-y-2 text-xs font-semibold text-[var(--color-body)]">
            <li>
              <a href="#projects" className="transition hover:text-emerald-400 flex items-center gap-2">
                <span>🚀</span> <span>Featured Projects</span>
              </a>
            </li>
            <li>
              <a href="#journey" className="transition hover:text-emerald-400 flex items-center gap-2">
                <span>🗓️</span> <span>Developer Journey</span>
              </a>
            </li>
            <li>
              <button onClick={onOpenAiWidget} className="transition hover:text-emerald-400 flex items-center gap-2 text-left">
                <span>🤖</span> <span>Ask Portfolio AI</span>
              </button>
            </li>
            <li>
              <button onClick={onOpenRecruiterCard} className="transition hover:text-emerald-400 flex items-center gap-2 text-left">
                <span>📱</span> <span>Recruiter Cheat Sheet</span>
              </button>
            </li>
            <li>
              <button onClick={onOpenResume} className="transition hover:text-emerald-400 flex items-center gap-2 text-left">
                <span>📄</span> <span>View Resume (PDF)</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Connect & Social Channels (4 cols) */}
        <div className="md:col-span-3 lg:col-span-4 space-y-3">
          <h4 className="text-xs font-extrabold uppercase tracking-widest text-[var(--color-section-muted)]">
            Connect & Socials
          </h4>
          <ul className="space-y-2.5 text-xs font-medium text-[var(--color-body)]">
            <li>
              <a href="mailto:rishavkumar7034@gmail.com" className="transition hover:text-emerald-400 flex items-center gap-2">
                <span className="text-emerald-400">📧</span>
                <span>rishavkumar7034@gmail.com</span>
              </a>
            </li>
            <li>
              <a href="tel:+916204627879" className="transition hover:text-emerald-400 flex items-center gap-2">
                <span className="text-emerald-400">📞</span>
                <span>+91 6204627879 (India)</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/rishav-026" target="_blank" rel="noreferrer" className="transition hover:text-emerald-400 flex items-center gap-2">
                <span className="text-emerald-400">💻</span>
                <span>GitHub (@rishav-026)</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/rishavkumar12/" target="_blank" rel="noreferrer" className="transition hover:text-emerald-400 flex items-center gap-2">
                <span className="text-emerald-400">🔗</span>
                <span>LinkedIn (@rishavkumar12)</span>
              </a>
            </li>
            <li>
              <a href="https://leetcode.com/u/rishav1kr/" target="_blank" rel="noreferrer" className="transition hover:text-emerald-400 flex items-center gap-2">
                <span className="text-amber-400">🧩</span>
                <span>LeetCode (@rishav1kr)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright & Credit Bar */}
      <div className="mt-12 flex flex-col gap-3 border-t border-[var(--color-border)] pt-6 text-xs text-[var(--color-section-muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Rishav Kumar. All rights reserved.</p>
        <p className="flex items-center gap-1.5 font-medium">
          <span>Engineered with React</span> • <span>Tailwind CSS</span> • <span>Vite</span> • <span className="text-emerald-400 font-bold">Sub-100ms Speed ⚡</span>
        </p>
      </div>
    </footer>
  );
}

function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
      <path d="M14 6 8 12l6 6" />
      <path d="M8 12h12" />
    </svg>
  );
}

function ArrowBracketIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
      <path d="M9 6 3 12l6 6" />
      <path d="M15 6h6" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
      <path d="M21 12.79A9 9 0 1 1 11.21 3c0 .28 0 .57.02.85A7 7 0 0 0 20.15 12c.28 0 .57 0 .85-.02Z" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current">
      <path d="M12 2.5 14.2 9l6.3 1.2-5 4.4 1 6.4L12 17.7 7.5 21l1-6.4-5-4.4L9.8 9 12 2.5Z" />
    </svg>
  );
}

function getRouteFromHash() {
  const hash = window.location.hash.replace(/^#/, "");
  if (hash.startsWith("project/")) return { type: "project", projectSlug: hash.replace("project/", "") };
  if (hash === "about") return { type: "about" };
  return { type: "home" };
}

export default App;
