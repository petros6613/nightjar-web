// All site copy lives here so it can be edited (or translated) in one place.
// Style: no full stop at the end of headings and text blocks (full stops between sentences stay).

// TODO: replace with the real address
export const CONTACT_EMAIL = 'hello@example.com'

// Hero: silhouette for now. When the client delivers the video, set HERO_VIDEO
// to its path (e.g. '/video/hero.mp4') and the Hero swaps the silhouette for it.
export const HERO_VIDEO = null

// Shown large at the end of Technology, and (title only) small in the hero
export const origin = {
  title: 'Proudly designed and made in Europe',
  text: 'All components sourced from Europe and the USA',
}

export const hero = {
  eyebrow: 'Technology for those who protect',
  title: 'Nightjar',
  text: 'Whispering helidrone designed for the unseen',
  image: '/images/nightjar-hero.jpg',
  // TODO: demo only. The wide image has background added by hand; replace with a proper wide render
  imageWide: '/images/nightjar-hero-wide.jpg',
  imageAlt: 'Nightjar micro-helicopter render',
}

// Four facts the client named as the most important
export const keyFacts = [
  { value: 'Silent', text: 'Inaudible to people and animals beyond 10 m' },
  { value: 'Low-profile', text: 'Small visual footprint. Easy to miss, hard to notice' },
  { value: 'Ø 19 cm · 80 g', text: 'Nano UAV class' },
  { value: 'Day + thermal', text: 'Two cameras, one view of the situation' },
]

// Use-case panels: generated scenes with the real Nightjar composited in (both rotors spinning)
export const uses = {
  title: 'See the situation before you step into it',
  scenes: [
    {
      image: '/images/use-security.jpg',
      alt: 'Nightjar above security guards catching an intruder at night',
      title: 'Security',
      subtitle: 'Public and physical protection',
      text: 'A look around, day or night. Quiet enough that nobody notices it is there',
    },
    {
      image: '/images/use-fire.jpg',
      alt: 'Nightjar above hikers cut off by a brush fire',
      title: 'Firefighters',
      subtitle: 'Fire monitoring and rescue',
      text: 'Thermal view of hot spots, the fire front and people in danger, from a safe distance',
    },
    {
      image: '/images/use-surveying.jpg',
      alt: 'Nightjar mapping a narrow tunnel',
      title: 'Surveying',
      subtitle: 'Tunnels and tight spaces',
      text: 'Flies into narrow tunnels and shafts and maps the space around it',
    },
  ],
}

// Technology: kept simple on purpose, the client wants a non-engineer to follow it.
// Two stacked photos: Nightjar's rotor head above a conventional one (swashplate, linkages, servos).
// A point with a `badge` is drawn framed, with the badge on the frame's top-right corner.
export const technology = {
  title: 'Streamlined rotor design',
  lead: 'A single motor both drives the main rotor and controls the flight',
  photos: [
    { src: '/images/tech-rotor-nightjar.jpg', alt: 'Nightjar rotor head', caption: 'Nightjar' },
    {
      src: '/images/tech-rotor-conventional.jpg',
      alt: 'Conventional helicopter rotor head with swashplate and linkages',
      caption: 'Conventional rotor head',
    },
  ],
  points: [
    {
      title: 'Mechanically simple, physically advanced',
      text: 'Micro-helicopters in this class need three extra servos to control the main rotor. Nightjar needs none',
      badge: 'Core innovation · Patent pending',
    },
    {
      title: 'Quieter',
      text: 'Inaudible beyond 10 m. Instinctively mistaken for a small flying animal. No buzzing servos, so nothing sounds like a machine',
    },
    {
      title: 'More reliable',
      text: 'No swashplate, no linkages, no extra servos. Fewer parts to wear out, break or adjust',
    },
    {
      title: 'Longer in the air',
      text: 'Efficient main rotor control means longer flights, more time in action and less downtime',
    },
  ],
  // To-scale size comparison under the rotor heads (drawn in RotorCompare.jsx).
  // Quadcopter = the smallest class found that carries day + thermal cameras for 30+ min
  // (e.g. Parrot ANAFI USA: 282 × 373 mm unfolded, 500 g, 32 min).
  compare: {
    title: 'Why one larger lifting rotor?',
    lead: 'Same mission at a fraction of the weight: lower RPM, higher efficiency, lower acoustic signature',
    mission: 'Same mission',
    missionDetail: ['30+ min in the air', 'Day + thermal camera'],
    nightjar: {
      name: 'Nightjar',
      rotors: 'One main rotor, tail stabilisation',
      weight: '80 g',
      rotor: 'Ø 19 cm',
      length: '25 cm',
    },
    quad: {
      name: 'Comparable quadcopter',
      short: 'Quadcopter',
      rotors: 'Four smaller rotors',
      weight: '≈ 500 g',
      width: '37 cm',
      length: '28 cm',
    },
    // Distance (m) beyond which each aircraft is no longer heard, in the given background noise.
    // Quad: from its declared sound power (84 dB(A)); Nightjar: target values, to be confirmed by measurement.
    noise: {
      title: 'Inaudible beyond',
      places: [
        { place: 'On a typical street', ambient: '≈ 55 dB', nightjar: 10, quad: 50 },
        {
          place: 'In a forest',
          ambient: '≈ 40 dB',
          nightjar: 25,
          quad: 150,
          aside: 'At 10 m, Nightjar is instinctively mistaken for a small flying animal',
        },
      ],
    },
    note: 'Drawn to scale. Quadcopter: the smallest class that carries day + thermal cameras for 30+ min',
  },
  origin,
}

// TODO: the client will send the full story text
export const story = {
  title: 'Named after a bird nobody notices',
  paragraphs: [
    'The nightjar is a bird of dusk. By day it blends into its surroundings; in low light it moves',
    'That is the idea behind our aircraft: small, quiet, and useful exactly when it matters',
  ],
  photo: '/images/nightjar-resting.jpg',
  photoAlt: 'A nightjar resting on a branch',
}

const timelineSteps = [
  { year: '2026', title: 'Prototype and flight tests', current: true },
  { year: '2027', title: 'Field demo with first users' },
  { year: '2028', title: 'Pilot fleets' },
  { year: '2029', title: 'On sale' },
]

export const timeline = {
  // built from the first and last step so the heading cannot drift from the data
  title: `Flight tests in ${timelineSteps[0].year}. On sale in ${timelineSteps.at(-1).year}`,
  now: 'We are here',
  steps: timelineSteps,
}

export const team = {
  title: 'Two engineers from ČVUT',
  founders: [
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
  ],
}

export const contact = {
  title: 'Contact us',
  text: 'We are open to collaboration',
  action: 'Write to us',
}
