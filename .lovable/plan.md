

## Plan

### 1. Change "Ver más" to "Ver todos" in artists section
- Update `seeMoreArtists` translation in `LangContext.tsx`: `"See more"` → `"See all"` (EN), `"Ver más"` → `"Ver todos"` (ES)

### 2. Convert events grid to horizontal swipe carousel
- In `PopularEvents.tsx`, replace the `grid` layout with a horizontal scrollable `flex` container (same pattern as FeaturedArtists: `flex gap-4 overflow-x-auto pb-4 scrollbar-hide`)
- Each event card becomes `flex-shrink-0` with a fixed width (e.g., `w-64`) to allow horizontal swiping
- Keep the 9:16 aspect ratio on event images
- Keep all existing card content (date badge, today badge, tags, price, etc.)

### 3. Suggestions for what to add next
After implementation, I'll suggest ideas like: testimonials/social proof, a countdown timer for upcoming events, newsletter signup, or a "How it works" section.

