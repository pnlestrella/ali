# Ticket #05: Font System Consistency & Readability

## 📋 Overview
Establish and implement a consistent font hierarchy across the entire application, combining the pixel font for headings/UI elements with a highly readable font for longer text content (descriptions, love letter, messages).

## 🎯 Objectives
- Define clear font hierarchy and usage rules
- Use pixel font (Press Start 2P) for headings, buttons, UI elements
- Use readable font for body text, descriptions, love letter
- Ensure optimal readability for all text content
- Create reusable CSS classes for font application
- Update all existing components for consistency
- Improve accessibility and reading experience

## 🎨 Font Specifications

### Primary Font: Pixel (Press Start 2P)
**Use Cases**:
- Main page headings (h1, h2)
- Section titles
- Button text
- Navigation elements
- Counter displays
- Short labels and tags
- Decorative text

**Characteristics**:
- Font: "Press Start 2P"
- Weight: 400 (only weight available)
- Line-height: 1.6-1.8 (extra spacing for readability)
- Letter-spacing: 0.5px (slight increase for clarity)
- Max usage: Headlines and short text only

### Secondary Font: Readable (Recommended Options)

**Option A: Inter** (Modern, Clean)
- Highly readable at all sizes
- Excellent screen optimization
- Variable font support
- Professional feel

**Option B: Nunito** (Warm, Friendly)
- Rounded, approachable
- Very readable
- Matches cozy theme
- Good for long-form content

**Option C: Quicksand** (Soft, Geometric)
- Rounded sans-serif
- Friendly and modern
- Complements pixel aesthetic
- Good readability

**Recommended: Nunito** - Best balance of readability and warmth

**Use Cases**:
- Body text / paragraphs
- Photo descriptions
- Love letter content
- Long messages
- Modal content
- Date ideas descriptions
- Word cloud hover tooltips (if added)

**Characteristics**:
- Font: "Nunito" (or chosen alternative)
- Weights: 400 (regular), 600 (semi-bold), 700 (bold)
- Line-height: 1.6-1.8 for body, 1.4 for short text
- Letter-spacing: Normal (0)
- Size range: 14-18px for body

## 🛠️ Technical Implementation

### Font Loading (globals.css)
```css
/* Already loaded */
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

/* Add readable font */
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap');
```

### CSS Variables Update
```css
:root {
  /* Fonts */
  --pixel-font: 'Press Start 2P', monospace;
  --body-font: 'Nunito', var(--font-geist-sans), system-ui, sans-serif;
  
  /* Font sizes - Pixel font */
  --pixel-xs: 10px;
  --pixel-sm: 12px;
  --pixel-md: 14px;
  --pixel-lg: 16px;
  --pixel-xl: 20px;
  --pixel-2xl: 24px;
  --pixel-3xl: 32px;
  
  /* Font sizes - Body font */
  --body-xs: 12px;
  --body-sm: 14px;
  --body-md: 16px;
  --body-lg: 18px;
  --body-xl: 20px;
  
  /* Line heights */
  --line-height-tight: 1.4;
  --line-height-normal: 1.6;
  --line-height-relaxed: 1.8;
  --line-height-loose: 2.0;
}
```

### Utility Classes (globals.css)
```css
/* Pixel font utilities */
.text-pixel {
  font-family: var(--pixel-font);
  line-height: var(--line-height-normal);
}

.heading-pixel-lg {
  font-family: var(--pixel-font);
  font-size: var(--pixel-2xl);
  line-height: var(--line-height-normal);
}

.heading-pixel-md {
  font-family: var(--pixel-font);
  font-size: var(--pixel-lg);
  line-height: var(--line-height-normal);
}

/* Body font utilities */
.text-body {
  font-family: var(--body-font);
  font-size: var(--body-md);
  line-height: var(--line-height-relaxed);
}

.text-body-lg {
  font-family: var(--body-font);
  font-size: var(--body-lg);
  line-height: var(--line-height-relaxed);
}

.text-body-sm {
  font-family: var(--body-font);
  font-size: var(--body-sm);
  line-height: var(--line-height-normal);
}

/* Special: Letter text */
.text-letter {
  font-family: var(--body-font);
  font-size: var(--body-md);
  line-height: var(--line-height-loose);
  letter-spacing: 0.3px;
  font-weight: 400;
}
```

## 📝 Component-by-Component Updates

### AnimatedGift.tsx
- No text - No changes needed ✓

### WelcomeModal.tsx
```typescript
.welcome-heading {
  font-family: var(--pixel-font);  // ✓ Already correct
}

.welcome-message {
  font-family: var(--body-font);   // CHANGE from --pixel-font
  font-size: var(--body-md);
  line-height: var(--line-height-relaxed);
}
```

### ScrollIndicator.tsx
```typescript
.scroll-text {
  font-family: var(--pixel-font);  // ✓ Keep pixel
}
```

### MessageModal.tsx (or new LoveLetter)
```typescript
.message-heading {
  font-family: var(--pixel-font);  // ✓ Keep pixel
}

.message-content p {
  font-family: var(--body-font);   // CHANGE to body font
  font-size: var(--body-lg);       // Larger for letter
  line-height: var(--line-height-loose);
  letter-spacing: 0.3px;
}
```

### PhotoFrame.tsx
```typescript
.photo-title {
  font-family: var(--pixel-font);  // ✓ Keep pixel
}

.photo-description {
  font-family: var(--body-font);   // CHANGE to body font
  font-size: var(--body-sm);
  line-height: var(--line-height-normal);
}
```

### SliderControls.tsx
```typescript
.counter {
  font-family: var(--pixel-font);  // ✓ Keep pixel
}
```

### FinalMessage.tsx
```typescript
.main-heading {
  font-family: var(--pixel-font);  // ✓ Keep pixel
}

.sub-heading {
  font-family: var(--pixel-font);  // ✓ Keep pixel
}
```

### Future Components

**HugKissCounter**:
- Buttons: Pixel font
- Counter: Pixel font
- Instructions: Body font

**WordCloud**:
- Words: Pixel font
- Section heading: Pixel font

**DateRoulette**:
- Heading: Pixel font
- Date ideas on wheel: Pixel font (small)
- Result description: Body font

**LoveLetter**:
- Heading: Pixel font
- Letter body: Body font (most important!)
- Signature: Body font or handwriting font

## ✅ Acceptance Criteria

### Font Loading
- [ ] Nunito (or chosen font) loaded in globals.css
- [ ] Both fonts load without FOUT/FOIT issues
- [ ] Fonts display correctly on all browsers
- [ ] No console errors related to fonts

### CSS Variables
- [ ] All font variables defined in :root
- [ ] Size variables for both font families
- [ ] Line-height variables defined
- [ ] Utility classes created

### Component Updates
- [ ] WelcomeModal message uses body font
- [ ] MessageModal/LoveLetter uses body font
- [ ] PhotoFrame descriptions use body font
- [ ] All headings use pixel font
- [ ] All buttons use pixel font
- [ ] Counter displays use pixel font

### Readability
- [ ] Long text is comfortable to read
- [ ] Line height provides proper spacing
- [ ] Font size appropriate for mobile (393px)
- [ ] Good contrast with backgrounds
- [ ] No eye strain from extended reading

### Consistency
- [ ] Clear pattern: headings = pixel, body = readable
- [ ] All similar elements use same font
- [ ] Font sizes are consistent across components
- [ ] Line heights are consistent

### Responsive
- [ ] Font sizes scale appropriately
- [ ] Mobile sizes readable (not too small)
- [ ] Desktop sizes comfortable
- [ ] Proper font loading on mobile networks

### Testing
- [ ] Test on Chrome, Firefox, Safari
- [ ] Test on mobile device
- [ ] Verify all text is readable
- [ ] Check loading performance
- [ ] Ensure no layout shift during font load

## 📐 Font Usage Chart

| Element Type | Font | Size | Line Height | Weight |
|-------------|------|------|-------------|--------|
| Page Title (h1) | Pixel | 24-32px | 1.6 | 400 |
| Section Heading (h2) | Pixel | 16-24px | 1.6 | 400 |
| Subheading (h3) | Pixel | 14-16px | 1.6 | 400 |
| Button Text | Pixel | 12-14px | 1.4 | 400 |
| Counter/Numbers | Pixel | 14-20px | 1.4 | 400 |
| Body Paragraph | Body | 16-18px | 1.8 | 400 |
| Short Description | Body | 14-16px | 1.6 | 400 |
| Love Letter | Body | 16-18px | 2.0 | 400 |
| Small Text | Body | 12-14px | 1.6 | 400 |

## 🎯 Priority
**HIGH** - Affects readability and UX across entire app

## ⏱️ Estimated Effort
- Font Selection & Setup: 20 min
- CSS Variables & Classes: 30 min
- Component Updates: 2 hours
- Testing & Adjustments: 1 hour
- **Total**: ~3.5 hours

## 🔗 Dependencies
- Should be implemented before Ticket #01 (Love Letter) for best results
- Will affect all existing and future components

## 📌 Notes
- Pixel font should NEVER be used for paragraphs (hard to read)
- Body font should be optimized for screen reading
- Consider font loading strategy (swap vs optional)
- Test with actual long-form content (love letter)
- May need to adjust sizes based on chosen readable font
- Keep accessibility in mind (minimum 14px for body text)

## 🎨 Before vs After

### Before (Current)
```css
.photo-description {
  font-family: var(--pixel-font);    /* Hard to read! */
  font-size: 15px;
}
```

### After (Improved)
```css
.photo-description {
  font-family: var(--body-font);     /* Easy to read! */
  font-size: 15px;
  line-height: 1.6;
}
```

## 🎁 Nice-to-Have Additions
- [ ] Font preloading for faster load
- [ ] System font fallbacks for offline
- [ ] Font-display: swap for better UX
- [ ] WOFF2 format for optimal compression
- [ ] Subset fonts to reduce file size
- [ ] A/B test different readable fonts
- [ ] Dark mode font weight adjustments
- [ ] Custom handwriting font for letter signature

## 📚 Font Pairing References
The combination of:
- **Pixel font** (geometric, retro) for structure
- **Rounded sans-serif** (warm, friendly) for content

Creates a cohesive "modern retro" feel that's both nostalgic and readable.

Similar successful pairings:
- Press Start 2P + Inter
- VT323 + Nunito
- Silkscreen + Quicksand
