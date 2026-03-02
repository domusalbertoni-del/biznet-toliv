import { useState } from "react";
import { Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileBottomNav from "@/components/MobileBottomNav";
import CityWheel from "@/components/CityWheel";
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
  { id: "santiago", name: "Santiago", image: citySantiago, eventCount: 42 },
  { id: "valparaiso", name: "Valparaíso", image: cityValparaiso, eventCount: 18 },
  { id: "vina-del-mar", name: "Viña del Mar", image: cityVina, eventCount: 15 },
  { id: "concepcion", name: "Concepción", image: cityConcepcion, eventCount: 14 },
  { id: "la-serena", name: "La Serena", image: cityLaSerena, eventCount: 11 },
  { id: "temuco", name: "Temuco", image: cityTemuco, eventCount: 9 },
  { id: "antofagasta", name: "Antofagasta", image: cityAntofagasta, eventCount: 8 },
  { id: "punta-arenas", name: "Punta Arenas", image: cityPuntaArenas, eventCount: 5 },
];

const CitiesPage = () => {
  const { t } = useLang();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />
      <main className="pt-14 pb-16 md:pb-0">
        {/* Header */}
        <div
          ref={headerRef}
          className={`px-4 md:px-8 pt-12 pb-4 text-center transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs text-primary font-medium">{t.citiesPageTitle}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold">
            <span className="text-gradient">{t.citiesPageTitle}</span>
          </h1>
          <p className="text-muted-foreground mt-3 text-sm md:text-base max-w-md mx-auto">
            {t.citiesPageSubtitle}
          </p>
        </div>

        {/* 3D City Wheel */}
        <div className="max-w-5xl mx-auto px-4 mt-4 md:mt-8">
          <CityWheel
            cities={cities}
            selectedIndex={selectedIndex}
            onSelect={setSelectedIndex}
          />
        </div>

        <div className="h-16" />
      </main>
      <MobileBottomNav />
    </div>
  );
};

export default CitiesPage;
