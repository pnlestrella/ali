'use client';

import Image from 'next/image';

export default function PixelArtSection() {
  return (
    <div className="pixel-art-container">
      <div className="title-wrapper">
        <h2 className="art-title">You Are Art</h2>
        <div className="title-underline"></div>
      </div>
      
      <div className="art-frame">
        <div className="spotlight-effect"></div>
        <div className="frame-border">
          <Image
            src="/photos/pixelart2.png"
            alt="Pixel Art"
            width={600}
            height={600}
            className="pixel-art-image"
            priority
          />
        </div>
      </div>

      <div className="quote-section">
        <p className="quote-text">
          This empty canvas, that they misunderstood<br />
          I wanna paint you in it, but I&apos;m not good<br />
          &apos;Cause I wanna look at you when we are apart<br />
          &apos;Cause you&apos;re not just a human being, you are art
        </p>
      </div>
      
      <style jsx>{`
        .pixel-art-container {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: var(--space-2xl) var(--space-xl);
          gap: var(--space-2xl);
        }

        .title-wrapper {
          text-align: center;
        }

        .art-title {
          font-family: var(--pixel-font);
          font-size: clamp(24px, 6vw, 48px);
          color: var(--pixel-text);
          margin: 0 0 var(--space-sm) 0;
          text-shadow: 
            4px 4px 0 var(--pixel-pink),
            -2px -2px 0 rgba(255, 255, 255, 0.8);
          line-height: 1.3;
          letter-spacing: 2px;
        }

        .title-underline {
          width: 120px;
          height: 4px;
          background: linear-gradient(90deg, var(--pixel-coral), var(--pixel-pink));
          margin: 0 auto;
          border-radius: 2px;
        }

        .art-frame {
          position: relative;
          max-width: 650px;
          width: 100%;
        }

        .spotlight-effect {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 110%;
          height: 110%;
          background: radial-gradient(circle, rgba(255, 179, 186, 0.4) 0%, transparent 70%);
          filter: blur(20px);
          z-index: 0;
          pointer-events: none;
          animation: pulse-glow 3s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.9;
            transform: translate(-50%, -50%) scale(1.05);
          }
        }

        .frame-border {
          position: relative;
          padding: var(--space-lg);
          background: linear-gradient(135deg, #fff9f5 0%, #ffe6e6 100%);
          border: 4px solid var(--pixel-text);
          border-radius: 8px;
          box-shadow: 
            inset 0 0 0 3px var(--pixel-pink),
            inset 0 0 0 6px var(--pixel-cream),
            0 12px 30px rgba(0, 0, 0, 0.25),
            0 0 40px rgba(255, 179, 186, 0.3);
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
          z-index: 1;
        }

        .pixel-art-image {
          width: 100%;
          height: auto;
          display: block;
          border: 3px solid var(--pixel-coral);
          border-radius: 4px;
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .quote-section {
          max-width: 600px;
          width: 100%;
          background: rgba(255, 255, 255, 0.95);
          border: 3px solid var(--pixel-text);
          border-radius: 8px;
          padding: var(--space-lg);
          box-shadow: 
            inset 0 0 0 2px var(--pixel-pink),
            0 6px 12px rgba(0, 0, 0, 0.2);
          display: flex;
          justify-content: center;
        }

        .quote-text {
          font-family: var(--pixel-font);
          font-size: clamp(11px, 2.5vw, 14px);
          color: var(--pixel-text);
          text-align: left;
          line-height: 2.2;
          margin: 0;
          max-width: 480px;
        }

        @media (max-width: 640px) {
          .pixel-art-container {
            padding: var(--space-lg) var(--space-md);
            gap: var(--space-lg);
          }

          .art-title {
            font-size: clamp(20px, 6vw, 36px);
          }

          .title-underline {
            width: 80px;
            height: 3px;
          }

          .frame-border {
            padding: var(--space-md);
            border-width: 3px;
          }

          .pixel-art-image {
            border-width: 2px;
          }

          .quote-section {
            padding: var(--space-md);
            border-width: 2px;
          }

          .quote-text {
            font-size: clamp(10px, 2.8vw, 13px);
          }
        }
      `}</style>
    </div>
  );
}

