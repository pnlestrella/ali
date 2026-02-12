'use client';

import { useState } from 'react';
import RouletteWheel from './RouletteWheel';
import PictureResultModal from './PictureResultModal';
import { pictureIdeas, PictureIdea } from '@/lib/pictureIdeas';

export default function PictureRoulette() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedIdea, setSelectedIdea] = useState<PictureIdea | null>(null);
  const [rotation, setRotation] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const spin = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setSelectedIdea(null);
    setIsModalOpen(false);

    // Random target (5-6 full spins + random segment)
    const randomIndex = Math.floor(Math.random() * pictureIdeas.length);
    const degreesPerSegment = 360 / pictureIdeas.length;
    const fullSpins = 5 + Math.random(); // 5-6 spins
    const targetDegrees = rotation + (360 * fullSpins) + (randomIndex * degreesPerSegment);

    setRotation(targetDegrees);

    setTimeout(() => {
      setSelectedIdea(pictureIdeas[randomIndex]);
      setIsSpinning(false);
      setIsModalOpen(true);
    }, 4000);
  };

  return (
    <div className="picture-roulette">
      <h2 className="section-heading">📸 Picture Roulette 📸</h2>
      <p className="section-description">
        Spin mo for random pics hehe
      </p>

      <RouletteWheel rotation={rotation} isSpinning={isSpinning} />

      <button
        onClick={spin}
        disabled={isSpinning}
        className={`spin-button ${isSpinning ? 'disabled' : ''}`}
      >
        {isSpinning ? 'SPINNING...' : 'SPIN!'}
      </button>

      <PictureResultModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedIdea={selectedIdea}
      />

      <style jsx>{`
        .picture-roulette {
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
          padding: var(--space-lg);
        }

        .section-heading {
          font-family: var(--pixel-font);
          font-size: clamp(18px, 4vw, 24px);
          color: var(--pixel-text);
          margin-bottom: var(--space-md);
          line-height: 1.6;
          text-shadow: 2px 2px 0 rgba(255, 179, 186, 0.5);
        }

        .section-description {
          font-family: var(--body-font);
          font-size: 14px;
          color: var(--pixel-text);
          margin-bottom: var(--space-xl);
          opacity: 0.8;
        }

        .spin-button {
          font-family: var(--pixel-font);
          font-size: 18px;
          padding: var(--space-md) var(--space-2xl);
          border: 5px solid var(--pixel-text);
          border-radius: 12px;
          background: linear-gradient(135deg, var(--pixel-pink) 0%, var(--pixel-coral) 100%);
          color: var(--pixel-text);
          cursor: pointer;
          transition: all 0.2s ease;
          margin-top: var(--space-xl);
          box-shadow: 
            inset 3px 3px 0 rgba(255, 255, 255, 0.4),
            inset -3px -3px 0 rgba(0, 0, 0, 0.2),
            6px 6px 0 rgba(0, 0, 0, 0.15);
          min-width: 180px;
          animation: button-bounce 2s ease-in-out infinite;
        }

        @keyframes button-bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .spin-button:hover:not(.disabled) {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 
            inset 3px 3px 0 rgba(255, 255, 255, 0.4),
            inset -3px -3px 0 rgba(0, 0, 0, 0.2),
            8px 8px 0 rgba(0, 0, 0, 0.2);
          animation: none;
        }

        .spin-button:active:not(.disabled) {
          transform: translateY(0) scale(0.98);
          box-shadow: 
            inset 3px 3px 0 rgba(255, 255, 255, 0.4),
            inset -3px -3px 0 rgba(0, 0, 0, 0.2),
            3px 3px 0 rgba(0, 0, 0, 0.15);
        }

        .spin-button.disabled {
          opacity: 0.6;
          cursor: not-allowed;
          animation: none;
        }

        @media (min-width: 768px) {
          .section-heading {
            font-size: 28px;
          }

          .section-description {
            font-size: 16px;
          }

          .spin-button {
            font-size: 20px;
            padding: var(--space-lg) var(--space-2xl);
            min-width: 200px;
          }
        }
      `}</style>
    </div>
  );
}
