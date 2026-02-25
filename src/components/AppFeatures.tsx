import appFeed from "@/assets/app-feed.webp";
import appResale from "@/assets/app-resale.webp";

const AppFeatures = () => {
  return (
    <section className="py-16">
      <div className="px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl heading-uppercase mb-3">
            All your events, <span className="text-gradient">one place</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-md mx-auto">
            Discover, buy tickets, and even resell — all from the app.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-primary"
          >
            Get the app
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden bg-card border border-border/50 p-5 hover:border-primary/30 transition-colors">
            <h3 className="text-lg font-bold mb-3">Discover the best events</h3>
            <img src={appFeed} alt="Event feed" className="w-full rounded-xl" />
          </div>
          <div className="rounded-2xl overflow-hidden bg-card border border-border/50 p-5 hover:border-accent/30 transition-colors">
            <h3 className="text-lg font-bold mb-3">Resell tickets hassle-free</h3>
            <img src={appResale} alt="Ticket resale" className="w-full rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;
