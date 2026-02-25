import { ArrowRight } from "lucide-react";

const OrganizerCTA = () => {
  return (
    <section className="py-20 border-t border-border">
      <div className="container max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl heading-uppercase mb-6">
          Launching an event?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          Sell your tickets to the right person, at the right moment, with the right message, at the right price and on the right channel.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-foreground text-background font-semibold hover:opacity-90 transition-opacity"
        >
          List my event
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default OrganizerCTA;
