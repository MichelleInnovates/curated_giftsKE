'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function MeetTheMakers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="mission" ref={ref} className="w-full bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-headings font-bold text-text-primary sm:text-5xl">
            The Heart of Our Craft
          </h2>
          <p className="mt-8 max-w-4xl mx-auto text-lg font-body text-text-primary sm:text-xl">
            Every item in our collection is a chapter in a bigger story, supporting the dreams of 
            local artisans, innovators, and creators across Kenya. We're not just a gift company; 
            we're a platform for their passion.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
