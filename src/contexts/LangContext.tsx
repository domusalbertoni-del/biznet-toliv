import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "es";

const translations = {
  en: {
    // Navbar
    exploreEvents: "Explore Events",
    myTickets: "My Tickets",
    favorites: "Favorites",
    searchPlaceholder: "Search for an event, artist, organizer or city",
    explore: "Explore",
    listYourEvent: "List your event",
    logIn: "Log in",
    searchMobile: "Search events, artists, cities...",

    // Hero
    heroBadge: "Events near you",
    heroTitle1: "Find",
    heroTitle2: "Events",
    heroTitle3: "near you!",
    heroSubtitle: "Download Toliv to find the best parties, festivals, and events in Chile. Connect with our 10k+ users and create events!",
    appStore: "App Store",
    playStore: "Play Store",
    appRatings: "50K+ App ratings",

    // Popular Events
    popularEventsIn: "Popular events in",
    today: "TODAY",
    seeMoreEvents: "See more events",
    viewAllCities: "View all cities →",

    // Featured Artists
    trendingArtists: "Trending Artists",
    seeMoreArtists: "See all",

    // App Features
    appFeaturesTitle: "All in",
    appFeaturesTitleAccent: "one app",
    appFeaturesSubtitle: "Discover, buy tickets, connect, and earn rewards — all from Toliv.",
    downloadApp: "Download the app",
    features: [
      { title: "Discover the best events", description: "Personalized event feed based on your location, preferences, and friends. Filter by genre, city, or university area." },
      { title: "Match Mode — Connect at events", description: "Swipe to connect with other attendees before or during the event. Chat unlocks on match." },
      { title: "Earn XP and rewards", description: "Earn XP points for buying tickets, attending events, inviting friends, and more. Level up and unlock benefits." },
      { title: "Ticket wallet with QR", description: "All your tickets in one place with a QR code for venue entry. Transfer tickets to your friends." },
    ],

    // Organizer CTA
    launchingEvent: "Launching an event?",
    organizerSubtitle: "Your event deserves the best crowd. Smart targeting, real-time analytics, and seamless ticketing.",
    listMyEvent: "List my event",
    learnMore: "Learn more",
    organizerSlides: [
      { description: "Track your sales, inventory, and audience in real time." },
      { description: "Use our POS machines at no rental or monthly fee — just a 2.9% service charge." },
    ],

    // Footer
    forPartygoers: "For Partygoers",
    downloadTheApp: "Download the app",
    allEvents: "All events",
    allCities: "All cities",
    forOrganizers: "For Organizers",
    sellTickets: "Sell tickets",
    pricing: "Pricing",
    featuresLabel: "Features",
    tolivForArtists: "Toliv for Artists",
    company: "Company",
    aboutUs: "About us",
    hiring: "We're hiring 🎉",
    blog: "Blog",
    pressKit: "Press kit",
    popularCities: "Popular cities",
    legal: "Legal",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    cookiePolicy: "Cookie Policy",
    consumerInfo: "Consumer Information",
    weAreSocial: "We are social",
    allRightsReserved: "© 2026 Toliv. All rights reserved.",

    // Cities
    citiesPageTitle: "All Cities",
    citiesPageSubtitle: "Explore events across Chile. Select a city on the map or browse below.",
    eventsThisWeek: "events this week",

    // Explore
    exploreHeroTitle: "Find your next event",
    exploreHeroSub: "Real events from toliv.com — parties, festivals, and more across Chile.",
    exploreFeatured: "Featured this week",
    exploreAll: "All events",

    // Tickets
    ticketsSubtitle: "Your tickets with QR codes to access events.",

    // Favorites
    favoritesSubtitle: "Your saved events and artists.",

    // Mobile nav
    home: "Home",
    search: "Search",
    tickets: "Tickets",
    account: "Account",
  },
  es: {
    // Navbar
    exploreEvents: "Explorar Eventos",
    myTickets: "Mis Tickets",
    favorites: "Favoritos",
    searchPlaceholder: "Buscar evento, artista, organizador o ciudad",
    explore: "Explorar",
    listYourEvent: "Publica tu evento",
    logIn: "Iniciar sesión",
    searchMobile: "Buscar eventos, artistas, ciudades...",

    // Hero
    heroBadge: "Carretes cerca de ti",
    heroTitle1: "Encuentra",
    heroTitle2: "Carretes",
    heroTitle3: "cerca de ti!",
    heroSubtitle: "Descarga Toliv para encontrar carretes cerca de ti, conectar con nuestros 10k+ usuarios y crear eventos!",
    appStore: "App Store",
    playStore: "Play Store",
    appRatings: "50K+ App ratings",

    // Popular Events
    popularEventsIn: "Eventos populares en",
    today: "HOY",
    seeMoreEvents: "Ver más eventos",
    viewAllCities: "Ver todas las ciudades →",

    // Featured Artists
    trendingArtists: "Artistas en Tendencia",
    seeMoreArtists: "Ver todos",

    // App Features
    appFeaturesTitle: "Todo en",
    appFeaturesTitleAccent: "una app",
    appFeaturesSubtitle: "Descubre, compra tickets, conecta y gana recompensas — todo desde Toliv.",
    downloadApp: "Descarga la app",
    features: [
      { title: "Descubre los mejores eventos", description: "Feed personalizado de eventos según tu ubicación, gustos y amigos. Filtra por género, ciudad o zona universitaria." },
      { title: "Match Mode — Conecta en eventos", description: "Haz swipe para conectar con otros asistentes antes o durante el evento. Chat se desbloquea con match." },
      { title: "Gana XP y recompensas", description: "Gana puntos XP por comprar tickets, asistir a eventos, invitar amigos y más. Sube de nivel y desbloquea beneficios." },
      { title: "Wallet de tickets con QR", description: "Todas tus entradas en un solo lugar con código QR para entrar al evento. Transfiere tickets a tus amigos." },
    ],

    // Organizer CTA
    launchingEvent: "¿Lanzas un evento?",
    organizerSubtitle: "Tu evento merece el mejor público. Segmentación inteligente, analytics en tiempo real y ticketing sin fricciones.",
    listMyEvent: "Publica mi evento",
    learnMore: "Saber más",
    organizerSlides: [
      { description: "Lleva el control de tus ventas, inventario y audiencia en tiempo real." },
      { description: "Ocupa nuestras máquinas POS sin costo de arriendo ni mensualidad con un cobro por servicio de 2.9%." },
    ],

    // Footer
    forPartygoers: "Para Asistentes",
    downloadTheApp: "Descarga la app",
    allEvents: "Todos los eventos",
    allCities: "Todas las ciudades",
    forOrganizers: "Para Organizadores",
    sellTickets: "Vende tickets",
    pricing: "Precios",
    featuresLabel: "Funcionalidades",
    tolivForArtists: "Toliv para Artistas",
    company: "Empresa",
    aboutUs: "Sobre nosotros",
    hiring: "Estamos contratando 🎉",
    blog: "Blog",
    pressKit: "Kit de prensa",
    popularCities: "Ciudades populares",
    legal: "Legal",
    privacyPolicy: "Política de Privacidad",
    termsOfService: "Términos de Servicio",
    cookiePolicy: "Política de Cookies",
    consumerInfo: "Información al Consumidor",
    weAreSocial: "Síguenos",
    allRightsReserved: "© 2026 Toliv. Todos los derechos reservados.",

    // Cities
    citiesPageTitle: "Todas las ciudades",
    citiesPageSubtitle: "Explora eventos en todo Chile. Selecciona una ciudad en el mapa o navega abajo.",
    eventsThisWeek: "eventos esta semana",

    // Explore
    exploreHeroTitle: "Encuentra tu próximo evento",
    exploreHeroSub: "Eventos reales de toliv.com — fiestas, festivales y más en todo Chile.",
    exploreFeatured: "Destacados esta semana",
    exploreAll: "Todos los eventos",

    // Tickets
    ticketsSubtitle: "Tus entradas con código QR para acceder a los eventos.",

    // Favorites
    favoritesSubtitle: "Tus eventos y artistas guardados.",

    // Mobile nav
    home: "Inicio",
    search: "Buscar",
    tickets: "Tickets",
    account: "Cuenta",
  },
} as const;

type Translations = (typeof translations)[Lang];

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("es");
  const t = translations[lang];
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
};
