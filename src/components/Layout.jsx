import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { scrollToElement, scrollToTop, startSmoothScroll, stopSmoothScroll } from '../lib/smoothScroll.js'

export default function Layout() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    startSmoothScroll()
    return stopSmoothScroll
  }, [])

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
    </>
  )
}
