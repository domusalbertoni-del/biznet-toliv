import { Link } from "react-router-dom";
import { ArrowLeft, Music, Users, BadgeCheck } from "lucide-react";
import { useLang } from "@/contexts/LangContext";
import { artistProfiles, formatFollowers } from "@/data/mockProfiles";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ArtistsPage = () => {
  const { lang } = useLang();
  const { ref, isVisible } = useScrollReveal();

  // Split into featured (top 3 by followers) and the rest
  const sorted = [...artistProfiles].sort((a, b) => b.followers - a.followers);
  const featured = sorted.slice(0, 3);
  const rest = sorted.slice(3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Immersive Hero ── */}
      <div className="relative min-h-[70vh] flex flex-col overflow-hidden">
        {/* Background collage of artist images */}
        <div className="absolute inset-0 grid grid-cols-3 opacity-20">
          {featured.map((a) => (
            <div key={a.id} className="overflow-hidden">
              <img src={a.cover} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 hero-gradient-bg opacity-30" />

        {/* Nav */}
        <div className="relative z-10 px-6 lg:px-12 pt-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {lang === "es" ? "Inicio" : "Home"}
          </Link>
        </div>

        {/* Hero content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 py-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-6">
            <Users className="w-3.5 h-3.5" />
            TOLIV
          </div>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
            {lang === "es" ? (
              <>
                <span className="block">Los artistas</span>
                <span className="block text-gradient">del momento</span>
              </>
            ) : (
              <>
                <span className="block">The artists</span>
                <span className="block text-gradient">of the moment</span>
              </>
            )}
          </h1>
          <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-md">
            {lang === "es"
              ? "Conecta con los artistas que están definiendo la escena."
              : "Connect with the artists defining the scene."}
          </p>
        </div>
      </div>

      {/* ── Featured Artists — Large Cards ── */}
      <section className="px-6 lg:px-12 max-w-6xl mx-auto -mt-8 relative z-10 mb-16" ref={ref}>
        <h2 className="text-[11px] font-bold text-muted-foreground tracking-widest uppercase mb-6 text-center">
          {lang === "es" ? "Artistas destacados" : "Featured artists"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featured.map((artist, i) => (
            <Link
              key={artist.id}
              to={`/profile/${artist.id}`}
              className={`group relative rounded-2xl overflow-hidden aspect-[3/4] reveal-scale ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <img
                src={artist.avatar}
                alt={artist.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                {artist.series && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/15 text-primary text-[10px] font-bold border border-primary/20 mb-3">
                    <Music className="w-2.5 h-2.5" />
                    {artist.series}
                  </span>
                )}
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight inline-flex items-center gap-2">
                  {artist.name}
                  {artist.verified && <BadgeCheck className="w-5 h-5 text-primary fill-primary/20" />}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {formatFollowers(artist.followers)} {lang === "es" ? "seguidores" : "followers"}
                </p>
              </div>
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border-2 border-primary/30 rounded-2xl" />
            </Link>
          ))}
        </div>
      </section>

      {/* ── All Artists Grid ── */}
      <section className="px-6 lg:px-12 max-w-6xl mx-auto pb-28">
        <h2 className="text-[11px] font-bold text-muted-foreground tracking-widest uppercase mb-8 text-center">
          {lang === "es" ? "Todos los artistas" : "All artists"}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-10">
          {rest.map((artist, i) => (
            <Link
              key={artist.id}
              to={`/profile/${artist.id}`}
              className={`group flex flex-col items-center text-center reveal-scale ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${0.3 + i * 0.04}s` }}
            >
              <div className="relative w-24 h-24 md:w-28 md:h-28 mb-3">
                <div className="absolute -inset-1.5 rounded-full bg-primary/0 group-hover:bg-primary/25 blur-xl transition-all duration-500" />
                <div className="w-full h-full rounded-full overflow-hidden ring-2 ring-border/30 group-hover:ring-primary/50 transition-all duration-300 relative">
                  <img
                    src={artist.avatar}
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <h3 className="font-bold text-sm group-hover:text-primary transition-colors inline-flex items-center gap-1">
                {artist.name}
                {artist.verified && <BadgeCheck className="w-3.5 h-3.5 text-primary fill-primary/20" />}
              </h3>
              {artist.series && (
                <span className="inline-flex items-center gap-1 mt-1 text-[10px] text-muted-foreground">
                  <Music className="w-2.5 h-2.5" />
                  {artist.series}
                </span>
              )}
              <span className="text-[10px] text-muted-foreground mt-0.5">
                {formatFollowers(artist.followers)} {lang === "es" ? "seguidores" : "followers"}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ArtistsPage;
