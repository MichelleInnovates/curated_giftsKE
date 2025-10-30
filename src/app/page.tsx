import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import FeaturedCollections from '@/components/FeaturedCollections';
import MeetTheMakers from '@/components/MeetTheMakers';
import WaitlistForm from '@/components/WaitlistForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <FeaturedCollections />
        <MeetTheMakers />
        <WaitlistForm />
        <Footer/>
      </main>
    </div>
  );
}
