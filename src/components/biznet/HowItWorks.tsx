import { motion } from "framer-motion";
import { Calendar, Users, Compass } from "lucide-react";

const pillars = [
  {
    icon: Calendar,
    title: "Discover Events",
    description: "Browse curated corporate events, conferences, and workshops. Get your tickets in seconds.",
  },
  {
    icon: Users,
    title: "Network & Chat",
    description: "See who's attending. Connect before, during, and after the event. Build real relationships.",
  },
  {
    icon: Compass,
    title: "Find a Mentor",
    description: "Students and professionals can browse mentors by industry and expertise. Request 1-on-1 guidance.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight mb-3">
          How It Works
        </h2>
        <p className="text-muted-foreground text-sm max-w-lg mx-auto">
          Three pillars that make Biznet.events the platform for ambitious professionals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="glass rounded-xl p-8 text-center card-hover"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-6">
              <p.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-3">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
