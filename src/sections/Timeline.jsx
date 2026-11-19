import Section from '../components/Section.jsx'
import { timeline } from '../content.js'

export default function Timeline() {
  // Progress runs to the middle of the current step
  const steps = timeline.steps
  const currentIndex = steps.findIndex((step) => step.current)
  const progress = (currentIndex + 0.5) / steps.length

  return (
    <Section id="progress" title={timeline.title} wide>
      <ol
        className="timeline"
        style={{ '--progress': progress, '--steps': steps.length, '--current': currentIndex }}
      >
        {steps.map((step) => (
          <li
            key={step.title}
            className={step.current ? 'is-current' : step.next ? 'is-next' : undefined}
          >
            <span className="timeline-when">{step.when}</span>
            <span className="timeline-year">{step.year}</span>
            <span className="timeline-title">{step.title}</span>
            {step.current && <span className="timeline-now">{timeline.now}</span>}
          </li>
        ))}
      </ol>
    </Section>
  )
}
