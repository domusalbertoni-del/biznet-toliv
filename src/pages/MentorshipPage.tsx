import { useState } from "react";
import { Search, Star, Clock, Users, X, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BiznetNavbar from "@/components/biznet/BiznetNavbar";
import BiznetFooter from "@/components/biznet/BiznetFooter";
import { mentors, type Mentor } from "@/data/biznetData";

const expertiseFilters = ["All", "Leadership", "Engineering", "Product", "Marketing", "Sales", "Design", "AI/ML", "Fundraising"];
const availabilityFilters = ["All", "Available Now", "Waitlist"];

const MentorshipPage = () => {
  const [activeTab, setActiveTab] = useState<"find" | "become">("find");
  const [search, setSearch] = useState("");
  const [selectedExpertise, setSelectedExpertise] = useState("All");
  const [selectedAvailability, setSelectedAvailability] = useState("All");
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);

  const filtered = mentors.filter((m) => {
    const matchSearch = !search || m.name.toLowerCase().includes(search.toLowerCase()) || m.company.toLowerCase().includes(search.toLowerCase());
    const matchExpertise = selectedExpertise === "All" || m.expertise.some((e) => e.toLowerCase().includes(selectedExpertise.toLowerCase()));
    const matchAvail = selectedAvailability === "All" || (selectedAvailability === "Available Now" && m.available) || (selectedAvailability === "Waitlist" && !m.available);
    return matchSearch && matchExpertise && matchAvail;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <BiznetNavbar />
      <main className="pt-24 pb-20 max-w-7xl mx-auto px-4 md:px-8">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-display font-bold mb-2">
          Mentorship Hub
        </motion.h1>
        <p className="text-muted-foreground text-lg mb-4">Learn from the best. Give back to the next generation.</p>

        {/* Student Banner */}
        <div className="mb-8 p-4 rounded-xl bg-accent/10 border border-accent/20 flex items-center gap-3">
          <Award className="w-5 h-5 text-accent shrink-0" />
          <p className="text-sm text-accent">
            <span className="font-semibold">Students</span> — sign up to get matched with a mentor in your field →
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 border-b border-border mb-8">
          {[{ key: "find" as const, label: "Find a Mentor" }, { key: "become" as const, label: "Become a Mentor" }].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-3 text-sm font-medium transition-colors relative ${activeTab === tab.key ? "text-accent" : "text-muted-foreground hover:text-foreground"}`}
            >
              {tab.label}
              {activeTab === tab.key && <motion.div layoutId="mentorship-tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />}
            </button>
          ))}
        </div>

        {activeTab === "find" && (
          <div>
            {/* Search & Filters */}
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search mentors..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 placeholder:text-muted-foreground"
                />
              </div>
              <select
                value={selectedAvailability}
                onChange={(e) => setSelectedAvailability(e.target.value)}
                className="px-4 py-2 rounded-lg bg-secondary/50 border border-border text-sm focus:outline-none"
              >
                {availabilityFilters.map((a) => <option key={a}>{a}</option>)}
              </select>
            </div>
            <div className="flex flex-wrap gap-2 mb-8">
              {expertiseFilters.map((e) => (
                <button
                  key={e}
                  onClick={() => setSelectedExpertise(e)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    selectedExpertise === e ? "bg-accent text-accent-foreground" : "bg-secondary/50 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {e}
                </button>
              ))}
            </div>

            {/* Mentor Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((mentor, i) => (
                <motion.div
                  key={mentor.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => setSelectedMentor(mentor)}
                  className="glass rounded-xl p-6 card-hover cursor-pointer group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <img src={mentor.avatar} alt={mentor.name} className="w-14 h-14 rounded-full border-2 border-border" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-semibold">{mentor.name}</h3>
                      <p className="text-xs text-muted-foreground">{mentor.title} at {mentor.company}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-3.5 h-3.5 text-accent fill-accent" />
                        <span className="text-xs font-semibold text-accent">{mentor.rating}</span>
                        <span className="text-xs text-muted-foreground">({mentor.reviewCount} reviews)</span>
                      </div>
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider ${
                      mentor.available ? "bg-green-500/10 text-green-400" : "bg-secondary text-muted-foreground"
                    }`}>
                      {mentor.available ? "Available" : "Waitlist"}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{mentor.bio}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {mentor.expertise.map((e) => (
                      <span key={e} className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-[10px]">{e}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{mentor.yearsExperience} yrs exp</span>
                    <span className="flex items-center gap-1"><Users className="w-3 h-3" />{mentor.menteesCount} mentees</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "become" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-display font-bold mb-4">Why Mentor on Biznet?</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Share your expertise with the next generation of professionals. Our matching system connects you with driven
                mentees aligned with your skills and experience. You'll make a real impact while expanding your own network.
              </p>
              <div className="glass rounded-xl p-6 mb-6">
                <p className="text-3xl font-display font-bold text-accent mb-1">500+</p>
                <p className="text-sm text-muted-foreground">professionals mentored on our platform</p>
              </div>
              <blockquote className="border-l-2 border-accent pl-4 italic text-muted-foreground">
                "Being a mentor on Biznet is incredibly rewarding. The matching system connects me with mentees who are genuinely driven."
                <cite className="block text-xs text-accent mt-2 not-italic">— Sarah Chen, VP of Product at Stripe</cite>
              </blockquote>
            </div>
            <div className="glass rounded-xl p-6 md:p-8">
              <h3 className="text-lg font-display font-semibold mb-6">Apply as a Mentor</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-muted-foreground uppercase tracking-wider">Full Name</label>
                    <input className="w-full mt-1 px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent/40" />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground uppercase tracking-wider">Title</label>
                    <input className="w-full mt-1 px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent/40" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-muted-foreground uppercase tracking-wider">Company</label>
                    <input className="w-full mt-1 px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent/40" />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground uppercase tracking-wider">Industry</label>
                    <select className="w-full mt-1 px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-sm focus:outline-none">
                      <option>Tech</option><option>Finance</option><option>Marketing</option><option>Design</option><option>Consulting</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wider">Areas of Expertise</label>
                  <input placeholder="e.g., Leadership, Product Strategy, AI/ML" className="w-full mt-1 px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent/40" />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wider">Bio</label>
                  <textarea rows={3} className="w-full mt-1 px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 resize-none" />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wider">Availability (hours/week)</label>
                  <select className="w-full mt-1 px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-sm focus:outline-none">
                    <option>1-2 hours</option><option>3-5 hours</option><option>5+ hours</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wider">LinkedIn URL</label>
                  <input placeholder="https://linkedin.com/in/..." className="w-full mt-1 px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent/40" />
                </div>
                <button className="w-full py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all glow-amber">
                  Apply as Mentor
                </button>
                <p className="text-xs text-center text-muted-foreground">Applications reviewed within 48 hours</p>
              </form>
            </div>
          </div>
        )}

        {/* Student CTA */}
        <section className="mt-20 rounded-2xl p-8 md:p-12 bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">Students: Get a Head Start</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Sign up as a student to get priority mentor matching, career guidance, and exclusive access to student-only events.
          </p>
          <form className="max-w-md mx-auto space-y-3" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-3">
              <input placeholder="Full Name" className="px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent/40" />
              <input placeholder="Email" className="px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent/40" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <input placeholder="University" className="px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent/40" />
              <input placeholder="Field of Study" className="px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent/40" />
            </div>
            <textarea rows={2} placeholder="What are you looking for in a mentor?" className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 resize-none" />
            <button className="w-full py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all glow-amber">
              Sign Up as Student
            </button>
          </form>
        </section>
      </main>

      {/* Mentor Detail Modal */}
      <AnimatePresence>
        {selectedMentor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMentor(null)}
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-xl" />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative glass-strong rounded-2xl p-8 max-w-lg w-full max-h-[85vh] overflow-y-auto"
            >
              <button onClick={() => setSelectedMentor(null)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-start gap-4 mb-4">
                <img src={selectedMentor.avatar} alt={selectedMentor.name} className="w-16 h-16 rounded-full border-2 border-accent" />
                <div>
                  <h3 className="text-xl font-display font-bold">{selectedMentor.name}</h3>
                  <p className="text-sm text-muted-foreground">{selectedMentor.title} at {selectedMentor.company}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-4 h-4 text-accent fill-accent" />
                    <span className="text-sm font-semibold text-accent">{selectedMentor.rating}</span>
                    <span className="text-sm text-muted-foreground">({selectedMentor.reviewCount} reviews)</span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">{selectedMentor.bio}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedMentor.expertise.map((e) => (
                  <span key={e} className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs">{e}</span>
                ))}
              </div>
              <div className="flex gap-6 text-sm text-muted-foreground mb-6">
                <span>{selectedMentor.yearsExperience} years experience</span>
                <span>{selectedMentor.menteesCount} mentees</span>
              </div>

              {/* Mock reviews */}
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Reviews</h4>
              <div className="space-y-3 mb-6">
                {["Great mentor — helped me transition into product management.", "Incredibly insightful and generous with their time.", "Exactly the guidance I needed for my career switch."].map((review, i) => (
                  <div key={i} className="glass rounded-lg p-3">
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, j) => <Star key={j} className="w-3 h-3 text-accent fill-accent" />)}
                    </div>
                    <p className="text-xs text-muted-foreground">{review}</p>
                  </div>
                ))}
              </div>

              <button className="w-full py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all glow-amber">
                Request Mentorship
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <BiznetFooter />
    </div>
  );
};

export default MentorshipPage;
