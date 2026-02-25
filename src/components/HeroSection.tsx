import { Apple, Play } from "lucide-react";
import screenSocial from "@/assets/screen-social.jpg";
import screenEvent from "@/assets/screen-event.png";

const IPhoneFrame = ({
  src,
  alt,
  className = "",
  style,
}: {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <div
    className={`bg-black rounded-[2.8rem] p-[5px] shadow-2xl ${className}`}
    style={style}
  >
    <div className="relative rounded-[2.5rem] overflow-hidden bg-black">
      {/* Dynamic Island */}
      <div className="absolute top-0 left-0 right-0 z-30 flex justify-center pt-2.5">
        <div className="w-[90px] h-[28px] bg-black rounded-full" />
      </div>
      {/* Status bar */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-7 pt-2 text-[10px] text-white/80 font-medium">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
          </svg>
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" />
          </svg>
        </div>
      </div>
      {/* Screenshot */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  </div>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-8">
      {/* Radial gradient background */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at top left, rgba(139, 92, 246, 0.4), transparent 60%), radial-gradient(ellipse at bottom right, rgba(236, 72, 153, 0.3), transparent 60%), #0a0a0a' }} />
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-12 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex-1 max-w-xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Carretes cerca de ti
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl heading-uppercase leading-[0.92] mb-6">
            Encuentra{" "}
            <span className="text-gradient">Carretes</span>{" "}
            <span className="block mt-1">cerca de ti!</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-md">
            Descarga Toliv para encontrar carretes cerca de ti, conectar con nuestros 10k + usuarios y crear eventos!
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-8">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-foreground text-background font-medium text-sm hover:opacity-90 transition-opacity"
            >
              <Apple className="w-5 h-5" />
              App Store
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors"
            >
              <Play className="w-5 h-5 fill-current" />
              Play Store
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
            <span className="text-sm text-muted-foreground">50K+ App ratings</span>
          </div>
        </div>

        {/* Two overlapping iPhone mockups — Shotgun style */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-[340px] h-[480px] md:w-[420px] md:h-[560px]">
            {/* Back phone — rotated, behind */}
            <IPhoneFrame
              src={screenSocial}
              alt="Social feed screen"
              className="absolute left-0 top-10 w-[220px] md:w-[260px] animate-fade-in-up"
              style={{ transform: 'rotate(-6deg)', zIndex: 10, animationDelay: '0.4s' }}
            />
            {/* Front phone — dominant, overlapping */}
            <IPhoneFrame
              src={screenEvent}
              alt="Event detail screen"
              className="absolute right-0 top-0 w-[240px] md:w-[280px] animate-fade-in-up"
              style={{ zIndex: 20, animationDelay: '0.2s' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
