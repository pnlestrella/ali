'use client';

import { Heart } from 'lucide-react';

interface EnvelopeAnimationProps {
  isOpen: boolean;
}

export default function EnvelopeAnimation({ isOpen }: EnvelopeAnimationProps) {
  return (
    <div className="envelope-container">
      <div className={`envelope ${isOpen ? 'open' : ''}`}>
        {/* Envelope Back */}
        <div className="envelope-back"></div>
        
        {/* Envelope Flap */}
        <div className="envelope-flap">
          {/* Wax Seal */}
          {!isOpen && (
            <div className="wax-seal">
              <Heart fill="var(--pixel-coral)" size={20} />
            </div>
          )}
        </div>
        
        {/* Envelope Front */}
        <div className="envelope-front">
          <div className="envelope-address">
            <p className="to-label">To:</p>
            <p className="recipient-name">YANG 💕</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .envelope-container {
          position: relative;
          width: 100%;
          max-width: 320px;
          margin: 0 auto var(--space-xl);
          perspective: 1000px;
        }

        .envelope {
          position: relative;
          width: 100%;
          aspect-ratio: 1.5 / 1;
          transform-style: preserve-3d;
        }

        .envelope-back,
        .envelope-front,
        .envelope-flap {
          position: absolute;
          width: 100%;
          background: var(--pixel-cream);
          border: 4px solid var(--pixel-pink);
        }

        .envelope-back {
          height: 100%;
          border-radius: 8px;
          background: linear-gradient(135deg, var(--pixel-cream) 0%, #f5e6d3 100%);
        }

        .envelope-front {
          height: 60%;
          bottom: 0;
          border-radius: 0 0 8px 8px;
          border-top: none;
          background: var(--pixel-cream);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--space-md);
        }

        .envelope-flap {
          height: 50%;
          top: 0;
          transform-origin: top center;
          border-radius: 8px 8px 0 0;
          background: linear-gradient(180deg, #f5d5d8 0%, var(--pixel-cream) 100%);
          transition: transform 1.5s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 10;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: var(--space-sm);
        }

        .envelope.open .envelope-flap {
          transform: rotateX(-180deg);
        }

        .wax-seal {
          width: 48px;
          height: 48px;
          background: var(--pixel-coral);
          border: 3px solid var(--pixel-pink);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          transform: translateZ(10px);
          transition: all 0.8s ease;
        }

        .envelope.open .wax-seal {
          opacity: 0;
          transform: translateZ(10px) scale(0.5) rotate(45deg);
        }

        .envelope-address {
          text-align: center;
          font-family: var(--pixel-font);
          color: var(--pixel-pink);
        }

        .to-label {
          font-size: 12px;
          margin-bottom: var(--space-xs);
          opacity: 0.8;
        }

        .recipient-name {
          font-size: 18px;
          letter-spacing: 1px;
        }

        @media (min-width: 768px) {
          .envelope-container {
            max-width: 400px;
          }

          .recipient-name {
            font-size: 22px;
          }
        }
      `}</style>
    </div>
  );
}
