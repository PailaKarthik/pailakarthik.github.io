import { useEffect, useRef } from "react";

/**
 * AmbientScene — mature, minimal backdrop.
 * One soft aurora wash + one faint hairline ring in hero zone.
 * No confetti, no scattered shapes. Mouse parallax is very subtle.
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
        const x = (e.clientX / window.innerWidth - 0.5) * 10;
        const y = (e.clientY / window.innerHeight - 0.5) * 10;
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
      {/* single calm aurora — theme aware via CSS vars */}
      <div
        className="orb orb-1"
        style={{
          width: 640,
          height: 640,
          left: "50%",
          top: "-260px",
          marginLeft: "-320px",
          background: "var(--aurora)",
          transform: "translate(var(--px, 0px), var(--py, 0px))",
        }}
      />
      <div
        className="orb orb-2"
        style={{
          width: 520,
          height: 520,
          right: "-180px",
          bottom: "-200px",
          background: "var(--aurora-2)",
        }}
      />
      {/* one purposeful hairline ring, hero only, very faint */}
      <div
        className="geo-shape geo-ring geo-solo hidden md:block"
        style={{ width: 560, height: 560, left: "50%", top: "-280px", marginLeft: "-280px" }}
      />
    </div>
  );
}
