import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VisualMenu from './components/VisualMenu';
import Gallery from './components/Gallery';
import OurStory from './components/OurStory';
import ReservationCTA from './components/ReservationCTA';
import LocationHours from './components/LocationHours';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-body min-h-screen">
      <Navbar />
      <Hero />
      <VisualMenu />
      <Gallery />
      <OurStory />
      <LocationHours />
      <ReservationCTA />
      <Footer />
    </div>
  )
}
