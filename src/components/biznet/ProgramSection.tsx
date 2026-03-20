import { motion } from "framer-motion";
import { MessageSquare, Users, TrendingUp } from "lucide-react";

const cards = [
  {
    icon: Users,
    eyebrow: "Intelligence",
    title: "Know Everyone in the Room",
    description: "Log in with LinkedIn and our AI instantly analyzes every attendee at your event. Know their role, company, background, and why they matter to you — before you say a word.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
  },
  {
    icon: MessageSquare,
    eyebrow: "Strategy",
    title: "Walk In With a Playbook",
    description: "Three modes: find clients, find partners, or just network. Your agent gives you personalized talking points for every conversation so you never waste a second.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
  },
  {
    icon: TrendingUp,
    eyebrow: "Compounding",
    title: "Your Network Grows After You Leave",
    description: "Post-event follow-up suggestions, relationship scoring, and deal tracking. Every event compounds into a network that works for you 24/7.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=600&fit=crop",
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
          How it works
        </p>
      </motion.div>

      {/* Scrolling icon marquee */}
      <div className="overflow-hidden mb-20">
        <div className="flex animate-marquee gap-8">
          {[...Array(3)].map((_, setIdx) => (
            <div key={setIdx} className="flex gap-8 shrink-0">
              {["LinkedIn Login", "Attendee Matching", "Conversation Scripts", "Intent Analysis", "Client Discovery", "Partner Matching", "Post-Event Follow-up", "Corporate Events"].map((label) => (
                <div
                  key={`${setIdx}-${label}`}
                  className="flex items-center gap-3 px-6 py-3 rounded-full border border-border bg-card whitespace-nowrap"
                >
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                    <Users className="w-4 h-4 text-muted-foreground" />
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
