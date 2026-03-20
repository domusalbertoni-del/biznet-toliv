import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const HeroSection = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(30,25%,93%)] via-[hsl(25,15%,78%)] to-[hsl(20,8%,55%)]" />
      <div className="dark:hidden absolute inset-0" />
      <div className="hidden dark:block absolute inset-0 bg-gradient-to-b from-[hsl(0,0%,8%)] via-[hsl(0,0%,15%)] to-[hsl(0,0%,25%)]" />

      <div
        className="absolute inset-0 flex items-center justify-center -translate-y-20 md:-translate-y-28"
        style={{ mixBlendMode: isDark ? "screen" : "multiply" }}
      >
        <div className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] flex items-center justify-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain"
            style={isDark ? { filter: "invert(1)" } : undefined}
            src="/videos/hero-cube.mp4"
          />
        </div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          <p className="text-[11px] font-semibold tracking-[0.35em] uppercase text-foreground/60 mb-5">
            Build the future with hypr.biz
          </p>

          <h1 className="not-italic mb-8 max-w-3xl">
            <span
              className="block text-[clamp(3rem,9vw,7rem)] leading-[0.95] tracking-tight"
              style={{ fontFamily: "'Moonwalk', sans-serif" }}
            >
              HYPRBIZ
              {/* Sparkle stars */}
              <svg
                className="inline-block w-[clamp(1.5rem,3vw,3rem)] h-[clamp(1.5rem,3vw,3rem)] ml-2 -mt-4"
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <path d="M16 0C16 0 19.5 12.5 32 16C19.5 19.5 16 32 16 32C16 32 12.5 19.5 0 16C12.5 12.5 16 0 16 0Z" />
              </svg>
              <svg
                className="inline-block w-[clamp(0.75rem,1.5vw,1.5rem)] h-[clamp(0.75rem,1.5vw,1.5rem)] ml-1 -mt-10 opacity-60"
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <path d="M16 0C16 0 19.5 12.5 32 16C19.5 19.5 16 32 16 32C16 32 12.5 19.5 0 16C12.5 12.5 16 0 16 0Z" />
              </svg>
            </span>
            <span
              className="block text-[clamp(1rem,2.5vw,2rem)] leading-[1.2] tracking-[0.15em] mt-2 text-foreground/50 font-medium"
              style={{ fontFamily: "'Moonwalk', sans-serif" }}
            >
              By Toliv
            </span>
          </h1>

          <Link
            to="/signup"
            className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-background/80 backdrop-blur-sm text-foreground text-sm font-semibold tracking-wider uppercase hover:bg-background transition-all border border-border/50 not-italic"
            style={{ fontFamily: "'Moonwalk', sans-serif" }}
          >
            <span className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-300 via-pink-200 to-amber-200 inline-block" />
            Get Started
            <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
