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
      <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal delay={0.05} className="flex h-full flex-col justify-center">
          <div className="space-y-4 text-[15.5px] leading-relaxed text-[#d4d4d4]">
            <p>
              Computer Science undergraduate building full-stack and AI-powered
              applications: real-time matchmaking and competitive gameplay with Redis
              and Socket.IO, background processing with BullMQ, and retrieval pipelines
              with PostgreSQL + pgvector.
            </p>
            <p>
              On the AI side I work with LLM integrations end to end — LangChain and
              LangGraph workflows, tool calling, embeddings, RAG with citation
              validation, adaptive assessment and learning telemetry. Backed by
              TypeScript across Next.js, NestJS and Express, with React Native
              for mobile.
            </p>
            <p className="text-[#8a8a8a]">
              Recent work: ApteeZ, a competitive aptitude platform with live 1v1 play;
              an AI study companion that turns PDFs into grounded tutoring; and
              Risk View, a location-aware travel safety app with community intelligence.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.12} className="h-full">
          <aside className="glass lift spotlight flex h-full flex-col rounded-[24px] p-6 sm:p-7" aria-label="Currently exploring">
            <p className="eyebrow">Currently exploring</p>
            <ul className="mt-4 space-y-2.5">
              {exploring.map((e) => (
                <li key={e} className="flex items-center gap-2.5 text-[15px] text-[#d4d4d4]">
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-white" />
                  {e}
                </li>
              ))}
            </ul>
            <div className="mono mt-auto pt-6 text-[12px] leading-relaxed text-[#8a8a8a]">
              <div className="rounded-xl border border-white/10 bg-black/30 p-3.5">
              <span className="text-white">$</span> whoami
              <br />
              cs undergrad · ships systems
              <br />
              full-stack + rag + realtime
              </div>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
