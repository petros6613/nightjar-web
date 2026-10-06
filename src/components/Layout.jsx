import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import LookSwitcher from './LookSwitcher.jsx'
import { scrollToElement, scrollToTop, startSmoothScroll, stopSmoothScroll } from '../lib/smoothScroll.js'
import { startToneWatcher } from '../lib/looks.js'

export default function Layout() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    startSmoothScroll()
    return stopSmoothScroll
  }, [])

  // re-read after a page change too: the sections under the header are different
  useEffect(() => startToneWatcher(), [pathname])

  // Scroll to #section links, or to the top when the page changes
  useEffect(() => {
    if (hash) {
      scrollToElement(document.getElementById(hash.slice(1)))
    } else {
      scrollToTop()
    }
  }, [pathname, hash])

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <LookSwitcher />
    </>
  )
}
