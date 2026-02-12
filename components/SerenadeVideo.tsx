'use client';

import { useRef } from 'react';
import { Heart, Music2 } from 'lucide-react';

export default function SerenadeVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="serenade-video">
      <h2 className="section-heading">🎵 A Serenade for You 🎵</h2>
      <p className="section-description">
        Kanta para kay yangsta
      </p>

      <div className="video-container">
        {/* Decorative corner hearts */}
        <div className="corner-heart top-left">
          <Heart fill="var(--pixel-coral)" color="var(--pixel-text)" size={24} />
        </div>
        <div className="corner-heart top-right">
          <Heart fill="var(--pixel-coral)" color="var(--pixel-text)" size={24} />
        </div>
        <div className="corner-heart bottom-left">
          <Heart fill="var(--pixel-coral)" color="var(--pixel-text)" size={24} />
        </div>
        <div className="corner-heart bottom-right">
          <Heart fill="var(--pixel-coral)" color="var(--pixel-text)" size={24} />
        </div>

        {/* Floating musical notes */}
        <div className="musical-note left-note">
          <Music2 color="var(--pixel-text)" size={32} />
        </div>
        <div className="musical-note right-note">
          <Music2 color="var(--pixel-text)" size={32} />
        </div>

        {/* Video frame */}
        <div className="video-frame">
          <video
            ref={videoRef}
            className="video-player"
            poster="https://via.placeholder.com/640x360/E4C1D9/5D4E60?text=Serenade+Video"
            controls
            playsInline
          >
            <source src="/videos/serenade.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Caption area */}
        <div className="video-caption">
          <p className="caption-text">
            Every melody reminds me of you bebelabs
          </p>
        </div>
      </div>

      <style jsx>{`
        .serenade-video {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          padding: var(--space-xl) var(--space-lg);
          position: relative;
        }

        .section-heading {
          font-family: var(--pixel-font);
          font-size: clamp(20px, 5vw, 28px);
          color: var(--pixel-text);
          margin-bottom: var(--space-sm);
          line-height: 1.6;
          text-shadow: 2px 2px 0 var(--pixel-pink);
        }

        .section-description {
          font-family: var(--body-font);
          font-size: clamp(14px, 3vw, 16px);
          color: var(--pixel-text);
          margin-bottom: var(--space-xl);
          opacity: 0.9;
        }

        .video-container {
          position: relative;
          max-width: 640px;
          margin: 0 auto;
          padding: var(--space-md);
        }

        /* Corner hearts */
        .corner-heart {
          position: absolute;
          z-index: 10;
          animation: pulse-heart 2s ease-in-out infinite;
        }

        .top-left {
          top: -12px;
          left: -12px;
        }

        .top-right {
          top: -12px;
          right: -12px;
        }

        .bottom-left {
          bottom: 60px;
          left: -12px;
        }

        .bottom-right {
          bottom: 60px;
          right: -12px;
        }

        @keyframes pulse-heart {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.8;
          }
        }

        /* Floating musical notes */
        .musical-note {
          position: absolute;
          z-index: 10;
          animation: float-note 3s ease-in-out infinite;
        }

        .left-note {
          top: 50%;
          left: -40px;
          transform: translateY(-50%);
        }

        .right-note {
          top: 50%;
          right: -40px;
          transform: translateY(-50%);
          animation-delay: 1.5s;
        }

        @keyframes float-note {
          0%, 100% {
            transform: translateY(-50%);
          }
          50% {
            transform: translateY(calc(-50% - 15px));
          }
        }

        /* Video frame with gradient border */
        .video-frame {
          position: relative;
          padding: 8px;
          background: linear-gradient(135deg, var(--pixel-pink) 0%, var(--pixel-coral) 100%);
          border: 5px solid var(--pixel-text);
          border-radius: 12px;
          box-shadow: 
            inset 0 0 0 3px rgba(255, 255, 255, 0.3),
            0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .video-player {
          width: 100%;
          height: auto;
          aspect-ratio: 16 / 9;
          border-radius: 8px;
          border: 3px solid var(--pixel-text);
          display: block;
          background: var(--pixel-lavender);
        }

        /* Caption area */
        .video-caption {
          margin-top: var(--space-md);
          padding: var(--space-md);
          background: rgba(255, 255, 255, 0.9);
          border: 4px solid var(--pixel-text);
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .caption-text {
          font-family: var(--body-font);
          font-size: clamp(14px, 3vw, 16px);
          color: var(--pixel-text);
          margin: 0;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .serenade-video {
            padding: var(--space-lg) var(--space-md);
          }

          .left-note,
          .right-note {
            display: none;
          }

          .corner-heart {
            transform: scale(0.8);
          }

          .top-left {
            top: -8px;
            left: -8px;
          }

          .top-right {
            top: -8px;
            right: -8px;
          }

          .bottom-left {
            bottom: 50px;
            left: -8px;
          }

          .bottom-right {
            bottom: 50px;
            right: -8px;
          }
        }

        @media (min-width: 768px) {
          .section-heading {
            font-size: 32px;
          }

          .section-description {
            font-size: 18px;
          }

          .caption-text {
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  );
}
