# Phase 4: Photo Slider with Frames

## 📦 Overview
Create an interactive photo slider section with pixel-themed frames. Each slide contains a photo on the left and a short description on the right. User can swipe/slide left or right through ~5 photos.

## 🎯 Requirements

### Slider Section
- Third full-screen section (393 x 852px optimized)
- Slidable photo gallery
- Touch/swipe gestures for mobile
- Navigation buttons (prev/next)
- Smooth slide transitions

### Photo Frame Design
- Pixel-themed chunky frame border (4-6px)
- Left side: Photo
- Right side: Short description text
- Frame contains both elements in single card
- Vertical or horizontal layout (responsive)

### Photo Specifications
- Dynamic photo loading (5 photos)
- Placeholder images initially
- Aspect ratio: 4:3 or 1:1 for consistency
- Optimized for mobile viewport
- Use Next.js Image component

### Description Area
- Short text (2-4 lines)
- Pixel font for title (optional)
- Regular font for description
- Comfortable spacing from photo
- Theme colors for text

### Slider Functionality
- Swipe left/right on mobile
- Click navigation buttons (arrows)
- Smooth transitions (0.3-0.4s)
- Loop: Optional (stops at first/last)
- Current slide indicator (dots)

### Slide Count
- Total: 5 photos dynamically
- Current/Total counter (e.g., "1/5")
- Dot indicators for each slide
- Active state styling

## 🛠️ Technical Implementation

### Components to Create
1. **PhotoSliderSection Component**
   - Third full-screen section
   - Container for slider

2. **PhotoSlider Component**
   - Main slider logic
   - Swipe gesture handling
   - Navigation controls

3. **PhotoFrame Component**
   - Individual slide layout
   - Photo + description card
   - Pixel frame styling

4. **SliderControls Component**
   - Previous/Next buttons
   - Dot indicators
   - Counter display

### Slider Options
- **Option A**: Custom implementation with CSS transforms
- **Option B**: Use library like Swiper or Embla Carousel
- **Recommended**: Embla Carousel (lightweight, touch-friendly)

### Data Structure
```tsx
interface Photo {
  id: number;
  src: string;
  alt: string;
  title?: string;
  description: string;
}

const photos: Photo[] = [
  {
    id: 1,
    src: '/photos/photo-1.jpg',
    alt: 'Photo 1',
    title: 'Memory 1',
    description: 'Short description here...'
  },
  // ... 4 more photos
];
```

### Files to Create/Modify
```
components/
├── PhotoSliderSection.tsx  # Section wrapper
├── PhotoSlider.tsx         # Slider container
├── PhotoFrame.tsx          # Individual slide
├── SliderControls.tsx      # Navigation UI
app/
├── page.tsx                # Add photo slider section
└── globals.css             # Slider animations
public/
└── photos/
    ├── photo-1.jpg         # Placeholder images
    ├── photo-2.jpg
    └── ... (5 total)
```

## ✅ Phase 4 Checklist

### Setup
- [ ] Choose slider approach (custom vs library)
- [ ] If using library: `npm install embla-carousel-react`
- [ ] Create photos directory in public
- [ ] Prepare 5 placeholder images
- [ ] Create photo data structure

### Photo Frame Component
- [ ] Create PhotoFrame component
- [ ] Layout: photo left, description right
- [ ] Add chunky pixel borders (4-6px)
- [ ] Style with theme colors
- [ ] Use Next.js Image for photos
- [ ] Add responsive breakpoints
- [ ] Test on mobile (393px width)

### Slider Container
- [ ] Create PhotoSlider component
- [ ] Set up slider state (current index)
- [ ] Implement slide transition logic
- [ ] Add swipe gesture handling (touch events)
- [ ] Create slide animation (transform: translateX)
- [ ] Handle edge cases (first/last slide)

### Navigation Controls
- [ ] Create SliderControls component
- [ ] Add Previous button (ChevronLeft icon)
- [ ] Add Next button (ChevronRight icon)
- [ ] Implement dot indicators (5 dots)
- [ ] Add current/total counter ("1/5")
- [ ] Style buttons with pixel theme
- [ ] Ensure touch-friendly size (44px min)
- [ ] Handle disabled states at edges

### Swipe Gestures
- [ ] Implement touch start handler
- [ ] Track touch move for swipe detection
- [ ] Calculate swipe direction on touch end
- [ ] Set threshold for valid swipe (50px+)
- [ ] Trigger slide change on swipe
- [ ] Add velocity detection (optional)
- [ ] Test swipe smoothness

### Photo Content
- [ ] Add 5 placeholder images to public/photos
- [ ] Create photo data array with descriptions
- [ ] Use Lorem ipsum for descriptions
- [ ] Optimize image sizes for mobile
- [ ] Test image loading performance
- [ ] Add loading states (optional)

### Animations
- [ ] Create slide transition animation
- [ ] Add fade in/out (optional)
- [ ] Smooth translate transform
- [ ] Duration: 0.3-0.4s
- [ ] Easing: ease-out or cubic-bezier
- [ ] Test animation performance

### Section Integration
- [ ] Create PhotoSliderSection wrapper
- [ ] Set full viewport height
- [ ] Center slider content
- [ ] Add background color/gradient
- [ ] Integrate with page.tsx
- [ ] Position as third section

### Styling
- [ ] Style photo frames with pixel borders
- [ ] Apply theme colors
- [ ] Add shadows for depth
- [ ] Style navigation buttons
- [ ] Style dot indicators
- [ ] Add active states
- [ ] Ensure mobile responsiveness

### Testing
- [ ] Test swipe left/right
- [ ] Test navigation button clicks
- [ ] Verify smooth transitions
- [ ] Check edge cases (first/last)
- [ ] Test on mobile viewport (393 x 852)
- [ ] Test on actual device
- [ ] Verify performance (no jank)

### Accessibility
- [ ] Add ARIA labels to buttons
- [ ] Keyboard navigation (arrow keys)
- [ ] Focus management
- [ ] Screen reader announcements
- [ ] Alt text for all images

## 📝 Technical Notes

### Custom Slider Implementation
```tsx
const [currentIndex, setCurrentIndex] = useState(0);
const [touchStart, setTouchStart] = useState(0);
const [touchEnd, setTouchEnd] = useState(0);

const handleTouchStart = (e: TouchEvent) => {
  setTouchStart(e.targetTouches[0].clientX);
};

const handleTouchMove = (e: TouchEvent) => {
  setTouchEnd(e.targetTouches[0].clientX);
};

const handleTouchEnd = () => {
  if (touchStart - touchEnd > 50) {
    // Swiped left
    goToNext();
  }
  if (touchStart - touchEnd < -50) {
    // Swiped right
    goToPrev();
  }
};

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
```

### Slider CSS Animation
```css
.slider-container {
  display: flex;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide {
  min-width: 100%;
  flex-shrink: 0;
}

/* Dynamic transform based on current index */
.slider-container {
  transform: translateX(calc(-100% * var(--current-index)));
}
```

### Embla Carousel Setup (Alternative)
```tsx
import useEmblaCarousel from 'embla-carousel-react';

const [emblaRef] = useEmblaCarousel({ 
  loop: false,
  align: 'center'
});

return (
  <div className="embla" ref={emblaRef}>
    <div className="embla__container">
      {photos.map((photo) => (
        <div className="embla__slide" key={photo.id}>
          <PhotoFrame photo={photo} />
        </div>
      ))}
    </div>
  </div>
);
```

### PhotoFrame Layout
```tsx
<div className="photo-frame">
  <div className="photo-container">
    <Image 
      src={photo.src} 
      alt={photo.alt}
      width={200}
      height={200}
      className="photo"
    />
  </div>
  <div className="description-container">
    {photo.title && <h3>{photo.title}</h3>}
    <p>{photo.description}</p>
  </div>
</div>
```

### Dot Indicators
```tsx
<div className="dots">
  {photos.map((_, index) => (
    <button
      key={index}
      className={`dot ${index === currentIndex ? 'active' : ''}`}
      onClick={() => setCurrentIndex(index)}
      aria-label={`Go to slide ${index + 1}`}
    />
  ))}
</div>
```

## 🎨 Design References
- Photo frames should look like pixel art picture frames
- Think retro photo album or scrapbook
- Frame borders: 4-6px, solid theme colors
- Description text should be easy to read
- Navigation should be intuitive and touch-friendly
- Smooth, gentle transitions (no jarring movements)

## ⏭️ Next Phase
Once Phase 4 is complete, move to **Phase 5: Final Valentine's Message** where we display the closing message.
