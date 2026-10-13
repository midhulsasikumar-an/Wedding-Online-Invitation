import { useEffect, useRef, useState } from 'react';
import './MusicToggle.css';

export function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const audioRef = useRef(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    try {
      audioRef.current = new Audio('/assets/music.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.4;
      
      audioRef.current.addEventListener('error', () => {
        setIsSupported(false);
      });

      audioRef.current.addEventListener('ended', () => {
        setIsPlaying(false);
      });
    } catch {
      setIsSupported(false);
    }
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio || !isSupported) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        // Autoplay blocked or file not available - stay in paused state
        setIsPlaying(false);
      }
    }
  };

  return (
    <button
      className={`music-toggle ${isPlaying ? 'playing' : 'paused'} ${!isSupported ? 'unsupported' : ''}`}
      onClick={toggleMusic}
      aria-label={isSupported ? (isPlaying ? 'Pause background music' : 'Play background music') : 'Background music not available'}
      aria-pressed={isPlaying}
      aria-disabled={!isSupported}
      type="button"
    >
      {isPlaying ? (
        <svg className="music-icon" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
        </svg>
      ) : (
        <svg className="music-icon" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
          <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
        </svg>
      )}
    </button>
  );
}