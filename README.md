# Shubhi Tiwari — Portfolio

> This repository contains the source for a personal developer portfolio built with Vite + React and Tailwind CSS.

## Live demo
Deploy the `dist` output (or connect the repo to Vercel) to publish the site. The project is optimized for fast static hosting.

## Tech stack
- React (Vite)
- Tailwind CSS for styling
- Framer Motion for animation
- Lucide React for icons
- Node.js / npm for tooling

## Quick start
Prerequisites: Node.js (>=18) and npm

1. Install dependencies
```bash
npm install
```

2. Run dev server
```bash
npm run dev
```

3. Build for production
```bash
npm run build
```

4. Preview production build locally
```bash
npm run preview
```

## Project structure (important files)
- `index.html` — app entry HTML
- `src/main.jsx` — React bootstrap
- `src/App.jsx` — main app shell
- `src/index.css` — global styles and Tailwind imports
- `src/components/` — React components (Hero, About, Skills, Projects, Contact, Navbar, Footer)
- `public/` — static assets

## Editing content
- Hero: `src/components/Hero.jsx` — headline, roles, stats, CTAs
- About: `src/components/About.jsx` — about copy and info cards
- Skills: `src/components/Skills.jsx` — update `skillCategories` to add/remove skills
- Projects: `src/components/Projects.jsx` — update `projects` array to add project entries, tech tags, and links
- Contact: `src/components/Contact.jsx` — email, socials, and contact form settings

After editing, run `npm run build` (or `npm run dev`) to verify changes locally.

## Styling and theme
- Tailwind utilities live in `src/index.css` along with a few custom utilities and background treatments. Adjust theme tokens in `tailwind.config.js` if present.

## Deployment
Recommended: connect this repository to Vercel for automatic builds on push. Configure the project to run `npm run build` and serve the `dist` folder.

## Contributing
This is a personal portfolio — fork if you want to adapt it for yourself. For any changes here, follow these steps:

1. Create a feature branch
2. Make edits
3. Run `npm run build` to validate
4. Open a PR describing the changes

## License
Published as-is. Add a license file if you'd like to explicitly permit reuse (MIT recommended).

---
If you want, I can also add a short CONTRIBUTING.md, tidy `package.json` scripts, or prepare a Vercel deployment guide. Which would you like next?
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
