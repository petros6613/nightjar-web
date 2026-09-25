import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

let lenis = null

// Smooth, inertial page scrolling plus a light parallax on the large images.
// Skipped for people who prefer reduced motion.
export function startSmoothScroll() {
  if (lenis || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  lenis = new Lenis({ autoRaf: true, lerp: 0.07 })
  lenis.on('scroll', parallax)
  parallax()
}

export function stopSmoothScroll() {
  lenis?.destroy()
  lenis = null
}

// Hero render drifts up slower than the text; the bleed images (technology, story)
// slide a little as their section passes through the viewport. Small on purpose.
function parallax() {
  const y = window.scrollY
  const viewport = window.innerHeight

  const hero = document.querySelector('.hero-image')
  if (hero) hero.style.transform = `translateY(${(y * 0.18).toFixed(1)}px)`

  document.querySelectorAll('.bleed-media img').forEach((img) => {
    const rect = img.closest('.section-bleed').getBoundingClientRect()
    // 0 = section entering from below, 1 = leaving at the top
    const progress = (viewport - rect.top) / (rect.height + viewport)
    img.style.transform = `translateY(${((progress - 0.5) * -12).toFixed(2)}%)`
  })
}

// Lands the section right under the sticky header. Lenis already honours the
// page's scroll-padding-top (see styles.css), so no extra offset is passed here.
export function scrollToElement(el) {
  if (!el) return
  if (lenis) {
    lenis.scrollTo(el, { duration: 1.4 })
  } else {
    const headerHeight = document.querySelector('.header')?.offsetHeight ?? 0
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - headerHeight })
  }
}

export function scrollToTop() {
  if (lenis) lenis.scrollTo(0, { immediate: true })
  else window.scrollTo(0, 0)
}
