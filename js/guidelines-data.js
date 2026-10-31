/**
 * ====================================================================
 * SMC HUB - GUIDELINES DIRECTORY DATA
 * ====================================================================
 * Guidelines section configuration.
 * To add a new guideline in the future, simply add an entry to the `guidelines` array below.
 * ====================================================================
 */

const GUIDELINES_CONFIG = {
  title: "Guidelines & Procedures",
  subtitle: "Role-based instruction guides, standard congregation procedures, and tutorial videos.",
  categories: [
    "Accounting",
    "Meetings",
    "Kingdom Hall",
    "Audio / Video"
  ],
  guidelines: [
    {
      id: "accounting",
      title: "Congregation Accounting",
      description: "Official role-based video tutorials and procedures for handling congregation accounts (S-24, S-26, S-30, audits, and donations).",
      category: "Accounting",
      url: "#guidelines/accounting",
      isInternalRoute: true,
      badge: "Interactive Guide",
      icon: "bank",
      tags: ["accounting", "finance", "s-24", "s-26", "s-30", "audit", "bank", "cashbox", "tutorials", "videos", "roles"]
    },
    {
      id: "midweek-meeting",
      title: "Midweek Meeting Operations",
      description: "Standard procedures for meeting attendants, sound and video console operations, and stage coordination.",
      category: "Meetings",
      url: "#",
      comingSoon: true,
      badge: "Coming Soon",
      icon: "mic",
      tags: ["meeting", "attendants", "audio", "video", "stage", "sound"]
    },
    {
      id: "hall-maintenance",
      title: "Kingdom Hall Care & Maintenance",
      description: "Operating instructions, safety procedures, and seasonal maintenance checklist for congregation facilities.",
      category: "Kingdom Hall",
      url: "#",
      comingSoon: true,
      badge: "Coming Soon",
      icon: "hardhat",
      tags: ["maintenance", "safety", "cleaning", "hall", "repairs"]
    },
    {
      id: "audio-video-setup",
      title: "Audio / Video Systems",
      description: "Step-by-step setup and operation guidelines for the hall sound system, Zoom streaming, and visual displays.",
      category: "Audio / Video",
      url: "#",
      comingSoon: true,
      badge: "Coming Soon",
      icon: "broadcast",
      tags: ["audio", "video", "zoom", "streaming", "mic", "multimedia"]
    }
  ]
};

if (typeof window !== "undefined") {
  window.GUIDELINES_CONFIG = GUIDELINES_CONFIG;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = GUIDELINES_CONFIG;
}
