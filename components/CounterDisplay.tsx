'use client';

interface CounterDisplayProps {
  hugCount: number;
  kissCount: number;
  pulse: boolean;
}

export default function CounterDisplay({ hugCount, kissCount, pulse }: CounterDisplayProps) {
  const total = hugCount + kissCount;

  return (
    <div className="counter-display">
      <div className="counter-title">💕 Love Counter 💕</div>
      <div className={`counter-main ${pulse ? 'pulse' : ''}`}>
        {total}
      </div>
      <div className="counter-breakdown">
        <span className="counter-item">
          🤗 Hugs: <strong>{hugCount}</strong>
        </span>
        <span className="counter-divider">|</span>
        <span className="counter-item">
          💋 Kisses: <strong>{kissCount}</strong>
        </span>
      </div>

      <style jsx>{`
        .counter-display {
          text-align: center;
          margin-bottom: var(--space-xl);
        }

        .counter-title {
          font-family: var(--pixel-font);
          font-size: 14px;
          color: var(--pixel-text);
          margin-bottom: var(--space-md);
          letter-spacing: 1px;
          text-shadow: 1px 1px 0 rgba(255, 179, 186, 0.5);
          font-weight: bold;
        }

        .counter-main {
          font-family: var(--pixel-font);
          font-size: 64px;
          color: var(--pixel-coral);
          line-height: 1;
          margin-bottom: var(--space-md);
          text-shadow: 3px 3px 0 rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .counter-main.pulse {
          animation: pulse 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97);
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }

        .counter-breakdown {
          font-family: var(--pixel-font);
          font-size: 12px;
          color: var(--pixel-text);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-sm);
        }

        .counter-item strong {
          color: var(--pixel-pink);
        }

        .counter-divider {
          opacity: 0.5;
        }

        @media (min-width: 768px) {
          .counter-title {
            font-size: 16px;
          }

          .counter-main {
            font-size: 80px;
          }

          .counter-breakdown {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
}
