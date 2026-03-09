import { useState } from "react";
import { ChevronDown, BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useLang } from "@/contexts/LangContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { artistProfiles, eventProfiles, formatFollowers } from "@/data/mockProfiles";

type ViewMode = "artists" | "events";

const FeaturedArtists = () => {
  const { t, lang } = useLang();
  const { ref, isVisible } = useScrollReveal();
  const [viewMode, setViewMode] = useState<ViewMode>("artists");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const options = [
    { value: "artists" as const, label: lang === "es" ? "Artistas en Tendencia" : "Trending Artists" },
    { value: "events" as const, label: lang === "es" ? "Eventos en Tendencia" : "Trending Events" },
  ];

  const selected = options.find((o) => o.value === viewMode)!;
  const profiles = viewMode === "artists" ? artistProfiles : eventProfiles;

  return (
    <section className="py-12 overflow-hidden" ref={ref}>
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Header with dropdown */}
        <div className={`relative mb-6 z-20 reveal ${isVisible ? "visible" : ""}`}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="inline-flex items-center gap-2 text-xl heading-uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            {selected.label}
            <ChevronDown className={`w-5 h-5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
          </button>
          <div className={`absolute top-full mt-2 left-0 min-w-[240px] bg-card border border-border rounded-xl shadow-xl z-50 py-1 overflow-hidden transition-all duration-200 origin-top ${dropdownOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"}`}>
            {options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => { setViewMode(opt.value); setDropdownOpen(false); }}
                className={`w-full text-left px-4 py-2.5 text-sm hover:bg-secondary transition-colors ${viewMode === opt.value ? "text-primary font-semibold" : "text-foreground"}`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Profiles carousel */}
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide transition-opacity duration-300" key={viewMode}>
          {profiles.map((profile, i) => (
            <Link
              key={profile.id}
              to={`/profile/${profile.id}`}
              className={`group flex-shrink-0 w-44 text-center reveal-scale ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <div className="relative w-32 h-32 mx-auto mb-3 rounded-full overflow-hidden ring-2 ring-border group-hover:ring-primary transition-all group-hover:glow-primary">
                <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <p className="font-bold text-sm group-hover:text-primary transition-colors">{profile.name}</p>
              <p className="text-xs text-muted-foreground">
                {viewMode === "artists" ? profile.series : `${formatFollowers(profile.followers)} ${lang === "es" ? "seguidores" : "followers"}`}
              </p>
            </Link>
          ))}
        </div>

        <div className={`flex justify-center mt-6 reveal ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "0.6s" }}>
          <Link to={viewMode === "artists" ? "/artists" : "#"} className="inline-flex items-center gap-2 px-7 py-3 rounded-2xl border border-border text-sm font-medium hover:bg-secondary hover:border-primary/30 transition-all">
            {t.seeMoreArtists}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtists;
