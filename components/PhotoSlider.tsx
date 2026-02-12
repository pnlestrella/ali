'use client';

import { useState, TouchEvent } from 'react';
import PhotoFrame from './PhotoFrame';
import SliderControls from './SliderControls';
import { photos } from '@/lib/photos';

export default function PhotoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => 
      prev < photos.length - 1 ? prev + 1 : prev
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => 
      prev > 0 ? prev - 1 : prev
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swiped left
      goToNext();
    }
    if (touchStart - touchEnd < -75) {
      // Swiped right
      goToPrev();
    }
  };

  return (
    <div className="photo-slider">
      <div 
        className="slider-track"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="slider-container"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {photos.map((photo) => (
            <div key={photo.id} className="slide">
              <PhotoFrame photo={photo} />
            </div>
          ))}
        </div>
      </div>
      
      <SliderControls
        currentIndex={currentIndex}
        totalSlides={photos.length}
        onPrevious={goToPrev}
        onNext={goToNext}
        onDotClick={goToSlide}
      />
      
      <style jsx>{`
        .photo-slider {
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .slider-track {
          overflow: hidden;
          width: 100%;
          position: relative;
          touch-action: pan-y;
        }
        
        .slider-container {
          display: flex;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }
        
        .slide {
          min-width: 100%;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 var(--space-xs);
        }

        @media (min-width: 768px) {
          .slide {
            padding: 0 var(--space-md);
          }
        }
      `}</style>
    </div>
  );
}
