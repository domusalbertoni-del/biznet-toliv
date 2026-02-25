import artist1 from "@/assets/artist-1.webp";
import artist2 from "@/assets/artist-2.webp";
import artist3 from "@/assets/artist-3.webp";
import artist4 from "@/assets/artist-4.webp";

const artists = [
  { name: "DJ Pulse", series: "Nü Androids", image: artist1 },
  { name: "Neon Wave", series: "Brunch Electronik", image: artist2 },
  { name: "Dark Matter", series: "Sunday Love", image: artist3 },
  { name: "Voltage", series: "The Spotlight", image: artist4 },
];

const FeaturedArtists = () => {
  return (
    <section className="py-16 border-t border-border overflow-hidden">
      <div className="container">
        <div className="flex gap-6 overflow-x-auto pb-4 -mx-2 px-2 scrollbar-hide">
          {artists.map((artist) => (
            <a
              key={artist.name}
              href="#"
              className="group flex-shrink-0 w-64 flex items-center gap-4 p-4 rounded-xl bg-card hover:bg-accent transition-colors"
            >
              <img
                src={artist.image}
                alt={artist.name}
                className="w-16 h-16 rounded-full object-cover ring-2 ring-border group-hover:ring-primary transition-all"
              />
              <div>
                <p className="font-bold text-sm group-hover:text-primary transition-colors">{artist.name}</p>
                <p className="text-xs text-muted-foreground">{artist.series}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtists;
