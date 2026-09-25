import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { scrollToTop } from '../lib/smoothScroll.js'

const links = [
  { hash: 'use', label: 'Use' },
  { hash: 'technology', label: 'Technology' },
  { hash: 'story', label: 'Story' },
  { hash: 'progress', label: 'Progress' },
  { hash: 'team', label: 'Team' },
  { hash: 'contact', label: 'Contact us' },
]

export default function Header() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const headerRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState(null)

  // On every scroll: fade the header background in over the first ~70% of the hero,
  // and highlight the menu link of the section in the middle of the screen.
  useEffect(() => {
    const onScroll = () => {
      const fadeDistance = isHome ? window.innerHeight * 0.7 : 1
      const progress = Math.min(window.scrollY / fadeDistance, 1)
      headerRef.current?.style.setProperty('--header-fill', isHome ? progress : 1)
      setScrolled(progress > 0.5)

      const middle = window.innerHeight / 2
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
      // the last section can be too short to reach the middle of the screen
      const current = atBottom
        ? links[links.length - 1]
        : links.find(({ hash }) => {
            const rect = document.getElementById(hash)?.getBoundingClientRect()
            return rect && rect.top <= middle && rect.bottom > middle
          })
      setActiveSection(isHome && current ? current.hash : null)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [isHome])

  const solid = scrolled || !isHome

  return (
    <header ref={headerRef} className={solid ? 'header is-solid' : 'header'}>
      <div className="container header-inner">
        <Link
          to="/"
          className="wordmark"
          // the route effect only fires when the URL changes, so scroll here too
          onClick={() => isHome && scrollToTop({ smooth: true })}
        >
          <img src="/images/nightjar-logo.png" alt="" width="61" height="19" />
          <span className="wordmark-text">Nightjar</span>
        </Link>
        <nav className="nav" aria-label="Main">
          {links.map((link) => (
            <Link
              key={link.hash}
              to={{ pathname: '/', hash: link.hash }}
              className={activeSection === link.hash ? 'is-active' : undefined}
              aria-current={activeSection === link.hash ? 'true' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
