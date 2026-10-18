# SMC Hub

A lightweight, modern, mobile-friendly congregation forms and resources directory portal built with pure HTML, CSS, and vanilla JavaScript. Deployed on **GitHub Pages**.

---

## 🌟 Features

- **Zero Build Step**: Pure static web application (HTML5, CSS3, ES6 JavaScript). No `npm`, `webpack`, or node build dependencies required.
- **Config-Driven Architecture**: Manage all forms, categories, and links in one clean file (`js/forms-data.js`).
- **Real-Time Live Search**: Instant filtering across form titles, descriptions, categories, and form codes (e.g. `S-4`, `S-24`, `S-12`, `S-205`, `A-19`, `DC-50`, `G-8`).
- **Expandable In-Line Header**: Desktop search and filters sit in a single compact row; mobile features smooth expandable bottom drawers.
- **Category Filter Tabs**: One-click category filtering with automatic form count badges.
- **Light & Dark Theme**: Supports automatic OS appearance matching (`prefers-color-scheme`) and manual toggle with `localStorage` memory.
- **Mobile-First 2-Column Grid**: Optimized 2-column grid layout on phones with clamped heights for balanced visual cards.
- **Floating Back to Top**: Minimal floating action button (FAB) that appears as you scroll down.
- **Safe External Links**: Links open securely in a new browser tab with `target="_blank"` and `rel="noopener noreferrer"`.

---

## 📝 How to Add or Edit Forms

All form links and site settings are configured in **`js/forms-data.js`**. You do **not** need to touch `index.html` or CSS to add or update forms.

### Adding a New Form Entry
Open `js/forms-data.js` and add an object to the `forms` array:

```javascript
{
  id: "my-new-form",
  title: "Application for Auxiliary Pioneer Service (S-205b)",
  description: "Submit your application to serve as an auxiliary pioneer for one or more months.",
  category: "Expand Service",
  url: "https://myn8n.webredirect.org/form/auxiliary-pioneer-application",
  badge: "Active",    // Optional: "Popular", "Coming Soon", "Hub", or leave undefined
  icon: "calendar",   // Optional: "form", "calendar", "map", "cart", "truck", "bank", "mic", "file", "user", "message", "clipboard"
  tags: ["auxiliary", "pioneer", "s-205b", "application", "service"] // Optional keywords for search
}
```

### Available Icons
Set the `icon` property to any of the following presets:
- `"form"` (Document / report form)
- `"bank"` (Financial records / accounts / S-24)
- `"truck"` (Service vehicle / transportation)
- `"map"` (Territory / boundaries / hub map)
- `"calendar"` (Date / schedule)
- `"clipboard"` (Attendance / checklist / report)
- `"user"` (Person / volunteer / publisher profile / A-2)
- `"message"` (Follow-up / inquiries / S-43)
- `"file"` (General documents / applications)
- `"mic"` (Sound, stage, video, AV equipment)
- `"cart"` (Public witnessing cart)
- `"hardhat"` (Safety helmet / construction / A-19 volunteer program)
- `"world"` (Globe / worldwide service / A-8 Worldwide Order)
- `"briefcase"` (Classic briefcase / S-205b Auxiliary Pioneer)
- `"briefcase-star"` (Upgraded briefcase with star emblem / S-205 Regular Pioneer)
- `"bulldozer"` (Heavy equipment / LDC DC-50)
- `"university"` (University columns / SKE G-8 School for Kingdom Evangelizers)

---

## 💻 Local Testing & Preview

To preview the website on your local machine:
- **Option 1 (Direct)**: Simply double-click `index.html` to open it in your default web browser.
- **Option 2 (Local Server)**: Run a simple local Python server:
  ```bash
  python -m http.server 8000
  ```
  Then navigate to `http://localhost:8000`.

---

## 🎨 Customizing Branding & Colors

- **Change Title**: Edit `siteTitle` at the top of `js/forms-data.js`.
- **Change Primary Colors**: Open `css/styles.css` and adjust the `--primary` hex value in the `:root` and `[data-theme="dark"]` rules.
