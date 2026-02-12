'use client';

import Image from 'next/image';
import { PictureIdea } from '@/lib/pictureIdeas';

interface ResultDisplayProps {
  selectedIdea: PictureIdea | null;
}

export default function ResultDisplay({ selectedIdea }: ResultDisplayProps) {
  if (!selectedIdea) {
    return (
      <div className="result-placeholder">
        <p>Spin the wheel to discover your next date! 💕</p>
        <style jsx>{`
          .result-placeholder {
            text-align: center;
            padding: var(--space-lg);
            color: var(--pixel-text-light);
            font-family: var(--body-font);
            font-size: 14px;
            font-style: italic;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="result-display">
      <div className="result-content">
        <div className="result-photo-wrapper">
          <Image
            src={selectedIdea.imageSrc}
            alt={selectedIdea.title}
            width={120}
            height={120}
            className="result-photo"
          />
        </div>
        <h3 className="result-title">{selectedIdea.title}</h3>
        <p className="result-description">{selectedIdea.description}</p>
        <p className="result-message">Let&apos;s do this next!</p>
      </div>

      <style jsx>{`
        .result-display {
          margin-top: var(--space-xl);
          animation: result-enter 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        @keyframes result-enter {
          0% {
            opacity: 0;
            transform: scale(0.5) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .result-content {
          background: var(--pixel-cream);
          border: 5px solid var(--pixel-text);
          border-radius: 16px;
          padding: var(--space-lg);
          text-align: center;
          box-shadow: 
            inset 4px 4px 0 rgba(255, 255, 255, 0.5),
            inset -4px -4px 0 rgba(0, 0, 0, 0.1),
            8px 8px 0 rgba(0, 0, 0, 0.1);
          animation: result-pulse 1s ease 2;
        }

        @keyframphoto-wrapper {
          margin-bottom: var(--space-md);
          animation: photo-bounce 0.6s ease;
        }

        @keyframes photo-bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .result-photo {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          border: 5px solid var(--pixel-text);
          object-fit: cover;
          box-shadow: 
            inset 0 0 0 3px rgba(255, 255, 255, 0.4),
            0 6px 12px rgba(0, 0, 0, 0.2);
        }

        .result-title {
          font-family: var(--pixel-font);
          font-size: clamp(16px, 4vw, 20px);
          color: var(--pixel-text);
          margin-bottom: var(--space-sm);
          line-height: 1.6;
        }

        .result-description {
          font-family: var(--body-font);
          font-size: 15px;
          color: var(--pixel-text);
          margin-bottom: var(--space-sm);
          opacity: 0.8nslateY(-10px);
          }
        }

        .result-tiphoto {
            width: 140px;
            height: 140px;
          }

          .result-title {
            font-size: 24px;
          }

          .result-description {
            font-size: 166;
        }

        .result-message {
          font-family: var(--body-font);
          font-size: 14px;
          color: var(--pixel-coral);
          font-weight: 600;
          font-style: italic;
        }

        @media (min-width: 768px) {
          .result-emoji {
            font-size: 64px;
          }

          .result-title {
            font-size: 24px;
          }

          .result-message {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
}
