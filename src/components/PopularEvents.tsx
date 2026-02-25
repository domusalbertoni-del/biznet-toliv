import { useState } from "react";
import { Clock, MapPin, ChevronDown } from "lucide-react";
import event1 from "@/assets/event-1.webp";
import event2 from "@/assets/event-2.webp";
import event3 from "@/assets/event-3.webp";
import { Link } from "react-router-dom";
import { useLang } from "@/contexts/LangContext";

const locations = [
  { flag: "🇨🇱", name: "Santiago" },
  { flag: "🇨🇱", name: "Valparaíso" },
  { flag: "🇺🇸", name: "New York" },
  { flag: "🇺🇸", name: "Los Angeles" },
  { flag: "🇬🇧", name: "London" },
  { flag: "🇫🇷", name: "Paris" },
];

const events = [
  { id: 1, title: "Neon Nights Festival", price: "$25.00", venue: "Warehouse District", time: "10:00 PM", day: "15", month: "MAR", tags: ["Techno", "House"], image: event1, isToday: false },
  { id: 2, title: "Deep Sessions Vol. 12", price: "$18.50", venue: "The Underground", time: "11:00 PM", day: "21", month: "MAR", tags: ["Deep House", "Minimal"], image: event2, isToday: true },
  { id: 3, title: "Sunset Sounds Open Air", price: "$35.00", venue: "Riverside Park", time: "4:00 PM", day: "29", month: "MAR", tags: ["Electronic", "Dance"], image: event3, isToday: false },
];

const PopularEvents = () => {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { t } = useLang();

  return (
    <section className="py-16">
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl heading-uppercase flex items-center gap-3 flex-wrap">
            {t.popularEventsIn}
            <div className="relative">
              <button onClick={() => setDropdownOpen(!dropdownOpen)} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-sm font-medium normal-case tracking-normal text-primary hover:bg-secondary/80 transition-colors">
                {selectedLocation.flag} {selectedLocation.name}
                <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {dropdownOpen && (
                <div className="absolute top-full mt-2 left-0 min-w-[180px] bg-card border border-border rounded-xl shadow-xl z-50 py-1 overflow-hidden">
                  {locations.map((loc) => (
                    <button key={loc.name} onClick={() => { setSelectedLocation(loc); setDropdownOpen(false); }} className={`w-full text-left px-4 py-2.5 text-sm hover:bg-secondary transition-colors flex items-center gap-2 ${selectedLocation.name === loc.name ? 'text-primary font-semibold' : 'text-foreground'}`}>
                      {loc.flag} {loc.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {events.map((event) => (
            <a key={event.id} href="#" className="group block rounded-2xl overflow-hidden bg-card hover:glow-primary transition-all duration-300">
              <div className="relative aspect-[3/2] overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-3 right-3 bg-accent text-accent-foreground rounded-xl px-3 py-1.5 text-center min-w-[48px]">
                  <span className="block text-lg font-bold leading-tight">{event.day}</span>
                  <span className="block text-[10px] font-semibold uppercase tracking-wider">{event.month}</span>
                </div>
                {event.isToday && (
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-accent text-accent-foreground rounded-full px-3 py-1 text-xs font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-foreground animate-pulse" />
                    {t.today}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-base mb-2 group-hover:text-primary transition-colors">{event.title}</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="inline-flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{event.time}</span>
                  <span className="inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{event.venue}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {event.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-full bg-secondary text-[11px] text-muted-foreground font-medium">{tag}</span>
                    ))}
                  </div>
                  <span className="text-primary font-bold text-sm">{event.price}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center gap-3 mt-10">
          <a href="#" className="inline-flex items-center gap-2 px-7 py-3 rounded-2xl border border-border text-sm font-medium hover:bg-secondary hover:border-primary/30 transition-all">
            {t.seeMoreEvents}
          </a>
          <Link to="/cities" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            {t.viewAllCities}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularEvents;
