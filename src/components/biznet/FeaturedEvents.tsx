import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const solutions = [
  {
    title: "AI-Powered Operations",
    description: "Streamline supply chain, logistics, and resource planning with models that learn from your operational data.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tag: "Operations",
  },
  {
    title: "Intelligent Document Processing",
    description: "Extract, classify, and route information from millions of documents with 99.2% accuracy.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tag: "Documents",
  },
  {
    title: "Conversational AI Agents",
    description: "Deploy customer-facing AI agents that handle complex queries, escalate intelligently, and improve over time.",
    image: "https://images.unsplash.com/photo-1531746790095-e5995fd0e9cb?w=600&h=400&fit=crop",
    tag: "Agents",
  },
  {
    title: "Real-Time Fraud Detection",
    description: "Identify anomalies and fraudulent activity in real-time across billions of transactions.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=600&h=400&fit=crop",
    tag: "Security",
  },
];

const FeaturedEvents = () => {
  return (
    <section className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-14">
        <div>
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Solutions
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight">
            What we build.
          </h2>
        </div>
        <Link
          to="/solutions"
          className="hidden sm:flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors tracking-widest uppercase"
        >
          View all <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {solutions.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group rounded-2xl overflow-hidden border border-border card-hover cursor-pointer"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-[10px] font-semibold tracking-widest uppercase">
                {s.tag}
              </div>
            </div>
            <div className="p-6 md:p-8">
              <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedEvents;
