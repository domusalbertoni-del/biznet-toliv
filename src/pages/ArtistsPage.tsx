import { Link } from "react-router-dom";
import { ArrowLeft, Music } from "lucide-react";
import { useLang } from "@/contexts/LangContext";
import { artistProfiles, formatFollowers } from "@/data/mockProfiles";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ArtistsPage = () => {
  const { lang } = useLang();
  const { ref, isVisible } = useScrollReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient-bg opacity-40" />
        <div className="relative z-10 px-6 lg:px-12 max-w-5xl mx-auto pt-8 pb-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            {lang === "es" ? "Volver" : "Back"}
          </Link>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-none">
            {lang === "es" ? "Artistas" : "Artists"}
          </h1>
          <p className="mt-4 text-muted-foreground text-base md:text-lg max-w-lg">
            {lang === "es"
              ? "Descubre a los artistas que están moviendo la escena en Toliv."
              : "Discover the artists shaping the scene on Toliv."}
          </p>
        </div>
      </div>

      {/* Artists grid */}
      <div className="px-6 lg:px-12 max-w-5xl mx-auto pb-28 -mt-4" ref={ref}>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-10">
          {artistProfiles.map((artist, i) => (
            <Link
              key={artist.id}
              to={`/profile/${artist.id}`}
              className={`group flex flex-col items-center text-center reveal-scale ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              {/* Avatar */}
              <div className="relative w-28 h-28 md:w-32 md:h-32 mb-4">
                <div className="absolute -inset-1 rounded-full bg-primary/0 group-hover:bg-primary/20 blur-lg transition-all duration-500" />
                <div className="w-full h-full rounded-full overflow-hidden ring-2 ring-border/50 group-hover:ring-primary/60 transition-all duration-300 relative">
                  <img
                    src={artist.avatar}
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Name */}
              <h3 className="font-bold text-sm group-hover:text-primary transition-colors">
                {artist.name}
              </h3>

              {/* Genre */}
              {artist.series && (
                <span className="inline-flex items-center gap-1 mt-1.5 text-[11px] text-muted-foreground">
                  <Music className="w-3 h-3" />
                  {artist.series}
                </span>
              )}

              {/* Followers */}
              <span className="text-[11px] text-muted-foreground mt-1">
                {formatFollowers(artist.followers)} {lang === "es" ? "seguidores" : "followers"}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtistsPage;
