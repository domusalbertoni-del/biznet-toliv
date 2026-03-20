import { motion } from "framer-motion";

const SpeakersSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[11px] font-semibold tracking-[0.35em] uppercase text-muted-foreground mb-12 text-center"
      >
        Built for professionals who mean business
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {[
          { stat: "< 3 min", label: "Time to analyze a full event room", sub: "Log in with LinkedIn. Done." },
          { stat: "800+", label: "Attendees analyzed per event", sub: "Real-time, AI-powered." },
          { stat: "3×", label: "More follow-ups closed post-event", sub: "Because you know who to follow up with." },
        ].map((item) => (
          <motion.div key={item.stat} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-8 rounded-2xl border border-border bg-card">
            <p className="font-display font-bold text-5xl tracking-tight mb-2">{item.stat}</p>
            <p className="font-semibold text-sm mb-1">{item.label}</p>
            <p className="text-xs text-muted-foreground">{item.sub}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SpeakersSection;
