import { useState } from "react";
import { Heart, Clock, MapPin, BadgeCheck, Music, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useLang } from "@/contexts/LangContext";
import Navbar from "@/components/Navbar";
import MobileBottomNav from "@/components/MobileBottomNav";
import { artistProfiles, formatFollowers } from "@/data/mockProfiles";
import club1Flyer from "@/assets/club-1-flyer.jpg";
import genesisFlyer from "@/assets/genesis-flyer.jpg";
import mamisongaFlyer from "@/assets/mamisonga-flyer.jpg";
import miercolesPoFlyer from "@/assets/miercoles-po-flyer.jpg";

const favoriteEvents = [
  { id: "genesis", title: "Genesis", date: "06 MAR", time: "23:00", venue: "Ignis Centro de Eventos", price: "$20.000", image: genesisFlyer, tags: ["Techno"] },
  { id: "club-1", title: "Club 1", date: "06 MAR", time: "23:00", venue: "Recoleta, Santiago", price: "$15.000", image: club1Flyer, tags: ["Techno"] },
  { id: "mamisonga", title: "Mamisonga", date: "08 MAR", time: "23:00", venue: "Secret Spot, Peñaflor", price: "$12.000", image: mamisongaFlyer, tags: ["Reggaeton"] },
  { id: "miercoles-po", title: "Miércoles Po", date: "04 MAR", time: "22:30", venue: "Hangar, Santiago", price: "$10.000", image: miercolesPoFlyer, tags: ["Party"] },
];

const favoriteArtists = artistProfiles.filter((a) => ["marcianeke", "cris-mj", "pablochill-e", "cuartero", "loyaltty"].includes(a.id));

type Tab = "events" | "artists";

const FavoritesPage = () => {
  const { t } = useLang();
  const [tab, setTab] = useState<Tab>("events");
  const [likedEvents, setLikedEvents] = useState<Set<string>>(new Set(favoriteEvents.map((e) => e.id)));
  const [likedArtists, setLikedArtists] = useState<Set<string>>(new Set(favoriteArtists.map((a) => a.id)));

  const toggleEvent = (id: string) => {
    setLikedEvents((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const toggleArtist = (id: string) => {
    setLikedArtists((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-14 pb-20 md:pb-0">
        <div className="px-6 lg:px-12 max-w-5xl mx-auto pt-12 pb-16">
          {/* Header */}
          <div className="flex items-center gap-3 mb-2">
            <Heart className="w-6 h-6 text-accent fill-accent" />
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{t.favorites}</h1>
          </div>
          <p className="text-muted-foreground mb-8">
            {t.favoritesSubtitle || "Tus eventos y artistas guardados."}
          </p>

          {/* Tabs */}
          <div className="flex gap-1 p-1 bg-secondary rounded-2xl w-fit mb-10">
            <button
              onClick={() => setTab("events")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                tab === "events" ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Calendar className="w-4 h-4" />
              Eventos ({favoriteEvents.filter((e) => likedEvents.has(e.id)).length})
            </button>
            <button
              onClick={() => setTab("artists")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                tab === "artists" ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Music className="w-4 h-4" />
              Artistas ({favoriteArtists.filter((a) => likedArtists.has(a.id)).length})
            </button>
          </div>

          {/* Events tab */}
          {tab === "events" && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {favoriteEvents.filter((e) => likedEvents.has(e.id)).map((event) => (
                <div key={event.id} className="group relative rounded-2xl overflow-hidden bg-card">
                  <div className="relative aspect-[9/16] overflow-hidden">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                    {/* Heart button */}
                    <button
                      onClick={() => toggleEvent(event.id)}
                      className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-black/60 transition-colors"
                    >
                      <Heart className="w-4 h-4 text-accent fill-accent" />
                    </button>
                  </div>
                  <div className="p-3">
                    <h3 className="font-bold text-sm mb-1 group-hover:text-primary transition-colors line-clamp-1">{event.title}</h3>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{event.date}</span>
                      <span className="text-primary font-bold">{event.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Artists tab */}
          {tab === "artists" && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {favoriteArtists.filter((a) => likedArtists.has(a.id)).map((artist) => (
                <div key={artist.id} className="group flex flex-col items-center text-center">
                  <div className="relative">
                    <Link to={`/profile/${artist.id}`}>
                      <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden ring-2 ring-border/50 group-hover:ring-primary/60 transition-all duration-300">
                        <img src={artist.avatar} alt={artist.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                    </Link>
                    <button
                      onClick={() => toggleArtist(artist.id)}
                      className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                    >
                      <Heart className="w-3.5 h-3.5 text-accent fill-accent" />
                    </button>
                  </div>
                  <Link to={`/profile/${artist.id}`} className="mt-3">
                    <h3 className="font-bold text-sm inline-flex items-center gap-1 group-hover:text-primary transition-colors">
                      {artist.name}
                      {artist.verified && <BadgeCheck className="w-4 h-4 text-primary fill-primary/20" />}
                    </h3>
                  </Link>
                  <p className="text-xs text-muted-foreground">{formatFollowers(artist.followers)} seguidores</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <MobileBottomNav />
    </div>
  );
};

export default FavoritesPage;
