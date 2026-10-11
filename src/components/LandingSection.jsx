import { invitation } from '../data/invitation.js';
import './LandingSection.css';

export function LandingSection() {
  const { brideName, groomName, weddingDate, heroImage } = invitation.couple;
  
  return (
    <section className="landing-section" aria-labelledby="couple-heading" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="background-pattern" />
      <div className="landing-content">
        <h6 id="couple-heading" className="fade-in">SAVE THE DATE</h6>
        <h1 className="fade-in" style={{ animationDelay: '0.2s' }}>
          <span className="person-one">{groomName}</span>
          <span aria-hidden="true" className="couple-connector">&</span>
          <span className="person-two">{brideName}</span>
        </h1>
        <p className="fade-in" style={{ animationDelay: '0.6s', color: 'var(--color-white)', fontFamily: 'var(--font-ui)', fontSize: 'var(--text-body)', marginTop: '1rem' }}>
          {weddingDate}
        </p>
      </div>
    </section>
  );
}