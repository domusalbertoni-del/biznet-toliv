import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Users, FileText, Image, Calendar, Info } from "lucide-react";
import { getProfileById, formatFollowers } from "@/data/mockProfiles";
import { useState } from "react";
import { useLang } from "@/contexts/LangContext";

const tabs = [
  { id: "posts", icon: FileText },
  { id: "albums", icon: Image },
  { id: "eventos", icon: Calendar },
  { id: "seguidores", icon: Users },
  { id: "info", icon: Info },
];

const tabLabels: Record<string, Record<string, string>> = {
  en: { posts: "Posts", albums: "Albums", eventos: "Events", seguidores: "Followers", info: "Info" },
  es: { posts: "Posts", albums: "Albums", eventos: "Eventos", seguidores: "Seguidores", info: "Info" },
};

const ProfilePage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { lang } = useLang();
  const [activeTab, setActiveTab] = useState("posts");
  const [following, setFollowing] = useState(false);

  const profile = getProfileById(id || "");

  if (!profile) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Profile not found</p>
      </div>
    );
  }

  const emptyMessages: Record<string, Record<string, string>> = {
    en: {
      posts: "This page has no posts yet",
      albums: "No albums yet",
      eventos: "No events yet",
      seguidores: "No followers yet",
      info: "",
    },
    es: {
      posts: "Esta página aún no tiene publicaciones",
      albums: "Aún no hay álbumes",
      eventos: "Aún no hay eventos",
      seguidores: "Aún no hay seguidores",
      info: "",
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Cover */}
      <div className="relative h-56 md:h-72 overflow-hidden">
        <img src={profile.cover} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-background/80" />
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 z-10 w-10 h-10 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center hover:bg-background/80 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
      </div>

      {/* Avatar */}
      <div className="flex flex-col items-center -mt-16 relative z-10">
        <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-background">
          <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" />
        </div>
        <h1 className="text-xl font-bold mt-3">{profile.name}</h1>

        {/* Stats */}
        <div className="flex gap-8 mt-3">
          <div className="text-center">
            <p className="font-bold">{formatFollowers(profile.followers)}</p>
            <p className="text-xs text-muted-foreground">{lang === "es" ? "Seguidores" : "Followers"}</p>
          </div>
          <div className="text-center">
            <p className="font-bold">{profile.posts}</p>
            <p className="text-xs text-muted-foreground">Posts</p>
          </div>
          <div className="text-center">
            <p className="font-bold">{profile.albums}</p>
            <p className="text-xs text-muted-foreground">Albums</p>
          </div>
        </div>

        {/* Follow button */}
        <button
          onClick={() => setFollowing(!following)}
          className={`mt-4 px-16 py-3 rounded-xl text-sm font-semibold transition-all ${
            following
              ? "bg-secondary text-foreground"
              : "bg-primary text-primary-foreground hover:opacity-90"
          }`}
        >
          {following
            ? lang === "es" ? "Siguiendo" : "Following"
            : lang === "es" ? "Seguir" : "Follow"}
        </button>
      </div>

      {/* Tabs */}
      <div className="mt-6 border-b border-border">
        <div className="flex">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex flex-col items-center gap-1 py-3 text-xs font-medium transition-colors relative ${
                  activeTab === tab.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{tabLabels[lang]?.[tab.id] || tab.id}</span>
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab content */}
      <div className="px-6 py-12 text-center">
        {activeTab === "info" && profile.bio ? (
          <div className="max-w-md mx-auto text-left">
            <h3 className="font-semibold mb-2">{lang === "es" ? "Sobre" : "About"}</h3>
            <p className="text-muted-foreground text-sm">{profile.bio}</p>
            {profile.series && (
              <p className="text-sm mt-3">
                <span className="text-muted-foreground">{lang === "es" ? "Serie: " : "Series: "}</span>
                <span className="text-primary font-medium">{profile.series}</span>
              </p>
            )}
          </div>
        ) : (
          <p className="text-muted-foreground text-sm">
            {emptyMessages[lang]?.[activeTab] || "No content yet"}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
