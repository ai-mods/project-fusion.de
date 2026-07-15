# project-fusion.de

One-page website for Project Fusion, built with [Astro](https://astro.build) and deployed to GitHub Pages at [project-fusion.de](https://project-fusion.de).

## Commands

| Command           | Action                                     |
| ----------------- | ------------------------------------------ |
| `npm install`     | Install dependencies                       |
| `npm run dev`     | Start local dev server at `localhost:4321` |
| `npm run build`   | Build production site to `dist/`           |
| `npm run preview` | Preview the production build locally       |
| `npm run check`   | Type-check `.astro` and `.ts` files        |
| `npm run lint`    | Lint with ESLint                           |
| `npm run format`  | Format with Prettier                       |

## Deployment

Every push to `main` triggers the [deploy workflow](.github/workflows/deploy.yml): type-check, lint, build, and deploy to GitHub Pages.
The custom domain is configured via [public/CNAME](public/CNAME).
