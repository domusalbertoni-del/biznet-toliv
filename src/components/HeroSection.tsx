import { Apple, Play } from "lucide-react";
import phoneMockup from "@/assets/phone-mockup.webp";
import phoneTicket from "@/assets/phone-ticket.webp";
import phoneEvent from "@/assets/phone-event.webp";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-8">
      {/* Radial gradient background */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at top left, rgba(139, 92, 246, 0.4), transparent 60%), radial-gradient(ellipse at bottom right, rgba(236, 72, 153, 0.3), transparent 60%), #0a0a0a' }} />
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-12 px-6 lg:px-12 max-w-7xl mx-auto">
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
            Download Toliv to find the best parties, festivals, and events in Chile.
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
            <span className="text-sm text-muted-foreground">50K+ App ratings</span>
          </div>
        </div>

        {/* Multi-screen phone mockups */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-[340px] h-[420px] md:w-[400px] md:h-[480px]">
            {/* Back left phone */}
            <img
              src={phoneTicket}
              alt="Ticket confirmation screen"
              className="absolute left-0 bottom-0 w-44 md:w-52 rounded-2xl shadow-2xl rotate-[-8deg] z-10 animate-fade-in-up border border-border/30"
              style={{ animationDelay: "0.4s" }}
            />
            {/* Center phone (main) */}
            <img
              src={phoneMockup}
              alt="Event feed screen"
              className="absolute left-1/2 -translate-x-1/2 bottom-4 w-48 md:w-56 rounded-2xl shadow-2xl z-20 animate-fade-in-up border border-border/30"
              style={{ animationDelay: "0.2s" }}
            />
            {/* Back right phone */}
            <img
              src={phoneEvent}
              alt="Event detail screen"
              className="absolute right-0 bottom-0 w-44 md:w-52 rounded-2xl shadow-2xl rotate-[8deg] z-10 animate-fade-in-up border border-border/30"
              style={{ animationDelay: "0.6s" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
