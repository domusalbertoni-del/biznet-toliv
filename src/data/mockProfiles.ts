import lewisSomes from "@/assets/lewis-somes.jpeg";
import marcianeke from "@/assets/marcianeke.jpeg";
import djDomus from "@/assets/dj-domus.jpg";
import floyyMenor from "@/assets/floyy-menor.jpg";
import loyaltty from "@/assets/loyaltty.jpg";
import cuartero from "@/assets/cuartero.webp";
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
  { id: "lewis-somes", type: "artist", name: "Lewis Somes", avatar: lewisSomes, cover: event1, followers: 2340, posts: 18, albums: 3, series: "Música Urbana", bio: "Artista urbano emergente en la escena chilena." },
  { id: "marcianeke", type: "artist", name: "Marcianeke", avatar: marcianeke, cover: event2, followers: 15120, posts: 42, albums: 5, series: "Música Urbana", bio: "Ícono del reggaetón chileno. Éxitos internacionales." },
  { id: "dj-domus", type: "artist", name: "DJ Domus", avatar: djDomus, cover: event3, followers: 1890, posts: 9, albums: 2, series: "Música Electrónica", bio: "DJ y productor de música electrónica." },
  { id: "floyy-menor", type: "artist", name: "Floyy Menor", avatar: floyyMenor, cover: event1, followers: 8760, posts: 27, albums: 4, series: "Música Urbana", bio: "Artista urbano con flow único." },
  { id: "loyaltty", type: "artist", name: "Loyaltty", avatar: loyaltty, cover: event3, followers: 6980, posts: 15, albums: 3, series: "Música Urbana", bio: "Cantante y compositora urbana." },
  { id: "cuartero", type: "artist", name: "Cuartero", avatar: cuartero, cover: event2, followers: 12200, posts: 31, albums: 6, series: "Música Electrónica", bio: "DJ y productor español de tech house y techno." },
  { id: "elektra", type: "artist", name: "Elektra", avatar: lewisSomes, cover: event1, followers: 7500, posts: 56, albums: 8, series: "Warehouse Sessions", bio: "Queen of the warehouse. Industrial techno pioneer." },
  { id: "sonic-bloom", type: "artist", name: "Sonic Bloom", avatar: marcianeke, cover: event3, followers: 2100, posts: 14, albums: 3, series: "Open Air Chile", bio: "Organic house & downtempo for open-air gatherings." },
  { id: "mati-waves", type: "artist", name: "Mati Waves", avatar: djDomus, cover: event2, followers: 1560, posts: 8, albums: 2, series: "Club Nocturno", bio: "Late-night grooves. Minimal and deep." },
  { id: "kala", type: "artist", name: "Kala", avatar: floyyMenor, cover: event1, followers: 3300, posts: 22, albums: 4, series: "Cumbia Digital", bio: "Blending cumbia with electronic production." },
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
