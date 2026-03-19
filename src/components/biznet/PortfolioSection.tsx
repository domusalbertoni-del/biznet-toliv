import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const clientLogos = [
  "Stripe", "Vercel", "OpenAI", "Anthropic", "Figma", "Linear",
  "Notion", "Datadog", "Clerk", "Resend", "Supabase", "Railway",
  "Replicate", "Weights & Biases", "Hugging Face", "Scale AI",
];

const PortfolioSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl border border-border bg-card p-8 md:p-14 text-center"
      >
        <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
          Since launching in 2023, Biznet AI has deployed over{" "}
          <span className="font-semibold text-foreground">1,500 models</span> across{" "}
          <span className="font-semibold text-foreground">200+ enterprise clients</span>.
        </p>

        <Link
          to="#"
          className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:opacity-70 transition-opacity mb-12"
        >
          Explore our case studies <ArrowRight className="w-4 h-4" />
        </Link>

        {/* Scrolling logo marquee */}
        <div className="overflow-hidden mt-8">
          <div className="flex animate-marquee-slow gap-10">
            {[...Array(4)].map((_, setIdx) => (
              <div key={setIdx} className="flex gap-10 shrink-0">
                {clientLogos.map((name) => (
                  <div
                    key={`${setIdx}-${name}`}
                    className="flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary shrink-0"
                  >
                    <span className="text-[10px] font-bold text-muted-foreground tracking-wide text-center leading-tight px-1">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PortfolioSection;
