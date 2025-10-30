import React from 'react';

export default function MeetTheMakers() {
  return (
    <section className="bg-neutral-50 py-16 md:py-24 fade-in-section">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="stagger-fade" style={{ '--delay': '0.2s' }}>
            <img
              src="https://placehold.co/600x700/c8b6a6/704214?text=Artisan+at+Work"
              alt="Kenyan artisan crafting pottery"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>

          <div className="stagger-fade" style={{ '--delay': '0.4s' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Meet the Makers
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Behind every piece is a story of heritage, skill, and passion. Our artisans blend centuries-old traditions with contemporary design, creating unique treasures that connect you to the heart of Kenya's creative spirit.
            </p>
            <blockquote className="border-l-4 border-amber-500 pl-6 italic text-gray-600">
              "Each creation carries the soul of its maker and the wisdom of generations. When you choose handcrafted, you choose authenticity."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
