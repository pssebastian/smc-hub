# SMC Forms Directory

A lightweight, modern, mobile-friendly forms directory portal built with pure HTML, CSS, and vanilla JavaScript. Designed specifically for zero-build-step deployment on **GitHub Pages**.

---

## 🌟 Features

- **Zero Build Step**: Pure static web application (HTML5, CSS3, ES6 JavaScript). No `npm`, `webpack`, or node dependencies required.
- **Config-Driven Architecture**: Manage all forms, categories, and links in one clean file (`js/forms-data.js`).
- **Real-Time Live Search**: Instant filtering across form titles, descriptions, categories, and keywords as you type.
- **Category Filter Tabs**: One-click category filtering with automatic form count badges.
- **Light & Dark Theme**: Supports automatic OS appearance matching (`prefers-color-scheme`) and a manual toggle button with `localStorage` memory.
- **Mobile-First Responsive Design**: Optimized for smartphones, tablets, and desktop displays.
- **Keyboard Friendly**: Press `/` or `Ctrl+K` from anywhere on the page to instantly jump to the search bar; press `Esc` to exit.
- **Safe External Links**: Links open securely in a new browser tab with `target="_blank"` and `rel="noopener noreferrer"`.

---

## 🚀 How to Deploy on GitHub Pages

Deploying takes less than 2 minutes:

### 1. Initialize Git & Push to GitHub
If you haven't initialized your Git repository yet, run the following in your project folder:

```bash
git init
git add .
git commit -m "Initial commit: SMC Forms Directory"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY-NAME.git
git push -u origin main
```

### 2. Enable GitHub Pages
1. Go to your repository on GitHub.
2. Click **Settings** (top navigation tab).
3. In the left sidebar, click **Pages** (under the "Code and automation" section).
4. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main` (or `master`) and folder `/(root)`.
5. Click **Save**.
6. Wait 1-2 minutes. GitHub will provide your live URL (e.g. `https://<your-username>.github.io/<repository-name>/`).

---

## 📝 How to Add or Edit Forms

All form links and site settings are configured in **`js/forms-data.js`**. You do **not** need to touch `index.html` or CSS to add or update forms.

### Adding a New Form Entry
Open `js/forms-data.js` and add an object to the `forms` array:

```javascript
{
  id: "my-new-form",
  title: "Auxiliary Pioneer Application",
  description: "Apply for auxiliary pioneer service for the upcoming service month.",
  category: "Ministry & Cart",
  url: "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform",
  badge: "New",       // Optional: "Popular", "New", "Important", or leave undefined
  icon: "calendar",   // Optional: "form", "calendar", "map", "cart", "mic", "file", "user", "message", "clipboard"
  tags: ["pioneer", "auxiliary", "application", "service"] // Optional keywords for search
}
```

### Available Icons
Set the `icon` property to any of the following presets:
- `"form"` (Default document form)
- `"cart"` (Public witnessing cart / trolley)
- `"map"` (Territory / boundaries map)
- `"calendar"` (Date / event / monthly schedule)
- `"mic"` (Sound, stage, video, AV equipment)
- `"clipboard"` (Checklists, reports, updates)
- `"file"` (General documents, maintenance reports)
- `"user"` (Publisher profile, contact info update)
- `"message"` (Follow-up intake, contact inquiries)

### Adding a New Category
To add a new category tab:
1. In `js/forms-data.js`, add your new category name to the `categories` array:
   ```javascript
   categories: [
     "Ministry & Cart",
     "Territories",
     "Meetings & Hall",
     "General & Administration",
     "Youth & Family" // <-- Added
   ]
   ```
2. Assign any form to that category using `category: "Youth & Family"`. The tab and count will update automatically.

---

## 💻 Local Testing & Preview

To preview the website on your local machine:
- **Option 1 (Direct)**: Simply double-click `index.html` to open it in your default web browser.
- **Option 2 (Local Server)**: If you use VS Code / Antigravity, open with *Live Server*, or run a simple local Python server:
  ```bash
  python -m http.server 8000
  ```
  Then navigate to `http://localhost:8000`.

---

## 🎨 Customizing Branding & Colors

- **Change Title & Subtitle**: Edit `siteTitle` and `siteSubtitle` at the top of `js/forms-data.js`.
- **Change Primary Colors**: Open `css/styles.css` and adjust the `--primary` hex value in the `:root` and `[data-theme="dark"]` rules.
