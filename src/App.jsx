import { useEffect, useMemo, useRef, useState } from "react";
import profilePhoto from "../assets/profile/photo.jpeg";
import GitHubActivitySection from "./Components/GitHubActivitySection";


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
      { name: "AWS", iconSrc: "https://cdn.simpleicons.org/amazonaws" },
      { name: "Docker", iconSrc: "https://cdn.simpleicons.org/docker" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", iconSrc: "https://cdn.simpleicons.org/git" },
      { name: "GitHub", iconSrc: "https://cdn.simpleicons.org/github" },
      { name: "Linux (Ubuntu)", iconSrc: "https://cdn.simpleicons.org/ubuntu" },
      { name: "VS Code", iconSrc: "https://cdn.simpleicons.org/visualstudiocode" },
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

const projects = [
  {
    slug: "vercel-clone",
    title: "Vercel Clone",
    period: "Mar 2026",
    subtitle: "Full-Stack Deployment Platform",
    summary:
      "A Vercel-like deployment platform with automated builds, Docker isolation, AWS integrations, and a dashboard for deployment logs.",
    stack: ["React", "Node.js", "Docker", "AWS", "CI/CD"],
    highlights: [
      "Built a real-time build pipeline that reduced deployment from 5+ manual steps to a single automated process.",
      "Implemented Docker-based deployments supporting multiple isolated containers.",
      "Integrated AWS ECS, ECR, and S3 for scalable deployment and storage.",
      "Designed a dashboard for managing projects, deployments, and logs.",
    ],
    github: "https://github.com/rishav-026/Vercel-clone",
    role: "Full-stack developer",
  },
  {
    slug: "infraledger",
    title: "InfraLedger",
    period: "Mar 2026",
    subtitle: "Infrastructure Transparency Platform",
    summary:
      "A full-stack transparency platform with role-based dashboards, blockchain-backed records, and IPFS document verification.",
    stack: ["React", "Node.js", "Express", "TypeScript", "Prisma", "Polygon", "IPFS"],
    highlights: [
      "Supported 3 user roles: government, contractors, and citizens with role-based dashboards.",
      "Stored 100+ transaction records on Polygon to keep infrastructure records tamper-resistant.",
      "Handled 50+ project documents on IPFS with CID-based verification.",
      "Designed a risk scoring system analyzing 5+ parameters to detect fund-usage anomalies.",
    ],
    github: "https://github.com/rishav-026/INFRA-LEDGAR",
    role: "Full-stack developer",
  },
  {
    slug: "civic-sim",
    title: "Civic Sim",
    period: "Jul 2025",
    subtitle: "AI-Powered Civic Transparency Platform",
    summary:
      "An AI platform for civic transparency with OCR, ML, and dashboards for tracking data fields and anomaly detection.",
    stack: ["Python", "React", "FastAPI", "OCR", "ML"],
    highlights: [
      "Led development of an AI platform achieving 90%+ OCR accuracy on 100+ documents.",
      "Built real-time dashboards tracking 10+ data fields for fund allocation and anomaly detection.",
      "Processed multiple datasets using ML models to identify corruption patterns.",
      "Winner of Srujana Hackathon 2025.",
    ],
    github: "https://github.com/Rishabh-afk-beep/Civic-Sim",
    role: "Project lead",
  },
  {
    slug: "sarkaar-sarthi",
    title: "Sarkaar Sarthi",
    period: "2026",
    subtitle: "Citizen Services Workflow Platform",
    summary:
      "A citizen-service assistant that guides users through schemes, applications, document checklists, and status tracking.",
    stack: ["React", "Node.js", "Express", "MySQL"],
    highlights: [
      "Organizes government service flows into a clean step-by-step user journey.",
      "Tracks application status, required documents, and follow-up actions in one dashboard.",
      "Built for the same clarity-first UX style you use across your portfolio work.",
    ],
    github: "https://github.com/rishav-026/SARKAAR-SAARTHI",
    role: "Full-stack builder",
  },
  {
    slug: "devops-incident-analyzer",
    title: "DevOps Incident Analyzer",
    period: "2026",
    subtitle: "Incident Triage & Root Cause Platform",
    summary:
      "A DevOps tool for ingesting logs, clustering incidents, surfacing probable causes, and suggesting remediation steps.",
    stack: ["Python", "Node.js", "AWS", "Docker", "GitHub"],
    highlights: [
      "Helps sort incidents by severity and likely blast radius.",
      "Turns log noise into structured summaries for faster triage.",
      "Designed for teams that need quick root-cause visibility during active outages.",
    ],
    github: "https://github.com/rishav-026/Gamified-Coding_platform",
    role: "Systems-focused developer",
  },
  {
    slug: "invoice-processing-tool",
    title: "Invoice Processing Tool",
    period: "2026",
    subtitle: "OCR Invoice Automation",
    summary:
      "An OCR-driven pipeline for extracting invoice fields, validating line items, and preparing structured outputs for finance systems.",
    stack: ["Python", "FastAPI", "OCR", "MySQL"],
    highlights: [
      "Extracts vendor, invoice, date, and amount fields from document scans.",
      "Validates rows and line items before export to downstream systems.",
      "Built to reduce manual data entry in billing workflows.",
    ],
    github: "https://github.com/rishav-026/Invoice_Processing",
    role: "Automation builder",
  },
  {
    slug: "career-prediction",
    title: "Career Prediction",
    period: "2026",
    subtitle: "Skill-to-Career Guidance System",
    summary:
      "A lightweight guidance tool that maps profiles and skills to career paths, strengths, and next-step recommendations.",
    stack: ["Python", "React", "ML", "Node.js"],
    highlights: [
      "Matches skills to possible career paths with explainable recommendations.",
      "Highlights strengths, gaps, and suggested learning milestones.",
      "Useful for student guidance and early-career planning.",
    ],
    github: "https://github.com/rishav-026/Career-Predictor-Project",
    role: "ML-assisted developer",
  },
];

const achievements = [
  "🏆 Winner - Srujana Hackathon 2025",
  "🥉 3rd Place - ImpactX'25",
  "💻 Solved 150+ DSA Problems in Java",
  "🚀 Built 8+ Full Stack & AI Projects",
];

const certificates = [
  "Introduction to Prompt Engineering & Generative AI - LinkedIn Learning",
  "AI Foundation Associates - Oracle",
  "Introduction to LLM  - LinkedIn Learning",
];

const education = [
  "Acharya Institute of Technology, Bangalore",
  "B.E. in Information Science and Engineering",
  "CGPA: 8.2 | 2023 - 2027 (Expected)",
  "Class 12, Vidya Niketan School, Patna - 66%",
  "Class 10, Vidya Niketan School, Patna - 84%",
];

const profileLinks = [
  { label: "GitHub", href: "https://github.com/rishav-026" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rishavkumar12/" },
  { label: "Email", href: "mailto:rishavkumar7034@gmail.com" },
  { label: "Phone", href: "tel:+916204627879" },
];

const githubContributionsApi = "https://github-contributions-api.jogruber.de/v4/rishav-026";
const githubProfileUrl = "https://github.com/rishav-026";
const heroRoles = ["Full Stack Developer", "Web Developer", "AI Engineer"];

function App() {
  const [time, setTime] = useState("");
  const [route, setRoute] = useState(getRouteFromHash);
  const [heroRoleIndex, setHeroRoleIndex] = useState(0);
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

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setHeroRoleIndex((currentIndex) => (currentIndex + 1) % heroRoles.length);
    }, 2200);
    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
    const syncRoute = () => setRoute(getRouteFromHash());
    syncRoute();
    window.addEventListener("hashchange", syncRoute);
    return () => window.removeEventListener("hashchange", syncRoute);
  }, [theme]);

  const selectedProject = useMemo(() => {
    if (route.type !== "project") return null;
    return projects.find((project) => project.slug === route.projectSlug) || null;
  }, [route]);

  useEffect(() => {
    if (route.type === "about") {
      document.title = "About Rishav Kumar | Portfolio";
      return;
    }

    document.title = selectedProject ? `${selectedProject.title} | Rishav Kumar` : "Rishav Kumar | Portfolio";
  }, [route.type, selectedProject]);

  const toggleTheme = () => setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));

  if (route.type === "project" && selectedProject) {
    return (
      <ProjectDetailPage
        project={selectedProject}
        theme={theme}
        onToggleTheme={toggleTheme}
        onBack={() => {
          window.location.hash = "";
        }}
      />
    );
  }

  if (route.type === "about") {
    return <AboutPage theme={theme} onToggleTheme={toggleTheme} onBack={() => { window.location.hash = ""; }} />;
  }

  return <PortfolioHome time={time} theme={theme} onToggleTheme={toggleTheme} heroRole={heroRoles[heroRoleIndex]} />;
}

function PortfolioHome({ time, theme, onToggleTheme, heroRole }) {
  return (
    <div className="min-h-screen bg-transparent text-[var(--color-text)] transition-colors duration-300">
      <div className="pointer-events-none fixed inset-0 border-t-[10px] border-[var(--color-topbar)]" />
      <div className="pointer-events-none fixed inset-y-0 right-0 w-[32vw] bg-[radial-gradient(circle_at_top,var(--color-right-glow),transparent_60%)]" />

      <main className="mx-auto w-[min(1320px,calc(100%-32px))] pb-16 pt-14 sm:pt-20">
        <header className="mb-10 flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
          <div className="min-w-0 flex-1">
            <h1 className="max-w-[980px] text-[2.35rem] leading-[0.94] font-extrabold tracking-[-0.06em] sm:text-[3.9rem] xl:text-[4.2rem] 2xl:text-[4.45rem]">
              <span className="whitespace-nowrap">Hi, I&apos;m Rishav — </span>
              <span key={heroRole} className="role-swap text-[var(--color-title-muted)] transition-colors duration-300">{heroRole}</span>
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onToggleTheme}
              className="grid h-11 w-11 place-items-center rounded-full border border-[var(--color-border)] bg-[var(--color-card-soft)] text-[var(--color-text)] transition hover:-translate-y-0.5"
              aria-label="Toggle light and dark theme"
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </header>

        <section className="grid gap-5 xl:grid-cols-[1.95fr_0.88fr]">
          <article className="rounded-[30px] border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-[var(--shadow-card)] transition-colors duration-300 sm:p-7">
            <div className="mb-8 flex items-start justify-between">
              <img className="h-44 w-44 rounded-[26px] object-cover object-top" src={profilePhoto} alt="Rishav Kumar avatar" />
              <div className="mt-3 text-[var(--color-icon-strong)] transition-colors duration-300"><SparkIcon /></div>
            </div>

            <h2 className="mb-4 text-[3rem] leading-none font-extrabold tracking-[-0.05em]">About me.</h2>
            <p className="max-w-[760px] text-[1.05rem] leading-[2.15rem] text-[var(--color-body)] transition-colors duration-300">
              I build production-ready web and AI applications using <InlineBadge tone="blue">Java</InlineBadge>, <InlineBadge tone="sky">Python</InlineBadge>, <InlineBadge tone="neutral">JavaScript</InlineBadge>, <InlineBadge tone="green">React</InlineBadge>, and <InlineBadge tone="teal">Node.js</InlineBadge>  — focused on clean UX and real user impact.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
  <a
    href="mailto:rishavkumar7034@gmail.com"
    className="inline-flex items-center gap-3 rounded-[18px]
    border border-[var(--color-border)]
    bg-[var(--color-card)]
    px-8 py-4
    text-[1.15rem]
    font-extrabold
    text-[var(--color-text)]
    no-underline
    shadow-[var(--shadow-card)]
    transition-all duration-300
    hover:-translate-y-1
    hover:bg-[var(--color-card-soft)]"
  >
    <SendIcon />
    <span>Let&apos;s Connect</span>
  </a>

  <a
    href="#projects"
    className="inline-flex items-center rounded-[18px]
    border border-[var(--color-border)]
    bg-[var(--color-card-soft)]
    px-7 py-4
    text-[1.05rem]
    font-bold
    text-[var(--color-text)]
    transition-all duration-300
    hover:-translate-y-1
    hover:bg-[var(--color-card)]"
  >
    View Projects
  </a>
</div>
          </article>

          <aside className="rounded-[30px] border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-[var(--shadow-card)] transition-colors duration-300 sm:p-7 lg:row-span-2">
            <div className="mb-6 flex items-center gap-3 text-[var(--color-section-muted)] transition-colors duration-300">
              <ArrowBracketIcon />
              <p className="text-[0.95rem] font-bold tracking-[0.22em] uppercase">Technical Skills</p>
            </div>
            <div className="space-y-7">
              {skillsGroups.map((group) => (
                <div key={group.title}>
                  <p className="mb-3 text-[0.72rem] font-bold tracking-[0.28em] uppercase text-[var(--color-section-soft)] transition-colors duration-300">{group.title}</p>
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

        <GitHubActivitySection />

        <section className="mt-24" id="projects">
          <SectionTitle icon={<BookIcon />} title="Featured Projects" description="Only your own projects from GitHub, with clickable detail pages for each one." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <section className="mt-24 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <InfoPanel title="Achievements" items={achievements} />
          <InfoPanel title="Certificates" items={certificates} />
        </section>

        <Footer />
      </main>
    </div>
  );
}

function ProjectDetailPage({ project, onBack, theme, onToggleTheme }) {
  return (
    <div className="min-h-screen bg-transparent text-[var(--color-text)] transition-colors duration-300">
      <div className="pointer-events-none fixed inset-0 border-t-[10px] border-[var(--color-topbar)]" />
      <div className="pointer-events-none fixed inset-y-0 right-0 w-[32vw] bg-[radial-gradient(circle_at_top,var(--color-right-glow),transparent_60%)]" />

      <main className="mx-auto w-[min(1320px,calc(100%-32px))] pb-16 pt-14 sm:pt-20">
        <div className="mb-8 flex items-center justify-between gap-4">
          <button type="button" onClick={onBack} className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-5 py-3 text-[0.95rem] font-semibold text-[var(--color-text)] transition hover:-translate-y-0.5">
            <ArrowLeftIcon />
            Back to projects
          </button>
          <div className="flex items-center gap-3">
            <a href="mailto:rishavkumar7034@gmail.com" className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-5 py-3 text-[0.95rem] font-semibold text-[var(--color-text)] transition hover:-translate-y-0.5">Contact</a>
            <button type="button" onClick={onToggleTheme} className="grid h-11 w-11 place-items-center rounded-full border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-text)] transition hover:-translate-y-0.5" aria-label="Toggle light and dark theme">
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>

        <section className="grid gap-6 xl:grid-cols-[1.5fr_0.85fr]">
          <article className="rounded-[32px] border border-[var(--color-border)] bg-[var(--color-card)] p-7 shadow-[var(--shadow-card)] sm:p-9">
            <p className="mb-3 text-[0.8rem] font-bold tracking-[0.28em] uppercase text-[var(--color-section-muted)]">{project.period} • {project.role}</p>
            <h1 className="text-[2.8rem] leading-[0.95] font-extrabold tracking-[-0.06em] sm:text-[4rem]">{project.title}</h1>
            <p className="mt-4 max-w-3xl text-[1.15rem] leading-[2.1rem] text-[var(--color-body)]">{project.summary}</p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {project.stack.map((item) => <ProjectTag key={item}>{item}</ProjectTag>)}
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {project.highlights.map((item) => (
                <div key={item} className="rounded-[22px] border border-[var(--color-border)] bg-[var(--color-card-soft-2)] p-5 text-[1rem] leading-8 text-[var(--color-body)]">{item}</div>
              ))}
            </div>
          </article>

          <aside className="space-y-6">
            <article className="rounded-[32px] border border-[var(--color-border)] bg-[var(--color-card)] p-7 shadow-[var(--shadow-card)]">
              <p className="mb-3 text-[0.8rem] font-bold tracking-[0.28em] uppercase text-[var(--color-section-muted)]">Project Summary</p>
              <p className="text-[1.02rem] leading-8 text-[var(--color-body)]">This page shows the project as a dedicated detail view so each card opens into its own focused page.</p>
            </article>
            <article className="rounded-[32px] border border-[var(--color-border)] bg-[var(--color-card)] p-7 shadow-[var(--shadow-card)]">
              <p className="mb-3 text-[0.8rem] font-bold tracking-[0.28em] uppercase text-[var(--color-section-muted)]">GitHub</p>
              <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[1rem] font-semibold text-[var(--color-text)] transition hover:opacity-80">
                Open GitHub repo
                <ArrowUpRightIcon />
              </a>
            </article>
          </aside>
        </section>
      </main>
    </div>
  );
}

function AboutPage({ theme, onToggleTheme, onBack }) {
  return (
    <div className="min-h-screen bg-transparent text-[var(--color-text)] transition-colors duration-300">
      <div className="pointer-events-none fixed inset-0 border-t-[10px] border-[var(--color-topbar)]" />
      <div className="pointer-events-none fixed inset-y-0 right-0 w-[32vw] bg-[radial-gradient(circle_at_top,var(--color-right-glow),transparent_60%)]" />

      <main className="mx-auto w-[min(1320px,calc(100%-32px))] pb-16 pt-14 sm:pt-20">
        <div className="mb-8 flex items-center justify-between gap-4">
          <button type="button" onClick={onBack} className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-5 py-3 text-[0.95rem] font-semibold text-[var(--color-text)] transition hover:-translate-y-0.5">
            <ArrowLeftIcon />
            Back to home
          </button>
          <button type="button" onClick={onToggleTheme} className="grid h-11 w-11 place-items-center rounded-full border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-text)] transition hover:-translate-y-0.5" aria-label="Toggle light and dark theme">
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>

        <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-[32px] border border-[var(--color-border)] bg-[var(--color-card)] p-7 shadow-[var(--shadow-card)] sm:p-9">
            <div className="mb-6 overflow-hidden rounded-[28px] bg-[#f8fafc] p-4 shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
              <img className="h-[380px] w-full rounded-[24px] object-cover object-top" src={profilePhoto} alt="Rishav Kumar avatar" />
            </div>
            <h1 className="text-[2.8rem] leading-[0.95] font-extrabold tracking-[-0.06em] sm:text-[4rem]">About me.</h1>
            <p className="mt-4 text-[1.08rem] leading-[2.1rem] text-[var(--color-body)]">
              I design and build clean, practical digital products across web, automation, and AI. I care about fast interfaces, clear structure, and work that feels polished without losing usefulness.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="mailto:rishavkumar7034@gmail.com" className="inline-flex items-center gap-3 rounded-[18px] border border-white/20 bg-[#f8fafc] px-6 py-3 text-[0.98rem] font-extrabold text-slate-900 shadow-[0_16px_35px_rgba(15,23,42,0.22)] transition hover:-translate-y-0.5">
                <SendIcon />
                Contact me
              </a>
              <a href="https://github.com/rishav-026" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-[18px] border border-[var(--color-border)] bg-[var(--color-card-soft)] px-6 py-3 text-[0.98rem] font-bold text-[var(--color-text)] transition hover:-translate-y-0.5">
                GitHub profile
              </a>
            </div>
          </article>

          <article className="space-y-6">
            <div className="rounded-[32px] border border-[var(--color-border)] bg-[var(--color-card)] p-7 shadow-[var(--shadow-card)]">
              <p className="mb-3 text-[0.8rem] font-bold tracking-[0.28em] uppercase text-[var(--color-section-muted)]">What I do</p>
              <p className="text-[1.02rem] leading-8 text-[var(--color-body)]">I build full-stack products, developer tools, and AI-driven interfaces with a focus on clean execution and practical value.</p>
            </div>

            <div className="rounded-[32px] border border-[var(--color-border)] bg-[var(--color-card)] p-7 shadow-[var(--shadow-card)]">
              <p className="mb-4 text-[0.8rem] font-bold tracking-[0.28em] uppercase text-[var(--color-section-muted)]">Core strengths</p>
              <div className="flex flex-wrap gap-2.5">
                {[
                  "Full-stack development",
                  "UI systems",
                  "Automation",
                  "AI workflows",
                  "Deployment",
                  "Product design",
                ].map((item) => <ProjectTag key={item}>{item}</ProjectTag>)}
              </div>
            </div>

            <div className="rounded-[32px] border border-[var(--color-border)] bg-[var(--color-card)] p-7 shadow-[var(--shadow-card)]">
              <p className="mb-3 text-[0.8rem] font-bold tracking-[0.28em] uppercase text-[var(--color-section-muted)]">Quick links</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {profileLinks.map((link) => <SocialCard key={link.label} href={link.href} label={link.label} />)}
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
      className="group block overflow-hidden rounded-[30px]
      border border-[var(--color-border)]
      bg-[var(--color-card)]
      p-5
      shadow-[var(--shadow-card)]
      transition-all duration-300
      hover:-translate-y-1
      hover:border-white/10
      hover:bg-[var(--color-card-soft)]"
    >
      <div
        className="flex items-center gap-5 rounded-[24px]
        border border-[var(--color-border)]
        bg-[var(--color-card-soft)]
        p-5"
      >
        {/* Profile Image */}
        <div className="relative shrink-0">
          <img
            src={profilePhoto}
            alt="Rishav Kumar"
            className="h-20 w-20 rounded-full object-cover object-center
            ring-2 ring-[var(--color-border)]
            transition duration-300 group-hover:scale-105"
          />

          <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full bg-emerald-500 border-2 border-[var(--color-card)]"></span>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <p
            className="text-[11px]
            uppercase
            tracking-[0.35em]
            font-semibold
            text-[var(--color-section-muted)]"
          >
            ABOUT ME
          </p>

          <h2
            className="mt-1
            text-2xl
            font-bold
            text-[var(--color-text)]"
          >
            Hi, I'm Rishav Kumar 👋
          </h2>

          <p
            className="mt-2
            text-sm
            leading-6
            text-[var(--color-body)]"
          >
            Software Engineering student passionate about building scalable
            backend systems, AI-powered applications, cloud-native products,
            and solving real-world problems.
          </p>

          {/* Badges */}

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

          {/* Achievements */}

          <div className="mt-4 flex flex-wrap gap-5 text-sm text-[var(--color-body)]">

            <div>
              🏆 <span className="font-semibold">2× Hackathon Winner</span>
            </div>

            <div>
              🥉 <span className="font-semibold">ImpactX'25 Finalist</span>
            </div>

          </div>
        </div>

        {/* CTA */}

        <div
          className="hidden sm:flex
          items-center
          rounded-full
          bg-[var(--color-button)]
          px-5
          py-3
          text-sm
          font-bold
          text-[var(--color-button-text)]
          transition-all
          duration-300
          group-hover:scale-105"
        >
          View →
        </div>
      </div>
    </a>
  );
}

function ProjectCard({ project }) {
  return (
    <a href={`#project/${project.slug}`} className="group rounded-[28px] border border-[var(--color-border)] bg-[var(--color-card)] p-7 transition duration-300 hover:-translate-y-0.5">
      <div className="mb-3 flex items-start justify-between gap-4">
        <div>
          <p className="mb-2 text-[0.72rem] font-bold tracking-[0.28em] uppercase text-[var(--color-section-muted)]">{project.period}</p>
          <h3 className="text-[2rem] leading-tight font-extrabold tracking-[-0.05em]">{project.title}</h3>
          <p className="mt-1 text-[0.95rem] font-semibold text-[var(--color-section-muted)]">{project.subtitle}</p>
        </div>
        <span className="text-[var(--color-section-muted)] transition group-hover:text-[var(--color-text)]"><ArrowUpRightIcon /></span>
      </div>
      <p className="min-h-32 text-[1.02rem] leading-8 text-[var(--color-body)] transition-colors duration-300">{project.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">{project.stack.map((item) => <ProjectTag key={item}>{item}</ProjectTag>)}</div>
    </a>
  );
}

function ProjectTag({ children }) {
  return <span className="inline-flex items-center rounded-full bg-[var(--color-card-soft)] px-2.5 py-1 text-[0.82rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-section-muted)] transition-colors duration-300">{children}</span>;
}

function SkillChip({ name, iconSrc }) {
  return (
    <span className="inline-flex min-h-10 shrink-0 items-center gap-2 whitespace-nowrap rounded-[14px] border border-[var(--color-border)] bg-[var(--color-card-soft-2)] px-3 py-2 text-[0.9rem] font-semibold text-[var(--color-text)]">
      {iconSrc ? <img className="h-5 w-5 shrink-0" src={iconSrc} alt="" aria-hidden="true" /> : <span className="grid h-5 w-5 place-items-center rounded-[4px] bg-[rgba(255,255,255,0.06)] text-[0.68rem] font-black">{techBadgeFor(name)}</span>}
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

  return <span className={`mx-1 inline-flex items-center rounded-[12px] border px-3 py-1.5 text-[0.98rem] font-bold ${tones[tone]}`}>{children}</span>;
}

function SocialCard({ href, label }) {
  const external = href.startsWith("http");
  return (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className="group flex min-h-[124px] flex-col items-center justify-center rounded-[18px] border border-[var(--color-border)] bg-[var(--color-card-soft-2)] text-[var(--color-section-muted)] transition duration-300 hover:-translate-y-0.5 hover:border-white/10 hover:bg-[var(--color-card-soft-strong)] hover:text-[var(--color-text)]">
      <span className="text-[0.95rem] font-semibold">{label}</span>
      <span className="mt-2 text-[0.82rem]">Open</span>
    </a>
  );
}

<GitHubActivitySection />

function makeTooltip(target, cell) {
  const rect = target.getBoundingClientRect();
  return {
    date: cell.date,
    count: cell.count,
    x: rect.left + rect.width / 2 + window.scrollX,
    y: rect.top + window.scrollY,
  };
}

function formatTooltipDate(date) {
  return new Date(date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

function levelToColor(level) {
  switch (level) {
    case 4: return "bg-[#39D353]";
    case 3: return "bg-[#26A641]";
    case 2: return "bg-[#006D32]";
    case 1: return "bg-[#0E4429]";
    default: return "bg-[var(--color-gh-zero)]";
  }
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

function SectionTitle({ icon, title, description }) {
  return (
    <div>
      <div className="flex items-center gap-4">
        <span className="text-[var(--color-section-muted)] transition-colors duration-300">{icon}</span>
        <h2 className="text-[3rem] leading-none font-extrabold tracking-[-0.05em]">{title}</h2>
      </div>
      <p className="mt-3 text-[1.05rem] text-[var(--color-section-muted)] transition-colors duration-300">{description}</p>
    </div>
  );
}

function InfoPanel({ title, items }) {
  return (
    <article className="rounded-[28px] border border-[var(--color-border)] bg-[var(--color-card)] p-7 transition-colors duration-300">
      <p className="mb-4 text-[0.8rem] font-bold tracking-[0.22em] uppercase text-[var(--color-section-muted)] transition-colors duration-300">{title}</p>
      <ul className="space-y-3 text-[1rem] leading-8 text-[var(--color-body)] transition-colors duration-300">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </article>
  );
}

function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--color-border)] pt-10 pb-6">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        {/* Left Section */}
        <div>
          <h3 className="text-2xl font-bold text-[var(--color-text)]">
            Rishav Kumar
          </h3>

          <p className="mt-2 max-w-md text-[var(--color-body)] leading-7">
            Software Engineering Student passionate about Backend Development,
            Cloud Computing, AI, and building scalable applications that solve
            real-world problems.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <span className="rounded-full bg-[var(--color-card-soft)] px-3 py-1 text-sm text-[var(--color-text)]">
              💻 150+ DSA Problems
            </span>

            <span className="rounded-full bg-[var(--color-card-soft)] px-3 py-1 text-sm text-[var(--color-text)]">
              🏆 2× Hackathon Winner
            </span>

            <span className="rounded-full bg-[var(--color-card-soft)] px-3 py-1 text-sm text-[var(--color-text)]">
              🚀 Full Stack Developer
            </span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-3 text-[0.95rem]">

          <a
            href="mailto:rishavkumar7034@gmail.com"
            className="transition hover:text-[var(--color-text)]"
          >
            📧 Email
          </a>

          <a
            href="https://github.com/rishav-026"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-[var(--color-text)]"
          >
            💻 GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/rishavkumar12/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-[var(--color-text)]"
          >
            🔗 LinkedIn
          </a>

          <a
            href="#projects"
            className="transition hover:text-[var(--color-text)]"
          >
            🚀 Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            className="transition hover:text-[var(--color-text)]"
          >
            📄 Resume
          </a>

        </div>
      </div>

      {/* Bottom */}

      <div className="mt-10 flex flex-col gap-2 border-t border-[var(--color-border)] pt-6 text-sm text-[var(--color-section-muted)] md:flex-row md:items-center md:justify-between">

        <p>
          © {new Date().getFullYear()} Rishav Kumar. All rights reserved.
        </p>

        <p>
          Built with React • Tailwind CSS • Vite
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

function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
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

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-2">
      <path d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10Z" />
      <circle cx="12" cy="11" r="2.5" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8 fill-none stroke-current stroke-2">
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v18H6.5A2.5 2.5 0 0 0 4 23Z" />
      <path d="M4 5.5V19a2 2 0 0 0 2 2" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-[1.8]">
      <path d="M9 19c-4 1.5-4-2-6-2" />
      <path d="M15 22v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 4.77 5.07 5.07 0 0 0 18.91 1S17.73.65 15 2.48a13.38 13.38 0 0 0-6 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
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
