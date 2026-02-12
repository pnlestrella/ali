'use client';

import { useState } from 'react';
import { EmotionWord } from '@/lib/emotions';

interface FloatingWordProps {
  word: EmotionWord;
}

export default function FloatingWord({ word }: FloatingWordProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getFontSize = () => {
    switch (word.size) {
      case 'primary':
        return 'clamp(24px, 5vw, 32px)';
      case 'secondary':
        return 'clamp(18px, 4vw, 24px)';
      case 'tertiary':
        return 'clamp(14px, 3vw, 18px)';
    }
  };

  return (
    <>
      <div
        className={`floating-word ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {word.text}
      </div>

      <style jsx>{`
        .floating-word {
          font-family: var(--pixel-font);
          font-size: ${getFontSize()};
          color: ${word.color};
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          animation: float ${word.animationDuration}s ease-in-out ${word.animationDelay}s infinite;
          user-select: none;
          opacity: 0.85;
        }

        .floating-word.hovered {
          transform: scale(1.25) rotate(-3deg);
          opacity: 1;
          filter: drop-shadow(0 4px 12px ${word.color});
          z-index: 10;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-12px) translateX(8px);
          }
          50% {
            transform: translateY(-6px) translateX(-8px);
          }
          75% {
            transform: translateY(-15px) translateX(6px);
          }
        }

        @media (max-width: 767px) {
          @keyframes float {
            0%, 100% {
              transform: translateY(0px) translateX(0px);
            }
            25% {
              transform: translateY(-8px) translateX(5px);
            }
            50% {
              transform: translateY(-4px) translateX(-5px);
            }
            75% {
              transform: translateY(-10px) translateX(4px);
            }
          }
        }
      `}</style>
    </>
  );
}
