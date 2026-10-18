/**
 * ====================================================================
 * SMC FORMS DIRECTORY - APPLICATION LOGIC
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
    message: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" /></svg>`,
    form: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>`,
    truck: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.25V3.75A1.125 1.125 0 0 0 13.125 2.625h-9.75A1.125 1.125 0 0 0 2.25 3.75v10.5c0 .621.504 1.125 1.125 1.125h1.5" /></svg>`,
    bank: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.5m-15 10.5V10.5M3 21h18M3 10.5h18" /></svg>`,
    clock: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`,
    externalLink: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>`
  };

  // --- State ---
  let activeCategory = "All";
  let searchQuery = "";
  const config = window.FORMS_CONFIG || { siteTitle: "SMC Forms", siteSubtitle: "", forms: [], categories: [] };

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

  // --- 1. Theme Management ---
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

    // Listen for OS theme changes if user has not set a preference
    if (window.matchMedia) {
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
        if (!localStorage.getItem("smc-theme")) {
          document.documentElement.setAttribute("data-theme", e.matches ? "dark" : "light");
        }
      });
    }
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("smc-theme", newTheme);
  }

  // --- 2. Branding & Header Initialization ---
  function initBranding() {
    if (siteTitleEl && config.siteTitle) {
      siteTitleEl.textContent = config.siteTitle;
      document.title = config.siteTitle;
    }
    if (currentYearEl) {
      currentYearEl.textContent = new Date().getFullYear();
    }

    if (announcementBanner && config.announcement && config.announcement.enabled) {
      announcementBanner.textContent = config.announcement.message;
      announcementBanner.classList.add("visible");
      if (config.announcement.type) {
        announcementBanner.classList.add(config.announcement.type);
      }
    }

    if (brandLink) {
      brandLink.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        if (searchInput && searchQuery) {
          searchInput.value = "";
          searchQuery = "";
          if (searchClearBtn) searchClearBtn.classList.remove("visible");
        }
        selectCategory("All");
      });
    }
  }

  const desktopSearchContainer = document.getElementById("desktopSearchContainer");
  const mobileSearchDrawer = document.getElementById("mobileSearchDrawer");
  const searchBoxWrapper = document.getElementById("searchBoxWrapper");

  // --- 3. Header Controls & Drawers (Mobile Search & Filter Toggle) ---
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

    // Mobile search toggle button (Exact same smooth drawer scheme as filter button)
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

    // Filter drawer toggle button (Desktop & Mobile)
    if (filterToggleBtn && siteHeader) {
      filterToggleBtn.addEventListener("click", () => {
        const willOpen = !siteHeader.classList.contains("is-filter-open");
        siteHeader.classList.toggle("is-filter-open", willOpen);
        filterToggleBtn.classList.toggle("active", willOpen);
        filterToggleBtn.setAttribute("aria-expanded", willOpen ? "true" : "false");
      });
    }
  }

  // --- 4. Render Categories Filter ---
  function renderCategories() {
    if (!categoriesFilterBar) return;
    categoriesFilterBar.innerHTML = "";

    const allForms = config.forms || [];
    
    // Build list: "All" + configured categories (plus any unique category from data)
    const categorySet = new Set(config.categories || []);
    allForms.forEach(form => {
      if (form.category) categorySet.add(form.category);
    });

    const categoryList = ["All", ...Array.from(categorySet)];

    categoryList.forEach(catName => {
      // Calculate count
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

    // Update active class on chips
    const chips = categoriesFilterBar.querySelectorAll(".category-chip");
    chips.forEach(chip => {
      if (chip.getAttribute("data-category") === categoryName) {
        chip.classList.add("active");
        chip.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      } else {
        chip.classList.remove("active");
      }
    });

    // Update status indicator
    if (activeCategoryLabel) {
      activeCategoryLabel.textContent = categoryName === "All" ? "All Categories" : categoryName;
    }

    // Update Filter Active Dot on filter button
    const isFiltered = categoryName !== "All";
    if (filterActiveDot) {
      filterActiveDot.classList.toggle("visible", isFiltered);
    }
    if (filterToggleBtn) {
      filterToggleBtn.classList.toggle("has-active-filter", isFiltered);
    }

    renderCards();
  }

  // --- 5. Render Form Cards (Grid by default, responsive) ---
  function renderCards() {
    if (!formsGrid) return;
    const allForms = config.forms || [];

    // Filter by Category
    let filtered = allForms;
    if (activeCategory !== "All") {
      filtered = filtered.filter(f => f.category === activeCategory);
    }

    // Filter by Search Query
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

    // Update Counter Status
    if (statusCountEl) {
      const totalCount = allForms.length;
      if (filtered.length === totalCount) {
        statusCountEl.textContent = `${totalCount} forms`;
      } else {
        statusCountEl.textContent = `${filtered.length} of ${totalCount} forms`;
      }
    }

    // Check Empty State
    if (filtered.length === 0) {
      formsGrid.innerHTML = "";
      formsGrid.style.display = "none";
      if (emptyState) emptyState.classList.add("visible");
      return;
    }

    if (emptyState) emptyState.classList.remove("visible");
    formsGrid.style.display = "grid";
    formsGrid.innerHTML = "";

    // Generate Cards
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

  // --- 6. Search Controls ---
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

    // Keyboard shortcut: Pressing "/" or "Ctrl+K" focuses search
    window.addEventListener("keydown", (e) => {
      if ((e.key === "/" && document.activeElement !== searchInput) || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k")) {
        e.preventDefault();
        if (siteHeader && window.innerWidth <= 640) {
          siteHeader.classList.add("is-search-open");
          if (mobileSearchToggleBtn) {
            mobileSearchToggleBtn.classList.add("active");
            mobileSearchToggleBtn.setAttribute("aria-expanded", "true");
          }
        }
        searchInput.focus();
        searchInput.select();
      } else if (e.key === "Escape" && document.activeElement === searchInput) {
        searchInput.blur();
      }
    });
  }

  // --- 7. Floating Back to Top Button ---
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

  // --- 8. Helper Utilities ---
  function escapeHtml(text) {
    if (!text) return "";
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // --- 9. Application Entrypoint ---
  function init() {
    initTheme();
    initBranding();
    initHeaderControls();
    renderCategories();
    initSearch();
    renderCards();
    initBackToTop();
  }

  // Run when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
