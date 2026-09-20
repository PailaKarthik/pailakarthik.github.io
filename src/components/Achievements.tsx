import { achievements } from "../data/portfolio";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

export function Achievements() {
  return (
    <section id="achievements" className="wrap scroll-mt-28 py-14 sm:py-20" aria-label="Achievements">
      <SectionHeading
        index="04"
        eyebrow="Achievements"
        title="Measured, not marketed."
        lede="Contest ratings, problems solved and certifications — exact numbers, no charts invented."
      />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={Math.min(i * 0.05, 0.2)}>
            <div
              className={
                "featured" in a && a.featured
                  ? "glass lift spotlight h-full rounded-[24px] border-white/[0.16] p-6"
                  : "glass lift spotlight h-full rounded-[24px] p-6"
              }
            >
              <p className="eyebrow">{a.title}</p>
              <p className="mono mt-3 text-4xl font-semibold tracking-tight text-white">{a.metric}</p>
              <p className="mt-2 text-sm leading-relaxed text-[#8a8a8a]">{a.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
