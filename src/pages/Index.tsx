import BiznetNavbar from "@/components/biznet/BiznetNavbar";
import HeroSection from "@/components/biznet/HeroSection";
import ProgramSection from "@/components/biznet/ProgramSection";
import PerksSection from "@/components/biznet/PerksSection";
import GlobalSection from "@/components/biznet/GlobalSection";
import SpeakersSection from "@/components/biznet/SpeakersSection";
import Testimonials from "@/components/biznet/Testimonials";
import PortfolioSection from "@/components/biznet/PortfolioSection";
import FAQSection from "@/components/biznet/FAQSection";
import BiznetFooter from "@/components/biznet/BiznetFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <BiznetNavbar />
      <main>
        <HeroSection />
        <ProgramSection />
        <PerksSection />
        <GlobalSection />
        <SpeakersSection />
        <Testimonials />
        <PortfolioSection />
        <FAQSection />
      </main>
      <BiznetFooter />
    </div>
  );
};

export default Index;
