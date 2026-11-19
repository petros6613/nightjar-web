// Top views of Nightjar and a quadcopter with the same mission, drawn to one scale:
// 1 cm = 10 viewBox units in both drawings. The layout gives each drawing a column in
// proportion to its viewBox width (NJ_W : QUAD_W, see .compare-figure in styles.css),
// so the two stay at the same scale on screen. Change both places together.

const NJ_W = 270
const NJ_H = 290
const QUAD_W = 432
const QUAD_H = 342

// Horizontal dimension line with end ticks and a label above it
function DimH({ x1, x2, y, label }) {
  return (
    <g className="dim">
      <line x1={x1} y1={y} x2={x2} y2={y} />
      <line x1={x1} y1={y - 7} x2={x1} y2={y + 7} />
      <line x1={x2} y1={y - 7} x2={x2} y2={y + 7} />
      <text x={(x1 + x2) / 2} y={y - 12} textAnchor="middle">
        {label}
      </text>
    </g>
  )
}

// Nightjar from above, nose left. Main rotor Ø 19 cm, 25 cm from rotor tip to tail rotor.
function NightjarTop({ rotor, length }) {
  const hx = 105 // main rotor hub
  const cy = 143
  return (
    <svg viewBox={`0 0 ${NJ_W} ${NJ_H}`} role="img" aria-label={`Nightjar from above: ${rotor} main rotor, ${length} long`}>
      <DimH x1={hx - 95} x2={hx + 95} y={34} label={rotor} />
      <circle className="disc nj" cx={hx} cy={cy} r={95} />
      {/* two-blade main rotor */}
      <rect className="blade nj" x={hx - 92} y={cy - 5} width={184} height={10} rx={5} transform={`rotate(-28 ${hx} ${cy})`} />
      {/* fuselage, tail boom, tail rotor seen edge-on from above */}
      <path
        className="body"
        d={`M${hx - 62},${cy} C${hx - 62},${cy - 15} ${hx - 45},${cy - 18} ${hx - 25},${cy - 18} L${hx + 25},${cy - 16}
            C${hx + 35},${cy - 15} ${hx + 38},${cy - 8} ${hx + 38},${cy} C${hx + 38},${cy + 8} ${hx + 35},${cy + 15} ${hx + 25},${cy + 16}
            L${hx - 25},${cy + 18} C${hx - 45},${cy + 18} ${hx - 62},${cy + 15} ${hx - 62},${cy} Z`}
      />
      <rect className="body" x={hx + 34} y={cy - 2.5} width={100} height={5} rx={2.5} />
      <line className="tail nj" x1={hx + 106} y1={cy + 9} x2={hx + 154} y2={cy + 9} />
      <rect className="body" x={hx + 128} y={cy} width={4} height={10} />
      <circle className="hub" cx={hx} cy={cy} r={7} />
      <DimH x1={hx - 95} x2={hx + 154} y={268} label={length} />
    </svg>
  )
}

// Quadcopter from above, nose up: 37 cm wide, 28 cm long including the propellers
function QuadTop({ width, length }) {
  const cx = 195
  const cy = 188
  const motors = [
    [cx - 120, cy - 75, 30],
    [cx + 120, cy - 75, -30],
    [cx - 120, cy + 75, -30],
    [cx + 120, cy + 75, 30],
  ]
  return (
    <svg viewBox={`0 0 ${QUAD_W} ${QUAD_H}`} role="img" aria-label={`Quadcopter from above: ${width} wide, ${length} long`}>
      <DimH x1={cx - 185} x2={cx + 185} y={34} label={width} />
      {motors.map(([x, y]) => (
        <line key={`arm${x}${y}`} className="arm" x1={cx} y1={cy} x2={x} y2={y} />
      ))}
      {motors.map(([x, y, a]) => (
        <g key={`prop${x}${y}`}>
          <circle className="disc quad" cx={x} cy={y} r={65} />
          <rect className="blade quad" x={x - 60} y={y - 4} width={120} height={8} rx={4} transform={`rotate(${a} ${x} ${y})`} />
          <circle className="hub" cx={x} cy={y} r={7} />
        </g>
      ))}
      <rect className="body" x={cx - 35} y={cy - 70} width={70} height={140} rx={22} />
      {/* vertical dimension on the right */}
      <g className="dim">
        <line x1={396} y1={cy - 140} x2={396} y2={cy + 140} />
        <line x1={389} y1={cy - 140} x2={403} y2={cy - 140} />
        <line x1={389} y1={cy + 140} x2={403} y2={cy + 140} />
        <text x={428} y={cy} textAnchor="middle" transform={`rotate(-90 428 ${cy})`}>
          {length}
        </text>
      </g>
    </svg>
  )
}

// One distance bar; widths are relative to the longest distance in the noise comparison
function NoiseBar({ who, metres, max, className }) {
  return (
    <div className={`noise-bar ${className}`}>
      <span className="noise-who">{who}</span>
      <span className="noise-track">
        <span className="noise-fill" style={{ width: `${(metres / max) * 100}%` }} />
        <span className="noise-m">{metres}&nbsp;m</span>
      </span>
    </div>
  )
}

export default function RotorCompare({ compare }) {
  const { nightjar, quad, noise } = compare
  const maxMetres = Math.max(...noise.places.map((p) => Math.max(p.nightjar, p.quad)))
  return (
    <div className="rotor-compare">
      <div className="container">
        <h3 className="compare-title">{compare.title}</h3>
        <p className="compare-lead">{compare.lead}</p>

        <div className="compare-figure">
          <figure className="compare-item is-nightjar">
            <div className="compare-art">
              <NightjarTop rotor={nightjar.rotor} length={nightjar.length} />
            </div>
            <figcaption>
              <strong>{nightjar.name}</strong>
              <span>{nightjar.rotors}</span>
              <span className="compare-weight">{nightjar.weight}</span>
            </figcaption>
          </figure>

          <div className="compare-mission">
            <span>{compare.mission}</span>
            <svg className="compare-arrow" viewBox="0 0 160 12" aria-hidden="true">
              <path d="M2,6 H158 M10,1 L2,6 L10,11 M150,1 L158,6 L150,11" />
            </svg>
            {compare.missionDetail.map((line) => (
              <small key={line}>{line}</small>
            ))}
          </div>

          <figure className="compare-item is-quad">
            <div className="compare-art">
              <QuadTop width={quad.width} length={quad.length} />
            </div>
            <figcaption>
              <strong>{quad.name}</strong>
              <span>{quad.rotors}</span>
              <span className="compare-weight">{quad.weight}</span>
            </figcaption>
          </figure>
        </div>

        <div className="compare-noise">
          <h4 className="compare-noise-title">{noise.title}</h4>
          <div className="noise-places">
            {noise.places.map((p) => (
              <div className="noise-place" key={p.place}>
                <p className="noise-where">
                  {p.place} <span>({p.ambient})</span>
                </p>
                <NoiseBar who={nightjar.name} metres={p.nightjar} max={maxMetres} className="is-nightjar" />
                <NoiseBar who={quad.short} metres={p.quad} max={maxMetres} className="is-quad" />
              </div>
            ))}
          </div>
        </div>

        <p className="compare-note">{compare.note}</p>
      </div>
    </div>
  )
}
