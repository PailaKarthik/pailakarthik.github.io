import { skills } from "../data/portfolio";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Spotlight } from "./ui/Spotlight";
import { Tilt } from "./ui/Tilt";

const shapes = ["geo-ring", "geo-square", "geo-diamond"];

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
            <Tilt className="h-full" max={4}>
              <Spotlight className="glass lift sheen relative h-full overflow-hidden rounded-[24px] p-6">
                <div>
                  <div className="flex items-start justify-between">
                    <p className="mono text-[11px] tracking-[0.24em] uppercase t3">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <span
                      aria-hidden="true"
                      className={`geo-shape ${shapes[i % shapes.length]}`}
                      style={{
                        width: 30,
                        height: 30,
                        position: "static",
                        opacity: 0.9,
                        animation: `float-a ${7 + i}s ease-in-out infinite`,
                      }}
                    />
                  </div>
                  <h3 className="mono mt-1.5 text-[13px] tracking-[0.18em] uppercase t1">
                    {g.title}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <li
                        key={s}
                        className="pill rounded-lg px-2.5 py-1.5 text-[13.5px] t2"
                        style={{
                          border: "1px solid var(--glass-border)",
                          background: "var(--secondary-btn-bg)",
                        }}
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Spotlight>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
