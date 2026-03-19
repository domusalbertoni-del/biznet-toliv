import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: "1",
    quote: "Biznet AI transformed how we process millions of insurance claims. What took weeks now takes minutes — with higher accuracy than our manual review team.",
    name: "Sarah Chen",
    title: "CTO at Allstate",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=sarah-chen&backgroundColor=d1d4f9&scale=120",
  },
  {
    id: "2",
    quote: "The custom models they built for our supply chain have saved us $40M in the first year. Their team understood our data better than we did.",
    name: "Marcus Rivera",
    title: "VP Operations at Maersk",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=marcus-j&backgroundColor=b6e3f4&scale=120",
  },
  {
    id: "3",
    quote: "We evaluated every major AI vendor. Biznet was the only one that could deploy on our infrastructure with zero data leaving our network.",
    name: "Dr. Priya Patel",
    title: "CISO at JPMorgan Chase",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=priya-p&backgroundColor=c0aede&scale=120",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 7000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 items-start">
        {/* Photo */}
        <AnimatePresence mode="wait">
          <motion.div
            key={t.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-32 h-32 lg:w-48 lg:h-48 rounded-2xl bg-secondary object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Quote */}
        <div className="min-h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-display text-2xl md:text-3xl lg:text-4xl font-medium leading-snug tracking-tight mb-8 max-w-3xl">
                "{t.quote}"
              </p>
              <p className="text-sm">
                <span className="font-semibold">{t.name}</span>
                <span className="text-muted-foreground"> — {t.title}</span>
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === current ? "bg-foreground w-10" : "bg-muted-foreground/30 w-6"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
