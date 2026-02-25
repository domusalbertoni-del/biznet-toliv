import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
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
      <Sidebar />
      <main className="lg:pl-56 pt-14">
        <HeroSection />
        <PopularEvents />
        <FeaturedArtists />
        <AppFeatures />
        <OrganizerCTA />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
