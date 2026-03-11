import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

const BiznetNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Events", href: "/events" },
    { label: "Network", href: "/network" },
    { label: "Mentorship", href: "/mentorship" },
    { label: "Messages", href: "/messages" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 font-display font-bold text-xl tracking-tight">
          Biznet<span className="text-primary">.events</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <Link
            to="/signin"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all glow-blue"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border p-6"
          >
            <div className="flex flex-col gap-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              <div className="flex gap-3 mt-4">
                <button
                  onClick={toggleTheme}
                  className="px-4 py-2.5 rounded-lg border border-border text-sm hover:bg-secondary transition-colors"
                >
                  {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
                <Link
                  to="/signin"
                  className="flex-1 text-center px-4 py-2.5 rounded-lg border border-border text-sm hover:bg-secondary transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="flex-1 text-center px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold"
                  onClick={() => setMobileOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default BiznetNavbar;
