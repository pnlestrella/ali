'use client';

import Modal from './Modal';
import { Heart } from 'lucide-react';

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WelcomeModal({ isOpen, onClose }: WelcomeModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="welcome-modal">
        <div className="hearts-decoration">
          <Heart size={20} fill="var(--pixel-pink)" color="var(--pixel-pink)" />
          <Heart size={24} fill="var(--pixel-coral)" color="var(--pixel-coral)" />
          <Heart size={20} fill="var(--pixel-pink)" color="var(--pixel-pink)" />
        </div>
        <h1 className="welcome-heading">Welcome YANG q</h1>
        <p className="welcome-message">
          I have something special prepared for you. 
          mag scroll kalang bibilabs
        </p>
      </div>
      <style jsx>{`
        .welcome-modal {
          text-align: center;
          padding: 16px 0;
        }
        
        @media (max-width: 393px) {
          .welcome-modal {
            padding: 12px 0;
          }
        }
        
        .hearts-decoration {
          display: flex;
          gap: var(--space-sm);
          justify-content: center;
          margin-bottom: var(--space-lg);
          animation: fade-scale-up 0.5s ease-out 0.2s backwards;
        }
        
        .welcome-heading {
          font-family: var(--pixel-font);
          font-size: clamp(20px, 5vw, 28px);
          color: var(--pixel-pink);
          margin-bottom: var(--space-lg);
          text-shadow: 
            2px 2px 0 var(--pixel-peach),
            -1px -1px 0 rgba(255, 255, 255, 0.5);
          line-height: 1.6;
          animation: fade-scale-up 0.5s ease-out 0.4s backwards;
        }
        
        .welcome-message {
          font-family: var(--body-font);
          font-size: 16px;
          line-height: 1.8;
          color: var(--pixel-text);
          max-width: 100%;
          margin: 0 auto;
          animation: fade-scale-up 0.5s ease-out 0.6s backwards;
        }
        
        @media (min-width: 394px) {
          .welcome-message {
            max-width: 280px;
          }
        }
      `}</style>
    </Modal>
  );
}
