# Phase 3: Scroll Indicator & Long Message Section

## 📦 Overview
Add a blinking "Scroll" indicator below the gift and create a second section with a scrollable modal containing a long heartfelt message.

## 🎯 Requirements

### Scroll Indicator
- Positioned below the animated gift
- Text: "Scroll" or "Scroll ↓"
- Blinking animation (1-2s interval)
- Pixel-themed styling
- Subtle bounce/arrow animation
- Encourages user to scroll down

### Second Section
- Full-screen section below landing (393 x 852px)
- Trigger point: when user scrolls to this section
- Opens a modal automatically (or on trigger)
- Modal contains long message
- Scrollable content within modal
- Same pixel theme as welcome modal

### Message Modal Content
- Heading: Optional title like "A Message for You" or "Dear YANG"
- Long scrollable message area
- Lorem ipsum placeholder (to be replaced)
- Comfortable reading experience
- Pixel-themed scrollbar (optional)
- Close button

### Scroll Behavior
- Smooth scroll between sections
- Snap to sections (optional)
- Detect when second section is in view
- Trigger message modal on scroll into view

## 🛠️ Technical Implementation

### Components to Create
1. **ScrollIndicator Component**
   - Blinking "Scroll" text
   - Arrow icon (optional)
   - Bounce animation

2. **MessageSection Component**
   - Second full-screen section
   - Scroll trigger detection
   - Modal trigger logic

3. **MessageModal Component**
   - Scrollable modal variant
   - Long text content
   - Custom scrollbar styling

### Scroll Detection
```tsx
// Use Intersection Observer
const [isMessageVisible, setIsMessageVisible] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsMessageModalOpen(true);
      }
    },
    { threshold: 0.5 }
  );
  
  if (messageSectionRef.current) {
    observer.observe(messageSectionRef.current);
  }
  
  return () => observer.disconnect();
}, []);
```

### Files to Create/Modify
```
components/
├── ScrollIndicator.tsx    # Blinking scroll prompt
├── MessageSection.tsx     # Second section wrapper
├── MessageModal.tsx       # Scrollable message modal
└── Modal.tsx              # Update for scroll variant
app/
├── page.tsx               # Add second section, scroll logic
└── globals.css            # Scroll indicator + scrollbar styles
```

## ✅ Phase 3 Checklist

### Scroll Indicator
- [ ] Create ScrollIndicator component
- [ ] Add blinking animation (opacity 0.3 to 1)
- [ ] Add bounce/float animation
- [ ] Add down arrow icon (Lucide ChevronDown)
- [ ] Position below gift (absolute or margin)
- [ ] Style with theme colors
- [ ] Test animation timing (1-2s)

### Second Section Setup
- [ ] Create MessageSection component
- [ ] Set full viewport height
- [ ] Add ref for Intersection Observer
- [ ] Apply background color/gradient
- [ ] Add smooth scroll behavior to HTML/body
- [ ] Test scroll snap (optional)

### Scroll Detection
- [ ] Implement Intersection Observer
- [ ] Detect when MessageSection is visible
- [ ] Trigger modal open on scroll into view
- [ ] Handle multiple scroll events properly
- [ ] Prevent modal from reopening on scroll up

### Message Modal
- [ ] Create MessageModal component
- [ ] Extend base Modal with scroll variant
- [ ] Add max-height with overflow-y: scroll
- [ ] Style scrollbar (webkit/Firefox)
- [ ] Add Lorem ipsum placeholder (5-6 paragraphs)
- [ ] Implement pixel-themed borders
- [ ] Ensure mobile-friendly sizing

### Message Content
- [ ] Add heading: "A Message for You" or similar
- [ ] Insert Lorem ipsum placeholder (long)
- [ ] Style typography for readability
- [ ] Add appropriate line-height (1.6-1.8)
- [ ] Ensure text color has good contrast
- [ ] Add padding for comfortable reading

### Styling
- [ ] Style scroll indicator with pixel aesthetic
- [ ] Add custom scrollbar (optional)
- [ ] Style message modal with chunky borders
- [ ] Apply theme colors throughout
- [ ] Add shadows for depth
- [ ] Ensure touch-friendly close button

### Integration
- [ ] Add MessageSection to page.tsx
- [ ] Connect scroll detection to modal state
- [ ] Import and render MessageModal
- [ ] Test scroll behavior
- [ ] Verify modal opens on scroll
- [ ] Test modal close functionality

### Testing
- [ ] Test scroll indicator animation
- [ ] Test smooth scroll between sections
- [ ] Verify modal opens when scrolling to section
- [ ] Test message modal scrolling
- [ ] Check on mobile viewport (393 x 852)
- [ ] Test on actual device
- [ ] Verify performance (no lag)

### Accessibility
- [ ] Add ARIA labels to scroll indicator
- [ ] Ensure keyboard navigation works
- [ ] Test with screen reader
- [ ] Verify focus management in modal
- [ ] Add skip link (optional)

## 📝 Technical Notes

### Scroll Indicator Animation
```css
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}

.scroll-indicator {
  animation: 
    blink 2s ease-in-out infinite,
    float 2s ease-in-out infinite;
  font-family: var(--pixel-font);
  color: var(--pixel-text);
  text-align: center;
}
```

### Smooth Scroll Setup
```css
html {
  scroll-behavior: smooth;
}

/* Optional: Scroll snap */
.scroll-container {
  scroll-snap-type: y mandatory;
}

.section {
  scroll-snap-align: start;
  min-height: 100vh;
}
```

### Custom Scrollbar
```css
.message-content::-webkit-scrollbar {
  width: 12px;
}

.message-content::-webkit-scrollbar-track {
  background: var(--pixel-cream);
  border: 2px solid var(--pixel-pink);
}

.message-content::-webkit-scrollbar-thumb {
  background: var(--pixel-pink);
  border: 2px solid var(--pixel-cream);
}

.message-content::-webkit-scrollbar-thumb:hover {
  background: var(--pixel-coral);
}
```

### Lorem Ipsum Placeholder
```
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...

[5-6 paragraphs of Lorem ipsum for scrolling demonstration]
```

### Intersection Observer Cleanup
```tsx
// Trigger only once
const [hasTriggered, setHasTriggered] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !hasTriggered) {
        setIsMessageModalOpen(true);
        setHasTriggered(true);
      }
    },
    { threshold: 0.5 }
  );
  
  // ... rest of implementation
}, [hasTriggered]);
```

## 🎨 Design References
- Scroll indicator should be subtle but noticeable
- Message modal should be comfortable for reading
- Keep generous padding in modal (24-32px)
- Line height 1.6-1.8 for readability
- Scrollbar should match pixel theme

## ⏭️ Next Phase
Once Phase 3 is complete, move to **Phase 4: Photo Slider** where we implement the slidable picture frames with captions.
