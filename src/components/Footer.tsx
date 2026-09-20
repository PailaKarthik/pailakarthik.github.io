import { profile } from "../data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/[0.07] py-10" aria-label="Footer">
      <div className="wrap flex flex-col items-center justify-between gap-5 sm:flex-row">
        <div>
          <p className="font-semibold tracking-tight">{profile.name}</p>
          <p className="mt-0.5 text-sm text-[#6b7184]">{profile.role}</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-[#9aa0b2]">
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="hover:text-white">
            GitHub
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
            LinkedIn
          </a>
          <a href={profile.links.leetcode} target="_blank" rel="noreferrer" className="hover:text-white">
            LeetCode
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-white">
            Email
          </a>
        </nav>
        <p className="mono text-[12px] text-[#6b7184]">© {year} {profile.name}</p>
      </div>
    </footer>
  );
}
