# SMC Hub

A lightweight, modern, mobile-friendly congregation portal built with pure HTML, CSS, and vanilla JavaScript. Deployed on **GitHub Pages**.

---

## 🌟 Architecture & Modules

SMC Hub features a 4-module hub grid homepage with zero-dependency client-side routing (`#hash`):

1. **Announcements (`#announcements`)**: Congregation notices, special reminders, and schedules *(Coming soon)*.
2. **Guidelines (`#guidelines`)**: Procedural instructions and role-based video tutorials.
   - **Accounting Guidelines (`#guidelines/accounting`)**: Congregation accounting tutorials synced with official branch videos (`tca_01` through `tca_29`).
   - Dynamic Role View: Accounts Servant, Secretary, COBE, Body of Elders, Cashbox Holder & Backup, and Auditor.
   - Dynamic Filter: Content adapts dynamically based on the active Congregation Account Type setting (Bank Account vs. Cashbox).
3. **Forms (`#forms`)**: The complete congregation forms directory with real-time live search, category filter drawers, form badges, and external links.
4. **Reports (`#reports`)**: Monthly statements, statistics, and publisher activity overviews *(Coming soon)*.
5. **Admin Control Panel (`#admin`)**: Control panel for administrators to select the congregation's active accounting system (Bank Account vs. Cashbox) and manage site-wide announcement banners.

---

## 🌟 Key Features

- **Zero Build Step**: Pure static web application (HTML5, CSS3, ES6 JavaScript). No `npm`, `webpack`, or Node build dependencies required.
- **Config-Driven Architecture**:
  - `js/forms-data.js`: Manage forms, categories, and site branding.
  - `js/accounting-data.js`: Manage tutorial videos (`videos`), roles (`roles`), and mapping table (`role2video`).
  - `js/guidelines-data.js`: Manage the guidelines directory and future guideline additions.
- **Dynamic Accounting Modes**:
  - **Bank Account Mode**: Enables bank transactions, electronic disbursements, and reconciliation tutorials; shows 5 applicable roles (excludes Cashbox Holder).
  - **Cashbox Mode**: Enables petty cash agreements, cash advances, cashbox reconciliation, and mobile money branch transfer tutorials; shows 6 applicable roles (including Cashbox Holder & Backup).
- **In-Page Video Search**: Instant live search for tutorial videos within any role by keyword, topic, or video code (e.g. `S-24`, `Pondo`, `Donasyon`, `TCA-06`).
- **Responsive Navigation**: Breadcrumbs with one-tap back navigation at every level.
- **Expandable In-Line Header**: Desktop search and filter drawers appear automatically when on the Forms directory.
- **Light & Dark Theme**: Automatic OS appearance matching (`prefers-color-scheme`) and manual toggle with `localStorage` memory.
- **Mobile-First 2-Column Grid**: Optimized 2-column grid layout on smartphones with balanced visual cards.
- **Safe External Links**: Links open securely in a new browser tab with `target="_blank"` and `rel="noopener noreferrer"`.

---

## 📝 Configuration & Customization

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
  icon: "calendar",   // Optional icon keyword
  tags: ["auxiliary", "pioneer", "s-205b", "application", "service"]
}
```

### Adding New Guidelines
Open `js/guidelines-data.js` and add an entry to the `guidelines` array:

```javascript
{
  id: "audio-video-guidelines",
  title: "Audio & Video System Setup",
  description: "Step-by-step procedures for the sound console, Zoom streaming, and visual displays.",
  category: "Audio / Video",
  url: "#",
  comingSoon: true,
  badge: "Coming Soon",
  icon: "broadcast"
}
```

---

## ⚙️ Admin Settings

Access the Admin Settings at `#admin` (or click the gear icon in the header or footer):
- **Congregation Accounts Type**: Choose between **Bank Account** and **Cashbox**.
- **Announcement Banner**: Broadcast announcements across the top of every page.
- Settings persist in the browser's `localStorage` (`smc-admin-settings`).

---

## 💻 Local Testing & Preview

To preview the website on your local machine:
- **Option 1 (Direct)**: Simply double-click `index.html` to open it in your default web browser.
- **Option 2 (Local Server)**: Run a simple local Python or Node server:
  ```bash
  python -m http.server 8000
  ```
  Then navigate to `http://localhost:8000`.
