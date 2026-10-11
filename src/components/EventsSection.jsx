import { invitation } from '../data/invitation.js';
import './EventsSection.css';

export function EventsSection() {
  return (
    <section className="events-section" aria-labelledby="events-heading">
      <div className="background-pattern" />
      <div className="container">
        <div className="section-heading">
          <h6>When & Where</h6>
          <h2 id="events-heading">Events</h2>
        </div>
        
        <div className="events-list">
          {invitation.events.map((event, index) => (
            <EventItem key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EventItem({ event, index }) {
  const delay = index * 0.15;
  
  return (
    <article className="event-item fade-in" style={{ animationDelay: `${delay}s` }}>
      <h6>{event.title}</h6>
      <h3>{event.title}</h3>
      
      <img 
        src={event.image} 
        alt="" 
        className="event-image round"
        aria-hidden="true"
      />
      
      <div className="event-details wedding-details">
        <p>
          <span className="icon" aria-hidden="true">📅</span>
          {event.date}
        </p>
        <p>
          <span className="icon" aria-hidden="true">🕐</span>
          {event.time}
        </p>
        <p>
          <span className="icon" aria-hidden="true">📍</span>
          {event.venue}
        </p>
        <p>
          <span className="icon" aria-hidden="true">📍</span>
          {event.address}
        </p>
        
        {event.mapUrl && (
          <a 
            href={event.mapUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="map-link"
            aria-label={`View map for ${event.title} at ${event.venue}`}
          >
            View Map
          </a>
        )}
      </div>
    </article>
  );
}