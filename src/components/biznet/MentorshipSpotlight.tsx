import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import { mentors } from "@/data/biznetData";

const spotlightMentors = mentors.filter((m) => m.available).slice(0, 4);

const MentorshipSpotlight = () => {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left — Copy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-medium tracking-widest uppercase text-accent mb-6">
            Mentorship
          </div>
          <h2 className="font-display font-bold text-2xl md:text-4xl tracking-tight mb-5 leading-tight">
            Mentorship that
            <br />
            <span className="text-gradient-amber">actually works.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
            Our matching system connects students and professionals with experienced mentors
            in their field. Get career guidance, portfolio reviews, interview prep, and more —
            from people who've been there.
          </p>
          <Link
            to="/mentorship"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold text-sm hover:bg-accent/90 transition-all glow-amber"
          >
            Browse Mentors
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>

        {/* Right — Mentor Cards */}
        <div className="grid grid-cols-2 gap-4">
          {spotlightMentors.map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-xl p-5 card-hover"
            >
              <img
                src={m.avatar}
                alt={m.name}
                className="w-12 h-12 rounded-full bg-muted mb-3"
              />
              <h4 className="font-display font-semibold text-sm">{m.name}</h4>
              <p className="text-xs text-muted-foreground mb-2">
                {m.title} at {m.company}
              </p>
              <div className="flex flex-wrap gap-1 mb-3">
                {m.expertise.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent uppercase tracking-wider font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Star className="w-3 h-3 text-accent fill-accent" />
                <span className="font-medium text-foreground">{m.rating}</span>
                <span>· {m.menteesCount} mentees</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorshipSpotlight;
