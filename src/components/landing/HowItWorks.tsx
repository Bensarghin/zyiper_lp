
const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">How It Works</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center text-center">
            <div className="w-28 h-28 flex items-center justify-center bg-purple-900 rounded-full mb-6 overflow-hidden">
              <img src="/images/app-screen-2.jpg" alt="Download App" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Download the App</h3>
            <p className="text-gray-400">Get Zyiper from App Store or Google Play for free</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-28 h-28 flex items-center justify-center bg-purple-900 rounded-full mb-6 overflow-hidden">
              <img src="/images/app-screen-3.jpg" alt="Create Account" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Create Account</h3>
            <p className="text-gray-400">Sign up with email or connect with social media</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-28 h-28 flex items-center justify-center bg-purple-900 rounded-full mb-6 overflow-hidden">
              <img src="/images/app-screen-4.jpg" alt="Start Creating" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Start Creating</h3>
            <p className="text-gray-400">Make videos, go live, and connect with creators</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
