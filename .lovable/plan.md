

## Plan: Redesign Profile Pages for Artists & Events

### Problem
The current ProfilePage is very basic — flat cover + avatar + stats + empty tab content. It looks like a placeholder, not a nightlife/music app.

### New Design Vision
An immersive, dark, concert-poster-inspired profile page with depth, blur effects, animated transitions, and rich mock content for each tab.

### Changes

**1. Redesign `src/pages/ProfilePage.tsx` — Hero Section**
- Full-bleed cover image that extends taller (h-80 on mobile, h-96 on desktop) with a strong gradient fade to background
- Parallax-like effect: cover image has subtle `object-position` shift on scroll
- Avatar with a glowing ring (primary color pulsing glow) instead of plain ring
- Name in larger bold text with a subtle text-gradient effect
- Genre/series tag as a pill badge below the name
- Stats displayed as glass-morphism cards (backdrop-blur, semi-transparent bg) in a horizontal row
- Follow button with animated state transition (scale bounce on click)

**2. Redesign Tab Navigation**
- Horizontal scrollable pill-style tabs instead of the current icon-column layout
- Each tab is a rounded pill with icon + label inline
- Active tab gets primary bg color with smooth sliding indicator animation
- Sticky positioning so tabs stay visible on scroll

**3. Rich Tab Content**

- **Posts tab**: Mock feed with 3-4 post cards (image + caption + timestamp + likes). Cards have glassmorphic bg, rounded corners, hover glow.
- **Albums tab**: Keep the lock/download CTA but redesign it — use a frosted glass card with a blurred album grid preview behind the lock overlay. More visually enticing.
- **Shop tab**: Mock merch grid (2x2) with product cards showing placeholder images, price tags, "Coming soon" overlays.
- **Events tab**: Mock upcoming event cards with date badges, venue name, and flyer thumbnails in a vertical list.
- **Followers tab**: Mock follower avatars in a grid with names and follow-back buttons.
- **Info tab**: Redesigned with sections — About, Genre, Social links (mock icons), and a stats summary.

**4. Add mock data to `src/data/mockProfiles.ts`**
- Add `mockPosts`, `mockMerch`, `mockEvents` arrays with placeholder content using existing event images.

**5. Animated transitions**
- Tab content fades in/out with `animate-fade-in` on tab switch
- Entrance animations on page load using the existing `reveal` utilities

### Files Modified
- `src/pages/ProfilePage.tsx` — full rewrite
- `src/data/mockProfiles.ts` — add mock content arrays

### What stays the same
- Route structure (`/profile/:id`)
- Profile data interface and existing profiles
- Language context usage
- FeaturedArtists component on the homepage (unchanged)

