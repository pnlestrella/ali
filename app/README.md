# 💕 Valiri - Pixel Love Theme Guide

## � Project Overview

**Valiri** is a one-page Valentine's Day web experience designed with a "Pixel Love / Cozy Romance" theme. The application consists of 10 immersive sections that tell a romantic story through interactive elements, smooth scroll-snap navigation, and visual delight.

### Application Flow
1. **Landing Section**: Animated pixelized gift with confetti explosion → Welcome modal
2. **Love Letter Section**: Envelope animation that opens to reveal handwritten letter
3. **Photo Memories**: Interactive slider with 13 personal photos and captions
4. **Banner Section**: Visual banner with gradient overlay (heart.png based)
5. **Word Cloud**: "You Make Me Feel..." floating emotion words with color-coded feelings
6. **Serenade Video**: Video player with decorative hearts and musical notes
7. **Picture Roulette**: Spinning wheel with 6 photo categories and modal results
8. **Hug/Kiss Counter**: Interactive affection counter with persistent localStorage
9. **Pixel Art Section**: Featured artwork with spotlight effect and song lyrics
10. **Final Message**: "Happy Valentines" with animated flowers gif

### Target Viewport
- **Primary**: 393 x 852 pixels (mobile-first)
- **Responsive**: Dynamic design scales for all devices

---

## 📋 Development Status

### ✅ Completed Features (Production Ready)

All core features and enhancements have been implemented:

#### Core Sections
- ✅ **Phase 1-6**: Base application (Landing, Welcome Modal, Message, Photos, Final Message)
- ✅ **Ticket #01**: Love Letter Section with envelope animation
- ✅ **Ticket #02**: Virtual Hug/Kiss Counter with persistent storage
- ✅ **Ticket #03**: "You Make Me Feel..." Word Cloud with 20 emotion words
- ✅ **Ticket #07**: Picture Roulette (6 photo categories, spinning wheel, modal results)
- ✅ **Ticket #08**: Serenade Video section with HTML5 player

#### Additional Enhancements
- ✅ **Photo Memories**: Expanded to 13 photos from `/memories-photos/`
- ✅ **Banner Section**: Horizontal banner with gradient overlay
- ✅ **Pixel Art Section**: Featured artwork with spotlight glow and lyrics
- ✅ **Floating Hearts**: Global background decoration (15 particles)
- ✅ **Scroll-Snap Navigation**: Smooth section-to-section scrolling
- ✅ **Mobile Optimization**: Fixed width/overflow constraints, proper sizing
- ✅ **Custom Favicon**: heart.png logo for browser tab

#### Technical Implementation
- Next.js 16.1.6 with App Router
- React 19.2.3 with TypeScript
- Tailwind CSS 4 + styled-jsx
- Lucide React icons
- localStorage for counter persistence
- HTML5 Video and Image APIs
- Intersection Observer for animations

### 📦 Current Build
- Production build: ✅ Successful
- Static generation: ✅ Optimized
- Route: `/` (Static SSG)

👉 **Previous documentation**: [archives/](../archives) and [tickets/](../tickets)

---

## �🌸 Theme Concept: "Pixel Love / Cozy Romance"

A Valentine's-themed web experience that blends nostalgic pixel art aesthetics with warm, romantic vibes. This theme creates a cozy digital space that feels like a love letter from the golden age of pixel games, perfect for Valentine's Day 2026.

## ✨ Design Philosophy

**Core Vibe**: Soft, warm, gentle, and nostalgic

The Pixel Love theme embraces:
- **Warmth over brightness** - Soft pastels instead of harsh neons
- **Nostalgia over modernity** - Chunky pixels meet contemporary web design
- **Comfort over edge** - Rounded corners, gentle shadows, cozy spacing
- **Romance over drama** - Subtle animations, gentle transitions

## 🎨 Color Palette

### Primary Colors
```css
--pixel-pink: #FFB3BA      /* Soft blush pink */
--pixel-peach: #FFCCB6     /* Warm peach */
--pixel-cream: #FFF4E6     /* Creamy vanilla */
--pixel-rose: #FFD4D8      /* Light rose */
```

### Accent Colors
```css
--pixel-coral: #FFA69E     /* Gentle coral */
--pixel-lavender: #E4C1D9  /* Soft lavender */
--pixel-mint: #D4E4D4      /* Muted mint (for contrast) */
```

### Neutral Tones
```css
--pixel-text: #5D4E60      /* Soft purple-gray (no pure black) */
--pixel-text-light: #8B7D8E /* Lighter text variant */
--pixel-bg: #FFF9F5        /* Off-white background */
```

**Important Rules:**
- ❌ No neon colors
- ❌ No pure black (#000000)
- ❌ No harsh contrasts
- ✅ Keep everything soft and approachable

## 🎮 Visual Elements

### Chunky Pixel Borders
```css
/* Standard pixel border */
border: 4px solid var(--pixel-pink);
border-radius: 0; /* No smooth curves, keep it boxy */

/* Inset shadow for depth */
box-shadow: inset 2px 2px 0 rgba(255, 255, 255, 0.5),
            inset -2px -2px 0 rgba(0, 0, 0, 0.1);
```

### Typography
- **Headings**: Use pixel fonts or chunky rounded fonts
- **Body**: Clean, readable sans-serif (Geist recommended)
- **Accent text**: Consider pixel fonts for buttons and labels
- **Sizing**: Generous spacing for that cozy feel

## 📦 Icon Library

### Recommended: Lucide React

**Installation:**
```bash
npm install lucide-react
```

**Why Lucide?**
- Clean, modern icons that work well with pixel aesthetic
- Customizable stroke width (make them chunkier!)
- Tree-shakeable for optimal bundle size
- Excellent React support
- Large icon collection including Valentine's themed icons

**Usage Example:**
```tsx
import { Heart, Sparkles, Gift, Mail } from 'lucide-react';

<Heart 
  size={24} 
  strokeWidth={3} 
  color="var(--pixel-pink)" 
  fill="var(--pixel-rose)"
/>
```

### Alternative Options

**Phosphor Icons** - More playful and rounded
```bash
npm install @phosphor-icons/react
```

**Iconoir** - Minimalist and clean
```bash
npm install iconoir-react
```

### Icon Styling Guidelines

**Sizes**: Use multiples of 8 for that pixel-perfect feel
- Small: 16px (UI elements)
- Medium: 24px (buttons, cards)
- Large: 32px (feature icons)
- Extra Large: 48px+ (hero sections)

**Stroke Width**: 2.5-3px for chunky pixel vibe

**Colors**: Always use CSS variables
```tsx
color="var(--pixel-pink)"  // For strokes
fill="var(--pixel-rose)"   // For filled areas
```

**Animation**: Keep it gentle
```css
/* Gentle pulse */
@keyframes icon-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.icon-animated {
  animation: icon-pulse 2s ease-in-out infinite;
}
```

### Spacing & Layout
- Generous padding (16px minimum)
- Wide margins for breathing room
- Grid-based layouts for that "pixel perfect" alignment
- Cards and containers with visible borders

## 🧩 Component Guidelines

### Buttons
- Chunky borders (3-4px)
- Hover states: slight color shift + subtle scale
- Active states: inset shadow (pressed effect)
- Icons: 8x8 or 16x16 pixel art style

### Cards
- Prominent borders in theme colors
- Light background with gentle shadows
- Rounded pixel-style corners (optional)
- Comfortable internal padding

### Interactive Elements
- Gentle hover animations (no jarring effects)
- Soft transitions (200-300ms)
- Playful micro-interactions (hearts, sparkles)
- Keep it cute, not flashy

## � Responsive Design

### Mobile-First Approach

**Primary Mobile Viewport**: 393 x 852 pixels

The design is dynamic and responsive, but optimized primarily for mobile viewing with the above dimensions (common iPhone 14 Pro size).

### Breakpoints Strategy

```css
/* Mobile First (default) */
/* 393px width base */

/* Small Mobile */
@media (max-width: 375px) {
  /* Smaller phones */
}

/* Mobile */
@media (min-width: 393px) {
  /* Base mobile view */
}

/* Tablet */
@media (min-width: 768px) {
  /* Adjust layout for tablets */
}

/* Desktop */
@media (min-width: 1024px) {
  /* Desktop experience */
}

/* Large Desktop */
@media (min-width: 1440px) {
  /* Max content width */
}
```

### Mobile Design Specifications

**Container Width**: 
- Mobile: Full width with 16px padding
- Max content width: 1200px on desktop

**Touch Targets**:
- Minimum: 44x44px (iOS guideline)
- Recommended: 48x48px (Material Design)
- Buttons: 48px height minimum
- Icon buttons: 40-48px for comfortable tapping

**Typography Scaling**:
```css
/* Mobile (393px) */
--heading-1: 32px;
--heading-2: 24px;
--heading-3: 20px;
--body: 16px;
--small: 14px;

/* Desktop (1024px+) */
--heading-1: 48px;
--heading-2: 36px;
--heading-3: 28px;
--body: 18px;
--small: 16px;
```

**Spacing Scale**:
```css
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;   /* Base mobile padding */
--space-lg: 24px;
--space-xl: 32px;
--space-2xl: 48px;  /* Section spacing */
```

**Layout Considerations**:
- Single column on mobile (393px)
- Stack cards vertically with 16px gaps
- Full-width buttons on mobile
- Generous tap areas for interactive elements
- Avoid horizontal scrolling
- Consider thumb reach zones (bottom 2/3 of screen)

**Performance for Mobile**:
- Optimize images for mobile (use next/image)
- Lazy load below-the-fold content
- Keep animations lightweight
- Test on actual devices (393 x 852 is the target)

## �💝 Mood & Inspiration

**Mood Words**: Cozy, nostalgic, cute, romantic, gentle, warm, playful, sweet

**Visual Inspiration**:
- Retro 8-bit/16-bit Valentine's cards
- Stardew Valley's warm aesthetic
- Animal Crossing's cozy vibes
- Classic pixel RPG heart containers
- Vintage Valentine's Day postcards

**Emotional Goal**: Create a digital space that feels like wrapping up in a warm blanket with someone you care about, while playing a nostalgic game on a cozy winter evening.

## 📁 App Structure

```
app/
├── layout.tsx       # Root layout with theme setup
├── page.tsx         # Main Valentine's page
├── globals.css      # Theme variables & global styles
└── README.md        # This file
```

### Key Files

**layout.tsx**
- Sets up font (Geist or pixel font)
- Defines root HTML structure
- Applies global theme

**page.tsx**
- Main Valentine's content
- Implements themed components
- Houses interactive elements

**globals.css**
- CSS custom properties (color palette)
- Base styles and resets
- Pixel border utilities
- Animation keyframes

## 🛠️ Development Tips

### Maintaining Consistency
1. Always reference CSS variables for colors
2. Use border utilities for consistent pixel styling
3. Keep animations subtle and gentle
4. Test contrast ratios (but keep things soft)

### Recommended Assets
- Pixel art icons (hearts, arrows, stars)
- Pixel fonts: "Press Start 2P", "Silkscreen", "Pixelify Sans"
- Valentine's pixel sprites (optional)
- Soft gradient backgrounds

### Animation Ideas
- Floating hearts
- Gentle pulsing effects
- Sparkle trails on hover
- Text typing animations
- Pixel wipe transitions

## 🚀 Quick Start Checklist

- [ ] Install icon library: `npm install lucide-react`
- [ ] Set up color variables in globals.css
- [ ] Import pixel font (or fallback to rounded sans)
- [ ] Configure mobile-first breakpoints (393px base)
- [ ] Create base button component with pixel styling (48px min height)
- [ ] Implement card components with chunky borders
- [ ] Add Valentine's themed icons with proper sizing
- [ ] Test on mobile viewport (393 x 852 pixels)
- [ ] Ensure touch targets are 44px+ minimum
- [ ] Test color contrast for accessibility
- [ ] Add gentle micro-interactions
- [ ] Test on actual mobile devices
- [ ] Deploy and share the cozy vibes! 💕

---

**Remember**: The goal is to make users feel warm, nostalgic, and loved. Every pixel should contribute to that cozy Valentine's vibe! 🌸✨