# Ticket #03: "You Make Me Feel..." Word Cloud

## 📋 Overview
Create an interactive word cloud section displaying emotion words that describe how you feel. Words float and animate, lighting up on hover, creating a beautiful visual representation of feelings.

## 🎯 Objectives
- Display 15-20 emotion words in animated cloud formation
- Words float gently with random movements
- Interactive hover effects (glow, scale, color change)
- Responsive sizing based on importance/emphasis
- Fits pixel love theme with appropriate styling
- Creates emotional impact through visual design

## 🎨 Design Specifications

### Word Selection
**Core Emotions** (20 words suggested):
- Happy, Loved, Complete, Safe, Excited
- Cherished, Inspired, Peaceful, Joyful, Grateful
- Beautiful, Strong, Confident, Adored, Lucky
- Warm, Calm, Secure, Special, Valued

### Word Styling
- **Font**: Pixel font for consistency
- **Sizes**: 3-4 tiers
  - Primary (24-32px): Top 3-5 emotions
  - Secondary (18-24px): 5-7 emotions
  - Tertiary (14-18px): Remaining words
- **Colors**: Rotate through theme colors
  - var(--pixel-pink)
  - var(--pixel-coral)
  - var(--pixel-lavender)
  - var(--pixel-peach)
- **Opacity**: Slightly varied (0.8-1.0)

### Animation Specifications
- **Float Movement**: Gentle sine wave patterns
- **Duration**: 8-15 seconds per word (randomized)
- **Distance**: Small movements (10-20px)
- **Hover State**:
  - Scale: 1.2-1.3x
  - Glow: Drop shadow with theme color
  - Brightness increase
  - Slight rotation (±5 degrees)
  - Transition: 0.3s ease

### Layout
- **Container**: Centered, max-width 800px
- **Distribution**: CSS flexbox with wrap
- **Spacing**: Generous gaps (16-24px)
- **Mobile**: Stack more vertically, reduce font sizes
- **Desktop**: Spread out more horizontally

## 🛠️ Technical Implementation

### Components to Create
1. **WordCloud.tsx**
   - Main container component
   - Word data and rendering logic
   - Layout management

2. **FloatingWord.tsx**
   - Individual word component
   - Float animation
   - Hover interaction

### Word Data Structure
```typescript
interface EmotionWord {
  text: string;
  size: 'primary' | 'secondary' | 'tertiary';
  color: string;
  animationDuration: number;
  animationDelay: number;
}

const emotions: EmotionWord[] = [
  { text: 'Loved', size: 'primary', color: 'var(--pixel-pink)', animationDuration: 10, animationDelay: 0 },
  { text: 'Happy', size: 'primary', color: 'var(--pixel-coral)', animationDuration: 12, animationDelay: 2 },
  // ... more words
];
```

### Files to Create
```
components/
├── WordCloud.tsx               # Main word cloud
└── FloatingWord.tsx            # Individual word
lib/
└── emotions.ts                 # Word data
```

### Files to Modify
```
app/
└── page.tsx                    # Add new section
```

## 📝 Feature Details

### Float Animation Pattern
```css
@keyframes float-word {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(10px, -15px) rotate(2deg);
  }
  50% {
    transform: translate(-5px, -10px) rotate(-1deg);
  }
  75% {
    transform: translate(-10px, -5px) rotate(1deg);
  }
}
```

### Random Animation Assignment
```typescript
const getRandomAnimation = () => ({
  duration: Math.random() * 7 + 8, // 8-15s
  delay: Math.random() * 5, // 0-5s stagger
  xRange: Math.random() * 20 - 10, // -10 to +10px
  yRange: Math.random() * 20 - 10, // -10 to +10px
});
```

### Hover Effect Implementation
```typescript
const [isHovered, setIsHovered] = useState(false);

return (
  <span
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    className={`floating-word ${isHovered ? 'hovered' : ''}`}
    style={{
      fontSize: getSizeValue(size),
      color: color,
      animation: `float-word ${duration}s ease-in-out infinite ${delay}s`
    }}
  >
    {text}
  </span>
);
```

## ✅ Acceptance Criteria

### Word Display
- [ ] 15-20 emotion words displayed
- [ ] Words are clearly readable
- [ ] Varied sizes create visual hierarchy
- [ ] Colors from theme palette used
- [ ] No overlapping words (proper spacing)
- [ ] Pixel font applied consistently

### Animations
- [ ] All words float gently
- [ ] Movements are smooth and natural
- [ ] Random durations create organic feel
- [ ] No jittery or jarring movements
- [ ] Animations start at different times (staggered)
- [ ] 60fps performance maintained

### Interactions
- [ ] Hover triggers scale increase
- [ ] Glow effect appears on hover
- [ ] Smooth transition (0.3s)
- [ ] Hover works on touch devices (tap to highlight)
- [ ] Multiple words can be hovered simultaneously
- [ ] Cursor changes to pointer on hover

### Responsive
- [ ] Words adjust size on mobile (393px)
- [ ] Layout adapts for different screen widths
- [ ] No horizontal overflow
- [ ] Touch interactions work smoothly
- [ ] Maintains visual balance on all screens

### Styling
- [ ] Matches pixel love theme
- [ ] Good contrast against background
- [ ] Glow effects enhance readability
- [ ] Section background appropriate
- [ ] Padding/margins balanced

### Integration
- [ ] New section added to page.tsx
- [ ] Positioned appropriately (suggest before final message)
- [ ] Smooth scroll to section
- [ ] Section heading present
- [ ] No console errors

## 🎨 Section Layout

```
┌─────────────────────────────────────┐
│    💭 You Make Me Feel... 💭        │
│                                      │
│     Happy    Loved      Complete    │
│                                      │
│  Cherished     Inspired    Joyful   │
│                                      │
│    Safe    Grateful     Beautiful   │
│                                      │
│  Strong    Adored    Peaceful       │
│                                      │
│    Special    Warm    Confident     │
└─────────────────────────────────────┘
```

## 📐 CSS Styling

```css
.word-cloud {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: var(--space-lg);
  padding: var(--space-2xl);
  max-width: 800px;
  margin: 0 auto;
}

.floating-word {
  font-family: var(--pixel-font);
  cursor: pointer;
  transition: all 0.3s ease;
  user-select: none;
}

.floating-word.hovered {
  transform: scale(1.3) rotate(5deg);
  filter: drop-shadow(0 0 12px currentColor);
  z-index: 10;
}

/* Size variants */
.size-primary { font-size: 28px; font-weight: bold; }
.size-secondary { font-size: 20px; }
.size-tertiary { font-size: 16px; }

@media (max-width: 768px) {
  .size-primary { font-size: 22px; }
  .size-secondary { font-size: 16px; }
  .size-tertiary { font-size: 14px; }
}
```

## 🎯 Priority
**MEDIUM-HIGH** - Strong emotional impact, moderately complex

## ⏱️ Estimated Effort
- Design & Planning: 30 min
- Word Selection & Data: 20 min
- Component Development: 1.5 hours
- Animation Logic: 1 hour
- Styling & Polish: 45 min
- Testing: 30 min
- **Total**: ~4 hours

## 🔗 Dependencies
- None

## 📌 Notes
- Test with more/fewer words to find optimal number
- Ensure words don't overlap on smaller screens
- Consider allowing custom word list
- Animation should enhance, not distract
- Test color contrast for accessibility
- May need to adjust for different languages

## 🎁 Nice-to-Have Additions
- [ ] Click word to show detailed message about that feeling
- [ ] Word frequency visualization (bigger = more important)
- [ ] Fade in words one by one on first view
- [ ] Add custom words dynamically
- [ ] Export word cloud as image
- [ ] Different layouts (circle, heart shape)
- [ ] Sound effect on hover (soft chime)
- [ ] Mobile: Tap word to "pop" with confetti
