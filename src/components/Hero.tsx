'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMission = () => {
    const missionSection = document.getElementById('mission');
    if (missionSection) {
      missionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-headings font-bold text-text-primary sm:text-6xl lg:text-7xl"
          >
            Thoughtful Gifts.
            <br />
            Unforgettable Stories.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 max-w-2xl text-lg font-body text-text-primary sm:text-xl"
          >
            We discover the best of Kenyan craftsmanship and curate it into beautiful, 
            ready-to-ship experiences. Your search for the perfect gift ends here.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex flex-col gap-4 sm:flex-row"
          >
            <button
              onClick={scrollToWaitlist}
              className="rounded-md bg-accent-gold px-8 py-3 text-base font-body font-medium text-white transition-colors hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2"
            >
              Join the Waitlist
            </button>
            
            <button
              onClick={scrollToMission}
              className="rounded-md border border-border-gray bg-background px-8 py-3 text-base font-body font-medium text-text-primary transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2"
            >
              Our Mission
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
