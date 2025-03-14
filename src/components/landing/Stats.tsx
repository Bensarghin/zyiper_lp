
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const statsSection = document.getElementById("stats-section");
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => {
      if (statsSection) {
        observer.unobserve(statsSection);
      }
    };
  }, []);

  const handleShowDetails = () => {
    toast({
      title: "Feature Overview",
      description: "Detailed analytics coming soon in our app dashboard!",
    });
  };

  return (
    <section 
      id="stats-section" 
      className="py-16 overflow-hidden relative"
      style={{
        background: "linear-gradient(to right, #7e22ce, #c026d3)",
        borderRadius: "0"
      }}
    >
      {/* Abstract shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-white"></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Growing Faster Every Day
          </h2>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto">
            Join our global community of creators and viewers sharing amazing moments
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {[
            { number: "100M+", label: "Downloads", icon: "📱" },
            { number: "150+", label: "Countries", icon: "🌎" },
            { number: "50M+", label: "Active Users", icon: "👥" },
            { number: "1B+", label: "Videos Created", icon: "🎬" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center transform transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-white">{stat.number}</div>
              <div className="text-purple-200">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            onClick={handleShowDetails}
            variant="outline" 
            className="bg-white/10 text-white border-white/20 hover:bg-white/20"
          >
            See Detailed Stats
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Stats;
