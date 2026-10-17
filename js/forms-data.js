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
 *  - id:          Unique identifier (e.g. "cart-shift-request")
 *  - title:       Display name of the form
 *  - description: Brief explanation of what this form is for
 *  - category:    Category name (must match one in `categories` list)
 *  - url:         Full URL to the form (Google Forms, external link, etc.)
 *  - badge:       (Optional) Short badge text like "Popular", "New", "Important"
 *  - icon:        (Optional) Icon keyword: "form", "calendar", "map", "cart",
 *                            "user", "mic", "file", "clipboard", "message"
 *  - tags:        (Optional) Additional keywords for search filtering
 * ====================================================================
 */

const FORMS_CONFIG = {
  // Website branding
  siteTitle: "SMC Forms",
  siteSubtitle: "",
  announcement: {
    enabled: false,
    message: "Welcome! Please bookmark this page for easy access to all congregation links.",
    type: "info" // "info", "warning", or "success"
  },

  // Available categories for the filter tabs
  // "All" is always added automatically as the first option.
  categories: [
    "Ministry & Cart",
    "Territories",
    "Meetings & Hall",
    "General & Administration"
  ],

  // List of forms
  // Replace the URLs and titles below with your actual form links!
  forms: [
    {
      id: "cart-witnessing-shift",
      title: "Public Cart Witnessing Shift Request",
      description: "Request an authorized shift or reserve a schedule slot for public cart witnessing.",
      category: "Ministry & Cart",
      url: "https://docs.google.com/forms/d/e/example-cart-shift/viewform",
      badge: "Popular",
      icon: "cart",
      tags: ["cart", "schedule", "witnessing", "shift", "public", "ministry"]
    },
    {
      id: "cart-followup-intake",
      title: "Public Witnessing Return Visit / Follow-up Intake",
      description: "Submit details of interested persons contacted during cart witnessing for local follow-up.",
      category: "Ministry & Cart",
      url: "https://docs.google.com/forms/d/e/example-cart-followup/viewform",
      badge: "Important",
      icon: "message",
      tags: ["follow up", "return visit", "contact", "intake", "interested"]
    },
    {
      id: "territory-request",
      title: "Personal Territory Request",
      description: "Request a personal territory assignment, commercial area, or report territory completion.",
      category: "Territories",
      url: "https://docs.google.com/forms/d/e/example-territory-request/viewform",
      badge: "Active",
      icon: "map",
      tags: ["territory", "map", "request", "assignment", "coverage", "personal"]
    },
    {
      id: "territory-house-update",
      title: "Territory / House Marker Update",
      description: "Report changes to addresses, relocated gates, or non-residential properties in mapped sections.",
      category: "Territories",
      url: "https://docs.google.com/forms/d/e/example-territory-update/viewform",
      icon: "clipboard",
      tags: ["territory", "boundary", "marker", "house", "correction", "update"]
    },
    {
      id: "auxiliary-pioneer-application",
      title: "Auxiliary Pioneer Application",
      description: "Submit your application to serve as an auxiliary pioneer for upcoming months.",
      category: "Ministry & Cart",
      url: "https://docs.google.com/forms/d/e/example-aux-pioneer/viewform",
      icon: "calendar",
      tags: ["pioneer", "auxiliary", "application", "service", "hours"]
    },
    {
      id: "audio-video-av-availability",
      title: "Sound & Video Department Availability",
      description: "Submit availability and scheduling preferences for congregation sound, stage, and zoom duties.",
      category: "Meetings & Hall",
      url: "https://docs.google.com/forms/d/e/example-av-availability/viewform",
      icon: "mic",
      tags: ["sound", "video", "av", "zoom", "stage", "meeting", "hall"]
    },
    {
      id: "hall-maintenance-report",
      title: "Kingdom Hall Maintenance & Supply Report",
      description: "Report maintenance issues, supplies needed, or safety concerns regarding the hall.",
      category: "Meetings & Hall",
      url: "https://docs.google.com/forms/d/e/example-hall-maintenance/viewform",
      icon: "file",
      tags: ["hall", "maintenance", "repairs", "supplies", "cleaning"]
    },
    {
      id: "contact-information-update",
      title: "Publisher Contact Information Update",
      description: "Update your mobile number, email address, or residential address for congregation records.",
      category: "General & Administration",
      url: "https://docs.google.com/forms/d/e/example-contact-update/viewform",
      badge: "Annual",
      icon: "user",
      tags: ["contact", "publisher", "profile", "phone", "email", "address", "update"]
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

