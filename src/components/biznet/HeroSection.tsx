import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const avatars = [
  "sarah-chen", "marcus-j", "priya-p", "david-k", "elena-r"
].map(s => `https://api.dicebear.com/9.x/notionists/svg?seed=${s}&backgroundColor=b6e3f4,c0aede,d1d4f9`);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
      {/* Animated mesh gradient blobs */}
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium tracking-widest uppercase text-muted-foreground mb-8">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            Professional networking, reimagined
          </div>

          {/* Headline */}
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1] mb-6">
            Where professionals
            <br />
            <span className="text-gradient-blue">connect, grow,</span>
            <br />
            and thrive.
          </h1>

          {/* Subheadline */}
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Discover corporate events. Network with attendees. Find your mentor.
            All in one platform.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              to="/events"
              className="group px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all glow-blue flex items-center gap-2"
            >
              Explore Events
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to="/mentorship"
              className="px-8 py-3.5 rounded-lg border border-accent/40 text-accent font-semibold text-sm hover:bg-accent/10 transition-all flex items-center gap-2"
            >
              Become a Mentor
              <Sparkles className="w-4 h-4" />
            </Link>
          </div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex items-center justify-center gap-3"
          >
            <div className="flex -space-x-2.5">
              {avatars.map((url, i) => (
                <img
                  key={i}
                  src={url}
                  alt=""
                  className="w-8 h-8 rounded-full border-2 border-background bg-muted"
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              <strong className="text-foreground">2,400+</strong> professionals already networking
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
