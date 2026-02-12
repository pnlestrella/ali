# Phase 1: Initial Setup & Animated Gift

## 📦 Overview
Set up the project foundation with the pixel love theme and create the initial landing view with an animated pixelized gift box.

## 🎯 Requirements

### Initial View
- Full-screen landing section (393 x 852px optimized)
- Centered animated pixelized gift box
- Gift animation: subtle tweaking/wobbling motion
- Clickable/tappable interaction
- Theme colors applied (pixel-pink, pixel-peach, pixel-cream)

### Gift Animation Details
- Gentle wobble effect (rotate 5-10 degrees)
- Soft bounce (scale 1.0 to 1.05)
- Infinite loop with 2-3s duration
- Smooth easing for cozy feel
- Pixel art style (8-bit or 16-bit aesthetic)

### Gift Asset
- SVG or pixel art PNG format
- Size: 120-160px for mobile
- Chunky pixel borders (4px)
- Colors match theme palette
- Optional: subtle glow/shadow effect

## 🛠️ Technical Implementation

### Components to Create
1. **LandingSection Component**
   - Full-height container
   - Centered content layout
   - Background with theme colors

2. **AnimatedGift Component**
   - Gift SVG/image wrapper
   - CSS animations (wobble + bounce)
   - Click/tap event handler
   - Cursor pointer on hover

3. **Theme Setup**
   - CSS variables in globals.css
   - Color palette implementation
   - Typography (pixel font + Geist)
   - Base animations/transitions

### Files to Create/Modify
```
app/
├── globals.css          # Add CSS variables, animations
├── page.tsx             # Main landing with AnimatedGift
components/
├── AnimatedGift.tsx     # Gift box component
└── LandingSection.tsx   # Landing wrapper
public/
└── gift-box.svg         # Gift pixel art (or use icon)
```

## ✅ Phase 1 Checklist

### Setup
- [ ] Install lucide-react: `npm install lucide-react`
- [ ] Install framer-motion (optional): `npm install framer-motion`
- [ ] Create components directory
- [ ] Create public assets directory structure

### Theme Implementation
- [ ] Add CSS variables to globals.css (color palette)
- [ ] Import and configure pixel font (Press Start 2P or Silkscreen)
- [ ] Set up base styles and resets
- [ ] Create animation keyframes (wobble, bounce)

### Gift Component
- [ ] Create or source pixelized gift SVG/PNG
- [ ] Build AnimatedGift component
- [ ] Implement wobble + bounce animation
- [ ] Add click handler (console.log for now)
- [ ] Style with pixel borders and theme colors
- [ ] Test animation performance on mobile

### Landing Section
- [ ] Create LandingSection component
- [ ] Set full viewport height (100vh/100dvh)
- [ ] Center content (flex/grid)
- [ ] Apply background gradient/color
- [ ] Add responsive styles for 393px width

### Integration
- [ ] Import components to page.tsx
- [ ] Test on mobile viewport (393 x 852)
- [ ] Verify animations are smooth
- [ ] Check touch/click interaction
- [ ] Validate theme colors

### Testing
- [ ] Test on Chrome DevTools (mobile view)
- [ ] Test on actual mobile device
- [ ] Verify performance (no jank)
- [ ] Check accessibility (keyboard/screen reader)

## 📝 Technical Notes

### Animation CSS Example
```css
@keyframes gift-wobble {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
}

@keyframes gift-bounce {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-10px) scale(1.05); }
}

.animated-gift {
  animation: 
    gift-wobble 2s ease-in-out infinite,
    gift-bounce 2s ease-in-out infinite;
  cursor: pointer;
  transition: filter 0.3s ease;
}

.animated-gift:hover {
  filter: brightness(1.1);
}
```

### Mobile Viewport Setup
```css
/* Ensure proper mobile viewport */
html {
  height: 100%;
  /* Use dvh for better mobile support */
  min-height: 100dvh;
}
```

### Gift Icon Alternative
If not using custom SVG, use Lucide React:
```tsx
import { Gift } from 'lucide-react';

<Gift 
  size={120} 
  strokeWidth={3} 
  color="var(--pixel-pink)"
/>
```

## 🎨 Design References
- Gift should feel warm and inviting
- Animation should be playful but not overwhelming
- Keep chunky pixel aesthetic
- Use soft shadows for depth
- Consider sparkles/particles around gift (optional)

## ⏭️ Next Phase
Once Phase 1 is complete, move to **Phase 2: Welcome Modal** where the gift click triggers the "Welcome YANG!" modal.
