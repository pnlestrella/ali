'use client';

import Image from 'next/image';
import { Photo } from '@/lib/photos';

interface PhotoFrameProps {
  photo: Photo;
}

export default function PhotoFrame({ photo }: PhotoFrameProps) {
  return (
    <div className="photo-frame">
      <div className="photo-container">
        <Image
          src={photo.src}
          alt={photo.alt}
          width={300}
          height={225}
          className="photo-image"
          priority={photo.id <= 2}
        />
      </div>
      <div className="description-container">
        <h3 className="photo-title">{photo.title}</h3>
        <p className="photo-description">{photo.description}</p>
      </div>
      <style jsx>{`
        .photo-frame {
          background: var(--pixel-cream);
          border: 4px solid var(--pixel-pink);
          border-radius: 8px;
          padding: var(--space-md);
          box-shadow: 
            inset 2px 2px 0 rgba(255, 255, 255, 0.5),
            8px 8px 0 rgba(93, 78, 96, 0.2);
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
          max-width: 340px;
          width: 100%;
          margin: 0 auto;
          box-sizing: border-box;
          min-height: 480px;
        }
        
        .photo-container {
          position: relative;
          width: 100%;
          height: 280px;
          border: 3px solid var(--pixel-coral);
          border-radius: 4px;
          overflow: hidden;
          background: var(--pixel-bg);
          flex-shrink: 0;
        }
        
        .photo-image {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }
        
        .description-container {
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
          min-height: 100px;
          flex: 1;
        }
        
        .photo-title {
          font-family: var(--pixel-font);
          font-size: 14px;
          color: var(--pixel-coral);
          line-height: 1.6;
          text-transform: uppercase;
        }
        
        .photo-description {
          font-family: var(--body-font);
          font-size: 15px;
          line-height: 1.6;
          color: var(--pixel-text);
        }
        
        @media (min-width: 768px) {
          .photo-frame {
            flex-direction: row;
            max-width: 700px;
            align-items: center;
            padding: var(--space-lg);
            gap: var(--space-lg);
            min-height: 320px;
          }
          
          .photo-container {
            flex: 0 0 300px;
            height: 280px;
          }
          
          .description-container {
            flex: 1;
            min-height: auto;
          }
        }
      `}</style>
    </div>
  );
}
