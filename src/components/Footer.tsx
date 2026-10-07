import { profile } from "../data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="py-10"
      style={{ borderTop: "1px solid var(--glass-border)" }}
      aria-label="Footer"
    >
      <div className="wrap flex flex-col items-center justify-between gap-5 sm:flex-row">
        <div>
          <p className="font-semibold tracking-tight t1">{profile.name}</p>
          <p className="mt-0.5 text-sm t3">{profile.role}</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm t3">
          <a href={profile.links.github} target="_blank" rel="noreferrer" onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-1)")} onMouseLeave={(e) => (e.currentTarget.style.color = "")}>
            GitHub
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-1)")} onMouseLeave={(e) => (e.currentTarget.style.color = "")}>
            LinkedIn
          </a>
          <a href={profile.links.leetcode} target="_blank" rel="noreferrer" onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-1)")} onMouseLeave={(e) => (e.currentTarget.style.color = "")}>
            LeetCode
          </a>
          <a href={`mailto:${profile.email}`} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-1)")} onMouseLeave={(e) => (e.currentTarget.style.color = "")}>
            Email
          </a>
        </nav>
        <p className="mono text-[12px] t3">© {year} {profile.name}</p>
      </div>
    </footer>
  );
}
