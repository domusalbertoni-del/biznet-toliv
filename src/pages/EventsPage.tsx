import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, MapPin, Users, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import BiznetNavbar from "@/components/biznet/BiznetNavbar";
import BiznetFooter from "@/components/biznet/BiznetFooter";
import { events } from "@/data/biznetData";

const categories = ["All", "Conferences", "Workshops", "Meetups", "Hackathons", "Networking"];
const cities = ["All Cities", "San Francisco", "London", "New York", "Paris", "Berlin", "Stockholm", "Remote"];
const priceFilters = ["Any Price", "Free", "Paid"];

const EventsPage = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [selectedPrice, setSelectedPrice] = useState("Any Price");
  const [visibleCount, setVisibleCount] = useState(9);

  const filtered = events.filter((e) => {
    const matchSearch = !search || e.title.toLowerCase().includes(search.toLowerCase()) || e.description.toLowerCase().includes(search.toLowerCase());
    const matchCategory = activeCategory === "All" || e.category.toLowerCase() === activeCategory.toLowerCase().slice(0, -1).toLowerCase() ||
      (activeCategory === "Conferences" && e.category === "conference") ||
      (activeCategory === "Workshops" && e.category === "workshop") ||
      (activeCategory === "Meetups" && e.category === "meetup") ||
      (activeCategory === "Hackathons" && e.category === "hackathon") ||
      (activeCategory === "Networking" && e.category === "networking");
    const matchCity = selectedCity === "All Cities" || e.city === selectedCity;
    const matchPrice = selectedPrice === "Any Price" || (selectedPrice === "Free" && !e.price) || (selectedPrice === "Paid" && e.price);
    return matchSearch && matchCategory && matchCity && matchPrice;
  });

  const visible = filtered.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <BiznetNavbar />
      <main className="pt-24 pb-20">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold mb-3"
          >
            Explore Events
          </motion.h1>
          <p className="text-muted-foreground text-lg mb-8">
            Find your next conference, workshop, or meetup.
          </p>

          {/* Search */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search events..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
            />
          </div>
        </section>

        {/* Filters */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="px-4 py-2 rounded-lg bg-secondary/50 border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
            >
              {cities.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            <select
              value={selectedPrice}
              onChange={(e) => setSelectedPrice(e.target.value)}
              className="px-4 py-2 rounded-lg bg-secondary/50 border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
            >
              {priceFilters.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
        </section>

        {/* Events Grid */}
        <section className="max-w-7xl mx-auto px-4 md:px-8">
          {visible.length === 0 ? (
            <div className="text-center py-20">
              <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">No events match your filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visible.map((event, i) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link to={`/events/${event.id}`} className="block glass rounded-xl overflow-hidden card-hover group">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold uppercase tracking-wider">
                        {event.category}
                      </span>
                      {!event.price && (
                        <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-accent/90 text-accent-foreground text-xs font-semibold uppercase tracking-wider">
                          Free
                        </span>
                      )}
                    </div>
                    <div className="p-5">
                      <p className="text-xs text-primary font-semibold mb-1 uppercase tracking-wider">
                        {new Date(event.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} · {event.time}
                      </p>
                      <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {event.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{event.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <MapPin className="w-3.5 h-3.5" />
                          <span className="truncate max-w-[140px]">{event.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Users className="w-3.5 h-3.5" />
                          <span>{event.attendeeCount}</span>
                        </div>
                      </div>
                      {event.price && (
                        <p className="mt-3 text-sm font-semibold text-foreground">From ${event.price}</p>
                      )}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}

          {visibleCount < filtered.length && (
            <div className="text-center mt-10">
              <button
                onClick={() => setVisibleCount((v) => v + 6)}
                className="px-8 py-3 rounded-lg border border-border text-sm font-semibold hover:bg-secondary transition-colors"
              >
                Load More Events
              </button>
            </div>
          )}
        </section>
      </main>
      <BiznetFooter />
    </div>
  );
};

export default EventsPage;
