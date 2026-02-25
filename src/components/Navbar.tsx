import { Search } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 bg-background/90 backdrop-blur-xl border-b border-border/40">
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold">
          shotliv<span className="text-gradient">.</span>events
        </span>
      </div>

      <div className="hidden md:flex items-center flex-1 max-w-lg mx-8">
        <div className="relative w-full">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search events, artists, cities..."
            className="w-full bg-secondary rounded-2xl pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none border border-border/50 focus:border-primary/50 focus:glow-primary transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <a href="#" className="hidden md:block text-sm text-muted-foreground hover:text-foreground transition-colors">
          List your event
        </a>
        <button className="px-5 py-2 rounded-2xl bg-foreground text-background text-sm font-semibold hover:opacity-90 transition-opacity">
          Log in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
