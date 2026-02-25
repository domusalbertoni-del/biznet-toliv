import Navbar from "@/components/Navbar";
import MobileBottomNav from "@/components/MobileBottomNav";
import HeroSection from "@/components/HeroSection";
import PopularEvents from "@/components/PopularEvents";
import FeaturedArtists from "@/components/FeaturedArtists";
import AppFeatures from "@/components/AppFeatures";
import OrganizerCTA from "@/components/OrganizerCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-14 pb-16 md:pb-0">
        <HeroSection />
        <PopularEvents />
        <FeaturedArtists />
        <AppFeatures />
        <OrganizerCTA />
        <Footer />
      </main>
      <MobileBottomNav />
    </div>
  );
};

export default Index;
