import { invitation } from '../data/invitation.js';
import './GallerySection.css';

export function GallerySection() {
  return (
    <section className="gallery-section" aria-labelledby="memories-heading">
      <div className="background-pattern" />
      <div className="container">
        <div className="section-heading">
          <h6>Memories</h6>
          <h2 id="memories-heading">Gallery</h2>
        </div>
        
        <div className="gallery-grid" role="list">
          {invitation.memories.map((memory, index) => (
            <GalleryItem key={index} memory={memory} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryItem({ memory, index }) {
  const delay = index * 0.1;
  
  return (
    <figure className="gallery-item fade-in" style={{ animationDelay: `${delay}s` }} role="listitem">
      <div className="gallery-glare" aria-hidden="true" />
      <img 
        src={memory.src} 
        alt={memory.alt}
        loading={index > 1 ? 'lazy' : 'eager'}
      />
    </figure>
  );
}