'use client';

import { Heart } from 'lucide-react';

interface LoveLetterProps {
  isVisible: boolean;
}

export default function LoveLetter({ isVisible }: LoveLetterProps) {
  return (
    <div className={`letter-container ${isVisible ? 'visible' : ''}`}>
      <div className="letter-paper">
        {/* Decorative corners */}
        <div className="corner-decoration top-left">
          <Heart fill="var(--pixel-pink)" size={16} />
        </div>
        <div className="corner-decoration top-right">
          <Heart fill="var(--pixel-coral)" size={16} />
        </div>

        {/* Letter content */}
        <div className="letter-content">
          <h3 className="letter-heading">A Letter for You</h3>

          <div className="letter-body">
            <p className="greeting">Dear YANG,</p>

            <p>
              Hello Baby! I&apos;m writing this letter to say i love love love u so much. You&apos;re one of the reasons na nag pupush through si pat sa mga struggles, sa pag gising q c yang agad ang bungad sa isip minsan sa panaginip din.
            </p>

            <p>
              Yk you always makes me feel special, i feel so good everyday knowing na may yang aq. I feel sorry pag natutulugan kita, suri minsan pagod c pat pero lagi kita love ehehehe.
            </p>

            <p>
              You know me very well bebe di me mahilig and sanay mag sulat ng mahahabang letters, although medyo iba ang way of gifting ko sayo, suri kung madisappoint c yang but i&apos;ll still make it out of love since this is how i can show na pag eeffortan kita sa mga paraang nakasanayan ni pat :D
            </p>

            <p>
              Anyways, i want u to always remember na keep ur heads up and be proud kung sino at anong mayroon ka bebe. I&apos;ve seen you throughout sa struggles mo since bago ka palang umalis sa pinas and i know na you&apos;re very strong softy girly, you&apos;re my yang afterall.
              Be confident, and i hope na you will always stay happy every milestones na na aachieve mo. 
            </p>

            <p>
              I want to thank you for staying with pat kahit matigas ulo ni pat palagi, i love u as always. Be what you want to be, trust yourself and believe sa process na pinagdaraanan at pagdaraanan mo pa. I will always support you.

            </p>

            <p className="closing">
              I love you very much Yang,<br />
              <span className="signature">Pakrik</span>
            </p>

            <p className="postscript">
              P.S. You mean the world to me, today and every day. 💕
            </p>
          </div>

          {/* Stamp decoration */}
          <div className="stamp">
            <Heart fill="var(--pixel-lavender)" size={20} />
            <div className="stamp-text">LOVE</div>
          </div>
        </div>

        {/* Decorative bottom hearts */}
        <div className="corner-decoration bottom-left">
          <Heart fill="var(--pixel-lavender)" size={16} />
        </div>
        <div className="corner-decoration bottom-right">
          <Heart fill="var(--pixel-peach)" size={16} />
        </div>
      </div>

      <style jsx>{`
        .letter-container {
          opacity: 0;
          transform: translateY(30px);
          transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 1.8s;
          width: 100%;
          max-width: 600px;
          position: relative;
          box-sizing: border-box;
          z-index: 5;
        }

        .letter-container.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .letter-paper {
          position: relative;
          background: var(--pixel-cream);
          border: 4px solid var(--pixel-pink);
          border-radius: 12px;
          padding: var(--space-xl);
          max-width: 600px;
          width: 100%;
          margin: 0 auto;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
          box-sizing: border-box;
        }

        .corner-decoration {
          position: absolute;
          opacity: 0.6;
        }

        .top-left {
          top: 16px;
          left: 16px;
        }

        .top-right {
          top: 16px;
          right: 16px;
        }

        .bottom-left {
          bottom: 16px;
          left: 16px;
        }

        .bottom-right {
          bottom: 16px;
          right: 16px;
        }

        .letter-content {
          position: relative;
          z-index: 1;
        }

        .letter-heading {
          font-family: var(--pixel-font);
          font-size: 16px;
          color: var(--pixel-pink);
          text-align: center;
          margin-bottom: var(--space-lg);
          padding-bottom: var(--space-md);
          border-bottom: 2px dashed var(--pixel-pink);
        }

        .letter-body {
          font-family: var(--body-font);
          font-size: 16px;
          line-height: 2;
          color: var(--pixel-text);
          letter-spacing: 0.3px;
        }

        .greeting {
          font-size: 18px;
          font-weight: 600;
          color: var(--pixel-pink);
          margin-bottom: var(--space-lg);
        }

        .letter-body p {
          margin-bottom: var(--space-lg);
        }

        .closing {
          margin-top: var(--space-xl);
          font-style: italic;
        }

        .signature {
          font-size: 20px;
          font-weight: 600;
          color: var(--pixel-coral);
        }

        .postscript {
          margin-top: var(--space-xl);
          padding-top: var(--space-md);
          border-top: 2px dashed var(--pixel-pink);
          font-size: 14px;
          font-style: italic;
          color: var(--pixel-pink);
        }

        .stamp {
          position: absolute;
          bottom: 20px;
          right: 20px;
          width: 60px;
          height: 60px;
          border: 3px solid var(--pixel-lavender);
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          background: rgba(255, 255, 255, 0.5);
          transform: rotate(15deg);
        }

        .stamp-text {
          font-family: var(--pixel-font);
          font-size: 10px;
          color: var(--pixel-lavender);
        }

        @media (max-width: 767px) {
          .letter-paper {
            padding: var(--space-lg);
            max-width: calc(100vw - 32px);
          }

          .letter-body {
            font-size: 15px;
            line-height: 1.8;
          }

          .letter-heading {
            font-size: 14px;
          }

          .stamp {
            width: 50px;
            height: 50px;
            bottom: 16px;
            right: 16px;
          }

          .stamp-text {
            font-size: 8px;
          }
        }
      `}</style>
    </div>
  );
}
