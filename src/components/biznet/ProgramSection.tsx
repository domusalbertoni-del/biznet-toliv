import { motion } from "framer-motion";
import { DollarSign, Users, Cpu } from "lucide-react";

const cards = [
  {
    icon: DollarSign,
    eyebrow: "Capital",
    title: "Enterprise-Grade AI Infrastructure",
    description: "Custom-built models deployed on your infrastructure. Full data sovereignty and compliance from day one.",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&h=600&fit=crop",
  },
  {
    icon: Users,
    eyebrow: "Coaching",
    title: "Hands-On AI Strategy with Our Team",
    description: "Dedicated AI architects work alongside your team to identify opportunities, build roadmaps, and deploy solutions.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
  },
  {
    icon: Cpu,
    eyebrow: "Community",
    title: "Join 200+ Enterprise Partners",
    description: "Access exclusive research, events, and partnerships within our network of forward-thinking companies.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
  },
];

const ProgramSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <p className="text-[11px] font-semibold tracking-[0.35em] uppercase text-muted-foreground mb-5">
          Our Platform
        </p>
      </motion.div>

      {/* Scrolling icon marquee */}
      <div className="overflow-hidden mb-20">
        <div className="flex animate-marquee gap-8">
          {[...Array(3)].map((_, setIdx) => (
            <div key={setIdx} className="flex gap-8 shrink-0">
              {["Custom Models", "Predictive Analytics", "Workflow Automation", "Document AI", "Conversational Agents", "Fraud Detection", "Data Pipelines", "Edge AI"].map((label) => (
                <div
                  key={`${setIdx}-${label}`}
                  className="flex items-center gap-3 px-6 py-3 rounded-full border border-border bg-card whitespace-nowrap"
                >
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                    <Cpu className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="space-y-8">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-border bg-card"
          >
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <p className="text-[11px] font-semibold tracking-[0.35em] uppercase text-muted-foreground mb-4">
                {card.eyebrow}
              </p>
              <h3 className="font-display font-bold text-2xl md:text-3xl tracking-tight mb-4 leading-tight">
                {card.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                {card.description}
              </p>
            </div>
            <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProgramSection;
