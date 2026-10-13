import { useState } from 'react';
import './ShareToggle.css';

export function ShareToggle() {
  const [shareSupported] = useState(() => typeof navigator.share === 'function');
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: 'Arya Weds Abhijith',
      text: 'You are invited to our wedding on 15 November 2026.',
      url: window.location.href,
    };

    if (shareSupported) {
      try {
        await navigator.share(shareData);
      } catch {
        if (navigator.clipboard) {
          await copyToClipboard();
        }
      }
    } else if (navigator.clipboard) {
      await copyToClipboard();
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access denied or unavailable
    }
  };

  return (
    <button
      className={`share-toggle ${copied ? 'copied' : ''}`}
      onClick={handleShare}
      aria-label={shareSupported ? 'Share this invitation' : 'Copy link to invitation'}
      type="button"
    >
      <svg className="share-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20" aria-hidden="true">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="6.68" />
      </svg>
      {copied && <span className="copied-tooltip" role="status">Link copied!</span>}
    </button>
  );
}