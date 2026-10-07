import { ArrowUpRight, Trophy } from "lucide-react";
import { hackathonSummary, hackathons } from "../data/portfolio";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Tilt } from "./ui/Tilt";

export function Hackathons() {
  return (
    <section id="hackathons" className="wrap scroll-mt-28 py-14 sm:py-20" aria-label="Hackathons">
      <SectionHeading
        index="05"
        eyebrow="Hackathons"
        title="4 hackathons. One podium."
        lede="Fast builds under pressure — navigation, accessibility and rural-tech systems."
      />
      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {hackathons.map((h, i) => (
          <Reveal key={h.name} delay={Math.min(i * 0.06, 0.15)}>
            <Tilt className="h-full" max={4}>
              <article className="glass lift spotlight flex h-full flex-col rounded-[20px] p-6">
                {i === 0 && (
                  <p
                    className="inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium t1"
                    style={{ border: "1px solid var(--glass-border-hover)", background: "var(--secondary-btn-bg)" }}
                  >
                    <Trophy className="size-3.5" aria-hidden="true" />
                    Featured
                  </p>
                )}
                <h3 className="mt-3 text-xl font-semibold tracking-tight t1">{h.name}</h3>
                <p className="mono mt-1 text-[12px] t2">{h.event}</p>
                <p className="mono mt-1 text-[12px] t3">{h.result}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed t2">{h.description}</p>
                <div className="mt-4">
                  {h.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-1 text-sm font-medium t2"
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-1)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                    >
                      {l.label}
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </article>
            </Tilt>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.1}>
        <p className="mono mt-6 text-center text-[12px] t3">
          {hackathonSummary}
        </p>
      </Reveal>
    </section>
  );
}
