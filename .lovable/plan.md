

## Plan: Concert Poster / Editorial Profile Redesign

### Vision
Transform the profile page from a standard social-media card layout into a cinematic, editorial experience. Each section should feel like a spread in a concert magazine — bold typography, full-bleed imagery, dramatic spacing, and immersive transitions.

### Layout Changes

**Hero — Full-screen cinematic intro**
- Cover image extends to near full viewport height (`h-[85vh]`) with a dramatic multi-stop gradient fade
- Avatar overlaps the bottom of the cover, much larger (40-44 vw on mobile, capped at 180px)
- Name rendered in huge bold text (4xl-6xl) with letter-spacing, positioned over the cover fade
- Stats rendered inline beneath the name in a single elegant line (e.g. "2.3K followers · 18 posts · 3 albums") instead of boxed cards
- Follow + Share buttons side by side, pill-shaped, minimal

**Tabs — Minimal underline style**
- Remove pill backgrounds; use simple text tabs with an animated underline indicator
- Sticky with a subtle frosted-glass backdrop
- Icons removed — text-only for a cleaner editorial feel

**Posts Tab — Magazine grid**
- First post is a large featured card spanning full width with overlay text (caption + stats)
- Remaining posts in a 2-column masonry-like grid with hover reveal of caption
- No visible card borders — images bleed edge to edge with subtle rounded corners

**Albums Tab — Cinematic locked teaser**
- Full-width blurred mosaic background
- Large centered lock icon with dramatic text: "Exclusive content. Download Toliv."
- Minimal, bold CTA button

**Shop Tab — Editorial product showcase**
- Alternating layout: first item full-width hero card, then 2-col grid
- Product name in bold overlay text on the image
- "Coming Soon" items get a desaturated/grayscale treatment with overlay badge

**Events Tab — Timeline style**
- Vertical timeline with date on the left, event card on the right
- Each card has a tall flyer image with venue info overlaid at the bottom
- Connected by a subtle vertical line with dot markers

**Followers Tab — Compact horizontal cards**
- Single column list with larger avatars, name, and follow button aligned right
- Cleaner, more spacious than current 2-col grid

**Info Tab — Editorial sections**
- Large pull-quote style bio text (larger font, italic or light weight)
- Genre displayed as a large styled tag
- Social icons in a row with hover glow effects
- No stats repeat (already visible in hero)

### Files Modified
- `src/pages/ProfilePage.tsx` — complete UI rewrite of all tab components and hero
- No data changes needed — mock data stays the same

### What stays the same
- Route structure, data interfaces, language support, tab IDs
- Mock data from `mockProfiles.ts`
- Follow toggle logic

