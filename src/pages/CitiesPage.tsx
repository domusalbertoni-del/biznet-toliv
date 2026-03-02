import { useState, useRef, useEffect } from "react";
import { MapPin, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileBottomNav from "@/components/MobileBottomNav";
import ChileMap from "@/components/ChileMap";
import { useLang } from "@/contexts/LangContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

import citySantiago from "@/assets/city-santiago.jpg";
import cityValparaiso from "@/assets/city-valparaiso.jpg";
import cityVina from "@/assets/city-vina.jpg";
import cityConcepcion from "@/assets/city-concepcion.jpg";
import cityLaSerena from "@/assets/city-laserena.jpg";
import cityAntofagasta from "@/assets/city-antofagasta.jpg";
import cityTemuco from "@/assets/city-temuco.jpg";
import cityPuntaArenas from "@/assets/city-puntaarenas.jpg";

const cities = [
  { id: "antofagasta", name: "Antofagasta", image: cityAntofagasta, eventCount: 8, mapX: 88, mapY: 120 },
  { id: "la-serena", name: "La Serena", image: cityLaSerena, eventCount: 11, mapX: 82, mapY: 180 },
  { id: "valparaiso", name: "Valparaíso", image: cityValparaiso, eventCount: 18, mapX: 75, mapY: 230 },
  { id: "vina-del-mar", name: "Viña del Mar", image: cityVina, eventCount: 15, mapX: 70, mapY: 225 },
  { id: "santiago", name: "Santiago", image: citySantiago, eventCount: 42, mapX: 85, mapY: 240 },
  { id: "concepcion", name: "Concepción", image: cityConcepcion, eventCount: 14, mapX: 78, mapY: 340 },
  { id: "temuco", name: "Temuco", image: cityTemuco, eventCount: 9, mapX: 72, mapY: 390 },
  { id: "punta-arenas", name: "Punta Arenas", image: cityPuntaArenas, eventCount: 5, mapX: 60, mapY: 620 },
];

const CitiesPage = () => {
  const { t } = useLang();
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  const handleCityClick = (cityId: string) => {
    setSelectedCity(cityId);
    const el = cardRefs.current[cityId];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-14 pb-16 md:pb-0">
        {/* Header */}
        <div
          ref={headerRef}
          className={`px-4 md:px-8 pt-10 pb-6 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm text-primary font-medium">{t.citiesPageTitle}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">{t.citiesPageTitle}</h1>
            <p className="text-muted-foreground mt-2 text-sm md:text-base max-w-lg">
              {t.citiesPageSubtitle}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Map */}
            <div className="w-full md:w-2/5 md:sticky md:top-20 md:self-start">
              <div className="bg-card/50 rounded-2xl border border-border/40 p-4">
                <ChileMap
                  cities={cities}
                  selectedCity={selectedCity}
                  onCityClick={handleCityClick}
                />
              </div>
            </div>

            {/* City Cards */}
            <div className="w-full md:w-3/5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cities.map((city) => {
                  const isSelected = selectedCity === city.id;
                  return (
                    <div
                      key={city.id}
                      ref={(el) => { cardRefs.current[city.id] = el; }}
                      onClick={() => setSelectedCity(city.id)}
                      className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 border-2 ${
                        isSelected
                          ? "border-primary shadow-lg shadow-primary/20 scale-[1.02]"
                          : "border-transparent hover:border-primary/30"
                      }`}
                    >
                      <div className="aspect-[4/3] relative">
                        <img
                          src={city.image}
                          alt={city.name}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-lg font-bold text-white">{city.name}</h3>
                          <div className="flex items-center gap-1.5 mt-1">
                            <Calendar className="w-3.5 h-3.5 text-primary" />
                            <span className="text-sm text-white/80">
                              {city.eventCount} {t.eventsThisWeek}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="h-16" />
      </main>
      <MobileBottomNav />
    </div>
  );
};

export default CitiesPage;
