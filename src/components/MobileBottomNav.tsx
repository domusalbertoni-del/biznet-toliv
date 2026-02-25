import { Home, Search, Ticket, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const tabs = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Search, label: "Search", href: "/explore" },
  { icon: Ticket, label: "Tickets", href: "/tickets" },
  { icon: User, label: "Account", href: "/account" },
];

const MobileBottomNav = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden items-center justify-around bg-background/95 backdrop-blur-xl border-t border-border py-2 px-2">
      {tabs.map((tab) => {
        const isActive = location.pathname === tab.href;
        return (
          <Link
            key={tab.label}
            to={tab.href}
            className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl transition-colors ${
              isActive
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <tab.icon className="w-5 h-5" />
            <span className="text-[10px] font-medium">{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default MobileBottomNav;
