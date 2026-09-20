import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { profile } from "../data/portfolio";
import { GithubIcon, LinkedinIcon } from "./ui/BrandIcons";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

function PortraitCard({ reduce }: { reduce: boolean }) {
  return (
    <div className="glass relative overflow-hidden rounded-[28px] p-2.5">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 z-10 h-48 w-[120%] -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(255,255,255,0.14), transparent)" }}
      />
      <motion.div
        initial={reduce ? {} : { opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.25, ease }}
        className="relative overflow-hidden rounded-[20px]"
      >
        <img
          src={profile.photo}
          alt="Portrait of Karthik Paila"
          fetchPriority="high"
          className="aspect-[4/5] w-full object-cover object-top grayscale-[15%]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 22%, transparent 62%, rgba(0,0,0,0.55) 100%)",
          }}
        />
      </motion.div>
      <div className="flex items-center justify-between px-2.5 py-3">
        <p className="mono text-[11px] tracking-[0.2em] text-[#8a8a8a] uppercase">
          Karthik Paila
        </p>
        <p className="mono flex items-center gap-1.5 text-[11px] text-[#d4d4d4]">
          <span className="relative flex size-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-50" />
            <span className="relative inline-flex size-2 rounded-full bg-white" />
          </span>
          open to work
        </p>
      </div>
    </div>
  );
}

export function Hero() {
  const reduce = useReducedMotion() ?? false;
  const anim = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 26 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease },
        };

  return (
    <section id="home" className="wrap scroll-mt-28 pt-32 pb-16 sm:pt-40 sm:pb-20" aria-label="Home">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div>
          <motion.p {...anim(0)} className="eyebrow">
            {profile.eyebrow}
          </motion.p>
          <motion.h1
            {...anim(0.08)}
            className="mt-4 text-[2.65rem] leading-[1.04] font-bold tracking-tight text-balance text-white sm:text-6xl lg:text-7xl"
          >
            Karthik Paila
          </motion.h1>
          <motion.p {...anim(0.14)} className="mt-4 text-xl font-medium tracking-tight text-white sm:text-2xl">
            {profile.headline}
          </motion.p>
          <motion.p {...anim(0.18)} className="mt-4 max-w-xl leading-relaxed text-[#8a8a8a]">
            {profile.tagline}
          </motion.p>

          <motion.div {...anim(0.24)} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#d4d4d4]"
            >
              View Work
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
            <a
              href={profile.resumePath}
              download="Karthik-Paila-Resume.pdf"
              className="glass-soft inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/25"
            >
              <FileText className="size-4" aria-hidden="true" />
              Download Resume
            </a>
          </motion.div>

          <motion.nav
            {...anim(0.3)}
            aria-label="Social links"
            className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#8a8a8a]"
          >
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <GithubIcon className="size-4" /> GitHub
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <LinkedinIcon className="size-4" /> LinkedIn
            </a>
            <a
              href={profile.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              LeetCode
            </a>
          </motion.nav>

          <motion.dl {...anim(0.36)} className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {profile.stats.map((s) => (
              <div key={s.label}>
                <dd className="text-2xl font-semibold tracking-tight text-white sm:text-[1.7rem]">
                  {s.value}
                </dd>
                <dt className="mono mt-1 text-[11px] tracking-[0.14em] text-[#8a8a8a] uppercase">
                  {s.label}
                </dt>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          {...anim(0.2)}
          className="mx-auto w-full max-w-[340px] lg:max-w-[400px]"
        >
          <PortraitCard reduce={reduce} />
        </motion.div>
      </div>
    </section>
  );
}
