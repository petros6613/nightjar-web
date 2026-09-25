import useReveal from '../hooks/useReveal.js'
import { story } from '../content.js'

// Mirror of Technology: copy on the left, photo bleeding to the right edge
export default function Story() {
  const [ref, visible] = useReveal()

  return (
    <section
      id="story"
      ref={ref}
      className={
        visible
          ? 'section section-full section-bleed bleed-right section-night is-visible'
          : 'section section-full section-bleed bleed-right section-night'
      }
    >
      <div className="bleed-copy">
        <h2 className="section-head reveal">{story.title}</h2>
        <div className="section-body">
          <div className="story-text">
            {story.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="bleed-media">
        <img src={story.photo} alt={story.photoAlt} width="1920" height="1280" loading="lazy" />
      </div>
    </section>
  )
}
