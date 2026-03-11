import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Users, Calendar, Tag, MessageSquare, Send, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BiznetNavbar from "@/components/biznet/BiznetNavbar";
import BiznetFooter from "@/components/biznet/BiznetFooter";
import { events, people } from "@/data/biznetData";

const mockAgenda = [
  { time: "09:00", title: "Registration & Coffee", speaker: "", duration: "30 min" },
  { time: "09:30", title: "Opening Keynote", speaker: "Sarah Chen", duration: "45 min" },
  { time: "10:15", title: "Panel: Future Trends", speaker: "David Kim, Priya Patel, James O'Connor", duration: "60 min" },
  { time: "11:15", title: "Networking Break", speaker: "", duration: "30 min" },
  { time: "11:45", title: "Workshop Session A", speaker: "Marcus Johnson", duration: "90 min" },
  { time: "13:15", title: "Lunch & Roundtable Discussions", speaker: "", duration: "60 min" },
  { time: "14:15", title: "Deep Dive: Implementation Strategies", speaker: "Raj Mehta", duration: "60 min" },
  { time: "15:15", title: "Closing & Awards", speaker: "Elena Rodriguez", duration: "30 min" },
];

const mockSpeakers = people.slice(0, 4);
const mockAttendees = people;
const mockChat = [
  { id: "c1", name: "Alex Petrov", avatar: people[14]?.avatar, text: "Excited for this event! Anyone else attending from New York?", time: "2 hours ago" },
  { id: "c2", name: "Sofia Andersson", avatar: people[9]?.avatar, text: "Can't wait for the keynote. Sarah Chen is always incredible.", time: "1 hour ago" },
  { id: "c3", name: "Lucas Weber", avatar: people[8]?.avatar, text: "Does anyone know if there's a Slack channel for networking during the event?", time: "45 min ago" },
  { id: "c4", name: "Mia Johansson", avatar: people[13]?.avatar, text: "I'll be wearing a blue Notion t-shirt — come say hi! 👋", time: "20 min ago" },
  { id: "c5", name: "Kwame Asante", avatar: people[12]?.avatar, text: "First time at this event. Any tips?", time: "5 min ago" },
];

const tabs = ["About", "Agenda", "Speakers", "Attendees", "Chat"];

const EventDetailPage = () => {
  const { id } = useParams();
  const event = events.find((e) => e.id === id);
  const [activeTab, setActiveTab] = useState("About");
  const [ticketModal, setTicketModal] = useState(false);
  const [ticketType, setTicketType] = useState("general");
  const [qty, setQty] = useState(1);
  const [chatMsg, setChatMsg] = useState("");
  const [connected, setConnected] = useState<Set<string>>(new Set());

  if (!event) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display font-bold mb-2">Event not found</h1>
          <Link to="/events" className="text-primary hover:underline">← Back to events</Link>
        </div>
      </div>
    );
  }

  const ticketPrices: Record<string, number> = {
    general: event.price || 0,
    vip: (event.price || 0) * 2.5 || 99,
    student: Math.round((event.price || 0) * 0.5) || 0,
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <BiznetNavbar />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px]">
        <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 md:px-8 pb-8">
          <Link to="/events" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Events
          </Link>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold uppercase tracking-wider mb-3">
                {event.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-display font-bold mb-2">{event.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{new Date(event.date).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{event.time}</span>
                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" />{event.location}</span>
                <span className="flex items-center gap-1.5"><Users className="w-4 h-4" />{event.attendeeCount} attending</span>
              </div>
            </div>
            <button
              onClick={() => setTicketModal(true)}
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all glow-blue whitespace-nowrap"
            >
              {event.price ? `Get Ticket — $${event.price}` : "Register Free"}
            </button>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mt-8">
        <div className="flex gap-1 border-b border-border overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-3 text-sm font-medium whitespace-nowrap transition-colors relative ${
                activeTab === tab ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div layoutId="tab-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          ))}
        </div>

        <div className="py-8">
          {activeTab === "About" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                <h2 className="text-2xl font-display font-bold">About This Event</h2>
                <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                <p className="text-muted-foreground leading-relaxed">
                  Join industry leaders and innovators for an immersive experience featuring keynote presentations,
                  interactive workshops, and unparalleled networking opportunities. Whether you're a seasoned professional
                  or just starting your career, this event offers valuable insights and connections.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Don't miss the chance to engage with thought leaders, participate in hands-on sessions,
                  and expand your professional network in a dynamic, collaborative environment.
                </p>
              </div>
              <div className="glass rounded-xl p-6 space-y-4 h-fit">
                <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-muted-foreground">Event Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">Date</span><span>{new Date(event.date).toLocaleDateString()}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Time</span><span>{event.time}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Venue</span><span className="text-right max-w-[180px]">{event.location}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">City</span><span>{event.city}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Price</span><span>{event.price ? `$${event.price}` : "Free"}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Attendees</span><span>{event.attendeeCount}</span></div>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {event.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground">
                      <Tag className="w-3 h-3 inline mr-1" />{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "Agenda" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-2xl space-y-1">
              <h2 className="text-2xl font-display font-bold mb-6">Event Agenda</h2>
              {mockAgenda.map((item, i) => (
                <div key={i} className="flex gap-4 p-4 glass rounded-xl">
                  <div className="text-primary font-mono font-semibold text-sm w-14 shrink-0 pt-0.5">{item.time}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{item.title}</h4>
                    {item.speaker && <p className="text-xs text-muted-foreground mt-0.5">{item.speaker}</p>}
                  </div>
                  <span className="text-xs text-muted-foreground shrink-0">{item.duration}</span>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "Speakers" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h2 className="text-2xl font-display font-bold mb-6">Speakers</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {mockSpeakers.map((s) => (
                  <div key={s.id} className="glass rounded-xl p-6 text-center card-hover">
                    <img src={s.avatar} alt={s.name} className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-border" />
                    <h4 className="font-display font-semibold">{s.name}</h4>
                    <p className="text-sm text-muted-foreground">{s.headline}</p>
                    <p className="text-xs text-primary mt-1">{s.company}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "Attendees" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h2 className="text-2xl font-display font-bold mb-6">Attendees ({mockAttendees.length})</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {mockAttendees.map((a) => (
                  <div key={a.id} className="glass rounded-xl p-4 flex items-center gap-3">
                    <img src={a.avatar} alt={a.name} className="w-10 h-10 rounded-full border border-border" />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm truncate">{a.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{a.headline}</p>
                    </div>
                    <button
                      onClick={() => setConnected((prev) => { const n = new Set(prev); n.has(a.id) ? n.delete(a.id) : n.add(a.id); return n; })}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium shrink-0 transition-all ${
                        connected.has(a.id) ? "bg-secondary text-muted-foreground" : "bg-primary/10 text-primary hover:bg-primary/20"
                      }`}
                    >
                      {connected.has(a.id) ? "Pending" : "Connect"}
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "Chat" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-2xl">
              <h2 className="text-2xl font-display font-bold mb-6">Event Chat</h2>
              <div className="glass rounded-xl overflow-hidden">
                <div className="p-4 space-y-4 max-h-[400px] overflow-y-auto">
                  {mockChat.map((msg) => (
                    <div key={msg.id} className="flex gap-3">
                      <img src={msg.avatar} alt={msg.name} className="w-8 h-8 rounded-full border border-border shrink-0" />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold">{msg.name}</span>
                          <span className="text-xs text-muted-foreground">{msg.time}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-0.5">{msg.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border p-3 flex gap-2">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    value={chatMsg}
                    onChange={(e) => setChatMsg(e.target.value)}
                    className="flex-1 bg-secondary/50 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 placeholder:text-muted-foreground"
                  />
                  <button className="p-2.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Ticket Modal */}
      <AnimatePresence>
        {ticketModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setTicketModal(false)}
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-xl" />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative glass-strong rounded-2xl p-8 max-w-md w-full"
            >
              <button onClick={() => setTicketModal(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-xl font-display font-bold mb-1">{event.title}</h3>
              <p className="text-sm text-muted-foreground mb-6">{new Date(event.date).toLocaleDateString()} · {event.location}</p>

              <div className="space-y-3 mb-6">
                <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Ticket Type</label>
                <div className="grid grid-cols-3 gap-2">
                  {(["general", "vip", "student"] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => setTicketType(t)}
                      className={`p-3 rounded-lg text-center text-sm font-medium transition-all border ${
                        ticketType === t ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:border-primary/30"
                      }`}
                    >
                      <div className="capitalize">{t}</div>
                      <div className="text-xs mt-1">{ticketPrices[t] ? `$${ticketPrices[t]}` : "Free"}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between mb-6">
                <span className="text-sm text-muted-foreground">Quantity</span>
                <div className="flex items-center gap-3">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-sm hover:bg-secondary/80">−</button>
                  <span className="w-8 text-center font-semibold">{qty}</span>
                  <button onClick={() => setQty(Math.min(10, qty + 1))} className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-sm hover:bg-secondary/80">+</button>
                </div>
              </div>

              <div className="flex items-center justify-between mb-6 py-3 border-t border-border">
                <span className="font-semibold">Total</span>
                <span className="text-xl font-display font-bold">{ticketPrices[ticketType] * qty ? `$${ticketPrices[ticketType] * qty}` : "Free"}</span>
              </div>

              <button className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all glow-blue">
                {ticketPrices[ticketType] * qty ? "Purchase Ticket" : "Register Now"}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <BiznetFooter />
    </div>
  );
};

export default EventDetailPage;
