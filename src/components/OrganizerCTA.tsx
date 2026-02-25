import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import dashboardMockup from "@/assets/dashboard-mockup.webp";
import { useLang } from "@/contexts/LangContext";

const OrganizerCTA = () => {
  const { t } = useLang();

  return (
    <section className="py-16">
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-br from-card via-card to-secondary border border-border/50 p-10 md:p-14 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl heading-uppercase mb-4">{t.launchingEvent}</h2>
              <p className="text-base text-muted-foreground mb-8 max-w-md">{t.organizerSubtitle}</p>
              <Link to="/organizers" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl font-semibold hover:opacity-90 transition-opacity text-accent-foreground" style={{ background: 'linear-gradient(135deg, hsl(16, 90%, 55%), hsl(350, 80%, 58%))' }}>
                {t.listMyEvent}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex-1 max-w-lg">
              <img src={dashboardMockup} alt="Event analytics dashboard" className="w-full rounded-xl shadow-2xl border border-border/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizerCTA;
