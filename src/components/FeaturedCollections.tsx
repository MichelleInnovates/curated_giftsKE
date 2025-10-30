'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const products = [
  {
    title: "Handcrafted Ceramic Mug",
    description: "Traditional glazed ceramic with modern elegance, perfect for your morning coffee.",
    imageSrc: "https://placehold.co/600x600/f8f5f0/333?text=Ceramic+Mug",
  },
  {
    title: "Kenyan Coffee Collection",
    description: "Premium single-origin beans from artisan farms, celebrating a rich coffee heritage.",
    imageSrc: "https://placehold.co/600x600/f8f5f0/333?text=Coffee+Beans",
  },
  {
    title: "Woven Textile Runner",
    description: "Hand-dyed patterns using ancestral techniques to bring Kenyan artistry to your home.",
    imageSrc: "https://placehold.co/600x600/f8f5f0/333?text=Textile+Runner",
  },
];

export default function FeaturedCollections() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="collections" ref={ref} className="w-full bg-background py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-headings font-bold text-text-primary sm:text-5xl">
            Curated Collection
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Handpicked treasures that celebrate Kenyan craftsmanship and tell stories of tradition
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                <div className="aspect-square w-full overflow-hidden bg-gray-100">
                  <img
                    src={product.imageSrc}
                    alt={product.title}
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-headings font-bold text-text-primary mb-2">
                    {product.title}
                  </h3>
                  <p className="text-base font-body text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="mt-4 flex items-center text-accent-green font-medium">
                    <span className="text-sm">Learn More</span>
                    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}