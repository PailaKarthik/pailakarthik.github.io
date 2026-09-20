export function ArchitectureDiagram({ steps, id }: { steps: string[]; id: string }) {
  return (
    <div
      className="overflow-x-auto rounded-2xl border border-white/10 bg-black/30 p-4"
      role="img"
      aria-label={`Architecture flow: ${steps.join(" to ")}`}
    >
      <svg
        viewBox={`0 0 ${Math.max(steps.length * 150 - 30, 300)} 84`}
        className="mx-auto min-w-[520px]"
        style={{ width: `${Math.max(steps.length * 132, 560)}px`, maxWidth: "100%" }}
        aria-hidden="true"
      >
        {steps.map((s, i) => {
          const x = i * 150;
          const isLast = i === steps.length - 1;
          return (
            <g key={`${id}-${s}-${i}`}>
              {i > 0 && (
                <line
                  x1={x - 32}
                  y1={42}
                  x2={x - 6}
                  y2={42}
                  stroke="rgba(255,255,255,0.45)"
                  strokeWidth="1.5"
                  markerEnd={`url(#arrow-${id})`}
                  className="flow-line"
                />
              )}
              <rect
                x={x}
                y={14}
                width={118}
                height={56}
                rx={12}
                fill={isLast ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.04)"}
                stroke={isLast ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.14)"}
              />
              <text
                x={x + 59}
                y={42}
                textAnchor="middle"
                fill="#ffffff"
                fontSize="10.5"
                fontFamily="JetBrains Mono, monospace"
              >
                {s.length > 18 ? s.slice(0, 17) + "…" : s}
                {s.length > 18 ? <title>{s}</title> : null}
              </text>
              <text
                x={x + 59}
                y={56}
                textAnchor="middle"
                fill="#8a8a8a"
                fontSize="9"
                fontFamily="JetBrains Mono, monospace"
              >
                {String(i + 1).padStart(2, "0")}
              </text>
            </g>
          );
        })}
        <defs>
          <marker id={`arrow-${id}`} markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}

export function FlowStrip({ steps }: { steps: string[] }) {
  return (
    <ol className="mono flex flex-wrap items-center gap-1.5 text-[12px] text-[#8a8a8a]" aria-label="Data flow">
      {steps.map((s, i) => (
        <li key={s} className="flex items-center gap-1.5">
          {i > 0 && (
            <span aria-hidden="true" className="text-white">
              →
            </span>
          )}
          <span className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1">{s}</span>
        </li>
      ))}
    </ol>
  );
}
