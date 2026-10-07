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
            <div
              className="lift flex h-full gap-4 rounded-3xl p-6"
              style={{ border: "1px solid var(--glass-border)", background: "var(--glass)" }}
            >
              <span
                aria-hidden="true"
                className="grid size-11 shrink-0 place-items-center rounded-2xl t1"
                style={{ border: "1px solid var(--glass-border)", background: "var(--secondary-btn-bg)" }}
              >
                <GraduationCap className="size-5" />
              </span>
              <div>
                <h3 className="font-semibold tracking-tight t1">{e.school}</h3>
                <p className="mt-0.5 text-sm t3">{e.place}</p>
                <p className="mt-2 text-[15px] t2">{e.degree}</p>
                <p className="mono mt-1.5 text-[12.5px] t3">{e.meta}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
