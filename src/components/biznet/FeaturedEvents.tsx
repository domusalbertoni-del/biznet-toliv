import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Users } from "lucide-react";
import { events } from "@/data/biznetData";

const featured = events.filter((e) => e.featured).slice(0, 4);

const FeaturedEvents = () => {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-10">
        <div>
          <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight">
            Upcoming Events
          </h2>
          <p className="text-muted-foreground text-sm mt-1">Curated conferences, workshops, and meetups</p>
        </div>
        <Link
          to="/events"
          className="hidden sm:flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
        >
          View all <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {featured.map((event, i) => {
          const date = new Date(event.date);
          const month = date.toLocaleString("en", { month: "short" }).toUpperCase();
          const day = date.getDate();

          return (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link
                to={`/events/${event.id}`}
                className="block glass rounded-xl overflow-hidden card-hover group"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {month} {day}
                  </div>
                  <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm text-xs font-medium px-2.5 py-1 rounded-full">
                    {event.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-display font-semibold text-sm leading-snug mb-2 line-clamp-2">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                    <MapPin className="w-3 h-3" />
                    <span className="truncate">{event.city}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="flex -space-x-1.5">
                        {event.attendeeAvatars.map((a, j) => (
                          <img key={j} src={a} alt="" className="w-5 h-5 rounded-full border border-background bg-muted" />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground flex items-center gap-0.5">
                        <Users className="w-3 h-3" />
                        {event.attendeeCount}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-primary">
                      {event.price ? `From $${event.price}` : "Free"}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      <div className="sm:hidden mt-6 text-center">
        <Link to="/events" className="text-sm text-primary font-medium flex items-center justify-center gap-1.5">
          View all events <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default FeaturedEvents;
