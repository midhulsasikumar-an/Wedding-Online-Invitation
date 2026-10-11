import { invitation } from '../data/invitation.js';
import './FamilySection.css';

export function FamilySection() {
  const { brideName, groomName, brideImage, groomImage, family } = invitation.couple;
  
  return (
    <section className="family-section" aria-label="Family details">
      <div className="background-pattern" />
      <div className="container">
        <div className="section-heading">
          <h6>Family</h6>
          <h2>About the Couple</h2>
        </div>
        
        <div className="couple-container">
          <div className="person bride">
            <div 
              className="person-image round" 
              style={{ backgroundImage: `url(${brideImage})` }}
              aria-hidden="true"
            />
            <div className="person-details">
              <h2>{brideName}</h2>
              <p>{family.bride}</p>
            </div>
          </div>
          
          <div className="person groom">
            <div 
              className="person-image round" 
              style={{ backgroundImage: `url(${groomImage})` }}
              aria-hidden="true"
            />
            <div className="person-details">
              <h2>{groomName}</h2>
              <p>{family.groom}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}