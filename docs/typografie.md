Typografie Choice and Font Size

## ⭐ Acumin Pro (by Robert Slimbach) — Highly accessible  
Strengths  
Designed for UI + editorial use  
Clear, neutral, highly legible skeleton  
Great x-height → easy on screens  
Works wonderfully in responsive typography  
Very familiar sans-serif proportions → assists dyslexic readers  
Excellent at small sizes (12–14px)  
Potential issues  
None major. It’s a top-tier choice for inclusive UI.  
Conclusion  
Acumin Pro is highly accessible and WCAG-friendly.  
It pairs BEAUTIFULLY with your chosen color palette.  

## 🔍 General Requirements for “Accessible” Fonts  
To meet WCAG 2.2 and cognitive-accessibility best practices, a font should have:  
✔ Clear distinction between ambiguous characters  
(l / I / 1, 8 / B, 0 / O)  
✔ Generous x-height  
Improves small-size readability  
✔ Open counters  
Makes shapes recognizable  
✔ Simple, familiar letterforms  
Better for neurodivergent and dyslexic users  
✔ Low or moderate stroke contrast  
Prevents disappearing strokes on bright backgrounds  
Both Komet and Acumin meet these principles.  

## Fall Back 
1. Source Sans 3  
Extremely readable  
Large x-height  
Open counters  
Perfect for UI, WCAG-friendly  

Source Serif 4  
Best serif option for readability  
Very stable letter shapes  

## ✅ BASE FONT FAMILY  

```
font-family: "Acumin Pro", "Acumin", "Helvetica Neue", Arial, sans-serif;
```

Perfect — I will create a **complete, professional typographic system using Acumin** for your **Accessible Component Library**, including:  

* Mobile
* Tablet
* Desktop
* High-contrast mode
* Dyslexia-friendly mode

I will also define:

* H1, H2, H3
* Body text
* Navigation
* UI labels
* Form fields
* Buttons
* Tables

Everything will follow WCAG 2.2 AA/AAA rules and modern design-system best practices.

---

# ✅ **BASE FONT FAMILY**

```
font-family: "Acumin Pro", "Acumin", "Helvetica Neue", Arial, sans-serif;
```

---

# 🌐 **1. TYPOGRAPHIC SCALE (Fluid + Breakpoints)**

Designed to match Apple/Microsoft clarity + your futuristic brand tone.

---

# 📱 **MOBILE (≥ 320px)**

### **Headings**

* **H1** — 28px / 1.2 line-height / 700
* **H2** — 22px / 1.3 line-height / 600
* **H3** — 18px / 1.35 line-height / 600

### **Body Text**

* **Body L** — 16px / 1.45 line-height / 400
* **Body M** — 15px / 1.45
* **Body S** — 14px / 1.5

### **Navigation**

* **Nav item** — 15px / 600

### **Labels**

* **Label** — 14px / 600

### **Form fields**

* **Input text** — 16px / 400
* **Input label** — 14px / 600

### **Buttons**

* **Primary** — 16px / 600
* **Secondary** — 15px / 600

### **Tables**

* **Table Header** — 14px / 700
* **Table Cell** — 14px / 400

---

# 📱→💻 **TABLET (≥ 768px)**

### **Headings**

* **H1** — 32px / 1.2 / 700
* **H2** — 26px / 1.25 / 600
* **H3** — 20px / 1.3 / 600

### **Body**

* **Body L** — 17px / 1.45
* **Body M** — 16px
* **Body S** — 15px

### **Navigation**

* **Nav item** — 16px / 600

### **Labels**

* **Label** — 15px / 600

### **Buttons**

* **Primary** — 16px / 600
* **Secondary** — 15px / 600

### **Tables**

* **Header** — 15px / 700
* **Cell** — 15px / 400

---

# 🖥️ **DESKTOP (≥ 1024–1440px)**

### **Headings**

* **H1** — 40px / 1.2 / 700
* **H2** — 32px / 1.25 / 600
* **H3** — 24px / 1.3 / 600

### **Body**

* **Body L** — 18px / 1.5
* **Body M** — 17px
* **Body S** — 15–16px

### **Navigation**

* **Nav item** — 17px / 600

### **Labels**

* **Label** — 15–16px / 600

### **Buttons**

* **Primary** — 17px / 600
* **Secondary** — 16px

### **Tables**

* **Header** — 16px / 700
* **Cell** — 15–16px / 400

---

# 🌓 **HIGH CONTRAST MODE (AA + AAA)**

Using Acumin in HC mode requires slight adjustments.

### **Changes**

* Boost font weights by +100 where applicable
* Increase body text size ≥ 17px for AAA readability
* Increase letter-spacing slightly for uppercase elements

### **High-Contrast Typography**

* **H1** — +100 weight (now 800)
* **H2** — +100 weight (700)
* **H3** — +100 weight (700)
* **Body text** — minimum 17px
* **Labels** — 15–16px, 600 or 700
* **Buttons** — never below 16px

---

# 🧠 **DYSLEXIA-FRIENDLY MODE**

Acumin is quite good for dyslexic readers *if tuned correctly*.
Typography modifies to improve pattern recognition:

### **Adjustments**

* Increase **letter-spacing: 0.5–1px**
* Slightly reduce contrast between headings and body
* Avoid ALL CAPS
* Increase line-height for all text (1.5–1.6)

### **Recommended Dyslexia Mode Scale**

* **H1** — 36px / 1.3 / 600

* **H2** — 28px / 1.35 / 600

* **H3** — 22px / 1.4 / 600

* **Body L** — 18px / 1.6

* **Body M** — 17px / 1.6

* **Body S** — 16px / 1.6

* **Buttons** — 17px / 600, letter-spacing: 0.5px

---

# 🧩 **COMPLETE CSS TOKEN SET (ready to copy)**

### **Fonts**

```css
--font-family-base: "Acumin Pro", "Acumin", "Helvetica Neue", Arial, sans-serif;
```

### **Headings**

```css
--h1-size-mobile: 28px;
--h1-size-tablet: 32px;
--h1-size-desktop: 40px;

--h2-size-mobile: 22px;
--h2-size-tablet: 26px;
--h2-size-desktop: 32px;

--h3-size-mobile: 18px;
--h3-size-tablet: 20px;
--h3-size-desktop: 24px;
```

### **Body**

```css
--body-l-mobile: 16px;
--body-l-desktop: 18px;

--body-m-mobile: 15px;
--body-m-desktop: 17px;

--body-s-mobile: 14px;
--body-s-desktop: 15px;
```

### **Line-height defaults**

```css
--lh-heading: 1.2;
--lh-body: 1.45;
--lh-dyslexia: 1.6;
```

### **Weights**

```css
--weight-heading: 700;
--weight-heading-hc: 800;
--weight-body: 400;
--weight-label: 600;
```

---

