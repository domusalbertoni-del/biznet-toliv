import { useState } from "react";
import { Search, Compass, Menu, X, ChevronDown } from "lucide-react";
import tolivLogo from "@/assets/toliv-logo.jpg";
import { Link } from "react-router-dom";
import { useLang } from "@/contexts/LangContext";

const Navbar = () => {
  const [searchFocused, setSearchFocused] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  const navLinks = [
    { label: t.exploreEvents, href: "/explore" },
    { label: t.myTickets, href: "/tickets" },
    { label: t.favorites, href: "/favorites" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-6 py-3 border-b border-border/40" style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
      <div className="flex items-center gap-3">
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

        {/* Language selector */}
        <div className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-secondary/60 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            {lang === "en" ? "EN" : "ES"}
            <ChevronDown className={`w-3 h-3 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
          </button>
          {langOpen && (
            <div className="absolute top-full mt-1 left-0 bg-card border border-border rounded-xl shadow-xl z-50 py-1 min-w-[100px]">
              {[
                { code: "en" as const, label: "English" },
                { code: "es" as const, label: "Español" },
              ].map((l) => (
                <button
                  key={l.code}
                  onClick={() => { setLang(l.code); setLangOpen(false); }}
                  className={`w-full text-left px-3 py-1.5 text-xs hover:bg-secondary transition-colors ${lang === l.code ? 'text-primary font-semibold' : 'text-foreground'}`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          )}
        </div>
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
            placeholder={t.searchPlaceholder}
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
          {t.explore}
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Link to="/organizers" className="hidden md:block text-sm text-muted-foreground hover:text-foreground transition-colors">
          {t.listYourEvent}
        </Link>
        <button className="px-5 py-2 rounded-2xl bg-foreground text-background text-sm font-semibold hover:opacity-90 transition-opacity">
          {t.logIn}
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
              {t.listYourEvent}
            </Link>
            <div className="relative mt-2">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder={t.searchMobile}
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
