/**
 * ====================================================================
 * SMC HUB - CENTRAL SITE CONFIGURATION
 * ====================================================================
 * Edit this single file to customize all website settings.
 * Any changes saved and pushed to GitHub will automatically reflect
 * across all users, browsers, and mobile devices immediately.
 * ====================================================================
 */

const SITE_CONFIG = {
  // ------------------------------------------------------------------
  // 1. SITE BRANDING & TITLE
  // ------------------------------------------------------------------
  // Main title of the website (shown in browser tab and metadata)
  siteTitle: "SMC Hub",

  // Set to true to show the text title in the header beside the logo.
  // Set to false if your logo image already contains the congregation name.
  showSiteTitleInHeader: false,

  // Short tagline describing the congregation portal
  siteTagline: "Congregation Forms & Guidelines Hub",

  // ------------------------------------------------------------------
  // 2. LOGOS & FAVICON
  // ------------------------------------------------------------------
  // You can use a local path (e.g. "./images/logo-light.png") OR
  // paste a Google Drive share link directly.
  // Example Google Drive link:
  // "https://drive.google.com/file/d/14D6qy2FNyMoywm3abY2jAl4EnfQnVisw/view?usp=drivesdk"
  logoLightUrl: "./images/logo-light.png",
  logoDarkUrl: "./images/logo-dark.png",
  faviconUrl: "./images/favicon.png",

  // ------------------------------------------------------------------
  // 3. CONGREGATION ACCOUNTING SETTINGS
  // ------------------------------------------------------------------
  // Select which accounting system your congregation uses:
  // "bank"    - Congregation operates an official bank account.
  //             (Shows role guides for bank accounting, S-26, transfers)
  // "cashbox" - Congregation operates with a physical cash box and petty cash.
  //             (Shows role guides for cash agreements, advances, reconciliations)
  accountType: "bank",

  // ------------------------------------------------------------------
  // 4. MAINTENANCE MODE
  // ------------------------------------------------------------------
  // Set to true to temporarily take down the website and show a maintenance notice.
  // Set to false for normal site access.
  maintenanceMode: false,

  // Notice text displayed to visitors when maintenance mode is active:
  maintenanceMessage: "The San Miguel Congregation Hub is temporarily undergoing maintenance, system updates, or improvements. Please check back shortly.",

  // ------------------------------------------------------------------
  // 5. SITE ANNOUNCEMENT BANNER
  // ------------------------------------------------------------------
  // Broadcast an alert or reminder across the top of all pages:
  announcement: {
    enabled: false, // Set to true to display the banner, false to hide it
    message: "Welcome to SMC Hub! Access congregation forms, guidelines, and announcements.",
    type: "info"    // Options: "info" (blue), "warning" (yellow), "success" (green), "alert" (red)
  },

  // ------------------------------------------------------------------
  // 6. PASSCODE & ACCESS
  // ------------------------------------------------------------------
  // Passcode required to enter the website from the welcome screen:
  sitePasscode: "sanmig3673",

  // Admin passkey (can also be used at the welcome screen):
  adminPasskey: "hub_admin_3673"
};
