import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: "1",
    quote: "Biznet AI transformed how we process millions of insurance claims. What took weeks now takes minutes — with higher accuracy than our manual review team.",
    name: "Sarah Chen",
    title: "CTO",
    company: "Allstate",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=sarah-chen&backgroundColor=d1d4f9",
  },
  {
    id: "2",
    quote: "The custom models they built for our supply chain have saved us $40M in the first year. Their team understood our data better than we did.",
    name: "Marcus Rivera",
    title: "VP Operations",
    company: "Maersk",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=marcus-j&backgroundColor=b6e3f4",
  },
  {
    id: "3",
    quote: "We evaluated every major AI vendor. Biznet was the only one that could deploy on our infrastructure with zero data leaving our network.",
    name: "Dr. Priya Patel",
    title: "CISO",
    company: "JPMorgan Chase",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=priya-p&backgroundColor=c0aede",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 max-w-5xl mx-auto">
      <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-16 text-center">
        What our clients say
      </p>

      <div className="relative min-h-[250px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <p className="text-2xl md:text-3xl font-display font-medium leading-relaxed max-w-3xl mb-10 tracking-tight">
              "{t.quote}"
            </p>
            <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full bg-muted mb-3" />
            <p className="font-display font-semibold text-sm">{t.name}</p>
            <p className="text-xs text-muted-foreground">
              {t.title}, {t.company}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-2 mt-10">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? "bg-foreground w-8" : "bg-muted-foreground/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
