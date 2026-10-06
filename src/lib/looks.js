// TEMPORARY: visual proposals to compare side by side. Once one is chosen, merge its
// rules from looks.css into styles.css and delete this file, looks.css and LookSwitcher.jsx.

// layout 'sheets' = sections stacked like cards with rounded shoulders; those looks differ only in colour
export const looks = [
  { id: 'current', name: 'Current' },
  { id: 'lichen', name: 'Lichen', layout: 'sheets' },
  { id: 'petrol', name: 'Petrol', layout: 'sheets' },
]

const STORAGE_KEY = 'nightjar-look'
const root = document.documentElement

// ?look=lichen in the URL wins (handy for sending a link), then the last choice, then the current design
export function initialLook() {
  const fromUrl = new URLSearchParams(window.location.search).get('look')
  let stored = null
  try {
    stored = localStorage.getItem(STORAGE_KEY)
  } catch {
    // private window: nothing remembered
  }
  return [fromUrl, stored].find((id) => looks.some((look) => look.id === id)) ?? 'current'
}

export function setLookAttributes(id) {
  root.dataset.look = id
  root.dataset.layout = looks.find((look) => look.id === id)?.layout ?? 'plain'
}

export function applyLook(id) {
  setLookAttributes(id)
  try {
    localStorage.setItem(STORAGE_KEY, id)
  } catch {
    // private window: the choice just does not survive a reload
  }
  updateTone()
}

// Each look says in CSS (--tone on a section) which sections are dark.
// data-top-tone = the tone of whatever sits under the header, so the header can match it.
function updateTone() {
  const underHeader = [...document.querySelectorAll('main > *, .footer')].find((block) => {
    const rect = block.getBoundingClientRect()
    return rect.top <= 32 && rect.bottom > 32
  })
  root.dataset.topTone = (underHeader && getComputedStyle(underHeader).getPropertyValue('--tone').trim()) || 'light'
}

export function startToneWatcher() {
  updateTone()
  window.addEventListener('scroll', updateTone, { passive: true })
  window.addEventListener('resize', updateTone)
  return () => {
    window.removeEventListener('scroll', updateTone)
    window.removeEventListener('resize', updateTone)
  }
}
