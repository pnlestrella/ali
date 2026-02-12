'use client';

import { useEffect, useState } from 'react';

interface FlyingHeartProps {
  id: string;
  type: 'hug' | 'kiss';
  startX: number;
  startY: number;
  onComplete: (id: string) => void;
}

export default function FlyingHeart({ id, type, startX, startY, onComplete }: FlyingHeartProps) {
  const emoji = type === 'hug' ? '🤗' : '💋';
  
  // Random trajectory values - computed once on mount using useState initializer
  const [trajectoryConfig] = useState(() => ({
    endX: Math.random() * 200 - 100, // -100 to 100
    endY: -300 - Math.random() * 200, // -300 to -500
    rotation: Math.random() * 720 - 360, // -360 to 360
    duration: 2 + Math.random(), // 2-3 seconds
    scale: 0.8 + Math.random() * 0.4, // 0.8-1.2
  }));

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete(id);
    }, trajectoryConfig.duration * 1000);

    return () => clearTimeout(timer);
  }, [id, trajectoryConfig.duration, onComplete]);

  return (
    <>
      <div className="flying-heart">
        {emoji}
      </div>

      <style jsx>{`
        .flying-heart {
          position: fixed;
          left: ${startX}px;
          top: ${startY}px;
          font-size: 32px;
          pointer-events: none;
          z-index: 1000;
          animation: fly ${trajectoryConfig.duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        @keyframes fly {
          0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 1;
          }
          50% {
            opacity: 1;
            transform: translate(${trajectoryConfig.endX / 2}px, ${trajectoryConfig.endY / 2}px) rotate(${trajectoryConfig.rotation / 2}deg) scale(${trajectoryConfig.scale});
          }
          100% {
            opacity: 0;
            transform: translate(${trajectoryConfig.endX}px, ${trajectoryConfig.endY}px) rotate(${trajectoryConfig.rotation}deg) scale(${trajectoryConfig.scale * 0.5});
          }
        }
      `}</style>
    </>
  );
}
