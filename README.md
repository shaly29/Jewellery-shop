# Rolex's Bake Mart — Website

A bakery e-commerce website for Rolex's Bake Mart (Jaffna Town), built with React, Vite, Tailwind CSS and Framer Motion. Includes a browsable menu with category filters, cart, checkout flow via WhatsApp, and full site sections (Hero, About, Why Choose Us, Process, Statistics, Testimonials).

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Configuration

- `src/data/config.js` — WhatsApp order number and currency.
- `src/data/products.js` — Menu items (cakes, buns, doughnuts, piece cake, savories, sweets).
- `src/data/content.js` — Site copy: nav links, trust badges, benefits, process steps, stats.
- `src/data/testimonials.js` — Customer testimonials.
- Contact details (address, phone, email) live in `src/components/Footer.jsx` and `src/components/CTA.jsx`.

## Notes

Replace the placeholder images in `src/assets/images/` with real photos of Rolex's Bake Mart products before deploying.
