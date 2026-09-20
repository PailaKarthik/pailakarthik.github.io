import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { profile } from "../data/portfolio";
import { GithubIcon, LinkedinIcon } from "./ui/BrandIcons";
import { Reveal } from "./ui/Reveal";

export function Contact() {
  return (
    <section id="contact" className="wrap scroll-mt-28 py-14 sm:py-20" aria-label="Contact">
      <Reveal>
        <div className="glass relative overflow-hidden rounded-[2rem] px-6 py-12 text-center sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(600px 260px at 50% 0%, rgba(79,124,255,0.22), transparent 70%)",
            }}
          />
          <p className="eyebrow relative">07 / Contact</p>
          <h2 className="relative mx-auto mt-3 max-w-xl text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
            Let&apos;s build something useful.
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg text-[#9aa0b2]">
            Open to internships, collaborations and interesting engineering problems — especially
            full-stack and applied AI.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-2.5">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-2xl bg-[#4f7cff] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3d68f0]"
            >
              <Mail className="size-4" aria-hidden="true" />
              Email Me
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/12 bg-white/[0.05] px-5 py-3 text-sm font-medium transition-colors hover:bg-white/[0.1]"
            >
              <LinkedinIcon className="size-4" />
              LinkedIn
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/12 bg-white/[0.05] px-5 py-3 text-sm font-medium transition-colors hover:bg-white/[0.1]"
            >
              <GithubIcon className="size-4" />
              GitHub
            </a>
            <a
              href={profile.links.leetcode}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-2xl border border-white/12 bg-white/[0.05] px-5 py-3 text-sm font-medium transition-colors hover:bg-white/[0.1]"
            >
              LeetCode
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
          <div className="relative mt-6 flex flex-col items-center gap-1.5 text-sm text-[#9aa0b2]">
            <a href={`mailto:${profile.email}`} className="hover:text-white">
              {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-1.5 hover:text-white">
              <Phone className="size-3.5" aria-hidden="true" />
              {profile.phone}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}


