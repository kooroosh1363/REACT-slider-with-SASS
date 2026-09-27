# GalleryLens — Accessible React Product Gallery

[![Quality](https://github.com/kooroosh1363/REACT-slider-with-SASS/actions/workflows/quality.yml/badge.svg)](https://github.com/kooroosh1363/REACT-slider-with-SASS/actions/workflows/quality.yml)

GalleryLens modernizes the original 2023 React/Sass slider exercise into a real product-gallery component built with React 18, Swiper 10, and modular Sass.

## Why this upgrade matters

The original repository already included React, Sass, Swiper, and six product images, but the gallery component itself only rendered:

```jsx
<div>ImageSliderPro</div>
```

The maintained version turns that placeholder into an actual reusable gallery.

## Features

- primary Swiper product carousel
- thumbnail navigation
- keyboard navigation
- accessible previous/next announcements
- active-slide status
- semantic product-image alternative text
- native dialog detail view
- responsive layout
- reduced-motion handling
- no autoplay
- structured gallery data
- modular Sass tokens
- pure gallery state utilities
- React interaction tests
- production CI
- manual GitHub Pages deployment

## Architecture

```text
galleryItems.js
      │
      ▼
gallery-utils.js
      │
      ▼
ProImageSlider.jsx
      ├── main Swiper
      ├── thumbnail Swiper
      ├── keyboard navigation
      ├── status announcement
      └── native dialog detail view
      │
      ▼
App.jsx
```

Gallery policy such as index clamping, status text, and item normalization lives outside the React component so it can be tested independently.

## Accessibility decisions

The maintained component includes:

- descriptive alt text for every product image
- keyboard-enabled Swiper navigation
- explicit previous/next messages
- polite active-slide status text
- real buttons for thumbnails
- `aria-current` on the selected thumbnail
- a labelled native `<dialog>`
- visible focus indicators
- reduced-motion handling
- no autoplay

Autoplay is intentionally disabled because a product gallery should remain user-controlled.

## Styling

Sass is separated into:

- shared design tokens in `src/styles/_tokens.scss`
- page composition in `src/App.scss`
- gallery component styles in `ProImageSlider.scss`
- global foundation in `src/index.scss`

The original external Google Fonts import was removed.

## Local development

```bash
npm ci
npm start
```

Open:

```text
http://localhost:3000
```

## Tests

```bash
npm test -- --watchAll=false
```

The suite covers:

- slide-index clamping
- accessible status generation
- malformed gallery-data filtering
- empty gallery state
- initial image/status rendering
- thumbnail-driven state changes
- opening the detail dialog
- application-level gallery scope

## Production build

```bash
npm run build
```

Create React App outputs the production bundle into `build/`.

## CI

GitHub Actions runs:

```text
npm ci
  ↓
React/Jest tests
  ↓
production build
```

A merge is only performed after the quality workflow succeeds.

## GitHub Pages

A manual Pages workflow is included. Enable Pages once in:

**Settings → Pages → Source → GitHub Actions**

Then run:

**Actions → Deploy Pages → Run workflow**

The deployment sets the correct project-relative `PUBLIC_URL`.

## Scope

GalleryLens is a front-end product-gallery demo. It does not include inventory, pricing, cart, checkout, analytics, or a backend API.

The source product images are retained from the original repository solely as demo assets.

## License

MIT License.
