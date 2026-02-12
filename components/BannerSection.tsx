'use client';

import Image from 'next/image';

export default function BannerSection() {
  return (
    <div className="banner-container">
      <div className="banner-image-wrapper">
        <Image
          src="/photos/banner.png"
          alt="Banner"
          fill
          className="banner-image"
          priority
        />
        <div className="banner-gradient" />
      </div>
      
      <style jsx>{`
        .banner-container {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
        }

        .banner-image-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 180px;
        }

        .banner-image {
          object-fit: cover;
          object-position: center;
        }

        .banner-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(255, 182, 193, 0.3) 0%,
            rgba(255, 192, 203, 0.2) 25%,
            rgba(230, 190, 255, 0.2) 50%,
            rgba(255, 218, 185, 0.2) 75%,
            rgba(255, 182, 193, 0.3) 100%
          );
          mix-blend-mode: overlay;
          pointer-events: none;
        }

        @media (min-width: 768px) {
          .banner-image-wrapper {
            min-height: 250px;
          }
        }
      `}</style>
    </div>
  );
}
