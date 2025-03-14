
import { useIsMobile } from "@/hooks/use-mobile";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import Stats from "@/components/landing/Stats";
import Download from "@/components/landing/Download";
import Footer from "@/components/landing/Footer";

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#0f0f1a] to-[#1a1a2e] text-white overflow-hidden">
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
      <Download />
      <Footer />
    </div>
  );
};

export default Index;
