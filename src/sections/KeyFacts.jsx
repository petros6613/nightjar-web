import Section from '../components/Section.jsx'
import { keyFacts } from '../content.js'

export default function KeyFacts() {
  return (
    <Section className="key-facts" wide>
      <ul className="facts">
        {keyFacts.map((fact) => (
          <li key={fact.value}>
            <strong>{fact.value}</strong>
            <p>{fact.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
