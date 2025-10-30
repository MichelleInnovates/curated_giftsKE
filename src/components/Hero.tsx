'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCollections = () => {
    const missionSection = document.getElementById('collections');
    if (missionSection) {
      missionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-background py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Column - Text Content */}
          <div className="text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-headings font-bold text-text-primary sm:text-6xl lg:text-7xl"
            >
              Every Gift
              <br />
              Tells a Story.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 text-lg font-body text-text-primary sm:text-xl"
            >
              Discover authentic, handcrafted treasures from Kenya's most talented artisans. 
              Each piece celebrates tradition, craftsmanship, and the stories behind the hands that made them.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 flex flex-col gap-4 sm:flex-row"
            >
              <button
                onClick={scrollToWaitlist}
                className="rounded-md bg-accent-green px-8 py-3 text-base font-body font-medium text-white transition-colors hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-accent-green focus:ring-offset-2"
              >
                Join the Waitlist
              </button>
              
              <button
                onClick={scrollToCollections}
                className="rounded-md border border-text-primary bg-transparent px-8 py-3 text-base font-body font-medium text-text-primary transition-colors hover:bg-gray-50 hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-accent-green focus:ring-offset-2"
              >
                View Collection
              </button>
            </motion.div>
          </div>

          {/* Right Column - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
              <img
                src="https://placehold.co/600x600/f8f5f0/4a2e0c?text=Handcrafted+Pottery"
                alt="Handcrafted pottery from Kenyan artisans"
                className="h-full w-full object-cover object-center"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-accent-green opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}