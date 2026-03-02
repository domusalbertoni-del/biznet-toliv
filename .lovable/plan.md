

## Plan: 3D Rotating City Wheel for Cities Page

### Concept
Replace the current map + cards layout with an immersive 3D rotating carousel/wheel. Each city is represented as a floating card with its photo, name, and event count, arranged in a circular formation that the user can spin by dragging or clicking arrows. The selected city card comes to the front, scales up, and glows.

### Technical Approach

**1. Install dependencies**
- `@react-three/fiber@^8.18` and `three@^0.166` for 3D rendering
- `@react-three/drei@^9.122.0` for helper utilities (Text, Image, etc.)

**2. Rewrite `src/pages/CitiesPage.tsx`**
- Remove the two-column map + cards layout
- Replace with a full-width immersive section: header on top, 3D canvas below
- The 3D canvas renders a circular carousel of city cards
- Below the canvas (or overlaid): selected city info panel with name, event count, and a "View events" CTA

**3. Create `src/components/CityWheel.tsx`**
- Uses `@react-three/fiber` Canvas with a circular arrangement of 8 city cards
- Each card is a 3D plane with the city photo as texture, city name as text overlay
- Cards are positioned in a circle (using sin/cos for x/z positions)
- Auto-rotates slowly; user can click left/right arrows or drag to spin
- Selected card scales up and moves slightly forward
- Smooth spring animations for rotation transitions using `useFrame`

**4. Create `src/components/CityCard3D.tsx`**
- Individual 3D card component: textured plane with rounded corners effect
- Gradient overlay at bottom with city name and event count
- Glow/bloom effect on the selected card using emissive material
- Hover effect: slight scale up

**5. Update `src/components/ChileMap.tsx`**
- Delete this component (no longer needed)

**6. Keep existing**
- Route, translations, city data array, and images all stay the same

### Interaction Flow
- Page loads → wheel auto-rotates slowly
- Click a card or use arrow buttons → wheel snaps to that city
- Selected city info appears below/overlaid with event count and CTA
- On mobile: wheel is touch-draggable, slightly smaller canvas

### Fallback
- If 3D performance is a concern, a CSS 3D transform carousel (using `perspective` and `rotateY`) is a lighter alternative that still gives the spinning wheel effect without Three.js. This would be simpler and more performant.

