import lewisSomes from "@/assets/lewis-somes.jpeg";
import marcianeke from "@/assets/marcianeke.jpeg";
import djDomus from "@/assets/dj-domus.jpg";
import floyyMenor from "@/assets/floyy-menor.jpg";
import loyaltty from "@/assets/loyaltty.jpg";
import cuartero from "@/assets/cuartero.webp";
import eliasDeepman from "@/assets/elias-deepman.jpg";
import crisMj from "@/assets/cris-mj.jpeg";
import pabloChillE from "@/assets/pablochill-e.jpg";
import katteyes from "@/assets/katteyes.jpg";
import event1 from "@/assets/event-1.webp";
import event2 from "@/assets/event-2.webp";
import event3 from "@/assets/event-3.webp";
import genesisFlyer from "@/assets/genesis-flyer.jpg";
import mamisongaFlyer from "@/assets/mamisonga-flyer.jpg";
import miercolesPo from "@/assets/miercoles-po-flyer.jpg";
import club1Flyer from "@/assets/club-1-flyer.jpg";

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
  country?: string;
  firstEventDate?: string;
  verified?: boolean;
}

export interface MockPost {
  id: string;
  image: string;
  caption: string;
  likes: number;
  timeAgo: string;
}

export interface MockMerch {
  id: string;
  name: string;
  price: string;
  image: string;
  comingSoon: boolean;
}

export interface MockEvent {
  id: string;
  name: string;
  date: string;
  venue: string;
  flyer: string;
}

export interface MockFollower {
  id: string;
  name: string;
  avatar: string;
  isFollowing: boolean;
}

export const mockPosts: MockPost[] = [
  { id: "p1", image: event1, caption: "Increíble noche 🔥 Gracias a todos los que vinieron", likes: 342, timeAgo: "2h" },
  { id: "p2", image: event2, caption: "Nuevo track coming soon 🎵 Stay tuned", likes: 891, timeAgo: "1d" },
  { id: "p3", image: event3, caption: "Backstage vibes ✨", likes: 567, timeAgo: "3d" },
  { id: "p4", image: genesisFlyer, caption: "Este viernes nos vemos 🎉", likes: 1203, timeAgo: "5d" },
];

export const mockMerch: MockMerch[] = [
  { id: "m1", name: "Hoodie Oficial", price: "$35.000", image: event1, comingSoon: false },
  { id: "m2", name: "Polera Tour 2025", price: "$22.000", image: event2, comingSoon: false },
  { id: "m3", name: "Gorra Edición Limitada", price: "$18.000", image: event3, comingSoon: true },
  { id: "m4", name: "Poster Firmado", price: "$12.000", image: genesisFlyer, comingSoon: true },
];

export const mockEvents: MockEvent[] = [
  { id: "e1", name: "Noche Eléctrica Vol. 3", date: "15 MAR", venue: "Club Subterráneo, Santiago", flyer: genesisFlyer },
  { id: "e2", name: "Festival Urbano 2025", date: "22 MAR", venue: "Parque O'Higgins, Santiago", flyer: mamisongaFlyer },
  { id: "e3", name: "Deep Sessions After", date: "29 MAR", venue: "The Underground, Valparaíso", flyer: miercolesPo },
  { id: "e4", name: "Warehouse Rave", date: "05 ABR", venue: "Bodega Central, Santiago", flyer: club1Flyer },
];

export const mockFollowers: MockFollower[] = [
  { id: "f1", name: "Camila Rojas", avatar: loyaltty, isFollowing: true },
  { id: "f2", name: "Diego Muñoz", avatar: djDomus, isFollowing: false },
  { id: "f3", name: "Valentina Silva", avatar: katteyes, isFollowing: true },
  { id: "f4", name: "Matías López", avatar: eliasDeepman, isFollowing: false },
  { id: "f5", name: "Sofía Contreras", avatar: loyaltty, isFollowing: true },
  { id: "f6", name: "Tomás Herrera", avatar: cuartero, isFollowing: false },
  { id: "f7", name: "Javiera Paz", avatar: katteyes, isFollowing: true },
  { id: "f8", name: "Nicolás Vega", avatar: floyyMenor, isFollowing: false },
];

export const artistProfiles: ProfileData[] = [
  { id: "lewis-somes", type: "artist", name: "Lewis Somes", avatar: lewisSomes, cover: event1, followers: 2340, posts: 18, albums: 3, series: "Música Urbana", bio: "Artista urbano emergente en la escena chilena.", country: "Chile", firstEventDate: "Marzo 2024" },
  { id: "marcianeke", type: "artist", name: "Marcianeke", avatar: marcianeke, cover: event2, followers: 15120, posts: 42, albums: 5, series: "Música Urbana", bio: "Ícono del reggaetón chileno. Éxitos internacionales.", country: "Chile", firstEventDate: "Enero 2023", verified: true },
  { id: "dj-domus", type: "artist", name: "DJ Domus", avatar: djDomus, cover: event3, followers: 1890, posts: 9, albums: 2, series: "Música Electrónica", bio: "DJ y productor de música electrónica.", country: "Chile", firstEventDate: "Junio 2024" },
  { id: "floyy-menor", type: "artist", name: "Floyy Menor", avatar: floyyMenor, cover: event1, followers: 8760, posts: 27, albums: 4, series: "Música Urbana", bio: "Artista urbano con flow único.", country: "Chile", firstEventDate: "Septiembre 2023", verified: true },
  { id: "loyaltty", type: "artist", name: "Loyaltty", avatar: loyaltty, cover: event3, followers: 6980, posts: 15, albums: 3, series: "Música Urbana", bio: "Cantante y compositora urbana.", country: "Chile", firstEventDate: "Abril 2024" },
  { id: "cuartero", type: "artist", name: "Cuartero", avatar: cuartero, cover: event2, followers: 12200, posts: 31, albums: 6, series: "Música Electrónica", bio: "DJ y productor español de tech house y techno.", country: "España", firstEventDate: "Noviembre 2023", verified: true },
  { id: "elias-deepman", type: "artist", name: "Elias Deepman", avatar: eliasDeepman, cover: event1, followers: 7500, posts: 56, albums: 8, series: "Música Electrónica", bio: "DJ y productor de deep house y techno melódico.", country: "Chile", firstEventDate: "Febrero 2023" },
  { id: "cris-mj", type: "artist", name: "Cris MJ", avatar: crisMj, cover: event3, followers: 21000, posts: 34, albums: 5, series: "Música Urbana", bio: "Estrella del reggaetón chileno con hits virales.", country: "Chile", firstEventDate: "Agosto 2022", verified: true },
  { id: "pablochill-e", type: "artist", name: "Pablo Chill-E", avatar: pabloChillE, cover: event2, followers: 18500, posts: 28, albums: 6, series: "Música Urbana", bio: "Pionero del trap chileno. Estilo único.", country: "Chile", firstEventDate: "Mayo 2022", verified: true },
  { id: "katteyes", type: "artist", name: "Katteyes", avatar: katteyes, cover: event1, followers: 3300, posts: 22, albums: 4, series: "Música Urbana", bio: "Cantante urbana emergente con voz potente.", country: "Chile", firstEventDate: "Julio 2024" },
];

export const eventProfiles: ProfileData[] = [
  { id: "neon-nights", type: "event", name: "Neon Nights", avatar: event1, cover: event1, followers: 8900, posts: 45, albums: 12, bio: "The biggest electronic music festival in Santiago. Monthly events.", country: "Chile", firstEventDate: "Marzo 2022" },
  { id: "deep-sessions", type: "event", name: "Deep Sessions", avatar: event2, cover: event2, followers: 3200, posts: 22, albums: 6, bio: "Intimate deep house & minimal techno nights at The Underground.", country: "Chile", firstEventDate: "Julio 2023" },
  { id: "sunset-sounds", type: "event", name: "Sunset Sounds", avatar: event3, cover: event3, followers: 5600, posts: 38, albums: 9, bio: "Open-air electronic music events at Riverside Park.", country: "Chile", firstEventDate: "Enero 2023" },
  { id: "bass-culture", type: "event", name: "Bass Culture", avatar: event1, cover: event3, followers: 2100, posts: 15, albums: 4, bio: "Drum & bass and jungle nights at Club Subterráneo.", country: "Chile", firstEventDate: "Octubre 2023" },
  { id: "ritmo-urbano", type: "event", name: "Ritmo Urbano", avatar: event2, cover: event1, followers: 12400, posts: 67, albums: 18, bio: "Latin urban music festival. Reggaeton, trap, and more.", country: "Chile", firstEventDate: "Febrero 2022" },
  { id: "techno-ritual", type: "event", name: "Techno Ritual", avatar: event3, cover: event2, followers: 4500, posts: 28, albums: 7, bio: "Industrial techno events in abandoned warehouses.", country: "Chile", firstEventDate: "Agosto 2023" },
  { id: "miercoles-po", type: "event", name: "Miércoles Po", avatar: event1, cover: event1, followers: 1, posts: 0, albums: 0, bio: "New weekly event series. Stay tuned!", country: "Chile", firstEventDate: "Diciembre 2024" },
  { id: "fiesta-neon", type: "event", name: "Fiesta Neón", avatar: event2, cover: event3, followers: 6700, posts: 41, albums: 10, bio: "EDM and pop nights at Arena Santiago.", country: "Chile", firstEventDate: "Abril 2022" },
  { id: "chill-groove", type: "event", name: "Chill & Groove", avatar: event3, cover: event2, followers: 1800, posts: 11, albums: 3, bio: "Lo-fi and chill vibes at Rooftop Lounge.", country: "Chile", firstEventDate: "Junio 2024" },
  { id: "warehouse-sessions", type: "event", name: "Warehouse Sessions", avatar: event1, cover: event1, followers: 9200, posts: 53, albums: 14, bio: "Underground warehouse parties featuring international DJs.", country: "Chile", firstEventDate: "Septiembre 2022" },
];

export const getAllProfiles = (): ProfileData[] => [...artistProfiles, ...eventProfiles];

export const getProfileById = (id: string): ProfileData | undefined =>
  getAllProfiles().find((p) => p.id === id);

export const formatFollowers = (n: number): string => {
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, "")}K`;
  return String(n);
};
