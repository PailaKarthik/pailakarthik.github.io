import { Bot, Layers, MapPin, Zap } from "lucide-react";
import { exploring, profile } from "../data/portfolio";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Tilt } from "./ui/Tilt";
import { Spotlight } from "./ui/Spotlight";

const pillars = [
  {
    icon: Layers,
    title: "Full-stack products",
    desc: "Next.js surfaces, NestJS / Express APIs, Postgres + Prisma. Shipped, not mocked.",
  },
  {
    icon: Zap,
    title: "Realtime infra",
    desc: "Matchmaking, live play & background jobs — Socket.IO, Redis, BullMQ.",
  },
  {
    icon: Bot,
    title: "Applied AI",
    desc: "RAG with citations, LangGraph agents, embeddings on pgvector.",
  },
] as const;

const ticker = [
  "Next.js",
  "TypeScript",
  "NestJS",
  "PostgreSQL",
  "pgvector",
  "Redis",
  "Socket.IO",
  "BullMQ",
  "LangChain",
  "LangGraph",
  "RAG",
  "React Native",
];

export function About() {
  return (
    <section id="about" className="wrap scroll-mt-28 py-14 sm:py-20" aria-label="About">
      <SectionHeading
        index="01"
        eyebrow="About"
        title="I build systems, not just screens."
        lede="CS undergraduate shipping complete products — product surface to database to AI loop. Here's the short version of how I work."
      />

      <div className="mt-6 grid items-stretch gap-4 lg:grid-cols-12">
        {/* ——— Main story card ——— */}
        <Reveal delay={0.05} className="lg:col-span-7">
          <Tilt className="h-full" max={3}>
            <Spotlight className="glass lift relative flex h-full flex-col overflow-hidden rounded-[20px] px-6 pb-6 sm:px-7 sm:pt-3 sm:pb-7">
              {/* calm top glow — single purposeful accent */}
              <div
                aria-hidden="true"
                className="about-glow pointer-events-none absolute inset-x-0 top-0 h-20"
              />
              <div className="relative">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="glass-soft inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium t2"
                  >
                    <MapPin className="size-3.5" aria-hidden="true" />
                    {profile.location}
                  </span>
                  <span
                    className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium t1"
                    style={{ border: "1px solid var(--glass-border)", background: "var(--accent-soft)" }}
                  >
                    <span className="status-dot" aria-hidden="true" />
                    Available for internships
                  </span>
                </div>

                <p className="mt-4 text-[1.65rem] leading-[1.25] font-semibold tracking-tight text-balance t1 sm:text-[2rem]">
                  CS undergrad crafting{" "}
                  <span className="text-gradient">full-stack products</span>{" "}
                  &amp; <span className="text-gradient">grounded AI systems</span>{" "}
                  that feel fast and real.
                </p>

                <div className="mt-3 max-w-xl space-y-3 text-[15px] leading-relaxed t2">
                  <p>
                    I work across the whole loop — UI, APIs, data, realtime
                    infrastructure and LLM integration. Recent work:{" "}
                    <span className="t1 font-medium">ApteeZ</span> (live 1v1
                    aptitude play), an{" "}
                    <span className="t1 font-medium">AI study companion</span>{" "}
                    that turns PDFs into cited tutoring, and{" "}
                    <span className="t1 font-medium">Risk View</span>{" "}
                    (location-aware travel safety).
                  </p>
                  <p className="t3 text-[14.5px]">
                    TypeScript everywhere — Next.js, NestJS, Express, React
                    Native — with Postgres + pgvector, Redis, BullMQ and
                    LangChain / LangGraph under the hood.
                  </p>
                </div>

                {/* pillars */}
                <div className="mt-5 grid gap-2.5 sm:grid-cols-3">
                  {pillars.map((p) => (
                    <div
                      key={p.title}
                      className="pill rounded-2xl p-4"
                      style={{ border: "1px solid var(--glass-border)", background: "var(--secondary-btn-bg)" }}
                    >
                      <p.icon className="size-[18px] t1" aria-hidden="true" />
                      <p className="mt-2.5 text-[13.5px] font-semibold tracking-tight t1">
                        {p.title}
                      </p>
                      <p className="mt-1 text-[12.5px] leading-relaxed t3">
                        {p.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Spotlight>
          </Tilt>
        </Reveal>

        {/* ——— Side stack : terminal + focus ——— */}
        <div className="flex flex-col gap-4 lg:col-span-5">
          <Reveal delay={0.12} className="flex-1">
            <Tilt className="h-full" max={3}>
              <div className="glass lift spotlight flex h-full flex-col overflow-hidden rounded-[20px]">
                {/* terminal chrome */}
                <div
                  className="flex items-center gap-1.5 px-5 py-3.5"
                  style={{ borderBottom: "1px solid var(--glass-border)" }}
                >
                  <span aria-hidden="true" className="term-dot" style={{ background: "#ff5f57" }} />
                  <span aria-hidden="true" className="term-dot" style={{ background: "#febc2e" }} />
                  <span aria-hidden="true" className="term-dot" style={{ background: "#28c840" }} />
                  <span className="mono ml-2 text-[11px] tracking-[0.14em] uppercase t3">
                    karthik — zsh
                  </span>
                </div>
                <div className="mono flex-1 space-y-2 px-5 py-5 text-[12.5px] leading-relaxed">
                  <p className="t3">
                    <span className="t1">$</span> whoami
                  </p>
                  <p className="t1">
                    cs undergrad · ships systems<span className="term-cursor" aria-hidden="true" />
                  </p>
                  <p className="t3">
                    <span className="t1">$</span> stack --prod
                  </p>
                  <p className="t2">
                    full-stack + realtime + rag
                  </p>
                  <p className="t3">
                    <span className="t1">$</span> focus --now
                  </p>
                  <ul className="flex flex-wrap gap-1.5 pt-1">
                    {exploring.map((e) => (
                      <li
                        key={e}
                        className="pill rounded-lg px-2.5 py-1 text-[12px] t2"
                        style={{ border: "1px solid var(--glass-border)", background: "var(--code-bg)" }}
                      >
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Tilt>
          </Reveal>

          <Reveal delay={0.18}>
            <div
              className="glass-soft flex items-center justify-between gap-4 rounded-[20px] px-5 py-4"
            >
              <div>
                <p className="mono text-[11px] tracking-[0.18em] uppercase t3">
                  Currently
                </p>
                <p className="mt-1 text-[14.5px] font-medium tracking-tight t1">
                  Polishing ApteeZ · deep in LangGraph
                </p>
              </div>
              <a
                href="#work"
                className="btn-glass !px-3.5 !py-2 text-[13px] shrink-0"
              >
                See proof
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ——— ticker strip ——— */}
      <Reveal delay={0.1}>
        <div
          className="glass-soft marquee mt-4 overflow-hidden rounded-[16px] py-3"
          aria-hidden="true"
        >
          <div className="marquee-track">
            {[...ticker, ...ticker].map((t, i) => (
              <span key={i} className="marquee-item mono t3">
                {t}
                <span className="marquee-sep" aria-hidden="true">·</span>
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
