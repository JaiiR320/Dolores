# AGENTS.md - AI Coding Agent Guidelines

This document provides essential information for AI coding agents working in this repository.

## Project Overview

- **Project**: Dolores PVD - Restaurant website for a contemporary Mexican restaurant
- **Stack**: Next.js 16.1.1, React 19.2.3, TypeScript 5.x, Tailwind CSS 4.x
- **Package Manager**: pnpm

## Build/Lint/Test Commands

```bash
# Development
pnpm dev              # Start development server

# Build
pnpm build            # Production build (static export to /out)

# Linting
pnpm lint             # Run ESLint on entire codebase

# No test framework configured
# Tests are not currently set up in this project
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (Navigation, Footer, fonts)
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles, Tailwind @theme config
│   ├── menu/page.tsx       # Menu page
│   ├── order/page.tsx      # Order page
│   └── reservation/page.tsx # Reservation page
├── components/             # Reusable React components
│   ├── Carousel.tsx        # Image carousel with touch/swipe
│   ├── Footer.tsx          # Site footer
│   ├── HeroSection.tsx     # Hero image with CTA
│   ├── MenuSection.tsx     # Menu display
│   ├── Navigation.tsx      # Responsive navigation
│   └── icons/              # SVG icon components
│       ├── index.ts        # Barrel exports
│       ├── FacebookIcon.tsx
│       └── InstagramIcon.tsx
└── lib/                    # Utility modules
    └── fonts.ts            # Local font configuration
```

## Code Style Guidelines

### TypeScript

- **Strict mode** is enabled - all code must pass strict type checking
- Use `interface` for component props (e.g., `interface CarouselProps`)
- Target: ES2017
- Path alias: Use `@/` for imports from `src/` directory

### Imports

Order imports as follows:
1. React/Next.js imports (`react`, `next/image`, `next/link`, `next/navigation`)
2. Third-party libraries
3. Internal components using `@/components/`
4. Internal utilities using `@/lib/`
5. Styles (CSS imports last)

```typescript
// Example import order
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Navigation from "@/components/Navigation";
import { quicheRegular, quicheBold } from "@/lib/fonts";
import "./globals.css";
```

### Component Conventions

- **File naming**: PascalCase for components (`Navigation.tsx`, `HeroSection.tsx`)
- **Utility files**: camelCase (`fonts.ts`)
- **Default exports** for all components
- **Barrel exports** for icon components via `index.ts`

```typescript
// Barrel export example (src/components/icons/index.ts)
export { default as FacebookIcon } from './FacebookIcon';
export { default as InstagramIcon } from './InstagramIcon';
```

### Client vs Server Components

- Add `"use client"` directive at top of file for interactive components
- Components requiring hooks (useState, useEffect) must be client components
- Default to server components when no interactivity is needed

Client components in this codebase:
- `Carousel.tsx` - touch/swipe interaction
- `Navigation.tsx` - mobile menu toggle
- `HeroSection.tsx` - interactive CTA
- Page components with external integrations

### Props Interface Pattern

```typescript
interface ComponentNameProps {
  requiredProp: string;
  optionalProp?: boolean;
}

export default function ComponentName({
  requiredProp,
  optionalProp = true,
}: ComponentNameProps) {
  // ...
}
```

### Styling with Tailwind CSS 4

- Use Tailwind utility classes directly in JSX
- Custom design tokens defined in `src/app/globals.css` under `@theme`
- Component classes defined in `@layer components`
- Use CSS custom properties for consistent theming

**Key design tokens:**
- Colors: `primary`, `primary-light`, `primary-dark`, `text-body`, `footer-bg`
- Fonts: `font-quiche-regular`, `font-quiche-bold`
- Custom classes: `btn-primary`, `nav-link`, `hero-title`, `section-heading`

```typescript
// Prefer using defined component classes
<button className="btn-primary">Click me</button>
<h2 className="section-heading">Title</h2>

// Use Tailwind utilities for layout/spacing
<div className="container mx-auto px-4 py-3">
```

### Responsive Design

- Mobile-first approach using Tailwind breakpoints
- Breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px)
- Always test responsive behavior

```typescript
<h1 className="text-hero-title-sm sm:text-hero-title-md md:text-hero-title-lg">
```

### Accessibility

- Include `aria-label` on interactive elements without visible text
- Use semantic HTML elements (`nav`, `main`, `footer`, `button`)
- Add `alt` text to all images
- Use `aria-current` for navigation state

### Images

- Use `next/image` component for all images
- Set `unoptimized` prop (required for static export)
- Include `width`, `height`, and `alt` props
- Use `priority` for above-the-fold images

```typescript
<Image
  src="/img/example.png"
  alt="Descriptive alt text"
  width={1920}
  height={1080}
  unoptimized
  priority={isAboveFold}
/>
```

### ESLint Configuration

- Uses ESLint 9 flat config format
- Extends `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`
- Ignored directories: `.next/`, `out/`, `build/`

### Next.js Configuration

Key settings in `next.config.ts`:
- `output: 'export'` - Static HTML generation
- `images: { unoptimized: true }` - No image optimization
- `trailingSlash: true` - URLs end with `/`

## Error Handling

- Use optional chaining (`?.`) for potentially undefined values
- Provide fallback values with nullish coalescing (`??`)
- Handle edge cases in conditional rendering

## Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `Navigation.tsx` |
| Utilities | camelCase | `fonts.ts` |
| Interfaces | PascalCase with Props suffix | `CarouselProps` |
| CSS classes | kebab-case | `btn-primary`, `nav-link` |
| Constants | camelCase | `minSwipeDistance` |

## Common Patterns

### Event Handlers
```typescript
const onTouchStart = (e: React.TouchEvent) => {
  // handler logic
};
```

### Conditional Classes
```typescript
className={`base-class ${condition ? "active-class" : ""}`}
```

### useCallback for Stable References
```typescript
const goToSlide = useCallback((index: number) => {
  setCurrentSlide(index);
}, []);
```
