# Tailwind CSS Improvement Plan

## Phase 1: Fix Bugs and Conflicts (COMPLETE)
Focus: Address broken or conflicting styles that may cause unexpected behavior.

- [x] Fix duplicate transition classes in `HeroSection.tsx:34` (`transition-colors` + `transition-opacity` should be `transition`)
- [x] Remove conflicting size classes in `HeroSection.tsx:34` (`text-4xl` vs `text-[34px]`, `px-12 py-4` vs `p-[3%]`)

**Changes made:**
- Added `primary-dark: "#2d4a9e"` color to `tailwind.config.ts` for better hover states
- Fixed `HeroSection.tsx` button: removed duplicate transitions, conflicting sizes, and changed hover to darker blue
- Updated `Carousel.tsx` button hover from `primary-light` + opacity to `primary-dark`
- Updated `order/page.tsx` button hover from `primary-light` + opacity to `primary-dark`

## Phase 2: Extract Common Utilities
Focus: Reduce repetition by creating reusable utility classes in `globals.css`.

- [ ] Create `.btn-primary` utility for primary button styles (used in 4 places)
- [ ] Create `.nav-link` utility for navigation link styles (used in 8 places)
- [ ] Create `.section-heading` utility for repeated heading patterns
- [ ] Create `.divider` utility for horizontal divider patterns

## Phase 3: Standardize Arbitrary Values
Focus: Replace arbitrary values with theme tokens for consistency.

- [ ] Define custom font sizes in config for `text-[1.3em]`, `text-[250%]`, `text-[110%]`
- [ ] Define text-shadow CSS variables for repeated shadow patterns
- [ ] Audit and standardize spacing values (replace `p-[3%]`, `top-[35%]` with standard scale or theme tokens)

## Phase 4: Developer Experience
Focus: Improve tooling and code organization.

- [ ] Add `clsx` or `tailwind-merge` package for conditional class handling
- [ ] Create `cn()` utility function in `src/lib/utils.ts`
- [ ] Add `prettier-plugin-tailwindcss` for automatic class sorting
- [ ] Refactor conditional class logic to use `cn()` utility

## Phase 5: Tailwind v4 Migration (Optional)
Focus: Fully adopt Tailwind v4 CSS-first configuration.

- [ ] Migrate color definitions from `tailwind.config.ts` to `@theme` directive in `globals.css`
- [ ] Migrate font family definitions to `@theme` directive
- [ ] Add color scale variants (e.g., `primary-dark`)
- [ ] Remove or simplify `tailwind.config.ts`
