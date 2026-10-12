import { LandingSection } from './components/LandingSection.jsx';
import { FamilySection } from './components/FamilySection.jsx';
import { EventsSection } from './components/EventsSection.jsx';
import { GallerySection } from './components/GallerySection.jsx';
import { ThankYouSection } from './components/ThankYouSection.jsx';
import { MusicToggle } from './components/MusicToggle.jsx';
import { ShareToggle } from './components/ShareToggle.jsx';
import './styles/main.css';

export function App() {
  return (
    <>
      <LandingSection />
      <FamilySection />
      <EventsSection />
      <GallerySection />
      <ThankYouSection />
      <MusicToggle />
      <ShareToggle />
    </>
  );
}