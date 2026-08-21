export const projectCategories = [
  "All",
  "Full-Stack",
  "AI & Python",
  "Cloud & DevOps",
  "Blockchain",
];

export const projects = [
  {
    slug: "app-intel",
    title: "App Intel",
    period: "2026",
    subtitle: "Composio AI App Research & Verification System (100-App Case Study)",
    category: "AI & Python",
    summary:
      "An end-to-end, multi-agent AI research pipeline and product operations dashboard built for Composio. Autonomously conducts web discovery, documentation scraping, schema extraction, and source verification across 100 enterprise software apps.",
    videoUrl: "",
    description: [
      "App Intel is an end-to-end, multi-agent AI research pipeline and product operations dashboard built for Composio. The system autonomously conducts web discovery, scrapes developer documentation, extracts structured integration schemas, performs independent source verification, and generates an interactive product ops analytics case study across 100 enterprise software applications.",

      "The system's architecture is divided into clear multi-agent research phases: Phase 2 ResearchAgent plans search queries, retrieves documentation URLs via Google Search, scrapes technical documentation using HTML and Playwright, and extracts structured fields (Auth, Access Model, API Surface, MCP Status, Buildability) with direct quote evidence and confidence metrics.",

      "In Phase 3, the independent VerifierAgent re-scrapes cited documentation independently, verifies whether extracted quotes match live text, flags contradictions or missing evidence, and routes low-confidence items to a Human-in-the-Loop review queue.",

      "The Resilient Batch Runner (Phase 4) executes 100-app research batches sequentially with retry logic, exponential backoff, multi-model zero-wait failover (gpt-oss-20b -> allam-2-7b -> gpt-oss-safeguard-20b), and incremental state saving.",

      "Phase 5 AnalysisEngine aggregates raw research data into product ops investment tiers (Easy Wins, Technical Discovery, Outreach Required), category patterns, and matrix records without hardcoded statistics.",

      "Finally, a self-explanatory React + Vite Frontend provides a modern dark-mode tabbed dashboard featuring tabbed navigation (Overview, Investments, Patterns, 100-App Matrix, Architecture, Verification, CLI & Code)."
    ],
    stack: ["Python", "FastAPI", "React", "Groq AI", "Playwright", "LangChain"],
    highlights: [
      "Autonomous ResearchAgent: Plans search queries, scrapes developer docs via Playwright, and extracts structured schemas with quote evidence.",
      "Independent VerifierAgent: Re-scrapes cited URLs independently to audit quote matches, detect contradictions, and route low-confidence items to human review.",
      "Resilient Batch Runner & Failover: Executes 100-app batches with exponential backoff and multi-model zero-wait failover across Groq/OpenAI endpoints.",
      "Interactive React Case Study Dashboard: Displays 100-App Matrix, investment tiers (Easy Wins, Discovery, Outreach), and verification audit drawers.",
    ],
    github: "https://github.com/rishav-026/app-intel",
    role: "Lead AI & Systems Engineer",
    demoType: "ai-pipeline",
    demoTitle: "Multi-Agent Research & Verification Pipeline",
    demoSnippet: `[AppIntel Engine] Executing 100-App Batch Run...
[ResearchAgent] Salesforce: Searching developer.salesforce.com -> Scraping REST API Schema...
[ResearchAgent] Extracted Auth: OAuth 2.0 | MCP Status: Supported | Confidence: 0.96
[VerifierAgent] Verifying URL: developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest...
[VerifierAgent] Quote match confirmed (100% verified). Output saved to data/verified_results.json`,
    architecture: [
      { step: "1. ResearchAgent (Web & Scraping)", detail: "Google Search discovery + Playwright doc scraping + Pydantic schema extraction", tech: "Python / Groq / Playwright" },
      { step: "2. VerifierAgent (Audit & Verification)", detail: "Re-scrapes cited docs independently & flags contradictions for human review", tech: "Python / Single-Pass Audit" },
      { step: "3. Resilient Batch Runner", detail: "Runs 100-app batches with multi-model failover & state persistence", tech: "Python / Multi-Model Failover" },
      { step: "4. React Analytics Dashboard", detail: "Interactive dark-mode UI with 100-App Matrix, filters & evidence drawers", tech: "React / Vite / Recharts" },
    ],
  },
  {
    slug: "vercel-clone",
    title: "Vercel Clone",
    period: "Mar 2026",
    subtitle: "Full-Stack Deployment Platform",
    category: "Cloud & DevOps",
    summary:
      "A Vercel-like deployment platform with automated builds, Docker isolation, AWS integrations, and a dashboard for deployment logs.",
    videoUrl: "/project-video/Vercel-Clone-Project.mp4",
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
    demoType: "terminal",
    demoTitle: "Automated Build & Upload Pipeline",
    demoSnippet: `[19:42:01] Cloning repo: https://github.com/user/my-app.git...
[19:42:03] Detected framework: React (Vite)
[19:42:05] Running 'npm run build' inside Docker container...
[19:42:09] Build completed! Uploading 14 assets to AWS S3...
[19:42:11] Uploaded index.html [0.8KB] -> s3://my-app-bucket/
[19:42:12] Deployment live at https://my-app.vercel-clone.dev 🚀`,
    architecture: [
      { step: "1. GitHub URL Submit", detail: "React Frontend sends Git URL to Node.js REST API", tech: "React / REST API" },
      { step: "2. Build Service Worker", detail: "Clones repo & triggers isolated Docker container build", tech: "Docker / Node.js" },
      { step: "3. AWS S3 Upload", detail: "Uploads compiled production assets to S3 bucket", tech: "AWS S3 / ECR" },
      { step: "4. Wildcard Subdomain Proxy", detail: "Routes custom user subdomain to target S3 URL", tech: "AWS ECS / Proxy" },
    ],
  },

  {
    slug: "logintelligence",
    title: "LogIntelligence",
    period: "2026",
    subtitle: "DevOps Log Intelligence Platform",
    category: "AI & Python",
    summary:
      "An AI-powered platform for analyzing and diagnosing production logs with real-time incident reporting.",
    videoUrl: "/project-video/LogIntelligence.mp4",
    description: [
      "The main objective of this project is to reduce the time engineers spend manually investigating production incidents by automatically converting raw production logs into structured incident reports and guided investigation workflows.",

      "In modern cloud-native environments, applications are deployed across multiple technologies such as Kubernetes, Docker, PostgreSQL, Redis, MongoDB, Kafka, RabbitMQ, and Spring Boot. During a production outage, these systems generate thousands of log lines. Engineers often have to manually inspect these logs, identify the affected technology, correlate infrastructure metrics, determine the root cause, and decide which commands to execute for troubleshooting. This manual process is time-consuming and error-prone, especially during high-severity incidents.",

      "To solve this problem, I built LogIntelligence, which automates the initial incident investigation process.",

      "The workflow begins when a user uploads a production log file through the web interface built with Next.js, React, TypeScript, and Tailwind CSS. The frontend sends the log file to a FastAPI backend through a REST API.",

      "The first backend component is the Regex Parser. The parser reads the uploaded log and extracts structured information such as exception names, stack traces, CPU usage, memory usage, latency, HTTP status codes, exit codes, Kubernetes metadata, Docker container details, namespaces, ports, and technology-specific keywords. The parser converts unstructured log data into structured metadata that can be processed by the remaining components.",

      "After parsing, the structured metadata is passed to the Technology Detection Engine. This module automatically identifies the technologies involved in the incident. For example, if the log contains keywords like pg_isready, 5432, or PostgreSQL, the system detects PostgreSQL. Similarly, it identifies Redis, MongoDB, Kafka, RabbitMQ, Docker, Kubernetes, Spring Boot, FastAPI, and other supported technologies.",

      "Once the technology is detected, the metadata is sent to the Deterministic Rule Engine, which is one of the core components of the project. The Rule Engine evaluates the extracted evidence using predefined rules instead of relying on AI for operational decisions. It determines the incident severity, calculates a confidence score, identifies infrastructure patterns such as memory exhaustion or connection failures, and selects the appropriate Technology Playbook.",

      "The Technology Playbooks contain manually designed operational knowledge for each supported technology. Each playbook includes deterministic investigation commands, expected command outputs, recovery procedures, verification checklists, prevention strategies, and recommended configuration patches. For example, if the detected technology is PostgreSQL, the playbook returns commands such as pg_isready and SELECT * FROM pg_stat_activity. If the technology is Redis, the playbook returns commands like redis-cli INFO memory and Redis-specific recovery procedures. Because these playbooks are deterministic, the platform always generates technology-appropriate operational guidance and avoids hallucinated or unsafe commands.",

      "The project also integrates LangChain and Ollama running a local Llama 3 model. Unlike many AI-based log analysis systems, the language model is not responsible for generating commands, investigation steps, or recovery procedures. Instead, LangChain orchestrates the interaction with the local language model, providing the extracted evidence and deterministic findings as context. The language model is used only to generate natural-language sections such as the Executive Summary, Incident Summary, Business Impact, and technical explanations, making the report easier to understand.",

      "Before the final report is generated, all outputs pass through a Validation Layer. The validation layer ensures that operational commands, investigation steps, and verification procedures originate only from the deterministic playbooks. If the language model produces any operational suggestion that conflicts with the selected playbook, the deterministic data takes precedence. This hybrid architecture significantly reduces hallucinations while still benefiting from AI-generated explanations.",

      "After validation, the backend combines all deterministic information and AI-generated explanations into a structured JSON response. Finally, the React frontend displays everything as a professional Production Incident Report along with an Interactive Investigation Workspace, where engineers can follow the investigation commands step by step."
    ],
    stack: [
      "Python",
      "FastAPI",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "SQLite",
      "LangChain",
      "Ollama",
    ],
    highlights: [
      "Transforms raw production logs into structured incident reports using deterministic log analysis.",
      "Automatically detects technologies including PostgreSQL, Redis, MongoDB, Kafka, RabbitMQ, Docker, and Kubernetes.",
      "Generates guided investigation workflows, recovery steps, verification checklists, and configuration patches through technology-specific playbooks.",
    ],
    github: "https://github.com/rishav-026/LogIntelligence",
    demoUrl: "https://logintelligence-nu.vercel.app/",
    role: "Full Stack Developer & Backend Architect",
    demoType: "incident",
    demoTitle: "AI Log Incident Diagnostics Report",
    demoSnippet: `{
  "incident_id": "INC-9482",
  "severity": "CRITICAL",
  "detected_technology": "PostgreSQL",
  "confidence_score": 0.98,
  "root_cause": "Max database connection pool exhausted (FATAL: remaining connection slots reserved for non-replication superuser connections)",
  "recommended_playbook_command": "pg_isready -h localhost -p 5432 && SELECT * FROM pg_stat_activity;"
}`,
    architecture: [
      { step: "1. Log File Upload", detail: "Frontend sends raw production log to FastAPI", tech: "React / FastAPI" },
      { step: "2. Regex Parser", detail: "Extracts exceptions, CPU/RAM spikes, status codes, container IDs", tech: "Python Regex" },
      { step: "3. Tech Detection Engine", detail: "Identifies Postgres, Redis, Kafka, K8s, Docker signatures", tech: "Pattern Engine" },
      { step: "4. Deterministic Playbooks", detail: "Derives exact diagnostic commands and recovery patches", tech: "Rule Engine" },
      { step: "5. Llama 3 LLM (Ollama)", detail: "Generates executive summary without modifying command logic", tech: "LangChain / Ollama" },
      { step: "6. Interactive Workspace", detail: "Renders Enterprise Incident Report UI with triage steps", tech: "Next.js / Tailwind" },
    ],
  },

  {
    slug: "infraledger",
    title: "InfraLedger",
    period: "Mar 2026",
    subtitle: "Infrastructure Transparency Platform",
    category: "Blockchain",
    summary:
      "A full-stack transparency platform with role-based dashboards, blockchain-backed records, and IPFS document verification.",
    videoUrl: "",
    description: [
      "InfraLedger is a blockchain-powered infrastructure monitoring platform designed to improve transparency, accountability, and trust in public infrastructure projects. The platform prevents corruption and fund misuse by creating an immutable record of project activities such as fund releases, milestone approvals, project updates, and supporting evidence.",

      "The idea behind the project came from the lack of transparency in government infrastructure projects, where citizens often have little visibility into project progress or public fund utilization. Instead of relying on traditional centralized databases, InfraLedger combines blockchain technology with AI-powered analytics to create a secure and tamper-resistant monitoring platform.",

      "The platform is built using React for the frontend, Node.js and Express with TypeScript for the backend, PostgreSQL managed through Prisma ORM, Polygon blockchain integration using Hardhat and Ethers.js, IPFS via Pinata for decentralized storage, and a local AI-powered risk analysis engine.",

      "InfraLedger supports multiple user roles including Government Officials, Contractors, Citizens, Checkers, and Approvers. Contractors create projects and upload progress updates with supporting evidence, government officials monitor projects and approve milestones, while citizens can transparently track project progress and verify how public funds are being utilized.",

      "A key feature of the platform is its milestone-based fund release mechanism. Instead of releasing the complete budget at once, funds are released incrementally after project milestones are approved. Every release request passes through a Maker–Checker–Approver workflow, ensuring multiple levels of verification before transactions are finalized.",

      "To guarantee data integrity, every important transaction such as project creation, milestone approvals, and fund releases is permanently recorded on the Polygon blockchain. Large files like images and project documents are stored on IPFS through Pinata, while only the immutable content hash is written to the blockchain, reducing storage costs while preserving verifiability.",

      "The AI-powered Risk Analysis Engine continuously evaluates projects using parameters such as project completion percentage, released funds, milestone progress, delays, and other indicators. Based on these inputs, the system predicts project risk levels and generates explainable insights that help officials identify potentially risky projects before major issues arise."
    ],
    stack: ["React", "Node.js", "Express", "TypeScript", "Prisma", "Polygon", "IPFS"],
    highlights: [
      "Supported 3 user roles: government, contractors, and citizens with role-based dashboards.",
      "Stored 100+ transaction records on Polygon to keep infrastructure records tamper-resistant.",
      "Handled 50+ project documents on IPFS with CID-based verification.",
      "Designed a risk scoring system analyzing 5+ parameters to detect fund-usage anomalies.",
    ],
    github: "https://github.com/rishav-026/INFRA-LEDGAR",
    demoUrl: "https://infra-ledgar-1.vercel.app/",
    role: "Full-stack developer",
    demoType: "blockchain",
    demoTitle: "Polygon Smart Contract Audit Trail",
    demoSnippet: `TxHash: 0x8f4d...39a1
Network: Polygon Mainnet
Action: ApproveMilestone(ProjectId: 42, Milestone: 2)
IPFS CID: QmXoyp84z...91aK
Risk Score: 12% (LOW)
Status: Confirmed (Block #5849120)`,
    architecture: [
      { step: "1. Role Authentication", detail: "Government, Contractor & Citizen role-based access", tech: "Express / JWT" },
      { step: "2. Pinata IPFS Upload", detail: "Stores progress documents & computes CID hash", tech: "IPFS / Pinata" },
      { step: "3. Polygon Smart Contract", detail: "Writes immutable audit record on Polygon blockchain", tech: "Ethers.js / Polygon" },
      { step: "4. AI Risk Analysis", detail: "Predicts budget anomaly & milestone delay risk level", tech: "Prisma / Risk Model" },
    ],
  },
  {
    slug: "civic-sim",
    title: "Civic Sim",
    period: "Jul 2025",
    subtitle: "AI-Powered Civic Transparency Platform",
    category: "AI & Python",
    summary:
      "An AI platform for civic transparency with OCR, ML, and dashboards for tracking data fields and anomaly detection.",
    videoUrl: "/project-video/civic-sim.mp4",
    description: [
      "CivicSim is an AI-powered civic transparency platform developed to improve accountability in government projects and help detect corruption using Artificial Intelligence. The platform enables citizens and government authorities to verify official documents, monitor public fund utilization, and identify suspicious activities through AI-driven analysis.",

      "The project was built with a React frontend and a FastAPI backend written in Python. Users can upload government-related documents through the web interface, while the backend processes requests and integrates with Google Gemini AI to determine whether uploaded documents are authentic or fraudulent.",

      "The AI-powered document verification system not only classifies documents as genuine or fake but also generates confidence scores and explainable reasoning for its predictions. This provides greater transparency and helps users understand why a document has been flagged as suspicious.",

      "To enhance transparency, the platform integrates with official government APIs from data.gov.in to retrieve real-time information about government schemes, fund allocation, and public expenditure. The retrieved data is compared with uploaded documents to identify inconsistencies and generate corruption risk scores."
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
    demoType: "ocr",
    demoTitle: "OCR & Fraud Anomaly Detection",
    demoSnippet: `Document Uploaded: Government_Grant_Receipt_2025.pdf
OCR Extraction: 94.2% Confidence
Inconsistency Detected: Discrepancy between Allocated (₹50,00,000) vs Recorded (₹38,00,000)
Gemini Verification: FLAGGED (Reason: Font Tampering & Unregistered Seal)`,
    architecture: [
      { step: "1. Document Ingestion", detail: "Uploads municipal receipt or grant voucher image", tech: "React / FastAPI" },
      { step: "2. Tesseract OCR Engine", detail: "Extracts textual parameters and line items", tech: "Tesseract / OpenCV" },
      { step: "3. Gemini AI Verification", detail: "Analyzes authenticity & compares with data.gov.in API", tech: "Google Gemini" },
      { step: "4. Anomaly Dashboard", detail: "Renders corruption risk matrix & audit logs", tech: "Chart.js / Tailwind" },
    ],
  },
  {
    slug: "sarkaar-sarthi",
    title: "Sarkaar Sarthi",
    period: "2026",
    subtitle: "AI Multilingual Citizen Platform (Hackathon Winner)",
    category: "Full-Stack",
    summary:
      "A Hackathon-winning AI citizen-service assistant that guides users through schemes, applications, document checklists, and status tracking in multiple languages.",
    videoUrl: "/project-video/Health_Chat_Bot_video.mp4",
    description: [
      "Sarkaar Saathi is an AI-powered government schemes assistance platform designed to simplify access to Indian government welfare schemes. The platform helps citizens discover, understand, and apply for government schemes by allowing them to ask questions in both text and voice across multiple Indian languages.",

      "The application is built with a React frontend and a FastAPI backend. Users interact with an AI chatbot that processes their queries using a Retrieval-Augmented Generation (RAG) architecture. Instead of relying solely on a Large Language Model, the system first retrieves relevant information from official government scheme documents stored in a vector database before generating responses."
    ],
    stack: ["React", "Node.js", "Express", "MySQL", "RAG"],
    highlights: [
      "🏆 Won Hackathon award for building AI-powered multilingual government scheme discovery.",
      "Organizes government service flows into a clean step-by-step user journey.",
      "Tracks application status, required documents, and follow-up actions in one dashboard.",
      "Built for the same clarity-first UX style you use across your portfolio work.",
    ],
    github: "https://github.com/rishav-026/SARKAAR-SAARTHI",
    role: "Full-stack builder",
    demoType: "chat",
    demoTitle: "RAG Multilingual Assistant Workflow",
    demoSnippet: `User: "How do I apply for PM Awas Yojana?"
Vector Search: Retrieved 3 relevant PDF context chunks from Ministry database.
RAG Model Answer: "To apply, submit Aadhaar Card, Income Certificate, and Land Registry proof..."
Languages Supported: English, Hindi, Kannada, Tamil + 7 more.`,
    architecture: [
      { step: "1. Multilingual Input", detail: "Voice or text query in Hindi, Kannada, Tamil, or English", tech: "Web Speech / React" },
      { step: "2. Vector Retrieval", detail: "Queries FAISS vector database for scheme PDF embeddings", tech: "FAISS / RAG" },
      { step: "3. Context Synthesis", detail: "Passes official government context to LLM for grounded answer", tech: "Gemini / Ollama" },
      { step: "4. Step Workflow", detail: "Generates document checklist & status tracker", tech: "Express / MySQL" },
    ],
  },
  {
    slug: "invoice-processing-tool",
    title: "Invoice Processing Tool",
    period: "2026",
    subtitle: "OCR Invoice Automation",
    category: "AI & Python",
    summary:
      "An OCR-driven pipeline for extracting invoice fields, validating line items, and preparing structured outputs for finance systems.",
    videoUrl: "/project-video/Invoice_Processing_video.mp4",
    description: [
      "Invoice Processing Tool is a full-stack document automation application designed to extract structured information from both typed and handwritten invoices. The platform automates invoice processing using Optical Character Recognition (OCR), reducing manual data entry while improving speed and accuracy for financial workflows.",

      "The application consists of a React frontend and a Flask backend developed in Python. Users can upload invoice images through the web interface, where the backend processes the documents using either Tesseract OCR or Google Cloud Vision API depending on the availability and quality of the input."
    ],
    stack: ["Python", "FastAPI", "OCR", "MySQL"],
    highlights: [
      "Extracts vendor, invoice, date, and amount fields from document scans.",
      "Validates rows and line items before export to downstream systems.",
      "Built to reduce manual data entry in billing workflows.",
    ],
    github: "https://github.com/rishav-026/Invoice_Processing",
    role: "Automation builder",
    demoType: "ocr",
    demoTitle: "Automated Line-Item Field Extraction",
    demoSnippet: `Input File: Vendor_Invoice_0912.png
Extracted Fields:
  - Vendor: Acme Corp Ltd
  - Date: 12-Feb-2026
  - Total Amount: $4,920.00
Validation Status: PASSED (Subtotal + Tax matches Total)`,
    architecture: [
      { step: "1. Image Ingestion", detail: "Receives invoice PNG/PDF upload from client UI", tech: "React / Flask" },
      { step: "2. Hybrid OCR Engine", detail: "Google Cloud Vision API with Tesseract fallback", tech: "Google Cloud Vision" },
      { step: "3. Field Extractor", detail: "Parses Vendor, Date, Subtotal, Tax, and Line Items", tech: "Python RegEx Parser" },
      { step: "4. Financial Validation", detail: "Verifies arithmetic sum & outputs structured JSON", tech: "MySQL / JSON" },
    ],
  },
  {
    slug: "career-prediction",
    title: "Career Prediction",
    period: "2026",
    subtitle: "Skill-to-Career Guidance System",
    category: "AI & Python",
    summary:
      "A lightweight guidance tool that maps profiles and skills to career paths, strengths, and next-step recommendations.",
    videoUrl: "/project-video/Career_Prediction_video.mp4",
    description: [
      "Career Prediction is a full-stack machine learning application developed during the HackMarch Hackathon at KLE Society. The platform predicts a student's most suitable future career path by analyzing academic performance, behavioral traits, technical skills, and personal attributes using an AI-powered machine learning model.",

      "The machine learning model is built using AutoGluon's TabularPredictor, which automatically trains and evaluates multiple algorithms to identify the best-performing model. After training, the model achieved more than 85% prediction accuracy and was exported along with all preprocessing artifacts for future deployment."
    ],
    stack: ["Python", "React", "ML", "Node.js"],
    highlights: [
      "Matches skills to possible career paths with explainable recommendations.",
      "Highlights strengths, gaps, and suggested learning milestones.",
      "Useful for student guidance and early-career planning.",
    ],
    github: "https://github.com/rishav-026/Career-Predictor-Project",
    role: "ML-assisted developer",
    demoType: "ml",
    demoTitle: "AutoGluon ML Model Prediction Output",
    demoSnippet: `Input Student Profile: { Academic: 8.4, Java: 9/10, ProblemSolving: High, Communication: 8/10 }
Model Accuracy: 87.4%
Top Recommended Roles:
  1. Backend Systems Engineer (92% Match)
  2. Cloud Architect (84% Match)
  3. AI Solutions Engineer (78% Match)`,
    architecture: [
      { step: "1. Questionnaire Input", detail: "Collects academic scores, tech skills, and behavioral traits", tech: "HTML / JS" },
      { step: "2. Data Preprocessing", detail: "Handles missing values & computes derived 'Tech Level' feature", tech: "Pandas / Scikit-Learn" },
      { step: "3. AutoGluon Tabular Model", detail: "Ensemble predictor evaluates top career trajectory", tech: "AutoGluon ML" },
      { step: "4. Career Path Report", detail: "Generates match percentage, skill gaps, and learning roadmap", tech: "Python REST API" },
    ],
  },
];
