import React from 'react';

export default function Hero() {
  return (
    <section className="bg-black text-white fade-in-section" style={{ animationDelay: '0.1s' }}>
      <div className="container mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="stagger-fade">
          <h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            style={{ '--delay': '0.2s' }}
          >
            Every Gift Tells a Story
          </h1>
          <p 
            className="text-lg text-gray-300 mb-8"
            style={{ '--delay': '0.4s' }}
          >
            Discover authentic, handcrafted treasures from Kenya's most talented artisans. Each piece celebrates tradition, craftsmanship, and the stories behind the hands that made them.
          </p>
          <div 
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            style={{ '--delay': '0.6s' }}
          >
            <button className="bg-amber-500 text-black px-8 py-3 rounded-md font-medium hover:bg-amber-400 transition-all transform hover:scale-105 shadow-lg">
              Join the Waitlist
            </button>
            <button className="bg-transparent text-white px-8 py-3 rounded-md font-medium border border-gray-400 hover:bg-gray-900 transition-all">
              View Collection
            </button>
          </div>
        </div>
        
        {/* Image Content */}
        <div className="stagger-fade" style={{ '--delay': '0.3s' }}>
          <img
            src="https://placehold.co/600x450/e2d6c8/704214?text=Artisan+Pottery"
            alt="Handcrafted pottery on shelves"
            className="rounded-lg shadow-xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}