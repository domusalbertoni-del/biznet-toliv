import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FAQSection = () => {
  return (
    <section className="py-24 md:py-32 overflow-hidden">
      {/* Scrolling "Got any questions?" marquee */}
      <div className="overflow-hidden mb-16">
        <div className="flex animate-marquee-fast whitespace-nowrap">
          {[...Array(12)].map((_, i) => (
            <span
              key={i}
              className="font-display font-bold text-4xl md:text-6xl tracking-tight text-foreground/10 mx-6 shrink-0"
            >
              Got any questions?
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Thinking illustration placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="w-64 h-80 rounded-2xl bg-secondary flex items-center justify-center">
            <span className="text-6xl">🤔</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[11px] font-semibold tracking-[0.35em] uppercase text-muted-foreground mb-4">
            What's Next
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight mb-6">
            Let's Talk
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
            Schedule a call with our team to discuss how Biznet AI can transform your business operations.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold tracking-wider uppercase hover:opacity-90 transition-all"
          >
            Book a Demo <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
