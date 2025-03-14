
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const Download = () => {
  const showToast = () => {
    toast({
      title: "Coming Soon!",
      description: "The app will be available for download shortly.",
    });
  };

  return (
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
        
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <div className="relative w-60 h-[400px] rounded-[30px] border-[6px] border-gray-800 overflow-hidden shadow-xl">
            <img src="/images/app-screen-5.jpg" alt="Zyiper Interface 1" className="w-full h-full object-cover" />
          </div>
          <div className="relative w-60 h-[400px] rounded-[30px] border-[6px] border-gray-800 overflow-hidden shadow-xl">
            <img src="/images/app-screen-6.jpg" alt="Zyiper Interface 2" className="w-full h-full object-cover" />
          </div>
          <div className="relative w-60 h-[400px] rounded-[30px] border-[6px] border-gray-800 overflow-hidden shadow-xl">
            <img src="/images/app-screen-7.jpg" alt="Zyiper Interface 3" className="w-full h-full object-cover" />
          </div>
        </div>
        
        <div className="relative inline-block">
          <div className="absolute -top-5 -right-5 bg-purple-600 text-white text-sm font-bold py-2 px-4 rounded-full transform rotate-12 shadow-lg">
            Admin Panel Included!
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
