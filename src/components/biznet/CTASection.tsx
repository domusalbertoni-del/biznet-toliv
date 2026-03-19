import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const CTASection = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-primary" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-3xl mx-auto px-4 md:px-8 text-center"
      >
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary-foreground/60 mb-6">
          Get started
        </p>
        <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight mb-6 text-primary-foreground">
          Ready to bring AI
          <br />
          into your workflow?
        </h2>
        <p className="text-primary-foreground/70 mb-12 max-w-md mx-auto">
          Talk to our team about how Biznet AI can transform your operations.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="flex-1 w-full px-5 py-3.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-sm text-primary-foreground placeholder:text-primary-foreground/40 outline-none focus:border-primary-foreground/40 transition-colors"
          />
          <button className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-primary-foreground text-primary text-sm font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2 tracking-wider uppercase">
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
