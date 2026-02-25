

## Plan: Match Shotgun's iPhone Mockup Style in Hero

### What Shotgun does

From the screenshot, Shotgun displays **two overlapping iPhones** in the hero — not three side-by-side. The layout is:
- A **back/left phone** slightly rotated and offset, partially hidden behind the main phone
- A **front/right phone** (larger, dominant) showing the main app feed screen, overlapping on top
- Both phones have **realistic iPhone frames** with visible status bar (9:41, signal, battery), dynamic island notch, and rounded corners matching a real iPhone 15 Pro
- The phones emerge from the right side of the hero section, overlapping the gradient background
- Subtle drop shadows create depth between the two devices

### Current state

The current `HeroSection.tsx` uses three `<img>` tags with the placeholder mockup images (`phone-mockup.webp`, `phone-ticket.webp`, `phone-event.webp`), arranged side-by-side with rotation. No iPhone frame styling — just raw images with `rounded-2xl`.

### Proposed changes

**File: `src/components/HeroSection.tsx`**

1. **Replace the 3-phone layout with a 2-phone overlapping layout** matching Shotgun:
   - Back phone: rotated ~-6deg, offset left and slightly down, z-10
   - Front phone: upright or very slight tilt, overlapping the back phone, z-20, larger
2. **Wrap each screenshot in a CSS iPhone frame** component:
   - Outer div: `bg-black rounded-[3rem] p-[3px]` to simulate the iPhone bezel
   - Inner "notch" element: a small rounded pill (`w-20 h-5 bg-black rounded-full`) centered at the top to mimic the dynamic island
   - A fake status bar with "9:41" time, signal/wifi/battery icons (using simple text or small SVGs)
   - The screenshot image inside with `rounded-[2.8rem] overflow-hidden` to clip to the screen area
3. **Use the user's uploaded app screenshots** (which will be copied in the previous plan's implementation):
   - Back phone: one of the app screens (e.g., `screen-social.jpg`)
   - Front phone: another app screen (e.g., `screen-event.png`)
   - The third screenshot (`screen-attendees.jpg`) can be kept for the center if you still want 3, or used elsewhere
4. **Sizing**: Front phone ~w-64 (256px), back phone ~w-56 (224px), with the container shifted to the right side of the hero

Since the previous plan already covers updating the hero text, logo, and copying assets, this plan focuses specifically on matching Shotgun's 2-phone overlapping arrangement with realistic iPhone frames.

### Technical details

**iPhone frame CSS structure (per phone):**
```text
┌─────────────────────────┐  ← bg-black rounded-[3rem] p-[3px] shadow-2xl
│  ┌───────────────────┐  │
│  │  ●●● 9:41  ▪▪▪▪  │  │  ← status bar overlay (absolute, z-30)
│  │  ┌─────────────┐  │  │
│  │  │ [Dynamic    ] │  │  │  ← dynamic island pill
│  │  │  Island     │  │  │  │
│  │  └─────────────┘  │  │
│  │                    │  │
│  │   App Screenshot   │  │  ← <img> with object-cover, rounded-[2.7rem]
│  │                    │  │
│  │                    │  │
│  └────────────────────┘  │
└──────────────────────────┘
```

**Layout arrangement:**
```text
        [Back Phone]
            \
             \  overlapping
              \
          [Front Phone]
```

- Back phone: `absolute left-0 top-8 rotate-[-6deg] z-10`
- Front phone: `absolute right-0 top-0 z-20`
- Container: `relative w-[380px] h-[500px] md:w-[440px] md:h-[560px]`

**Files modified:**
- `src/components/HeroSection.tsx` — restructure phone mockup section to use 2 overlapping phones with CSS iPhone frames

