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
      description: [
    "Vercel Clone is a simplified cloud deployment platform inspired by Vercel that automates the deployment of static web applications directly from GitHub repositories. The primary objective of this project was to understand how modern deployment platforms work internally while gaining hands-on experience with cloud services, deployment automation, and DevOps workflows.",

    "The deployment process begins with a React frontend where users submit the GitHub repository URL of their project. The frontend sends the deployment request to the backend through REST APIs.",

    "The backend clones the repository, detects the project, installs dependencies, and executes the appropriate build commands to generate optimized production-ready files inside the build or dist directory.",

    "After a successful build, the backend uploads every generated file to an AWS S3 bucket that serves as the static hosting platform. Rather than performing uploads silently, the backend streams real-time deployment logs to the frontend, allowing users to monitor every deployment step.",

    "During deployment, users can see logs such as 'Uploading index.html', 'Uploaded index.html', 'Uploading style.css', and finally 'Deployment Complete'. This transparency helps users understand exactly what is happening and makes debugging deployment failures much easier.",

    "Once all files are uploaded successfully, the application is served through a custom domain instead of the default S3 website endpoint, providing a cleaner and more production-like deployment experience.",

    "The dashboard also includes a live preview section displaying the deployed project's name, live URL, deployment status, and a button to open the deployed website immediately after deployment completes."
  ],
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
      
      description: [
  "InfraLedger is a blockchain-powered infrastructure monitoring platform designed to improve transparency, accountability, and trust in public infrastructure projects. The platform prevents corruption and fund misuse by creating an immutable record of project activities such as fund releases, milestone approvals, project updates, and supporting evidence.",

  "The idea behind the project came from the lack of transparency in government infrastructure projects, where citizens often have little visibility into project progress or public fund utilization. Instead of relying on traditional centralized databases, InfraLedger combines blockchain technology with AI-powered analytics to create a secure and tamper-resistant monitoring platform.",

  "The platform is built using React for the frontend, Node.js and Express with TypeScript for the backend, PostgreSQL managed through Prisma ORM, Polygon blockchain integration using Hardhat and Ethers.js, IPFS via Pinata for decentralized storage, and a local AI-powered risk analysis engine.",

  "InfraLedger supports multiple user roles including Government Officials, Contractors, Citizens, Checkers, and Approvers. Contractors create projects and upload progress updates with supporting evidence, government officials monitor projects and approve milestones, while citizens can transparently track project progress and verify how public funds are being utilized.",

  "A key feature of the platform is its milestone-based fund release mechanism. Instead of releasing the complete budget at once, funds are released incrementally after project milestones are approved. Every release request passes through a Maker–Checker–Approver workflow, ensuring multiple levels of verification before transactions are finalized.",

  "To guarantee data integrity, every important transaction such as project creation, milestone approvals, and fund releases is permanently recorded on the Polygon blockchain. Large files like images and project documents are stored on IPFS through Pinata, while only the immutable content hash is written to the blockchain, reducing storage costs while preserving verifiability.",

  "The AI-powered Risk Analysis Engine continuously evaluates projects using parameters such as project completion percentage, released funds, milestone progress, delays, and other indicators. Based on these inputs, the system predicts project risk levels and generates explainable insights that help officials identify potentially risky projects before major issues arise.",

  "The dashboard provides real-time visibility into project progress, budgets, milestones, approvals, blockchain transaction history, AI-generated risk scores, and uploaded evidence. Role-based authentication ensures every user can only access features relevant to their responsibilities.",

  "Developing InfraLedger provided hands-on experience with blockchain development, smart contracts, decentralized storage, full-stack application development, authentication, role-based authorization, AI integration, database management, and secure cloud deployment. One of the biggest challenges was synchronizing communication between the React frontend, Express backend, PostgreSQL database, Polygon smart contracts, and IPFS while maintaining consistency and security.",

  "Although currently implemented as a prototype, InfraLedger demonstrates how blockchain and artificial intelligence can improve transparency and accountability in public infrastructure management. Future enhancements include integrating real government datasets, supporting multiple blockchain networks, implementing digital identity verification, adding predictive analytics, generating AI-powered audit reports, and integrating GIS-based project tracking."
],
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
      description: [
  "CivicSim is an AI-powered civic transparency platform developed to improve accountability in government projects and help detect corruption using Artificial Intelligence. The platform enables citizens and government authorities to verify official documents, monitor public fund utilization, and identify suspicious activities through AI-driven analysis.",

  "The project was built with a React frontend and a FastAPI backend written in Python. Users can upload government-related documents through the web interface, while the backend processes requests and integrates with Google Gemini AI to determine whether uploaded documents are authentic or fraudulent.",

  "The AI-powered document verification system not only classifies documents as genuine or fake but also generates confidence scores and explainable reasoning for its predictions. This provides greater transparency and helps users understand why a document has been flagged as suspicious.",

  "To enhance transparency, the platform integrates with official government APIs from data.gov.in to retrieve real-time information about government schemes, fund allocation, and public expenditure. The retrieved data is compared with uploaded documents to identify inconsistencies and generate corruption risk scores.",

  "The platform also analyzes multiple parameters such as missing information, suspicious keywords, unusual spending patterns, and data inconsistencies to identify potential corruption indicators. These AI-generated insights assist authorities in detecting irregularities at an early stage.",

  "One of the major features of CivicSim is the Government Transparency Dashboard, which presents healthcare budget allocation, ministry-wise expenditure, project progress, and public fund utilization through interactive charts and visual analytics. The dashboard enables users to easily monitor government performance and identify projects that require further investigation.",

  "Project information and analysis results are stored using SQLite, while Docker is used to containerize the application, ensuring consistent deployment across different development and production environments.",

  "Developing CivicSim provided hands-on experience with React, FastAPI, Python, Google Gemini AI, REST APIs, Docker, government API integration, data visualization, and AI-powered document verification. The project demonstrated how Artificial Intelligence combined with real-time public datasets can improve transparency, strengthen accountability, and build greater public trust in government systems."
],
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
      description: [
  "Sarkaar Saathi is an AI-powered government schemes assistance platform designed to simplify access to Indian government welfare schemes. The platform helps citizens discover, understand, and apply for government schemes by allowing them to ask questions in both text and voice across multiple Indian languages.",

  "The application is built with a React frontend and a FastAPI backend. Users interact with an AI chatbot that processes their queries using a Retrieval-Augmented Generation (RAG) architecture. Instead of relying solely on a Large Language Model, the system first retrieves relevant information from official government scheme documents stored in a vector database before generating responses.",

  "The backend converts uploaded government scheme documents into vector embeddings using a vector database such as FAISS or Pinecone. When a user submits a query, the most relevant document sections are retrieved and passed to an AI model like Google Gemini or Ollama, enabling the chatbot to provide accurate, context-aware answers based on official sources.",

  "One of the key features of Sarkaar Saathi is its multilingual support. Citizens can interact with the platform using both text and voice in more than ten Indian languages, making government information accessible to users from diverse linguistic backgrounds.",

  "The platform also includes an Admin Dashboard where administrators can upload new government scheme PDF documents. These documents are automatically processed, chunked, converted into vector embeddings, and stored in the vector database, ensuring that newly published schemes become immediately searchable by the AI assistant.",

  "MongoDB is used to store user information, chatbot interactions, and platform analytics, while Docker containerizes the application to provide a consistent deployment environment across development and production systems.",

  "Building Sarkaar Saathi provided hands-on experience with React, FastAPI, Retrieval-Augmented Generation (RAG), vector databases, AI model integration, MongoDB, Docker, REST APIs, multilingual voice processing, and document embedding pipelines. The project demonstrated how modern AI assistants combine semantic search with Large Language Models to deliver reliable, explainable, and up-to-date responses for real-world government services.",

  "Although currently implemented as a prototype, Sarkaar Saathi has the potential to become a comprehensive digital assistant for government services. Future enhancements include direct integration with official government portals, personalized scheme recommendations based on user profiles, application status tracking, OCR-based document verification, and AI-powered guidance throughout the complete application process."
],
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
      description: [
  "Invoice Processing Tool is a full-stack document automation application designed to extract structured information from both typed and handwritten invoices. The platform automates invoice processing using Optical Character Recognition (OCR), reducing manual data entry while improving speed and accuracy for financial workflows.",

  "The application consists of a React frontend and a Flask backend developed in Python. Users can upload invoice images through the web interface, where the backend processes the documents using either Tesseract OCR or Google Cloud Vision API depending on the availability and quality of the input.",

  "The OCR pipeline extracts raw text from uploaded invoices and automatically identifies important business information including invoice number, invoice date, vendor details, customer information, line items, subtotal, tax amount, and the final payable amount. The extracted data is converted into a structured format that can be easily consumed by downstream business applications.",

  "To improve reliability, the platform implements a hybrid OCR approach. Google Cloud Vision API is used for high-accuracy cloud-based text recognition, while Tesseract OCR serves as a fallback mechanism whenever cloud processing is unavailable or encounters an error. This ensures uninterrupted invoice processing across different deployment environments.",

  "The backend exposes REST APIs that communicate with the React frontend and supports secure file uploads through Flask. Uploaded invoice images are temporarily stored, processed by the OCR engine, and the extracted results are returned to the frontend for visualization and validation before further processing.",

  "The modular architecture allows the OCR engine, document parser, and machine learning components to operate independently, making it easier to extend the platform with advanced document understanding models such as Donut or LayoutLM for more complex invoice formats.",

  "Building this project provided hands-on experience with Python, Flask, React, REST APIs, Optical Character Recognition (OCR), Tesseract OCR, Google Cloud Vision API, Flask-CORS, document parsing, file upload handling, and full-stack application development. It also strengthened my understanding of intelligent document processing and automation workflows.",

  "Although currently implemented as an invoice processing solution, the platform can be extended into a complete Intelligent Document Processing (IDP) system by integrating AI-based field validation, receipt processing, purchase order matching, ERP integration, document classification, fraud detection, and automated accounting workflows for enterprise environments."
],
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
      description: [
  "Career Prediction is a full-stack machine learning application developed during the HackMarch Hackathon at KLE Society. The platform predicts a student's most suitable future career path by analyzing academic performance, behavioral traits, technical skills, and personal attributes using an AI-powered machine learning model.",

  "The application consists of a lightweight frontend built with HTML, CSS, and JavaScript, while the backend is developed in Python. Users provide information such as academic scores, technical proficiency, extracurricular participation, leadership experience, communication skills, and other personal characteristics through an interactive web interface.",

  "The backend preprocesses the collected data by handling missing values, performing feature engineering, converting data types, and balancing the dataset using undersampling techniques. A new feature called 'Tech Level' is derived from users' technical proficiency to improve the overall predictive performance of the model.",

  "The machine learning model is built using AutoGluon's TabularPredictor, which automatically trains and evaluates multiple algorithms to identify the best-performing model. After training, the model achieved more than 85% prediction accuracy and was exported along with all preprocessing artifacts for future deployment.",

  "Once a user submits the input form, the backend processes the data through the trained model and predicts the most suitable career path. Possible predictions include Engineer, Doctor, Entrepreneur, Researcher, Artist, and several other professional fields based on the user's profile.",

  "The project stores trained models, preprocessing artifacts, and feature metadata to ensure consistent predictions during deployment. The modular architecture also allows the machine learning model to be retrained with larger datasets without requiring changes to the frontend.",

  "Developing this project provided hands-on experience with Python, AutoGluon, pandas, scikit-learn, feature engineering, data preprocessing, class balancing, model evaluation, machine learning deployment, and full-stack application development. It also demonstrated how AutoML techniques can simplify model selection while maintaining high prediction accuracy.",

  "Although currently developed as a hackathon prototype, the platform can be extended into a complete AI-based career guidance system by integrating psychometric assessments, resume analysis, skill-gap recommendations, personalized learning roadmaps, real-time job market insights, and university admission guidance to provide comprehensive career counseling."
],
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

        {/* Header */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-5 py-3 font-semibold transition hover:-translate-y-0.5"
          >
            <ArrowLeftIcon />
            Back to Projects
          </button>

          <div className="flex items-center gap-3">
            <a
              href="mailto:rishavkumar7034@gmail.com"
              className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-5 py-3 font-semibold transition hover:-translate-y-0.5"
            >
              Contact
            </a>

            <button
              onClick={onToggleTheme}
              className="grid h-11 w-11 place-items-center rounded-full border border-[var(--color-border)] bg-[var(--color-card)]"
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>

        <section className="grid gap-6 xl:grid-cols-[2fr_0.8fr]">

          {/* LEFT */}

          <article className="rounded-[32px] border border-[var(--color-border)] bg-[var(--color-card)] p-8 shadow-[var(--shadow-card)]">

            <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-section-muted)]">
              {project.period} • {project.role}
            </p>

            <h1 className="mt-3 text-6xl font-extrabold tracking-tight">
              {project.title}
            </h1>

            <p className="mt-6 text-lg leading-9 text-[var(--color-body)]">
              {project.summary}
            </p>

            {/* Project Overview */}

            {project.description && (
              <div className="mt-12">
                <h2 className="mb-6 text-3xl font-bold">
                  Project Overview
                </h2>

                <div className="space-y-6">
                  {project.description.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-[1.05rem] leading-9 text-[var(--color-body)]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}

            <div className="mt-12">
              <h2 className="mb-5 text-3xl font-bold">
                Tech Stack
              </h2>

              <div className="flex flex-wrap gap-3">
                {project.stack.map((tech) => (
                  <ProjectTag key={tech}>
                    {tech}
                  </ProjectTag>
                ))}
              </div>
            </div>

            {/* Highlights */}

            <div className="mt-12">
              <h2 className="mb-6 text-3xl font-bold">
                Key Features
              </h2>

              <div className="grid gap-5 md:grid-cols-2">
                {project.highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card-soft-2)] p-6"
                  >
                    <p className="leading-8 text-[var(--color-body)]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </article>

          {/* RIGHT SIDEBAR */}

          <aside className="space-y-6">

            <div className="rounded-[32px] border border-[var(--color-border)] bg-[var(--color-card)] p-7">

              <h3 className="mb-5 text-xl font-bold">
                Project Details
              </h3>

              <div className="space-y-4">

                <div>
                  <p className="text-sm text-[var(--color-section-muted)]">
                    Role
                  </p>

                  <p>{project.role}</p>
                </div>

                <div>
                  <p className="text-sm text-[var(--color-section-muted)]">
                    Timeline
                  </p>

                  <p>{project.period}</p>
                </div>

                <div>
                  <p className="text-sm text-[var(--color-section-muted)]">
                    Technologies
                  </p>

                  <p>{project.stack.join(", ")}</p>
                </div>

              </div>

            </div>

            <div className="rounded-[32px] border border-[var(--color-border)] bg-[var(--color-card)] p-7">

              <h3 className="mb-5 text-xl font-bold">
                GitHub Repository
              </h3>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-card-soft)] px-5 py-3 font-semibold transition hover:-translate-y-1"
              >
                Open Repository
                <ArrowUpRightIcon />
              </a>

            </div>

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
