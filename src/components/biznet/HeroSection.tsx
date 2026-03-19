import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden noise-overlay">
      {/* Warm gradient background */}
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/20 to-background/80" />

      {/* Abstract geometric element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.06]">
        <div className="w-full h-full rounded-full border border-foreground/20" />
        <div className="absolute inset-12 rounded-full border border-foreground/15" />
        <div className="absolute inset-24 rounded-full border border-foreground/10" />
        <div className="absolute inset-36 rounded-full border border-foreground/5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pb-24 md:pb-32 pt-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow */}
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Building the future of enterprise AI
          </p>

          {/* Headline */}
          <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] mb-8 max-w-4xl">
            Intelligence that
            <br />
            moves your
            <br />
            business forward.
          </h1>

          {/* Subheadline */}
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-12 leading-relaxed">
            We build AI systems that understand your operations, automate complex workflows, and unlock insights at scale.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link
              to="/signup"
              className="group px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-sm tracking-wider uppercase hover:opacity-90 transition-all flex items-center gap-3"
            >
              Request a Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to="/solutions"
              className="px-8 py-4 rounded-full border border-border text-foreground font-medium text-sm tracking-wider uppercase hover:bg-secondary transition-all"
            >
              Explore Solutions
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
