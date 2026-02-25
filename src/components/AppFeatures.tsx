import appFeed from "@/assets/app-feed.webp";
import appResale from "@/assets/app-resale.webp";

const AppFeatures = () => {
  return (
    <section className="py-20 border-t border-border">
      <div className="container">
        <h2 className="text-3xl md:text-4xl heading-uppercase text-center mb-4">
          Looking to go out?
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12">
          All the events you love are right there!
        </p>

        <div className="flex justify-center mb-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Get the Shotgun app
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden bg-card p-6">
            <h3 className="text-xl font-bold mb-4">Discover the best events in town</h3>
            <img
              src={appFeed}
              alt="Discover events"
              className="w-full rounded-xl"
            />
          </div>
          <div className="rounded-2xl overflow-hidden bg-card p-6">
            <h3 className="text-xl font-bold mb-4">Resell your ticket if you can't make it</h3>
            <img
              src={appResale}
              alt="Resell tickets"
              className="w-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;
