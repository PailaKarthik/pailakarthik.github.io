import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { projects, type Project } from "../data/portfolio";
import { GithubIcon } from "./ui/BrandIcons";
import { ArchitectureDiagram, FlowStrip } from "./ArchitectureDiagram";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

function StatusBadge({ status }: { status: Project["status"] }) {
  const styles =
    status === "Live"
      ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
      : status === "In Development"
        ? "border-amber-400/30 bg-amber-400/10 text-amber-300"
        : "border-sky-400/30 bg-sky-400/10 text-sky-300";
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${styles}`}>
      <span aria-hidden="true" className="size-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}

function ProjectPanel({ project, defaultOpen }: { project: Project; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  const panelId = `case-${project.index}`;
  return (
    <article className="glass overflow-hidden rounded-3xl" aria-labelledby={`${panelId}-title`}>
      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="mono text-[12px] tracking-[0.2em] text-[#6b7184]">
              {project.index} / {project.category.toUpperCase()}
            </p>
            <h3 id={`${panelId}-title`} className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              {project.name}
            </h3>
          </div>
          <StatusBadge status={project.status} />
        </div>

        {project.statusNote && (
          <p className="mono mt-3 text-[12px] text-[#6b7184]">[{project.statusNote}]</p>
        )}

        <p className="mt-4 max-w-3xl leading-relaxed text-[#b7bccb]">{project.description}</p>

        <p className="mono mt-5 text-[12.5px] leading-relaxed text-[#8f96a9]">
          {project.stack.join(" · ")}
        </p>

        <div className="mt-5">
          <FlowStrip steps={project.flow} />
        </div>

        <div className="mt-6 flex flex-wrap gap-2.5">
          {project.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className={
                l.kind === "demo"
                  ? "inline-flex items-center gap-1.5 rounded-xl bg-[#4f7cff] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#3d68f0]"
                  : l.kind === "build"
                    ? "inline-flex items-center gap-1.5 rounded-xl border border-sky-400/30 bg-sky-400/10 px-4 py-2.5 text-sm font-semibold text-sky-200 transition-colors hover:bg-sky-400/20"
                    : "inline-flex items-center gap-1.5 rounded-xl border border-white/12 bg-white/[0.05] px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/[0.1]"
              }
            >
              {l.kind === "github" && <GithubIcon className="size-4" />}
              {l.label}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          ))}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={panelId}
            className="inline-flex items-center gap-1.5 rounded-xl border border-white/12 bg-transparent px-4 py-2.5 text-sm font-medium text-[#c9cdd9] transition-colors hover:bg-white/[0.06]"
          >
            {open ? "Hide case study" : "Read case study"}
            <ChevronDown className={`size-4 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="grid gap-6 border-t border-white/10 px-6 py-6 sm:px-8 lg:grid-cols-2">
              <div>
                <h4 className="mono text-[12px] tracking-[0.18em] text-[#4f7cff] uppercase">Problem</h4>
                <p className="mt-2 text-[15px] leading-relaxed text-[#b7bccb]">{project.problem}</p>
              </div>
              <div>
                <h4 className="mono text-[12px] tracking-[0.18em] text-[#4f7cff] uppercase">Solution</h4>
                <p className="mt-2 text-[15px] leading-relaxed text-[#b7bccb]">{project.solution}</p>
              </div>
              <div className="lg:col-span-2">
                <h4 className="mono text-[12px] tracking-[0.18em] text-[#4f7cff] uppercase">Engineering</h4>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {project.engineering.map((e) => (
                    <li
                      key={e}
                      className="flex gap-2.5 rounded-xl border border-white/[0.07] bg-white/[0.02] px-3.5 py-3 text-sm leading-relaxed text-[#c2c7d4]"
                    >
                      <span aria-hidden="true" className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#4f7cff]" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-2">
                <h4 className="mono mb-3 text-[12px] tracking-[0.18em] text-[#4f7cff] uppercase">
                  AI / System Architecture
                </h4>
                <ArchitectureDiagram steps={project.arch} id={project.index} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

export function Projects() {
  return (
    <section id="work" className="wrap scroll-mt-28 py-14 sm:py-20" aria-label="Featured work">
      <SectionHeading
        index="02"
        eyebrow="Work"
        title="Projects built like products."
        lede="Three systems, presented as engineering case studies — the problem, the architecture, and what actually runs."
      />
      <div className="mt-8 space-y-6">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={Math.min(i * 0.06, 0.15)}>
            <ProjectPanel project={p} defaultOpen={i === 1} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}



