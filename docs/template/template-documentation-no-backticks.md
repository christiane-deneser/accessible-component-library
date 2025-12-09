# Accessible {{ComponentName}} Component

> Short summary (1–2 sentences) explaining what this component is and when to use it.

---

## 1) Purpose

Describe the goal of the component:

- What problem it solves
- Why it exists in accessible UI
- What users it particularly supports  
  (keyboard-only users, screen reader users, neurodivergent users, etc.)

---

## 2) Demo

You can try the live demo here:  
[`index.html`](./index.html)

**Optional:** add screenshots or GIFs  

![Screenshot of {{ComponentName}}](./screenshot.png)

**Optional:** screen reader demonstration  
_You can embed a video clip showing VoiceOver, NVDA, or TalkBack behavior._

---

## 3) Markup Overview

A short explanation of the component’s core HTML structure.

Example:

- A heading containing the interactive trigger
- A panel containing the content
- Required IDs or relationships

CODE EXAMPLE  
As code snippet, Your HTML markup goes here

## 4) ARIA Roles & Attributes

List only the attributes needed for this component—keep it clear and concise.

**Example for Accordion:**

- `aria-expanded` reflects open/closed state  
- `aria-controls` links the button to the associated panel  
- Panels may use `role="region"` and `aria-labelledby`  
- Use ARIA minimally and only when needed  

---

## 5) Keyboard Interaction

Document how users operate the component without a mouse.

**Example for Accordion:**

### Required
- **Enter / Space** – toggle the section  
- **Tab / Shift + Tab** – move through focusable items  

### Optional
- Arrow keys for moving between headers  
- Home / End for jumping to first/last header  

---

## 6) Cognitive & Neuro-Inclusive Notes

Explain choices that help neurodivergent users:

- Clear labels  
- Predictable structure  
- Persistent affordances  
- Reduced cognitive load  
- No hidden surprises  

---

## 7) Code Example

Link to the actual implementation:

- [`index.html`](./index.html)
- [`styles.css`](./styles.css)
- (If applicable) `{{component}}.js`

CODE EXAMPLE  
As code snippet, Your minimal code example goes here

## 8) Testing Guidance

How to test the component for accessibility:

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

Include only the guidelines that apply.

**Example for Accordion:**

- **WCAG 2.1.1** Keyboard  
- **WCAG 2.4.3** Focus Order  
- **WCAG 2.4.7** Focus Visible  
- **WCAG 4.1.2** Name, Role, Value  
- **EN 301 549** — 11.2.2 & 11.2.3  

---

## 10) References

- ARIA Authoring Practices – {{Component Pattern Name}}
- W3C Example Patterns
- External design system inspiration (GOV.UK, Adobe Spectrum, Carbon, etc.)
