import { useState } from "react";
import { Search, Clock, MapPin, Filter, ChevronDown, Calendar, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useLang } from "@/contexts/LangContext";
import Navbar from "@/components/Navbar";
import MobileBottomNav from "@/components/MobileBottomNav";
import Footer from "@/components/Footer";
import club1Flyer from "@/assets/club-1-flyer.jpg";
import mamisongaFlyer from "@/assets/mamisonga-flyer.jpg";
import miercolesPoFlyer from "@/assets/miercoles-po-flyer.jpg";
import genesisFlyer from "@/assets/genesis-flyer.jpg";
import event1 from "@/assets/event-1.webp";
import event2 from "@/assets/event-2.webp";
import event3 from "@/assets/event-3.webp";

const allEvents = [
  { id: "bienvenido-weones", title: "Bienvenido Weones 2026", price: "$8.000", venue: "Ex Fábrica, Recoleta", time: "22:30", day: "11", month: "MAR", tags: ["Reggaeton", "Urban"], image: miercolesPoFlyer, city: "Santiago", isToday: false, isFeatured: true },
  { id: "mimossa", title: "Mimossa 🌅 After Office, Sunset & Party", price: "$10.000", venue: "Bajo Tijuana, Antofagasta", time: "19:00", day: "12", month: "MAR", tags: ["Party", "Sunset"], image: mamisongaFlyer, city: "Antofagasta", isToday: false, isFeatured: true },
  { id: "club-mm", title: "CLUB M&M - Back to M&M University", price: "$7.000", venue: "Club M&M, Recoleta", time: "21:00", day: "13", month: "MAR", tags: ["Urban", "Party"], image: event1, city: "Santiago", isToday: false, isFeatured: true },
  { id: "club-1", title: "Club 1", price: "$15.000", venue: "Recoleta, Santiago", time: "23:00", day: "06", month: "MAR", tags: ["Techno"], image: club1Flyer, city: "Santiago", isToday: false },
  { id: "mamisonga", title: "Mamisonga", price: "$12.000", venue: "Secret Spot, Peñaflor", time: "23:00", day: "08", month: "MAR", tags: ["Reggaeton"], image: mamisongaFlyer, city: "Santiago", isToday: false },
  { id: "miercoles-po", title: "Miércoles Po", price: "$10.000", venue: "Hangar, Santiago", time: "22:30", day: "04", month: "MAR", tags: ["Party"], image: miercolesPoFlyer, city: "Santiago", isToday: true },
  { id: "genesis", title: "Genesis", price: "$20.000", venue: "Ignis Centro de Eventos", time: "23:00", day: "06", month: "MAR", tags: ["Techno"], image: genesisFlyer, city: "Santiago", isToday: false },
  { id: "ritmo-urbano", title: "Ritmo Urbano Festival", price: "$15.000", venue: "Plaza Central, Santiago", time: "21:00", day: "05", month: "ABR", tags: ["Reggaeton", "Urban"], image: event2, city: "Santiago", isToday: false },
  { id: "techno-ritual", title: "Techno Ritual", price: "$30.000", venue: "Fábrica Abandonada", time: "00:00", day: "12", month: "ABR", tags: ["Techno"], image: event3, city: "Santiago", isToday: false },
  { id: "chill-groove", title: "Chill & Groove", price: "$20.000", venue: "Rooftop Lounge, Viña", time: "19:00", day: "18", month: "ABR", tags: ["Lo-Fi", "Chill"], image: event1, city: "Viña del Mar", isToday: false },
  { id: "fiesta-neon", title: "Fiesta Neón", price: "$28.000", venue: "Arena Santiago", time: "22:30", day: "25", month: "ABR", tags: ["EDM"], image: event2, city: "Santiago", isToday: false },
  { id: "deep-sessions", title: "Deep Sessions After", price: "$12.000", venue: "The Underground, Valparaíso", time: "01:00", day: "29", month: "MAR", tags: ["Deep House"], image: event3, city: "Valparaíso", isToday: false },
];

const cities = ["Todas", "Santiago", "Valparaíso", "Viña del Mar", "Antofagasta", "Concepción", "La Serena"];
const genres = ["Todos", "Techno", "Reggaeton", "Urban", "Party", "EDM", "Deep House", "Lo-Fi"];

const ExplorePage = () => {
  const { t } = useLang();
  const [search, setSearch] = useState("");
  const [selectedCity, setSelectedCity] = useState("Todas");
  const [selectedGenre, setSelectedGenre] = useState("Todos");
  const [cityOpen, setCityOpen] = useState(false);

  const filtered = allEvents.filter((e) => {
    const matchSearch = e.title.toLowerCase().includes(search.toLowerCase()) || e.venue.toLowerCase().includes(search.toLowerCase());
    const matchCity = selectedCity === "Todas" || e.city === selectedCity;
    const matchGenre = selectedGenre === "Todos" || e.tags.includes(selectedGenre);
    return matchSearch && matchCity && matchGenre;
  });

  const featured = filtered.filter((e) => e.isFeatured);
  const rest = filtered.filter((e) => !e.isFeatured);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-14 pb-20 md:pb-0">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-background to-background" />
          <div className="relative px-6 lg:px-12 max-w-7xl mx-auto pt-16 pb-10">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm text-primary font-semibold uppercase tracking-wider">{t.exploreEvents}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-3">
              {t.exploreHeroTitle || "Encuentra tu próximo evento"}
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mb-8">
              {t.exploreHeroSub || "Eventos reales de toliv.com — fiestas, festivales y más en todo Chile."}
            </p>

            {/* Search + Filters */}
            <div className="flex flex-col md:flex-row gap-3">
              <div className="relative flex-1 max-w-lg">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={t.searchPlaceholder}
                  className="w-full bg-secondary rounded-2xl pl-11 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none border border-border/50 focus:border-primary/50 transition-colors"
                />
              </div>

              {/* City filter */}
              <div className="relative">
                <button
                  onClick={() => setCityOpen(!cityOpen)}
                  className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-secondary border border-border/50 text-sm hover:border-primary/40 transition-colors"
                >
                  <MapPin className="w-4 h-4 text-primary" />
                  {selectedCity}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${cityOpen ? "rotate-180" : ""}`} />
                </button>
                {cityOpen && (
                  <div className="absolute top-full mt-2 left-0 min-w-[180px] bg-card border border-border rounded-xl shadow-2xl z-50 py-1">
                    {cities.map((c) => (
                      <button key={c} onClick={() => { setSelectedCity(c); setCityOpen(false); }} className={`w-full text-left px-4 py-2.5 text-sm hover:bg-secondary transition-colors ${selectedCity === c ? "text-primary font-semibold" : "text-foreground"}`}>
                        {c}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Genre chips */}
            <div className="flex flex-wrap gap-2 mt-5">
              {genres.map((g) => (
                <button
                  key={g}
                  onClick={() => setSelectedGenre(g)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selectedGenre === g
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                      : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured events — large cards */}
        {featured.length > 0 && (
          <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-12">
            <h2 className="text-lg font-bold uppercase tracking-wider text-muted-foreground mb-6 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              {t.exploreFeatured || "Destacados esta semana"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {featured.map((event) => (
                <a key={event.id} href={`https://toliv.com/eventos/chile/${event.id}`} target="_blank" rel="noopener noreferrer" className="group relative rounded-3xl overflow-hidden aspect-[3/4] bg-card">
                  <img src={event.image} alt={event.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  {event.isToday && (
                    <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-accent text-accent-foreground rounded-full px-3 py-1 text-xs font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-foreground animate-pulse" />
                      HOY
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex gap-2 mb-3">
                      {event.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-sm text-[11px] text-white/80 font-medium">{tag}</span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{event.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-white/70">
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{event.day} {event.month} · {event.time}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{event.city}</span>
                    </div>
                    <div className="mt-3 text-primary font-bold text-lg">{event.price}</div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* All events grid */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto pb-16">
          <h2 className="text-lg font-bold uppercase tracking-wider text-muted-foreground mb-6">
            {t.exploreAll || "Todos los eventos"} <span className="text-foreground">({filtered.length})</span>
          </h2>
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No se encontraron eventos</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {(rest.length > 0 ? rest : filtered).map((event) => (
                <a key={event.id} href={`https://toliv.com/eventos/chile/${event.id}`} target="_blank" rel="noopener noreferrer" className="group block rounded-2xl overflow-hidden bg-card hover:ring-1 hover:ring-primary/30 transition-all duration-300">
                  <div className="relative aspect-[9/16] overflow-hidden">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute bottom-3 right-3 bg-accent text-accent-foreground rounded-xl px-3 py-1.5 text-center min-w-[48px]">
                      <span className="block text-lg font-bold leading-tight">{event.day}</span>
                      <span className="block text-[10px] font-semibold uppercase tracking-wider">{event.month}</span>
                    </div>
                    {event.isToday && (
                      <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-accent text-accent-foreground rounded-full px-3 py-1 text-xs font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-foreground animate-pulse" />
                        HOY
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                  </div>
                  <div className="p-3 md:p-4">
                    <h3 className="font-bold text-sm md:text-base mb-1.5 group-hover:text-primary transition-colors line-clamp-1">{event.title}</h3>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                      <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" />{event.time}</span>
                      <span className="inline-flex items-center gap-1 line-clamp-1"><MapPin className="w-3 h-3" />{event.venue}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1.5">
                        {event.tags.slice(0, 1).map((tag) => (
                          <span key={tag} className="px-2 py-0.5 rounded-full bg-secondary text-[10px] text-muted-foreground font-medium">{tag}</span>
                        ))}
                      </div>
                      <span className="text-primary font-bold text-xs md:text-sm">{event.price}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </section>

        <Footer />
      </main>
      <MobileBottomNav />
    </div>
  );
};

export default ExplorePage;
