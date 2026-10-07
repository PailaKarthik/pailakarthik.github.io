import { useEffect, useRef } from "react";

/**
 * GeometricScene — Apple-quiet floating geometry.
 * Blurred orbs (theme-aware) + crisp outline shapes:
 * rings, rounded squares, diamond, dots, plus-marks.
 * Gentle CSS float loops + subtle mouse parallax.
 */
export function GeometricScene() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 22;
        const y = (e.clientY / window.innerHeight - 0.5) * 22;
        el.style.setProperty("--px", `${x.toFixed(2)}px`);
        el.style.setProperty("--py", `${y.toFixed(2)}px`);
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="geo-layer" aria-hidden="true">
      {/* blurred orbs */}
      <div
        className="orb orb-1"
        style={{
          width: 520,
          height: 520,
          left: "-140px",
          top: "-120px",
          background: "var(--orb-1)",
          transform: "translate(var(--px, 0px), var(--py, 0px))",
        }}
      />
      <div
        className="orb orb-2"
        style={{
          width: 460,
          height: 460,
          right: "-120px",
          top: "22%",
          background: "var(--orb-2)",
        }}
      />
      <div
        className="orb"
        style={{
          width: 380,
          height: 380,
          left: "32%",
          bottom: "-160px",
          background: "var(--orb-3)",
          animation: "orb-drift-1 20s ease-in-out infinite",
        }}
      />

      {/* crisp geometry */}
      <div
        className="geo-shape geo-ring hidden sm:block"
        style={{ width: 190, height: 190, left: "6%", top: "18%", animation: "float-a 11s ease-in-out infinite, pulse-ring 7s ease-in-out infinite" }}
      />
      <div
        className="geo-shape geo-ring hidden sm:block"
        style={{ width: 64, height: 64, left: "9.5%", top: "24%", animation: "float-b 9s ease-in-out infinite", opacity: 0.7 }}
      />
      <div
        className="geo-shape geo-square"
        style={{ width: 96, height: 96, right: "7%", top: "14%", animation: "float-b 12s ease-in-out infinite" }}
      />
      <div
        className="geo-shape geo-square hidden md:block"
        style={{ width: 44, height: 44, right: "12.5%", top: "11%", animation: "float-a 8s ease-in-out infinite", opacity: 0.65 }}
      />
      <div
        className="geo-shape geo-diamond hidden md:block"
        style={{ width: 72, height: 72, left: "12%", bottom: "20%", animation: "float-c 13s ease-in-out infinite" }}
      />
      <div
        className="geo-shape geo-ring hidden lg:block"
        style={{ width: 120, height: 120, right: "14%", bottom: "16%", animation: "float-a 10s ease-in-out infinite" }}
      />
      {/* dotted cluster */}
      <div className="hidden md:flex" style={{ position: "absolute", left: "44%", top: "12%", gap: 8, animation: "float-b 10s ease-in-out infinite" }}>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <span key={i} className="geo-shape geo-dot" style={{ width: 6, height: 6, position: "static", opacity: 0.5 + (i % 3) * 0.2 }} />
        ))}
      </div>
      {/* plus marks */}
      <svg className="geo-cross hidden sm:block" style={{ position: "absolute", left: "78%", top: "46%" }} width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4v20M4 14h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <svg className="geo-cross hidden sm:block" style={{ position: "absolute", left: "20%", top: "58%", opacity: 0.7 }} width="20" height="20" viewBox="0 0 28 28" fill="none">
        <path d="M14 4v20M4 14h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
      {/* thin orbit ring */}
      <div
        className="geo-shape geo-ring hidden lg:block"
        style={{ width: 300, height: 300, left: "58%", top: "-110px", opacity: 0.5, animation: "spin-slow 60s linear infinite", borderStyle: "dashed" }}
      />
    </div>
  );
}
