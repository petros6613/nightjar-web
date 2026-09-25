# Nightjar Aero website

React + Vite, with React Router set up for adding pages later.

```bash
npm install
npm run dev
```

- Copy (specs, timeline, founders, contact email): `src/content.js`
- Sections of the home page: `src/sections/`
- New pages: add a component in `src/pages/` and a route in `src/router.jsx`
- Styles: `src/styles.css`

When deploying (e.g. Cloudflare Pages), route unknown paths to `index.html` so client-side routes work.
