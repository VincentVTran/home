# home

Personal site for Vincent Tran, live at https://vincentvtran.github.io/home/.

Built with Vite, React 19, and TypeScript. No runtime dependencies beyond React.

## Develop

```sh
npm install
npm run dev      # http://localhost:5173
```

## Update content

All text lives in `src/data/resume.ts`. Images go in `public/images/`.

## Deploy

```sh
npm run build    # writes the static site to docs/
```

Commit `docs/` and push. GitHub Pages serves the site from the `docs/` folder on `master`.
