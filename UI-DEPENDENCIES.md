# Modern UI dependencies and implementation notes

This portfolio is currently a static HTML/CSS/JavaScript project, not a React/Tailwind application.

- **Bootstrap 5.3.3** is included for a maintained responsive UI foundation and its JS bundle.
- **GSAP 3.12.5 + ScrollTrigger** are included for entrance choreography, scroll-triggered reveals, and subtle ambient motion.
- **Aceternity UI visual direction** is represented with glass panels, layered gradients, animated spotlights, a particle-network background, and pointer-driven 3D tilt. Aceternity UI's actual component library is built around React and Tailwind; adding its actual components would require migrating the static site to a React/Vite + Tailwind application. This enhancement intentionally avoids that risky migration so existing sections, downloads, anchors, and legacy plugins remain in place.

## Run locally

Open `index.html` in a browser, or use a local static server:

```bash
npx serve .
```

CDN access is needed for Bootstrap and GSAP. The page has CSS/IntersectionObserver fallbacks for core content and reduced-motion support. Test the external links and resume downloads before deployment.
