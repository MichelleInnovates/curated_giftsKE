'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  imageSrc: string;
  reverse?: boolean;
}

function ProductCard({ title, description, price, imageSrc, reverse = false }: ProductCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className={`grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 ${
        reverse ? 'lg:grid-flow-col-dense' : ''
      }`}
    >
      {/* Image */}
      <div className={`${reverse ? 'lg:col-start-2' : ''}`}>
        <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
          <img
            src={imageSrc}
            alt={title}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
      
      {/* Content */}
      <div className={`flex flex-col justify-center ${reverse ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
        <h2 className="text-3xl font-headings font-bold text-text-primary sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-lg font-body text-text-primary">
          {description}
        </p>
        <span className="mt-6 text-xl font-body font-bold text-accent-gold">
          {price}
        </span>
      </div>
    </motion.div>
  );
}

export default function FeaturedCollections() {
  const products = [
    {
      title: "The Nairobi Brew Box",
      description: "A carefully curated selection of Kenya's finest coffee beans, handpicked from local farms and roasted to perfection. Each box tells the story of our coffee heritage.",
      price: "KES 4,950",
      imageSrc: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=600&fit=crop&crop=center",
    },
    {
      title: "The Maasai Artisan Collection",
      description: "Traditional beadwork and handcrafted jewelry from Maasai artisans. Each piece is unique, carrying generations of cultural heritage and artistic excellence.",
      price: "KES 6,500",
      imageSrc: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop&crop=center",
      reverse: true,
    },
    {
      title: "The Kenyan Spice Journey",
      description: "An aromatic adventure through Kenya's spice markets. Premium spices sourced directly from local farmers, packaged with love and ready to transform your kitchen.",
      price: "KES 3,200",
      imageSrc: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&h=600&fit=crop&crop=center",
    },
  ];

  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-headings font-bold text-text-primary sm:text-5xl">
            Featured Collections
          </h2>
          <p className="mt-6 text-lg font-body text-text-primary">
            Discover our carefully curated selection of Kenyan craftsmanship
          </p>
        </div>
        
        <div className="mt-20 space-y-20">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              price={product.price}
              imageSrc={product.imageSrc}
              reverse={product.reverse}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
