import { HERO_VIDEO, hero } from '../content.js'

export default function Hero() {
  return (
    <div className="hero">
      {HERO_VIDEO ? (
        <video className="hero-video" src={HERO_VIDEO} autoPlay muted loop playsInline />
      ) : (
        // TODO: demo only. The wide image has background added by hand; replace with a proper wide render
        <picture>
          <source media="(min-width: 761px)" srcSet="/images/nightjar-hero-wide.jpg" />
          <img
            className="hero-image"
            src="/images/nightjar-hero.jpg"
            alt="Nightjar micro-helicopter render"
          />
        </picture>
      )}
      <div className="container hero-content">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1>{hero.title}</h1>
        <p className="hero-text">{hero.text}</p>
      </div>
    </div>
  )
}
