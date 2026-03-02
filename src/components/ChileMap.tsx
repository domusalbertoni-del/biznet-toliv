import { MapPin } from "lucide-react";

interface City {
  id: string;
  name: string;
  mapX: number;
  mapY: number;
}

interface ChileMapProps {
  cities: City[];
  selectedCity: string | null;
  onCityClick: (id: string) => void;
}

const ChileMap = ({ cities, selectedCity, onCityClick }: ChileMapProps) => {
  return (
    <div className="relative w-full h-full min-h-[500px] md:min-h-[600px]">
      <svg
        viewBox="0 0 200 700"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Simplified Chile outline */}
        <path
          d="
            M 95 30 
            Q 105 30, 110 50
            Q 115 70, 108 100
            Q 102 130, 105 160
            Q 108 190, 100 220
            Q 92 250, 95 280
            Q 98 310, 90 340
            Q 82 370, 85 400
            Q 88 430, 80 460
            Q 72 490, 75 520
            Q 78 550, 70 580
            Q 62 610, 65 640
            Q 68 660, 60 680
            Q 55 690, 58 695
            Q 62 698, 55 700
            
            M 55 700
            Q 48 698, 50 690
            Q 52 680, 48 660
            Q 44 640, 50 610
            Q 56 580, 52 550
            Q 48 520, 55 490
            Q 62 460, 58 430
            Q 54 400, 62 370
            Q 70 340, 65 310
            Q 60 280, 68 250
            Q 76 220, 70 190
            Q 64 160, 72 130
            Q 80 100, 75 70
            Q 70 50, 80 30
            Q 88 20, 95 30
          "
          fill="none"
          stroke="hsl(var(--muted-foreground) / 0.3)"
          strokeWidth="1.5"
          className="drop-shadow-sm"
        />
        
        {/* Interior fill */}
        <path
          d="
            M 95 30 
            Q 105 30, 110 50
            Q 115 70, 108 100
            Q 102 130, 105 160
            Q 108 190, 100 220
            Q 92 250, 95 280
            Q 98 310, 90 340
            Q 82 370, 85 400
            Q 88 430, 80 460
            Q 72 490, 75 520
            Q 78 550, 70 580
            Q 62 610, 65 640
            Q 68 660, 60 680
            Q 55 690, 58 695
            Q 50 698, 50 690
            Q 52 680, 48 660
            Q 44 640, 50 610
            Q 56 580, 52 550
            Q 48 520, 55 490
            Q 62 460, 58 430
            Q 54 400, 62 370
            Q 70 340, 65 310
            Q 60 280, 68 250
            Q 76 220, 70 190
            Q 64 160, 72 130
            Q 80 100, 75 70
            Q 70 50, 80 30
            Q 88 20, 95 30 Z
          "
          fill="hsl(var(--muted) / 0.15)"
          stroke="none"
        />

        {/* City pins */}
        {cities.map((city) => {
          const isSelected = selectedCity === city.id;
          return (
            <g
              key={city.id}
              className="cursor-pointer"
              onClick={() => onCityClick(city.id)}
            >
              {/* Pulse ring for selected */}
              {isSelected && (
                <circle
                  cx={city.mapX}
                  cy={city.mapY}
                  r="12"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="1.5"
                  className="animate-ping"
                  opacity="0.5"
                />
              )}
              {/* Glow */}
              <circle
                cx={city.mapX}
                cy={city.mapY}
                r={isSelected ? 10 : 7}
                fill={isSelected ? "hsl(var(--primary) / 0.2)" : "hsl(var(--primary) / 0.1)"}
                className="transition-all duration-300"
              />
              {/* Dot */}
              <circle
                cx={city.mapX}
                cy={city.mapY}
                r={isSelected ? 5 : 3.5}
                fill="hsl(var(--primary))"
                className="transition-all duration-300 hover:r-5"
              />
              {/* Label */}
              <text
                x={city.mapX + 10}
                y={city.mapY + 4}
                fill="hsl(var(--foreground))"
                fontSize="8"
                fontWeight={isSelected ? "600" : "400"}
                className="pointer-events-none select-none"
              >
                {city.name}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default ChileMap;
