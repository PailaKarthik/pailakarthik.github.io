export const profile = {
  name: "Karthik Paila",
  role: "Full-Stack Developer · AI Builder",
  eyebrow: "Full-Stack • AI • Software Engineering",
  tagline:
    "I build full-stack products and AI-powered systems — from real-time applications and backend infrastructure to RAG pipelines and LLM-driven experiences.",
  location: "India",
  email: "pailakarthik0136@gmail.com",
  phone: "+91 7780190462",
  links: {
    github: "https://github.com/PailaKarthik/",
    linkedin: "https://www.linkedin.com/in/paila-karthik/",
    leetcode: "https://leetcode.com/u/cos88/",
    portfolio: "https://pailakarthik.github.io/",
    repo: "https://github.com/PailaKarthik/pailakarthik.github.io",
  },
  resumePath: "/assets/resume/Karthik-Paila-Resume.pdf",
  credibility: [
    { value: "1850+", label: "LeetCode rating" },
    { value: "1500+", label: "DSA problems" },
    { value: "9.26", label: "CGPA" },
    { value: "Runner-Up", label: "Hack24 · ₹30K" },
  ],
} as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Hackathons", href: "#hackathons" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;

export type ProjectStatus = "In Development" | "Live" | "Build Available";

export interface Project {
  index: string;
  name: string;
  category: string;
  status: ProjectStatus;
  statusNote?: string;
  description: string;
  stack: string[];
  problem: string;
  solution: string;
  engineering: string[];
  flow: string[];
  arch: string[];
  links: { label: string; href: string; kind: "demo" | "build" | "github" }[];
}

export const projects: Project[] = [
  {
    index: "01",
    name: "ApteeZ",
    category: "Competitive Aptitude Platform",
    status: "In Development",
    statusNote: "Engineering case study — not yet live",
    description:
      "A full-stack competitive aptitude ecosystem: 1v1 challenges, timed contests, ratings, leaderboards, structured learning, events, discussions, contributions and performance analytics.",
    stack: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Socket.IO",
      "BullMQ",
      "LangChain.js",
      "LangGraph.js",
      "pgvector",
    ],
    problem:
      "Aptitude prep is lonely and unmeasurable — learners solve questions in isolation with no sense of competitive readiness or what to fix next.",
    solution:
      "Make prep competitive and measurable: every attempt feeds ratings, streaks and weak-area analysis, with live play and an advisory AI Performance Coach pointing to the next best step.",
    engineering: [
      "Redis matchmaking + Socket.IO live rooms with server-owned timers and scoring",
      "Elo-style challenge ratings, contest standings and auto-submit",
      "BullMQ background jobs for ratings, events and notifications",
      "Advisory RAG over the question bank (pgvector embeddings) for similar-problem retrieval",
      "LangGraph performance-coach workflow with tool calling and human-approved contribution review",
    ],
    flow: ["Matchmaking", "Challenge", "Rating", "Leaderboard", "AI Coach"],
    arch: [
      "Next.js",
      "NestJS",
      "PostgreSQL + Prisma",
      "Redis",
      "Socket.IO / BullMQ",
      "LangGraph / LangChain",
      "pgvector",
    ],
    links: [{ label: "GitHub", href: "https://github.com/PailaKarthik/Apteez", kind: "github" }],
  },
  {
    index: "02",
    name: "AI Study Companion",
    category: "AI-Powered Document Learning Platform",
    status: "Live",
    statusNote: "Live application",
    description:
      "A production-oriented AI learning platform that converts PDF study material into searchable knowledge — grounded tutoring, adaptive assessments, concept mastery, growth analysis and personalised recommendations.",
    stack: [
      "Next.js",
      "TypeScript",
      "Express",
      "Prisma",
      "PostgreSQL",
      "pgvector",
      "Redis",
      "BullMQ",
      "Groq",
      "Gemini",
      "Neon Object Storage",
    ],
    problem:
      "Students drown in PDFs with no way to query them, test themselves, or know what they have actually mastered.",
    solution:
      "Turn static PDFs into an active loop: upload → extract + OCR → chunk + embed → ask a citing tutor → take adaptive quizzes → watch mastery update from real evidence.",
    engineering: [
      "Asynchronous PDF processing (OCR + document intelligence) on BullMQ queues",
      "Gemini embeddings with PostgreSQL + pgvector retrieval",
      "Citation-validated RAG — the tutor refuses to guess without evidence",
      "Groq-powered Tutor and assessment workflows with adaptive question selection",
      "Persistent learning telemetry: mastery, growth trends and AI-usage ledger",
    ],
    flow: ["PDF", "OCR", "Chunks", "Embeddings", "pgvector", "RAG", "Tutor"],
    arch: [
      "PDF",
      "OCR / Processing",
      "Chunking",
      "Embeddings",
      "PostgreSQL + pgvector",
      "RAG",
      "Tutor / Assessment",
    ],
    links: [
      { label: "Live Demo", href: "https://web-theta-two-77.vercel.app/", kind: "demo" },
      { label: "GitHub", href: "https://github.com/PailaKarthik/AI-Study-Companion", kind: "github" },
    ],
  },
  {
    index: "03",
    name: "Risk View",
    category: "Location-Aware Travel Safety Intelligence",
    status: "Build Available",
    statusNote: "Android / Expo build",
    description:
      "A location-aware travel safety platform: discover nearby scam and danger reports, submit community incidents, monitor real-time safety information on an interactive map.",
    stack: [
      "React Native",
      "Expo",
      "Redux",
      "Node.js",
      "Express",
      "FastAPI",
      "MongoDB",
      "RAG",
      "Nominatim",
      "Groq API",
    ],
    problem:
      "Travellers in unfamiliar places are blind to local scams, unsafe areas and hazardous routes — guidebooks don't cover street-level risk.",
    solution:
      "A community safety network: every traveller contributes reports, the map surfaces nearby risk, and AI summarises local conditions into actionable safety insight.",
    engineering: [
      "Geospatial discovery of nearby incidents on an interactive map",
      "Community incident reporting with voting for reliability",
      "AI-assisted report validation and summarisation",
      "RAG over community reports for context-aware safety queries",
      "Groq-generated local safety insights with real-time alerts",
    ],
    flow: ["Location", "Incidents", "MongoDB", "Retrieval", "Groq", "Safety Insight"],
    arch: [
      "React Native / Expo",
      "API",
      "Location + Incident Data",
      "MongoDB",
      "RAG Retrieval",
      "Groq",
      "Safety Intelligence",
    ],
    links: [
      {
        label: "Android / Expo Build",
        href: "https://expo.dev/accounts/karthikpaila/projects/riskview/builds/5c4a893e-dc81-42c7-9b95-dbf877bd70d8",
        kind: "build",
      },
      { label: "GitHub", href: "https://github.com/PailaKarthik/RiskView", kind: "github" },
    ],
  },
];

export const skills = [
  {
    title: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frontend",
    items: ["Next.js", "React", "React Native", "Expo", "Redux", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "NestJS", "FastAPI", "REST", "GraphQL", "WebSockets"],
  },
  {
    title: "AI / ML",
    items: ["LLMs", "LangChain", "LangGraph", "RAG", "Embeddings", "FAISS", "Vector Databases"],
  },
  {
    title: "Databases / Infra",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "BullMQ", "Firebase"],
  },
  {
    title: "Tools / DevOps",
    items: ["Git", "Docker", "AWS", "Figma"],
  },
] as const;

export const achievements = [
  {
    title: "LeetCode Knight",
    metric: "1850+",
    detail: "Top 5% globally · Knight Badge · ~1100 best global contest rank",
  },
  {
    title: "Problem Solving",
    metric: "1500+",
    detail: "DSA problems solved across platforms",
  },
  {
    title: "SQL",
    metric: "98%",
    detail: "50+ advanced SQL challenges · 98% solution success rate",
  },
  {
    title: "Hack24",
    metric: "₹30K",
    detail: "1st Runner-Up · Campus Matrix · MVGR College",
  },
  {
    title: "NPTEL AI",
    metric: "82%",
    detail: "Artificial Intelligence: Search Methods for Problem Solving · Silver Badge",
  },
] as const;

export const hackathons = [
  {
    name: "Campus Matrix",
    event: "Hack24 · MVGR College",
    result: "1st Runner-Up · ₹30,000",
    description:
      "Interactive campus navigation system with visual map editing, classroom and timetable management, and GPS-based navigation.",
    links: [{ label: "GitHub", href: "https://github.com/PailaKarthik/CampusMatriX" }],
  },
  {
    name: "X_Auditory",
    event: "Hackathon build",
    result: "Participant",
    description:
      "AI-powered hearing assistance: environmental sound detection, audio classification, directional and priority-based alerts, speech-to-text and customisable sound modes.",
    links: [{ label: "GitHub", href: "https://github.com/PailaKarthik/X_auditory" }],
  },
  {
    name: "GramaVikas",
    event: "Hackathon build",
    result: "Participant",
    description:
      "Farmer assistance platform: crop disease diagnosis via image classification, government scheme discovery, emergency support, environmental risk alerts and AI chatbot guidance.",
    links: [{ label: "GitHub", href: "https://github.com/PailaKarthik/GramaVikas" }],
  },
] as const;

export const education = [
  {
    school: "Rajiv Gandhi University of Knowledge Technologies",
    place: "Srikakulam, Andhra Pradesh",
    degree: "B.Tech — Computer Science",
    meta: "CGPA 9.26 · Aug 2023 – Apr 2027",
  },
  {
    school: "Pre University Course — MBiPC",
    place: "RGUKT",
    degree: "Maths, Biology, Physics, Chemistry",
    meta: "CGPA 9.59 · Dec 2021 – Aug 2023",
  },
] as const;

export const exploring = [
  "AI Systems",
  "Backend Engineering",
  "Scalable Architectures",
  "Real-Time Applications",
  "RAG / LLM Applications",
] as const;
