
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const isMobile = useIsMobile();
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

  const showToast = () => {
    toast({
      title: "Coming Soon!",
      description: "The app will be available for download shortly.",
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#0f0f1a] to-[#1a1a2e] text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full">
        {/* Header/Navigation */}
        <header className="relative z-10 w-full py-4 px-6 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Zyiper
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-purple-400 transition-colors">How It Works</a>
            <a href="#download" className="hover:text-purple-400 transition-colors">Download</a>
          </nav>
          <Button 
            onClick={showToast}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            Download Now
          </Button>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 pt-12 pb-24 md:pt-32 md:pb-40 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Short Videos & Live Streaming App
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Create and share amazing short videos, go live with your audience, and discover trending content. Available on Android & iOS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={showToast}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Download for iOS
              </Button>
              <Button 
                onClick={showToast}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Download for Android
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center relative">
            <div className="relative w-64 h-[500px] rounded-[40px] border-[8px] border-gray-800 overflow-hidden shadow-2xl bg-black">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                alt="Zyiper App Interface" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-pink-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#111827" fillOpacity="1" d="M0,128L48,144C96,160,192,192,288,176C384,160,480,96,576,80C672,64,768,96,864,128C960,160,1056,192,1152,186.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
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

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">How It Works</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-purple-900 rounded-full mb-6 text-2xl">1</div>
              <h3 className="text-xl font-semibold mb-3">Download the App</h3>
              <p className="text-gray-400">Get Zyiper from App Store or Google Play for free</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-purple-900 rounded-full mb-6 text-2xl">2</div>
              <h3 className="text-xl font-semibold mb-3">Create Account</h3>
              <p className="text-gray-400">Sign up with email or connect with social media</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-purple-900 rounded-full mb-6 text-2xl">3</div>
              <h3 className="text-xl font-semibold mb-3">Start Creating</h3>
              <p className="text-gray-400">Make videos, go live, and connect with creators</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-purple-900 to-pink-900 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100M+</div>
              <div className="text-gray-300">Downloads</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
              <div className="text-gray-300">Countries</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50M+</div>
              <div className="text-gray-300">Active Users</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1B+</div>
              <div className="text-gray-300">Videos Created</div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="bg-gray-900 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Download Zyiper Today</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Join millions of creators and viewers in the fastest growing short video platform
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <Button 
              onClick={showToast}
              size="lg" 
              className="bg-black border border-white hover:bg-gray-900 flex items-center gap-2 px-8"
            >
              <div className="text-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-apple"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/><path d="M10 2c1 .5 2 2 2 5"/></svg>
              </div>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </Button>
            
            <Button 
              onClick={showToast}
              size="lg" 
              className="bg-black border border-white hover:bg-gray-900 flex items-center gap-2 px-8"
            >
              <div className="text-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              </div>
              <div className="text-left">
                <div className="text-xs">GET IT ON</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </Button>
          </div>
          
          <div className="relative inline-block">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
              alt="Zyiper Interface" 
              className="rounded-lg shadow-2xl max-w-full md:max-w-2xl mx-auto"
            />
            <div className="absolute -top-5 -right-5 bg-purple-600 text-white text-sm font-bold py-2 px-4 rounded-full transform rotate-12 shadow-lg">
              Admin Panel Included!
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
                Zyiper
              </div>
              <p className="text-gray-400">
                A short video & live streaming platform with admin panel for Android & iOS
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                </a>
              </div>
              <p className="text-gray-400">Email: info@zyiper.app</p>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Zyiper. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
