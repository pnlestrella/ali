'use client';

import { useState } from 'react';
import AnimatedGift from '@/components/AnimatedGift';
import WelcomeModal from '@/components/WelcomeModal';
import ScrollIndicator from '@/components/ScrollIndicator';
import LoveLetterSection from '@/components/LoveLetterSection';
import PhotoSlider from '@/components/PhotoSlider';
import BannerSection from '@/components/BannerSection';
import WordCloud from '@/components/WordCloud';
import SerenadeVideo from '@/components/SerenadeVideo';
import HugKissCounter from '@/components/HugKissCounter';
import PixelArtSection from '@/components/PixelArtSection';
import PictureRoulette from '@/components/DateRoulette';
import FinalMessage from '@/components/FinalMessage';

export default function Home() {
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState(false);
  const [giftOpened, setGiftOpened] = useState(false);

  const handleGiftClick = () => {
    setGiftOpened(true);
    setIsWelcomeModalOpen(true);
  };

  return (
    <>
      {/* Section 1: Landing with Animated Gift */}
      <section className="landing-section">
        <div className="landing-content">
          <AnimatedGift onClick={handleGiftClick} isOpened={giftOpened} />
          <ScrollIndicator isGiftOpened={giftOpened} />
        </div>
      </section>

      {/* Section 2: Love Letter */}
      <section className="message-section">
        <LoveLetterSection />
      </section>

      {/* Section 3: Photo Slider */}
      <section className="photo-slider-section">
        <div className="section-content">
          <h2 className="section-heading">Our Memories 📸</h2>
          <PhotoSlider />
        </div>
      </section>

      {/* Section 4: Banner */}
      <section className="banner-section">
        <BannerSection />
      </section>

      {/* Section 5: Word Cloud */}
      <section className="word-cloud-section">
        <WordCloud />
      </section>

      {/* Section 6: Serenade Video */}
      <section className="serenade-video-section">
        <SerenadeVideo />
      </section>

      {/* Section 7: Picture Roulette */}
      <section className="picture-roulette-section">
        <PictureRoulette />
      </section>

      {/* Section 8: Hug/Kiss Counter */}
      <section className="hug-kiss-section">
        <HugKissCounter />
      </section>

      {/* Section 9: Pixel Art */}
      <section className="pixel-art-section">
        <PixelArtSection />
      </section>

      {/* Section 10: Final Message */}
      <section className="final-message-section">
        <FinalMessage />
      </section>

      {/* Modals */}
      <WelcomeModal 
        isOpen={isWelcomeModalOpen} 
        onClose={() => setIsWelcomeModalOpen(false)} 
      />

      <style jsx>{`
        .landing-section {
          min-height: 100vh;
          height: 100vh;
          min-height: 100dvh;
          height: 100dvh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(
            135deg,
            var(--pixel-cream) 0%,
            var(--pixel-rose) 100%
          );
          padding: var(--space-md);
          scroll-snap-align: start;
          scroll-snap-stop: always;
          width: 100%;
          max-width: 100vw;
          overflow-x: hidden;
        }

        .landing-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-lg);
        }

        .message-section {
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(
            135deg,
            var(--pixel-peach) 0%,
            var(--pixel-lavender) 100%
          );
          padding: var(--space-md);
          scroll-snap-align: start;
          scroll-snap-stop: always;
          width: 100%;
          max-width: 100vw;
          overflow-x: hidden;
        }

        .photo-slider-section {
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(
            135deg,
            var(--pixel-lavender) 0%,
            var(--pixel-mint) 100%
          );
          padding: var(--space-xl) var(--space-md);
          scroll-snap-align: start;
          scroll-snap-stop: always;
          width: 100%;
          max-width: 100vw;
          overflow-x: hidden;
        }

        .banner-section {
          min-height: 25vh;
          min-height: 25dvh;
          height: 25vh;
          height: 25dvh;
          display: flex;
          align-items: center;
          justify-content: center;
          scroll-snap-align: start;
          width: 100%;
          max-width: 100vw;
          overflow: hidden;
          position: relative;
        }

        .word-cloud-section {
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(
            135deg,
            var(--pixel-cream) 0%,
            var(--pixel-peach) 100%
          );
          padding: var(--space-xl) var(--space-md);
          scroll-snap-align: start;
          scroll-snap-stop: always;
          width: 100%;
          max-width: 100vw;
          overflow-x: hidden;
        }

        .serenade-video-section {
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(
            135deg,
            var(--pixel-lavender) 0%,
            var(--pixel-peach) 100%
          );
          padding: var(--space-xl) var(--space-md);
          scroll-snap-align: start;
          scroll-snap-stop: always;
          width: 100%;
          max-width: 100vw;
          overflow-x: hidden;
        }

        .picture-roulette-section {
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(
            135deg,
            var(--pixel-cream) 0%,
            var(--pixel-mint) 100%
          );
          padding: var(--space-xl) var(--space-md);
          scroll-snap-align: start;
          scroll-snap-stop: always;
          width: 100%;
          max-width: 100vw;
          overflow-x: hidden;
        }

        .hug-kiss-section {
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(
            135deg,
            var(--pixel-pink) 0%,
            var(--pixel-coral) 100%
          );
          padding: var(--space-xl) var(--space-md);
          scroll-snap-align: start;
          scroll-snap-stop: always;
          width: 100%;
          max-width: 100vw;
          overflow-x: hidden;
        }

        .pixel-art-section {
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(
            135deg,
            var(--pixel-lavender) 0%,
            var(--pixel-peach) 50%,
            var(--pixel-mint) 100%
          );
          padding: var(--space-xl) var(--space-md);
          scroll-snap-align: start;
          scroll-snap-stop: always;
          width: 100%;
          max-width: 100vw;
          overflow-x: hidden;
        }

        .final-message-section {
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(
            135deg,
            var(--pixel-cream) 0%,
            var(--pixel-rose) 50%,
            var(--pixel-lavender) 100%
          );
          padding: var(--space-md);
          scroll-snap-align: start;
          scroll-snap-stop: always;
          width: 100%;
          max-width: 100vw;
          overflow-x: hidden;
        }

        .section-content {
          text-align: center;
          max-width: 800px;
          width: 100%;
          padding: 0 var(--space-sm);
          box-sizing: border-box;
        }

        @media (min-width: 768px) {
          .section-content {
            padding: 0 var(--space-md);
          }
        }

        .section-heading {
          font-family: var(--pixel-font);
          font-size: clamp(20px, 5vw, 32px);
          color: var(--pixel-text);
          margin-bottom: var(--space-lg);
          line-height: 1.6;
          text-shadow: 
            2px 2px 0 rgba(255, 255, 255, 0.5),
            -1px -1px 0 rgba(0, 0, 0, 0.1);
        }

        .section-text {
          font-size: 18px;
          line-height: 1.8;
          color: var(--pixel-text);
        }
      `}</style>
    </>
  );
}