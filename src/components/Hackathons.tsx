import { ArrowUpRight, Trophy } from "lucide-react";
import { hackathons } from "../data/portfolio";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

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
            <article
              className={
                i === 0
                  ? "glass flex h-full flex-col rounded-3xl p-6"
                  : "hairline flex h-full flex-col rounded-3xl bg-white/[0.015] p-6"
              }
            >
              {i === 0 && (
                <p className="inline-flex w-fit items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300">
                  <Trophy className="size-3.5" aria-hidden="true" />
                  Featured
                </p>
              )}
              <h3 className="mt-3 text-xl font-semibold tracking-tight">{h.name}</h3>
              <p className="mono mt-1 text-[12px] text-[#4f7cff]">{h.event}</p>
              <p className="mono mt-1 text-[12px] text-[#9aa0b2]">{h.result}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#b7bccb]">{h.description}</p>
              <div className="mt-4">
                {h.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-[#c9cdd9] hover:text-white"
                  >
                    {l.label}
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.1}>
        <p className="mono mt-6 text-center text-[12px] text-[#6b7184]">
          + 1 more hackathon build — full participation across 4 events.
        </p>
      </Reveal>
    </section>
  );
}
