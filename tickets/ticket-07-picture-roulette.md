# Ticket #07: Picture Roulette (Date Roulette Transformation)

## 📋 Overview
Transform the existing Date Ideas Roulette into a Picture Roulette with 6 photo choices displayed on the spinning wheel instead of emojis. Replace text-based date ideas with actual photos that represent different date categories.

## 🎯 Objectives
- Refactor Date Roulette to Picture Roulette
- Replace emoji icons with actual photos on wheel segments
- Reduce from 10 choices to 6 photo categories
- Maintain spinning wheel mechanic
- Update styling to accommodate photos
- Add placeholder images initially
- Ensure photos display correctly at all sizes

## 🎨 Design Specifications

### Picture Categories (6)
1. **Outdoor Adventure**
   - Photo: Nature/hiking/outdoor activity
   - Color: var(--pixel-mint)
   
2. **Cozy Indoor**
   - Photo: Home/cozy setting/movie night
   - Color: var(--pixel-peach)
   
3. **Romantic Dinner**
   - Photo: Restaurant/candlelight dinner
   - Color: var(--pixel-coral)
   
4. **Fun Activity**
   - Photo: Games/arcade/bowling
   - Color: var(--pixel-pink)
   
5. **Cultural Experience**
   - Photo: Museum/art gallery/theater
   - Color: var(--pixel-lavender)
   
6. **Spontaneous Date**
   - Photo: Surprise/mystery/adventure
   - Color: var(--pixel-rose)

### Wheel Layout
- **Segments**: 6 equal slices (60° each)
- **Photo Display**: Circular/rounded photos in each segment
- **Photo Size**: 80px diameter on mobile, 100px on desktop
- **Border**: Pixel-style border around each photo
- **Overlay**: Semi-transparent color overlay matching segment

### Visual Design
```
      ┌─────────────────┐
     ╱   [Photo 1]      ╲
    │   Outdoor         │
   ╱                    ╲
  │     [SPIN]     [Photo 2]
   ╲                    ╱
    │   Cozy Indoor    │
     ╲   [Photo 3]    ╱
      └─────────────────┘
```

### Photo Styling
```css
.segment-photo {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 4px solid var(--pixel-text);
  object-fit: cover;
  box-shadow: 
    inset 0 0 0 2px rgba(255, 255, 255, 0.3),
    0 4px 8px rgba(0, 0, 0, 0.2);
}
```

## 🛠️ Technical Implementation

### Files to Modify
```
lib/
└── dateIdeas.ts → pictureIdeas.ts
components/
├── DateRoulette.tsx → PictureRoulette.tsx
└── RouletteWheel.tsx (update for photos)
public/
└── roulette-photos/ (new folder)
    ├── outdoor.jpg (placeholder)
    ├── cozy.jpg (placeholder)
    ├── dinner.jpg (placeholder)
    ├── fun.jpg (placeholder)
    ├── cultural.jpg (placeholder)
    └── spontaneous.jpg (placeholder)
```

### Data Structure Update
```typescript
// lib/pictureIdeas.ts
export interface PictureIdea {
  id: number;
  title: string;
  category: string;
  imageSrc: string;
  color: string;
  description: string;
}

export const pictureIdeas: PictureIdea[] = [
  {
    id: 1,
    title: 'Outdoor Adventure',
    category: 'Nature & Outdoors',
    imageSrc: '/roulette-photos/outdoor.jpg',
    color: 'var(--pixel-mint)',
    description: 'Explore nature together with a hike or picnic!'
  },
  {
    id: 2,
    title: 'Cozy Indoor',
    category: 'Home & Comfort',
    imageSrc: '/roulette-photos/cozy.jpg',
    color: 'var(--pixel-peach)',
    description: 'Snuggle up for a movie night or game session!'
  },
  // ... 4 more
];
```

### Wheel Component Update
```typescript
// components/RouletteWheel.tsx
<div className="wheel-segment" style={{ backgroundColor: idea.color }}>
  <div className="segment-content">
    <Image
      src={idea.imageSrc}
      alt={idea.title}
      width={80}
      height={80}
      className="segment-photo"
    />
    <span className="segment-title">{idea.title}</span>
  </div>
</div>
```

### Placeholder Images
For initial development, use:
- **Approach 1**: Colored SVG placeholders (300x300px)
- **Approach 2**: Next.js placeholder images with blurhash
- **Approach 3**: Unsplash placeholder URLs

```typescript
// Temporary placeholder approach
const placeholders = {
  outdoor: 'https://via.placeholder.com/300/D4E4D4/5D4E60?text=Outdoor',
  cozy: 'https://via.placeholder.com/300/FFCCB6/5D4E60?text=Cozy',
  // ... etc
};
```

## ✅ Acceptance Criteria

### Photo Display
- [ ] 6 photos visible on wheel segments
- [ ] Photos are circular with pixel borders
- [ ] Photos scale correctly (mobile/desktop)
- [ ] Photos don't distort or stretch
- [ ] Photos overlay with segment color
- [ ] All photos load without errors

### Wheel Mechanics
- [ ] Spin animation works with 6 segments
- [ ] Rotation calculation correct for 60° segments
- [ ] Random selection picks from all 6 options
- [ ] Wheel stops aligned to photo
- [ ] Result displays selected photo clearly

### Result Display
- [ ] Shows selected photo (larger)
- [ ] Displays category title
- [ ] Shows description text
- [ ] "Let's do this!" message
- [ ] Animation smooth and engaging

### Responsive
- [ ] Photos visible on mobile (393px)
- [ ] Wheel size adapts to screen
- [ ] Photos don't overlap
- [ ] Text readable on all sizes
- [ ] Touch-friendly spin button

### Styling
- [ ] Pixel-style photo borders
- [ ] Color overlays match theme
- [ ] Shadows and depth effects
- [ ] Consistent with app theme
- [ ] No visual glitches

### Placeholders
- [ ] Placeholder images load
- [ ] Clear which photo represents what
- [ ] Easy to replace with real photos later
- [ ] Proper aspect ratios maintained

## 📐 Layout Changes

### Before (10 segments, emojis)
```typescript
const degreesPerSegment = 360 / 10; // 36°
emoji: '🧺'
```

### After (6 segments, photos)
```typescript
const degreesPerSegment = 360 / 6; // 60°
imageSrc: '/roulette-photos/outdoor.jpg'
```

## 🎯 Priority
**HIGH** - Major feature transformation

## ⏱️ Estimated Effort
- Planning & Design: 30 min
- Component Refactoring: 1.5 hours
- Photo Integration: 1 hour
- Wheel Layout Adjustment: 1 hour
- Placeholder Setup: 30 min
- Styling Updates: 1 hour
- Testing: 45 min
- **Total**: ~6 hours

## 🔗 Dependencies
- Existing DateRoulette components
- Next.js Image component
- Placeholder image service or files

## 📌 Notes
- Larger segments (60°) = easier photo visibility
- Consider image optimization for performance
- Real photos should be replaced before final deployment
- Photos should represent diverse date ideas
- Maintain accessibility with proper alt text

## 🎁 Future Enhancements
- [ ] Upload custom date photos
- [ ] Filter by mood/season
- [ ] Photo descriptions on hover
- [ ] Gallery view of all options
- [ ] Share selected photo to social media
- [ ] Add photo captions/quotes
- [ ] Animated photo reveals
- [ ] Photo zoom on result

## 🖼️ Placeholder Specifications
- **Format**: JPG or PNG
- **Size**: 300x300px (will be displayed at 80-100px)
- **Aspect Ratio**: 1:1 (square)
- **File Size**: <100KB each
- **Naming**: lowercase, no spaces (outdoor.jpg, cozy.jpg)
- **Location**: public/roulette-photos/

## 📸 Real Photo Requirements (Future)
When replacing placeholders:
- High quality (min 500x500px)
- Well-lit, clear subjects
- Represents date category clearly
- Warm, inviting, romantic feel
- Matches pixel love theme colors
- Personal photos preferred
- Rights/permissions secured
