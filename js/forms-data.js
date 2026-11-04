/**
 * ====================================================================
 * SMC FORMS DIRECTORY - CONFIGURATION & DATA SOURCE
 * ====================================================================
 * 
 * To add, edit, or remove forms:
 * Simply modify the `FORMS_CONFIG` object below.
 * No HTML or CSS changes needed!
 * 
 * Each form item supports:
 *  - id:          Unique identifier (e.g. "meeting-attendance")
 *  - title:       Display name of the form
 *  - description: Brief explanation of what this form is for
 *  - category:    Category name (must match one in `categories` list)
 *  - url:         Full URL to the form
 *  - comingSoon:  (Optional) Set to true if link is not yet ready
 *  - badge:       (Optional) Short badge text like "Popular", "Coming Soon"
 *  - icon:        (Optional) Icon keyword: "form", "calendar", "map", "cart",
 *                            "truck", "bank", "user", "mic", "file", "clipboard", "message",
 *                            "hardhat", "world", "briefcase", "briefcase-star", "bulldozer", "university"
 *  - tags:        (Optional) Additional keywords for search filtering
 * ====================================================================
 */

const FORMS_CONFIG = {
  // Website branding
  siteTitle: "SMC Hub",
  siteSubtitle: "",
  announcement: {
    enabled: false,
    message: "Welcome! Please bookmark this page for quick access to congregation forms.",
    type: "info" // "info", "warning", or "success"
  },

  // Available categories for the filter tabs
  // "All" is always added automatically as the first option.
  categories: [
    "Meetings",
    "Financial",
    "Ministry",
    "Assemblies & Conventions",
    "Expand Service"
  ],

  // Official List of Congregation Forms
  forms: [
    // ------------------------------------------------------------------
    // MEETINGS
    // ------------------------------------------------------------------
    {
      id: "meeting-attendance-log",
      title: "Meeting Attendance Log",
      description: "Record weekly attendance counts for congregation midweek and weekend meetings.",
      category: "Meetings",
      url: "https://myn8n.webredirect.org/form/8c3c6718-e80a-4de5-95ba-26dc1c42c261",
      icon: "clipboard",
      tags: ["attendance", "meeting", "count", "log", "midweek", "weekend"]
    },
    {
      id: "co-visit-video-survey",
      title: "Survey: Panonood ng Jesus Video sa CO Visit",
      description: "Feedback survey para sa mga mamamahayag tungkol sa naging panonood ng video noong dalaw ng Circuit Overseer.",
      category: "Meetings",
      url: "survey-co-visit.html",
      icon: "message",
      tags: ["survey", "feedback", "co visit", "circuit overseer", "jesus", "video"]
    },

    // ------------------------------------------------------------------
    // FINANCIAL
    // ------------------------------------------------------------------
    {
      id: "transaction-record-s24",
      title: "Transaction Record (S-24)",
      description: "Record congregation receipts, disbursements, and financial accounting transactions.",
      category: "Financial",
      url: "https://myn8n.webredirect.org/form/transaction-record",
      icon: "bank",
      tags: ["financial", "accounts", "transaction", "s-24", "funds", "receipt", "disbursement"]
    },

    // ------------------------------------------------------------------
    // MINISTRY
    // ------------------------------------------------------------------
    {
      id: "field-service-report-s4",
      title: "Field Service Report (S-4)",
      description: "Submit monthly field service activity report for congregation publishers.",
      category: "Ministry",
      url: "https://myn8n.webredirect.org/form/field-service-report",
      icon: "form",
      tags: ["ministry", "report", "s-4", "hours", "field service", "publisher"]
    },
    {
      id: "territory-map-card-s12",
      title: "Territory Map Card (S-12)",
      description: "Access interactive digital territory maps, house markers, and territory coverage cards.",
      category: "Ministry",
      url: "https://smc-territory-hub.lovable.app/",
      badge: "Hub",
      icon: "map",
      tags: ["territory", "map", "s-12", "card", "hub", "section", "boundaries"]
    },
    {
      id: "please-follow-up-s43",
      title: "Please Follow-up Form (S-43)",
      description: "Request follow-up on an interested person who speaks another language or lives elsewhere.",
      category: "Ministry",
      url: "https://myn8n.webredirect.org/form/please-follow-up",
      icon: "message",
      tags: ["follow-up", "s-43", "interested", "return visit", "language", "transfer"]
    },

    // ------------------------------------------------------------------
    // ASSEMBLIES & CONVENTIONS
    // ------------------------------------------------------------------
    {
      id: "request-service-vehicle",
      title: "Request for Service Vehicle",
      description: "Submit transportation and service vehicle requests for circuit assemblies and regional conventions.",
      category: "Assemblies & Conventions",
      url: "#",
      comingSoon: true,
      badge: "Coming Soon",
      icon: "truck",
      tags: ["vehicle", "transport", "assembly", "convention", "service vehicle", "car"]
    },

    // ------------------------------------------------------------------
    // EXPAND SERVICE
    // ------------------------------------------------------------------
    {
      id: "auxiliary-pioneer-application-s205b",
      title: "Application for Auxiliary Pioneer Service (S-205b)",
      description: "Submit your application to serve as an auxiliary pioneer for one or more months.",
      category: "Expand Service",
      url: "https://myn8n.webredirect.org/form/auxiliary-pioneer-application",
      icon: "briefcase",
      tags: ["auxiliary", "pioneer", "s-205b", "application", "service", "hours"]
    },
    {
      id: "regular-pioneer-application-s205",
      title: "Application for Regular Pioneer Service (S-205)",
      description: "Apply for appointment as a regular pioneer in the local congregation.",
      category: "Expand Service",
      url: "https://myn8n.webredirect.org/form/expand-your-service",
      icon: "briefcase-star",
      tags: ["regular", "pioneer", "s-205", "application", "full-time", "service"]
    },
    {
      id: "volunteer-program-application-a19",
      title: "Application for Volunteer Program (A-19)",
      description: "Apply to volunteer for local branch, assembly hall, and special theocratic construction projects.",
      category: "Expand Service",
      url: "https://myn8n.webredirect.org/form/expand-your-service",
      icon: "hardhat",
      tags: ["volunteer", "a-19", "application", "program", "bethel", "assembly hall", "construction"]
    },
    {
      id: "special-full-time-servants-a8",
      title: "Application to Become a Member of the Worldwide Order of Special Full-Time Servants of Jehovah's Witnesses (A-8)",
      description: "Application for special full-time service arrangement worldwide.",
      category: "Expand Service",
      url: "https://myn8n.webredirect.org/form/expand-your-service",
      icon: "world",
      tags: ["order", "a-8", "special", "full-time", "servants", "worldwide", "bethel"]
    },
    {
      id: "expand-theocratic-service-a2",
      title: "Application to Expand Your Theocratic Service (A-2)",
      description: "Express availability to serve where the need is greater or assist other theocratic activities.",
      category: "Expand Service",
      url: "https://myn8n.webredirect.org/form/expand-your-service",
      icon: "user",
      tags: ["expand", "a-2", "theocratic", "need is greater", "service"]
    },
    {
      id: "local-design-construction-dc50",
      title: "Local Design/Construction Volunteer Application (DC-50)",
      description: "Apply to participate in Local Design/Construction (LDC) kingdom hall construction and maintenance.",
      category: "Expand Service",
      url: "https://myn8n.webredirect.org/form/expand-your-service",
      icon: "bulldozer",
      tags: ["ldc", "dc-50", "construction", "design", "maintenance", "kingdom hall", "volunteer", "heavy equipment"]
    },
    {
      id: "school-kingdom-evangelizers-g8",
      title: "Application to Attend the School for Kingdom Evangelizers (G-8)",
      description: "Application for single brothers, single sisters, and married couples to attend SKE.",
      category: "Expand Service",
      url: "https://myn8n.webredirect.org/form/expand-your-service",
      icon: "university",
      tags: ["ske", "g-8", "school", "kingdom evangelizers", "training", "application", "university"]
    }
  ]
};

// Ensure accessibility globally across browsers and test runners
if (typeof window !== "undefined") {
  window.FORMS_CONFIG = FORMS_CONFIG;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = FORMS_CONFIG;
}
