import { useState } from "react";
import { ArrowUpRight, Check, ChevronDown, CircleAlert, Lightbulb } from "lucide-react";
import { projects, type Project, type ProjectLink } from "../data/portfolio";
import { ArchitectureDiagram, FlowStrip } from "./ArchitectureDiagram";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { FigmaIcon, GithubIcon } from "./ui/BrandIcons";
import { Tilt } from "./ui/Tilt";
import { Spotlight } from "./ui/Spotlight";

function StatusBadge({ status }: { status: Project["status"] }) {
  const live = status === "Live";
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium t2"
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
          style={{ background: live ? "#34c759" : "var(--accent)" }}
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
    <Tilt max={2}>
      <Spotlight
        className="glass lift group relative overflow-hidden rounded-[20px]"
        aria-labelledby={`${panelId}-title`}
      >
        {/* calm top glow + ghost index */}
        <div aria-hidden="true" className="work-glow pointer-events-none absolute inset-x-0 top-0 h-30" />
        <span aria-hidden="true" className="ghost-num mono">
          {project.index}
        </span>

        <div className="relative px-6 pt-2 pb-6 sm:px-7 sm:pt-3 sm:pb-7">
          {/* meta row */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="mono text-[11px] tracking-[0.24em] t3">
              {project.index}
            </span>
            <span
              className="mono rounded-full px-3 py-1 text-[11px] tracking-[0.08em] uppercase t2"
              style={{ border: "1px solid var(--glass-border)", background: "var(--code-bg)" }}
            >
              {project.category}
            </span>
            <span className="ml-auto">
              <StatusBadge status={project.status} />
            </span>
          </div>

          <h3
            id={`${panelId}-title`}
            className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-balance t1 sm:text-5xl"
          >
            {project.name}
          </h3>

          {project.statusNote && (
            <p className="mono mt-1.5 text-[12px] t3">[{project.statusNote}]</p>
          )}

          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed t2">
            {project.description}
          </p>

          {/* stack */}
          <p className="mono mt-4 text-[11px] tracking-[0.2em] uppercase t3">
            Stack
          </p>
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <li
                key={s}
                className="pill mono rounded-lg px-2.5 py-1.5 text-[12px] t2"
                style={{ border: "1px solid var(--glass-border)", background: "var(--secondary-btn-bg)" }}
              >
                {s}
              </li>
            ))}
          </ul>

          {/* pipeline */}
          <p className="mono mt-4 text-[11px] tracking-[0.2em] uppercase t3">
            Flow
          </p>
          <div className="mt-2">
            <FlowStrip steps={project.flow} />
          </div>

          <div className="mt-5 flex flex-wrap gap-2.5">
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
              className="relative grid gap-3 px-6 pb-6 sm:px-9 sm:pb-9 lg:grid-cols-2"
              style={{ borderTop: "1px solid var(--glass-border)", paddingTop: "1.5rem" }}
            >
              <div
                className="rounded-2xl p-5"
                style={{ border: "1px solid var(--glass-border)", background: "var(--code-bg)" }}
              >
                <h4 className="mono flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase t3">
                  <CircleAlert className="size-4" style={{ color: "var(--accent)" }} aria-hidden="true" />
                  Problem
                </h4>
                <p className="mt-2.5 text-[14.5px] leading-relaxed t2">{project.problem}</p>
              </div>
              <div
                className="rounded-2xl p-5"
                style={{ border: "1px solid var(--glass-border)", background: "var(--code-bg)" }}
              >
                <h4 className="mono flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase t3">
                  <Lightbulb className="size-4" style={{ color: "var(--accent)" }} aria-hidden="true" />
                  Solution
                </h4>
                <p className="mt-2.5 text-[14.5px] leading-relaxed t2">{project.solution}</p>
              </div>
              <div
                className="rounded-2xl p-5 lg:col-span-2"
                style={{ border: "1px solid var(--glass-border)", background: "var(--secondary-btn-bg)" }}
              >
                <h4 className="mono text-[11px] tracking-[0.2em] uppercase t3">Engineering</h4>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {project.engineering.map((e) => (
                    <li
                      key={e}
                      className="flex gap-2.5 rounded-xl px-3.5 py-3 text-[13.5px] leading-relaxed t2"
                      style={{ border: "1px solid var(--glass-border)", background: "var(--code-bg)" }}
                    >
                      <Check className="mt-0.5 size-4 shrink-0" style={{ color: "var(--accent)" }} aria-hidden="true" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-2">
                <h4 className="mono mb-3 text-[11px] tracking-[0.2em] uppercase t3">
                  System Architecture
                </h4>
                <ArchitectureDiagram steps={project.arch} id={project.index} />
              </div>
            </div>
          </div>
        </div>
      </Spotlight>
    </Tilt>
  );
}

export function Projects() {
  return (
    <section id="work" className="wrap scroll-mt-28 py-14 sm:py-20" aria-label="Work">
      <SectionHeading
        index="03"
        eyebrow="Work"
        title="Proof, not promises."
        lede="Three systems, presented as engineering case studies — the problem, the architecture, and what actually runs."
      />
      {/* quick nav */}
      <div className="mt-6 flex flex-wrap gap-2">
        {projects.map((p) => (
          <a
            key={p.index}
            href={`#case-${p.index}`}
            className="pill mono rounded-full px-3.5 py-2 text-[12px] t3"
            style={{ border: "1px solid var(--glass-border)", background: "var(--secondary-btn-bg)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-1)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "")}
          >
            <span style={{ color: "var(--accent)" }}>{p.index}</span>
            {"  "}{p.name}
          </a>
        ))}
      </div>
      <div className="mt-6 space-y-5">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={Math.min(i * 0.06, 0.15)}>
            <ProjectPanel project={p} defaultOpen={i === 0} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
