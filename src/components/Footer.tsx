import { Link } from "react-router-dom";
import { useLang } from "@/contexts/LangContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Footer = () => {
  const { t } = useLang();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.05 });

  return (
    <footer className="border-t border-border py-10 mt-8" ref={ref}>
      <div className={`px-6 lg:px-12 max-w-7xl mx-auto reveal ${isVisible ? 'visible' : ''}`}>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          <div>
            <h4 className="font-bold text-xs heading-uppercase tracking-widest text-muted-foreground mb-4">{t.forPartygoers}</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.downloadTheApp}</a></li>
              <li><Link to="/explore" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.allEvents}</Link></li>
              <li><Link to="/cities" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.allCities}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs heading-uppercase tracking-widest text-muted-foreground mb-4">{t.forOrganizers}</h4>
            <ul className="space-y-2.5">
              <li><a href="https://partner.toliv.com/event/new" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.sellTickets}</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.pricing}</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.featuresLabel}</a></li>
              <li><Link to="/artists" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.tolivForArtists}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs heading-uppercase tracking-widest text-muted-foreground mb-4">{t.company}</h4>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.aboutUs}</Link></li>
              <li><Link to="/careers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.hiring}</Link></li>
              <li><Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.blog}</Link></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.pressKit}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs heading-uppercase tracking-widest text-muted-foreground mb-4">{t.popularCities}</h4>
            <ul className="space-y-2.5">
              <li><Link to="/events/santiago" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Santiago</Link></li>
              <li><Link to="/events/valparaiso" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Valparaíso</Link></li>
              <li><Link to="/events/new-york" className="text-sm text-muted-foreground hover:text-foreground transition-colors">New York</Link></li>
              <li><Link to="/events/london" className="text-sm text-muted-foreground hover:text-foreground transition-colors">London</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs heading-uppercase tracking-widest text-muted-foreground mb-4">{t.legal}</h4>
            <ul className="space-y-2.5">
              <li><Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.privacyPolicy}</Link></li>
              <li><Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.termsOfService}</Link></li>
              <li><Link to="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.cookiePolicy}</Link></li>
              <li><Link to="/consumer-info" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.consumerInfo}</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-6 border-t border-border">
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground mr-2 font-semibold uppercase tracking-widest">{t.weAreSocial}</span>
            {[
              { label: "TikTok", href: "https://tiktok.com/@toliv", path: "M12.5 2C12.5 2 14 6.5 18 7V10C16 10 14.5 9 14.5 9V15C14.5 18.3 11.8 21 8.5 21C5.2 21 2.5 18.3 2.5 15S5.2 9 8.5 9V12C6.8 12 5.5 13.3 5.5 15S6.8 18 8.5 18C10.2 18 11.5 16.7 11.5 15V2H12.5Z" },
              { label: "Instagram", href: "https://instagram.com/toliv", path: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5M12 7a5 5 0 110 10 5 5 0 010-10m0 2a3 3 0 100 6 3 3 0 000-6z" },
              { label: "Spotify", href: "https://open.spotify.com/user/toliv", path: "M12 2a10 10 0 100 20 10 10 0 000-20zm4.5 14.5c-.2.3-.5.4-.8.2-2.2-1.3-5-1.6-8.3-.9-.3.1-.6-.1-.7-.4-.1-.3.1-.6.4-.7 3.6-.8 6.7-.5 9.2 1 .3.2.4.5.2.8zm1.2-2.7c-.2.4-.7.5-1 .3-2.5-1.5-6.3-2-9.3-1.1-.4.1-.8-.1-.9-.5-.1-.4.1-.8.5-.9 3.4-1 7.6-.5 10.5 1.2.3.2.4.7.2 1zm.1-2.8C14.7 9.2 9 9 5.8 10c-.5.1-1-.1-1.1-.6-.2-.5.1-1 .6-1.2C8.9 7 15.1 7.2 18.6 9.2c.4.3.6.8.3 1.3-.2.4-.8.6-1.1.5z" },
              { label: "LinkedIn", href: "https://linkedin.com/company/toliv", path: "M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" },
            ].map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d={social.path} /></svg>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-border">
          <span className="font-bold text-sm">toliv<span className="text-gradient">.</span>events</span>
          <p className="text-xs text-muted-foreground">{t.allRightsReserved}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
