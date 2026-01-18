# Tailwind CSS Improvement Plan

## Workflow

1. **Execute Phase** - Work through each task in the current phase
2. **Summarize** - Provide a brief summary of all changes made
3. **Review Loop** - Ask if any fixes are needed
   - If changes requested → make fixes → summarize → repeat
   - If "looks good" → proceed to commit
4. **Commit** - Create a simple commit with a clear message (only when explicitly confirmed as 100% done)

---

## Phase 1: Fix Bugs and Conflicts (COMPLETE)
Focus: Address broken or conflicting styles that may cause unexpected behavior.

- [x] Fix duplicate transition classes in `HeroSection.tsx:34` (`transition-colors` + `transition-opacity` should be `transition`)
- [x] Remove conflicting size classes in `HeroSection.tsx:34` (`text-4xl` vs `text-[34px]`, `px-12 py-4` vs `p-[3%]`)

**Changes made:**
- Added `primary-dark: "#2d4a9e"` color to `tailwind.config.ts` for better hover states
- Fixed `HeroSection.tsx` button: removed duplicate transitions, conflicting sizes, and changed hover to darker blue
- Updated `Carousel.tsx` button hover from `primary-light` + opacity to `primary-dark`
- Updated `order/page.tsx` button hover from `primary-light` + opacity to `primary-dark`

## Phase 2: Extract Common Utilities (COMPLETE)
Focus: Reduce repetition by creating reusable utility classes in `globals.css`.

- [x] Create `.btn-primary` utility for primary button styles (used in 4 places)
- [x] Create `.nav-link` utility for navigation link styles (used in 8 places)
- [x] Create `.section-heading` utility for repeated heading patterns
- [x] Create `.divider` utility for horizontal divider patterns

**Changes made:**
- Added `@layer components` block to `globals.css` with the following utilities:
  - `.btn-primary` - Primary CTA button styling
  - `.nav-link` - Desktop navigation link styling
  - `.nav-link-mobile` - Mobile navigation link styling
  - `.section-heading` - Main page headings (h1)
  - `.section-subheading` - Secondary headings (h2)
  - `.divider` - Standard section divider
  - `.divider-heading` - Divider under section headings
  - `.divider-footer` - Footer dividers (3/4 width)
  - `.divider-footer-full` - Full-width footer divider
- Updated `Carousel.tsx:107` to use `.btn-primary`
- Updated `order/page.tsx:42` to use `.btn-primary`
- Updated `order/page.tsx` headings to use `.section-heading`
- Updated `order/page.tsx` dividers to use `.divider` and `.divider-heading`
- Updated `page.tsx` headings to use `.section-heading` and `.section-subheading`
- Updated `page.tsx` dividers to use `.divider` and `.divider-heading`
- Updated `Navigation.tsx` desktop links (4) to use `.nav-link`
- Updated `Navigation.tsx` mobile links (4) to use `.nav-link-mobile`
- Updated `Footer.tsx` dividers (4) to use `.divider-footer` and `.divider-footer-full`

## Phase 3: Standardize Arbitrary Values (COMPLETE)
Focus: Replace arbitrary values with theme tokens for consistency.

- [x] Define custom font sizes in config for `text-[1.3em]`, `text-[250%]`, `text-[110%]`
- [x] Define text-shadow CSS variables for repeated shadow patterns
- [x] Audit and standardize spacing values (replace `p-[3%]`, `top-[35%]` with standard scale or theme tokens)

**Changes made:**
- Added custom font sizes to `tailwind.config.ts`:
  - `nav` (1.3em) for navigation links
  - `hero-title-sm/md/lg` (250%/350%/500%) for carousel titles
  - `hero-subtitle-sm/md/lg` (110%/140%/200%) for carousel subtitles
- Added custom spacing to `tailwind.config.ts`:
  - `hero-top-sm` (40%) and `hero-top-md` (45%) for hero positioning
- Added social media colors: `social-facebook` and `social-instagram`
- Added CSS custom properties in `globals.css` for text shadows:
  - `--shadow-text-sm`, `--shadow-text-lg`, `--shadow-text-btn`
- Created new component utilities in `globals.css`:
  - `.hero-text-container` - positioning for hero/carousel text
  - `.hero-title` - carousel title styling
  - `.hero-subtitle` - carousel subtitle styling
  - `.social-icon` - social media icon sizing
- Updated `.nav-link` and `.nav-link-mobile` to use `text-nav`
- Updated `.btn-primary` to use CSS variable for text-shadow
- Updated `Carousel.tsx` to use new `.hero-text-container`, `.hero-title`, `.hero-subtitle` classes
- Updated `HeroSection.tsx` to use `.hero-text-container`
- Updated `page.tsx` social icons to use `.social-icon` and theme colors

## Phase 4: Developer Experience (SKIPPED)
Focus: Improve tooling and code organization.

- [x] ~~Add `clsx` or `tailwind-merge` package for conditional class handling~~ (skipped)
- [x] ~~Create `cn()` utility function in `src/lib/utils.ts`~~ (skipped)
- [x] ~~Add `prettier-plugin-tailwindcss` for automatic class sorting~~ (skipped)
- [x] ~~Refactor conditional class logic to use `cn()` utility~~ (skipped)

**Note:** Skipped per user request - can be revisited later if needed.

## Phase 5: Tailwind v4 Migration (COMPLETE)
Focus: Fully adopt Tailwind v4 CSS-first configuration.

- [x] Migrate color definitions from `tailwind.config.ts` to `@theme` directive in `globals.css`
- [x] Migrate font family definitions to `@theme` directive
- [x] Migrate custom font sizes and spacing to `@theme` directive
- [x] Remove or simplify `tailwind.config.ts`

**Changes made:**
- Added `@theme` block to `globals.css` with all theme tokens:
  - Colors: `primary`, `primary-light`, `primary-dark`, `text-body`, `footer-bg`, `footer-text`, `social-facebook`, `social-instagram`
  - Font families: `quiche-regular`, `quiche-bold`
  - Font sizes: `nav`, `hero-title-sm/md/lg`, `hero-subtitle-sm/md/lg`
  - Spacing: `hero-top-sm`, `hero-top-md`
- Removed `@config` directive from `globals.css` (no longer needed)
- Simplified `tailwind.config.ts` to only contain `content` paths (can be removed entirely if desired)
