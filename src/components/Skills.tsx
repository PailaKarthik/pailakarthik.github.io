import { skills } from "../data/portfolio";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Spotlight } from "./ui/Spotlight";

export function Skills() {
  return (
    <section id="skills" className="wrap scroll-mt-28 py-14 sm:py-20" aria-label="Skills">
      <SectionHeading
        index="02"
        eyebrow="Skills"
        title="A working stack, not a logo wall."
        lede="The tools I actually build with — across product, backend, data and applied AI."
      />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((g, i) => (
          <Reveal key={g.title} delay={Math.min(i * 0.08, 0.4)} y={36}>
            <Spotlight className="glass lift h-full rounded-[24px] p-6">
              <div>
                <p className="mono text-[11px] tracking-[0.24em] text-[#8a8a8a] uppercase">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mono mt-1.5 text-[13px] tracking-[0.18em] text-white uppercase">
                  {g.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li
                      key={s}
                      className="pill rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-[13.5px] text-[#d4d4d4]"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Spotlight>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
