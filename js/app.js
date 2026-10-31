/**
 * ====================================================================
 * SMC HUB - APPLICATION CONTROLLER & ROUTER
 * ====================================================================
 * Features:
 *  - 4-Option Grid Homepage (Announcements, Guidelines, Forms, Reports)
 *  - Forms Directory with Search & Category Filters (Retained layout)
 *  - Guidelines Directory (First option: Accounting)
 *  - Accounting Guidelines with Role Selection & Video Guides List
 *  - Admin Settings for Congregation Account Type (Bank vs Cashbox)
 *  - Welcome Passcode Gateway ('sanmig3673') & Admin Passkey ('hub_admin_3673')
 *  - Hash-Based Router with Navigation & Breadcrumbs
 *  - Dark / Light Theme & Responsive Mobile Controls
 * ====================================================================
 */

(function () {
  "use strict";

  // --- SVG Icons Map ---
  const ICONS = {
    cart: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.7 2.1-7.5H5.106m2.394 7.5L5.106 5.272M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg>`,
    map: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934a1.12 1.12 0 0 1-1.006 0L9.503 3.314a1.12 1.12 0 0 0-1.006 0L3.622 5.75a1.125 1.125 0 0 0-.622 1.006v11.428c0 .836.88 1.38 1.628 1.006l3.869-1.934a1.12 1.12 0 0 1 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" /></svg>`,
    calendar: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" /></svg>`,
    mic: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" /></svg>`,
    clipboard: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" /></svg>`,
    file: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>`,
    user: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>`,
    users: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" /></svg>`,
    message: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" /></svg>`,
    form: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>`,
    truck: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.25V3.75A1.125 1.125 0 0 0 13.125 2.625h-9.75A1.125 1.125 0 0 0 2.25 3.75v10.5c0 .621.504 1.125 1.125 1.125h1.5" /></svg>`,
    bank: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.5m-15 10.5V10.5M3 21h18M3 10.5h18" /></svg>`,
    box: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" /></svg>`,
    clock: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`,
    externalLink: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>`,
    hardhat: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5M4 15v-3a6 6 0 0 1 6-6M14 6a6 6 0 0 1 6 6v3" /></svg>`,
    world: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><circle cx="12" cy="12" r="9.25" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 2.75a14.5 14.5 0 0 0 0 18.5 14.5 14.5 0 0 0 0-18.5ZM2.75 12h18.5M3.9 7.5h16.2M3.9 16.5h16.2" /></svg>`,
    briefcase: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><rect width="18" height="13" x="3" y="7.5" rx="2" /><path stroke-linecap="round" stroke-linejoin="round" d="M9 7.5V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2.5M3 13h18M10.5 12v2.5h3V12" /></svg>`,
    university: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 9.5 12 3.5l9 6H3Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M3 9.5h18M6 10.5v6.5M10 10.5v6.5M14 10.5v6.5M18 10.5v6.5" /><path stroke-linecap="round" stroke-linejoin="round" d="M3.5 17h17M2 20.5h20" /></svg>`,
    megaphone: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.111-1.528-.459a22.253 22.253 0 0 1-1.335-3.666m2.998-.549a48.36 48.36 0 0 0 9.13-1.636 1.125 1.125 0 0 0 .762-1.07V8.67a1.125 1.125 0 0 0-.762-1.07 48.36 48.36 0 0 0-9.13-1.636m0 9.87V5.959" /></svg>`,
    book: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>`,
    chart: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /></svg>`,
    video: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9A2.25 2.25 0 0 0 13.5 5.25h-9A2.25 2.25 0 0 0 2.25 7.5v9A2.25 2.25 0 0 0 4.5 18.75Z" /></svg>`,
    arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>`,
    broadcast: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.348 14.652a3.75 3.75 0 0 1 0-5.304m5.304 0a3.75 3.75 0 0 1 0 5.304m-7.425 2.121a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /></svg>`
  };

  // --- Portal Home Modules Definition ---
  const PORTAL_MODULES = [
    {
      id: "announcements",
      title: "Announcements",
      description: "Congregation notices, special reminders, weekly schedules, and branch correspondence.",
      comingSoon: true,
      icon: "megaphone",
      url: "#announcements",
      cardClass: "portal-card-announcements",
      actionText: "View Announcements"
    },
    {
      id: "guidelines",
      title: "Guidelines",
      description: "Standard congregation procedures, role instructions, and step-by-step video tutorials.",
      comingSoon: false,
      icon: "book",
      url: "#guidelines",
      cardClass: "portal-card-guidelines",
      actionText: "Explore Guidelines"
    },
    {
      id: "forms",
      title: "Forms",
      description: "Official submission forms, meeting attendance logs, territory cards, and service applications.",
      comingSoon: false,
      icon: "form",
      url: "#forms",
      cardClass: "portal-card-forms",
      actionText: "Browse All Forms"
    },
    {
      id: "reports",
      title: "Reports",
      description: "Congregation statistics, service summaries, attendance graphs, and monthly accounts overviews.",
      comingSoon: true,
      icon: "chart",
      url: "#reports",
      cardClass: "portal-card-reports",
      actionText: "View Reports"
    }
  ];

  // --- Configuration References ---
  const formsConfig = window.FORMS_CONFIG || { siteTitle: "SMC Hub", forms: [], categories: [] };
  const accountingConfig = window.ACCOUNTING_CONFIG || { accountTypes: [], roles: [], videos: [], role2video: [] };
  const guidelinesConfig = window.GUIDELINES_CONFIG || { title: "Guidelines", categories: [], guidelines: [] };

  // --- Application State ---
  let activeCategory = "All";
  let searchQuery = "";
  let videoSearchQuery = "";
  let activeRole = null;
  let currentRoute = "home";

  // --- Passkey Security State ---
  const SITE_PASSCODE = "sanmig3673";
  const ADMIN_PASSKEY = "hub_admin_3673";
  const AUTH_DURATION_MS = 30 * 24 * 60 * 60 * 1000; // 30 Days Persistent Session

  // --- Welcome Gateway Elements ---
  const welcomeView = document.getElementById("welcomeView");
  const welcomeLogoBox = document.getElementById("welcomeLogoBox");
  const welcomePasscodeInput = document.getElementById("welcomePasscodeInput");
  const welcomePasscodeForm = document.getElementById("welcomePasscodeForm");
  const welcomePasscodeError = document.getElementById("welcomePasscodeError");
  const adminLockSiteBtn = document.getElementById("adminLockSiteBtn");

  // --- DOM Elements ---
  const siteHeader = document.getElementById("siteHeader");
  const siteTitleEl = document.getElementById("siteTitle");
  const brandLink = document.getElementById("brandLink");
  const announcementBanner = document.getElementById("announcementBanner");
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const mobileSearchToggleBtn = document.getElementById("mobileSearchToggleBtn");
  const filterToggleBtn = document.getElementById("filterToggleBtn");
  const filterActiveDot = document.getElementById("filterActiveDot");
  const filterDrawer = document.getElementById("filterDrawer");
  const desktopSearchContainer = document.getElementById("desktopSearchContainer");
  const mobileSearchDrawer = document.getElementById("mobileSearchDrawer");
  const searchBoxWrapper = document.getElementById("searchBoxWrapper");
  const searchInput = document.getElementById("searchInput");
  const searchClearBtn = document.getElementById("searchClearBtn");
  const categoriesFilterBar = document.getElementById("categoriesFilterBar");
  const formsGrid = document.getElementById("formsGrid");
  const emptyState = document.getElementById("emptyState");
  const resetFiltersBtn = document.getElementById("resetFiltersBtn");
  const statusCountEl = document.getElementById("statusCount");
  const activeCategoryLabel = document.getElementById("activeCategoryLabel");
  const floatingBackToTopBtn = document.getElementById("floatingBackToTopBtn");
  const currentYearEl = document.getElementById("currentYear");
  const toastNotification = document.getElementById("toastNotification");

  // Portal Navigation & Views
  const portalNavContainer = document.getElementById("portalNavContainer");
  const portalBackBtn = document.getElementById("portalBackBtn");
  const portalBackText = document.getElementById("portalBackText");
  const portalBreadcrumbs = document.getElementById("portalBreadcrumbs");

  const portalHomeView = document.getElementById("portalHomeView");
  const formsView = document.getElementById("formsView");
  const guidelinesView = document.getElementById("guidelinesView");
  const accountingRolesView = document.getElementById("accountingRolesView");
  const roleVideosView = document.getElementById("roleVideosView");
  const announcementsView = document.getElementById("announcementsView");
  const reportsView = document.getElementById("reportsView");
  const adminView = document.getElementById("adminView");

  const portalGrid = document.getElementById("portalGrid");
  const guidelinesGrid = document.getElementById("guidelinesGrid");
  const accountingRolesGrid = document.getElementById("accountingRolesGrid");
  const accountingMainGuideList = document.getElementById("accountingMainGuideList");
  const accountingAdditionalGuidesList = document.getElementById("accountingAdditionalGuidesList");
  const roleVideosGrid = document.getElementById("roleVideosGrid");
  const roleVideosEmptyState = document.getElementById("roleVideosEmptyState");
  const videoSearchInput = document.getElementById("videoSearchInput");
  const videoSearchClearBtn = document.getElementById("videoSearchClearBtn");
  const resetVideoSearchBtn = document.getElementById("resetVideoSearchBtn");
  const videoCountBadge = document.getElementById("videoCountBadge");

  // Admin Elements, Views & Passkey Modal
  const maintenanceView = document.getElementById("maintenanceView");
  const maintenanceAdminBtn = document.getElementById("maintenanceAdminBtn");
  const adminToggleBank = document.getElementById("adminToggleBank");
  const adminToggleCashbox = document.getElementById("adminToggleCashbox");
  const adminSiteTitle = document.getElementById("adminSiteTitle");
  const adminShowTitleToggle = document.getElementById("adminShowTitleToggle");
  const adminSiteTagline = document.getElementById("adminSiteTagline");
  const adminSiteLogoUrl = document.getElementById("adminSiteLogoUrl");
  const adminSiteLogoDarkUrl = document.getElementById("adminSiteLogoDarkUrl");
  const adminFaviconUrl = document.getElementById("adminFaviconUrl");
  const adminLogoPreviewBox = document.getElementById("adminLogoPreviewBox");
  const adminLogoDarkPreviewBox = document.getElementById("adminLogoDarkPreviewBox");
  const adminFaviconPreviewBox = document.getElementById("adminFaviconPreviewBox");
  const adminMaintenanceToggle = document.getElementById("adminMaintenanceToggle");
  const adminBannerToggle = document.getElementById("adminBannerToggle");
  const adminBannerMessage = document.getElementById("adminBannerMessage");
  const adminBannerType = document.getElementById("adminBannerType");
  const adminBannerInputsGroup = document.getElementById("adminBannerInputsGroup");
  const adminSaveBtn = document.getElementById("adminSaveBtn");
  const adminResetBtn = document.getElementById("adminResetBtn");
  const adminHeaderBtn = document.getElementById("adminHeaderBtn");
  const maintenanceBanner = document.getElementById("maintenanceBanner");
  const brandIconBox = document.getElementById("brandIconBox");
  const accountingChangeModeBtn = document.getElementById("accountingChangeModeBtn");

  const passkeyModal = document.getElementById("passkeyModal");
  const passkeyInput = document.getElementById("passkeyInput");
  const passkeyForm = document.getElementById("passkeyForm");
  const passkeyError = document.getElementById("passkeyError");
  const passkeyModalCloseBtn = document.getElementById("passkeyModalCloseBtn");

  // Default Hub SVG Icon
  const LOGO_ICONS = {
    hub: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke-width="2.2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1 13.5 18v-2.25Z" /></svg>`,
    hubLarge: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25V15.75Z" /></svg>`
  };

  // Preload cache for smooth zero-flicker logo switching
  const logoPreloadCache = { light: null, dark: null };

  // Direct image URL normalizer (Converts Google Drive view/open links to direct high-res content URLs)
  function normalizeImageUrl(url) {
    if (!url) return "";
    let clean = url.trim();
    const driveMatch = clean.match(/drive\.google\.com\/(?:file\/d\/|open\?id=)([a-zA-Z0-9_-]+)/);
    if (driveMatch && driveMatch[1]) {
      return `https://lh3.googleusercontent.com/d/${driveMatch[1]}`;
    }
    return clean;
  }

  // Site Logo dynamic processor (Handles light & dark mode image links)
  function applySiteLogo(logoLightUrl, logoDarkUrl) {
    const settings = getAdminSettings();
    const rawLight = (logoLightUrl !== undefined ? logoLightUrl : settings.siteLogoUrl || "").trim();
    const rawDark = (logoDarkUrl !== undefined ? logoDarkUrl : settings.siteLogoDarkUrl || "").trim();

    const light = normalizeImageUrl(rawLight) || "./images/logo-light.png";
    const dark = normalizeImageUrl(rawDark) || "./images/logo-dark.png";

    // Preload both images so switching theme has zero delay or flicker
    if (light && (!logoPreloadCache.light || logoPreloadCache.light.src !== light)) {
      logoPreloadCache.light = new Image();
      logoPreloadCache.light.src = light;
    }
    if (dark && (!logoPreloadCache.dark || logoPreloadCache.dark.src !== dark)) {
      logoPreloadCache.dark = new Image();
      logoPreloadCache.dark.src = dark;
    }

    const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
    const activeUrl = (currentTheme === "dark" && dark) ? dark : (light || dark);

    // 1. Update Header Brand Icon
    if (brandIconBox) {
      if (!light && !dark) {
        brandIconBox.classList.remove("has-custom-img");
        brandIconBox.innerHTML = LOGO_ICONS.hub;
      } else {
        brandIconBox.classList.add("has-custom-img");
        let img = brandIconBox.querySelector(".brand-logo-img");
        if (!img) {
          brandIconBox.innerHTML = `
            <img
              id="brandLogoImg"
              src="${escapeHtml(activeUrl)}"
              alt="Site Logo"
              class="brand-logo-img"
              onerror="handleLogoError(this)"
            />
          `;
        } else {
          if (img.getAttribute("src") !== activeUrl) {
            img.src = activeUrl;
          }
        }
      }
    }

    // 2. Update Welcome Page Logo
    const welcomeLogoBox = document.getElementById("welcomeLogoBox");
    if (welcomeLogoBox) {
      if (!light && !dark) {
        welcomeLogoBox.classList.remove("has-custom-img");
        welcomeLogoBox.innerHTML = LOGO_ICONS.hubLarge;
      } else {
        welcomeLogoBox.classList.add("has-custom-img");
        let welcomeImg = welcomeLogoBox.querySelector(".welcome-logo-img");
        if (!welcomeImg) {
          welcomeLogoBox.innerHTML = `
            <img
              id="welcomeLogoImg"
              src="${escapeHtml(activeUrl)}"
              alt="Site Logo"
              class="welcome-logo-img"
              onerror="handleLogoError(this)"
            />
          `;
        } else {
          if (welcomeImg.getAttribute("src") !== activeUrl) {
            welcomeImg.src = activeUrl;
          }
        }
      }
    }
  }

  function handleLogoError(imgEl) {
    if (!imgEl) return;
    const settings = getAdminSettings();
    const light = normalizeImageUrl(settings.siteLogoUrl || "") || "./images/logo-light.png";
    const dark = normalizeImageUrl(settings.siteLogoDarkUrl || "") || "./images/logo-dark.png";
    const currentSrc = imgEl.getAttribute("src");

    // If dark logo failed to load, fallback to light logo
    if (currentSrc === dark && light && light !== dark) {
      imgEl.src = light;
      return;
    }

    // If both failed or single failed, fallback to default hub icon
    if (imgEl.classList.contains("welcome-logo-img")) {
      const welcomeBox = document.getElementById("welcomeLogoBox");
      if (welcomeBox) {
        welcomeBox.classList.remove("has-custom-img");
        welcomeBox.innerHTML = LOGO_ICONS.hubLarge;
      }
    } else if (brandIconBox) {
      brandIconBox.classList.remove("has-custom-img");
      brandIconBox.innerHTML = LOGO_ICONS.hub;
    }
  }

  // Favicon dynamic processor (Handles user-provided image link)
  function applyFavicon(faviconUrl) {
    let link = document.getElementById("siteFavicon");
    if (!link) {
      link = document.createElement("link");
      link.id = "siteFavicon";
      link.rel = "icon";
      document.head.appendChild(link);
    }
    const settings = getAdminSettings();
    const rawUrl = (faviconUrl !== undefined ? faviconUrl : settings.faviconUrl || "").trim();
    const url = normalizeImageUrl(rawUrl) || "./images/favicon.png";
    link.href = url;
  }

  // Live Image Previews in Admin Settings Form
  function updateAdminImagePreviews() {
    // 1. Light Mode Logo Preview
    if (adminLogoPreviewBox && adminSiteLogoUrl) {
      const rawUrl = adminSiteLogoUrl.value.trim();
      const logoUrl = normalizeImageUrl(rawUrl) || "./images/logo-light.png";
      if (logoUrl) {
        adminLogoPreviewBox.innerHTML = `
          <img
            src="${escapeHtml(logoUrl)}"
            alt="Light Logo Preview"
            onerror="this.onerror=null; this.parentElement.innerHTML='<span style=\\'font-size:0.6rem;color:#dc2626;font-weight:600;\\'>Invalid</span>';"
          />
        `;
      } else {
        adminLogoPreviewBox.innerHTML = LOGO_ICONS.hub;
      }
    }

    // 2. Dark Mode Logo Preview
    if (adminLogoDarkPreviewBox && adminSiteLogoDarkUrl) {
      const rawDarkUrl = adminSiteLogoDarkUrl.value.trim();
      const darkLogoUrl = normalizeImageUrl(rawDarkUrl) || "./images/logo-dark.png";
      if (darkLogoUrl) {
        adminLogoDarkPreviewBox.innerHTML = `
          <img
            src="${escapeHtml(darkLogoUrl)}"
            alt="Dark Logo Preview"
            onerror="this.onerror=null; this.parentElement.innerHTML='<span style=\\'font-size:0.6rem;color:#ef4444;font-weight:600;\\'>Invalid</span>';"
          />
        `;
      } else {
        const rawLightUrl = adminSiteLogoUrl ? adminSiteLogoUrl.value.trim() : "";
        const lightLogoUrl = normalizeImageUrl(rawLightUrl) || "./images/logo-light.png";
        if (lightLogoUrl) {
          adminLogoDarkPreviewBox.innerHTML = `
            <img
              src="${escapeHtml(lightLogoUrl)}"
              alt="Inherited Light Logo"
              style="opacity: 0.55;"
              title="Inherits light mode logo"
              onerror="this.onerror=null; this.parentElement.innerHTML=LOGO_ICONS.hub;"
            />
          `;
        } else {
          adminLogoDarkPreviewBox.innerHTML = LOGO_ICONS.hub;
        }
      }
    }

    // 3. Favicon Preview
    if (adminFaviconPreviewBox && adminFaviconUrl) {
      const rawFavUrl = adminFaviconUrl.value.trim();
      const favUrl = normalizeImageUrl(rawFavUrl) || "./images/favicon.png";
      if (favUrl) {
        adminFaviconPreviewBox.innerHTML = `
          <img
            src="${escapeHtml(favUrl)}"
            alt="Favicon Preview"
            onerror="this.onerror=null; this.parentElement.innerHTML='<span style=\\'font-size:0.6rem;color:#dc2626;font-weight:600;\\'>Invalid</span>';"
          />
        `;
      } else {
        adminFaviconPreviewBox.innerHTML = LOGO_ICONS.hub;
      }
    }
  }

  // --- 1. Admin Settings Manager (localStorage) ---
  const DEFAULT_ADMIN_SETTINGS = {
    siteTitle: "SMC Hub",
    siteTagline: "Congregation Forms & Guidelines Hub",
    showSiteTitle: false, // Default false: logo already contains congregation name
    siteLogoUrl: "./images/logo-light.png", // Built-in direct logo (light mode)
    siteLogoDarkUrl: "./images/logo-dark.png", // Built-in direct logo (dark mode)
    faviconUrl: "./images/favicon.png", // Built-in direct favicon
    maintenanceMode: false,
    accountType: "bank", // "bank" or "cashbox"
    announcement: {
      enabled: false,
      message: "Welcome to SMC Hub! Access congregation forms, guidelines, and announcements.",
      type: "info"
    }
  };

  function getAdminSettings() {
    try {
      const saved = localStorage.getItem("smc-admin-settings");
      if (saved) {
        const parsed = JSON.parse(saved);
        // Normalize any old Google Drive links or missing paths
        if (!parsed.siteLogoUrl || parsed.siteLogoUrl.includes("drive.google.com/file")) {
          parsed.siteLogoUrl = DEFAULT_ADMIN_SETTINGS.siteLogoUrl;
        }
        if (!parsed.siteLogoDarkUrl || parsed.siteLogoDarkUrl.includes("drive.google.com/file")) {
          parsed.siteLogoDarkUrl = DEFAULT_ADMIN_SETTINGS.siteLogoDarkUrl;
        }
        if (!parsed.faviconUrl || parsed.faviconUrl.includes("drive.google.com/file")) {
          parsed.faviconUrl = DEFAULT_ADMIN_SETTINGS.faviconUrl;
        }
        if (parsed.showSiteTitle === undefined) {
          parsed.showSiteTitle = false;
        }
        return { ...DEFAULT_ADMIN_SETTINGS, ...parsed };
      }
    } catch (e) {
      console.warn("Could not parse saved admin settings:", e);
    }
    return { ...DEFAULT_ADMIN_SETTINGS };
  }

  function applySiteSettings(settings) {
    if (!settings) settings = getAdminSettings();

    // 1. Site Title & Document Title (with option to hide text in header)
    const siteTitle = settings.siteTitle || (formsConfig && formsConfig.siteTitle) || "SMC Hub";
    const shouldShowTitle = settings.showSiteTitle !== false;
    if (siteTitleEl) {
      siteTitleEl.textContent = siteTitle;
      siteTitleEl.style.display = shouldShowTitle ? "" : "none";
    }
    document.title = siteTitle;

    if (brandLink) {
      brandLink.setAttribute("aria-label", `${siteTitle} Homepage`);
    }

    // 2. Tagline / Meta Description
    if (settings.siteTagline) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", `${siteTitle} - ${settings.siteTagline}`);
      }
    }

    // 3. Site Logo Image Links (Light & Dark Mode)
    applySiteLogo(settings.siteLogoUrl, settings.siteLogoDarkUrl);

    // 4. Favicon Image Link
    applyFavicon(settings.faviconUrl);

    // 5. Maintenance Mode Banner & Text
    if (maintenanceBanner) {
      if (settings.maintenanceMode) {
        maintenanceBanner.style.display = "block";
        const isAdmin = isPasskeyAuthenticated();
        const bannerTextEl = maintenanceBanner.querySelector(".maintenance-banner-text");
        if (bannerTextEl) {
          if (isAdmin) {
            bannerTextEl.innerHTML = `<strong>Maintenance Mode Active:</strong> The website is currently in maintenance mode (Admin Preview). Visitors see the maintenance notice. <a href="#admin" class="maintenance-admin-link">Admin Settings</a>`;
          } else {
            bannerTextEl.innerHTML = `<strong>Site Under Maintenance:</strong> The website is currently undergoing maintenance. Please check back shortly.`;
          }
        }
      } else {
        maintenanceBanner.style.display = "none";
      }
    }

    // 6. Site Announcement Banner
    updateAnnouncementBanner();
  }

  function saveAdminSettings(newSettings, showFeedback = true) {
    try {
      localStorage.setItem("smc-admin-settings", JSON.stringify(newSettings));
      applySiteSettings(newSettings);
      if (showFeedback) {
        showToast("Settings saved and applied immediately!");
      }
      // Re-render views that depend on settings
      if (currentRoute === "guidelines/accounting") {
        renderAccountingRoles();
      } else if (currentRoute.startsWith("guidelines/accounting/")) {
        renderRoleVideos();
      }
      // Re-evaluate routes immediately (e.g. if maintenance mode state changed)
      handleRouteChange();
      renderAdminView();
    } catch (e) {
      console.error("Failed to save admin settings:", e);
    }
  }

  function showToast(message) {
    if (!toastNotification) return;
    toastNotification.textContent = message;
    toastNotification.classList.add("show");
    setTimeout(() => {
      toastNotification.classList.remove("show");
    }, 3200);
  }

  // --- 2. Passkey Authentication Management (30-Day Persistence) ---
  function isPasskeyAuthenticated() {
    try {
      const expiry = localStorage.getItem("smc-admin-auth-expiry");
      if (expiry) {
        const expTime = parseInt(expiry, 10);
        if (expTime && Date.now() < expTime) {
          return true;
        } else {
          localStorage.removeItem("smc-admin-auth");
          localStorage.removeItem("smc-admin-auth-expiry");
        }
      }
      return sessionStorage.getItem("smc-admin-auth") === "true";
    } catch (e) {
      return false;
    }
  }

  function isSiteAuthenticated() {
    try {
      // If admin session is active, user is also site-authenticated
      if (isPasskeyAuthenticated()) return true;

      const expiry = localStorage.getItem("smc-site-auth-expiry");
      if (expiry) {
        const expTime = parseInt(expiry, 10);
        if (expTime && Date.now() < expTime) {
          return true;
        } else {
          localStorage.removeItem("smc-site-auth");
          localStorage.removeItem("smc-site-auth-expiry");
        }
      }
      return sessionStorage.getItem("smc-site-auth") === "true" || sessionStorage.getItem("smc-admin-auth") === "true";
    } catch (e) {
      return false;
    }
  }

  function showWelcomeScreen() {
    document.documentElement.classList.remove("is-authenticated");
    if (document.body) document.body.classList.remove("is-authenticated");
    if (welcomeView) {
      welcomeView.style.display = "flex";
    }
    if (siteHeader) siteHeader.style.display = "none";
    if (mainContent) mainContent.style.display = "none";
    const footer = document.querySelector(".site-footer");
    if (footer) footer.style.display = "none";
    if (floatingBackToTopBtn) floatingBackToTopBtn.style.display = "none";
    if (pwaInstallBanner) pwaInstallBanner.style.display = "none";

    applySiteLogo();

    if (welcomePasscodeInput) {
      welcomePasscodeInput.value = "";
      welcomePasscodeInput.classList.remove("input-error");
      setTimeout(() => {
        try { welcomePasscodeInput.focus(); } catch (e) {}
      }, 100);
    }
    if (welcomePasscodeError) {
      welcomePasscodeError.style.display = "none";
    }
  }

  function unlockSite() {
    document.documentElement.classList.add("is-authenticated");
    if (document.body) document.body.classList.add("is-authenticated");
    if (welcomeView) {
      welcomeView.style.display = "none";
    }
    if (siteHeader) siteHeader.style.display = "";
    if (mainContent) mainContent.style.display = "";
    const footer = document.querySelector(".site-footer");
    if (footer) footer.style.display = "";

    if (welcomePasscodeInput) {
      welcomePasscodeInput.value = "";
      welcomePasscodeInput.classList.remove("input-error");
    }
    if (welcomePasscodeError) {
      welcomePasscodeError.style.display = "none";
    }

    window.location.hash = "#home";
    handleRouteChange();
  }

  function lockSite() {
    try {
      sessionStorage.removeItem("smc-site-auth");
      sessionStorage.removeItem("smc-admin-auth");
      localStorage.removeItem("smc-site-auth");
      localStorage.removeItem("smc-site-auth-expiry");
      localStorage.removeItem("smc-admin-auth");
      localStorage.removeItem("smc-admin-auth-expiry");
    } catch (e) {}
    document.documentElement.classList.remove("is-authenticated");
    if (document.body) document.body.classList.remove("is-authenticated");
    window.location.hash = "#home";
    showWelcomeScreen();
    showToast("Signed out. Passcode required to enter.");
  }

  function verifyWelcomePasscode() {
    if (!welcomePasscodeInput) return;
    const val = welcomePasscodeInput.value.trim();
    const expiryTimestamp = (Date.now() + AUTH_DURATION_MS).toString();

    if (val === SITE_PASSCODE) {
      try {
        sessionStorage.setItem("smc-site-auth", "true");
        localStorage.setItem("smc-site-auth", "true");
        localStorage.setItem("smc-site-auth-expiry", expiryTimestamp);
      } catch (e) {}
      unlockSite();
    } else if (val === ADMIN_PASSKEY) {
      try {
        sessionStorage.setItem("smc-site-auth", "true");
        sessionStorage.setItem("smc-admin-auth", "true");
        localStorage.setItem("smc-site-auth", "true");
        localStorage.setItem("smc-site-auth-expiry", expiryTimestamp);
        localStorage.setItem("smc-admin-auth", "true");
        localStorage.setItem("smc-admin-auth-expiry", expiryTimestamp);
      } catch (e) {}
      unlockSite();
      showToast("Admin access granted (30-day session active).");
    } else {
      if (welcomePasscodeError) {
        welcomePasscodeError.textContent = "Incorrect passcode. Please try again.";
        welcomePasscodeError.style.display = "block";
      }
      welcomePasscodeInput.classList.add("input-error");
      setTimeout(() => {
        if (welcomePasscodeInput) welcomePasscodeInput.classList.remove("input-error");
      }, 500);
      if (welcomePasscodeInput.focus) welcomePasscodeInput.focus();
      if (welcomePasscodeInput.select) welcomePasscodeInput.select();
    }
  }

  function initWelcomeGateway() {
    if (welcomePasscodeInput) {
      welcomePasscodeInput.addEventListener("input", (e) => {
        if (welcomePasscodeError) welcomePasscodeError.style.display = "none";
        const val = e.target.value.trim();
        if (val === SITE_PASSCODE || val === ADMIN_PASSKEY) {
          verifyWelcomePasscode();
        }
      });
    }

    if (welcomePasscodeForm) {
      welcomePasscodeForm.addEventListener("submit", (e) => {
        e.preventDefault();
        verifyWelcomePasscode();
      });
    }

    if (adminLockSiteBtn) {
      adminLockSiteBtn.addEventListener("click", () => {
        lockSite();
      });
    }
  }

  function openPasskeyModal(targetHash = "#admin") {
    if (isPasskeyAuthenticated()) {
      window.location.hash = targetHash;
      return;
    }
    if (!passkeyModal || !passkeyInput) return;
    passkeyModal.setAttribute("data-target-hash", targetHash);
    passkeyInput.value = "";
    if (passkeyError) passkeyError.style.display = "none";
    passkeyModal.style.display = "flex";
    setTimeout(() => {
      passkeyInput.focus();
    }, 60);
  }

  function closePasskeyModal() {
    if (!passkeyModal) return;
    passkeyModal.style.display = "none";
    if (passkeyInput) {
      passkeyInput.value = "";
      passkeyInput.classList.remove("input-error");
    }
    if (passkeyError) passkeyError.style.display = "none";

    // If currently on #admin without authentication, revert to home
    if (parseHashRoute() === "admin" && !isPasskeyAuthenticated()) {
      window.location.hash = "#home";
    }
  }

  function verifyPasskey() {
    if (!passkeyInput) return;
    const val = passkeyInput.value.trim();
    if (val === ADMIN_PASSKEY) {
      const expiryTimestamp = (Date.now() + AUTH_DURATION_MS).toString();
      try {
        sessionStorage.setItem("smc-admin-auth", "true");
        sessionStorage.setItem("smc-site-auth", "true");
        localStorage.setItem("smc-admin-auth", "true");
        localStorage.setItem("smc-admin-auth-expiry", expiryTimestamp);
        localStorage.setItem("smc-site-auth", "true");
        localStorage.setItem("smc-site-auth-expiry", expiryTimestamp);
        document.documentElement.classList.add("is-authenticated");
        if (document.body) document.body.classList.add("is-authenticated");
      } catch (e) {}
      const target = (passkeyModal && passkeyModal.getAttribute("data-target-hash")) || "#admin";
      closePasskeyModal();
      window.location.hash = target;
      showToast("Admin access granted (30-day session active).");
    } else {
      if (passkeyError) {
        passkeyError.textContent = "Incorrect passkey. Please try again.";
        passkeyError.style.display = "block";
      }
      passkeyInput.classList.add("input-error");
      setTimeout(() => {
        if (passkeyInput) passkeyInput.classList.remove("input-error");
      }, 500);
      if (passkeyInput.focus) passkeyInput.focus();
      if (passkeyInput.select) passkeyInput.select();
    }
  }

  function initPasskeyModal() {
    if (adminHeaderBtn) {
      adminHeaderBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (isPasskeyAuthenticated()) {
          window.location.hash = "#admin";
        } else {
          openPasskeyModal("#admin");
        }
      });
    }

    if (maintenanceAdminBtn) {
      maintenanceAdminBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (isPasskeyAuthenticated()) {
          window.location.hash = "#admin";
        } else {
          openPasskeyModal("#admin");
        }
      });
    }

    if (accountingChangeModeBtn) {
      accountingChangeModeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (isPasskeyAuthenticated()) {
          window.location.hash = "#admin";
        } else {
          openPasskeyModal("#admin");
        }
      });
    }

    if (passkeyInput) {
      passkeyInput.addEventListener("input", (e) => {
        if (passkeyError) passkeyError.style.display = "none";
        if (e.target.value === ADMIN_PASSKEY) {
          verifyPasskey();
        }
      });
    }

    if (passkeyForm) {
      passkeyForm.addEventListener("submit", (e) => {
        e.preventDefault();
        verifyPasskey();
      });
    }

    if (passkeyModalCloseBtn) {
      passkeyModalCloseBtn.addEventListener("click", (e) => {
        e.preventDefault();
        closePasskeyModal();
      });
    }

    if (passkeyModal) {
      passkeyModal.addEventListener("click", (e) => {
        if (e.target === passkeyModal) {
          closePasskeyModal();
        }
      });
    }

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && passkeyModal && passkeyModal.style.display === "flex") {
        closePasskeyModal();
      }
    });
  }

  // --- 3. Theme Management ---
  function initTheme() {
    const savedTheme = localStorage.getItem("smc-theme");
    const systemPrefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme) {
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else if (systemPrefersDark) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener("click", toggleTheme);
    }

    if (window.matchMedia) {
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
        if (!localStorage.getItem("smc-theme")) {
          document.documentElement.setAttribute("data-theme", e.matches ? "dark" : "light");
          applySiteLogo();
        }
      });
    }
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("smc-theme", newTheme);
    applySiteLogo();
  }

  // --- 4. Announcement Banner ---
  function updateAnnouncementBanner() {
    const settings = getAdminSettings();
    if (!announcementBanner) return;

    if (settings.announcement && settings.announcement.enabled && settings.announcement.message) {
      announcementBanner.textContent = settings.announcement.message;
      announcementBanner.className = `announcement-banner visible ${settings.announcement.type || "info"}`;
    } else {
      announcementBanner.className = "announcement-banner";
      announcementBanner.textContent = "";
    }
  }

  // --- 5. Responsive Header Controls & Search Drawer Placement ---
  function updateSearchPlacement() {
    const isMobile = window.innerWidth <= 640;
    if (!searchBoxWrapper || !desktopSearchContainer || !mobileSearchDrawer) return;

    if (isMobile) {
      if (!mobileSearchDrawer.contains(searchBoxWrapper)) {
        mobileSearchDrawer.appendChild(searchBoxWrapper);
      }
    } else {
      if (!desktopSearchContainer.contains(searchBoxWrapper)) {
        desktopSearchContainer.appendChild(searchBoxWrapper);
      }
      if (siteHeader) {
        siteHeader.classList.remove("is-search-open");
      }
      if (mobileSearchToggleBtn) {
        mobileSearchToggleBtn.classList.remove("active");
        mobileSearchToggleBtn.setAttribute("aria-expanded", "false");
      }
    }
  }

  function initHeaderControls() {
    updateSearchPlacement();
    window.addEventListener("resize", updateSearchPlacement);

    // Mobile search toggle button
    if (mobileSearchToggleBtn && siteHeader) {
      mobileSearchToggleBtn.addEventListener("click", () => {
        const willOpen = !siteHeader.classList.contains("is-search-open");
        siteHeader.classList.toggle("is-search-open", willOpen);
        mobileSearchToggleBtn.classList.toggle("active", willOpen);
        mobileSearchToggleBtn.setAttribute("aria-expanded", willOpen ? "true" : "false");

        if (willOpen && searchInput) {
          setTimeout(() => searchInput.focus(), 100);
        }
      });
    }

    // Filter drawer toggle button
    if (filterToggleBtn && siteHeader) {
      filterToggleBtn.addEventListener("click", () => {
        const willOpen = !siteHeader.classList.contains("is-filter-open");
        siteHeader.classList.toggle("is-filter-open", willOpen);
        filterToggleBtn.classList.toggle("active", willOpen);
        filterToggleBtn.setAttribute("aria-expanded", willOpen ? "true" : "false");
      });
    }
  }

  // --- 6. Hash Router & Navigation Flow ---
  function parseHashRoute() {
    let hash = window.location.hash || "#home";
    if (hash.startsWith("#")) hash = hash.slice(1);
    hash = hash.trim();
    if (!hash || hash === "/") hash = "home";
    return hash;
  }

  function handleRouteChange() {
    if (!isSiteAuthenticated()) {
      showWelcomeScreen();
      return;
    }

    // Ensure elements are unhidden when authenticated
    if (welcomeView && welcomeView.style.display !== "none") {
      welcomeView.style.display = "none";
    }
    if (siteHeader && siteHeader.style.display === "none") {
      siteHeader.style.display = "";
    }
    if (mainContent && mainContent.style.display === "none") {
      mainContent.style.display = "";
    }
    const footer = document.querySelector(".site-footer");
    if (footer && footer.style.display === "none") {
      footer.style.display = "";
    }

    const route = parseHashRoute();
    currentRoute = route;

    // Scroll smoothly to top on route change
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Close any open mobile header drawers
    if (siteHeader) {
      siteHeader.classList.remove("is-search-open", "is-filter-open");
      if (mobileSearchToggleBtn) mobileSearchToggleBtn.classList.remove("active");
      if (filterToggleBtn) filterToggleBtn.classList.remove("active");
    }

    // Passkey Guard for Admin Route
    if (route === "admin" && !isPasskeyAuthenticated()) {
      openPasskeyModal("#admin");
      return;
    }

    const settings = getAdminSettings();
    const isMaintenance = Boolean(settings.maintenanceMode);
    const isAdmin = isPasskeyAuthenticated();
    const isMaintenanceBlocked = isMaintenance && !isAdmin && route !== "admin";

    // Update body class for conditional header search/filters
    const isForms = route === "forms" && !isMaintenanceBlocked;
    document.body.classList.toggle("is-forms-view", isForms);

    // Active state for admin header button
    if (adminHeaderBtn) {
      adminHeaderBtn.classList.toggle("active", route === "admin");
    }

    // Hide all view sections first
    const views = [
      portalHomeView,
      formsView,
      guidelinesView,
      accountingRolesView,
      roleVideosView,
      announcementsView,
      reportsView,
      adminView,
      maintenanceView
    ];
    views.forEach(v => { if (v) v.style.display = "none"; });

    // If site is in maintenance mode and visitor is not admin, show maintenance screen
    if (isMaintenanceBlocked) {
      if (portalNavContainer) portalNavContainer.style.display = "none";
      if (maintenanceView) maintenanceView.style.display = "block";
      return;
    }

    // Update Breadcrumbs & Navigation Bar
    updateBreadcrumbs(route);

    // Route Dispatcher
    if (route === "home") {
      if (portalHomeView) portalHomeView.style.display = "block";
      renderPortalHome();
    } else if (route === "forms") {
      if (formsView) formsView.style.display = "block";
      renderCategories();
      renderCards();
    } else if (route === "guidelines") {
      if (guidelinesView) guidelinesView.style.display = "block";
      renderGuidelines();
    } else if (route === "guidelines/accounting") {
      if (accountingRolesView) accountingRolesView.style.display = "block";
      renderAccountingRoles();
    } else if (route.startsWith("guidelines/accounting/")) {
      const roleId = route.replace("guidelines/accounting/", "");
      activeRole = roleId;
      if (roleVideosView) roleVideosView.style.display = "block";
      renderRoleVideos();
    } else if (route === "announcements") {
      if (announcementsView) announcementsView.style.display = "block";
    } else if (route === "reports") {
      if (reportsView) reportsView.style.display = "block";
    } else if (route === "admin") {
      if (adminView) adminView.style.display = "block";
      renderAdminView();
    } else {
      // Default fallback
      if (portalHomeView) portalHomeView.style.display = "block";
      renderPortalHome();
    }
  }

  function updateBreadcrumbs(route) {
    if (!portalNavContainer || !portalBackBtn || !portalBreadcrumbs) return;

    if (route === "home") {
      portalNavContainer.style.display = "none";
      return;
    }

    portalNavContainer.style.display = "flex";

    // Configure Back button destination & text
    if (route === "forms" || route === "guidelines" || route === "announcements" || route === "reports" || route === "admin") {
      portalBackBtn.href = "#home";
      portalBackText.textContent = "Back to Portal";
    } else if (route === "guidelines/accounting") {
      portalBackBtn.href = "#guidelines";
      portalBackText.textContent = "Back to Guidelines";
    } else if (route.startsWith("guidelines/accounting/")) {
      portalBackBtn.href = "#guidelines/accounting";
      portalBackText.textContent = "Back to Accounting Roles";
    }

    // Build breadcrumbs trail
    const crumbs = [{ label: "Home", url: "#home" }];

    if (route === "forms") {
      crumbs.push({ label: "Forms Directory", active: true });
    } else if (route === "guidelines") {
      crumbs.push({ label: "Guidelines", active: true });
    } else if (route === "guidelines/accounting") {
      crumbs.push({ label: "Guidelines", url: "#guidelines" });
      crumbs.push({ label: "Accounting", active: true });
    } else if (route.startsWith("guidelines/accounting/")) {
      const roleId = route.replace("guidelines/accounting/", "");
      const roleObj = (accountingConfig.roles || []).find(r => r.id === roleId);
      const roleName = roleObj ? roleObj.name : "Role Videos";
      crumbs.push({ label: "Guidelines", url: "#guidelines" });
      crumbs.push({ label: "Accounting", url: "#guidelines/accounting" });
      crumbs.push({ label: roleName, active: true });
    } else if (route === "announcements") {
      crumbs.push({ label: "Announcements", active: true });
    } else if (route === "reports") {
      crumbs.push({ label: "Reports", active: true });
    } else if (route === "admin") {
      crumbs.push({ label: "Admin Settings", active: true });
    }

    portalBreadcrumbs.innerHTML = crumbs.map((crumb, idx) => {
      const isLast = idx === crumbs.length - 1;
      const separatorHtml = !isLast ? `<span class="breadcrumb-separator" aria-hidden="true">/</span>` : "";
      if (crumb.active || isLast) {
        return `<span class="breadcrumb-item"><span class="breadcrumb-current">${escapeHtml(crumb.label)}</span></span>`;
      }
      return `
        <span class="breadcrumb-item">
          <a href="${crumb.url}" class="breadcrumb-link">${escapeHtml(crumb.label)}</a>
          ${separatorHtml}
        </span>
      `;
    }).join("");
  }

  // --- 7. VIEW 1: Render Portal Homepage ---
  function renderPortalHome() {
    if (!portalGrid) return;
    portalGrid.innerHTML = "";

    const fragment = document.createDocumentFragment();

    PORTAL_MODULES.forEach(module => {
      const isComingSoon = Boolean(module.comingSoon);
      const card = document.createElement(isComingSoon ? "div" : "a");
      card.className = `portal-card ${module.cardClass || ""} ${isComingSoon ? "is-coming-soon" : ""}`;

      if (!isComingSoon) {
        card.href = module.url;
        card.setAttribute("aria-label", `${module.title} - ${module.description}`);
      } else {
        card.setAttribute("aria-label", `${module.title} (Coming Soon)`);
        card.setAttribute("role", "article");
      }

      const iconSvg = ICONS[module.icon] || ICONS.book;

      const footerHtml = isComingSoon
        ? `
          <div class="portal-card-footer portal-card-footer-coming-soon">
            <span class="portal-card-action-text">Coming Soon</span>
            <span class="portal-card-clock" aria-hidden="true">${ICONS.clock}</span>
          </div>
        `
        : `
          <div class="portal-card-footer">
            <span class="portal-card-action-text">${escapeHtml(module.actionText || "Open Module")}</span>
            <span class="portal-card-arrow" aria-hidden="true">${ICONS.arrowRight}</span>
          </div>
        `;

      card.innerHTML = `
        <div class="portal-card-top">
          <div class="portal-card-icon" aria-hidden="true">
            ${iconSvg}
          </div>
        </div>

        <div class="portal-card-body">
          <h3 class="portal-card-title">${escapeHtml(module.title)}</h3>
          <p class="portal-card-desc">${escapeHtml(module.description)}</p>
        </div>

        ${footerHtml}
      `;

      fragment.appendChild(card);
    });

    portalGrid.appendChild(fragment);
  }

  // --- 8. VIEW 2: Render Forms Directory ---
  function renderCategories() {
    if (!categoriesFilterBar) return;
    categoriesFilterBar.innerHTML = "";

    const allForms = formsConfig.forms || [];
    const categorySet = new Set(formsConfig.categories || []);
    allForms.forEach(form => {
      if (form.category) categorySet.add(form.category);
    });

    const categoryList = ["All", ...Array.from(categorySet)];

    categoryList.forEach(catName => {
      const count = catName === "All"
        ? allForms.length
        : allForms.filter(f => f.category === catName).length;

      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = `category-chip ${catName === activeCategory ? "active" : ""}`;
      chip.setAttribute("data-category", catName);
      chip.setAttribute("aria-label", `Filter by ${catName} (${count} forms)`);

      chip.innerHTML = `
        <span class="chip-text">${escapeHtml(catName)}</span>
        <span class="count-badge">${count}</span>
      `;

      chip.addEventListener("click", () => {
        selectCategory(catName);
      });

      categoriesFilterBar.appendChild(chip);
    });
  }

  function selectCategory(categoryName) {
    activeCategory = categoryName;

    const chips = categoriesFilterBar.querySelectorAll(".category-chip");
    chips.forEach(chip => {
      if (chip.getAttribute("data-category") === categoryName) {
        chip.classList.add("active");
        chip.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      } else {
        chip.classList.remove("active");
      }
    });

    if (activeCategoryLabel) {
      activeCategoryLabel.textContent = categoryName === "All" ? "All Categories" : categoryName;
    }

    const isFiltered = categoryName !== "All";
    if (filterActiveDot) {
      filterActiveDot.classList.toggle("visible", isFiltered);
    }
    if (filterToggleBtn) {
      filterToggleBtn.classList.toggle("has-active-filter", isFiltered);
    }

    renderCards();
  }

  function renderCards() {
    if (!formsGrid) return;
    const allForms = formsConfig.forms || [];

    let filtered = allForms;
    if (activeCategory !== "All") {
      filtered = filtered.filter(f => f.category === activeCategory);
    }

    const query = searchQuery.trim().toLowerCase();
    if (query) {
      filtered = filtered.filter(form => {
        const titleMatch = (form.title || "").toLowerCase().includes(query);
        const descMatch = (form.description || "").toLowerCase().includes(query);
        const catMatch = (form.category || "").toLowerCase().includes(query);
        const tagMatch = Array.isArray(form.tags) && form.tags.some(tag => tag.toLowerCase().includes(query));
        return titleMatch || descMatch || catMatch || tagMatch;
      });
    }

    if (statusCountEl) {
      const totalCount = allForms.length;
      if (filtered.length === totalCount) {
        statusCountEl.textContent = `${totalCount} forms`;
      } else {
        statusCountEl.textContent = `${filtered.length} of ${totalCount} forms`;
      }
    }

    if (filtered.length === 0) {
      formsGrid.innerHTML = "";
      formsGrid.style.display = "none";
      if (emptyState) emptyState.classList.add("visible");
      return;
    }

    if (emptyState) emptyState.classList.remove("visible");
    formsGrid.style.display = "grid";
    formsGrid.innerHTML = "";

    const fragment = document.createDocumentFragment();

    filtered.forEach(form => {
      const isComingSoon = form.comingSoon || form.url === "(coming soon)" || !form.url || form.url === "#";
      const card = document.createElement(isComingSoon ? "div" : "a");
      card.className = `form-card ${isComingSoon ? "is-coming-soon" : ""}`;

      if (!isComingSoon) {
        card.href = form.url;
        card.target = "_blank";
        card.rel = "noopener noreferrer";
        card.setAttribute("aria-label", `${form.title} (Opens in new tab)`);
      } else {
        card.setAttribute("aria-label", `${form.title} (Coming soon)`);
        card.setAttribute("role", "article");
      }

      const iconSvg = ICONS[form.icon] || ICONS.form;

      let badgeText = form.badge || (isComingSoon ? "Coming Soon" : "");
      let badgeHtml = "";
      if (badgeText) {
        const badgeClass = badgeText.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        badgeHtml = `<span class="special-badge ${badgeClass}">${escapeHtml(badgeText)}</span>`;
      }

      card.innerHTML = `
        <div class="card-top-row">
          <div class="card-icon-box" aria-hidden="true">
            ${iconSvg}
          </div>
          <div class="card-badges">
            <span class="category-tag">${escapeHtml(form.category || "General")}</span>
            ${badgeHtml}
          </div>
        </div>

        <div class="card-body">
          <h3 class="card-title">${escapeHtml(form.title)}</h3>
          <p class="card-description">${escapeHtml(form.description || "")}</p>
        </div>

        <div class="card-cta">
          <span class="cta-action-text">${isComingSoon ? "Coming Soon" : "Open Form"}</span>
          ${isComingSoon ? ICONS.clock : ICONS.externalLink}
        </div>
      `;

      fragment.appendChild(card);
    });

    formsGrid.appendChild(fragment);
  }

  // --- 9. VIEW 3: Render Guidelines Directory ---
  function renderGuidelines() {
    if (!guidelinesGrid) return;
    guidelinesGrid.innerHTML = "";

    const guidelines = guidelinesConfig.guidelines || [];
    const fragment = document.createDocumentFragment();

    guidelines.forEach(item => {
      const isComingSoon = Boolean(item.comingSoon || item.url === "#" || !item.url);
      const card = document.createElement(isComingSoon ? "div" : "a");
      card.className = `form-card ${isComingSoon ? "is-coming-soon" : ""}`;

      if (!isComingSoon) {
        card.href = item.url;
        if (!item.isInternalRoute) {
          card.target = "_blank";
          card.rel = "noopener noreferrer";
        }
        card.setAttribute("aria-label", `${item.title} - ${item.description}`);
      } else {
        card.setAttribute("aria-label", `${item.title} (Coming soon)`);
        card.setAttribute("role", "article");
      }

      const iconSvg = ICONS[item.icon] || ICONS.book;

      // Only display Coming Soon badge for unavailable options; suppress category tags and interactive guide
      let badgeHtml = "";
      if (isComingSoon) {
        badgeHtml = `<span class="special-badge coming-soon">Coming Soon</span>`;
      }

      card.innerHTML = `
        <div class="card-top-row">
          <div class="card-icon-box" aria-hidden="true">
            ${iconSvg}
          </div>
          ${badgeHtml ? `<div class="card-badges">${badgeHtml}</div>` : ""}
        </div>

        <div class="card-body">
          <h3 class="card-title">${escapeHtml(item.title)}</h3>
          <p class="card-description">${escapeHtml(item.description || "")}</p>
        </div>

        <div class="card-cta">
          <span class="cta-action-text">${isComingSoon ? "Coming Soon" : "View Roles & Tutorials"}</span>
          ${isComingSoon ? ICONS.clock : ICONS.arrowRight}
        </div>
      `;

      fragment.appendChild(card);
    });

    guidelinesGrid.appendChild(fragment);
  }

  // --- 10. VIEW 4: Render Accounting Roles & Full Guides ---
  function renderAccountingRoles() {
    const settings = getAdminSettings();
    const accountType = settings.accountType || "bank"; // "bank" or "cashbox"

    // Update Mode Banner
    const modeBadge = document.getElementById("accountingModeBadge");
    const modeText = document.getElementById("accountingModeText");
    const modeDesc = document.getElementById("accountingModeDesc");
    const modeIcon = document.getElementById("accountingModeIcon");

    if (modeText) {
      modeText.textContent = `Mode: ${accountType === "bank" ? "Bank Account" : "Cashbox"}`;
    }
    if (modeIcon) {
      modeIcon.innerHTML = accountType === "bank" ? ICONS.bank : ICONS.box;
    }
    if (modeDesc) {
      modeDesc.textContent = accountType === "bank"
        ? "Congregation operates with an official bank account. Video guides cover bank accounting, branch transfers, and S-26."
        : "Congregation operates with a cash box and petty cash system. Video guides cover cash agreements, advances, and reconciliations.";
    }

    // 1. Render Video Guides Roles Grid
    if (accountingRolesGrid) {
      accountingRolesGrid.innerHTML = "";

      // Filter available roles according to accountType
      const allRoles = accountingConfig.roles || [];
      const applicableRoles = allRoles.filter(role => {
        if (role.applicableAccountType === "both") return true;
        return role.applicableAccountType === accountType;
      });

      const rolesFragment = document.createDocumentFragment();

      applicableRoles.forEach(role => {
        const card = document.createElement("a");
        card.href = `#guidelines/accounting/${role.id}`;
        card.className = "form-card";
        card.setAttribute("aria-label", `${role.name} - View video guides`);

        const iconSvg = ICONS[role.icon] || ICONS.user;

        card.innerHTML = `
          <div class="card-top-row">
            <div class="card-icon-box" aria-hidden="true">
              ${iconSvg}
            </div>
          </div>

          <div class="card-body">
            <h3 class="card-title">${escapeHtml(role.name)}</h3>
            <p class="card-description">${escapeHtml(role.description || "")}</p>
          </div>

          <div class="card-cta">
            <span class="cta-action-text">View Video Guides</span>
            ${ICONS.arrowRight}
          </div>
        `;

        rolesFragment.appendChild(card);
      });

      accountingRolesGrid.appendChild(rolesFragment);
    }

    // 2. Render Main Guide (Based on selected account mode: bank or cashbox)
    if (accountingMainGuideList) {
      accountingMainGuideList.innerHTML = "";
      const mainGuides = (accountingConfig.mainGuides || []).filter(g => g.type === accountType);

      mainGuides.forEach(guide => {
        const item = document.createElement("a");
        item.href = guide.link;
        item.target = "_blank";
        item.rel = "noopener noreferrer";
        item.className = "guide-doc-item";
        item.setAttribute("aria-label", `${guide.code ? guide.code + ': ' : ''}${guide.title} (Opens PDF in new tab)`);

        item.innerHTML = `
          <div class="guide-doc-left">
            <div class="guide-doc-icon-box" aria-hidden="true">
              ${ICONS.file}
            </div>
            <div class="guide-doc-info">
              ${guide.code ? `<span class="guide-doc-code">${escapeHtml(guide.code)}</span>` : ""}
              <span class="guide-doc-title">${escapeHtml(guide.title)}</span>
            </div>
          </div>
          <div class="guide-doc-action">
            <span class="guide-doc-format">PDF</span>
            <span class="guide-doc-ext-icon" aria-hidden="true">
              ${ICONS.externalLink}
            </span>
          </div>
        `;

        accountingMainGuideList.appendChild(item);
      });
    }

    // 3. Render Additional / Auxiliary Guides
    if (accountingAdditionalGuidesList) {
      accountingAdditionalGuidesList.innerHTML = "";
      const additionalGuides = accountingConfig.additionalGuides || [];

      additionalGuides.forEach(guide => {
        const item = document.createElement("a");
        item.href = guide.link;
        item.target = "_blank";
        item.rel = "noopener noreferrer";
        item.className = "guide-doc-item";
        item.setAttribute("aria-label", `${guide.title} (Opens PDF in new tab)`);

        item.innerHTML = `
          <div class="guide-doc-left">
            <div class="guide-doc-icon-box" aria-hidden="true">
              ${ICONS.file}
            </div>
            <div class="guide-doc-info">
              <span class="guide-doc-title">${escapeHtml(guide.title)}</span>
            </div>
          </div>
          <div class="guide-doc-action">
            <span class="guide-doc-format">PDF</span>
            <span class="guide-doc-ext-icon" aria-hidden="true">
              ${ICONS.externalLink}
            </span>
          </div>
        `;

        accountingAdditionalGuidesList.appendChild(item);
      });
    }
  }

  // --- 11. VIEW 5: Render Role Videos List ---
  function renderRoleVideos() {
    if (!roleVideosGrid || !activeRole) return;

    const settings = getAdminSettings();
    const accountType = settings.accountType || "bank";

    const roleObj = (accountingConfig.roles || []).find(r => r.id === activeRole) || {
      id: activeRole,
      name: "Role Tutorials",
      description: "Official guide videos assigned to this congregation responsibility.",
      category: "Accounting",
      icon: "user"
    };

    const roleDetailsIcon = document.getElementById("roleDetailsIcon");
    const roleDetailsTitle = document.getElementById("roleDetailsTitle");
    const roleDetailsDesc = document.getElementById("roleDetailsDesc");

    if (roleDetailsIcon) roleDetailsIcon.innerHTML = ICONS[roleObj.icon] || ICONS.user;
    if (roleDetailsTitle) roleDetailsTitle.textContent = roleObj.name;
    if (roleDetailsDesc) roleDetailsDesc.textContent = roleObj.description || "";

    const mappings = (accountingConfig.role2video || []).filter(
      m => m.accountType === accountType && m.roleId === activeRole
    );

    const videoMap = new Map((accountingConfig.videos || []).map(v => [v.code, v]));
    const assignedVideos = mappings
      .map(m => videoMap.get(m.videoCode))
      .filter(Boolean);

    const query = videoSearchQuery.trim().toLowerCase();
    let filteredVideos = assignedVideos;
    if (query) {
      filteredVideos = assignedVideos.filter(video => {
        const titleMatch = (video.title || "").toLowerCase().includes(query);
        const codeMatch = (video.code || "").toLowerCase().includes(query);
        const typeMatch = (video.type || "").toLowerCase().includes(query);
        return titleMatch || codeMatch || typeMatch;
      });
    }

    if (videoCountBadge) {
      const total = assignedVideos.length;
      if (filteredVideos.length === total) {
        videoCountBadge.textContent = `${total} Videos Available`;
      } else {
        videoCountBadge.textContent = `${filteredVideos.length} of ${total} Videos`;
      }
    }

    if (filteredVideos.length === 0) {
      roleVideosGrid.innerHTML = "";
      roleVideosGrid.style.display = "none";
      if (roleVideosEmptyState) roleVideosEmptyState.style.display = "block";
      return;
    }

    if (roleVideosEmptyState) roleVideosEmptyState.style.display = "none";
    roleVideosGrid.style.display = "grid";
    roleVideosGrid.innerHTML = "";

    const fragment = document.createDocumentFragment();

    filteredVideos.forEach((video) => {
      const card = document.createElement("div");
      card.className = "video-card";

      const formattedCode = (video.code || "").toUpperCase().replace("_", "-");

      card.innerHTML = `
        <div class="video-card-top">
          <span class="video-code-pill">${escapeHtml(formattedCode)}</span>
        </div>

        <div class="video-card-body">
          <h3 class="video-card-title">${escapeHtml(video.title)}</h3>
        </div>

        <div class="video-card-cta">
          <a href="${escapeHtml(video.link)}" target="_blank" rel="noopener noreferrer" class="btn-watch-video" aria-label="Watch video tutorial: ${escapeHtml(video.title)}">
            ${ICONS.video}
            <span>Watch Video</span>
            ${ICONS.externalLink}
          </a>
        </div>
      `;

      fragment.appendChild(card);
    });

    roleVideosGrid.appendChild(fragment);
  }

  function initVideoSearch() {
    if (!videoSearchInput) return;

    videoSearchInput.addEventListener("input", (e) => {
      videoSearchQuery = e.target.value;
      if (videoSearchClearBtn) {
        videoSearchClearBtn.classList.toggle("visible", videoSearchQuery.length > 0);
      }
      renderRoleVideos();
    });

    if (videoSearchClearBtn) {
      videoSearchClearBtn.addEventListener("click", () => {
        videoSearchInput.value = "";
        videoSearchQuery = "";
        videoSearchClearBtn.classList.remove("visible");
        videoSearchInput.focus();
        renderRoleVideos();
      });
    }

    if (resetVideoSearchBtn) {
      resetVideoSearchBtn.addEventListener("click", () => {
        videoSearchInput.value = "";
        videoSearchQuery = "";
        if (videoSearchClearBtn) videoSearchClearBtn.classList.remove("visible");
        renderRoleVideos();
      });
    }
  }

  // --- 12. VIEW 8: Render & Handle Admin Control Panel ---
  let selectedAccountType = "bank";

  function renderAdminView() {
    const settings = getAdminSettings();
    selectedAccountType = settings.accountType || "bank";

    // Text inputs
    if (adminSiteTitle) adminSiteTitle.value = settings.siteTitle || "SMC Hub";
    if (adminShowTitleToggle) {
      adminShowTitleToggle.checked = settings.showSiteTitle !== false;
    }
    if (adminSiteTagline) adminSiteTagline.value = settings.siteTagline || "";
    if (adminSiteLogoUrl) adminSiteLogoUrl.value = settings.siteLogoUrl || "";
    if (adminSiteLogoDarkUrl) adminSiteLogoDarkUrl.value = settings.siteLogoDarkUrl || "";
    if (adminFaviconUrl) adminFaviconUrl.value = settings.faviconUrl || "";

    // Live image previews
    updateAdminImagePreviews();

    // Maintenance Mode checkbox
    if (adminMaintenanceToggle) {
      adminMaintenanceToggle.checked = Boolean(settings.maintenanceMode);
    }

    // Announcement Banner
    if (adminBannerToggle && settings.announcement) {
      const enabled = Boolean(settings.announcement.enabled);
      adminBannerToggle.checked = enabled;
      if (adminBannerInputsGroup) {
        adminBannerInputsGroup.style.display = enabled ? "block" : "none";
      }
    }
    if (adminBannerMessage && settings.announcement) {
      adminBannerMessage.value = settings.announcement.message || "";
    }
    if (adminBannerType && settings.announcement) {
      adminBannerType.value = settings.announcement.type || "info";
    }

    // Congregation Account Type simple toggle buttons
    if (adminToggleBank && adminToggleCashbox) {
      const isBank = selectedAccountType === "bank";
      adminToggleBank.classList.toggle("is-active", isBank);
      adminToggleBank.setAttribute("aria-pressed", isBank ? "true" : "false");
      adminToggleCashbox.classList.toggle("is-active", !isBank);
      adminToggleCashbox.setAttribute("aria-pressed", !isBank ? "true" : "false");
    }
  }

  function initAdminControls() {
    // 1. Congregation Account Mode Toggle: Bank
    if (adminToggleBank) {
      adminToggleBank.addEventListener("click", () => {
        if (selectedAccountType !== "bank") {
          selectedAccountType = "bank";
          adminToggleBank.classList.add("is-active");
          adminToggleBank.setAttribute("aria-pressed", "true");
          if (adminToggleCashbox) {
            adminToggleCashbox.classList.remove("is-active");
            adminToggleCashbox.setAttribute("aria-pressed", "false");
          }
          const settings = getAdminSettings();
          settings.accountType = "bank";
          saveAdminSettings(settings);
        }
      });
    }

    // Congregation Account Mode Toggle: Cashbox
    if (adminToggleCashbox) {
      adminToggleCashbox.addEventListener("click", () => {
        if (selectedAccountType !== "cashbox") {
          selectedAccountType = "cashbox";
          adminToggleCashbox.classList.add("is-active");
          adminToggleCashbox.setAttribute("aria-pressed", "true");
          if (adminToggleBank) {
            adminToggleBank.classList.remove("is-active");
            adminToggleBank.setAttribute("aria-pressed", "false");
          }
          const settings = getAdminSettings();
          settings.accountType = "cashbox";
          saveAdminSettings(settings);
        }
      });
    }

    // 2. Real-time Image preview & Title toggle listeners
    if (adminShowTitleToggle) {
      adminShowTitleToggle.addEventListener("change", () => {
        if (siteTitleEl) {
          siteTitleEl.style.display = adminShowTitleToggle.checked ? "" : "none";
        }
      });
    }
    if (adminSiteLogoUrl) {
      adminSiteLogoUrl.addEventListener("input", () => {
        updateAdminImagePreviews();
        applySiteLogo(adminSiteLogoUrl.value, adminSiteLogoDarkUrl ? adminSiteLogoDarkUrl.value : "");
      });
    }
    if (adminSiteLogoDarkUrl) {
      adminSiteLogoDarkUrl.addEventListener("input", () => {
        updateAdminImagePreviews();
        applySiteLogo(adminSiteLogoUrl ? adminSiteLogoUrl.value : "", adminSiteLogoDarkUrl.value);
      });
    }
    if (adminFaviconUrl) {
      adminFaviconUrl.addEventListener("input", updateAdminImagePreviews);
    }

    // 3. Announcement Banner checkbox toggle
    if (adminBannerToggle) {
      adminBannerToggle.addEventListener("change", () => {
        if (adminBannerInputsGroup) {
          adminBannerInputsGroup.style.display = adminBannerToggle.checked ? "block" : "none";
        }
      });
    }

    // 4. Save All Settings Button (Immediate implementation of all settings)
    if (adminSaveBtn) {
      adminSaveBtn.addEventListener("click", () => {
        const settings = getAdminSettings();
        if (adminSiteTitle) settings.siteTitle = adminSiteTitle.value.trim() || "SMC Hub";
        if (adminShowTitleToggle) settings.showSiteTitle = adminShowTitleToggle.checked;
        if (adminSiteTagline) settings.siteTagline = adminSiteTagline.value.trim();
        if (adminSiteLogoUrl) settings.siteLogoUrl = normalizeImageUrl(adminSiteLogoUrl.value.trim()) || "./images/logo-light.png";
        if (adminSiteLogoDarkUrl) settings.siteLogoDarkUrl = normalizeImageUrl(adminSiteLogoDarkUrl.value.trim()) || "./images/logo-dark.png";
        if (adminFaviconUrl) settings.faviconUrl = normalizeImageUrl(adminFaviconUrl.value.trim()) || "./images/favicon.png";
        if (adminMaintenanceToggle) settings.maintenanceMode = adminMaintenanceToggle.checked;

        settings.accountType = selectedAccountType || "bank";

        if (!settings.announcement) settings.announcement = {};
        if (adminBannerToggle) settings.announcement.enabled = adminBannerToggle.checked;
        if (adminBannerMessage) settings.announcement.message = adminBannerMessage.value.trim();
        if (adminBannerType) settings.announcement.type = adminBannerType.value;

        saveAdminSettings(settings);
      });
    }

    // 5. Reset Button
    if (adminResetBtn) {
      adminResetBtn.addEventListener("click", () => {
        if (confirm("Reset all settings to default values?")) {
          saveAdminSettings({ ...DEFAULT_ADMIN_SETTINGS });
          showToast("All settings reset to defaults.");
        }
      });
    }
  }

  // --- 13. Search Controls (Forms Directory) ---
  function initSearch() {
    if (!searchInput) return;

    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      if (searchClearBtn) {
        searchClearBtn.classList.toggle("visible", searchQuery.length > 0);
      }
      if (mobileSearchToggleBtn) {
        mobileSearchToggleBtn.classList.toggle("has-search-term", searchQuery.length > 0);
      }
      renderCards();
    });

    if (searchClearBtn) {
      searchClearBtn.addEventListener("click", () => {
        searchInput.value = "";
        searchQuery = "";
        searchClearBtn.classList.remove("visible");
        if (mobileSearchToggleBtn) {
          mobileSearchToggleBtn.classList.remove("has-search-term");
        }
        searchInput.focus();
        renderCards();
      });
    }

    if (resetFiltersBtn) {
      resetFiltersBtn.addEventListener("click", () => {
        searchInput.value = "";
        searchQuery = "";
        if (searchClearBtn) searchClearBtn.classList.remove("visible");
        if (mobileSearchToggleBtn) mobileSearchToggleBtn.classList.remove("has-search-term");
        selectCategory("All");
      });
    }

    // Keyboard shortcut: Pressing "/" or "Ctrl+K" focuses search on Forms
    window.addEventListener("keydown", (e) => {
      if (!isSiteAuthenticated()) return;
      if ((e.key === "/" && document.activeElement !== searchInput && document.activeElement !== videoSearchInput && document.activeElement !== passkeyInput && document.activeElement !== welcomePasscodeInput) ||
          ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k")) {
        e.preventDefault();
        if (currentRoute !== "forms") {
          window.location.hash = "#forms";
        }
        if (siteHeader && window.innerWidth <= 640) {
          siteHeader.classList.add("is-search-open");
          if (mobileSearchToggleBtn) {
            mobileSearchToggleBtn.classList.add("active");
            mobileSearchToggleBtn.setAttribute("aria-expanded", "true");
          }
        }
        setTimeout(() => {
          if (searchInput) {
            searchInput.focus();
            searchInput.select();
          }
        }, 80);
      } else if (e.key === "Escape") {
        if (document.activeElement === searchInput) searchInput.blur();
        if (document.activeElement === videoSearchInput) videoSearchInput.blur();
      }
    });
  }

  // --- 14. Floating Back to Top Button ---
  function initBackToTop() {
    if (!floatingBackToTopBtn) return;

    window.addEventListener("scroll", () => {
      if (window.scrollY > 180) {
        floatingBackToTopBtn.classList.add("visible");
      } else {
        floatingBackToTopBtn.classList.remove("visible");
      }
    }, { passive: true });

    floatingBackToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // --- 15. Branding Initialization ---
  function initBranding() {
    applySiteSettings();

    if (currentYearEl) {
      currentYearEl.textContent = new Date().getFullYear();
    }

    if (brandLink) {
      brandLink.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.hash = "#home";
      });
    }
  }

  // --- 16. Helper Utilities ---
  function escapeHtml(text) {
    if (!text) return "";
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // --- 17. Progressive Web App (PWA) & Mobile Installation ---
  function initPWA() {
    // 1. Register Service Worker
    if ("serviceWorker" in navigator) {
      const registerSW = () => {
        navigator.serviceWorker.register("sw.js")
          .then((registration) => {
            console.log("[PWA] Service Worker registered with scope:", registration.scope);
          })
          .catch((error) => {
            console.warn("[PWA] Service Worker registration failed:", error);
          });
      };

      if (document.readyState === "complete") {
        registerSW();
      } else {
        window.addEventListener("load", registerSW);
      }
    }

    // 2. Install Prompt Elements
    let deferredPrompt = null;
    const pwaInstallBanner = document.getElementById("pwaInstallBanner");
    const pwaInstallBtn = document.getElementById("pwaInstallBtn");
    const pwaDismissBtn = document.getElementById("pwaDismissBtn");
    const pwaInstallHeaderBtn = document.getElementById("pwaInstallHeaderBtn");
    const pwaInstallDesc = document.getElementById("pwaInstallDesc");

    // Check if the app is already running in standalone mode (already installed)
    const isStandalone = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
    if (isStandalone) {
      return;
    }

    // Check if user dismissed prompt in this session
    const wasDismissed = sessionStorage.getItem("smc-pwa-dismissed");

    // Android / Chrome / Edge native install prompt listener
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      deferredPrompt = e;

      // Show header install button
      if (pwaInstallHeaderBtn) {
        pwaInstallHeaderBtn.style.display = "inline-flex";
      }

      // Show floating bottom banner if not dismissed this session
      if (pwaInstallBanner && !wasDismissed) {
        pwaInstallBanner.style.display = "block";
      }
    });

    // Detect iOS Safari
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (isIOS && isSafari && !isStandalone) {
      if (pwaInstallHeaderBtn) {
        pwaInstallHeaderBtn.style.display = "inline-flex";
      }
      if (pwaInstallBanner && !wasDismissed) {
        if (pwaInstallDesc) {
          pwaInstallDesc.innerHTML = `Tap <svg style="display:inline-block;vertical-align:middle;margin:0 2px;" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"/></svg> <strong>Share</strong>, then select <strong>'Add to Home Screen'</strong>.`;
        }
        pwaInstallBanner.style.display = "block";
      }
    }

    function triggerInstall() {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === "accepted") {
            if (pwaInstallBanner) pwaInstallBanner.style.display = "none";
            if (pwaInstallHeaderBtn) pwaInstallHeaderBtn.style.display = "none";
          }
          deferredPrompt = null;
        });
      } else if (isIOS) {
        alert("To install SMC Hub on iOS:\n\n1. Tap the Share button at the bottom of Safari.\n2. Scroll down and tap 'Add to Home Screen'.");
      }
    }

    if (pwaInstallBtn) {
      pwaInstallBtn.addEventListener("click", triggerInstall);
    }
    if (pwaInstallHeaderBtn) {
      pwaInstallHeaderBtn.addEventListener("click", triggerInstall);
    }

    if (pwaDismissBtn) {
      pwaDismissBtn.addEventListener("click", () => {
        if (pwaInstallBanner) pwaInstallBanner.style.display = "none";
        sessionStorage.setItem("smc-pwa-dismissed", "true");
      });
    }

    // App installed event
    window.addEventListener("appinstalled", () => {
      if (pwaInstallBanner) pwaInstallBanner.style.display = "none";
      if (pwaInstallHeaderBtn) pwaInstallHeaderBtn.style.display = "none";
      showToast("SMC Hub app installed successfully!");
    });
  }

  // --- 18. Application Entrypoint ---
  function init() {
    initPWA();
    initTheme();
    initBranding();
    initHeaderControls();
    initSearch();
    initVideoSearch();
    initAdminControls();
    initPasskeyModal();
    initWelcomeGateway();
    initBackToTop();

    // Listen for Hash Changes
    window.addEventListener("hashchange", handleRouteChange);

    // Initial Route Handling
    handleRouteChange();
  }

  // Run when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
