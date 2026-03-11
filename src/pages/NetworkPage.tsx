import { useState } from "react";
import { Search, UserPlus, MessageSquare, Check, X } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BiznetNavbar from "@/components/biznet/BiznetNavbar";
import BiznetFooter from "@/components/biznet/BiznetFooter";
import { people } from "@/data/biznetData";

const industries = ["All", "Tech", "Finance", "FinTech", "Design", "Marketing", "Consulting"];
const roles = ["All Roles", "C-Level", "Manager", "Engineer", "Student"];

const NetworkPage = () => {
  const [activeTab, setActiveTab] = useState<"discover" | "connections" | "pending">("discover");
  const [search, setSearch] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [selectedRole, setSelectedRole] = useState("All Roles");
  const [connectionStatus, setConnectionStatus] = useState<Record<string, "none" | "pending" | "connected">>(() => {
    const init: Record<string, string> = {};
    people.forEach((p, i) => { init[p.id] = i < 5 ? "connected" : "none"; });
    return init as Record<string, "none" | "pending" | "connected">;
  });

  const myConnections = people.filter((p) => connectionStatus[p.id] === "connected");
  const pendingRequests = people.slice(10, 13);

  const filtered = people.filter((p) => {
    if (connectionStatus[p.id] === "connected") return false;
    const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.company.toLowerCase().includes(search.toLowerCase());
    const matchIndustry = selectedIndustry === "All" || p.industry === selectedIndustry;
    const matchRole = selectedRole === "All Roles" || p.role === selectedRole;
    return matchSearch && matchIndustry && matchRole;
  });

  const handleConnect = (id: string) => {
    setConnectionStatus((prev) => ({ ...prev, [id]: prev[id] === "pending" ? "none" : "pending" }));
  };

  const tabs = [
    { key: "discover" as const, label: "Discover" },
    { key: "connections" as const, label: `My Connections (${myConnections.length})` },
    { key: "pending" as const, label: "Pending Requests" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <BiznetNavbar />
      <main className="pt-24 pb-20 max-w-7xl mx-auto px-4 md:px-8">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-display font-bold mb-2">
          Your Network
        </motion.h1>
        <p className="text-muted-foreground text-lg mb-8">Discover professionals, connect, and grow your circle.</p>

        {/* Tabs */}
        <div className="flex gap-1 border-b border-border mb-8 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-3 text-sm font-medium whitespace-nowrap transition-colors relative ${
                activeTab === tab.key ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
              {activeTab === tab.key && <motion.div layoutId="network-tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />}
            </button>
          ))}
        </div>

        {/* Discover Tab */}
        {activeTab === "discover" && (
          <div>
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search by name or company..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 placeholder:text-muted-foreground"
                />
              </div>
              <div className="flex gap-2">
                {industries.map((ind) => (
                  <button
                    key={ind}
                    onClick={() => setSelectedIndustry(ind)}
                    className={`px-3 py-2 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                      selectedIndustry === ind ? "bg-primary text-primary-foreground" : "bg-secondary/50 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {ind}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex gap-2 mb-8">
              {roles.map((r) => (
                <button
                  key={r}
                  onClick={() => setSelectedRole(r)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    selectedRole === r ? "bg-accent text-accent-foreground" : "bg-secondary/50 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {filtered.map((person, i) => (
                <motion.div
                  key={person.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className="glass rounded-xl p-5 text-center card-hover group"
                >
                  <img src={person.avatar} alt={person.name} className="w-16 h-16 rounded-full mx-auto mb-3 border-2 border-border" />
                  <h3 className="font-display font-semibold text-sm">{person.name}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{person.headline}</p>
                  <span className="inline-block mt-2 px-2 py-0.5 rounded-full bg-secondary text-[10px] uppercase tracking-wider text-muted-foreground">
                    {person.industry}
                  </span>
                  <p className="text-xs text-muted-foreground mt-2">{person.mutualConnections} mutual connections</p>
                  <div className="flex flex-wrap gap-1 justify-center mt-3">
                    {person.expertise.slice(0, 2).map((e) => (
                      <span key={e} className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px]">{e}</span>
                    ))}
                  </div>
                  <button
                    onClick={() => handleConnect(person.id)}
                    className={`mt-4 w-full py-2 rounded-lg text-xs font-semibold transition-all ${
                      connectionStatus[person.id] === "pending"
                        ? "bg-secondary text-muted-foreground"
                        : "bg-primary/10 text-primary hover:bg-primary/20"
                    }`}
                  >
                    {connectionStatus[person.id] === "pending" ? "Pending" : "Connect"}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Connections Tab */}
        {activeTab === "connections" && (
          <div className="space-y-3">
            {myConnections.map((person) => (
              <div key={person.id} className="glass rounded-xl p-4 flex items-center gap-4">
                <img src={person.avatar} alt={person.name} className="w-12 h-12 rounded-full border border-border" />
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm">{person.name}</h4>
                  <p className="text-xs text-muted-foreground truncate">{person.headline}</p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <Link to="/messages" className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 transition-colors flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5" /> Message
                  </Link>
                  <Link to={`/profile/${person.id}`} className="px-4 py-2 rounded-lg border border-border text-xs font-medium hover:bg-secondary transition-colors">
                    View Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pending Tab */}
        {activeTab === "pending" && (
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Incoming Requests</h3>
            {pendingRequests.map((person) => (
              <div key={person.id} className="glass rounded-xl p-4 flex items-center gap-4">
                <img src={person.avatar} alt={person.name} className="w-12 h-12 rounded-full border border-border" />
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm">{person.name}</h4>
                  <p className="text-xs text-muted-foreground truncate">{person.headline}</p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                    <Check className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-lg bg-secondary text-muted-foreground hover:bg-destructive/20 hover:text-destructive transition-colors">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <BiznetFooter />
    </div>
  );
};

export default NetworkPage;
