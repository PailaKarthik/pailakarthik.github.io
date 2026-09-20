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
            <div className={i === 0 ? "glass h-full rounded-3xl p-6" : "hairline h-full rounded-3xl bg-white/[0.015] p-6"}>
              <p className="eyebrow">{a.title}</p>
              <p className="mono mt-3 text-4xl font-semibold tracking-tight text-white">{a.metric}</p>
              <p className="mt-2 text-sm leading-relaxed text-[#9aa0b2]">{a.detail}</p>
            </div>
          </Reveal>
        ))}
        <Reveal delay={0.2}>
          <div className="flex h-full flex-col justify-between rounded-3xl bg-[#4f7cff] p-6 text-white">
            <p className="mono text-[12px] tracking-[0.18em] uppercase opacity-80">Contest</p>
            <p className="mt-3 text-2xl leading-snug font-semibold">
              ~1100 best global contest rank.
            </p>
            <p className="mt-2 text-sm opacity-85">
              Consistent competitive-programming performance on LeetCode.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
