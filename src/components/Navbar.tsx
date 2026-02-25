import { Search, ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="flex items-center gap-2">
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none" className="text-foreground">
          <path d="M16 2L4 8v16l12 6 12-6V8L16 2z" fill="currentColor" opacity="0.9"/>
          <path d="M16 6l-8 4v12l8 4 8-4V10l-8-4z" fill="hsl(var(--background))"/>
          <path d="M16 10l-4 2v8l4 2 4-2v-8l-4-2z" fill="currentColor"/>
        </svg>
        <span className="text-xl font-bold heading-uppercase tracking-wider">Shotgun</span>
      </div>

      <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search for an event, artist, organizer or city"
            className="w-full bg-secondary rounded-full pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none border border-border focus:border-primary/50 transition-colors"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="hidden md:flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors heading-uppercase text-xs tracking-widest">
          Explore
          <ChevronDown className="w-4 h-4" />
        </button>
        <a href="#" className="hidden md:block text-sm text-foreground hover:text-primary transition-colors">
          I'm an organizer
        </a>
        <button className="px-4 py-2 rounded-full bg-secondary text-foreground text-sm font-medium hover:bg-accent transition-colors">
          Log in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
