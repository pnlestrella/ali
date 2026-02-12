'use client';

import FloatingWord from './FloatingWord';
import { emotions } from '@/lib/emotions';

export default function WordCloud() {
  return (
    <div className="word-cloud">
      <h2 className="section-heading">You Make Me Feel... ✨</h2>
      
      <div className="word-container">
        {emotions.map((word, index) => (
          <FloatingWord key={`${word.text}-${index}`} word={word} />
        ))}
      </div>

      <style jsx>{`
        .word-cloud {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
          padding: var(--space-lg);
        }

        .section-heading {
          font-family: var(--pixel-font);
          font-size: clamp(18px, 4vw, 24px);
          color: var(--pixel-pink);
          margin-bottom: var(--space-2xl);
          line-height: 1.6;
        }

        .word-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: clamp(16px, 3vw, 32px);
          min-height: 400px;
          padding: var(--space-lg);
        }

        @media (min-width: 768px) {
          .word-container {
            gap: clamp(24px, 4vw, 40px);
            min-height: 500px;
          }
        }
      `}</style>
    </div>
  );
}
