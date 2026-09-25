import { useState } from 'react'
import Section from '../components/Section.jsx'
import { uses } from '../content.js'

// Three scenes side by side; the open one is wider and shows its text
export default function Uses() {
  const [open, setOpen] = useState(0)

  return (
    <Section id="use" title={uses.title} className="uses" full wide>
      <div className="panels">
        {uses.scenes.map((scene, i) => (
          <button
            key={scene.title}
            type="button"
            className={i === open ? 'panel is-open' : 'panel'}
            onClick={() => setOpen(i)}
            onMouseEnter={() => setOpen(i)}
            onFocus={() => setOpen(i)}
            aria-expanded={i === open}
          >
            <img src={scene.image} alt={scene.alt} loading={i === 0 ? 'eager' : 'lazy'} />
            <span className="panel-text">
              <span className="panel-kicker">{scene.subtitle}</span>
              <span className="panel-title">{scene.title}</span>
              <span className="panel-body">{scene.text}</span>
            </span>
          </button>
        ))}
      </div>
    </Section>
  )
}
