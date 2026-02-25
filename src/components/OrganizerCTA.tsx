import { ArrowRight } from "lucide-react";

const OrganizerCTA = () => {
  return (
    <section className="py-16">
      <div className="px-6 lg:px-12">
        <div className="rounded-3xl bg-gradient-to-br from-card via-card to-secondary border border-border/50 p-10 md:p-14 text-center max-w-3xl mx-auto relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl heading-uppercase mb-4">
              Launching an event?
            </h2>
            <p className="text-base text-muted-foreground mb-8 max-w-md mx-auto">
              Sell your tickets to the right audience. Smart targeting, real-time analytics, and seamless ticketing.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-foreground text-background font-semibold hover:opacity-90 transition-opacity"
            >
              List my event
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizerCTA;
