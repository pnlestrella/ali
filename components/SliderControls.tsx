'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SliderControlsProps {
  currentIndex: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onDotClick: (index: number) => void;
}

export default function SliderControls({
  currentIndex,
  totalSlides,
  onPrevious,
  onNext,
  onDotClick
}: SliderControlsProps) {
  return (
    <div className="slider-controls">
      <div className="navigation-buttons">
        <button
          onClick={onPrevious}
          disabled={currentIndex === 0}
          className="nav-button"
          aria-label="Previous photo"
        >
          <ChevronLeft size={24} strokeWidth={3} />
        </button>
        
        <div className="counter">
          {currentIndex + 1} / {totalSlides}
        </div>
        
        <button
          onClick={onNext}
          disabled={currentIndex === totalSlides - 1}
          className="nav-button"
          aria-label="Next photo"
        >
          <ChevronRight size={24} strokeWidth={3} />
        </button>
      </div>
      
      <div className="dots">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onDotClick(index)}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            aria-label={`Go to photo ${index + 1}`}
          />
        ))}
      </div>
      
      <style jsx>{`
        .slider-controls {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-lg);
          margin-top: var(--space-xl);
        }
        
        .navigation-buttons {
          display: flex;
          align-items: center;
          gap: var(--space-lg);
        }
        
        .nav-button {
          background: var(--pixel-coral);
          border: 3px solid var(--pixel-pink);
          border-radius: 4px;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          color: var(--pixel-text);
        }
        
        .nav-button:hover:not(:disabled) {
          background: var(--pixel-pink);
          transform: scale(1.1);
        }
        
        .nav-button:active:not(:disabled) {
          transform: scale(0.95);
          box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        .nav-button:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
        
        .nav-button:focus-visible {
          outline: 3px solid var(--pixel-lavender);
          outline-offset: 2px;
        }
        
        .counter {
          font-family: var(--pixel-font);
          font-size: 14px;
          color: var(--pixel-text);
          min-width: 60px;
          text-align: center;
        }
        
        .dots {
          display: flex;
          gap: var(--space-sm);
        }
        
        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--pixel-cream);
          border: 2px solid var(--pixel-pink);
          cursor: pointer;
          transition: all 0.2s ease;
          padding: 0;
        }
        
        .dot:hover {
          background: var(--pixel-peach);
          transform: scale(1.2);
        }
        
        .dot.active {
          background: var(--pixel-coral);
          transform: scale(1.3);
        }
        
        .dot:focus-visible {
          outline: 2px solid var(--pixel-lavender);
          outline-offset: 2px;
        }
      `}</style>
    </div>
  );
}
