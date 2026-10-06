import { useEffect, useState } from 'react'
import { applyLook, initialLook, looks } from '../lib/looks.js'

// TEMPORARY: floating switch between the visual proposals (also the number keys). See lib/looks.js.
export default function LookSwitcher() {
  const [look, setLook] = useState(initialLook)

  useEffect(() => {
    applyLook(look)
  }, [look])

  useEffect(() => {
    const onKey = (event) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return
      const picked = looks[Number(event.key) - 1]
      if (picked) setLook(picked.id)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="look-switcher" role="group" aria-label="Visual proposal">
      {looks.map((item, i) => (
        <button
          key={item.id}
          type="button"
          className={item.id === look ? 'is-active' : undefined}
          aria-pressed={item.id === look}
          onClick={() => setLook(item.id)}
        >
          <kbd>{i + 1}</kbd>
          {item.name}
        </button>
      ))}
    </div>
  )
}
