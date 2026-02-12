'use client';

import { ChevronDown } from 'lucide-react';

interface ScrollIndicatorProps {
  isGiftOpened?: boolean;
}

export default function ScrollIndicator({ isGiftOpened = false }: ScrollIndicatorProps) {
  return (
    <div className="scroll-indicator">
      <p className="scroll-text">{isGiftOpened ? 'Scroll' : 'OPEN THE GIFT!'}</p>
      <ChevronDown size={24} strokeWidth={3} />
      <style jsx>{`
        .scroll-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-sm);
          color: var(--pixel-text);
          margin-top: var(--space-xl);
        }
        
        .scroll-text {
          font-family: var(--pixel-font);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
      `}</style>
    </div>
  );
}
