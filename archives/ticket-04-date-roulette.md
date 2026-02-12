# Ticket #04: Date Ideas Roulette

## 📋 Overview
Create an interactive "Date Ideas Roulette" section where users can spin a wheel or shuffle through cards to randomly select a fun date idea for future outings together.

## 🎯 Objectives
- Interactive spinning wheel or card shuffle interface
- 8-10 creative date ideas pre-loaded
- Random selection on spin/shuffle
- Playful, engaging interaction
- Pixel-themed design with smooth animations
- Encourages excitement about future dates
- Ability to spin multiple times

## 🎨 Design Specifications

### Interface Options

**Option A: Spinning Wheel** (Recommended)
- Circular wheel divided into segments (8-10)
- Each segment has one date idea
- Center spin button
- Wheel spins 3-5 rotations before stopping
- Winner highlighted with animation

**Option B: Card Shuffle**
- Stack of cards face-down
- Click to shuffle and flip random card
- Card flies out and flips to reveal idea
- Cards slide back for next shuffle

### Visual Design
- **Colors**: Theme palette (pixel-pink, pixel-coral, pixel-cream)
- **Borders**: Chunky pixel borders (4px)
- **Font**: Pixel font for date ideas
- **Button**: Large "SPIN!" or "SHUFFLE!" button
- **Size**: Responsive (300px mobile, 400px+ desktop)

### Date Ideas Layout
- **Wheel Segments**: Colored differently for variety
- **Text Size**: 12-14px (readable but fits segment)
- **Icons**: Optional emoji for each date type
- **Result Display**: Larger text shows selected idea after spin

### Animation Specifications
- **Spin Duration**: 3-4 seconds
- **Easing**: Starts fast, slows down (cubic-bezier)
- **Rotations**: 4-6 full spins
- **Stopping**: Bounces slightly at end
- **Result**: Pulse/scale animation on winner
- **Button**: Disabled during spin, re-enables after

## 🛠️ Technical Implementation

### Components to Create
1. **DateRoulette.tsx**
   - Main container component
   - Spin/shuffle logic
   - State management

2. **RouletteWheel.tsx** (Option A)
   - SVG wheel visualization
   - Rotation animation
   - Segment highlighting

3. **CardShuffle.tsx** (Option B)
   - Card stack display
   - Shuffle animation
   - Card flip reveal

4. **ResultDisplay.tsx**
   - Shows selected date idea
   - Larger, emphasized text
   - Share/save option (optional)

### Date Ideas Data
```typescript
interface DateIdea {
  id: number;
  title: string;
  emoji: string;
  color: string;
  description?: string; // Optional expanded text
}

const dateIdeas: DateIdea[] = [
  { id: 1, title: 'Picnic in the Park', emoji: '🧺', color: 'var(--pixel-pink)' },
  { id: 2, title: 'Movie Marathon', emoji: '🎬', color: 'var(--pixel-peach)' },
  { id: 3, title: 'Cook Together', emoji: '👩‍🍳', color: 'var(--pixel-coral)' },
  { id: 4, title: 'Stargazing', emoji: '⭐', color: 'var(--pixel-lavender)' },
  { id: 5, title: 'Beach Day', emoji: '🏖️', color: 'var(--pixel-rose)' },
  { id: 6, title: 'Game Night', emoji: '🎮', color: 'var(--pixel-mint)' },
  { id: 7, title: 'Coffee & Walk', emoji: '☕', color: 'var(--pixel-peach)' },
  { id: 8, title: 'Art Gallery', emoji: '🎨', color: 'var(--pixel-pink)' },
  // Add 2 more for total of 10
];
```

### Files to Create
```
components/
├── DateRoulette.tsx            # Main component
├── RouletteWheel.tsx           # Spinning wheel (Option A)
├── CardShuffle.tsx             # Card shuffle (Option B)
└── ResultDisplay.tsx           # Result UI
lib/
└── dateIdeas.ts                # Date ideas data
```

### Files to Modify
```
app/
└── page.tsx                    # Add new section
```

## 📝 Feature Details

### Spin Logic (Wheel)
```typescript
const [isSpinning, setIsSpinning] = useState(false);
const [selectedIdea, setSelectedIdea] = useState<DateIdea | null>(null);
const [rotation, setRotation] = useState(0);

const spin = () => {
  if (isSpinning) return;
  
  setIsSpinning(true);
  
  // Random target (4-6 spins + random segment)
  const randomIndex = Math.floor(Math.random() * dateIdeas.length);
  const degreesPerSegment = 360 / dateIdeas.length;
  const targetDegrees = (360 * 5) + (randomIndex * degreesPerSegment);
  
  setRotation(targetDegrees);
  
  setTimeout(() => {
    setSelectedIdea(dateIdeas[randomIndex]);
    setIsSpinning(false);
  }, 4000);
};
```

### Shuffle Logic (Cards)
```typescript
const shuffle = () => {
  if (isShuffling) return;
  
  setIsShuffling(true);
  
  // Shuffle animation
  // ... card animation logic
  
  const randomIndex = Math.floor(Math.random() * dateIdeas.length);
  
  setTimeout(() => {
    setSelectedIdea(dateIdeas[randomIndex]);
    setIsShuffling(false);
  }, 2000);
};
```

## ✅ Acceptance Criteria

### Wheel/Interface Display
- [ ] Wheel or cards clearly visible
- [ ] All date ideas readable
- [ ] Colors differentiate segments/cards
- [ ] Pixel borders and styling applied
- [ ] Center button prominent and inviting
- [ ] Responsive sizing (mobile to desktop)

### Spin/Shuffle Interaction
- [ ] Click button triggers animation
- [ ] Smooth, natural rotation/shuffle
- [ ] Animation duration feels right (3-4s)
- [ ] Easing creates anticipation
- [ ] Button disabled during animation
- [ ] Multiple spins work correctly

### Result Display
- [ ] Selected idea clearly shown
- [ ] Larger text/emphasis
- [ ] Emoji displays correctly
- [ ] Result persists until next spin
- [ ] Pulse/celebration animation
- [ ] Optional: "Try this date!" message

### Date Ideas Content
- [ ] 8-10 varied date ideas
- [ ] Ideas are creative and specific
- [ ] Emojis match the activity
- [ ] Ideas are feasible and fun
- [ ] Good mix of indoor/outdoor/budget
- [ ] All text fits in UI elements

### Responsive
- [ ] Works on mobile (393px width)
- [ ] Wheel/cards scale appropriately
- [ ] Touch-friendly spin button
- [ ] No horizontal overflow
- [ ] Animation smooth on mobile

### Performance
- [ ] Smooth 60fps animation
- [ ] No lag during spin
- [ ] Re-spins work without refresh
- [ ] No memory leaks
- [ ] Quick initial load

### Integration
- [ ] New section added to page.tsx
- [ ] Positioned appropriately (suggest after word cloud)
- [ ] Section heading present
- [ ] Smooth scroll to section
- [ ] Matches overall theme
- [ ] No console errors

## 🎨 Section Layout

```
┌─────────────────────────────────────┐
│     🎡 Date Ideas Roulette 🎡       │
│                                      │
│         ┌─────────────┐             │
│        ╱               ╲            │
│       │     PICNIC      │           │
│       │   BEACH   COOK  │           │
│       │ MOVIE   [SPIN]  │           │
│       │   GAME  COFFEE  │           │
│        ╲      ART      ╱            │
│         └─────────────┘             │
│                                      │
│    Selected: Stargazing ⭐          │
│    "Let's do this next!"            │
└─────────────────────────────────────┘
```

## 📐 Animation CSS

```css
@keyframes spin-wheel {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(var(--target-rotation));
  }
}

@keyframes result-pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

@keyframes button-bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

.wheel {
  transition: transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99);
}

.result {
  animation: result-pulse 0.6s ease 2;
}
```

## 🎯 Priority
**MEDIUM** - Fun, engaging, not critical but adds value

## ⏱️ Estimated Effort
- Design & Planning: 45 min
- Date Ideas Creation: 30 min
- Component Development: 2.5 hours
- Animation Logic: 1.5 hours
- SVG/Graphics: 1 hour
- Styling: 45 min
- Testing: 45 min
- **Total**: ~7 hours

## 🔗 Dependencies
- None

## 📌 Notes
- Wheel is more visually engaging than cards
- Consider sound effects for spin (optional)
- Test randomization is truly random
- Make sure all date ideas are appropriate
- Could add "favorite" feature to save ideas
- Consider allowing custom date ideas input

## 🎁 Nice-to-Have Additions
- [ ] Sound effect during spin
- [ ] Confetti when result appears
- [ ] "Add your own idea" feature
- [ ] Save favorite date ideas
- [ ] Share selected idea to calendar
- [ ] History of previously selected dates
- [ ] Different wheel designs/themes
- [ ] Difficulty levels (casual, fancy, adventurous)
- [ ] Budget indicator for each date
- [ ] Seasonal date suggestions
