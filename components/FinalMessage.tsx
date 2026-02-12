'use client';

import { useState, useEffect, useRef } from 'react';
import { Heart } from 'lucide-react';
import Image from 'next/image';

export default function FinalMessage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="final-message-container">
      <div className={`final-message ${isVisible ? 'visible' : ''}`}>
        <div className="hearts-decoration">
          <Heart size={24} fill="var(--pixel-pink)" color="var(--pixel-pink)" className="heart-1" />
          <Heart size={32} fill="var(--pixel-coral)" color="var(--pixel-coral)" className="heart-2" />
          <Heart size={24} fill="var(--pixel-pink)" color="var(--pixel-pink)" className="heart-3" />
        </div>
        <h1 className="main-heading">Happy Valentines</h1>
        <div className="gif-container">
          <Image
            src="/photos/flowers4u.gif"
            alt="Flowers for you"
            width={200}
            height={200}
            className="flowers-gif"
            unoptimized
          />
        </div>

        <h2 className="sub-heading">Flowers for yang</h2>
        <h2 className="sub-heading">I love u bebe</h2>
        <div className="sparkles">✨ 💕 ✨</div>

      </div>
      <style jsx>{`
        .final-message-container {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--space-xl);
        }
        
        .final-message {
          text-align: center;
          opacity: 0;
          transform: scale(0.8) translateY(20px);
          transition: all 1s ease-out;
        }
        
        .final-message.visible {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
        
        .hearts-decoration {
          display: flex;
          gap: var(--space-md);
          justify-content: center;
          margin-bottom: var(--space-xl);
        }
        
        .hearts-decoration :global(.heart-1) {
          animation: float-heart 3s ease-in-out infinite;
        }
        
        .hearts-decoration :global(.heart-2) {
          animation: float-heart 3s ease-in-out infinite 0.5s;
        }
        
        .hearts-decoration :global(.heart-3) {
          animation: float-heart 3s ease-in-out infinite 1s;
        }
        
        .main-heading {
          font-family: var(--pixel-font);
          font-size: clamp(24px, 7vw, 48px);
          color: var(--pixel-pink);
          margin-bottom: var(--space-md);
          text-shadow: 
            3px 3px 0 var(--pixel-peach),
            -1px -1px 0 rgba(255, 255, 255, 0.5);
          line-height: 1.6;
        }
        
        .sub-heading {
          font-family: var(--pixel-font);
          font-size: clamp(20px, 5vw, 36px);
          margin-bottom: var(--space-lg);
        }

        .gif-container {
          margin-top: var(--space-xl);
          display: flex;
          justify-content: center;
          animation: gentle-bounce 2s ease-in-out infinite;
        }

        .gif-container :global(.flowers-gif) {
          border-radius: 12px;
          border: 4px solid var(--pixel-pink);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          color: var(--pixel-coral);
          margin-bottom: var(--space-lg);
          line-height: 1.6;
          text-shadow: 
            2px 2px 0 rgba(255, 255, 255, 0.8);
        }
        

        @keyframes gentle-bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .sparkles {
          font-size: 32px;
          animation: sparkle-pulse 2s ease-in-out infinite;
        }
        
        @keyframes float-heart {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }
        
        @keyframes sparkle-pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}
