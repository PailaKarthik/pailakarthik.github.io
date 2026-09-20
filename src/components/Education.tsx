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
              <span aria-hidden="true" className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[#4f7cff]/15 text-[#8fa5ff]">
                <GraduationCap className="size-5" />
              </span>
              <div>
                <h3 className="font-semibold tracking-tight">{e.school}</h3>
                <p className="mt-0.5 text-sm text-[#9aa0b2]">{e.place}</p>
                <p className="mt-2 text-[15px] text-[#d4d8e3]">{e.degree}</p>
                <p className="mono mt-1.5 text-[12.5px] text-[#8f96a9]">{e.meta}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
