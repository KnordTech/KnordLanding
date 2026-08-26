# Handoff: Knord Technologies Landing Page

## Overview
Marketing landing page for Knord Technologies, an India-based enterprise software company. Introduces the company, its mission, its flagship product (Nityavali), a teaser for a second upcoming product, credibility points, and a contact section. Includes a light/dark theme toggle with a smooth transition and a subtle animated node/network motif in the hero background.

## About the Design Files
The bundled file (`Knord-Technologies.html`) is a **design reference** — an HTML/CSS/inline-JS prototype built to show exact look, spacing, color, type, and motion. It is not production code to import. The task is to **recreate this design in React + Tailwind CSS** (or your project's existing stack, if different) using idiomatic components — do not literally embed the HTML.

## Fidelity
**High-fidelity.** Colors, type sizes, spacing, and copy below are final — recreate pixel-for-pixel. Use the exact hex values, font, and spacing scale listed.

## Prompt for Claude Code
Paste this into Claude Code in your project:

> Build a React + Tailwind CSS landing page for "Knord Technologies" matching the attached HTML reference (`Knord-Technologies.html`) pixel-for-pixel. Recreate it as idiomatic React components (e.g. `Nav`, `Hero`, `WhatWeDo`, `Products`, `WhyKnord`, `Contact`, `Footer`), not a literal HTML port. Implement:
> - A light/dark theme toggle in the nav (persist choice, e.g. localStorage) with a smooth ~0.6s color transition on `background-color`, `color`, and `border-color` — not an instant flip.
> - Design tokens: light bg `#FAFAFA` / `#F3F2F5` (alt section bg), dark bg `#12141F` / `#1A1D28` (alt), indigo/cobalt accent `#2E5CE0` (lighter `#9FB0EA` in dark mode for text/icons), coral-copper accent `#FF6B4A` (same in both modes), off-white text `#F2F1EC` in dark mode, deep indigo text `#1E2A4A` in light mode. Font: Inter, weights 400-800.
> - Scroll-triggered fade+slide-up reveals on each major section (IntersectionObserver, opacity 0→1 + translateY 28px→0, 0.8s ease), triggering once per section on first entry into viewport.
> - A subtle animated node/network motif absolutely positioned behind the hero content: ~9 small circles at fixed % positions, a few connecting straight lines between them, each node gently floating via CSS keyframe animation (~7-10s loops, ±6-10px drift), low opacity, colored with the indigo accent (some amber).
> - Sections: Hero (eyebrow + big headline + subtext + 2 CTAs), "What we do" (single centered statement block on the alt background), "Products" (2-column card grid: Nityavali flagship card with badge + link, and a dashed-border "Coming soon" teaser card for a second AI-agent-workforce product), "Why Knord" (3-column credibility cards, numbered 01/02/03), "Contact" (email + address, left-aligned), Footer (logo + wordmark, quick links, copyright).
> - Nav CTA button links to `#contact`; "Explore Nityavali" links open a new page/route (currently a placeholder `Nityavali.html`) in a new tab.
> - Fully responsive: stack the products/why-knord grids to 1 column below ~640px, reduce hero heading size on mobile, and keep nav from wrapping (allow horizontal scroll or a hamburger menu on narrow viewports — the reference does not implement a mobile nav).
> Use Tailwind utility classes for everything except the handful of values above that need exact non-token hex — set those as CSS variables or an extended Tailwind theme (`indigo-accent`, `amber-accent`, etc.) rather than hardcoding hex in class names.

## Screens / Views
Single scrolling page, sections in order: Hero → What We Do → Products → Why Knord → Contact → Footer. Sticky nav pinned to top with blur backdrop.

### Nav
- Height ~64px effective (20px top/bottom padding + content), horizontal padding 56px, `position: sticky; top:0`, `backdrop-filter: blur(10px)`, background `rgba(250,250,250,0.85)` light / `rgba(18,20,27,0.85)` dark, 1px bottom border (10% opacity indigo/white).
- Left: 32×32px rounded-8px indigo box with white "K", + "Knord" wordmark (17px, weight 700).
- Right: 4 nav links (14.5px, weight 500, muted text, gap 32px) → theme toggle (44×24px pill switch, thumb 18px) → amber "Get in touch" CTA button (14px weight 600, padding 9×18, radius 8, `white-space: nowrap`).

### Hero
- Padding `160px 56px 140px`, centered content max-width 780px, text-align center, gap 22px between elements.
- Eyebrow: "Knord Technologies", 14px weight 600, uppercase, letter-spacing 0.08em, amber color.
- H1: "Operational technology, built for how real businesses actually run." 56px, weight 800, line-height 1.12, letter-spacing -0.02em.
- Subtext: 19px, line-height 1.6, muted, max-width 620px: "We design and build enterprise software that removes friction from day-to-day operations — starting with Nityavali, our flagship platform for professional services businesses."
- Buttons: primary amber "Explore Nityavali" (opens `Nityavali.html` in new tab), secondary outlined "Get in touch" (`#contact`). 15.5px weight 600, padding 14×26 / 13×26, radius 10.
- Background motif absolutely positioned behind content (see prompt above for spec).

### What We Do (`#what-we-do`)
- Full-bleed alt-background band, padding `100px 56px`, inner content max-width 900px.
- Eyebrow "What we do" (13.5px weight 600 uppercase indigo) → H2 "We build the software that runs the business behind the business." (36px weight 700) → body paragraph (17px, line-height 1.75, max-width 680px, muted).

### Products (`#products`)
- Padding `110px 56px`, inner max-width 1080px. Same eyebrow/H2 pattern ("Products" / "One flagship product today. More on the way.").
- 2-column grid (`repeat(auto-fit, minmax(340px,1fr))`, gap 28, margin-top 44).
- **Nityavali card**: solid card bg, 1px border, radius 16, padding 36. Pill badge "Flagship product" (indigo bg, white text, 12.5px weight 700 uppercase-tracking, radius 999). Title "Nityavali" (24px weight 700, margin-top 18). Description (15.5px, line-height 1.65): "An operations management platform built for professional services businesses — scheduling, billing, resourcing, and delivery, handled in one place, end to end." Link "Visit Nityavali →" (amber, 15px weight 600) opening `Nityavali.html` in a new tab.
- **Coming soon card**: same padding/radius, transparent bg, 1.5px **dashed** border. Outlined badge "Coming soon". Title "An AI agent workforce". Description: "Our next product, in development — an AI-native platform for putting autonomous agents to work inside real operational businesses." No link.

### Why Knord (`#why-knord`)
- Alt-background band, padding `110px 56px`, inner max-width 1080px. Eyebrow "Why Knord" / H2 "A young company, built on real operational understanding."
- 3-column grid (`repeat(auto-fit, minmax(260px,1fr))`, gap 40, margin-top 48). Each card: amber numeral (01/02/03, 14px weight 700), title (20px weight 700, margin-top 12), description (15px, line-height 1.65, margin-top 10):
  1. "Rooted in real pain points" — "We start with the operational friction real businesses deal with every day, not a whiteboard idea — and build products that actually resolve it."
  2. "AI-native, not bolted on" — "Our products are designed for how work is actually going to happen — built AI-native from the start, not retrofitted after the fact."
  3. "India-based, customer-first" — "An emerging technology company working closely with the businesses we serve, from India, for operational teams everywhere."

### Contact (`#contact`)
- Padding `120px 56px`, inner max-width 640px, left-aligned. Eyebrow "Contact" / H2 "Let's talk about what you're building."
- Below: email link `hello@knordtechnologies.com` (22px weight 700, amber) and address line "Knord Technologies · India" (15.5px, muted), gap 10 in a column.

### Footer
- Padding `40px 56px`, top border. Inner row (max-width 1080px, flex, space-between, wraps, gap 20): left = 24×24px indigo logo box + "Knord Technologies" wordmark (14.5px weight 600); right = 5 links (14px, muted) — What we do, Products, Why Knord, Contact, hello@knordtechnologies.com.
- Bottom center line, margin-top 28, 13px muted: "© 2026 Knord Technologies. All rights reserved."

## Interactions & Behavior
- **Theme toggle**: click flips a boolean; every themed color property has `transition: background-color 0.6s ease, color 0.6s ease, border-color 0.6s ease`. Toggle thumb slides via `left` transition (0.35s cubic-bezier(0.4,0,0.2,1)).
- **Scroll reveals**: each of the 4 inner sections (What We Do, Products, Why Knord, Contact) starts at `opacity:0, translateY(28px)` and animates to `opacity:1, translateY(0)` over 0.8s ease once it crosses 15% into viewport (IntersectionObserver, fires once, no reverse-on-scroll-up).
- **Hero motif**: purely decorative, `pointer-events: none`, looping CSS keyframe float animations, no interactivity.
- Nav and footer links are in-page anchor scrolls to section ids (`#what-we-do`, `#products`, `#why-knord`, `#contact`).
- "Explore Nityavali" / "Visit Nityavali" open `Nityavali.html` (a future dedicated product page on the same site) in a new tab (`target="_blank" rel="noopener"`).

## State Management
- `dark: boolean` — theme state, ideally persisted (e.g. `localStorage`) and applied on mount to avoid flash.
- Per-section `visible` boolean(s) — set true (once) when the section's IntersectionObserver fires; drives the reveal animation.

## Design Tokens

**Colors**
| Token | Light | Dark |
|---|---|---|
| Background | `#FAFAFA` | `#12141B` |
| Background (alt/section) | `#F3F2F5` | `#171A24` |
| Text (primary/heading) | `#1E2A4A` | `#F2F1EC` |
| Text (muted) | `rgba(43,58,103,0.66)` | `rgba(242,241,236,0.68)` |
| Indigo accent (icons/UI) | `#2E5CE0` | `#9FB0EA` |
| Amber/coral accent (CTA, highlights — same both modes) | `#FF6B4A` | `#FF6B4A` |
| Card background | `#FFFFFF` | `#1A1D28` |
| Card / hairline border | `rgba(43,58,103,0.10)` | `rgba(242,241,236,0.10)` |
| Nav background (blurred) | `rgba(250,250,250,0.85)` | `rgba(18,20,27,0.85)` |

**Typography**: Inter, weights 400/500/600/700/800.
- H1 (hero): 56px / weight 800 / line-height 1.12 / letter-spacing -0.02em
- H2 (section): 36px / weight 700 / line-height 1.25 / letter-spacing -0.015em
- H3 (card title): 20–24px / weight 700
- Body: 15–19px / line-height 1.6–1.75
- Eyebrow/label: 13.5–14px / weight 600 / uppercase / letter-spacing 0.08em

**Spacing**: section padding 100–160px vertical, 56px horizontal side padding throughout. Card padding 36px. Grid gaps 28–40px.

**Radius**: buttons/badges 7–10px (pill badges use 999px). Cards 14–16px. Logo mark 6–8px.

## Assets
No image assets — the logo is a placeholder monogram ("K" in a colored box), to be replaced with a real logo file when available. No product screenshots are used (per brief, Products section is copy + link only).

## Files
- `Knord-Technologies.html` — full design reference (all sections, both themes, motion) in this folder.
