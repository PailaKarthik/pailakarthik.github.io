import { AnimatePresence, motion } from "framer-motion";
import { FileText, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { nav, profile } from "../data/portfolio";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
          className={`glass mt-3 flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 sm:px-5 ${
            scrolled ? "shadow-[0_12px_40px_-12px_rgba(0,0,0,0.7)]" : "shadow-none"
          }`}
          style={scrolled ? { background: "rgba(10,12,19,0.78)" } : { background: "rgba(10,12,19,0.45)" }}
        >
          <a href="#top" className="flex items-center gap-2.5" aria-label="Karthik Paila — home">
            <span
              aria-hidden="true"
              className="grid size-8 place-items-center rounded-lg text-sm font-bold text-white"
              style={{ background: "linear-gradient(135deg,#4f7cff,#8b7cff)" }}
            >
              K
            </span>
            <span className="text-[15px] font-semibold tracking-tight">Karthik Paila</span>
          </a>

          <ul className="hidden items-center gap-6 lg:flex">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="text-sm text-[#9aa0b2] transition-colors hover:text-white"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={profile.resumePath}
              download="Karthik-Paila-Resume.pdf"
              className="hidden items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.06] px-3.5 py-2 text-sm font-medium transition-colors hover:bg-white/[0.12] sm:inline-flex"
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
              className="glass mt-2 overflow-hidden rounded-2xl p-2 lg:hidden"
            >
              <ul className="flex flex-col">
                {nav.map((n) => (
                  <li key={n.href}>
                    <a
                      href={n.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3 text-[15px] text-[#c9cdd9] transition-colors hover:bg-white/[0.06] hover:text-white"
                    >
                      {n.label}
                    </a>
                  </li>
                ))}
                <li className="p-2">
                  <a
                    href={profile.resumePath}
                    download="Karthik-Paila-Resume.pdf"
                    className="flex items-center justify-center gap-2 rounded-xl bg-[#4f7cff] px-4 py-3 text-sm font-semibold text-white"
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
