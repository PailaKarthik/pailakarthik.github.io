import { AnimatePresence, motion } from "framer-motion";
import { FileText, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { nav, profile } from "../data/portfolio";

/**
 * Scroll-spy: observes each section and marks the dominant
 * visible one active. Clicking a link sets it immediately;
 * the observer corrects it on manual scroll.
 */
function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const setFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && ids.includes(hash)) setActive(hash);
    };
    setFromHash();

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          const id = visible[0].target.id;
          setActive(id);
          window.history.replaceState(null, "", `#${id}`);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    window.addEventListener("hashchange", setFromHash);
    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", setFromHash);
    };
  }, [ids]);

  return [active, setActive] as const;
}

const sectionIds = nav.map((n) => n.id);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="wrap">
        <nav
          aria-label="Primary"
          className="glass mt-3 flex items-center justify-between gap-3 rounded-[20px] py-2 pr-2 pl-4 transition-all duration-300 sm:pl-5"
          style={
            scrolled
              ? { background: "rgba(5,5,5,0.72)", boxShadow: "0 12px 40px -12px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.08)" }
              : { background: "rgba(5,5,5,0.4)" }
          }
        >
          <a href="#home" className="flex shrink-0 items-center gap-2.5" aria-label="Karthik Paila — home">
            <span
              aria-hidden="true"
              className="grid size-8 place-items-center rounded-xl border border-white/15 bg-white/[0.07] text-sm font-bold text-white"
            >
              K
            </span>
            <span className="hidden text-[15px] font-semibold tracking-tight min-[400px]:block">
              Karthik Paila
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex" role="list">
            {nav.map((n) => {
              const isActive = active === n.id;
              return (
                <li key={n.id}>
                  <a
                    href={n.href}
                    aria-current={isActive ? "true" : undefined}
                    onClick={() => setActive(n.id)}
                    className={`relative rounded-xl px-3 py-2 text-[13.5px] transition-colors duration-200 ${
                      isActive ? "text-white" : "text-[#8a8a8a] hover:text-[#d4d4d4]"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        transition={{ type: "spring", stiffness: 420, damping: 36 }}
                        className="absolute inset-0 rounded-xl border border-white/15 bg-white/[0.1] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
                        aria-hidden="true"
                      />
                    )}
                    <span className="relative">{n.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={profile.resumePath}
              download="Karthik-Paila-Resume.pdf"
              className="hidden items-center gap-1.5 rounded-xl border border-white/15 bg-white px-3.5 py-2 text-sm font-semibold text-black transition-colors hover:bg-[#d4d4d4] sm:inline-flex"
            >
              <FileText className="size-4" aria-hidden="true" />
              Resume
            </a>
            <button
              type="button"
              className="grid size-9 place-items-center rounded-xl border border-white/10 bg-white/[0.05] lg:hidden"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.nav
              aria-label="Mobile"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="glass mt-2 overflow-hidden rounded-[20px] p-2 lg:hidden"
            >
              <ul className="flex flex-col">
                {nav.map((n) => {
                  const isActive = active === n.id;
                  return (
                    <li key={n.id}>
                      <a
                        href={n.href}
                        aria-current={isActive ? "true" : undefined}
                        onClick={() => {
                          setActive(n.id);
                          setOpen(false);
                        }}
                        className={`block rounded-xl px-4 py-3 text-[15px] transition-colors ${
                          isActive
                            ? "border border-white/15 bg-white/[0.1] text-white"
                            : "text-[#8a8a8a] hover:bg-white/[0.06] hover:text-white"
                        }`}
                      >
                        {n.label}
                      </a>
                    </li>
                  );
                })}
                <li className="p-2">
                  <a
                    href={profile.resumePath}
                    download="Karthik-Paila-Resume.pdf"
                    className="flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black"
                  >
                    <FileText className="size-4" aria-hidden="true" />
                    Download Resume
                  </a>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
