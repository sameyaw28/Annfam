# CLAUDE.md — Frontend Website Rules

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.
- **Read the Design Tokens section below** before designing — those are the locked palette and motion values for this project. Do not invent alternatives.

## Design Tokens — Foundation Project

### Color Palette
- **Primary:** `#6C63FF` — brand identity, primary buttons, links, key headings
- **Secondary:** `#4F46E5` — depth, hovered primary states, dark accents
- **Accent:** `#F97316` — **Donate / CTA only**, never decorative, max one per viewport
- **Background:** `#F9FAFB` — page canvas
- **Surface:** `#FFFFFF` — cards, modals, elevated panels
- **Text Primary:** `#111827` — headings, body
- **Text Secondary:** `#6B7280` — lede, captions, helper text
- **Border:** `#E5E7EB` — hairlines, input outlines, card edges

### Derived Tokens
- **Primary Hover:** `#5B53E8`
- **Primary Soft:** `rgba(108, 99, 255, 0.08)` — tinted backgrounds
- **Accent Hover:** `#EA670B`
- **Accent Soft:** `rgba(249, 115, 22, 0.10)`
- **Focus Ring:** `rgba(108, 99, 255, 0.35)`
- **Overlay:** `rgba(17, 24, 39, 0.60)`

### Brand Gradient
- **Solid:** `linear-gradient(135deg, #6C63FF 0%, #4F46E5 100%)` — hero accents, CTA banners
- **Soft:** `linear-gradient(135deg, rgba(108,99,255,0.08), rgba(79,70,229,0.04))` — subtle section backgrounds

### Color Distribution (80 / 15 / 5)
- **80% neutral** — bg, surface, text, border (page canvas, body, cards, nav, footer)
- **15% primary/secondary** — logo, headings, links, primary buttons, key icons
- **5% accent** — Donate button only. Never more than one accent element per viewport.

### Contrast Floor
- Body copy: 16px / 1.7 line-height minimum
- Accent button label: 600 weight, ≥16px (raises `#FFFFFF` on `#F97316` to AA)
- Secondary text never used for CTAs or critical info

### Motion Durations
- `fast 150ms` · `base 300ms` · `slow 500ms` · `hero 700ms`

### Motion Easings
- `ease-out` — `cubic-bezier(0.22, 1, 0.36, 1)` — default reveal
- `ease-in-out` — `cubic-bezier(0.4, 0, 0.2, 1)` — bidirectional state changes
- `ease-spring` — `cubic-bezier(0.34, 1.56, 0.64, 1)` — card lift, accent CTA

### Motion Patterns
- **Scroll reveal:** `opacity 0→1`, `translateY 16px→0`, 400ms ease-out, IntersectionObserver threshold 0.15, fires once
- **Stagger reveal:** 80ms delay between siblings
- **Hero entrance:** eyebrow → headline → lede → CTAs at 100ms intervals, 500–700ms total
- **Button hover (primary/secondary):** color → `-hover` token + `scale(1.02)`, 150–200ms
- **Button hover (accent):** color shift + `box-shadow: 0 8px 24px rgba(249,115,22,0.30)`, 200ms ease-spring
- **Button active:** `scale(0.98)`, 100ms
- **Card hover:** `translateY -4px` + shadow `sm → lg`, 250ms ease-spring
- **Link hover:** underline grows 0→100% width + color → secondary, 150ms
- **Focus-visible:** 2px ring at focus-ring token, 2px offset, 120ms
- **Smooth scrolling:** `scroll-behavior: smooth` on root, `scroll-padding-top` = navbar height

### Shadow Scale (color-tinted)
- **sm:** `0 1px 2px rgba(17,24,39,0.04), 0 1px 3px rgba(17,24,39,0.06)` — card resting
- **md:** `0 4px 6px rgba(17,24,39,0.04), 0 8px 16px rgba(17,24,39,0.06)` — mid-state
- **lg:** `0 12px 24px rgba(17,24,39,0.06), 0 20px 40px rgba(108,99,255,0.08)` — card hover
- **cta:** `0 8px 24px rgba(249,115,22,0.30)` — Donate hover only

### Motion Discipline
- Animate only `opacity`, `transform`, `box-shadow`. Never `width`, `height`, `top`, `left`, or `transition: all`.
- One animation per element. No compound spinning + sliding + scaling.
- No idle loops or pulsing.
- All motion respects `@media (prefers-reduced-motion: reduce)` — fall back to instant opacity-only fades.
- Scroll reveals fire once — do not retrigger on re-entry.

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see guardrails below).
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds. Stop only when no visible differences remain or user says so.

## Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `node serve.mjs` (serves the project root at `http://localhost:3000`)
- `serve.mjs` lives in the project root. Start it in the background before taking any screenshots.
- If the server is already running, do not start a second instance.

## Screenshot Workflow
- Puppeteer is installed at `C:/Users/nateh/AppData/Local/Temp/puppeteer-test/`. Chrome cache is at `C:/Users/nateh/.cache/puppeteer/`.
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- Screenshots are saved automatically to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label suffix: `node screenshot.mjs http://localhost:3000 label` → saves as `screenshot-N-label.png`
- `screenshot.mjs` lives in the project root. Use it as-is.
- After screenshotting, read the PNG from `temporary screenshots/` with the Read tool — Claude can see and analyze the image directly.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing

## Output Defaults
- Single `index.html` file, all styles inline, unless user says otherwise
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`
- Mobile-first responsive

## Brand Assets
- Always check the `brand_assets/` folder before designing. It may contain logos, color guides, style guides, or images.
- If assets exist there, use them. Do not use placeholders where real assets are available.
- If a logo is present, use it. If a color palette is defined, use those exact values — do not invent brand colors.

## Anti-Generic Guardrails
- **Colors:** Never use default Tailwind palette. Use the Design Tokens palette above — primary `#6C63FF`, secondary `#4F46E5`, accent `#F97316` for Donate/CTA only. Follow the 80/15/5 distribution.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Typography:** Never use the same font for headings and body. Pair a display/serif with a clean sans. Apply tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth.
- **Animations:** Use the Motion Tokens above (durations, easings, patterns). Animate only `transform`, `opacity`, `box-shadow`. Never `transition-all`. Spring-style easing for lifts and accent CTAs.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Images:** Add a gradient overlay (`bg-gradient-to-t from-black/60`) and a color treatment layer with `mix-blend-multiply`.
- **Spacing:** Use intentional, consistent spacing tokens — not random Tailwind steps.
- **Depth:** Surfaces should have a layering system (base → elevated → floating), not all sit at the same z-plane.

## Hard Rules
- Do not add sections, features, or content not in the reference
- Do not "improve" a reference design — match it
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color
