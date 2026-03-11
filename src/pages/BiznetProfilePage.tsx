import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { MapPin, Briefcase, Linkedin, Calendar, Star, Users, MessageSquare, UserPlus } from "lucide-react";
import { motion } from "framer-motion";
import BiznetNavbar from "@/components/biznet/BiznetNavbar";
import BiznetFooter from "@/components/biznet/BiznetFooter";
import { people, events, mentors } from "@/data/biznetData";

const BiznetProfilePage = () => {
  const { id } = useParams();
  const person = people.find((p) => p.id === id);
  const mentor = mentors.find((m) => m.name === person?.name);
  const [connected, setConnected] = useState(false);

  if (!person) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display font-bold mb-2">Profile not found</h1>
          <Link to="/network" className="text-primary hover:underline">← Back to Network</Link>
        </div>
      </div>
    );
  }

  const mutualPeople = people.filter((p) => p.id !== person.id).slice(0, 6);
  const attendedEvents = events.slice(0, 4);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <BiznetNavbar />

      {/* Cover + Avatar */}
      <div className="relative h-48 md:h-64 mesh-gradient" />
      <div className="max-w-4xl mx-auto px-4 md:px-8 -mt-16 relative z-10">
        <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
          <img src={person.avatar} alt={person.name} className="w-28 h-28 rounded-full border-4 border-background" />
          <div className="flex-1 pt-4 sm:pt-8">
            <h1 className="text-2xl md:text-3xl font-display font-bold">{person.name}</h1>
            <p className="text-muted-foreground">{person.headline}</p>
            <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{person.location}</span>
              <span className="px-2 py-0.5 rounded-full bg-secondary text-xs uppercase tracking-wider">{person.industry}</span>
            </div>
          </div>
          <div className="flex gap-2 pt-4 sm:pt-8">
            <button
              onClick={() => setConnected(!connected)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 ${
                connected ? "bg-secondary text-muted-foreground" : "bg-primary text-primary-foreground glow-blue"
              }`}
            >
              <UserPlus className="w-4 h-4" /> {connected ? "Connected" : "Connect"}
            </button>
            <Link to="/messages" className="px-5 py-2 rounded-lg border border-border text-sm font-medium hover:bg-secondary transition-colors flex items-center gap-1.5">
              <MessageSquare className="w-4 h-4" /> Message
            </Link>
          </div>
        </div>

        {/* About */}
        <section className="mb-8">
          <h2 className="text-lg font-display font-semibold mb-3">About</h2>
          <p className="text-muted-foreground leading-relaxed">{person.bio}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <div className="glass rounded-lg p-3">
              <p className="text-xs text-muted-foreground">Company</p>
              <p className="text-sm font-semibold flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" />{person.company}</p>
            </div>
            <div className="glass rounded-lg p-3">
              <p className="text-xs text-muted-foreground">Role</p>
              <p className="text-sm font-semibold">{person.role}</p>
            </div>
            <div className="glass rounded-lg p-3">
              <p className="text-xs text-muted-foreground">Industry</p>
              <p className="text-sm font-semibold">{person.industry}</p>
            </div>
            <div className="glass rounded-lg p-3">
              <p className="text-xs text-muted-foreground">Connections</p>
              <p className="text-sm font-semibold">{person.mutualConnections} mutual</p>
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section className="mb-8">
          <h2 className="text-lg font-display font-semibold mb-3">Expertise</h2>
          <div className="flex flex-wrap gap-2">
            {person.expertise.map((e) => (
              <span key={e} className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm">{e}</span>
            ))}
          </div>
        </section>

        {/* Mentorship */}
        {mentor && (
          <section className="mb-8 p-6 rounded-xl bg-accent/5 border border-accent/20">
            <h2 className="text-lg font-display font-semibold mb-3 flex items-center gap-2">
              <Star className="w-5 h-5 text-accent" /> Mentor Profile
            </h2>
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-3">
              <span className="flex items-center gap-1"><Star className="w-4 h-4 text-accent fill-accent" />{mentor.rating} ({mentor.reviewCount} reviews)</span>
              <span>{mentor.yearsExperience} yrs experience</span>
              <span className="flex items-center gap-1"><Users className="w-4 h-4" />{mentor.menteesCount} mentees</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{mentor.bio}</p>
            <button className="px-6 py-2.5 rounded-lg bg-accent text-accent-foreground text-sm font-semibold hover:bg-accent/90 transition-all glow-amber">
              Request Mentorship
            </button>
          </section>
        )}

        {/* Events Attended */}
        <section className="mb-8">
          <h2 className="text-lg font-display font-semibold mb-3">Events Attended</h2>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
            {attendedEvents.map((event) => (
              <Link key={event.id} to={`/events/${event.id}`} className="shrink-0 w-60 glass rounded-xl overflow-hidden card-hover">
                <img src={event.image} alt={event.title} className="w-full h-32 object-cover" />
                <div className="p-3">
                  <p className="text-xs text-primary">{new Date(event.date).toLocaleDateString()}</p>
                  <h4 className="text-sm font-semibold line-clamp-1">{event.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Mutual Connections */}
        <section className="mb-16">
          <h2 className="text-lg font-display font-semibold mb-3">Mutual Connections ({mutualPeople.length})</h2>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
            {mutualPeople.map((p) => (
              <Link key={p.id} to={`/profile/${p.id}`} className="shrink-0 text-center group">
                <img src={p.avatar} alt={p.name} className="w-14 h-14 rounded-full border-2 border-border group-hover:border-primary transition-colors" />
                <p className="text-xs mt-1.5 text-muted-foreground group-hover:text-foreground transition-colors w-16 truncate">{p.name.split(" ")[0]}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <BiznetFooter />
    </div>
  );
};

export default BiznetProfilePage;
