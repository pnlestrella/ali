# Ticket #06: Gift Interaction & Opening Effects

## 📋 Overview
Enhance the first section (landing/gift) with better UX affordances and delightful opening animations. Make it clearer that the gift is clickable, add periodic shake hints, replace scroll indicator with "Open Me" prompt, and add celebratory confetti effects when the gift is opened.

## 🎯 Objectives
- Add periodic shake animation (every 2-3 seconds) to gift for UX affordance
- Replace "Scroll" indicator with "Open Me" prompt before gift is clicked
- Show "Scroll" indicator only after gift has been opened
- Add opening sequence: shake 3 times → confetti explosion
- Confetti made of pixel hearts matching theme
- Improve overall discoverability and delight

## 🎨 Design Specifications

### 1. Periodic Shake Animation
**Purpose**: Draw attention to clickable gift

**Behavior**:
- Gift shakes automatically every 2-3 seconds
- Shake is subtle but noticeable (5-10px movement)
- Animation should loop indefinitely until clicked
- Stops when gift is clicked/opened

**Animation Timing**:
```
0-1s: Normal state
1-1.5s: Shake animation
1.5-3s: Normal state
(repeat)
```

**CSS Example**:
```css
@keyframes periodic-shake {
  0%, 100% { transform: translateX(0) rotate(0deg); }
  25% { transform: translateX(-5px) rotate(-5deg); }
  50% { transform: translateX(5px) rotate(5deg); }
  75% { transform: translateX(-5px) rotate(-5deg); }
}

.gift-periodic-shake {
  animation: periodic-shake 0.5s ease-in-out;
}
```

**Implementation**:
- Use `setInterval` in component
- Trigger shake every 2-3 seconds (random for natural feel)
- Clear interval when gift is clicked

### 2. "Open Me" Prompt (Before Click)

**Display**:
- Replaces current "Scroll" indicator
- Shows before gift is opened
- Positioned below the gift (same location as scroll indicator)
- Blinks/pulses to draw attention

**Text**: "Open Me!" or "Click Me!"

**Styling**:
```css
.open-me-prompt {
  font-family: var(--pixel-font);
  font-size: var(--pixel-md);
  color: var(--pixel-pink);
  animation: blink 1s ease-in-out infinite;
  text-align: center;
}
```

**Icon**: Gift icon or pointing hand icon next to text

### 3. Scroll Indicator (After Click)

**Behavior**:
- Hidden by default (`opacity: 0` or `display: none`)
- Only shows after gift has been clicked/opened
- Appears with fade-in animation after confetti completes

**State Management**:
```typescript
const [giftOpened, setGiftOpened] = useState(false);

// In page.tsx or AnimatedGift component
{!giftOpened && <OpenMePrompt />}
{giftOpened && <ScrollIndicator />}
```

### 4. Opening Sequence Animation

**Step 1: Triple Shake (0-1.5s)**
- Gift shakes vigorously 3 times
- Faster and more pronounced than periodic shake
- 0.5s per shake = 1.5s total

**Step 2: Confetti Explosion (1.5-4s)**
- Pixel hearts burst from gift center
- 20-30 hearts total
- Random trajectories (up, left, right, diagonal)
- Hearts fade out and fall with gravity
- Duration: 2-3 seconds

**Step 3: Transition (4s+)**
- Gift remains open (current wobble state)
- Welcome modal appears
- Scroll indicator fades in

**Timing Diagram**:
```
0.0s: Click gift
0.0-1.5s: Shake 3 times (intense)
1.5s: Confetti starts exploding
1.5-4.0s: Hearts fly and fade
3.0s: Welcome modal appears (current)
4.0s: Scroll indicator fades in
```

## 🛠️ Technical Implementation

### Component Structure

**Option A: All in AnimatedGift.tsx**
```typescript
<div className="gift-container">
  <div 
    className={`gift ${isShaking ? 'shake' : ''}`}
    onClick={handleGiftClick}
  >
    {/* Gift icon */}
  </div>
  
  {isExploding && <Confetti />}
  
  {!giftOpened && (
    <div className="open-me-prompt">
      Open Me! <Hand />
    </div>
  )}
</div>
```

**Option B: Separate Components**
- `AnimatedGift.tsx`: Gift with shake logic
- `OpenMePrompt.tsx`: "Open Me" indicator
- `ConfettiExplosion.tsx`: Confetti animation
- Pass `giftOpened` state via props or context

**Recommended: Option A** - Keep related animations together

### Periodic Shake Logic

```typescript
useEffect(() => {
  if (giftOpened) return;
  
  const shakeInterval = setInterval(() => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
  }, 2000 + Math.random() * 1000); // 2-3 seconds random
  
  return () => clearInterval(shakeInterval);
}, [giftOpened]);
```

### Opening Sequence Logic

```typescript
const handleGiftClick = () => {
  // 1. Triple shake
  setIsIntenseShaking(true);
  
  setTimeout(() => {
    setIsIntenseShaking(false);
    // 2. Confetti explosion
    setIsExploding(true);
  }, 1500);
  
  setTimeout(() => {
    setIsExploding(false);
    setGiftOpened(true);
    // 3. Show welcome modal (existing)
    setShowWelcomeModal(true);
  }, 3000);
};
```

### Confetti Component

**Heart Generation**:
```typescript
const hearts = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  x: Math.random() * 100 - 50, // -50 to 50
  y: -100 - Math.random() * 50, // upward trajectory
  rotation: Math.random() * 360,
  delay: Math.random() * 0.3,
  duration: 2 + Math.random(),
}));
```

**Confetti CSS**:
```css
@keyframes confetti-burst {
  0% {
    opacity: 1;
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  50% {
    opacity: 1;
    transform: translate(var(--x), var(--y)) rotate(var(--rotation)) scale(1.2);
  }
  100% {
    opacity: 0;
    transform: translate(var(--x), calc(var(--y) + 200px)) rotate(calc(var(--rotation) + 180deg)) scale(0.5);
  }
}

.confetti-heart {
  position: absolute;
  font-size: 24px;
  animation: confetti-burst var(--duration) ease-out var(--delay) forwards;
}
```

**Heart Rendering**:
```typescript
<div className="confetti-container">
  {hearts.map(heart => (
    <div
      key={heart.id}
      className="confetti-heart"
      style={{
        '--x': `${heart.x}px`,
        '--y': `${heart.y}px`,
        '--rotation': `${heart.rotation}deg`,
        '--duration': `${heart.duration}s`,
        '--delay': `${heart.delay}s`,
      }}
    >
      <Heart fill="var(--pixel-pink)" size={16} />
    </div>
  ))}
</div>
```

## 📱 Responsive Considerations

### Mobile (393px)
- Confetti spread: ±50px horizontal
- Heart size: 16px
- Shake intensity: 5px

### Desktop (1440px+)
- Confetti spread: ±100px horizontal
- Heart size: 20px
- Shake intensity: 8px

## ✅ Acceptance Criteria

### Periodic Shake
- [ ] Gift shakes every 2-3 seconds automatically
- [ ] Shake animation is smooth and noticeable
- [ ] Shake stops when gift is clicked
- [ ] No shake after gift is opened
- [ ] Interval is cleared on unmount

### Open Me Prompt
- [ ] "Open Me!" text displays below gift initially
- [ ] Prompt blinks or pulses for attention
- [ ] Hides immediately when gift is clicked
- [ ] Does not reappear after being hidden
- [ ] Uses pixel font matching theme

### Scroll Indicator Timing
- [ ] Scroll indicator hidden on page load
- [ ] Does not show until gift is opened
- [ ] Appears with smooth fade-in
- [ ] Shows after confetti completes
- [ ] Positioned correctly below gift area

### Opening Sequence
- [ ] Gift shakes 3 times when clicked (intense)
- [ ] Shake duration is ~1.5 seconds total
- [ ] Confetti starts after shake completes
- [ ] Confetti explosion is visually satisfying
- [ ] Welcome modal appears during confetti

### Confetti Animation
- [ ] 20-30 pixel hearts spawn
- [ ] Hearts burst in multiple directions
- [ ] Random trajectories for natural feel
- [ ] Hearts fade out smoothly
- [ ] Hearts fall with gravity effect
- [ ] Animation lasts 2-3 seconds
- [ ] No confetti remnants after completion
- [ ] Hearts use theme colors (pink/coral)

### State Management
- [ ] `giftOpened` state tracked correctly
- [ ] State persists between renders
- [ ] All animations triggered in sequence
- [ ] No duplicate confetti on re-renders
- [ ] Clean up intervals and timeouts

### Performance
- [ ] No jank during animations
- [ ] Smooth 60fps on mobile
- [ ] Confetti doesn't block UI
- [ ] No memory leaks from intervals
- [ ] Animations don't affect scroll performance

### UX Polish
- [ ] Clear that gift is clickable
- [ ] Periodic shake is not annoying
- [ ] Opening sequence feels rewarding
- [ ] Confetti timing feels natural
- [ ] Smooth transition to next section

## 🎯 Priority
**MEDIUM-HIGH** - Improves first impression and UX discoverability

## ⏱️ Estimated Effort
- Periodic Shake Animation: 30 min
- Open Me Prompt Component: 20 min
- Scroll Indicator Conditional Logic: 15 min
- Triple Shake Sequence: 30 min
- Confetti Component Creation: 1.5 hours
- Confetti Animation/Physics: 1 hour
- State Management Integration: 45 min
- Testing & Polish: 1 hour
- **Total**: ~5.5 hours

## 🔗 Dependencies
- Works with existing AnimatedGift component
- Integrates with existing WelcomeModal trigger
- Integrates with existing ScrollIndicator component
- No external libraries needed (use Lucide Heart icon)

## 📌 Notes

### Animation Performance
- Use CSS transforms for confetti (GPU accelerated)
- Avoid layout thrashing
- Use `will-change` sparingly
- Clean up DOM after confetti completes

### Accessibility
- Ensure gift remains keyboard accessible
- Add ARIA labels for screen readers
- Consider users with motion sensitivity (respect `prefers-reduced-motion`)
- Maintain focus management

### Edge Cases
- What if user clicks gift multiple times quickly? (Prevent)
- What if user scrolls during animation? (Allow)
- What if modal is dismissed during confetti? (Continue confetti)
- Page refresh resets state (expected behavior)

### Reduced Motion Support
```css
@media (prefers-reduced-motion: reduce) {
  .gift-periodic-shake {
    animation: none;
  }
  
  .confetti-heart {
    animation-duration: 0.5s; /* Shorter */
  }
}
```

## 🎨 Visual Flow

### Before Click
```
┌─────────────────┐
│                 │
│   [Gift Icon]   │  ← Shakes every 2-3s
│                 │
│   "Open Me!" ← Blinks
│      ↓         │
└─────────────────┘
```

### During Click
```
┌─────────────────┐
│    💕 💕 💕     │  ← Hearts flying
│  💕 [Gift] 💕  │  ← Shaking 3x
│    💕 💕 💕     │
│                 │
└─────────────────┘
```

### After Click
```
┌─────────────────┐
│                 │
│   [Gift Icon]   │  ← Static/wobbling
│                 │
│   "Scroll"      │  ← Fades in
│      ↓          │
└─────────────────┘
```

## 🎁 Nice-to-Have Additions

### Enhanced Confetti
- [ ] Mix of different sized hearts
- [ ] Some hearts spin faster than others
- [ ] Add sparkle/twinkle effect to hearts
- [ ] Sound effect on explosion (optional)
- [ ] Confetti colors vary (pink, coral, lavender)

### Enhanced Shake
- [ ] Vary shake intensity randomly
- [ ] Add slight glow pulse during shake
- [ ] Scale animation (breathing effect)

### Enhanced Prompt
- [ ] Animated hand cursor icon
- [ ] Bounce animation on "Open Me"
- [ ] Change text every few seconds ("Click Me!" → "Open Me!" → "Tap Me!")

### Easter Egg
- [ ] Track number of times gift is hovered
- [ ] Special confetti pattern on 14th click
- [ ] Different confetti colors based on time of day

## 🔧 Testing Checklist

- [ ] Shake interval works on component mount
- [ ] Shake stops on unmount
- [ ] "Open Me" hides correctly
- [ ] "Scroll" shows at right time
- [ ] Gift click triggers sequence
- [ ] Triple shake completes (1.5s)
- [ ] Confetti spawns (20-30 hearts)
- [ ] Hearts animate smoothly
- [ ] No confetti remnants left
- [ ] Welcome modal still works
- [ ] Scroll indicator still works
- [ ] Multiple clicks don't break state
- [ ] Test on mobile device
- [ ] Test with reduced motion
- [ ] Test performance (60fps)
- [ ] No console errors
- [ ] No memory leaks

## 🎯 Success Metrics

- Gift affordance is immediately clear
- Users click gift within 2 seconds
- Opening sequence feels delightful
- Confetti animation is smooth
- No user confusion about next action
- Positive emotional response to confetti

## 📚 References

Confetti Animation Inspirations:
- CSS confetti burst patterns
- Party.js (concept reference, not using library)
- Canvas confetti (we'll use DOM for simplicity)
- Pixel art particle effects

UX Affordance Best Practices:
- Periodic animation for clickable elements
- Clear call-to-action text
- Immediate feedback on interaction
- Reward user action with delight
