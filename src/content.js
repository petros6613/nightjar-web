// All site copy lives here so it can be edited (or translated) in one place.

// TODO: replace with the real address
export const CONTACT_EMAIL = 'hello@example.com'

// Hero: silhouette for now. When the client delivers the video, set HERO_VIDEO
// to its path (e.g. '/video/hero.mp4') and the Hero swaps the silhouette for it.
export const HERO_VIDEO = null

export const hero = {
  eyebrow: 'Technology for those who protect',
  title: 'Nightjar',
  text: 'A quiet micro-helicopter for police, firefighters and nature conservation.',
}

// Four facts the client named as the most important
export const keyFacts = [
  { value: 'Silent', text: 'Inaudible to people and animals beyond 10 m.' },
  { value: 'Unobtrusive', text: 'Small visual footprint. Easy to miss, hard to notice.' },
  { value: '30 cm · 70 g', text: 'The size of a nightjar. Black Hornet class.' },
  { value: 'Day + thermal', text: 'Two cameras, one view of the situation.' },
]

// Use-case slideshow
// TODO: police scene: client wants an AI-generated, more action-oriented image (placeholder for now)
// TODO: retouch the scene images so they look less AI-generated
export const uses = [
  {
    image: '/images/forest-silhouette.webp',
    alt: 'Nightjar silhouette flying between trees',
    title: 'Police',
    subtitle: 'Search for people.',
    text: 'A look at a place before anyone walks in. Quiet enough that nobody notices it is there.',
  },
  {
    image: '/images/fire-silhouette.webp',
    alt: 'Nightjar silhouette above a forest fire',
    title: 'Firefighters',
    subtitle: 'Fire monitoring.',
    text: 'Thermal view of hot spots and the fire front, from a safe distance.',
  },
  {
    image: '/images/forest-silhouette.webp',
    alt: 'Nightjar silhouette over a forest',
    title: 'Nature conservation',
    subtitle: 'Wildlife monitoring and preservation.',
    text: 'Watch animals without disturbing them. At 10 m, they cannot hear it.',
  },
]

// Technology: kept simple on purpose, the client wants a non-engineer to follow it
export const technology = {
  title: 'Streamlined design.',
  lead: 'One motor drives the main rotor. No swashplate. Patent pending.',
  points: [
    {
      title: 'One motor instead of four',
      text: 'Micro-helicopters in this class usually need four motors to steer the main rotor. Nightjar needs one.',
    },
    {
      title: 'Fewer moving parts',
      text: 'No swashplate, no linkages. Less to break, less to adjust. More reliable.',
    },
    {
      title: 'Longer in the air',
      text: 'A simpler, more efficient rotor means longer flight time and more time in action.',
    },
  ],
}

// TODO: the client will send the full story text
export const story = {
  title: 'Named after a bird nobody notices.',
  paragraphs: [
    'The nightjar is a bird of dusk. By day it blends into its surroundings; in low light it moves.',
    'That is the idea behind our aircraft: small, quiet, and useful exactly when it matters.',
  ],
  photo: '/images/nightjar-resting.jpg',
  photoAlt: 'A nightjar resting on a branch',
}

export const timeline = [
  { year: '2026', title: 'Prototype and flight tests', current: true },
  { year: '2027', title: 'Field demo with first users' },
  { year: '2028', title: 'Pilot fleets' },
  { year: '2029', title: 'On sale' },
]

export const founders = [
  {
    name: 'Zdeněk Janda',
    role: 'Co-founder',
    photo: '/images/zdenek-janda.jpg',
    points: [
      'Aerospace engineering, ČVUT',
      'Theoretical physics, Charles University',
      'Author of four patents',
      'Entrepreneur, engineering consultant, R&D',
    ],
  },
  {
    name: 'Peter Praženica',
    role: 'Co-founder',
    photo: '/images/peter-prazenica.jpg',
    points: [
      'Materials and manufacturing engineering, ČVUT',
      'Racing car team',
      'R&D',
    ],
  },
]

export const contact = {
  title: 'Contact us',
  text: 'We are open to collaboration.',
  action: 'Write to us',
}
