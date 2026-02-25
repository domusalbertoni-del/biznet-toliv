import { useEffect, useState } from "react";
import { Apple, Play } from "lucide-react";
import appFeed from "@/assets/app-feed.png";
import appMatchMode from "@/assets/app-match-mode.png";
import appWallet from "@/assets/app-wallet.png";
import { useLang } from "@/contexts/LangContext";

const HeroSection = () => {
  const { t } = useLang();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative py-8 lg:py-10 overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at top left, rgba(139, 92, 246, 0.4), transparent 60%), radial-gradient(ellipse at bottom right, rgba(236, 72, 153, 0.3), transparent 60%), #0a0a0a' }} />
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-6 px-6 lg:px-12 max-w-7xl mx-auto">
        <div
          className="flex-1 max-w-xl transition-all duration-1000 ease-out"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {t.heroBadge}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl heading-uppercase leading-[0.92] mb-4">
            {t.heroTitle1}{" "}
            <span className="text-gradient">{t.heroTitle2}</span>{" "}
            <span className="block mt-1">{t.heroTitle3}</span>
          </h1>
          <p className="text-base text-muted-foreground mb-5 max-w-md">
            {t.heroSubtitle}
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-foreground text-background font-medium text-sm hover:opacity-90 transition-opacity">
              <Apple className="w-5 h-5" />
              {t.appStore}
            </a>
            <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors">
              <Play className="w-5 h-5 fill-current" />
              {t.playStore}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-lg font-bold">4.9</span>
            <div className="flex gap-0.5 text-primary">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M10 1l2.39 4.84L18 6.71l-4 3.9.94 5.5L10 13.38 5.06 16.1l.94-5.5-4-3.9 5.61-.87L10 1z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">{t.appRatings}</span>
          </div>
        </div>

        <div
          className="flex-1 flex justify-center lg:justify-end transition-all ease-out"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(80px)',
            transitionDuration: '1.2s',
            transitionDelay: '0.2s',
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <div className="relative w-[320px] md:w-[400px] lg:w-[480px] h-[360px] md:h-[440px] lg:h-[520px]">
            {/* Left phone */}
            <img
              src={appMatchMode}
              alt="Match Mode screen"
              className="absolute w-[160px] md:w-[200px] lg:w-[230px] rounded-[2rem] shadow-2xl left-0 top-1/2 -translate-y-1/2 -rotate-6 z-10 opacity-90"
            />
            {/* Center phone */}
            <img
              src={appFeed}
              alt="Feed screen"
              className="absolute w-[180px] md:w-[220px] lg:w-[260px] rounded-[2.5rem] shadow-2xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            />
            {/* Right phone */}
            <img
              src={appWallet}
              alt="Wallet screen"
              className="absolute w-[160px] md:w-[200px] lg:w-[230px] rounded-[2rem] shadow-2xl right-0 top-1/2 -translate-y-1/2 rotate-6 z-10 opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
