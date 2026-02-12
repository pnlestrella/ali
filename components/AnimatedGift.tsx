'use client';

import { useState, useEffect, useRef } from 'react';
import ConfettiExplosion from './ConfettiExplosion';

interface AnimatedGiftProps {
  onClick: () => void;
  isOpened?: boolean;
}

export default function AnimatedGift({ onClick, isOpened = false }: AnimatedGiftProps) {
  const [hasBeenClicked, setHasBeenClicked] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiPosition, setConfettiPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (hasBeenClicked) return;

    const shakeInterval = setInterval(() => {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 1500);
    }, 3000);

    return () => clearInterval(shakeInterval);
  }, [hasBeenClicked]);

  const handleClick = () => {
    if (hasBeenClicked) return;
    
    setHasBeenClicked(true);
    
    // Get button center position for confetti origin
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setConfettiPosition({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    }
    
    // Triple shake then confetti
    setIsShaking(true);
    setTimeout(() => {
      setIsShaking(false);
      setShowConfetti(true);
    }, 1500);
    
    // Show modal after confetti starts
    setTimeout(() => {
      onClick();
    }, 1800);
  };

  const handleConfettiComplete = () => {
    setShowConfetti(false);
  };

  return (
    <div className="animated-gift-container">
      <button
        ref={buttonRef}
        onClick={handleClick}
        className={`animated-gift ${isShaking && !isOpened ? 'shaking' : ''} ${isOpened ? 'opened' : ''}`}
        aria-label="Open Valentine's gift"
      >
        {isOpened ? (
          <div className="opened-gift-box">
            <div className="box-top" />
            <div className="box-bottom" />
          </div>
        ) : (
          <div className="closed-gift-box">
            <div className="box-body" />
            <div className="ribbon-horizontal" />
            <div className="ribbon-vertical" />
            <div className="bow" />
          </div>
        )}
      </button>
      
      {showConfetti && (
        <ConfettiExplosion
          x={confettiPosition.x}
          y={confettiPosition.y}
          onComplete={handleConfettiComplete}
        />
      )}
      <style jsx>{`
        .animated-gift-container {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .animated-gift {
          background: transparent;
          border: none;
          cursor: pointer;
          padding: var(--space-xl);
          border-radius: 16px;
          transition: filter 0.3s ease, transform 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: idle-pulse 2s ease-in-out infinite;
          width: 200px;
          height: 200px;
        }

        .animated-gift.opened {
          animation: none;
          cursor: default;
        }

        .animated-gift.shaking {
          animation: heavy-shake 0.5s ease-in-out 3;
        }

        /* Closed Gift Box - Pixelated Style */
        .closed-gift-box {
          position: relative;
          width: 140px;
          height: 140px;
        }

        .box-body {
          width: 140px;
          height: 140px;
          background: linear-gradient(135deg, var(--pixel-pink) 0%, var(--pixel-rose) 100%);
          border: 5px solid var(--pixel-text);
          box-shadow: 
            inset 6px 6px 0 rgba(255, 255, 255, 0.4),
            inset -6px -6px 0 rgba(0, 0, 0, 0.25),
            10px 10px 0 rgba(0, 0, 0, 0.15);
          position: relative;
          overflow: hidden;
        }

        .box-body::before {
          content: '';
          position: absolute;
          top: 70px;
          left: 0;
          width: 100%;
          height: 5px;
          background: var(--pixel-text);
          box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2);
          z-index: 1;
        }

        .box-body::after {
          content: '';
          position: absolute;
          top: 70px;
          left: 50%;
          transform: translateX(-50%);
          width: 5px;
          height: 70px;
          background: var(--pixel-text);
          box-shadow: 2px 0 0 rgba(0, 0, 0, 0.2);
          z-index: 1;
        }

        .ribbon-horizontal {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          width: 140px;
          height: 28px;
          background: linear-gradient(180deg, var(--pixel-coral) 0%, #ff8a7a 100%);
          border-top: 5px solid var(--pixel-text);
          border-bottom: 5px solid var(--pixel-text);
          box-shadow: 
            inset 0 3px 0 rgba(255, 255, 255, 0.3),
            inset 0 -3px 0 rgba(0, 0, 0, 0.2);
          z-index: 2;
        }

        .ribbon-horizontal::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 2px;
        }

        .ribbon-vertical {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 28px;
          height: 140px;
          background: linear-gradient(90deg, var(--pixel-coral) 0%, #ff8a7a 100%);
          border-left: 5px solid var(--pixel-text);
          border-right: 5px solid var(--pixel-text);
          box-shadow: 
            inset 3px 0 0 rgba(255, 255, 255, 0.3),
            inset -3px 0 0 rgba(0, 0, 0, 0.2);
          z-index: 2;
        }

        .ribbon-vertical::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 2px;
        }

        .bow {
          position: absolute;
          top: 36px;
          left: 50%;
          transform: translateX(-50%);
          width: 36px;
          height: 36px;
          background: var(--pixel-rose);
          border: 5px solid var(--pixel-text);
          box-shadow: 
            inset 3px 3px 0 rgba(255, 255, 255, 0.3),
            inset -3px -3px 0 rgba(0, 0, 0, 0.2),
            4px 4px 0 rgba(0, 0, 0, 0.15);
          z-index: 3;
        }

        .bow::before,
        .bow::after {
          content: '';
          position: absolute;
          width: 24px;
          height: 24px;
          background: var(--pixel-rose);
          border: 5px solid var(--pixel-text);
          top: 3px;
          box-shadow: 
            inset 2px 2px 0 rgba(255, 255, 255, 0.3),
            inset -2px -2px 0 rgba(0, 0, 0, 0.2),
            3px 3px 0 rgba(0, 0, 0, 0.15);
        }

        .bow::before {
          left: -30px;
        }

        .bow::after {
          right: -30px;
        }

        /* Opened Gift Box - Pixelated Style */
        .opened-gift-box {
          position: relative;
          width: 140px;
          height: 140px;
        }

        .box-top {
          position: absolute;
          top: -10px;
          left: -10px;
          width: 140px;
          height: 60px;
          background: var(--pixel-peach);
          border: 4px solid var(--pixel-text);
          transform: rotate(-15deg);
          transform-origin: bottom left;
          box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.1);
        }

        .box-top::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          width: 100%;
          height: 20px;
          background: var(--pixel-coral);
          border-top: 4px solid var(--pixel-text);
          border-bottom: 4px solid var(--pixel-text);
        }

        .box-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 120px;
          height: 80px;
          background: var(--pixel-pink);
          border: 4px solid var(--pixel-text);
          box-shadow: 
            inset 4px 4px 0 rgba(255, 255, 255, 0.3),
            inset -4px -4px 0 rgba(0, 0, 0, 0.2);
        }

        .box-bottom::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 100%;
          background: var(--pixel-coral);
          border-left: 4px solid var(--pixel-text);
          border-right: 4px solid var(--pixel-text);
        }

        @media (max-width: 393px) {
          .animated-gift {
            padding: var(--space-lg);
          }
        }
        
        .animated-gift:hover {
          filter: brightness(1.2) drop-shadow(0 0 20px var(--pixel-pink));
          transform: scale(1.1);
          animation: none;
        }
        
        .animated-gift:active {
          transform: scale(0.95);
        }
        
        .animated-gift:focus-visible {
          outline: 3px solid var(--pixel-coral);
          outline-offset: 4px;
        }
      `}</style>
    </div>
  );
}
