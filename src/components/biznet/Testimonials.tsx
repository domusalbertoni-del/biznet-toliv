import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/biznetData";

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
    <section className="py-20 md:py-28 px-4 md:px-8 max-w-4xl mx-auto text-center">
      <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight mb-14">
        What people are saying
      </h2>

      <div className="relative min-h-[200px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <p className="text-lg md:text-xl italic text-foreground/90 leading-relaxed max-w-2xl mb-8">
              "{t.quote}"
            </p>
            <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full bg-muted mb-3" />
            <p className="font-display font-semibold text-sm">{t.name}</p>
            <p className="text-xs text-muted-foreground">
              {t.title} at {t.company}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? "bg-primary w-6" : "bg-muted-foreground/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
