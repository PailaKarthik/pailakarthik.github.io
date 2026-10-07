export function ArchitectureDiagram({ steps, id }: { steps: string[]; id: string }) {
  return (
    <div
      className="scroll-x overflow-x-auto rounded-2xl p-4"
      style={{ border: "1px solid var(--glass-border)", background: "var(--code-bg)" }}
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
                  stroke="var(--text-3)"
                  strokeOpacity="0.7"
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
                fill="var(--secondary-btn-bg)"
                stroke="var(--glass-border)"
                strokeWidth={isLast ? 1.6 : 1}
              />
              <text
                x={x + 59}
                y={42}
                textAnchor="middle"
                fill="var(--text-1)"
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
                fill="var(--text-3)"
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
            <path d="M0,0 L6,3 L0,6" fill="none" stroke="var(--text-3)" strokeWidth="1.2" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}

export function FlowStrip({ steps }: { steps: string[] }) {
  return (
    <ol className="mono flex flex-wrap items-center gap-1.5 text-[12px] t3" aria-label="Data flow">
      {steps.map((s, i) => (
        <li key={s} className="flex items-center gap-1.5">
          {i > 0 && (
            <span aria-hidden="true" className="t1">
              →
            </span>
          )}
          <span
            className="pill rounded-md px-2 py-1"
            style={{ border: "1px solid var(--glass-border)", background: "var(--secondary-btn-bg)" }}
          >
            {s}
          </span>
        </li>
      ))}
    </ol>
  );
}
