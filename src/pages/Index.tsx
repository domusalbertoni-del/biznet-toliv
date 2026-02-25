import Navbar from "@/components/Navbar";
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
      <HeroSection />
      <PopularEvents />
      <FeaturedArtists />
      <AppFeatures />
      <OrganizerCTA />
      <Footer />
    </div>
  );
};

export default Index;
