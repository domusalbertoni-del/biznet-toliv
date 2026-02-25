import { Home, Ticket, Heart, Compass, Sparkles, Users, HelpCircle } from "lucide-react";

const sidebarLinks = [
  { icon: Home, label: "Home", active: true },
  { icon: Ticket, label: "My tickets" },
  { icon: Heart, label: "My favorites" },
  { icon: Compass, label: "Explore Events" },
  { icon: Sparkles, label: "Social", badge: "🪩" },
  { icon: Users, label: "Partner Access" },
  { icon: HelpCircle, label: "Help Center" },
];

const Sidebar = () => {
  return (
    <aside className="hidden lg:flex flex-col fixed left-0 top-0 bottom-0 w-56 bg-sidebar border-r border-sidebar-border z-40 pt-20 pb-6 px-3">
      <nav className="flex flex-col gap-1">
        {sidebarLinks.map((link) => (
          <a
            key={link.label}
            href="#"
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors ${
              link.active
                ? "bg-sidebar-accent text-sidebar-accent-foreground font-semibold"
                : "text-sidebar-foreground hover:text-sidebar-accent-foreground hover:bg-sidebar-accent/50"
            }`}
          >
            <link.icon className="w-4.5 h-4.5 flex-shrink-0" />
            <span>{link.label}</span>
            {link.badge && <span className="ml-auto text-xs">{link.badge}</span>}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
