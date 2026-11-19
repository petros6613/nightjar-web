// Flag of the European Union: 3:2, twelve five-pointed stars on a circle of radius 1/3 of
// the height, each star's outer radius 1/18 of the height, one point straight up.
function EuFlag() {
  const H = 20
  const ring = H / 3
  const outer = H / 18
  const inner = outer * 0.382 // regular five-pointed star

  const starPoints = (cx, cy) =>
    Array.from({ length: 10 }, (_, k) => {
      const r = k % 2 ? inner : outer
      const a = (k * Math.PI) / 5
      return `${(cx + r * Math.sin(a)).toFixed(3)},${(cy - r * Math.cos(a)).toFixed(3)}`
    }).join(' ')

  return (
    <svg className="eu-flag" viewBox="0 0 30 20" role="img" aria-label="Flag of the European Union">
      <rect width="30" height="20" fill="#039" />
      {Array.from({ length: 12 }, (_, i) => {
        const a = (i * Math.PI) / 6
        return <polygon key={i} points={starPoints(15 + ring * Math.sin(a), 10 - ring * Math.cos(a))} fill="#fc0" />
      })}
    </svg>
  )
}

export default function MadeInEurope({ origin }) {
  return (
    <div className="made-in">
      <div className="container made-in-inner">
        <EuFlag />
        <p>
          <strong>{origin.title}</strong>
          <span>{origin.text}</span>
        </p>
      </div>
    </div>
  )
}
