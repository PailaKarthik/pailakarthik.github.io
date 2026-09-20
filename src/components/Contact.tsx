import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { profile } from "../data/portfolio";
import { GithubIcon, LinkedinIcon } from "./ui/BrandIcons";
import { Reveal } from "./ui/Reveal";

export function Contact() {
  return (
    <section id="contact" className="wrap scroll-mt-28 py-14 sm:py-20" aria-label="Contact">
      <Reveal>
        <div className="glass relative overflow-hidden rounded-[28px] px-6 py-12 text-center sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(600px 260px at 50% 0%, rgba(255,255,255,0.09), transparent 70%)",
            }}
          />
          <p className="eyebrow relative">07 / Contact</p>
          <h2 className="relative mx-auto mt-3 max-w-xl text-3xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
            Let&apos;s build something useful.
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg text-[#8a8a8a]">
            Open to internships, collaborations and interesting engineering problems — especially
            full-stack and applied AI.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-2.5">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#d4d4d4]"
            >
              <Mail className="size-4" aria-hidden="true" />
              Email
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="glass-soft inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium text-white transition-colors hover:border-white/25"
            >
              <Phone className="size-4" aria-hidden="true" />
              Call
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-soft inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium text-white transition-colors hover:border-white/25"
            >
              <LinkedinIcon className="size-4" />
              LinkedIn
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-soft inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium text-white transition-colors hover:border-white/25"
            >
              <GithubIcon className="size-4" />
              GitHub
            </a>
            <a
              href={profile.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-soft inline-flex items-center gap-1.5 rounded-2xl px-5 py-3 text-sm font-medium text-white transition-colors hover:border-white/25"
            >
              LeetCode
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
          <div className="relative mt-6 flex flex-col items-center gap-1.5 text-sm text-[#8a8a8a]">
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
