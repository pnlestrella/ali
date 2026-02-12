'use client';

import { Heart } from 'lucide-react';

interface HeartParticle {
  id: number;
  left: string;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}

const hearts: HeartParticle[] = [
  { id: 0, left: '5%', size: 20, delay: 0, duration: 20, opacity: 0.15 },
  { id: 1, left: '15%', size: 28, delay: 3, duration: 18, opacity: 0.2 },
  { id: 2, left: '25%', size: 24, delay: 6, duration: 22, opacity: 0.12 },
  { id: 3, left: '35%', size: 32, delay: 1, duration: 19, opacity: 0.18 },
  { id: 4, left: '45%', size: 18, delay: 8, duration: 21, opacity: 0.15 },
  { id: 5, left: '55%', size: 26, delay: 4, duration: 17, opacity: 0.22 },
  { id: 6, left: '65%', size: 22, delay: 10, duration: 23, opacity: 0.14 },
  { id: 7, left: '75%', size: 30, delay: 2, duration: 20, opacity: 0.16 },
  { id: 8, left: '85%', size: 16, delay: 7, duration: 18, opacity: 0.2 },
  { id: 9, left: '95%', size: 24, delay: 5, duration: 22, opacity: 0.13 },
  { id: 10, left: '10%', size: 28, delay: 12, duration: 19, opacity: 0.17 },
  { id: 11, left: '40%', size: 20, delay: 9, duration: 21, opacity: 0.19 },
  { id: 12, left: '60%', size: 34, delay: 11, duration: 24, opacity: 0.15 },
  { id: 13, left: '80%', size: 22, delay: 13, duration: 18, opacity: 0.21 },
  { id: 14, left: '50%', size: 26, delay: 14, duration: 20, opacity: 0.16 },
];

export default function FloatingHearts() {

  return (
    <div className="floating-hearts-container">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="floating-heart"
          style={{
            left: heart.left,
            '--size': `${heart.size}px`,
            '--delay': `${heart.delay}s`,
            '--duration': `${heart.duration}s`,
            '--opacity': heart.opacity,
          } as React.CSSProperties}
        >
          <Heart
            fill="var(--pixel-pink)"
            color="var(--pixel-rose)"
            size={heart.size}
          />
        </div>
      ))}

      <style jsx>{`
        .floating-hearts-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }

        .floating-heart {
          position: absolute;
          bottom: -60px;
          animation: float-up var(--duration) linear infinite;
          animation-delay: var(--delay);
          opacity: var(--opacity);
          will-change: transform;
        }

        @keyframes float-up {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: var(--opacity);
          }
          90% {
            opacity: var(--opacity);
          }
          100% {
            transform: translateY(-100vh) translateX(20px) rotate(15deg);
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .floating-heart {
            animation: none;
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
