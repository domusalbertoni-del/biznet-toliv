import { motion } from "framer-motion";

const leaders = [
  { name: "Dr. Sarah Chen", role: "AI Research Lead", company: "DeepMind", image: "https://api.dicebear.com/9.x/notionists/svg?seed=sarah-chen&backgroundColor=d1d4f9&scale=120" },
  { name: "Marcus Rivera", role: "CTO", company: "Stripe", image: "https://api.dicebear.com/9.x/notionists/svg?seed=marcus-j&backgroundColor=b6e3f4&scale=120" },
  { name: "Priya Patel", role: "VP Engineering", company: "Google", image: "https://api.dicebear.com/9.x/notionists/svg?seed=priya-p&backgroundColor=c0aede&scale=120" },
  { name: "David Kim", role: "Partner", company: "a16z", image: "https://api.dicebear.com/9.x/notionists/svg?seed=david-k&backgroundColor=ffd5dc&scale=120" },
  { name: "Elena Rodriguez", role: "Chief Scientist", company: "OpenAI", image: "https://api.dicebear.com/9.x/notionists/svg?seed=elena-r&backgroundColor=d1d4f9&scale=120" },
  { name: "James O'Connor", role: "CEO", company: "Vercel", image: "https://api.dicebear.com/9.x/notionists/svg?seed=james-o&backgroundColor=b6e3f4&scale=120" },
  { name: "Yuki Tanaka", role: "ML Lead", company: "Tesla", image: "https://api.dicebear.com/9.x/notionists/svg?seed=yuki-t&backgroundColor=c0aede&scale=120" },
  { name: "Amara Osei", role: "Founder", company: "Anthropic", image: "https://api.dicebear.com/9.x/notionists/svg?seed=amara-o&backgroundColor=ffd5dc&scale=120" },
  { name: "Lucas Weber", role: "Head of AI", company: "Meta", image: "https://api.dicebear.com/9.x/notionists/svg?seed=lucas-w&backgroundColor=d1d4f9&scale=120" },
  { name: "Sofia Andersson", role: "Director", company: "Spotify", image: "https://api.dicebear.com/9.x/notionists/svg?seed=sofia-a&backgroundColor=b6e3f4&scale=120" },
];

const SpeakersSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[11px] font-semibold tracking-[0.35em] uppercase text-muted-foreground mb-12 text-center"
      >
        Advisors and Partners
      </motion.p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {leaders.map((person, i) => (
          <motion.div
            key={person.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            className="text-center group"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-3 bg-secondary">
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="font-display font-semibold text-sm">{person.name}</p>
            <p className="text-xs text-muted-foreground">{person.company}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SpeakersSection;
