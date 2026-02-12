'use client';

import { useEffect, useState } from 'react';

interface ConfettiHeart {
  id: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  rotation: number;
  delay: number;
  duration: number;
  size: number;
  color: string;
}

interface ConfettiExplosionProps {
  x: number;
  y: number;
  onComplete: () => void;
}

const colors = [
  'var(--pixel-pink)',
  'var(--pixel-coral)',
  'var(--pixel-rose)',
  'var(--pixel-peach)',
  'var(--pixel-lavender)',
];

export default function ConfettiExplosion({ x, y, onComplete }: ConfettiExplosionProps) {
  const [hearts] = useState<ConfettiHeart[]>(() => {
    // Generate 25 confetti hearts
    const newHearts: ConfettiHeart[] = [];
    for (let i = 0; i < 25; i++) {
      const angle = (Math.PI * 2 * i) / 25;
      const velocity = 100 + Math.random() * 150;
      const spread = 0.5 + Math.random() * 0.5;
      
      newHearts.push({
        id: i,
        startX: x,
        startY: y,
        endX: x + Math.cos(angle) * velocity * spread,
        endY: y + Math.sin(angle) * velocity * spread - 100,
        rotation: Math.random() * 360,
        delay: Math.random() * 200,
        duration: 2000 + Math.random() * 1000,
        size: 16 + Math.random() * 16,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    return newHearts;
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="confetti-container">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="confetti-heart"
          style={{
            left: `${heart.startX}px`,
            top: `${heart.startY}px`,
            '--end-x': `${heart.endX - heart.startX}px`,
            '--end-y': `${heart.endY - heart.startY}px`,
            '--rotation': `${heart.rotation}deg`,
            '--delay': `${heart.delay}ms`,
            '--duration': `${heart.duration}ms`,
            '--size': `${heart.size}px`,
            color: heart.color,
          } as React.CSSProperties}
        >
          ❤
        </div>
      ))}

      <style jsx>{`
        .confetti-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          pointer-events: none;
          z-index: 9999;
          overflow: hidden;
        }

        .confetti-heart {
          position: fixed;
          font-size: var(--size);
          animation: 
            confetti-burst var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) var(--delay) forwards,
            confetti-fade var(--duration) ease-in var(--delay) forwards;
          transform-origin: center;
        }

        @keyframes confetti-burst {
          0% {
            transform: 
              translate(0, 0) 
              rotate(0deg) 
              scale(0);
            opacity: 1;
          }
          50% {
            transform: 
              translate(
                calc(var(--end-x) * 0.6),
                calc(var(--end-y) * 0.6)
              )
              rotate(calc(var(--rotation) * 0.5))
              scale(1);
            opacity: 1;
          }
          100% {
            transform: 
              translate(var(--end-x), calc(var(--end-y) + 200px))
              rotate(var(--rotation))
              scale(0.8);
            opacity: 0;
          }
        }

        @keyframes confetti-fade {
          0%, 50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
