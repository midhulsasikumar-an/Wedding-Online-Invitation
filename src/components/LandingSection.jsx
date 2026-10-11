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
        <div className="landing-heart fade-in" style={{ animationDelay: '0.4s' }}>
          <svg viewBox="0 0 24 24" fill="currentColor" width="100" height="100">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
        <p className="fade-in" style={{ animationDelay: '0.6s', color: 'var(--color-white)', fontFamily: 'var(--font-ui)', fontSize: 'var(--text-body)', marginTop: '1rem' }}>
          {weddingDate}
        </p>
      </div>
    </section>
  );
}