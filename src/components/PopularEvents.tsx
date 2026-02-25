import event1 from "@/assets/event-1.webp";
import event2 from "@/assets/event-2.webp";
import event3 from "@/assets/event-3.webp";

const events = [
  {
    id: 1,
    title: "Neon Nights Festival",
    price: "$25.00",
    venue: "Warehouse District",
    date: "Sat, Mar 15",
    time: "10:00 PM",
    tags: ["Techno", "House"],
    image: event1,
  },
  {
    id: 2,
    title: "Deep Sessions Vol. 12",
    price: "$18.50",
    venue: "The Underground",
    date: "Fri, Mar 21",
    time: "11:00 PM",
    tags: ["Deep House", "Minimal"],
    image: event2,
  },
  {
    id: 3,
    title: "Sunset Sounds Open Air",
    price: "$35.00",
    venue: "Riverside Park",
    date: "Sat, Mar 29",
    time: "4:00 PM",
    tags: ["Electronic", "Dance"],
    image: event3,
  },
];

const PopularEvents = () => {
  return (
    <section className="py-20 border-t border-border">
      <div className="container">
        <h2 className="text-3xl md:text-4xl heading-uppercase mb-10 flex items-center gap-3">
          Popular events in
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-sm font-medium normal-case tracking-normal">
            🇺🇸 United States
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <a
              key={event.id}
              href="#"
              className="group block rounded-xl overflow-hidden bg-card hover:bg-accent transition-colors"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <p className="text-primary font-semibold text-sm mb-1">{event.price}</p>
                <p className="text-muted-foreground text-sm mb-1">{event.venue}</p>
                <p className="text-muted-foreground text-sm mb-3">
                  {event.date} | {event.time}
                </p>
                <div className="flex gap-2">
                  {event.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-secondary text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm font-medium hover:bg-secondary transition-colors"
          >
            More events in 🇺🇸 United States
          </a>
        </div>
      </div>
    </section>
  );
};

export default PopularEvents;
