import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, FileText, Mail } from "lucide-react";
import { profile } from "../data/portfolio";
import { GithubIcon, LinkedinIcon } from "./ui/BrandIcons";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

function HeroVisual() {
  const reduce = useReducedMotion();
  const nodes = [
    { label: "Client", x: 150, y: 26 },
    { label: "API", x: 150, y: 78 },
    { label: "Services", x: 150, y: 130 },
    { label: "DB", x: 52, y: 186 },
    { label: "Redis", x: 150, y: 186 },
    { label: "AI", x: 248, y: 186 },
    { label: "RAG", x: 248, y: 240 },
  ];
  const edges: [number, number][] = [
    [0, 1],
    [1, 2],
    [2, 3],
    [2, 4],
    [2, 5],
    [5, 6],
  ];
  const pos = (i: number) => nodes[i];

  return (
    <div
      className="glass relative overflow-hidden rounded-3xl p-5 sm:p-6"
      role="img"
      aria-label="Abstract system diagram: client requests flow through API and services into database, Redis and AI layers, with retrieval-augmented generation."
    >
      <div className="mb-4 flex items-center justify-between">
        <p className="mono text-[11px] tracking-[0.2em] text-[#6b7184] uppercase">system.graph</p>
        <span className="flex items-center gap-1.5 text-[11px] text-emerald-300/90">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
          </span>
          live
        </span>
      </div>
      <svg viewBox="0 0 300 268" className="w-full" aria-hidden="true">
        {edges.map(([a, b], i) => {
          const A = pos(a);
          const B = pos(b);
          return (
            <line
              key={i}
              x1={A.x}
              y1={A.y + 14}
              x2={B.x}
              y2={B.y - 14}
              stroke="rgba(79,124,255,0.55)"
              strokeWidth="1.5"
              className={reduce ? undefined : "flow-line"}
            />
          );
        })}
        {nodes.map((n) => (
          <g key={n.label}>
            <rect
              x={n.x - 48}
              y={n.y - 14}
              width={96}
              height={28}
              rx={9}
              fill="rgba(255,255,255,0.045)"
              stroke="rgba(255,255,255,0.14)"
            />
            <circle cx={n.x - 34} cy={n.y} r={3} fill="#4f7cff" />
            <text
              x={n.x + 4}
              y={n.y + 4}
              textAnchor="middle"
              fill="#dfe3ee"
              fontSize="11"
              fontFamily="JetBrains Mono, monospace"
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
      <div className="mono mt-4 grid grid-cols-3 gap-2 text-center text-[11px] text-[#9aa0b2]">
        <div className="rounded-lg border border-white/10 bg-white/[0.03] px-2 py-2">realtime</div>
        <div className="rounded-lg border border-white/10 bg-white/[0.03] px-2 py-2">vectors</div>
        <div className="rounded-lg border border-white/10 bg-white/[0.03] px-2 py-2">grounded</div>
      </div>
    </div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const anim = (delay: number) =>
    reduce ? {} : { initial: { opacity: 0, y: 26 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay, ease } };

  return (
    <section id="top" className="wrap pt-32 pb-16 sm:pt-40 sm:pb-20" aria-label="Introduction">
      <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        <div>
          <motion.p {...anim(0)} className="eyebrow">
            <span className="text-[#4f7cff]">●</span> {profile.eyebrow}
          </motion.p>
          <motion.h1
            {...anim(0.08)}
            className="mt-4 text-5xl leading-[1.02] font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            Karthik Paila
          </motion.h1>
          <motion.p {...anim(0.16)} className="mt-5 max-w-xl text-lg leading-relaxed text-[#9aa0b2]">
            {profile.tagline}
          </motion.p>

          <motion.div {...anim(0.24)} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#4f7cff] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-[#3d68f0] hover:shadow-[0_8px_30px_-6px_rgba(79,124,255,0.6)]"
            >
              View Work
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
            <a
              href={profile.resumePath}
              download="Karthik-Paila-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/12 bg-white/[0.05] px-5 py-3 text-sm font-semibold transition-colors hover:bg-white/[0.1]"
            >
              <FileText className="size-4" aria-hidden="true" />
              Download Resume
            </a>
          </motion.div>

          <motion.nav {...anim(0.32)} aria-label="Social links" className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <a href={profile.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-[#9aa0b2] hover:text-white">
              <GithubIcon className="size-4" /> GitHub <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-[#9aa0b2] hover:text-white">
              <LinkedinIcon className="size-4" /> LinkedIn <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
            <a href={profile.links.leetcode} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-[#9aa0b2] hover:text-white">
              LeetCode <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1.5 text-[#9aa0b2] hover:text-white">
              <Mail className="size-4" aria-hidden="true" /> Email <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          </motion.nav>

          <motion.dl
            {...anim(0.4)}
            className="glass-soft mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl sm:grid-cols-4"
          >
            {profile.credibility.map((c) => (
              <div key={c.label} className="bg-white/[0.015] px-4 py-3.5">
                <dt className="order-2 mt-1 block text-[11px] leading-tight text-[#6b7184]">{c.label}</dt>
                <dd className="mono text-base font-semibold text-white">{c.value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div {...anim(0.2)}>
          <HeroVisual />
          <p className="mono mt-3 text-center text-[11px] tracking-wider text-[#6b7184]">
            CLIENT → API → SERVICES → DB / REDIS / AI → RAG
          </p>
        </motion.div>
      </div>
    </section>
  );
}



