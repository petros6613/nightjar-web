import Section from '../components/Section.jsx'
import { timeline } from '../content.js'

export default function Timeline() {
  // Progress runs to the middle of the current step
  const currentIndex = timeline.findIndex((step) => step.current)
  const progress = (currentIndex + 0.5) / timeline.length

  return (
    <Section id="progress" title="Flight tests in 2026. On sale in 2029." wide>
      <ol className="timeline" style={{ '--progress': progress }}>
        {timeline.map((step) => (
          <li key={step.year} className={step.current ? 'is-current' : undefined}>
            <span className="timeline-year">{step.year}</span>
            <span className="timeline-title">{step.title}</span>
            {step.current && <span className="timeline-now">We are here</span>}
          </li>
        ))}
      </ol>
    </Section>
  )
}
