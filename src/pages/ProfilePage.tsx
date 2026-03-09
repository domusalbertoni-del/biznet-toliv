import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft, Users, FileText, Image, Calendar, Info, Lock,
  ShoppingBag, Heart, MapPin, Music, Share2, Instagram, Twitter
} from "lucide-react";
import {
  getProfileById, formatFollowers,
  mockPosts, mockMerch, mockEvents, mockFollowers,
  type MockPost, type MockMerch, type MockEvent, type MockFollower
} from "@/data/mockProfiles";
import { useState, useEffect, useRef } from "react";
import { useLang } from "@/contexts/LangContext";

const tabs = [
  { id: "posts", icon: FileText },
  { id: "albums", icon: Image },
  { id: "shop", icon: ShoppingBag },
  { id: "eventos", icon: Calendar },
  { id: "seguidores", icon: Users },
  { id: "info", icon: Info },
];

const tabLabels: Record<string, Record<string, string>> = {
  en: { posts: "Posts", albums: "Albums", shop: "Shop", eventos: "Events", seguidores: "Followers", info: "Info" },
  es: { posts: "Posts", albums: "Albums", shop: "Tienda", eventos: "Eventos", seguidores: "Seguidores", info: "Info" },
};

const ProfilePage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { lang } = useLang();
  const [activeTab, setActiveTab] = useState("posts");
  const [following, setFollowing] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const [followBounce, setFollowBounce] = useState(false);
  const tabsRef = useRef<HTMLDivElement>(null);

  const profile = getProfileById(id || "");

  useEffect(() => {
    setAnimKey((k) => k + 1);
  }, [activeTab]);

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
      {/* ── Hero Cover ── */}
      <div className="relative h-80 md:h-96 overflow-hidden">
        <img
          src={profile.cover}
          alt=""
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 to-background" />
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 z-10 w-10 h-10 rounded-full bg-background/40 backdrop-blur-md flex items-center justify-center hover:bg-background/60 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/40 backdrop-blur-md flex items-center justify-center hover:bg-background/60 transition-colors">
          <Share2 className="w-5 h-5" />
        </button>
      </div>

      {/* ── Avatar + Name + Stats ── */}
      <div className="flex flex-col items-center -mt-20 relative z-10 px-4">
        {/* Glowing avatar */}
        <div className="relative">
          <div className="absolute -inset-1.5 rounded-full bg-primary/40 blur-md animate-pulse" />
          <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-primary/60 relative">
            <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" />
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold mt-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          {profile.name}
        </h1>

        {profile.series && (
          <span className="mt-2 px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-semibold border border-primary/20">
            <Music className="w-3 h-3 inline mr-1" />
            {profile.series}
          </span>
        )}

        {/* Glass stats */}
        <div className="flex gap-3 mt-5">
          {[
            { value: formatFollowers(profile.followers), label: lang === "es" ? "Seguidores" : "Followers" },
            { value: profile.posts, label: "Posts" },
            { value: profile.albums, label: "Albums" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center px-5 py-3 rounded-2xl bg-card/60 backdrop-blur-md border border-border/50"
            >
              <p className="font-bold text-lg">{stat.value}</p>
              <p className="text-[11px] text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Follow button */}
        <button
          onClick={handleFollow}
          className={`mt-5 px-14 py-3 rounded-2xl text-sm font-bold transition-all duration-200 ${
            followBounce ? "scale-110" : "scale-100"
          } ${
            following
              ? "bg-secondary text-foreground border border-border"
              : "bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-primary/50"
          }`}
        >
          {following
            ? lang === "es" ? "Siguiendo" : "Following"
            : lang === "es" ? "Seguir" : "Follow"}
        </button>
      </div>

      {/* ── Tabs ── */}
      <div className="mt-8 sticky top-0 z-20 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div ref={tabsRef} className="flex overflow-x-auto gap-1 px-4 py-3 no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                    : "bg-secondary/60 text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {tabLabels[lang]?.[tab.id] || tab.id}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Tab Content ── */}
      <div key={animKey} className="px-4 pb-24 pt-6 animate-fade-in">
        {activeTab === "posts" && <PostsTab posts={mockPosts} />}
        {activeTab === "albums" && <AlbumsTab lang={lang} />}
        {activeTab === "shop" && <ShopTab merch={mockMerch} lang={lang} />}
        {activeTab === "eventos" && <EventsTab events={mockEvents} lang={lang} />}
        {activeTab === "seguidores" && <FollowersTab followers={mockFollowers} lang={lang} />}
        {activeTab === "info" && <InfoTab profile={profile} lang={lang} />}
      </div>
    </div>
  );
};

/* ─── Posts Tab ─── */
const PostsTab = ({ posts }: { posts: MockPost[] }) => (
  <div className="flex flex-col gap-4 max-w-lg mx-auto">
    {posts.map((post) => (
      <div
        key={post.id}
        className="rounded-2xl bg-card/50 backdrop-blur-sm border border-border/40 overflow-hidden hover:border-primary/30 transition-colors group"
      >
        <div className="overflow-hidden">
          <img src={post.image} alt="" className="w-full h-56 object-cover group-hover:scale-[1.02] transition-transform duration-500" />
        </div>
        <div className="p-4">
          <p className="text-sm">{post.caption}</p>
          <div className="flex items-center justify-between mt-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Heart className="w-3.5 h-3.5 text-accent" />
              {post.likes}
            </span>
            <span>{post.timeAgo}</span>
          </div>
        </div>
      </div>
    ))}
  </div>
);

/* ─── Albums Tab (Locked) ─── */
const AlbumsTab = ({ lang }: { lang: string }) => (
  <div className="max-w-lg mx-auto">
    {/* Blurred preview grid */}
    <div className="relative rounded-2xl overflow-hidden">
      <div className="grid grid-cols-3 gap-1 blur-md opacity-50">
        {mockPosts.map((p) => (
          <img key={p.id} src={p.image} alt="" className="w-full aspect-square object-cover" />
        ))}
        {mockPosts.slice(0, 2).map((p) => (
          <img key={p.id + "-dup"} src={p.image} alt="" className="w-full aspect-square object-cover" />
        ))}
      </div>
      {/* Lock overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/60 backdrop-blur-sm">
        <div className="w-16 h-16 rounded-full bg-card/80 backdrop-blur-md flex items-center justify-center mb-4 border border-border/50">
          <Lock className="w-7 h-7 text-primary" />
        </div>
        <p className="text-sm text-muted-foreground mb-4 text-center max-w-xs px-4">
          {lang === "es"
            ? "Descarga la app para ver las fotos y álbumes exclusivos"
            : "Download the app to see exclusive photos and albums"}
        </p>
        <a
          href="https://www.toliv.com/download-app"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-2xl bg-primary text-primary-foreground text-sm font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow"
        >
          {lang === "es" ? "Descargar Toliv" : "Download Toliv"}
        </a>
      </div>
    </div>
  </div>
);

/* ─── Shop Tab ─── */
const ShopTab = ({ merch, lang }: { merch: MockMerch[]; lang: string }) => (
  <div className="grid grid-cols-2 gap-3 max-w-lg mx-auto">
    {merch.map((item) => (
      <div
        key={item.id}
        className="rounded-2xl bg-card/50 backdrop-blur-sm border border-border/40 overflow-hidden relative group"
      >
        <div className="overflow-hidden">
          <img src={item.image} alt={item.name} className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        {item.comingSoon && (
          <div className="absolute inset-0 bg-background/70 backdrop-blur-sm flex items-center justify-center">
            <span className="px-3 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-bold border border-primary/30">
              {lang === "es" ? "Próximamente" : "Coming Soon"}
            </span>
          </div>
        )}
        <div className="p-3">
          <p className="text-sm font-semibold truncate">{item.name}</p>
          <p className="text-xs text-primary font-bold mt-1">{item.price}</p>
        </div>
      </div>
    ))}
  </div>
);

/* ─── Events Tab ─── */
const EventsTab = ({ events, lang }: { events: MockEvent[]; lang: string }) => (
  <div className="flex flex-col gap-3 max-w-lg mx-auto">
    {events.map((event) => (
      <div
        key={event.id}
        className="flex gap-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/40 p-3 hover:border-primary/30 transition-colors group"
      >
        <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
          <img src={event.flyer} alt={event.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        </div>
        <div className="flex flex-col justify-center min-w-0">
          <span className="text-[10px] font-bold text-primary tracking-wider uppercase">{event.date}</span>
          <p className="text-sm font-semibold mt-0.5 truncate">{event.name}</p>
          <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1 truncate">
            <MapPin className="w-3 h-3 flex-shrink-0" />
            {event.venue}
          </p>
        </div>
      </div>
    ))}
  </div>
);

/* ─── Followers Tab ─── */
const FollowersTab = ({ followers, lang }: { followers: MockFollower[]; lang: string }) => {
  const [followStates, setFollowStates] = useState<Record<string, boolean>>(
    Object.fromEntries(followers.map((f) => [f.id, f.isFollowing]))
  );

  return (
    <div className="grid grid-cols-2 gap-3 max-w-lg mx-auto">
      {followers.map((f) => (
        <div
          key={f.id}
          className="flex items-center gap-3 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/40 p-3"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
            <img src={f.avatar} alt={f.name} className="w-full h-full object-cover" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold truncate">{f.name}</p>
            <button
              onClick={() =>
                setFollowStates((s) => ({ ...s, [f.id]: !s[f.id] }))
              }
              className={`mt-1 text-[10px] font-bold px-3 py-1 rounded-full transition-all ${
                followStates[f.id]
                  ? "bg-secondary text-muted-foreground"
                  : "bg-primary/20 text-primary border border-primary/30"
              }`}
            >
              {followStates[f.id]
                ? lang === "es" ? "Siguiendo" : "Following"
                : lang === "es" ? "Seguir" : "Follow"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

/* ─── Info Tab ─── */
const InfoTab = ({ profile, lang }: { profile: { bio?: string; series?: string; followers: number; posts: number; albums: number }; lang: string }) => (
  <div className="max-w-lg mx-auto space-y-6">
    {/* About */}
    {profile.bio && (
      <div className="rounded-2xl bg-card/50 backdrop-blur-sm border border-border/40 p-5">
        <h3 className="font-bold text-sm mb-2">{lang === "es" ? "Sobre" : "About"}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{profile.bio}</p>
      </div>
    )}

    {/* Genre */}
    {profile.series && (
      <div className="rounded-2xl bg-card/50 backdrop-blur-sm border border-border/40 p-5">
        <h3 className="font-bold text-sm mb-2">{lang === "es" ? "Género" : "Genre"}</h3>
        <span className="px-3 py-1.5 rounded-full bg-primary/15 text-primary text-xs font-semibold border border-primary/20">
          <Music className="w-3 h-3 inline mr-1" />
          {profile.series}
        </span>
      </div>
    )}

    {/* Social */}
    <div className="rounded-2xl bg-card/50 backdrop-blur-sm border border-border/40 p-5">
      <h3 className="font-bold text-sm mb-3">{lang === "es" ? "Redes Sociales" : "Social Links"}</h3>
      <div className="flex gap-3">
        {[Instagram, Twitter, Music].map((Icon, i) => (
          <div
            key={i}
            className="w-10 h-10 rounded-full bg-secondary/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors cursor-pointer"
          >
            <Icon className="w-4 h-4" />
          </div>
        ))}
      </div>
    </div>

    {/* Stats summary */}
    <div className="rounded-2xl bg-card/50 backdrop-blur-sm border border-border/40 p-5">
      <h3 className="font-bold text-sm mb-3">{lang === "es" ? "Estadísticas" : "Stats"}</h3>
      <div className="grid grid-cols-3 gap-3">
        {[
          { value: formatFollowers(profile.followers), label: lang === "es" ? "Seguidores" : "Followers" },
          { value: profile.posts, label: "Posts" },
          { value: profile.albums, label: "Albums" },
        ].map((s) => (
          <div key={s.label} className="text-center py-3 rounded-xl bg-secondary/40">
            <p className="font-bold text-primary">{s.value}</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ProfilePage;
