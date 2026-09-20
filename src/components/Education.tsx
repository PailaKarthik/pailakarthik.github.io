import { GraduationCap } from "lucide-react";
import { education } from "../data/portfolio";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

export function Education() {
  return (
    <section id="education" className="wrap scroll-mt-28 py-14 sm:py-20" aria-label="Education">
      <SectionHeading index="06" eyebrow="Education" title="Concise by design." />
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {education.map((e, i) => (
          <Reveal key={e.degree} delay={i * 0.06}>
            <div className="hairline flex h-full gap-4 rounded-3xl bg-white/[0.015] p-6">
              <span aria-hidden="true" className="grid size-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-white">
                <GraduationCap className="size-5" />
              </span>
              <div>
                <h3 className="font-semibold tracking-tight text-white">{e.school}</h3>
                <p className="mt-0.5 text-sm text-[#8a8a8a]">{e.place}</p>
                <p className="mt-2 text-[15px] text-[#d4d4d4]">{e.degree}</p>
                <p className="mono mt-1.5 text-[12.5px] text-[#8a8a8a]">{e.meta}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
