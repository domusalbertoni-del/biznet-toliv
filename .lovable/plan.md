

## Plan: Replace Hero Phone Mockup with 3 Grouped iPhone Mocks

### Current State
The hero section uses a single `phones-mockup.png` image. We have 4 iPhone mock screenshots the user provided: `app-feed.png`, `app-match-mode.png`, `app-xp.png`, `app-wallet.png`.

### Proposed Changes

**File: `src/components/HeroSection.tsx`**

Replace the single `<img>` with a composed layout of 3 phones using the user's uploaded mock images:

- **Center/front phone** (z-20, largest, no rotation) — `app-feed.png`
- **Left/back phone** (z-10, slightly smaller, rotated ~-8deg, offset left and slightly down) — `app-match-mode.png`
- **Right/back phone** (z-10, slightly smaller, rotated ~8deg, offset right and slightly down) — `app-wallet.png`

All three phones are grouped tightly together so they overlap, with the front phone clearly dominant.

### Layout Structure

```text
     [Left Phone]    [Front Phone]    [Right Phone]
      rotate -8°       no rotate        rotate 8°
       z-10              z-20             z-10
      smaller           largest          smaller
         \                |                /
          \_______________+_______________/
                   grouped together
```

### Technical Details

- Import `appFeed`, `appMatchMode`, `appWallet` from assets
- Remove the `phones-mockup.png` import
- Use a `relative` container with 3 absolutely-positioned images
- Each image gets `rounded-[2.5rem]` to look like a phone screen, plus `shadow-2xl` for depth
- Front phone: `w-[200px] md:w-[240px] lg:w-[280px]`, centered, z-20
- Back phones: ~85% the size of front, offset ±80px horizontally, +20px vertically, z-10, slight opacity or scale to create depth
- Container sized to fit all three with proper overflow
- Keep the existing entrance animation (translateY fade-in)

