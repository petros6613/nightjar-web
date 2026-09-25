import Section from '../components/Section.jsx'
import { CONTACT_EMAIL, contact } from '../content.js'

export default function Contact() {
  return (
    <Section id="contact" title={contact.title} split dark>
      <div className="contact">
        <p className="contact-text">{contact.text}</p>
        <a href={`mailto:${CONTACT_EMAIL}`} className="button">
          {contact.action}
        </a>
        <a href={`mailto:${CONTACT_EMAIL}`} className="contact-email">
          {CONTACT_EMAIL}
        </a>
      </div>
    </Section>
  )
}
