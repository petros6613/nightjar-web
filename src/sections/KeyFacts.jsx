import useReveal from '../hooks/useReveal.js'
import { keyFacts } from '../content.js'

export default function KeyFacts() {
  const [ref, visible] = useReveal()

  return (
    <section ref={ref} className={visible ? 'section key-facts is-visible' : 'section key-facts'}>
      <div className="container-wide section-body">
        <ul className="facts">
          {keyFacts.map((fact) => (
            <li key={fact.value}>
              <strong>{fact.value}</strong>
              <p>{fact.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
