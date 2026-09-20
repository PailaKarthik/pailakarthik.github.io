import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { projects, type Project, type ProjectLink } from "../data/portfolio";
import { ArchitectureDiagram, FlowStrip } from "./ArchitectureDiagram";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { FigmaIcon, GithubIcon } from "./ui/BrandIcons";

function StatusBadge({ status }: { status: Project["status"] }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.07] px-3 py-1 text-xs font-medium text-[#d4d4d4]">
      <span aria-hidden="true" className="size-1.5 rounded-full bg-white" />
      {status}
    </span>
  );
}

function ProjectButton({ link }: { link: ProjectLink }) {
  const primary = link.kind === "demo" || link.kind === "build";
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        primary
          ? "inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-[#d4d4d4]"
          : "glass-soft inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/25"
      }
    >
      {link.kind === "github" && <GithubIcon className="size-4" />}
      {link.kind === "figma" && <FigmaIcon className="size-4" />}
      {link.label}
      <ArrowUpRight className="size-4" aria-hidden="true" />
    </a>
  );
}

function ProjectPanel({ project, defaultOpen }: { project: Project; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  const panelId = `case-${project.index}`;
  return (
    <article
      className="glass group overflow-hidden rounded-[28px] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.18] hover:bg-white/[0.05]"
      aria-labelledby={`${panelId}-title`}
    >
      <div className="p-6 sm:p-10">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="mono text-[12px] tracking-[0.24em] text-[#8a8a8a]">
              {project.index}
            </p>
            <h3
              id={`${panelId}-title`}
              className="mt-2 text-3xl font-semibold tracking-tight text-white uppercase sm:text-5xl"
            >
              {project.name}
            </h3>
            <p className="mt-2 text-[15px] text-[#d4d4d4]">{project.category}</p>
          </div>
          <StatusBadge status={project.status} />
        </div>

        {project.statusNote && (
          <p className="mono mt-3 text-[12px] text-[#8a8a8a]">[{project.statusNote}]</p>
        )}

        <p className="mt-5 max-w-3xl leading-relaxed text-[#d4d4d4]">{project.description}</p>

        <p className="mono mt-5 text-[12.5px] leading-relaxed text-[#8a8a8a]">
          {project.stack.join(" · ")}
        </p>

        <div className="mt-5">
          <FlowStrip steps={project.flow} />
        </div>

        <div className="mt-7 flex flex-wrap gap-2.5">
          {project.links.map((l) => (
            <ProjectButton key={l.label} link={l} />
          ))}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={panelId}
            className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-transparent px-4 py-2.5 text-sm font-medium text-[#d4d4d4] transition-colors hover:border-white/20 hover:text-white"
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
            <div className="grid gap-8 border-t border-white/10 px-6 py-8 sm:px-10 lg:grid-cols-2">
              <div>
                <h4 className="mono text-[12px] tracking-[0.2em] text-white uppercase">Problem</h4>
                <p className="mt-2 text-[15px] leading-relaxed text-[#d4d4d4]">{project.problem}</p>
              </div>
              <div>
                <h4 className="mono text-[12px] tracking-[0.2em] text-white uppercase">Solution</h4>
                <p className="mt-2 text-[15px] leading-relaxed text-[#d4d4d4]">{project.solution}</p>
              </div>
              <div className="lg:col-span-2">
                <h4 className="mono text-[12px] tracking-[0.2em] text-white uppercase">Engineering</h4>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {project.engineering.map((e) => (
                    <li
                      key={e}
                      className="flex gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.02] px-3.5 py-3 text-sm leading-relaxed text-[#d4d4d4]"
                    >
                      <span aria-hidden="true" className="mt-1.5 size-1.5 shrink-0 rounded-full bg-white" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-2">
                <h4 className="mono mb-3 text-[12px] tracking-[0.2em] text-white uppercase">
                  System Architecture
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
    <section id="work" className="wrap scroll-mt-28 py-14 sm:py-20" aria-label="Work">
      <SectionHeading
        index="03"
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
