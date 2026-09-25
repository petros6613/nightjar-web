import useReveal from '../hooks/useReveal.js'

// alt: panel background; dark: accent background; split: heading left, body right;
// full: at least one screen tall; wide: body in the wide container, heading stays in the text one
export default function Section({
  id,
  title,
  alt = false,
  dark = false,
  split = false,
  full = false,
  wide = false,
  children,
}) {
  const [ref, visible] = useReveal()
  const classes = [
    'section',
    alt && 'section-alt',
    dark && 'section-dark',
    split && 'section-split',
    full && 'section-full',
    visible && 'is-visible',
  ]
    .filter(Boolean)
    .join(' ')

  if (wide) {
    return (
      <section id={id} ref={ref} className={classes}>
        <div className="container">
          <h2 className="section-head reveal">{title}</h2>
        </div>
        <div className="container-wide section-body">{children}</div>
      </section>
    )
  }

  return (
    <section id={id} ref={ref} className={classes}>
      <div className="container">
        <h2 className="section-head reveal">{title}</h2>
        <div className="section-body">{children}</div>
      </div>
    </section>
  )
}
