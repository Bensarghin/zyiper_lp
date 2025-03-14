
import { useState, useEffect } from "react";

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  
  // Features section data
  const features = [
    {
      title: "Create Short Videos",
      description: "Express yourself with trendy short videos and gain followers",
      icon: "📱"
    },
    {
      title: "Live Streaming",
      description: "Go live and interact with your audience in real-time",
      icon: "🎬"
    },
    {
      title: "Mobile & Desktop",
      description: "Access Zyiper on any device, anywhere, anytime",
      icon: "💻"
    }
  ];

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section id="features" className="bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Amazing Features</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`bg-gray-800 rounded-xl p-8 transition-all duration-500 transform hover:scale-105 ${index === activeFeature ? 'border-2 border-purple-500 shadow-lg shadow-purple-500/20' : 'border border-gray-700'}`}
              onClick={() => setActiveFeature(index)}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
