

## Cities Page Plan — Map-based with City Cards

### Overview
Create a `/cities` route with an interactive SVG map of Chile showing pinned cities. Each city pin is clickable and shows a card with a photo, city name, and event count.

### Technical Approach

**1. Create `src/pages/CitiesPage.tsx`**
- Full-page layout with Navbar, MobileBottomNav, and a hero header ("Todas las ciudades" / "All cities")
- Two-column layout on desktop: left side has the SVG map of Chile with animated pin markers for each city; right side has a scrollable list of city cards
- On mobile: map on top (smaller), city cards grid below
- Each city card: landmark/cityscape photo, city name, fake event count (e.g., "12 eventos esta semana")
- Clicking a city pin on the map highlights the corresponding card (scroll into view); clicking a card could navigate to `/events/:city` (placeholder for now)

**2. Create `src/components/ChileMap.tsx`**
- Simplified SVG outline of Chile with positioned dots/pins for each city (Santiago, Valparaíso, Viña del Mar, Concepción, La Serena, Antofagasta, Temuco, Punta Arenas)
- Pins are interactive: hover glow effect, click triggers callback
- Selected city pin gets a pulsing accent ring

**3. City data & images**
- We'll need a city photo for each of the 8 cities. Options:
  - Use placeholder images initially with gradient overlays and city names
  - Or you can upload photos for each city
- City data array with: name, coordinates (for map pin positioning), photo, eventCount

**4. Add route in `src/App.tsx`**
- Add `/cities` route pointing to `CitiesPage`

**5. Translations**
- Add `citiesPageTitle`, `eventsThisWeek` to both EN/ES in `LangContext.tsx`

### Design Details
- Map uses the same dark theme as the rest of the site
- City pins use `bg-primary` color with a subtle pulse animation
- Cards have rounded corners, photo with gradient overlay, city name and event count overlaid at the bottom
- Scroll reveal animations consistent with other sections

