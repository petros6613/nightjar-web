import useReveal from '../hooks/useReveal.js'
import { technology } from '../content.js'

// Image bleeds to the left edge of the screen, copy sits in the right half aligned with the text container
export default function Technology() {
  const [ref, visible] = useReveal()

  return (
    <section
      id="technology"
      ref={ref}
      className={
        visible
          ? 'section section-alt section-full section-bleed is-visible'
          : 'section section-alt section-full section-bleed'
      }
    >
      <div className="bleed-media">
        <img src={technology.image} alt={technology.imageAlt} width="1480" height="832" loading="lazy" />
      </div>
      <div className="bleed-copy">
        <h2 className="section-head reveal">{technology.title}</h2>
        <div className="section-body">
          <div className="technology">
            <p className="technology-lead">{technology.lead}</p>
            <ol className="technology-points">
              {technology.points.map((point, i) => (
                <li key={point.title}>
                  <span className="point-number">0{i + 1}</span>
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
