
const Stats = () => {
  return (
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
  );
};

export default Stats;
