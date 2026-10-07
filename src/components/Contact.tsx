import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { profile } from "../data/portfolio";
import { GithubIcon, LinkedinIcon } from "./ui/BrandIcons";
import { Reveal } from "./ui/Reveal";

export function Contact() {
  return (
    <section id="contact" className="wrap scroll-mt-28 py-14 sm:py-20" aria-label="Contact">
      <Reveal>
        <div className="glass sheen relative overflow-hidden rounded-[28px] px-6 py-12 text-center sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(600px 260px at 50% 0%, var(--spot), transparent 70%)",
            }}
          />
          {/* geometric confetti */}
          <div aria-hidden="true" className="geo-shape geo-ring absolute top-8 left-8 hidden sm:block" style={{ width: 56, height: 56, animation: "float-a 9s ease-in-out infinite" }} />
          <div aria-hidden="true" className="geo-shape geo-square absolute right-10 bottom-10 hidden sm:block" style={{ width: 42, height: 42, animation: "float-b 10s ease-in-out infinite" }} />
          <div aria-hidden="true" className="geo-shape geo-diamond absolute top-10 right-12 hidden md:block" style={{ width: 30, height: 30, animation: "float-c 11s ease-in-out infinite", opacity: 0.8 }} />
          <p className="eyebrow relative">07 / Contact</p>
          <h2 className="relative mx-auto mt-3 max-w-xl text-3xl font-semibold tracking-tight text-balance t1 sm:text-5xl">
            Let&apos;s build something useful.
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg t3">
            Open to internships, collaborations and interesting engineering problems — especially
            full-stack and applied AI.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-2.5">
            <a href={`mailto:${profile.email}`} className="btn-primary">
              <Mail className="size-4" aria-hidden="true" />
              Email
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="btn-glass">
              <Phone className="size-4" aria-hidden="true" />
              Call
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass"
            >
              <LinkedinIcon className="size-4" />
              LinkedIn
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass"
            >
              <GithubIcon className="size-4" />
              GitHub
            </a>
            <a
              href={profile.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass"
            >
              LeetCode
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
          <div className="relative mt-6 flex flex-col items-center gap-1.5 text-sm t3">
            <a
              href={`mailto:${profile.email}`}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-1)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            >
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-1.5"
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-1)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            >
              <Phone className="size-3.5" aria-hidden="true" />
              {profile.phone}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
