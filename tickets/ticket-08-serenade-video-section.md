# Ticket #08: Serenade Video Section

## 📋 Overview
Create a new dedicated section below the Word Cloud for displaying a serenade video. Design a cute, pixel-themed video player interface with decorative elements that emphasize the romantic, serenading purpose of the content.

## 🎯 Objectives
- Add new section between Word Cloud and Picture Roulette
- Create custom video player component
- Design cute, pixel-themed frame/border around video
- Add romantic decorative elements (hearts, musical notes)
- Include placeholder video for development
- Ensure mobile-responsive video playback
- Add optional message/caption area
- Maintain app's cozy pixel aesthetic

## 🎨 Design Specifications

### Section Layout
```
┌─────────────────────────────────────┐
│   🎵 A Song for You 🎵             │
│                                      │
│   ┌─────────────────────────┐      │
│   │  ♥    ♪    ♥    ♪    ♥  │      │
│   │                          │      │
│   │    [VIDEO PLAYER]        │      │
│   │                          │      │
│   │  ♪    ♥    ♪    ♥    ♪  │      │
│   └─────────────────────────┘      │
│                                      │
│   "This song reminds me of you"     │
└─────────────────────────────────────┘
```

### Video Container Styling
- **Border**: Chunky pixel border (5px solid)
- **Colors**: Pink/coral gradient frame
- **Corners**: Decorative heart icons at each corner
- **Inner Border**: Secondary border for depth
- **Shadow**: Drop shadow for lift effect

### Decorative Elements
```css
/* Corner hearts */
.video-corner {
  position: absolute;
  width: 32px;
  height: 32px;
  /* Positioned at each corner */
}

/* Musical notes floating */
.musical-notes {
  position: absolute;
  font-size: 24px;
  animation: float-notes 4s ease-in-out infinite;
  opacity: 0.6;
}

/* Sparkles */
.sparkle-decoration {
  position: absolute;
  animation: twinkle 2s ease-in-out infinite;
}
```

### Color Scheme
- **Frame**: Linear gradient (pixel-pink → pixel-coral)
- **Inner Border**: pixel-peach
- **Background**: pixel-cream with subtle pattern
- **Text**: pixel-text with shadow
- **Accents**: pixel-rose for hearts

## 🛠️ Technical Implementation

### Component Structure
```
components/
├── SerenadeVideo.tsx        # Main component
├── VideoPlayer.tsx          # Video player wrapper
└── VideoFrame.tsx           # Decorative frame
```

### Main Component
```typescript
// components/SerenadeVideo.tsx
'use client';

import { useState, useRef } from 'react';
import { Heart, Music2, Play, Pause } from 'lucide-react';

export default function SerenadeVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="serenade-section">
      <h2 className="section-heading">🎵 A Song for You 🎵</h2>
      
      <div className="video-frame">
        {/* Decorative corners */}
        <Heart className="corner-heart top-left" />
        <Heart className="corner-heart top-right" />
        <Music2 className="corner-note left-note" />
        <Music2 className="corner-note right-note" />
        
        {/* Video container */}
        <div className="video-container">
          <video
            ref={videoRef}
            className="video-player"
            controls
            poster="/video-placeholder.jpg"
          >
            <source src="/serenade-placeholder.mp4" type="video/mp4" />
            Your browser doesn't support video playback.
          </video>
        </div>
        
        {/* Decorative bottom hearts */}
        <Heart className="corner-heart bottom-left" />
        <Heart className="corner-heart bottom-right" />
      </div>
      
      <p className="video-caption">
        This song reminds me of you 💕
      </p>
    </div>
  );
}
```

### Styling
```css
.serenade-section {
  max-width: 700px;
  margin: 0 auto;
  padding: var(--space-xl);
  text-align: center;
}

.video-frame {
  position: relative;
  background: linear-gradient(
    135deg, 
    var(--pixel-pink) 0%, 
    var(--pixel-coral) 100%
  );
  border: 6px solid var(--pixel-text);
  border-radius: 16px;
  padding: var(--space-lg);
  box-shadow: 
    inset 0 0 0 4px var(--pixel-peach),
    10px 10px 0 rgba(0, 0, 0, 0.15);
}

.corner-heart {
  position: absolute;
  width: 32px;
  height: 32px;
  fill: var(--pixel-rose);
  color: var(--pixel-rose);
  filter: drop-shadow(2px 2px 0 rgba(0, 0, 0, 0.1));
}

.corner-heart.top-left {
  top: -16px;
  left: -16px;
  animation: pulse-heart 2s ease-in-out infinite;
}

.corner-heart.top-right {
  top: -16px;
  right: -16px;
  animation: pulse-heart 2s ease-in-out infinite 0.5s;
}

.corner-heart.bottom-left {
  bottom: -16px;
  left: -16px;
  animation: pulse-heart 2s ease-in-out infinite 1s;
}

.corner-heart.bottom-right {
  bottom: -16px;
  right: -16px;
  animation: pulse-heart 2s ease-in-out infinite 1.5s;
}

.corner-note {
  position: absolute;
  width: 24px;
  height: 24px;
  color: var(--pixel-lavender);
  opacity: 0.6;
  animation: float-notes 4s ease-in-out infinite;
}

.corner-note.left-note {
  left: 20%;
  top: 50%;
}

.corner-note.right-note {
  right: 20%;
  top: 50%;
}

.video-container {
  position: relative;
  width: 100%;
  background: #000;
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 16 / 9;
  border: 3px solid var(--pixel-text);
}

.video-player {
  width: 100%;
  height: 100%;
  display: block;
}

.video-caption {
  font-family: var(--body-font);
  font-size: 16px;
  font-style: italic;
  color: var(--pixel-text);
  margin-top: var(--space-lg);
  text-shadow: 1px 1px 0 rgba(255, 179, 186, 0.3);
}

@keyframes pulse-heart {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

@keyframes float-notes {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(10deg); }
}
```

## 📝 Integration Steps

### 1. Update page.tsx
```typescript
// Add import
import SerenadeVideo from '@/components/SerenadeVideo';

// Add section after Word Cloud
{/* Section 5: Serenade Video */}
<section className="serenade-section">
  <SerenadeVideo />
</section>
```

### 2. Add Section Styling
```css
.serenade-section {
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
}
```

### 3. Add Placeholder Video
Create placeholder in `public/`:
- serenade-placeholder.mp4 (10-15 sec loop)
- video-placeholder.jpg (poster image)

## ✅ Acceptance Criteria

### Video Playback
- [ ] Video loads without errors
- [ ] Play/pause controls work
- [ ] Volume controls functional
- [ ] Fullscreen option available
- [ ] Poster image displays before play
- [ ] Video loops or stops appropriately

### Design & Styling
- [ ] Pixel-themed frame around video
- [ ] Corner hearts display correctly
- [ ] Musical notes animated
- [ ] Colors match app theme
- [ ] Border styling consistent
- [ ] Shadows create depth

### Responsive
- [ ] Video scales on mobile (393px)
- [ ] Maintains 16:9 aspect ratio
- [ ] Frame decorations don't overlap
- [ ] Caption readable on all sizes
- [ ] Touch controls work on mobile

### Accessibility
- [ ] Video has proper controls
- [ ] Caption provides context
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Adequate color contrast

### Performance
- [ ] Video loads efficiently
- [ ] Doesn't block page load
- [ ] Smooth playback on mobile
- [ ] No memory leaks
- [ ] Optimized file size

## 🎯 Priority
**HIGH** - Core romantic feature

## ⏱️ Estimated Effort
- Design & Planning: 45 min
- Component Development: 2 hours
- Decorative Elements: 1 hour
- Video Integration: 1 hour
- Styling & Animations: 1.5 hours
- Responsive Testing: 45 min
- **Total**: ~7 hours

## 🔗 Dependencies
- Lucide React (Heart, Music2 icons)
- HTML5 Video API
- Placeholder video file

## 📌 Notes
- Video should be optimized for web (H.264, MP4)
- Keep file size reasonable (<20MB)
- Consider autoplay policies (muted autoplay only)
- Provide fallback for unsupported browsers
- Caption can be customized later
- Consider adding subtitles/captions

## 🎁 Nice-to-Have Additions
- [ ] Custom play button overlay
- [ ] Progress bar styling
- [ ] Animated musical notes on play
- [ ] Heart confetti on video end
- [ ] Download video option
- [ ] Share video button
- [ ] Lyrics display sync
- [ ] Custom video controls UI
- [ ] Animated frame on play
- [ ] Volume animation indicator

## 🎥 Placeholder Video Specs
For development:
- **Duration**: 10-15 seconds
- **Resolution**: 1280x720 (720p)
- **Format**: MP4 (H.264)
- **Size**: <5MB
- **Content**: Simple animation or stock footage
- **Audio**: Optional placeholder music

## 💕 Final Video Requirements
When replacing placeholder:
- Personal serenade or meaningful song
- Good audio quality
- Clear video (if face visible)
- Appropriate length (2-4 minutes)
- Encoded for web playback
- Optimized file size
- Proper permissions/rights
