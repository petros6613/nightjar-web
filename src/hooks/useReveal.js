import { useEffect, useRef, useState } from 'react'

// Returns a ref and whether that element has scrolled into view (once).
export default function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -20% 0px' },
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return [ref, visible]
}
