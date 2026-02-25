import { useState } from "react";
import { Search, Compass, Menu, X } from "lucide-react";
import tolivLogo from "@/assets/toliv-logo.jpg";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Explore Events", href: "/explore" },
  { label: "My Tickets", href: "/tickets" },
  { label: "Favorites", href: "/favorites" },
];

const Navbar = () => {
  const [searchFocused, setSearchFocused] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-6 py-3 border-b border-border/40" style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
      <div className="flex items-center gap-2">
        <button
          className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="focus:outline-none"
        >
          <img src={tolivLogo} alt="Toliv" className="h-8 object-contain" />
        </button>
      </div>

      {/* Desktop nav links */}
      <div className="hidden md:flex items-center gap-6 ml-8">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Search bar */}
      <div className="hidden md:flex items-center flex-1 max-w-md mx-6 gap-2">
        <div className={`relative w-full transition-all duration-300 ${searchFocused ? 'scale-[1.02]' : ''}`}>
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search for an event, artist, organizer or city"
            className={`w-full bg-secondary rounded-2xl pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none border transition-all duration-300 ${
              searchFocused
                ? 'border-primary/60 glow-primary'
                : 'border-border/50 focus:border-primary/50'
            }`}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
        </div>
        <Link
          to="/explore"
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-primary/10 border border-primary/20 text-primary text-sm font-medium hover:bg-primary/20 transition-colors whitespace-nowrap"
        >
          <Compass className="w-4 h-4" />
          Explore
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Link to="/organizers" className="hidden md:block text-sm text-muted-foreground hover:text-foreground transition-colors">
          List your event
        </Link>
        <button className="px-5 py-2 rounded-2xl bg-foreground text-background text-sm font-semibold hover:opacity-90 transition-opacity">
          Log in
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border p-4 md:hidden z-50">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/organizers"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              List your event
            </Link>
            <div className="relative mt-2">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search events, artists, cities..."
                className="w-full bg-secondary rounded-2xl pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none border border-border/50"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
