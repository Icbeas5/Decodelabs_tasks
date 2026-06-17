# DecodeLabs – Project 1: Responsive Frontend Landing Page

A responsive multi-section landing page built with vanilla HTML, CSS, and JavaScript as part of the DecodeLabs internship program.

---

## 📁 Project Structure

```
project-1/
├── index.html       # Main HTML file
├── style.css        # Stylesheet (variables, layout, responsiveness)
└── script.js        # JavaScript (burger menu, form validation)
```

---

## ✨ Features

- **Sticky Navigation Bar** – stays at the top while scrolling; collapses into a hamburger menu on mobile
- **Hero Section** – full-width banner with a call-to-action button
- **About Section** – three-card grid highlighting HTML5, CSS3, and JavaScript
- **Services Section** – highlights three key things built: responsive layout, navigation bar, and contact form
- **Contact Form** – validates name, email, and message fields with user-friendly feedback messages
- **Footer** – simple copyright footer

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| HTML5      | Semantic structure with landmark elements (`header`, `main`, `section`, `footer`) |
| CSS3       | Custom properties, Flexbox, CSS Grid, media queries, transitions |
| JavaScript | DOM manipulation, event listeners, basic form validation |

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|------------|--------|
| `< 768px` (Mobile) | Single-column layout; burger menu replaces nav links |
| `≥ 768px` (Tablet) | 3-column grid for cards and service items |
| `≥ 1024px` (Desktop) | Wider padding (10%) for a more spacious layout |

---

## 🎨 Design Tokens

Defined as CSS custom properties in `:root`:

```css
--mocha: #A5856E   /* Primary accent */
--blue:  #A0D4E0   /* Hero gradient */
--grey:  #F2F0EA   /* Background */
--dark:  #2c2420   /* Text */
--white: #ffffff   /* Surfaces */
```

---

## ⚙️ JavaScript Functionality

### Burger Menu
Toggles the `.open` class on the mobile nav. Clicking any nav link auto-closes the menu.

### Contact Form Validation
- Checks that **name**, **email**, and **message** are all filled in
- Validates that the email contains `@`
- Shows a ✅ success message on valid submission and resets the form
- Shows a ⚠️ warning message for invalid or incomplete input

---

## 🚀 Getting Started

1. Clone or download the repository
2. Open `index.html` in any modern browser — no build tools or dependencies required

```bash
git clone <repo-url>
cd project-1
open index.html
```

---

## 📝 Notes

- No external libraries or frameworks used — pure vanilla HTML/CSS/JS
- The contact form does **not** send data to a server; it is front-end only
- Favicon sourced from the DecodeLabs LinkedIn company page

---

*Built as part of the [DecodeLabs](https://www.linkedin.com/company/decodelabs) internship – Frontend Development Track.*
