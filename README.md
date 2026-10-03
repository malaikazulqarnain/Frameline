# Frameline: responsive landing page

A SaaS landing page for a fictional tool that turns a video script into a shot list. Built with **Next.js 14 (App Router), TypeScript and Tailwind CSS**. Frontend only, no backend.

**Live:** _add your Vercel URL_  ·  **Walkthrough:** _add your LinkedIn post_

## Run locally
```bash
npm install
npm run dev   # http://localhost:3000
```

## Structure
```
app/            layout (fonts, metadata), page (composes sections), globals.css
components/
  Container, Button, SectionHeading     primitives reused everywhere
  Navbar (client), Hero, Features,      page sections
  HowItWorks, Pricing, CallToAction, Footer
  FeatureCard, PricingCard,             small reusable pieces
  StoryboardPreview                     the hero visual (CSS only)
tailwind.config.ts   all design tokens
```
`page.tsx` only composes sections. Sections own layout, cards own content. Only `Navbar` is a client component (mobile menu state); everything else renders on the server.

## Design system
- **Colors:** ink `#14213D`, paper `#F6F7FB`, cobalt `#2F5BFF` (primary action), signal `#FFC93C` (playhead and step markers only), mist `#5B6785` (secondary text). Defined once in the Tailwind config.
- **Type:** Bricolage Grotesque for headings, Public Sans for body, loaded with `next/font`. Scale: 6xl / 5xl / 4xl / 3xl for headings, `text-lg` intro, base body.
- **Spacing:** sections use `py-16 sm:py-20`, content sits in one `Container` (`max-w-6xl`, `px-5 sm:px-8`), and gaps use the 4/6/8/12 steps.
- **Hierarchy:** one dark section (How it works) and one cobalt block (final CTA) break the light page. The storyboard preview is the single decorative focal point.

## Responsive behavior (mobile first)
| Width | Changes |
|---|---|
| < 640px | Single column, hamburger menu, stacked buttons, preview stacks script above shots |
| 640-1023px | Two-column features, side-by-side buttons |
| 768px+ | Full nav bar, three-step row, two pricing cards |
| 1024px+ | Two-column hero, four-column features |

## Accessibility
Semantic landmarks, visible focus rings, 44px touch targets, `aria-expanded` on the menu button, and the playhead animation is disabled under `prefers-reduced-motion`.

## Deploy
Push to GitHub, import the repo in Vercel, keep the defaults.
