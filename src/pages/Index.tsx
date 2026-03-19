import BiznetNavbar from "@/components/biznet/BiznetNavbar";
import HeroSection from "@/components/biznet/HeroSection";
import FeaturedEvents from "@/components/biznet/FeaturedEvents";
import HowItWorks from "@/components/biznet/HowItWorks";
import StatsBar from "@/components/biznet/StatsBar";
import Testimonials from "@/components/biznet/Testimonials";
import CTASection from "@/components/biznet/CTASection";
import BiznetFooter from "@/components/biznet/BiznetFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <BiznetNavbar />
      <main>
        <HeroSection />
        <StatsBar />
        <HowItWorks />
        <FeaturedEvents />
        <Testimonials />
        <CTASection />
        <BiznetFooter />
      </main>
    </div>
  );
};

export default Index;
