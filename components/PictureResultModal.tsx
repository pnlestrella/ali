'use client';

import Image from 'next/image';
import { X } from 'lucide-react';
import { PictureIdea } from '@/lib/pictureIdeas';

interface PictureResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedIdea: PictureIdea | null;
}

export default function PictureResultModal({ isOpen, onClose, selectedIdea }: PictureResultModalProps) {
  if (!isOpen || !selectedIdea) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>

        <div className="result-container">
          <div className="result-photo-wrapper">
            <Image
              src={selectedIdea.imageSrc}
              alt={selectedIdea.title}
              width={600}
              height={600}
              className="result-photo"
            />
          </div>
          <div className="caption-box">
            <p className="caption-text">{selectedIdea.title}</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: var(--space-md);
          animation: fade-in 0.3s ease;
        }

        .modal-content {
          background: linear-gradient(135deg, var(--pixel-cream) 0%, var(--pixel-peach) 100%);
          border: 5px solid var(--pixel-text);
          border-radius: 16px;
          padding: var(--space-lg);
          max-width: 90vw;
          max-height: 90vh;
          width: auto;
          position: relative;
          box-shadow: 
            inset 0 0 0 3px rgba(255, 255, 255, 0.3),
            0 10px 30px rgba(0, 0, 0, 0.3);
          animation: modal-enter 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .close-button {
          position: absolute;
          top: var(--space-md);
          right: var(--space-md);
          background: var(--pixel-text);
          color: white;
          border: none;
          border-radius: 8px;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          z-index: 10;
        }

        .close-button:hover {
          background: var(--pixel-coral);
          transform: scale(1.1);
        }

        .close-button:active {
          transform: scale(0.95);
        }

        .result-container {
          text-align: center;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: var(--space-md);
        }

        .result-photo-wrapper {
          animation: photo-bounce 0.6s ease;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @keyframes photo-bounce {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.03);
          }
        }

        .result-photo {
          width: 90%;
          height: 90%;
          max-width: 80vh;
          max-height: 80vh;
          border-radius: 12px;
          border: 6px solid var(--pixel-text);
          object-fit: cover;
          box-shadow: 
            inset 0 0 0 4px rgba(255, 255, 255, 0.4),
            0 8px 16px rgba(0, 0, 0, 0.3);
        }

        .caption-box {
          background: rgba(45, 45, 45, 0.9);
          padding: var(--space-sm) var(--space-lg);
          border-radius: 8px;
          border: 3px solid var(--pixel-text);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          max-width: 80%;
        }

        .caption-text {
          font-family: var(--pixel-font);
          font-size: 18px;
          color: white;
          margin: 0;
          text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.5);
        }

        @media (max-width: 480px) {
          .modal-content {
            padding: var(--space-md);
            max-width: 95vw;
            max-height: 95vh;
          }

          .result-photo {
            border: 4px solid var(--pixel-text);
          }

          .caption-box {
            padding: var(--space-xs) var(--space-md);
            border-width: 2px;
            max-width: 90%;
          }

          .caption-text {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
}
