import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedCollection from '../components/Featured';
import MeetTheMakers from '../components/MeetTheMakers';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturedCollection />
      <MeetTheMakers />
    </div>
  );
}
