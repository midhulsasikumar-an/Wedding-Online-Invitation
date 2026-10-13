import { invitation } from '../data/invitation.js';
import './ThankYouSection.css';

export function ThankYouSection() {
  const { heading, message, closingLine, signOff, names } = invitation.closing;
  
  return (
    <section 
      className="thank-you-section" 
      aria-labelledby="thanks-heading"
    >
      <div className="thank-you-content">
        <h2 id="thanks-heading" className="fade-in">{heading}</h2>
        <p className="fade-in" style={{ animationDelay: '0.2s' }}>{message}</p>
        <p className="fade-in closing-line" style={{ animationDelay: '0.4s' }}>{closingLine}</p>
        <div className="sign-off fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="with-love">{signOff}</p>
          <p className="names">{names}</p>
        </div>
      </div>
    </section>
  );
}