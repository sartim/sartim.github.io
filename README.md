# Timothy Nyachio — Software & Platform Engineer

Personal portfolio site built with Next.js and exported as a static site for GitHub Pages at [sartim.github.io](https://sartim.github.io).

## Run locally

Prerequisites: Node.js 24 or newer.

From the project root:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The development server reloads automatically as you edit files under `app/`.

To preview the production build locally:

```bash
npm run build
npm run start
```

Then open [http://localhost:3000](http://localhost:3000) again.

## Project structure

- `app/page.tsx`: portfolio content and page sections
- `app/globals.css`: visual design and responsive layout
- `app/layout.tsx`: document and social sharing metadata
- `public/`: static assets
- `next.config.ts`: static export configuration
- `.github/workflows/deploy.yml`: GitHub Pages deployment workflow

## Deployment

Push changes to the `main` branch to publish:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

The live site is published at [https://sartim.github.io](https://sartim.github.io).

## Useful commands

- `npm run dev`: start local development
- `npm run build`: create the static export in `out/`
- `npm run start`: serve the production build locally
