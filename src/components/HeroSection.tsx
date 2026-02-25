import { Apple, Play } from "lucide-react";
import heroGradient from "@/assets/hero-gradient.webp";
import phoneMockup from "@/assets/phone-mockup.webp";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-16">
      <img
        src={heroGradient}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-30"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-12 px-6 lg:px-12">
        <div className="flex-1 max-w-xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Live events near you
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl heading-uppercase leading-[0.92] mb-6">
            <span className="text-gradient">Grab</span> your ticket,{" "}
            <span className="block mt-1">make <span className="text-gradient">memories</span></span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-md">
            Find the best parties, festivals & events in your city. Buy tickets, discover artists, go out.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-8">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-foreground text-background font-medium text-sm hover:opacity-90 transition-opacity"
            >
              <Apple className="w-5 h-5" />
              App Store
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors"
            >
              <Play className="w-5 h-5 fill-current" />
              Play Store
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-lg font-bold">4.9</span>
            <div className="flex gap-0.5 text-primary">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M10 1l2.39 4.84L18 6.71l-4 3.9.94 5.5L10 13.38 5.06 16.1l.94-5.5-4-3.9 5.61-.87L10 1z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">50K+ ratings</span>
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end max-w-sm">
          <img
            src={phoneMockup}
            alt="App preview"
            className="w-72 md:w-80 drop-shadow-2xl animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
