import { Apple, Play } from "lucide-react";
import heroGradient from "@/assets/hero-gradient.webp";
import phoneMockup from "@/assets/phone-mockup.webp";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-20">
      {/* Gradient background */}
      <img
        src={heroGradient}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-40"
        aria-hidden="true"
      />

      <div className="container relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 max-w-xl animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl heading-uppercase leading-[0.95] mb-6">
            Grab your ticket,{" "}
            <span className="block">make memories</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Download Shotgun to find the best parties in town.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium text-sm hover:opacity-90 transition-opacity"
            >
              <Apple className="w-5 h-5" />
              App Store
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium text-sm hover:opacity-90 transition-opacity"
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
            <span className="text-sm text-muted-foreground">50K+ App ratings</span>
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end">
          <img
            src={phoneMockup}
            alt="Shotgun app preview"
            className="w-72 md:w-80 lg:w-96 drop-shadow-2xl animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
