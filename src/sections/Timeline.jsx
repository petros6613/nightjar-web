import Section from '../components/Section.jsx'
import { timeline } from '../content.js'

export default function Timeline() {
  // Progress runs to the middle of the current step
  const currentIndex = timeline.steps.findIndex((step) => step.current)
  const progress = (currentIndex + 0.5) / timeline.steps.length

  return (
    <Section id="progress" title={timeline.title} wide>
      <ol className="timeline" style={{ '--progress': progress }}>
        {timeline.steps.map((step) => (
          <li key={step.year} className={step.current ? 'is-current' : undefined}>
            <span className="timeline-year">{step.year}</span>
            <span className="timeline-title">{step.title}</span>
            {step.current && <span className="timeline-now">{timeline.now}</span>}
          </li>
        ))}
      </ol>
    </Section>
  )
}
