import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import FeaturedCollections from '@/components/FeaturedCollections';
import MeetTheMakers from '@/components/MeetTheMakers';
import WaitlistForm from '@/components/WaitlistForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <FeaturedCollections />
        <MeetTheMakers />
        <WaitlistForm />
      </main>
    </div>
  );
}
