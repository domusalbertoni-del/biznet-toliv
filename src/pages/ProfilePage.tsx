import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft, Lock, MapPin, Music, Share2, Instagram, Twitter, Heart,
  Calendar, Globe,
} from "lucide-react";
import {
  getProfileById, formatFollowers,
  mockPosts, mockMerch, mockEvents, mockFollowers,
  type MockPost, type MockMerch, type MockEvent, type MockFollower,
} from "@/data/mockProfiles";
import { useState, useEffect } from "react";
import { useLang } from "@/contexts/LangContext";

const tabs = ["posts", "albums", "shop", "eventos", "seguidores", "info"] as const;
type TabId = (typeof tabs)[number];

const tabLabels: Record<string, Record<TabId, string>> = {
  en: { posts: "Posts", albums: "Albums", shop: "Shop", eventos: "Events", seguidores: "Followers", info: "Info" },
  es: { posts: "Posts", albums: "Álbumes", shop: "Tienda", eventos: "Eventos", seguidores: "Seguidores", info: "Info" },
};

const ProfilePage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { lang } = useLang();
  const [activeTab, setActiveTab] = useState<TabId>("posts");
  const [following, setFollowing] = useState(false);
  const [followBounce, setFollowBounce] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  const profile = getProfileById(id || "");

  useEffect(() => { setAnimKey((k) => k + 1); }, [activeTab]);

  const handleFollow = () => {
    setFollowing(!following);
    setFollowBounce(true);
    setTimeout(() => setFollowBounce(false), 300);
  };

  if (!profile) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Profile not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Cinematic Hero ── */}
      <div className="relative h-[85vh] overflow-hidden">
        <img
          src={profile.cover}
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Multi-stop dramatic gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent via-40% to-background" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 via-30% to-transparent" />

        {/* Top nav buttons */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-5 left-5 z-10 w-11 h-11 rounded-full bg-background/30 backdrop-blur-md flex items-center justify-center hover:bg-background/50 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full bg-background/30 backdrop-blur-md flex items-center justify-center hover:bg-background/50 transition-colors">
          <Share2 className="w-5 h-5" />
        </button>

        {/* Hero content pinned to bottom — centered */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 z-10 flex flex-col items-center text-center">
          {/* Avatar */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 mb-5">
            <div className="absolute -inset-2 rounded-full bg-primary/30 blur-xl animate-pulse" />
            <div className="w-full h-full rounded-full overflow-hidden ring-[3px] ring-primary/50 relative">
              <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-none">
            {profile.name}
          </h1>

          {/* Genre tag */}
          {profile.series && (
            <span className="inline-flex items-center gap-1.5 mt-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20">
              <Music className="w-3 h-3" />
              {profile.series}
            </span>
          )}

          {/* Inline stats */}
          <p className="mt-4 text-sm text-muted-foreground tracking-wide">
            <span className="text-foreground font-semibold">{formatFollowers(profile.followers)}</span>
            {" "}{lang === "es" ? "seguidores" : "followers"}
            <span className="mx-2 text-border">·</span>
            <span className="text-foreground font-semibold">{profile.posts}</span> posts
            <span className="mx-2 text-border">·</span>
            <span className="text-foreground font-semibold">{profile.albums}</span> albums
          </p>

          {/* Actions */}
          <div className="flex gap-3 mt-5">
            <button
              onClick={handleFollow}
              className={`px-10 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
                followBounce ? "scale-110" : "scale-100"
              } ${
                following
                  ? "bg-secondary text-foreground border border-border"
                  : "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
              }`}
            >
              {following
                ? lang === "es" ? "Siguiendo" : "Following"
                : lang === "es" ? "Seguir" : "Follow"}
            </button>
            <button className="px-6 py-2.5 rounded-full text-sm font-semibold bg-secondary/80 text-foreground border border-border/50 hover:bg-secondary transition-colors">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ── About Section (Shotgun-inspired) ── */}
      <div className="px-6 py-10 max-w-3xl mx-auto flex flex-col items-center text-center">
        {/* Bio */}
        {profile.bio && (
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
            {profile.bio}
          </p>
        )}

        {/* Meta row: country + first event */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-5">
          {profile.country && (
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Globe className="w-3.5 h-3.5" />
              {profile.country}
            </span>
          )}
          {profile.firstEventDate && (
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Calendar className="w-3.5 h-3.5 text-primary" />
              {lang === "es" ? "En Toliv desde" : "On Toliv since"}{" "}
              <span className="text-foreground font-medium">{profile.firstEventDate}</span>
            </span>
          )}
        </div>

        {/* Social links row */}
        <div className="flex items-center justify-center gap-3 mt-5">
          {[
            { Icon: Instagram, label: "Instagram" },
            { Icon: Twitter, label: "X" },
            { Icon: Music, label: "Spotify" },
          ].map(({ Icon, label }) => (
            <a
              key={label}
              href="#"
              className="w-10 h-10 rounded-full bg-secondary/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 cursor-pointer"
              title={label}
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>

      {/* ── Underline Tabs ── */}
      <div className="sticky top-0 z-20 bg-background/80 backdrop-blur-xl border-b border-border/30">
        <div className="flex overflow-x-auto justify-center gap-1 px-6 no-scrollbar scrollbar-hide max-w-3xl mx-auto">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-4 py-4 text-sm font-medium whitespace-nowrap transition-colors ${
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground/70"
                }`}
              >
                {tabLabels[lang]?.[tab] || tab}
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-primary rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Tab Content ── */}
      <div key={animKey} className="px-5 pb-28 pt-8 animate-fade-in">
        {activeTab === "posts" && <PostsTab posts={mockPosts} />}
        {activeTab === "albums" && <AlbumsTab lang={lang} />}
        {activeTab === "shop" && <ShopTab merch={mockMerch} lang={lang} />}
        {activeTab === "eventos" && <EventsTab events={mockEvents} />}
        {activeTab === "seguidores" && <FollowersTab followers={mockFollowers} lang={lang} />}
        {activeTab === "info" && <InfoTab profile={profile} lang={lang} />}
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════
   Posts — Magazine Grid
   ═══════════════════════════════════════════ */
const PostsTab = ({ posts }: { posts: MockPost[] }) => {
  const [featured, ...rest] = posts;
  return (
    <div className="max-w-2xl mx-auto space-y-3">
      {/* Featured post — full width */}
      <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
        <img src={featured.image} alt="" className="w-full aspect-[16/10] object-cover group-hover:scale-[1.03] transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="text-sm font-medium leading-relaxed">{featured.caption}</p>
          <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5 text-accent" />{featured.likes}</span>
            <span>{featured.timeAgo}</span>
          </div>
        </div>
      </div>

      {/* 2-col grid */}
      <div className="grid grid-cols-2 gap-3">
        {rest.map((post) => (
          <div key={post.id} className="relative rounded-xl overflow-hidden group cursor-pointer">
            <img src={post.image} alt="" className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <p className="text-xs leading-snug line-clamp-2">{post.caption}</p>
              <span className="flex items-center gap-1 mt-1 text-[10px] text-muted-foreground">
                <Heart className="w-3 h-3 text-accent" />{post.likes}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════
   Albums — Cinematic Locked Teaser
   ═══════════════════════════════════════════ */
const AlbumsTab = ({ lang }: { lang: string }) => (
  <div className="max-w-2xl mx-auto">
    <div className="relative rounded-2xl overflow-hidden min-h-[400px]">
      {/* Blurred mosaic */}
      <div className="absolute inset-0 grid grid-cols-3 gap-0.5 blur-xl opacity-40 scale-110">
        {mockPosts.map((p) => (
          <img key={p.id} src={p.image} alt="" className="w-full aspect-square object-cover" />
        ))}
        {mockPosts.slice(0, 2).map((p) => (
          <img key={p.id + "-d"} src={p.image} alt="" className="w-full aspect-square object-cover" />
        ))}
      </div>
      {/* Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[400px] px-6 text-center">
        <div className="w-20 h-20 rounded-full bg-background/50 backdrop-blur-md flex items-center justify-center mb-6 border border-border/30">
          <Lock className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-2">
          {lang === "es" ? "Contenido exclusivo" : "Exclusive content"}
        </h3>
        <p className="text-sm text-muted-foreground max-w-xs mb-6">
          {lang === "es"
            ? "Descarga Toliv para acceder a fotos y álbumes exclusivos."
            : "Download Toliv to access exclusive photos and albums."}
        </p>
        <a
          href="https://www.toliv.com/download-app"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-full bg-primary text-primary-foreground text-sm font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow"
        >
          {lang === "es" ? "Descargar Toliv" : "Download Toliv"}
        </a>
      </div>
    </div>
  </div>
);

/* ═══════════════════════════════════════════
   Shop — Editorial Product Showcase
   ═══════════════════════════════════════════ */
const ShopTab = ({ merch, lang }: { merch: MockMerch[]; lang: string }) => {
  const [heroItem, ...gridItems] = merch;
  return (
    <div className="max-w-2xl mx-auto space-y-3">
      {/* Hero product */}
      <div className={`relative rounded-2xl overflow-hidden group cursor-pointer ${heroItem.comingSoon ? "grayscale" : ""}`}>
        <img src={heroItem.image} alt={heroItem.name} className="w-full aspect-[16/9] object-cover group-hover:scale-[1.03] transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="text-lg font-bold">{heroItem.name}</p>
          <p className="text-primary font-bold mt-1">{heroItem.price}</p>
        </div>
        {heroItem.comingSoon && (
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-background/60 backdrop-blur-sm text-xs font-bold text-primary border border-primary/20">
            {lang === "es" ? "Próximamente" : "Coming Soon"}
          </div>
        )}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-3">
        {gridItems.map((item) => (
          <div
            key={item.id}
            className={`relative rounded-xl overflow-hidden group cursor-pointer ${item.comingSoon ? "grayscale" : ""}`}
          >
            <img src={item.image} alt={item.name} className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="text-sm font-bold truncate">{item.name}</p>
              <p className="text-xs text-primary font-bold mt-0.5">{item.price}</p>
            </div>
            {item.comingSoon && (
              <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-background/60 backdrop-blur-sm text-[10px] font-bold text-primary border border-primary/20">
                {lang === "es" ? "Próximamente" : "Coming Soon"}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════
   Events — Timeline Style
   ═══════════════════════════════════════════ */
const EventsTab = ({ events }: { events: MockEvent[] }) => (
  <div className="max-w-2xl mx-auto">
    <div className="relative pl-8 border-l border-border/40">
      {events.map((event, i) => (
        <div key={event.id} className={`relative ${i > 0 ? "mt-8" : ""}`}>
          {/* Dot on timeline */}
          <div className="absolute -left-[calc(2rem+5px)] top-1 w-2.5 h-2.5 rounded-full bg-primary shadow-md shadow-primary/30" />

          {/* Date label */}
          <span className="text-[11px] font-bold text-primary tracking-widest uppercase">{event.date}</span>

          {/* Event card */}
          <div className="mt-2 rounded-xl overflow-hidden group cursor-pointer relative">
            <img src={event.flyer} alt={event.name} className="w-full aspect-[3/4] object-cover group-hover:scale-[1.02] transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="text-lg font-bold">{event.name}</h3>
              <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1.5">
                <MapPin className="w-3 h-3 flex-shrink-0" />
                {event.venue}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* ═══════════════════════════════════════════
   Followers — Compact List
   ═══════════════════════════════════════════ */
const FollowersTab = ({ followers, lang }: { followers: MockFollower[]; lang: string }) => {
  const [followStates, setFollowStates] = useState<Record<string, boolean>>(
    Object.fromEntries(followers.map((f) => [f.id, f.isFollowing]))
  );

  return (
    <div className="max-w-lg mx-auto space-y-2">
      {followers.map((f) => (
        <div
          key={f.id}
          className="flex items-center gap-4 py-3 px-1 border-b border-border/20 last:border-0"
        >
          <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
            <img src={f.avatar} alt={f.name} className="w-full h-full object-cover" />
          </div>
          <p className="flex-1 text-sm font-medium truncate">{f.name}</p>
          <button
            onClick={() => setFollowStates((s) => ({ ...s, [f.id]: !s[f.id] }))}
            className={`text-xs font-bold px-5 py-2 rounded-full transition-all ${
              followStates[f.id]
                ? "bg-secondary text-muted-foreground border border-border/50"
                : "bg-primary/15 text-primary border border-primary/25 hover:bg-primary/25"
            }`}
          >
            {followStates[f.id]
              ? lang === "es" ? "Siguiendo" : "Following"
              : lang === "es" ? "Seguir" : "Follow"}
          </button>
        </div>
      ))}
    </div>
  );
};

/* ═══════════════════════════════════════════
   Info — Editorial Sections
   ═══════════════════════════════════════════ */
const InfoTab = ({ profile, lang }: { profile: { bio?: string; series?: string; followers: number; posts: number; albums: number }; lang: string }) => (
  <div className="max-w-lg mx-auto space-y-10">
    {/* Genre */}
    {profile.series && (
      <div>
        <h3 className="text-[11px] font-bold text-muted-foreground tracking-widest uppercase mb-4">
          {lang === "es" ? "Género" : "Genre"}
        </h3>
        <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary text-sm font-bold border border-primary/20">
          <Music className="w-4 h-4" />
          {profile.series}
        </span>
      </div>
    )}

    {/* Stats summary */}
    <div>
      <h3 className="text-[11px] font-bold text-muted-foreground tracking-widest uppercase mb-4">
        {lang === "es" ? "Estadísticas" : "Stats"}
      </h3>
      <div className="grid grid-cols-3 gap-3">
        {[
          { value: formatFollowers(profile.followers), label: lang === "es" ? "Seguidores" : "Followers" },
          { value: profile.posts, label: "Posts" },
          { value: profile.albums, label: "Albums" },
        ].map((s) => (
          <div key={s.label} className="text-center py-4 rounded-xl bg-secondary/40 border border-border/20">
            <p className="font-bold text-lg text-primary">{s.value}</p>
            <p className="text-[10px] text-muted-foreground mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ProfilePage;
