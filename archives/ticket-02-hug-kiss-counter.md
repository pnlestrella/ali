# Ticket #02: Virtual Hug/Kiss Counter

## 📋 Overview
Create an interactive section where users can send virtual hugs or kisses by clicking/tapping buttons. Each interaction triggers animated hearts flying across the screen and increments a counter.

## 🎯 Objectives
- Interactive "Send a Hug" and "Blow a Kiss" buttons
- Animated hearts/kiss emojis fly across screen on click
- Persistent counter showing total interactions
- Fun, playful element that encourages repeated interaction
- Fits pixel love theme with chunky buttons and pixel effects

## 🎨 Design Specifications

### Button Design
- **Two Buttons**: "Send a Hug 🤗" and "Blow a Kiss 💋"
- **Style**: Large, chunky pixel buttons
- **Colors**: Use theme colors (pixel-pink, pixel-coral)
- **Size**: 48px+ height for touch-friendly interaction
- **Hover/Active**: Bounce animation, color shift
- **Layout**: Side by side on desktop, stacked on mobile

### Animation Specifications
- **On Click**: Heart/kiss emoji spawns from button
- **Movement**: Flies diagonally upward with slight curve
- **Duration**: 2-3 seconds
- **Multiple**: Allow multiple hearts simultaneously
- **Variations**: Randomize trajectory, speed, size slightly
- **Emoji Options**: ❤️ 💕 💖 💗 💝 💋 💌

### Counter Display
- **Position**: Above or below buttons
- **Style**: Pixel font, large and visible
- **Format**: "Hugs: 0 | Kisses: 0" or "Total Love: 0"
- **Animation**: Number scales/pulses when incremented
- **Persistent**: Optional - save to localStorage

## 🛠️ Technical Implementation

### Components to Create
1. **HugKissCounter.tsx**
   - Main component container
   - Button elements
   - Counter state management

2. **FlyingHeart.tsx**
   - Individual animated heart component
   - Random trajectory logic
   - Auto-cleanup after animation

3. **CounterDisplay.tsx**
   - Counter number display
   - Pulse animation on update

### State Management
```typescript
const [hugCount, setHugCount] = useState(0);
const [kissCount, setKissCount] = useState(0);
const [hearts, setHearts] = useState<Heart[]>([]);

interface Heart {
  id: string;
  type: 'hug' | 'kiss';
  x: number;
  y: number;
  emoji: string;
}
```

### Files to Create
```
components/
├── HugKissCounter.tsx          # Main component
├── FlyingHeart.tsx             # Animated heart
└── CounterDisplay.tsx          # Counter UI
```

### Files to Modify
```
app/
└── page.tsx                    # Add new section
```

## 📝 Feature Details

### Interaction Flow
1. User clicks "Send a Hug" button
2. Button animates (scale bounce)
3. Heart emoji spawns at button position
4. Heart flies up and across screen with curve
5. Counter increments with pulse animation
6. Heart fades out and removes from DOM
7. Multiple hearts can fly simultaneously

### Heart Animation Path
```
Start: Button position (x, y)
Path: Bezier curve or parabolic arc
End: Off-screen (top or side)
Variations:
  - Angle: ±30 degrees from vertical
  - Speed: 2-3 seconds ±0.5s
  - Size: Scale 0.8-1.2
```

### localStorage Integration (Optional)
```typescript
// Save counts
useEffect(() => {
  localStorage.setItem('hugCount', hugCount.toString());
  localStorage.setItem('kissCount', kissCount.toString());
}, [hugCount, kissCount]);

// Load on mount
useEffect(() => {
  const savedHugs = localStorage.getItem('hugCount');
  const savedKisses = localStorage.getItem('kissCount');
  if (savedHugs) setHugCount(parseInt(savedHugs));
  if (savedKisses) setKissCount(parseInt(savedKisses));
}, []);
```

## ✅ Acceptance Criteria

### Buttons
- [ ] Two clear, large buttons displayed
- [ ] Buttons are touch-friendly (48px+ height)
- [ ] Hover state shows interactivity
- [ ] Click animation provides feedback
- [ ] Pixel-themed styling matches app

### Animations
- [ ] Heart spawns from button on click
- [ ] Smooth upward flight with curve
- [ ] Random variations in trajectory
- [ ] No lag with multiple hearts (5+ simultaneous)
- [ ] Hearts auto-remove after animation
- [ ] Emoji renders clearly on all devices

### Counter
- [ ] Counter starts at 0
- [ ] Increments correctly on each click
- [ ] Separate counts for hugs and kisses (or combined)
- [ ] Pulse animation on increment
- [ ] Large, readable pixel font
- [ ] Optional: Persists across page refreshes

### Responsive
- [ ] Buttons stack vertically on mobile
- [ ] Hearts animate correctly on all screen sizes
- [ ] Counter readable on mobile (393px width)
- [ ] Touch interactions work smoothly
- [ ] No horizontal overflow from animations

### Performance
- [ ] No memory leaks from heart components
- [ ] Smooth 60fps animations
- [ ] Handles rapid clicking without breaking
- [ ] Hearts properly cleaned up from DOM

### Integration
- [ ] New section added to page.tsx
- [ ] Positioned appropriately in flow (suggest after photos)
- [ ] Smooth scroll to section
- [ ] Matches overall pixel theme
- [ ] No console errors

## 🎨 Section Layout

```
┌─────────────────────────────────┐
│   💕 Send Some Love 💕          │
│                                  │
│   ┌─────────────┐               │
│   │ Hugs: 5     │               │
│   │ Kisses: 12  │               │
│   └─────────────┘               │
│                                  │
│  [Send a Hug 🤗] [Blow a Kiss 💋]│
│                                  │
│  Tap to send virtual affection! │
└─────────────────────────────────┘
```

## 📐 Animation CSS

```css
@keyframes heart-fly {
  0% {
    transform: translate(0, 0) scale(0.5) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translate(var(--end-x), var(--end-y)) scale(1.2) rotate(360deg);
    opacity: 0;
  }
}

@keyframes counter-pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

@keyframes button-bounce {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.95);
  }
}
```

## 🎯 Priority
**MEDIUM** - Fun enhancement, not critical

## ⏱️ Estimated Effort
- Design & Planning: 20 min
- Component Development: 1.5 hours
- Animation Logic: 1 hour
- Styling: 45 min
- Testing: 30 min
- **Total**: ~3.5 hours

## 🔗 Dependencies
- None

## 📌 Notes
- Consider rate limiting if saving to backend
- Emoji may render differently across platforms
- Test performance with many simultaneous hearts
- Make buttons feel very responsive
- Consider adding sound effects (optional)
- Could add daily/weekly reset for gamification

## 🎁 Nice-to-Have Additions
- [ ] Sound effects on click (optional)
- [ ] Confetti burst on milestone (10, 50, 100)
- [ ] Leaderboard if multiple users
- [ ] Share total count to social media
- [ ] Different emoji for different milestones
- [ ] Haptic feedback on mobile devices
- [ ] "Miss you" or other emotion buttons
