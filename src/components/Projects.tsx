import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { projects, type Project, type ProjectLink } from "../data/portfolio";
import { ArchitectureDiagram, FlowStrip } from "./ArchitectureDiagram";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { FigmaIcon, GithubIcon } from "./ui/BrandIcons";
import { Tilt } from "./ui/Tilt";

function StatusBadge({ status }: { status: Project["status"] }) {
  const live = status === "Live";
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium t2"
      style={{ border: "1px solid var(--glass-border)", background: "var(--secondary-btn-bg)" }}
    >
      <span aria-hidden="true" className="relative flex size-1.5">
        {live && (
          <span
            className="absolute inline-flex h-full w-full animate-ping rounded-full"
            style={{ background: "#34c759", opacity: 0.6 }}
          />
        )}
        <span
          className="relative inline-flex size-1.5 rounded-full"
          style={{ background: live ? "#34c759" : "var(--text-1)" }}
        />
      </span>
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
      className={primary ? "btn-primary !px-4 !py-2.5" : "btn-glass !px-4 !py-2.5"}
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
    <Tilt max={2.5}>
      <article
        className="glass lift spotlight sheen group overflow-hidden rounded-[28px]"
        aria-labelledby={`${panelId}-title`}
      >
        <div className="p-6 sm:p-10">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="mono text-[12px] tracking-[0.24em] t3">
                {project.index}
              </p>
              <h3
                id={`${panelId}-title`}
                className="mt-2 text-3xl font-semibold tracking-tight uppercase t1 sm:text-5xl"
              >
                {project.name}
              </h3>
              <p className="mt-2 text-[15px] t2">{project.category}</p>
            </div>
            <StatusBadge status={project.status} />
          </div>

          {project.statusNote && (
            <p className="mono mt-3 text-[12px] t3">[{project.statusNote}]</p>
          )}

          <p className="mt-5 max-w-3xl leading-relaxed t2">{project.description}</p>

          <p className="mono mt-5 text-[12.5px] leading-relaxed t3">
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
              className="btn-glass !bg-transparent"
            >
              {open ? "Hide case study" : "Read case study"}
              <ChevronDown className={`size-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          id={panelId}
          className={`expandable ${open ? "open" : ""}`}
          inert={!open}
        >
          <div>
            <div
              className="grid gap-6 px-5 py-6 sm:gap-8 sm:px-10 sm:py-8 lg:grid-cols-2"
              style={{ borderTop: "1px solid var(--glass-border)" }}
            >
              <div>
                <h4 className="mono text-[12px] tracking-[0.2em] uppercase t1">Problem</h4>
                <p className="mt-2 text-[15px] leading-relaxed t2">{project.problem}</p>
              </div>
              <div>
                <h4 className="mono text-[12px] tracking-[0.2em] uppercase t1">Solution</h4>
                <p className="mt-2 text-[15px] leading-relaxed t2">{project.solution}</p>
              </div>
              <div className="lg:col-span-2">
                <h4 className="mono text-[12px] tracking-[0.2em] uppercase t1">Engineering</h4>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {project.engineering.map((e) => (
                    <li
                      key={e}
                      className="pill flex gap-2.5 rounded-xl px-3.5 py-3 text-sm leading-relaxed t2"
                      style={{ border: "1px solid var(--glass-border)", background: "var(--secondary-btn-bg)" }}
                    >
                      <span aria-hidden="true" className="mt-1.5 size-1.5 shrink-0 rounded-full" style={{ background: "var(--text-1)" }} />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-2">
                <h4 className="mono mb-3 text-[12px] tracking-[0.2em] uppercase t1">
                  System Architecture
                </h4>
                <ArchitectureDiagram steps={project.arch} id={project.index} />
              </div>
            </div>
          </div>
        </div>
      </article>
    </Tilt>
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
            <ProjectPanel project={p} defaultOpen={i === 0} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
