import { exploring } from "../data/portfolio";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

export function About() {
  return (
    <section id="about" className="wrap scroll-mt-28 py-14 sm:py-20" aria-label="About">
      <SectionHeading
        index="01"
        eyebrow="About"
        title="Engineer for full-stack and applied AI."
        lede="CS undergraduate designing and shipping complete systems — not demos. I work across the stack: product surfaces, APIs, data, realtime infrastructure and LLM integration."
      />
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal delay={0.05}>
          <div className="space-y-4 text-[15.5px] leading-relaxed text-[#b7bccb]">
            <p>
              I build full-stack applications and practical AI-powered systems: real-time
              collaboration and matchmaking with Redis and Socket.IO, background processing with
              BullMQ, and retrieval pipelines with PostgreSQL + pgvector.
            </p>
            <p>
              On the AI side I work with LLM integrations end to end — LangChain and LangGraph
              workflows, tool calling, embeddings, RAG with citation validation, adaptive
              assessment and learning telemetry. Backed by TypeScript across Next.js, NestJS and
              Express, with React Native for mobile.
            </p>
            <p className="text-[#9aa0b2]">
              Recent work: a competitive aptitude platform with live 1v1 play, an AI study
              companion that turns PDFs into grounded tutoring, and a location-aware travel
              safety app with community intelligence.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <aside className="glass h-full rounded-3xl p-6" aria-label="Currently exploring">
            <p className="eyebrow">Currently exploring</p>
            <ul className="mt-4 space-y-2.5">
              {exploring.map((e) => (
                <li key={e} className="flex items-center gap-2.5 text-[15px] text-[#d4d8e3]">
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-[#4f7cff]" />
                  {e}
                </li>
              ))}
            </ul>
            <div className="mono mt-6 rounded-xl border border-white/10 bg-black/30 p-3.5 text-[12px] leading-relaxed text-[#9aa0b2]">
              <span className="text-emerald-300">$</span> whoami
              <br />
              cs undergrad · ships systems
              <br />
              full-stack + rag + realtime
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
