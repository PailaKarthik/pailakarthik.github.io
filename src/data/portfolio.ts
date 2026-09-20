export const profile = {
  name: "Karthik Paila",
  role: "Full-Stack Developer · AI Builder",
  eyebrow: "Full-Stack Developer · AI Builder",
  headline: "Build practical software. Explore intelligent systems.",
  tagline:
    "I build full-stack products and AI-powered systems — from real-time applications and backend infrastructure to RAG pipelines and LLM-driven experiences.",
  location: "Srikakulam, Andhra Pradesh, India",
  email: "pailakarthik0136@gmail.com",
  phone: "+91 7780190462",
  photo: "/assets/profile/profile.jpg",
  links: {
    github: "https://github.com/PailaKarthik/",
    linkedin: "https://www.linkedin.com/in/paila-karthik/",
    leetcode: "https://leetcode.com/u/cos88/",
    portfolio: "https://pailakarthik.github.io/",
    repo: "https://github.com/PailaKarthik/pailakarthik.github.io",
  },
  resumePath: "/assets/resume/Karthik-Paila-Resume.pdf",
  stats: [
    { value: "9.26", label: "CGPA" },
    { value: "1850+", label: "LeetCode Rating" },
    { value: "1500+", label: "DSA Problems" },
    { value: "4", label: "Hackathons" },
  ],
} as const;

export const nav = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "work", label: "Work", href: "#work" },
  { id: "achievements", label: "Achievements", href: "#achievements" },
  { id: "hackathons", label: "Hackathons", href: "#hackathons" },
  { id: "education", label: "Education", href: "#education" },
  { id: "contact", label: "Contact", href: "#contact" },
] as const;

export type ProjectStatus = "In Development" | "Live" | "Build Available";

export interface ProjectLink {
  label: string;
  href: string;
  kind: "demo" | "build" | "github" | "figma";
}

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
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    index: "01",
    name: "ApteeZ",
    category: "Competitive Aptitude Platform",
    status: "In Development",
    statusNote: "Engineering case study — not yet live",
    description:
      "A full-stack competitive aptitude platform with 1v1 challenges, timed contests, ratings, leaderboards, structured learning, events, discussions, contributions and performance analytics across multiple aptitude domains.",
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
      "Real-time matchmaking and competitive gameplay with Redis and Socket.IO",
      "Elo-style challenge ratings, contest standings and auto-submit",
      "BullMQ background jobs for ratings, events and notifications",
      "Agentic AI and RAG with LangChain.js, LangGraph.js and tool calling",
      "Embeddings + pgvector for performance coaching and semantic problem retrieval",
      "AI-assisted question review with mandatory human approval",
    ],
    flow: ["Matchmaking", "Challenge", "Rating", "Leaderboard", "AI Coach"],
    arch: [
      "Client",
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "Socket.IO / BullMQ",
      "LangGraph / LangChain",
      "pgvector",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/PailaKarthik/Apteez", kind: "github" },
      {
        label: "View Figma",
        href: "https://www.figma.com/make/vTx6bPuzuEFUjdunM1WlRo/apteez?fullscreen=1&t=7mZoqoB5t8ZDKZmK-1&code-node-id=0-6",
        kind: "figma",
      },
    ],
  },
  {
    index: "02",
    name: "AI Study Companion",
    category: "AI-Powered Document Learning Platform",
    status: "Live",
    statusNote: "Live application",
    description:
      "A production-oriented AI learning platform that converts PDF study material into searchable knowledge — grounded tutoring, adaptive assessments, concept mastery, growth analysis and personalized recommendations.",
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
      "Asynchronous PDF/OCR processing with BullMQ background jobs",
      "Gemini embeddings with PostgreSQL + pgvector retrieval",
      "Citation-validated RAG — the tutor refuses to guess without evidence",
      "Groq-powered Tutor and assessment workflows with adaptive question selection",
      "Mastery updates with persistent learning and AI usage telemetry",
    ],
    flow: ["PDF", "OCR", "Chunks", "Embeddings", "pgvector", "RAG", "Tutor"],
    arch: [
      "PDF",
      "OCR / Processing",
      "Chunking",
      "Embeddings",
      "PostgreSQL + pgvector",
      "RAG",
      "AI Tutor / Assessment",
    ],
    links: [
      { label: "Live Demo", href: "https://web-theta-two-77.vercel.app/", kind: "demo" },
      { label: "GitHub", href: "https://github.com/PailaKarthik/AI-Study-Companion", kind: "github" },
      {
        label: "View Figma",
        href: "https://www.figma.com/make/jA976lVGck9OL8iQsaJVOH/Implement-PDF-Features?t=CLvdJiMxQtT9t9v6-0",
        kind: "figma",
      },
    ],
  },
  {
    index: "03",
    name: "Risk View",
    category: "Location-Aware Travel Safety Intelligence",
    status: "Build Available",
    statusNote: "Expo build — not a web app",
    description:
      "A location-aware travel safety platform: discover nearby scam and danger reports, submit community incidents, monitor real-time safety information through an interactive map.",
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
      "Community incident reporting with reliability signals",
      "AI-assisted report validation and incident summarization",
      "RAG-based retrieval over community reports",
      "Groq-generated, context-aware safety insights",
    ],
    flow: ["Location", "Incidents", "MongoDB", "Retrieval", "Groq", "Safety Insight"],
    arch: [
      "React Native",
      "API",
      "MongoDB",
      "Retrieval",
      "Groq",
      "Safety Intelligence",
    ],
    links: [
      {
        label: "View Build",
        href: "https://expo.dev/accounts/karthikpaila/projects/riskview/builds/feb3d11d-7482-476b-b271-0a02084952fb",
        kind: "build",
      },
      { label: "GitHub", href: "https://github.com/PailaKarthik/RiskView", kind: "github" },
      {
        label: "View Figma",
        href: "https://www.figma.com/make/UiNZEZhH4u5EqfpJKRmgRf/RiskView?t=mWrJpKLtwyyCeVMK-0",
        kind: "figma",
      },
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
    items: ["Next.js", "React", "React Native", "Expo", "Redux", "Tailwind", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "NestJS", "FastAPI", "RESTful APIs", "GraphQL (Basics)", "WebSockets"],
  },
  {
    title: "AI / ML",
    items: ["LLMs", "LangChain & LangGraph", "RAG", "Embeddings", "Vector DB (FAISS)"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "BullMQ", "Firebase"],
  },
  {
    title: "Tools & DevOps",
    items: ["Git", "Docker", "AWS (Basics)", "Figma"],
  },
] as const;

export const achievements = [
  {
    title: "LeetCode Rating",
    metric: "1850+",
    detail: "Top 5% globally · Knight Badge",
  },
  {
    title: "DSA Problems",
    metric: "1500+",
    detail: "Solved on LeetCode & GFG",
  },
  {
    title: "Campus Startup",
    metric: "#1",
    detail: "Selected #1 Campus Startup for ApteeZ — recognized for retention & market potential",
    featured: true,
  },
  {
    title: "Advanced SQL Challenges",
    metric: "50+",
    detail: "98% solution success rate on LeetCode",
  },
  {
    title: "Hackathons",
    metric: "4",
    detail: "1st Runner-Up at Hack24 (MVGR College) — Campus Matrix",
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
    result: "1st Runner-Up",
    description:
      "Interactive campus navigation system with visual map editing, classroom and timetable management, and GPS-based navigation.",
    links: [{ label: "GitHub", href: "https://github.com/PailaKarthik/CampusMatriX" }],
  },
  {
    name: "X_Auditory",
    event: "Hackathon build",
    result: "Participant",
    description:
      "AI-powered hearing assistance app for environmental sound detection using audio classification, directional and priority-based alerts, speech-to-text, and customizable sound modes.",
    links: [{ label: "GitHub", href: "https://github.com/PailaKarthik/X_auditory" }],
  },
  {
    name: "GramaVikas",
    event: "Hackathon build",
    result: "Participant",
    description:
      "Farmer assistance app for crop disease diagnosis using image classification, government scheme discovery, emergency support, environmental risk alerts, and AI chatbot guidance.",
    links: [{ label: "GitHub", href: "https://github.com/PailaKarthik/GramaVikas" }],
  },
] as const;

export const hackathonSummary = "4 participated · 1 top finish" as const;

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
