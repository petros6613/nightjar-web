import Section from '../components/Section.jsx'
import { team } from '../content.js'

export default function Team() {
  return (
    <Section id="team" title={team.title} full wide>
      <ul className="team">
        {team.founders.map((person) => (
          <li key={person.name}>
            <img
              className="portrait"
              src={person.photo}
              alt={person.name}
              width="800"
              height="1000"
              loading="lazy"
            />
            <div className="team-copy">
              <span className="team-role">{person.role}</span>
              <h3>{person.name}</h3>
              <ul className="team-points">
                {person.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
