import { CONTACT_EMAIL, FOOTER_LOCATION } from '../content.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Nightjar Aero s.r.o.</span>
        <span>{FOOTER_LOCATION}</span>
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </div>
    </footer>
  )
}
