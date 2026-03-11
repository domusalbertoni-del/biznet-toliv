import { useState } from "react";
import { Search, Send, User, MoreVertical } from "lucide-react";
import { motion } from "framer-motion";
import BiznetNavbar from "@/components/biznet/BiznetNavbar";
import { people } from "@/data/biznetData";

interface Message {
  id: string;
  text: string;
  isOwn: boolean;
  time: string;
}

interface Conversation {
  id: string;
  person: typeof people[0];
  messages: Message[];
  lastTime: string;
  unread: boolean;
}

const mockConversations: Conversation[] = people.slice(0, 8).map((person, i) => ({
  id: `conv-${i}`,
  person,
  lastTime: ["2m ago", "15m ago", "1h ago", "3h ago", "Yesterday", "Yesterday", "2 days ago", "1 week ago"][i],
  unread: i < 2,
  messages: [
    { id: `m${i}-1`, text: `Hi! Great connecting at the ${["AI Summit", "Product Meetup", "FinTech Workshop", "Leadership Conference", "Hackathon", "SaaS Masterclass", "Data Summit", "Networking Night"][i]}.`, isOwn: false, time: "10:00 AM" },
    { id: `m${i}-2`, text: "Likewise! Really enjoyed your talk on the panel.", isOwn: true, time: "10:05 AM" },
    { id: `m${i}-3`, text: "Thanks! Would love to continue our conversation about potential collaboration.", isOwn: false, time: "10:12 AM" },
    { id: `m${i}-4`, text: "Absolutely. Are you free for a coffee chat next week?", isOwn: true, time: "10:15 AM" },
    { id: `m${i}-5`, text: "That works! How about Tuesday at 2pm?", isOwn: false, time: "10:20 AM" },
    ...(i === 0 ? [
      { id: `m${i}-6`, text: "Tuesday at 2pm works perfectly. I'll send a calendar invite.", isOwn: true, time: "10:22 AM" },
      { id: `m${i}-7`, text: "Looking forward to it! 🙌", isOwn: false, time: "10:23 AM" },
    ] : []),
  ],
}));

const MessagesPage = () => {
  const [activeConv, setActiveConv] = useState<string>(mockConversations[0].id);
  const [searchTerm, setSearchTerm] = useState("");
  const [newMsg, setNewMsg] = useState("");
  const [mobileShowChat, setMobileShowChat] = useState(false);

  const conversation = mockConversations.find((c) => c.id === activeConv);
  const filteredConvs = mockConversations.filter((c) =>
    !searchTerm || c.person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectConv = (id: string) => {
    setActiveConv(id);
    setMobileShowChat(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <BiznetNavbar />
      <div className="pt-16 h-screen flex flex-col">
        <div className="flex-1 flex overflow-hidden max-w-7xl mx-auto w-full">
          {/* Conversation List */}
          <div className={`w-full md:w-80 lg:w-96 border-r border-border flex flex-col shrink-0 ${mobileShowChat ? "hidden md:flex" : "flex"}`}>
            <div className="p-4 border-b border-border">
              <h2 className="text-lg font-display font-bold mb-3">Messages</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search conversations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 placeholder:text-muted-foreground"
                />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              {filteredConvs.map((conv) => (
                <button
                  key={conv.id}
                  onClick={() => handleSelectConv(conv.id)}
                  className={`w-full flex items-center gap-3 p-4 text-left transition-colors hover:bg-secondary/30 ${
                    activeConv === conv.id ? "bg-secondary/40 border-l-2 border-l-primary" : "border-l-2 border-l-transparent"
                  }`}
                >
                  <div className="relative">
                    <img src={conv.person.avatar} alt={conv.person.name} className="w-10 h-10 rounded-full border border-border" />
                    {conv.unread && <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-primary border-2 border-background" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <span className={`text-sm truncate ${conv.unread ? "font-semibold" : "font-medium"}`}>{conv.person.name}</span>
                      <span className="text-[10px] text-muted-foreground shrink-0 ml-2">{conv.lastTime}</span>
                    </div>
                    <p className={`text-xs truncate mt-0.5 ${conv.unread ? "text-foreground" : "text-muted-foreground"}`}>
                      {conv.messages[conv.messages.length - 1]?.text}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Chat Panel */}
          <div className={`flex-1 flex flex-col ${!mobileShowChat ? "hidden md:flex" : "flex"}`}>
            {conversation ? (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b border-border flex items-center gap-3">
                  <button onClick={() => setMobileShowChat(false)} className="md:hidden text-muted-foreground hover:text-foreground text-sm mr-1">
                    ←
                  </button>
                  <img src={conversation.person.avatar} alt={conversation.person.name} className="w-9 h-9 rounded-full border border-border" />
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold">{conversation.person.name}</h3>
                    <p className="text-xs text-muted-foreground">{conversation.person.headline}</p>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-green-400 mr-1" />
                  <span className="text-xs text-muted-foreground mr-3">Online</span>
                  <button className="text-muted-foreground hover:text-foreground"><MoreVertical className="w-4 h-4" /></button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {conversation.messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${msg.isOwn ? "justify-end" : "justify-start"}`}
                    >
                      <div className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm ${
                        msg.isOwn
                          ? "bg-primary text-primary-foreground rounded-br-md"
                          : "glass rounded-bl-md"
                      }`}>
                        <p>{msg.text}</p>
                        <p className={`text-[10px] mt-1 ${msg.isOwn ? "text-primary-foreground/60" : "text-muted-foreground"}`}>{msg.time}</p>
                      </div>
                    </motion.div>
                  ))}
                  {/* Typing indicator */}
                  <div className="flex justify-start">
                    <div className="glass rounded-2xl rounded-bl-md px-4 py-3 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-pulse" />
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-pulse" style={{ animationDelay: "0.2s" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-pulse" style={{ animationDelay: "0.4s" }} />
                    </div>
                  </div>
                </div>

                {/* Input */}
                <div className="p-4 border-t border-border flex gap-2">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    value={newMsg}
                    onChange={(e) => setNewMsg(e.target.value)}
                    className="flex-1 px-4 py-2.5 rounded-xl bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 placeholder:text-muted-foreground"
                    onKeyDown={(e) => e.key === "Enter" && setNewMsg("")}
                  />
                  <button className="p-2.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
                  <User className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-display font-semibold mb-2">Select a conversation</h3>
                <p className="text-sm text-muted-foreground mb-6">Choose a conversation from the list or start a new one.</p>
                <button className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all">
                  New Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
