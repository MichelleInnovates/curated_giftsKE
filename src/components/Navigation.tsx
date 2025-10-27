'use client';

import { useState } from 'react';

export default function Navigation() {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="w-full border-b border-border-gray bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-headings font-semibold text-text-primary">
              CURATED GIFTS KE
            </h1>
          </div>
          
          {/* Join Waitlist Button */}
          <div className="flex items-center">
            <button
              onClick={scrollToWaitlist}
              className="rounded-md bg-accent-gold px-4 py-2 text-sm font-body font-medium text-white transition-colors hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2"
            >
              Join the Waitlist
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
