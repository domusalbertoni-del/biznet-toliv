import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const CTASection = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-background to-background" />
      <div className="absolute inset-0 mesh-gradient opacity-40" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-2xl mx-auto px-4 md:px-8 text-center"
      >
        <h2 className="font-display font-bold text-2xl md:text-4xl tracking-tight mb-4">
          Ready to level up
          <br />
          your network?
        </h2>
        <p className="text-muted-foreground mb-10 max-w-md mx-auto">
          Join Biznet.events and start connecting with professionals who share your ambition.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="flex-1 w-full px-4 py-3 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50 transition-colors"
          />
          <button className="w-full sm:w-auto px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all glow-blue flex items-center justify-center gap-2">
            Join Now
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
