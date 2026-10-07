import { useCallback, useEffect, useState } from "react";

export type Theme = "dark" | "light";

function getInitial(): Theme {
  if (typeof window === "undefined") return "dark";
  const saved = window.localStorage.getItem("kp-theme");
  if (saved === "light" || saved === "dark") return saved;
  const prefersLight =
    window.matchMedia?.("(prefers-color-scheme: light)").matches ?? false;
  return prefersLight ? "light" : "dark";
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitial);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    window.localStorage.setItem("kp-theme", theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute(
        "content",
        theme === "light" ? "#f5f5f7" : "#050506",
      );
    }
  }, [theme]);

  const toggle = useCallback(
    () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    [],
  );

  return { theme, toggle, mounted };
}
