import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const perks = [
  { value: "$5M", label: "in Free Cloud Credits" },
  { value: "24/7", label: "Dedicated Support Engineers" },
];

const PerksSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl border border-border bg-card p-8 md:p-12"
      >
        <p className="text-[11px] font-semibold tracking-[0.35em] uppercase text-muted-foreground mb-6">
          But wait there's more
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {perks.map((perk) => (
            <div key={perk.label} className="flex items-baseline gap-3">
              <span className="font-display font-bold text-3xl md:text-4xl tracking-tight">{perk.value}</span>
              <span className="text-muted-foreground text-sm">{perk.label}</span>
            </div>
          ))}
        </div>
        <Link
          to="#"
          className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:opacity-70 transition-opacity"
        >
          Learn more about the perks <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </section>
  );
};

export default PerksSection;
