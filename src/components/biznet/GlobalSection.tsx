import { motion } from "framer-motion";

const countries = [
  "Tech Conferences", "Startup Summits", "VC Meetups", "Sales Kickoffs",
  "Industry Galas", "MBA Networking", "Board Dinners", "Pitch Days",
  "Accelerator Demo Days", "Innovation Labs", "Corporate Retreats", "Chamber Events",
];

const GlobalSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight mb-6 max-w-2xl leading-tight">
          Deployed Across the Globe
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <div className="grid grid-cols-3 gap-3 mb-8">
              {["LinkedIn Login", "Privacy First", "Per-Event Activation"].map((tag) => (
                <div key={tag} className="px-4 py-3 rounded-xl border border-border bg-card text-center">
                  <span className="text-xs font-semibold tracking-wider">{tag}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-lg">
              Our <span className="font-semibold text-foreground">Global Deployment Program</span> provides
              hands-on guidance for <span className="font-semibold text-foreground">compliance, data residency,
              and infrastructure setup</span>, plus a dedicated team of AI architects.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Biznet AI clients come from everywhere:
            </p>
            <div className="flex flex-wrap gap-2">
              {countries.map((country, i) => (
                <span
                  key={country}
                  className={`text-sm ${i % 3 === 0 ? "font-bold text-foreground" : "text-muted-foreground"}`}
                >
                  {country}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default GlobalSection;
n;
