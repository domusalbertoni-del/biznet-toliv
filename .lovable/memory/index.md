Design system for Biznet AI — corporate AI company website inspired by speedrun.a16z.com.

- Fonts: Space Grotesk (display/headings), Inter (body)
- Primary: Near-black hsl(0 0% 8%) on warm cream background
- Background: Warm cream hsl(30 25% 95%) (light), deep black hsl(0 0% 4%) (dark)
- Hero: Full-screen gradient (cream→grey) with 3D glass cube (@react-three/fiber)
- Buttons: Rounded-full (pill shape), uppercase tracking-wider
- Typography: Large bold headlines, uppercase eyebrow labels with tracking-[0.35em], 11px
- Animations: Marquee (30s, 40s, 20s speeds), float, framer-motion scroll reveals
- 3D: three.js + @react-three/fiber@8 + @react-three/drei@9 (React 18 compat)
- Sections: Hero → Program Cards → Perks → Global → Speakers → Testimonials → Portfolio Marquee → FAQ → Footer
- Glass cube uses MeshTransmissionMaterial with iridescence
- No mentorship system — removed entirely
- All components in src/components/biznet/
