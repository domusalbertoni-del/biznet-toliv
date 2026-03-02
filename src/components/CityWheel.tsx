import { useState, useRef, useEffect, useCallback } from "react";
// CSS 3D Transform carousel - no Three.js needed
import { ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/contexts/LangContext";

interface City {
  id: string;
  name: string;
  image: string;
  eventCount: number;
}

interface CityWheelProps {
  cities: City[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}

const CityWheel = ({ cities, selectedIndex, onSelect }: CityWheelProps) => {
  const { t } = useLang();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);

  const count = cities.length;
  const angleStep = 360 / count;

  // Responsive radius & card size
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const radius = isMobile ? 180 : 320;
  const cardW = isMobile ? 160 : 240;
  const cardH = isMobile ? 220 : 320;

  const [internalIndex, setInternalIndex] = useState(selectedIndex);
  
  useEffect(() => {
    setInternalIndex(selectedIndex);
  }, [selectedIndex]);

  useEffect(() => {
    if (!autoRotate || isDragging) return;
    const timer = setInterval(() => {
      const next = (internalIndex + 1) % count;
      setInternalIndex(next);
      onSelect(next);
    }, 4000);
    return () => clearInterval(timer);
  }, [autoRotate, isDragging, internalIndex, count, onSelect]);

  const goTo = useCallback((index: number) => {
    const normalized = ((index % count) + count) % count;
    setInternalIndex(normalized);
    onSelect(normalized);
    setAutoRotate(false);
    // Resume auto-rotate after 8s of inactivity
    setTimeout(() => setAutoRotate(true), 8000);
  }, [count, onSelect]);

  const handlePrev = () => goTo(internalIndex - 1);
  const handleNext = () => goTo(internalIndex + 1);

  // Touch/mouse drag
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setDragStartX(clientX);
    setDragOffset(0);
    setAutoRotate(false);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    setDragOffset(clientX - dragStartX);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (Math.abs(dragOffset) > 50) {
      if (dragOffset > 0) handlePrev();
      else handleNext();
    }
    setDragOffset(0);
    setTimeout(() => setAutoRotate(true), 8000);
  };

  const currentRotation = -(internalIndex * angleStep) + (isDragging ? dragOffset * 0.15 : 0);
  const selected = cities[internalIndex];

  return (
    <div className="relative w-full select-none">
      {/* 3D Wheel */}
      <div
        ref={containerRef}
        className="relative w-full h-[340px] md:h-[500px] overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseDown={(e) => handleDragStart(e.clientX)}
        onMouseMove={(e) => handleDragMove(e.clientX)}
        onMouseUp={handleDragEnd}
        onMouseLeave={() => isDragging && handleDragEnd()}
        onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
        onTouchEnd={handleDragEnd}
      >
        <div
          className="absolute left-1/2 top-1/2 w-0 h-0"
          style={{
            perspective: "1000px",
            perspectiveOrigin: "center",
          }}
        >
          <div
            className="relative preserve-3d transition-transform duration-700 ease-out"
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateY(${currentRotation}deg)`,
              transition: isDragging ? "none" : "transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            {cities.map((city, i) => {
              const angle = i * angleStep;
              const isActive = i === internalIndex;
              return (
                <div
                  key={city.id}
                  className="absolute cursor-pointer"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                    left: `${-cardW / 2}px`,
                    top: `${-cardH / 2}px`,
                  }}
                  onClick={() => goTo(i)}
                >
                  <div
                    className={`rounded-2xl overflow-hidden transition-all duration-500 ${
                      isActive
                        ? "scale-110 shadow-2xl shadow-primary/40 ring-2 ring-primary"
                        : "scale-90 opacity-60 hover:opacity-80"
                    }`}
                    style={{ width: `${cardW}px`, height: `${cardH}px` }}
                  >
                    <div className="relative w-full h-full">
                      <img
                        src={city.image}
                        alt={city.name}
                        className="w-full h-full object-cover"
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-lg font-bold text-white drop-shadow-lg">
                          {city.name}
                        </h3>
                        <div className="flex items-center gap-1.5 mt-1">
                          <Calendar className="w-3.5 h-3.5 text-primary" />
                          <span className="text-sm text-white/80">
                            {city.eventCount} {t.eventsThisWeek}
                          </span>
                        </div>
                      </div>
                      {isActive && (
                        <div className="absolute inset-0 rounded-2xl ring-2 ring-primary/50 animate-pulse pointer-events-none" />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Ambient glow behind wheel */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="flex items-center justify-center gap-6 mt-4">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrev}
          className="rounded-full border-border/60 bg-card/80 backdrop-blur-sm hover:bg-primary/20 hover:border-primary/40 transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        {/* City indicator dots */}
        <div className="flex items-center gap-2">
          {cities.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === internalIndex
                  ? "w-6 h-2 bg-primary"
                  : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          className="rounded-full border-border/60 bg-card/80 backdrop-blur-sm hover:bg-primary/20 hover:border-primary/40 transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Selected city info panel */}
      <div className="mt-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 border border-border/40 backdrop-blur-sm">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-lg font-bold text-foreground">{selected?.name}</span>
          <span className="text-muted-foreground mx-1">·</span>
          <span className="text-sm text-muted-foreground">
            {selected?.eventCount} {t.eventsThisWeek}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CityWheel;
