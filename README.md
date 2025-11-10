# Portfolio — Modern React + Vite

This repository is a personal portfolio website built with React, Vite, TailwindCSS and animation libraries. It showcases projects, skills, and contact information in a performant, animated, and responsive UI.

## Quick overview

- Framework: React (v19)
- Build tool: Vite
- Styling: TailwindCSS
- Animations: Framer Motion, GSAP
- 3D / visual libs: three, @react-three/fiber, @react-three/drei

## Project status

Starter code has been adapted from a Vite React template and extended with portfolio-specific components, sections, and styles.

## Install & run (developer)

Open a terminal and run:

```powershell
npm install
npm run dev    # starts Vite dev server
```

Build for production:

```powershell
npm run build
npm run preview # serve the production build locally
```

Lint the project:

```powershell
npm run lint
```

## Available npm scripts (from package.json)

- `dev` — vite (development server)
- `build` — vite build (production build)
- `preview` — vite preview (serve build)
- `lint` — eslint . (run ESLint)

## Project structure

```
/Portfolio
├─ public/
│  ├─ favicon.ico
│  └─ assets/               # static images and SVGs exported for production
├─ src/
│  ├─ assets/
│  │  ├─ images/
│  │  ├─ svgs/
│  │  └─ lotties/
│  ├─ components/
│  │  ├─ common/            # Button, Icon, Card
│  │  ├─ layout/            # Navbar, Footer, Container
│  │  ├─ hero/              # Hero & katana animation
│  │  ├─ projects/          # ProjectCard, ProjectGrid
│  │  ├─ animations/        # Slash, Glint wrappers
│  │  └─ forms/             # Contact form pieces
│  ├─ pages/                # optional route pages
│  ├─ sections/             # Hero, About, Skills, Projects, Contact
│  ├─ styles/               # Tailwind entry, design tokens
│  ├─ hooks/                # useParallax, useCursor, usePrefersReducedMotion
│  ├─ lib/                  # small utilities
│  ├─ data/                 # projects.json, skills.json
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ package.json
├─ vite.config.js
└─ README.md
```

## Notable dependencies (excerpt)

- react, react-dom
- vite
- tailwindcss
- framer-motion
- gsap
- three, @react-three/fiber, @react-three/drei
- react-router-dom
- react-icons
- @emailjs/browser (for contact form email sending)

(Full list available in `package.json`.)

## How to contribute or customize

- Add/edit projects in `src/data/projects.json` and add images to `src/assets/images/`
- Create new UI components under `src/components/` and reuse `src/components/ui/*` patterns
- Keep styles in `src/styles/` and use design tokens in `src/styles/design-tokens.js`

## Recommended workflow

1. Create a new branch for features: `git checkout -b feat/your-feature`
2. Implement component and styles
3. Add/update unit or visual tests (if any)
4. Run `npm run lint` and `npm run dev` to test locally
5. Open a Pull Request and request a review

## Troubleshooting

- If dev server crashes on startup, ensure Node version is compatible with your dependencies (Node 18+ recommended).
- If Tailwind classes don't apply, ensure `tailwindcss` is installed and your `tailwind.config.js` content paths include `src/**/*`.

## License

MIT — feel free to use this project as a template for your portfolio.

---

If you'd like, I can also:
- Add a short `CONTRIBUTING.md` and `CODE_OF_CONDUCT.md`
- Create a `README_badges.md` with build/lint badges
- Populate `src/data/projects.json` with a sample project entry

