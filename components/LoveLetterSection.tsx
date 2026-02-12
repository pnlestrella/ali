'use client';

import { useState, useEffect, useRef } from 'react';
import EnvelopeAnimation from './EnvelopeAnimation';
import LoveLetter from './LoveLetter';

export default function LoveLetterSection() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          // Small delay for dramatic effect
          setTimeout(() => {
            setIsEnvelopeOpen(true);
            setHasTriggered(true);
          }, 500);
        }
      },
      { threshold: 0.3, rootMargin: '0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasTriggered]);

  return (
    <div ref={sectionRef} className="love-letter-section">
      <EnvelopeAnimation isOpen={isEnvelopeOpen} />
      <LoveLetter isVisible={isEnvelopeOpen} />

      <style jsx>{`
        .love-letter-section {
          padding: 100px var(--space-md) 200px;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 100vw;
          overflow-x: hidden;
          box-sizing: border-box;
        }

        @media (min-width: 768px) {
          .love-letter-section {
            padding: 120px var(--space-lg) 240px;
          }
        }
      `}</style>
    </div>
  );
}
