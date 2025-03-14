
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const Hero = () => {
  const showToast = () => {
    toast({
      title: "Coming Soon!",
      description: "The app will be available for download shortly.",
    });
  };

  return (
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
              src="/images/app-screen-1.jpg" 
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
  );
};

export default Hero;
