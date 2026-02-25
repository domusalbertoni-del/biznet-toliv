import { Home, Search, Ticket, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLang } from "@/contexts/LangContext";

const MobileBottomNav = () => {
  const location = useLocation();
  const { t } = useLang();

  const tabs = [
    { icon: Home, label: t.home, href: "/" },
    { icon: Search, label: t.search, href: "/explore" },
    { icon: Ticket, label: t.tickets, href: "/tickets" },
    { icon: User, label: t.account, href: "/account" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden items-center justify-around bg-background/95 backdrop-blur-xl border-t border-border py-2 px-2">
      {tabs.map((tab) => {
        const isActive = location.pathname === tab.href;
        return (
          <Link key={tab.label} to={tab.href} className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl transition-colors ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
            <tab.icon className="w-5 h-5" />
            <span className="text-[10px] font-medium">{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default MobileBottomNav;
