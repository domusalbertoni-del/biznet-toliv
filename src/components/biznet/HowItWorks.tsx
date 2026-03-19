import { motion } from "framer-motion";
import { Cpu, BarChart3, Zap, Shield } from "lucide-react";

const capabilities = [
  {
    icon: Cpu,
    title: "Custom AI Models",
    description: "Purpose-built models trained on your data, designed for your specific industry and use cases.",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "Turn raw data into actionable forecasts. Anticipate market shifts before they happen.",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Automate complex multi-step processes with intelligent agents that learn and adapt.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 Type II compliant. Your data never leaves your infrastructure. Zero-trust by default.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-16">
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Our Capabilities
        </p>
        <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight max-w-2xl leading-tight">
          AI infrastructure built for the enterprise.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
        {capabilities.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-background p-10 md:p-14 group hover:bg-secondary/50 transition-colors"
          >
            <p.icon className="w-8 h-8 text-foreground mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
            <h3 className="font-display font-semibold text-xl mb-3">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">{p.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
