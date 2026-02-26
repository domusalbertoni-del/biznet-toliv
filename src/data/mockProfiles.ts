import artist1 from "@/assets/artist-1.webp";
import artist2 from "@/assets/artist-2.webp";
import artist3 from "@/assets/artist-3.webp";
import artist4 from "@/assets/artist-4.webp";
import event1 from "@/assets/event-1.webp";
import event2 from "@/assets/event-2.webp";
import event3 from "@/assets/event-3.webp";

export interface ProfileData {
  id: string;
  type: "artist" | "event";
  name: string;
  avatar: string;
  cover: string;
  followers: number;
  posts: number;
  albums: number;
  series?: string;
  bio?: string;
}

export const artistProfiles: ProfileData[] = [
  { id: "dj-pulse", type: "artist", name: "DJ Pulse", avatar: artist1, cover: event1, followers: 2340, posts: 18, albums: 3, series: "Nü Androids", bio: "Electronic music producer & DJ based in Santiago. Resident at Nü Androids." },
  { id: "neon-wave", type: "artist", name: "Neon Wave", avatar: artist2, cover: event2, followers: 5120, posts: 42, albums: 5, series: "Brunch Electronik", bio: "Deep house & melodic techno. International touring artist." },
  { id: "dark-matter", type: "artist", name: "Dark Matter", avatar: artist3, cover: event3, followers: 1890, posts: 9, albums: 2, series: "Sunday Love", bio: "Underground techno. Dark, hypnotic, relentless." },
  { id: "voltage", type: "artist", name: "Voltage", avatar: artist4, cover: event1, followers: 3760, posts: 27, albums: 4, series: "The Spotlight", bio: "High-energy sets blending house, techno, and breaks." },
  { id: "luna-roja", type: "artist", name: "Luna Roja", avatar: artist2, cover: event3, followers: 980, posts: 5, albums: 1, series: "Techno Ritual", bio: "Rising star in the Chilean techno scene." },
  { id: "nico-bass", type: "artist", name: "Nico Bass", avatar: artist3, cover: event2, followers: 4200, posts: 31, albums: 6, series: "Deep Santiago", bio: "Bass music innovator. Drum & bass meets Latin rhythms." },
  { id: "elektra", type: "artist", name: "Elektra", avatar: artist1, cover: event1, followers: 7500, posts: 56, albums: 8, series: "Warehouse Sessions", bio: "Queen of the warehouse. Industrial techno pioneer." },
  { id: "sonic-bloom", type: "artist", name: "Sonic Bloom", avatar: artist4, cover: event3, followers: 2100, posts: 14, albums: 3, series: "Open Air Chile", bio: "Organic house & downtempo for open-air gatherings." },
  { id: "mati-waves", type: "artist", name: "Mati Waves", avatar: artist2, cover: event2, followers: 1560, posts: 8, albums: 2, series: "Club Nocturno", bio: "Late-night grooves. Minimal and deep." },
  { id: "kala", type: "artist", name: "Kala", avatar: artist1, cover: event1, followers: 3300, posts: 22, albums: 4, series: "Cumbia Digital", bio: "Blending cumbia with electronic production." },
];

export const eventProfiles: ProfileData[] = [
  { id: "neon-nights", type: "event", name: "Neon Nights", avatar: event1, cover: event1, followers: 8900, posts: 45, albums: 12, bio: "The biggest electronic music festival in Santiago. Monthly events." },
  { id: "deep-sessions", type: "event", name: "Deep Sessions", avatar: event2, cover: event2, followers: 3200, posts: 22, albums: 6, bio: "Intimate deep house & minimal techno nights at The Underground." },
  { id: "sunset-sounds", type: "event", name: "Sunset Sounds", avatar: event3, cover: event3, followers: 5600, posts: 38, albums: 9, bio: "Open-air electronic music events at Riverside Park." },
  { id: "bass-culture", type: "event", name: "Bass Culture", avatar: event1, cover: event3, followers: 2100, posts: 15, albums: 4, bio: "Drum & bass and jungle nights at Club Subterráneo." },
  { id: "ritmo-urbano", type: "event", name: "Ritmo Urbano", avatar: event2, cover: event1, followers: 12400, posts: 67, albums: 18, bio: "Latin urban music festival. Reggaeton, trap, and more." },
  { id: "techno-ritual", type: "event", name: "Techno Ritual", avatar: event3, cover: event2, followers: 4500, posts: 28, albums: 7, bio: "Industrial techno events in abandoned warehouses." },
  { id: "miercoles-po", type: "event", name: "Miércoles Po", avatar: event1, cover: event1, followers: 1, posts: 0, albums: 0, bio: "New weekly event series. Stay tuned!" },
  { id: "fiesta-neon", type: "event", name: "Fiesta Neón", avatar: event2, cover: event3, followers: 6700, posts: 41, albums: 10, bio: "EDM and pop nights at Arena Santiago." },
  { id: "chill-groove", type: "event", name: "Chill & Groove", avatar: event3, cover: event2, followers: 1800, posts: 11, albums: 3, bio: "Lo-fi and chill vibes at Rooftop Lounge." },
  { id: "warehouse-sessions", type: "event", name: "Warehouse Sessions", avatar: event1, cover: event1, followers: 9200, posts: 53, albums: 14, bio: "Underground warehouse parties featuring international DJs." },
];

export const getAllProfiles = (): ProfileData[] => [...artistProfiles, ...eventProfiles];

export const getProfileById = (id: string): ProfileData | undefined =>
  getAllProfiles().find((p) => p.id === id);

export const formatFollowers = (n: number): string => {
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, "")}K`;
  return String(n);
};
