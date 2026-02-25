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
    <section className="py-12 overflow-hidden">
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        <h2 className="text-xl heading-uppercase mb-6 text-muted-foreground">Trending Artists</h2>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {artists.map((artist) => (
            <a
              key={artist.name}
              href="#"
              className="group flex-shrink-0 w-44 text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-3 rounded-full overflow-hidden ring-2 ring-border group-hover:ring-primary transition-all group-hover:glow-primary">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <p className="font-bold text-sm group-hover:text-primary transition-colors">{artist.name}</p>
              <p className="text-xs text-muted-foreground">{artist.series}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtists;
