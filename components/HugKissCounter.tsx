'use client';

import { useState, useEffect, useRef } from 'react';
import CounterDisplay from './CounterDisplay';
import FlyingHeart from './FlyingHeart';

interface Heart {
  id: string;
  type: 'hug' | 'kiss';
  startX: number;
  startY: number;
}

export default function HugKissCounter() {
  const [hugCount, setHugCount] = useState(() => {
    if (typeof window === 'undefined') return 0;
    const saved = localStorage.getItem('hugCount');
    return saved ? parseInt(saved, 10) : 0;
  });
  
  const [kissCount, setKissCount] = useState(() => {
    if (typeof window === 'undefined') return 0;
    const saved = localStorage.getItem('kissCount');
    return saved ? parseInt(saved, 10) : 0;
  });
  
  const [hearts, setHearts] = useState<Heart[]>([]);
  const [pulse, setPulse] = useState(false);
  
  const hugButtonRef = useRef<HTMLButtonElement>(null);
  const kissButtonRef = useRef<HTMLButtonElement>(null);
  const counterRef = useRef(0);

  // Remove the useEffect that loads from localStorage since it's now in initializer

  // Save to localStorage whenever counts change
  useEffect(() => {
    localStorage.setItem('hugCount', hugCount.toString());
  }, [hugCount]);

  useEffect(() => {
    localStorage.setItem('kissCount', kissCount.toString());
  }, [kissCount]);

  const handleHug = () => {
    const button = hugButtonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    counterRef.current += 1;
    const newHeart: Heart = {
      id: `hug-${counterRef.current}`,
      type: 'hug',
      startX: centerX,
      startY: centerY,
    };

    setHearts(prev => [...prev, newHeart]);
    setHugCount(prev => prev + 1);
    triggerPulse();
  };

  const handleKiss = () => {
    const button = kissButtonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    counterRef.current += 1;
    const newHeart: Heart = {
      id: `kiss-${counterRef.current}`,
      type: 'kiss',
      startX: centerX,
      startY: centerY,
    };

    setHearts(prev => [...prev, newHeart]);
    setKissCount(prev => prev + 1);
    triggerPulse();
  };

  const triggerPulse = () => {
    setPulse(true);
    setTimeout(() => setPulse(false), 400);
  };

  const removeHeart = (id: string) => {
    setHearts(prev => prev.filter(heart => heart.id !== id));
  };

  return (
    <>
      <div className="hug-kiss-counter">
        <h2 className="section-heading">Send Some Love 💌</h2>
        
        <CounterDisplay 
          hugCount={hugCount} 
          kissCount={kissCount} 
          pulse={pulse}
        />

        <div className="button-container">
          <button 
            ref={hugButtonRef}
            className="action-button hug-button"
            onClick={handleHug}
          >
            🤗
            <span className="button-text">Send a Hug</span>
          </button>
          
          <button 
            ref={kissButtonRef}
            className="action-button kiss-button"
            onClick={handleKiss}
          >
            💋
            <span className="button-text">Blow a Kiss</span>
          </button>
        </div>

        <p className="hint-text">Tap the buttons to send love! 💕</p>
      </div>

      {/* Render all flying hearts */}
      {hearts.map(heart => (
        <FlyingHeart
          key={heart.id}
          id={heart.id}
          type={heart.type}
          startX={heart.startX}
          startY={heart.startY}
          onComplete={removeHeart}
        />
      ))}

      <style jsx>{`
        .hug-kiss-counter {
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
          padding: var(--space-lg);
        }

        .section-heading {
          font-family: var(--pixel-font);
          font-size: clamp(18px, 4vw, 24px);
          color: var(--pixel-text);
          margin-bottom: var(--space-xl);
          line-height: 1.6;
          text-shadow: 2px 2px 0 rgba(255, 179, 186, 0.5);
          font-weight: bold;
        }

        .button-container {
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
          margin-bottom: var(--space-lg);
        }

        .action-button {
          font-family: var(--pixel-font);
          font-size: 16px;
          padding: var(--space-md) var(--space-lg);
          border: 4px solid var(--pixel-pink);
          border-radius: 12px;
          background: var(--pixel-cream);
          color: var(--pixel-text);
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-sm);
          min-height: 60px;
          font-size: 14px;
        }

        .action-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        .action-button:active {
          transform: translateY(0) scale(0.95);
          animation: bounce 0.3s ease;
        }

        @keyframes bounce {
          0%, 100% {
            transform: scale(0.95);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .hug-button {
          border-color: var(--pixel-coral);
          background: linear-gradient(135deg, var(--pixel-cream) 0%, #ffe8d8 100%);
        }

        .hug-button:hover {
          background: linear-gradient(135deg, #ffe8d8 0%, var(--pixel-coral) 100%);
        }

        .kiss-button {
          border-color: var(--pixel-pink);
          background: linear-gradient(135deg, var(--pixel-cream) 0%, #ffd8e0 100%);
        }

        .kiss-button:hover {
          background: linear-gradient(135deg, #ffd8e0 0%, var(--pixel-pink) 100%);
        }

        .button-text {
          font-size: 12px;
        }

        .hint-text {
          font-family: var(--body-font);
          font-size: 14px;
          color: var(--pixel-text);
          opacity: 0.7;
          font-style: italic;
        }

        @media (min-width: 640px) {
          .button-container {
            flex-direction: row;
            justify-content: center;
          }

          .action-button {
            flex: 1;
            max-width: 250px;
          }

          .button-text {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
}
