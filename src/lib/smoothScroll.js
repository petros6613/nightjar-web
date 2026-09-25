import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

let lenis = null

// Smooth, inertial page scrolling. Skipped for people who prefer reduced motion.
export function startSmoothScroll() {
  if (lenis || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  lenis = new Lenis({ autoRaf: true, lerp: 0.09 })
}

export function stopSmoothScroll() {
  lenis?.destroy()
  lenis = null
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
