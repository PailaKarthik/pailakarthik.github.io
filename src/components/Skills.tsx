import { skills } from "../data/portfolio";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

export function Skills() {
  return (
    <section id="skills" className="wrap scroll-mt-28 py-14 sm:py-20" aria-label="Skills">
      <SectionHeading
        index="03"
        eyebrow="Skills"
        title="A working stack, not a logo wall."
        lede="The tools I actually build with — across product, backend, data and applied AI."
      />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((g, i) => (
          <Reveal key={g.title} delay={Math.min(i * 0.05, 0.2)}>
            <div
              className={
                i < 2
                  ? "glass h-full rounded-3xl p-6"
                  : "hairline h-full rounded-3xl bg-white/[0.015] p-6"
              }
            >
              <h3 className="mono text-[12px] tracking-[0.18em] text-[#4f7cff] uppercase">
                {g.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li
                    key={s}
                    className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-[13.5px] text-[#d4d8e3]"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
