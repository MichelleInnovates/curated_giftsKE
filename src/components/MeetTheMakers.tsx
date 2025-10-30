'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function MeetTheMakers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="mission" ref={ref} className="w-full bg-background py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-gray-100">
              <img
                src="https://placehold.co/600x750/c7b299/4a2e0c?text=Artisan+Portrait"
                alt="Portrait of an artisan"
                className="h-full w-full object-cover object-center"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 h-20 w-20 rounded-full bg-accent-green opacity-10"></div>
          </motion.div>
        
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-headings font-bold text-text-primary md:text-4xl">
                Meet the Makers
              </h2>
              <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                Behind every piece is a skilled artisan. We partner directly with Kenyan craftspeople, ensuring fair compensation and celebrating the cultural heritage woven into every item.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-accent-green">
              <blockquote className="text-lg italic text-gray-800 leading-relaxed">
                "From the pottery studios of urban Nairobi to the weaving cooperatives of rural Kenya, we share our stories through our craft."
              </blockquote>
              <cite className="mt-4 block text-md font-semibold text-text-primary">
                — Grace Wanjiku, Ceramicist
              </cite>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}