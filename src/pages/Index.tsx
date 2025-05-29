import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
