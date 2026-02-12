'use client';

import { X } from 'lucide-react';
import { useEffect, ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      
      document.addEventListener('keydown', handleEscape);
      
      return () => {
        document.body.style.overflow = 'unset';
        document.removeEventListener('keydown', handleEscape);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="modal-backdrop" 
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="modal-container" role="dialog" aria-modal="true">
        <div className="modal-content">
          <button 
            className="modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={24} strokeWidth={3} />
          </button>
          {children}
        </div>
      </div>
      <style jsx>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(93, 78, 96, 0.6);
          backdrop-filter: blur(4px);
          z-index: 1000;
          animation: fade-in 0.3s ease;
        }
        
        .modal-container {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1001;
          padding: 16px;
        }
        
        @media (max-width: 393px) {
          .modal-container {
            padding: 12px;
          }
        }
        
        .modal-content {
          background: var(--pixel-cream);
          border: 4px solid var(--pixel-pink);
          border-radius: 8px;
          padding: 32px 24px;
          width: 100%;
          max-width: 340px;
          margin: 0 auto;
          box-shadow: 
            inset 2px 2px 0 rgba(255, 255, 255, 0.5),
            8px 8px 0 rgba(93, 78, 96, 0.2);
          animation: modal-enter 0.3s ease-out;
          position: relative;
          max-height: 90vh;
          overflow-y: auto;
        }
        
        @media (max-width: 393px) {
          .modal-content {
            padding: 24px 20px;
            max-width: calc(100vw - 24px);
            border-radius: 12px;
          }
        }
        
        .modal-close {
          position: absolute;
          top: 12px;
          right: 12px;
          background: var(--pixel-coral);
          border: 3px solid var(--pixel-pink);
          border-radius: 4px;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          color: var(--pixel-text);
          z-index: 10;
        }
        
        .modal-close:hover {
          background: var(--pixel-pink);
          transform: scale(1.1);
        }
        
        .modal-close:active {
          transform: scale(0.95);
          box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        .modal-close:focus-visible {
          outline: 3px solid var(--pixel-lavender);
          outline-offset: 2px;
        }
      `}</style>
    </>
  );
}
