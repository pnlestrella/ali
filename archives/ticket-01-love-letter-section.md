# Ticket #01: Refactor Section 2 - Love Letter with Envelope Animation

## 📋 Overview
Replace the current message modal in Section 2 with an inline love letter section featuring a sealed envelope animation that opens to reveal a beautifully formatted, handwritten-style letter.

## 🎯 Objectives
- Remove the MessageModal component trigger from Section 2
- Create sealed envelope that "opens" when scrolled into view
- Display letter content directly in the section (no modal)
- Use elegant, handwritten-style typography
- Add cute pixel-themed decorations (hearts, wax seal, stamps)
- Make it feel intimate and personal like a real love letter

## 🎨 Design Specifications

### Envelope Design
- **Closed State**: Pixel-styled envelope with wax seal
- **Animation**: Flap opens upward (rotate transform)
- **Duration**: 1.5-2s smooth animation
- **Trigger**: Intersection Observer (50% threshold)

### Letter Design
- **Paper**: Cream/parchment color background
- **Border**: Delicate pixel border or decorative corners
- **Typography**: 
  - Handwriting-style font (consider: "Dancing Script", "Satisfy", or pixel cursive)
  - Fallback to elegant serif font
  - Larger line height (1.8-2.0) for readability
- **Decorations**:
  - Small hearts in corners
  - Vintage stamp pixel art
  - Optional: Faded pattern/texture overlay

### Layout
- **Mobile (393px)**: 
  - Full width with padding
  - Envelope: 280-320px wide
  - Letter: Full width scrollable if needed
- **Desktop (1024px+)**:
  - Centered layout
  - Max-width: 600px
  - Better use of whitespace

## 🛠️ Technical Implementation

### Components to Create
1. **EnvelopeAnimation.tsx**
   - Envelope SVG or CSS-based design
   - Opening animation logic
   - State management (closed → opening → opened)

2. **LoveLetter.tsx**
   - Letter content container
   - Typography styling
   - Decorative elements

3. **LoveLetterSection.tsx**
   - Section wrapper
   - Combines envelope + letter
   - Intersection Observer for animation trigger

### Files to Modify
```
app/
├── page.tsx                    # Replace MessageModal with LoveLetterSection
└── globals.css                 # Add handwriting font, letter styles
components/
├── EnvelopeAnimation.tsx       # NEW
├── LoveLetter.tsx              # NEW
├── LoveLetterSection.tsx       # NEW
└── MessageModal.tsx            # REMOVE or archive
```

## 📝 Content Structure

### Letter Format
```
Dear YANG,

[Opening paragraph - warm greeting]

[Body paragraphs - heartfelt message]
- Personal memories
- Feelings and emotions
- Future hopes and dreams

[Closing - love declaration]

Forever yours,
[Your name]

P.S. [Sweet afterthought]
```

### Decorative Elements
- Header: "A Letter for You" in pixel font
- Top corners: Small hearts
- Bottom right: "With Love" stamp
- Optional: Wax seal graphic
- Optional: Postmark with date

## ✅ Acceptance Criteria

### Envelope Animation
- [ ] Envelope displays in closed state initially
- [ ] Smooth opening animation triggers on scroll
- [ ] Wax seal "breaks" or fades during animation
- [ ] Animation feels natural and smooth (60fps)
- [ ] Works on mobile and desktop

### Letter Display
- [ ] Letter becomes visible after envelope opens
- [ ] Handwriting-style font loads properly
- [ ] Content is fully readable and formatted well
- [ ] Decorative elements enhance (not distract)
- [ ] No horizontal scrolling on mobile

### Content
- [ ] Replace Lorem ipsum with real love letter
- [ ] Proper paragraph spacing
- [ ] Appropriate letter format (greeting, body, closing)
- [ ] Personal and heartfelt tone
- [ ] Grammar and spelling checked

### Styling
- [ ] Matches pixel love theme
- [ ] Appropriate color palette used
- [ ] Good contrast for readability
- [ ] Decorations are cute and tasteful
- [ ] Responsive on all screen sizes

### Integration
- [ ] Remove MessageModal from page.tsx
- [ ] Remove Intersection Observer for old modal
- [ ] Section 2 no longer triggers modal
- [ ] Smooth scroll to section works
- [ ] No console errors

### Testing
- [ ] Test envelope animation on scroll
- [ ] Verify animation doesn't replay on scroll up
- [ ] Test on mobile viewport (393 x 852)
- [ ] Test on tablet and desktop
- [ ] Verify font loading
- [ ] Check animation performance

## 🎨 Font Recommendations

### Handwriting Fonts (Google Fonts)
1. **Dancing Script** - Elegant, flowing
2. **Satisfy** - Personal, handwritten feel
3. **Cedarville Cursive** - Casual, friendly
4. **Shadows Into Light** - Authentic handwriting

### Pixel Cursive Alternative
- **Pixel Handwriting** - Custom or from specialized sources
- Maintains pixel aesthetic while being decorative

## 📐 Animation Keyframes

```css
/* Envelope opening */
@keyframes envelope-open {
  0% {
    transform: rotateX(0deg);
  }
  100% {
    transform: rotateX(-180deg);
  }
}

/* Letter reveal */
@keyframes letter-reveal {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Wax seal break */
@keyframes seal-break {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.2) rotate(10deg);
  }
  100% {
    opacity: 0;
    transform: scale(0.8) rotate(-10deg);
  }
}
```

## 🎯 Priority
**HIGH** - Core enhancement that replaces existing functionality

## ⏱️ Estimated Effort
- Design & Planning: 30 min
- Component Development: 2 hours
- Styling & Animation: 1.5 hours
- Content Writing: 1 hour
- Testing & Polish: 45 min
- **Total**: ~5.5 hours

## 🔗 Dependencies
- None (standalone ticket)

## 📌 Notes
- Consider adding subtle paper texture for authenticity
- Envelope color should contrast with section background
- Test animation on slower devices for performance
- Keep letter content concise for mobile scrolling
- Add ability to easily customize letter content later

## 🎁 Nice-to-Have Additions
- [ ] Sound effect when envelope opens (optional)
- [ ] Vintage postmark with actual date
- [ ] Multiple letter pages that can be "turned"
- [ ] Handwritten signature (image or SVG)
- [ ] Subtle paper fold lines for realism
