// All site copy lives here so it can be edited (or translated) in one place.
// Style: no full stop after headings, short labels and the Use panels (those use commas instead).
// The Technology points and the Story paragraphs are full sentences and end with a full stop.

export const CONTACT_EMAIL = 'info@nightjar-aero.com'

// Footer, between the company name and the e-mail
export const FOOTER_LOCATION = 'HQ and R&D facility in Prague, Czech\u00a0Republic'

// Hero: silhouette for now. When the client delivers the video, set HERO_VIDEO
// to its path (e.g. '/video/hero.mp4') and the Hero swaps the silhouette for it.
export const HERO_VIDEO = null

// Shown large at the end of Technology, and (title only) small in the hero
export const origin = {
  title: 'Proudly designed and made in the EU',
  text: 'All components sourced from the EU and the USA',
}

export const hero = {
  eyebrow: 'Technology for those who protect',
  title: 'Nightjar',
  // registered trademark, shown small and raised after the name in the hero only
  mark: '®',
  text: 'Whispering helidrone designed for the unseen',
  image: '/images/nightjar-hero.jpg',
  // TODO: demo only. The wide images have background added by hand; replace with a proper wide render.
  // Two wide versions: the large one (bigger, lower, more central) on monitors >= 1580 px wide with an
  // aspect ratio up to 2.35; the other everywhere else above 760 px, where the tall heading needs the room.
  imageWide: '/images/nightjar-hero-wide.jpg',
  imageLarge: '/images/nightjar-hero-large.jpg',
  imageAlt: 'Nightjar micro-helicopter render',
}

// Four facts the client named as the most important
export const keyFacts = [
  { value: 'Silent', text: 'Inaudible to people and animals beyond 10 m' },
  { value: 'Low-profile', text: 'Small visual footprint, easy to miss, hard to notice' },
  { value: 'Ø\u00a019\u00a0cm · 80\u00a0g', text: 'Nano UAV class' },
  { value: 'Day + Thermal', text: 'Two cameras, one view of the situation' },
]

// Use-case panels: generated scenes with the real Nightjar composited in (both rotors spinning)
export const uses = {
  title: 'See the situation before you step into it',
  scenes: [
    {
      image: '/images/use-security.jpg',
      alt: 'Nightjar day and thermal view from above: three intruders cutting the fence of a guarded compound at night',
      title: 'Security',
      subtitle: 'Public and physical protection',
      text: 'A look around, day or night, quiet enough that nobody notices it is there',
    },
    {
      image: '/images/use-fire.jpg',
      alt: 'Nightjar thermal view from above a burning building in a city block, with a hidden hot spot under the smoke',
      title: 'Firefighters',
      subtitle: 'Fire monitoring and rescue',
      text: 'Thermal view of hot spots, the fire front and people in danger, from a safe distance',
    },
    {
      image: '/images/use-surveying.jpg',
      alt: 'Nightjar flying into a narrow tunnel to map it',
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
      text: 'Micro-helicopters in this class need three extra servos to control the main rotor. Nightjar needs none.',
      badge: 'Core innovation · Patent pending',
    },
    {
      title: 'Quieter',
      text: 'Inaudible beyond 10 m. Instinctively mistaken for a small flying animal. No buzzing servos, so nothing sounds like a machine.',
    },
    {
      title: 'More reliable',
      text: 'No swashplate, no linkages, no extra servos. Fewer parts to wear out, break or adjust.',
    },
    {
      title: 'Longer in the air',
      text: 'Efficient main rotor control means longer flights, more time in action and less downtime.',
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
      rotor: 'Ø\u00a019\u00a0cm',
      length: '25\u00a0cm',
    },
    quad: {
      name: 'Comparable quadcopter',
      short: 'Quadcopter',
      rotors: 'Four smaller rotors',
      weight: '≈\u00a0500\u00a0g',
      width: '37\u00a0cm',
      length: '28\u00a0cm',
    },
    // Distance (m) beyond which each aircraft is no longer heard, in the given background noise.
    // Quad: from its declared sound power (84 dB(A)); Nightjar: target values, to be confirmed by measurement.
    noise: {
      title: 'Inaudible beyond',
      places: [
        { place: 'On a typical street', ambient: '≈\u00a055\u00a0dB', nightjar: 10, quad: 50 },
        {
          place: 'In a forest',
          ambient: '≈\u00a040\u00a0dB',
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
    'The nightjar is a bird of dusk. By day it blends into its surroundings; in low light it moves.',
    'That is the idea behind our aircraft: small, quiet, and useful exactly when it matters.',
  ],
  photo: '/images/nightjar-resting.jpg',
  photoAlt: 'A nightjar resting on a branch',
}

const timelineSteps = [
  { when: 'Early', year: '2025', title: 'The idea of a swashplateless helicopter rotor' },
  { when: 'November', year: '2025', title: 'Proof of concept' },
  { when: 'February', year: '2026', title: 'Nightjar Aero s.r.o. founded' },
  { when: 'November', year: '2026', title: 'First flight', current: true },
  // open end: no date, drawn faded, the rail fades out towards it
  { when: 'Coming', year: 'Next', title: 'Field demo with first users', next: true },
]

export const timeline = {
  title: 'From idea to first flight in under two years',
  now: 'We are here',
  steps: timelineSteps,
}

export const team = {
  title: 'Two engineers building for real customers',
  founders: [
    {
      name: 'Zdeněk Janda',
      role: 'Co-founder',
      photo: '/images/zdenek-janda.jpg',
      points: [
        'Aerospace engineering, CTU\u00a0in\u00a0Prague',
        'Theoretical physics, Charles University',
        'Author of four patents',
        'Entrepreneur, simulation & structural engineer',
        'R&D',
      ],
    },
    {
      name: 'Peter Praženica',
      role: 'Co-founder',
      photo: '/images/peter-prazenica.jpg',
      points: [
        'Materials and manufacturing engineering, CTU\u00a0in\u00a0Prague',
        'eForce Prague Formula Student alumnus (Drivetrain)',
        // non-breaking space: "(Recovery system)" wraps as one piece, never "system)" alone
        'Czech Rocket Challenge alumnus (Recovery\u00a0system)',
        'Hands-on builder',
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
