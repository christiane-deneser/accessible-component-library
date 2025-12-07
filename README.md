# Accessible Component Library

## 📦 Installation & Development Setup

### ✅ Requirements

Make sure you have the following installed:  

* Node.js (LTS recommended)  

Download LTS from: [nodejs.org](https://nodejs.org/en/download).

Check your version:

```
node -v
npm -v
```

### Python 3 (optional — for simple local server)

Most systems include it, but you can check with:

```
python3 --version
```

### ⬇️ Install the project
```
# Clone the repository
git clone https://github.com/<your-username>/accessible-component-library.git

# Enter the project
cd accessible-component-library

# Install dependencies
npm install
```
This installs the Sass compiler and any future build tooling.

### 🧩 Project Structure (short overview)
```
accessible-component-library/
├─ index.html               # landing page for component demos
├─ components/              # each component = isolated demo
│  └─ button/
│     ├─ index.html
│     ├─ styles.scss        # source (compiled)
│     └─ styles.css         # built file (committed)
├─ assets/
│  ├─ scss/                 # shared styles (reset, tokens, base)
│  └─ css/
│     └─ global.css         # compiled shared stylesheet
└─ package.json
```

### 🧪 Development Commands

Start a local server (Option A — Python)
```
python3 -m http.server 3000
```

Opens the project at: `http://localhost:3000`

### 🎨 SCSS Build Commands

Compile all styles once: 

```
npm run sass
```

Watch SCSS files and recompile on every change:

```
npm run sass:watch

```

Your component styles (`styles.scss`) will automatically compile into their corresponding `styles.css`.

### 📁 Output Files

The project generates:
* `assets/css/global.css`
* `components/**/styles.css`

These files are committed to Git because they are required for GitHub Pages or static hosting. Source maps (`.css.map`) and `node_modules` are ignored.

---

## About this repo

This repository contains a growing set of **accessible, framework-agnostic UI components**, designed with:

- **Semantic HTML**
- **Robust keyboard support**
- **Screen reader-friendly markup**
- **WCAG 2.2 / EN 301 549 awareness**
- A focus on **neuro-inclusive, low-friction user experiences**

Components are implemented in vanilla HTML/CSS (and minimal JavaScript where needed) so they can be understood and reused across different tech stacks.

---

## 🎯 Goals

- Provide **clear, copy-paste-friendly examples** of accessible UI components
- Show **how** and **why** each component is implemented in a certain way
- Map components to relevant **WCAG 2.2** and **EN 301 549** criteria
- Demonstrate **keyboard and screen reader behavior**
- Offer **good vs. bad** examples where useful
- Serve as a resource for teams building **accessible design systems**
