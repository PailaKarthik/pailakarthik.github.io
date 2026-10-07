import { AnimatePresence, motion } from "framer-motion";
import { FileText, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { nav, profile } from "../data/portfolio";
import type { Theme } from "./ui/useTheme";

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

export function Navbar({
  theme,
  onToggleTheme,
}: {
  theme: Theme;
  onToggleTheme: () => void;
}) {
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
          style={{
            background: scrolled
              ? "var(--nav-bg-scrolled)"
              : "var(--nav-bg)",
          }}
        >
          <a href="#home" className="flex shrink-0 items-center gap-2.5" aria-label="Karthik Paila — home">
            <span
              aria-hidden="true"
              className="grid size-8 place-items-center rounded-xl text-sm font-bold t1"
              style={{
                border: "1px solid var(--glass-border)",
                background: "var(--secondary-btn-bg)",
              }}
            >
              K
            </span>
            <span className="hidden text-[15px] font-semibold tracking-tight min-[400px]:block t1">
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
                    className={`nav-link relative rounded-xl px-3 py-2 text-[13.5px] transition-colors duration-200 ${
                      isActive ? "t1" : "t3 hover:t2"
                    }`}
                    style={isActive ? undefined : { color: "var(--text-3)" }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        transition={{ type: "spring", stiffness: 420, damping: 36 }}
                        className="absolute inset-0 rounded-xl"
                        style={{
                          border: "1px solid var(--glass-border)",
                          background: "var(--secondary-btn-bg)",
                        }}
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
            <button
              type="button"
              onClick={onToggleTheme}
              className="theme-toggle"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              title={theme === "dark" ? "Light mode" : "Dark mode"}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ rotate: -70, opacity: 0, scale: 0.7 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 70, opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="grid place-items-center"
                >
                  {theme === "dark" ? (
                    <Sun className="size-[18px]" aria-hidden="true" />
                  ) : (
                    <Moon className="size-[18px]" aria-hidden="true" />
                  )}
                </motion.span>
              </AnimatePresence>
            </button>
            <a
              href={profile.resumePath}
              download="Karthik-Paila-Resume.pdf"
              className="btn-primary hidden !py-2 !px-3.5 sm:inline-flex"
            >
              <FileText className="size-4" aria-hidden="true" />
              Resume
            </a>
            <button
              type="button"
              className="grid size-9 place-items-center rounded-xl t1 lg:hidden"
              style={{ border: "1px solid var(--glass-border)", background: "var(--secondary-btn-bg)" }}
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
              initial={{ opacity: 0, y: -8, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -8, filter: "blur(6px)" }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
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
                        className="block rounded-xl px-4 py-3 text-[15px] transition-colors"
                        style={
                          isActive
                            ? {
                                border: "1px solid var(--glass-border)",
                                background: "var(--secondary-btn-bg)",
                                color: "var(--text-1)",
                              }
                            : { color: "var(--text-3)" }
                        }
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
                    className="btn-primary w-full justify-center"
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
