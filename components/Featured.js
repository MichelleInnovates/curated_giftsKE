import React from 'react';

export default function FeaturedCollection() {
  const products = [
    {
      img: 'https://placehold.co/400x400/f0e9e1/704214?text=Ceramic+Mug',
      title: 'Handcrafted Ceramic Mug',
      desc: 'Traditional glazed ceramic with modern elegance.',
    },
    {
      img: 'https://placehold.co/400x400/dcb/704214?text=Kenyan+Coffee',
      title: 'Kenyan Coffee Collection',
      desc: 'Premium single-origin beans from artisan farms.',
    },
    {
      img: 'https://placehold.co/400x400/eacda3/704214?text=Woven+Runner',
      title: 'Woven Textile Runner',
      desc: 'Hand-dyed patterns using ancestral techniques.',
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 fade-in-section">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
          Curated Collection
        </h2>
        <div className="grid lg:grid-cols-3 gap-8 stagger-fade">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="rounded-lg overflow-hidden group"
              style={{ '--delay': `${(index + 1) * 0.2}s` }}
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold text-black mt-4 mb-2">{product.title}</h3>
              <p className="text-gray-700">{product.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}