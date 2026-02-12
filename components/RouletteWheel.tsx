'use client';

import Image from 'next/image';
import { pictureIdeas } from '@/lib/pictureIdeas';

interface RouletteWheelProps {
  rotation: number;
  isSpinning: boolean;
}

export default function RouletteWheel({ rotation, isSpinning }: RouletteWheelProps) {
  const segmentCount = pictureIdeas.length;
  const degreesPerSegment = 360 / segmentCount;

  return (
    <div className="wheel-container">
      <div 
        className={`wheel ${isSpinning ? 'spinning' : ''}`}
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {pictureIdeas.map((idea, index) => {
          const angle = (index * degreesPerSegment) - 90;
          return (
            <div
              key={idea.id}
              className="wheel-segment"
              style={{
                transform: `rotate(${angle}deg)`,
                backgroundColor: idea.color,
              }}
            >
              <div className="segment-content">
                <div className="segment-photo-wrapper">
                  <Image
                    src={idea.imageSrc}
                    alt={idea.title}
                    width={100}
                    height={100}
                    className="segment-photo"
                  />
                </div>
              </div>
            </div>
          );
        })}
        <div className="wheel-center">
          <div className="center-dot" />
        </div>
      </div>
      <div className="wheel-pointer" />
      
      <style jsx>{`
        .wheel-container {
          position: relative;
          width: 300px;
          height: 300px;
          margin: 0 auto;
        }

        .wheel {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          position: relative;
          border: 6px solid var(--pixel-text);
          box-shadow: 
            inset 0 0 20px rgba(0, 0, 0, 0.1),
            0 10px 30px rgba(0, 0, 0, 0.2);
          transition: transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99);
        }

        .wheel.spinning {
          transition-duration: 4s;
        }

        .wheel-segment {
          position: absolute;
          width: 50%;
          height: 50%;
          top: 0;
          left: 50%;
          transform-origin: 0% 100%;
          clip-path: polygon(0 0, 100% 0, 50% 100%);
          border: 2px solid var(--pixel-text);
        }
photo-wrapper {
          transform: rotate(90deg);
        }

        .segment-photo {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          border: 4px solid var(--pixel-text);
          object-fit: cover;
          box-shadow: 
            inset 0 0 0 2px rgba(255, 255, 255, 0.3),
            0 4px 8px rgba(0, 0, 0, 0.3
          left: 60%;
          transform: translateX(-50%);
        }

        .segment-emoji {
          font-size: 24px;
          display: block;
          transform: rotate(90deg);
        }

        .wheel-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80px;
          height: 80px;
          background: var(--pixel-cream);
          border: 5px solid var(--pixel-text);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 
            inset 3px 3px 0 rgba(255, 255, 255, 0.5),
            inset -3px -3px 0 rgba(0, 0, 0, 0.2);
          z-index: 10;
        }

        .center-dot {
          width: 20px;
          height: 20px;
          background: var(--pixel-text);
          border-radius: 50%;
        }

        .wheel-pointer {
          position: absolute;
          top: -30px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 15px solid transparent;
          border-right: 15px solid transparent;
          border-top: 30px solid var(--pixel-coral);
          filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2));
          z-index: 20;
        }

        .wheel-pointer::after {
          content: '';
          position: absolute;
          top: -30px;
          left: -12px;
          width: 24px;
          height: 24px;
          border: 4px solid var(--pixel-text);
          border-radius: 50%;
          backgrounphoto {
            width: 100px;
            height: 100

        @media (min-width: 768px) {
          .wheel-container {
            width: 400px;
            height: 400px;
          }

          .segment-emoji {
            font-size: 32px;
          }

          .wheel-center {
            width: 100px;
            height: 100px;
          }
        }
      `}</style>
    </div>
  );
}
