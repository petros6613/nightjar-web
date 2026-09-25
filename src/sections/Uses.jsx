import { useState } from 'react'
import useReveal from '../hooks/useReveal.js'
import { uses } from '../content.js'

// Three scenes side by side; the open one is wider and shows its text
export default function Uses() {
  const [ref, visible] = useReveal()
  const [open, setOpen] = useState(0)

  return (
    <section
      id="use"
      ref={ref}
      className={visible ? 'section section-full uses is-visible' : 'section section-full uses'}
    >
      <div className="container">
        <h2 className="section-head reveal">See the situation before you step into it.</h2>
      </div>
      <div className="container-wide panels">
        {uses.map((use, i) => (
          <button
            key={use.title}
            type="button"
            className={i === open ? 'panel is-open' : 'panel'}
            onClick={() => setOpen(i)}
            onMouseEnter={() => setOpen(i)}
            onFocus={() => setOpen(i)}
            aria-expanded={i === open}
          >
            <img src={use.image} alt={use.alt} loading={i === 0 ? 'eager' : 'lazy'} />
            <span className="panel-text">
              <span className="panel-kicker">{use.subtitle}</span>
              <span className="panel-title">{use.title}</span>
              <span className="panel-body">{use.text}</span>
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}
