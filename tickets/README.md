# 🎫 Tickets Index

## 📋 Active Tickets

### Ticket #01: Love Letter Section (Refactor Section 2)
**Priority**: HIGH | **Status**: 📝 Planning | **Effort**: ~5.5 hours

Refactor Section 2 to replace message modal with inline love letter featuring sealed envelope animation that opens to reveal handwritten-style letter.

**Key Features**:
- Sealed envelope with opening animation
- Handwritten-style typography
- Cute pixel decorations (hearts, wax seal, stamps)
- No modal - inline section display
- Smooth Intersection Observer trigger

📄 [View Full Ticket](ticket-01-love-letter-section.md)

---

### Ticket #02: Virtual Hug/Kiss Counter
**Priority**: MEDIUM | **Status**: 📝 Planning | **Effort**: ~3.5 hours

Interactive buttons to send virtual hugs or kisses with animated hearts flying across screen and persistent counter.

**Key Features**:
- "Send a Hug 🤗" and "Blow a Kiss 💋" buttons
- Animated hearts/emojis fly on click
- Counter display with pulse animation
- Optional localStorage persistence
- Multiple simultaneous animations

📄 [View Full Ticket](ticket-02-hug-kiss-counter.md)

---

### Ticket #03: "You Make Me Feel..." Word Cloud
**Priority**: MEDIUM-HIGH | **Status**: 📝 Planning | **Effort**: ~4 hours

Animated word cloud displaying 15-20 emotion words that float and light up on hover, creating visual representation of feelings.

**Key Features**:
- 15-20 emotion words floating
- Varied sizes for visual hierarchy
- Interactive hover effects (glow, scale)
- Gentle float animations
- Responsive design

📄 [View Full Ticket](ticket-03-word-cloud.md)

---

### Ticket #04: Date Ideas Roulette
**Priority**: MEDIUM | **Status**: 📝 Planning | **Effort**: ~7 hours

Interactive spinning wheel or card shuffle to randomly select fun date ideas for future outings.

**Key Features**:
- Spinning wheel (8-10 segments)
- Smooth spin animation (3-4 seconds)
- Random date idea selection
- Result display with emphasis
- 8-10 creative date ideas pre-loaded

📄 [View Full Ticket](ticket-04-date-roulette.md)

---

### Ticket #05: Font System Consistency & Readability
**Priority**: HIGH | **Status**: 📝 Planning | **Effort**: ~3.5 hours

Establish consistent font hierarchy combining pixel font for headings with readable font for body content.

**Key Features**:
- Pixel font (Press Start 2P) for headings/buttons/UI
- Readable font (Nunito recommended) for descriptions/letters
- CSS variables and utility classes
- Update all existing components
- Improved readability for long-form content

📄 [View Full Ticket](ticket-05-font-consistency.md)

---

### Ticket #06: Gift Interaction & Opening Effects
**Priority**: MEDIUM-HIGH | **Status**: 📝 Planning | **Effort**: ~5.5 hours

Enhance the landing/gift section with better UX affordances and delightful opening animations.

**Key Features**:
- Periodic shake animation (every 2-3s) to indicate clickability
- "Open Me!" prompt before gift is clicked (replaces scroll indicator)
- "Scroll" indicator only shows after gift is opened
- Opening sequence: shake 3x → confetti explosion (pixel hearts)
- 20-30 pixel hearts burst in random directions
- Smooth timing and state management

📄 [View Full Ticket](ticket-06-gift-interaction-improvements.md)

---

## 📊 Summary

| Ticket | Priority | Status | Effort | Type |
|--------|----------|--------|--------|------|
| #01 | HIGH | Planning | 5.5h | Refactor |
| #05 | HIGH | Planning | 3.5h | Enhancement |
| #06 | MEDIUM-HIGH | Planning | 5.5h | Enhancement |
| #03 | MEDIUM-HIGH | Planning | 4h | New Feature |
| #02 | MEDIUM | Planning | 3.5h | New Feature |
| #04 | MEDIUM | Planning | 7h | New Feature |
| **Total** | - | - | **29h** | - |

## 🎯 Recommended Implementation Order

1. **Ticket #05** (Font Consistency) - HIGH priority, affects all components
2. **Ticket #06** (Gift Interaction) - MEDIUM-HIGH, improves first impression
3. **Ticket #01** (Love Letter Section) - HIGH priority, replaces existing functionality
4. **Ticket #03** (Word Cloud) - Strong emotional impact, medium complexity
5. **Ticket #02** (Hug/Kiss Counter) - Quick win, fun interaction
6. **Ticket #04** (Date Roulette) - Most complex, implement last

## 📁 Directory Structure

```
valiri/
├── tickets/
│   ├── README.md                               # This file
│   ├── ticket-01-love-letter-section.md
│   ├── ticket-02-hug-kiss-counter.md
│   ├── ticket-03-word-cloud.md
│   ├── ticket-04-date-roulette.md
│   ├── ticket-05-font-consistency.md
│   └── ticket-06-gift-interaction-improvements.md
└── archives/
    ├── phase-1-setup-and-gift.md          # ✅ Completed
    ├── phase-2-welcome-modal.md           # ✅ Completed
    ├── phase-3-scroll-and-message.md      # ✅ Completed
    ├── phase-4-photo-slider.md            # ✅ Completed
    ├── phase-5-final-message.md           # ✅ Completed
    └── phase-6-integration.md             # ✅ Completed
```

## 🎨 Expected New Flow After Implementation

1. **Section 1**: Landing with animated gift → Welcome modal ✅
2. **Section 2**: Love Letter with envelope animation 🎫 (#01)
3. **Section 3**: Photo Slider with memories ✅
4. **Section 4**: "You Make Me Feel..." Word Cloud 🎫 (#03)
5. **Section 5**: Virtual Hug/Kiss Counter 🎫 (#02)
6. **Section 6**: Date Ideas Roulette 🎫 (#04)
7. **Section 7**: Final "Happy Valentines I love u" ✅

Total: **7 sections** (3 existing + 4 new)
**Plus**: Font system consistency across all sections 🎫 (#05)
**Plus**: Enhanced gift interaction and opening effects 🎫 (#06)

## 📝 Notes

- All tickets are currently in planning phase
- Ticket #05 should be implemented first (affects all components)
- Ticket #06 enhances existing Section 1 (landing/gift)
- Each ticket has detailed specifications and acceptance criteria
- Tickets #02-#04 can be implemented independently after #05
- Ticket #01 depends on #05 for optimal typography
- Ticket #06 improves UX affordance for first interaction
- Estimated total effort: ~29 hours
- All tickets maintain pixel love theme consistency
- Mobile-first responsive design required for all

## 🚀 Getting Started

To implement a ticket:
1. Read the full ticket markdown file
2. Create components as specified
3. Test against acceptance criteria
4. Move ticket to archives when complete
5. Update this index with completion status

---

**Created**: February 10, 2026
**Status**: All tickets in planning phase
**Next Action**: Begin implementation of Ticket #01 (Love Letter Section)
