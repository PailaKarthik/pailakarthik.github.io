import { achievements } from "../data/portfolio";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Tilt } from "./ui/Tilt";

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
            <Tilt className="h-full" max={4}>
              <div
                className="glass lift spotlight h-full rounded-[20px] p-6"
                style={
                  "featured" in a && a.featured
                    ? { borderColor: "var(--glass-border-hover)" }
                    : undefined
                }
              >
                <div className="flex items-center justify-between">
                  <p className="eyebrow">{a.title}</p>
                </div>
                <p className="mono mt-3 text-4xl font-semibold tracking-tight t1">{a.metric}</p>
                <p className="mt-2 text-sm leading-relaxed t3">{a.detail}</p>
              </div>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
