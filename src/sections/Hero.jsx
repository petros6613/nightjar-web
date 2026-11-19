import { HERO_VIDEO, hero, origin } from '../content.js'
import { EuFlag } from '../components/MadeInEurope.jsx'

export default function Hero() {
  return (
    <div className="hero">
      {HERO_VIDEO ? (
        <video className="hero-video" src={HERO_VIDEO} autoPlay muted loop playsInline />
      ) : (
        <picture>
          {/* same breakpoint as the phone media queries in styles.css (760px) */}
          <source media="(min-width: 761px)" srcSet={hero.imageWide} />
          <img className="hero-image" src={hero.image} alt={hero.imageAlt} />
        </picture>
      )}
      <div className="container hero-content">
        <div className="hero-copy">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1>{hero.title}</h1>
          <p className="hero-text">{hero.text}</p>
        </div>
        {/* bottom-right, level with the intro line: adds no height, so the text stays clear of the render */}
        <p className="hero-made-in">
          <EuFlag />
          <span>{origin.title}</span>
        </p>
      </div>
    </div>
  )
}
