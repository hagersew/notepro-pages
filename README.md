# NotePro

NotePro transforms the way you interact with the web. Instead of copying content into separate apps, you can highlight text directly on any webpage, add your own notes, and keep everything organized in one place.

Whether you're researching, learning, or collecting ideas, NotePro helps you capture insights exactly where they happen.

This project currently includes:

- Landing page with product messaging, features, use-cases, and image gallery slider
- Privacy Policy page
- Responsive layout and image-heavy product showcase sections

## Tech Stack

- React 18
- TypeScript
- Vite
- Chakra UI
- React Router
- React Icons

## Local Development

### Prerequisites

- Node.js 18+ (recommended)
- npm

### Install

```bash
npm install
```

### Run Dev Server

```bash
npm run dev
```

Default local URL: [http://localhost:5173](http://localhost:5173)

## Available Scripts

- `npm run dev` - start Vite dev server
- `npm run build` - type-check and create production build
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint

## Project Structure

- `src/App.tsx` - main page content, routing, and section components
- `src/main.tsx` - app bootstrap and providers
- `src/assets/` - product/gallery image assets
- `src/index.css` / `src/App.css` - global and app-level styles

## Routes

- `/` - NotePro landing page
- `/privacy-policy.html` - dedicated Privacy Policy page

## Content Updates

For most product-page edits, start in `src/App.tsx`:

- Hero copy and call-to-actions
- Feature cards
- Gallery image list and slider behavior
- Footer links and legal navigation

When changing gallery visuals, place new images in `src/assets/` and update the `galleryImages` array in `src/App.tsx`.

## Build Output

Production files are generated in `dist/` after running:

```bash
npm run build
```
