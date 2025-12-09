# Accessible Accordion Component

An accordion groups content into expandable sections, allowing users to reveal or hide information without excessive scrolling. Use it when you want to organize related content in a compact, structured way.

---

## 1) Purpose

The accordion provides a way to present multiple sections of content without overwhelming users. Each section can be expanded or collapsed individually.

This component helps:

- Reduce cognitive overload by revealing content progressively  
- Keep pages scannable and structured  
- Support keyboard-only users with clear, predictable interactions  
- Provide screen reader users with semantic markup and state awareness  
- Offer a low-friction reading and navigation experience for neurodivergent users  

---

## 2) Demo

You can try the live demo here:  
[index.html](./index.html)

**Optional:** add screenshots or GIFs  

**Optional:** screen reader demonstration  
_You can embed a video clip showing VoiceOver, NVDA, or TalkBack behavior._

---

## 3) Markup Overview

Each accordion section consists of:

- A heading that contains a button acting as the interactive trigger  
- A content panel that expands or collapses  
- A connection between header and panel using IDs and ARIA attributes  

ADD CODE SNIPPET HERE  
minimal HTML pattern

---

## 4) ARIA Roles & Attributes

The accordion uses a minimal and meaningful set of ARIA attributes:

- `aria-expanded` reflects whether the section is open or closed  
- `aria-controls` links the header button to the corresponding panel  
- Panels may use `role="region"` and `aria-labelledby` for additional structure  
- ARIA is applied sparingly and only when it adds semantic clarity  

---

## 5) Keyboard Interaction

### Required
- **Enter / Space** – toggle the section  
- **Tab / Shift + Tab** – move through focusable elements  

### Optional (not implemented yet)
- Arrow keys to move between accordion headers  
- Home / End to jump to first or last header  

---

## 6) Cognitive & Neuro-Inclusive Notes

This component is designed to reduce cognitive load:

- Uses clear, descriptive section labels  
- Reveals content progressively to avoid overwhelming users  
- Keeps interaction consistent and predictable  
- Ensures affordances (e.g., state change) are visually persistent  
- Avoids hidden surprises or unexpected shifts  

---

## 7) Code Example

Full implementation can be found in:

- index.html  
- styles.css  
- accordion.js (if applicable)

ADD CODE SNIPPET HERE  
Minimal example placeholder

---

## 8) Testing Guidance

### Manual Testing
- Keyboard testing (Tab, Shift+Tab, Enter, Space, etc.)  
- Screen readers: NVDA, VoiceOver, TalkBack  
- Resize text 200–400%  
- High contrast mode checks  

### Automated Testing
- axe DevTools  
- Accessibility Insights  
- Lighthouse  
- HTML validator  

---

## 9) Relevant WCAG & EN 301 549 Criteria

These guidelines typically apply to accordions:

- **WCAG 2.1.1** Keyboard  
- **WCAG 2.4.3** Focus Order  
- **WCAG 2.4.7** Focus Visible  
- **WCAG 4.1.2** Name, Role, Value  
- **EN 301 549** — 11.2.2 & 11.2.3  

---

## 10) References

- ARIA Authoring Practices – Accordion Pattern  
- W3C Example Patterns  
- External design systems that implement accessible accordions: GOV.UK, Adobe Spectrum, Carbon  
