import { invitation } from '../data/invitation.js';
import './CoupleBackground.css';

export function CoupleBackground() {
  const { heroImage } = invitation.couple;
  
  return (
    <div className="couple-background" aria-hidden="true">
      <div className="couple-bg-layer hero-portion" style={{ backgroundImage: `url(${heroImage})` }} />
      <div className="couple-bg-layer thank-you-portion" style={{ backgroundImage: `url(${heroImage})` }} />
    </div>
  );
}