/**
 * ====================================================================
 * SMC HUB - CONGREGATION ACCOUNTING GUIDELINES & TUTORIALS DATA
 * ====================================================================
 * Source: Official Tutorials for Congregation Accounting (Tagalog / TG)
 * Synced with Google Spreadsheet:
 * https://docs.google.com/spreadsheets/d/1qFPrUCsg4_TEu1UNlymMTB5Ht2mzmOTo77a8J1mKN8g
 * ====================================================================
 */

const ACCOUNTING_CONFIG = {
  accountTypes: [
    {
      id: "bank",
      name: "Bank Account",
      shortDescription: "Congregation maintains an official bank account for electronic receipts, branch transfers, and disbursements.",
      icon: "bank"
    },
    {
      id: "cashbox",
      name: "Cashbox",
      shortDescription: "Congregation utilizes a physical cash box and petty cash system for handling local funds and transactions.",
      icon: "box"
    }
  ],

  // Roles in Congregation Accounting
  roles: [
  {
    "id": "accounts_servant",
    "name": "Accounts servant",
    "applicableAccountType": "both",
    "description": "Responsible for congregation financial records, maintaining Accounts Sheet (S-26), recording S-24 transactions, and preparing monthly S-30 reports.",
    "icon": "bank",
    "category": "Accounts Team"
  },
  {
    "id": "secretary",
    "name": "Secretary",
    "applicableAccountType": "both",
    "description": "Works closely with the accounts servant, oversees congregation correspondence, reviews financial records, and inspects monthly branch statements.",
    "icon": "file",
    "category": "Executive"
  },
  {
    "id": "cobe",
    "name": "Coordinator of the body of elders",
    "applicableAccountType": "both",
    "description": "Coordinates congregation administration, presides over elders meetings, and oversees the approval of financial resolutions and fund transfers.",
    "icon": "user",
    "category": "Executive"
  },
  {
    "id": "boe",
    "name": "Body of elders",
    "applicableAccountType": "both",
    "description": "Reviews and approves resolutions, monitors congregation operating expenses, oversees quarterly audits, and ensures responsible fund stewardship.",
    "icon": "users",
    "category": "Oversight"
  },
  {
    "id": "cashbox_holder",
    "name": "Cashbox holder and backup cashbox holder",
    "applicableAccountType": "cashbox",
    "description": "Safeguards the congregation cash box, handles petty cash disbursements and advances, verifies cash agreements, and reconciles cash on hand.",
    "icon": "box",
    "category": "Cashbox Operations"
  },
  {
    "id": "auditor",
    "name": "Auditor",
    "applicableAccountType": "both",
    "description": "Conducts quarterly independent audits of congregation accounts, checks receipts and reconciliation, and completes the Audit Report (S-25).",
    "icon": "clipboard",
    "category": "Audit & Compliance"
  }
],

  // Official Tutorial Videos (tca_01 to tca_29)
  videos: [
  {
    "code": "tca_01",
    "title": "Tutorial Para sa Congregation Accounting—Introduksiyon",
    "type": "both",
    "link": "https://docs.jw.org/finder?lank=pub-tca_seq-1_fg-av-video&lang=TG"
  },
  {
    "code": "tca_02",
    "title": "Mga Papel at Pananagutan",
    "type": "both",
    "link": "https://docs.jw.org/finder?lank=pub-tca_seq-2_fg-av-video&lang=TG"
  },
  {
    "code": "tca_03",
    "title": "Mga Resolusyon",
    "type": "both",
    "link": "https://docs.jw.org/finder?lank=pub-tca_seq-3_fg-av-video&lang=TG"
  },
  {
    "code": "tca_04",
    "title": "Pagkolekta ng mga Donasyon",
    "type": "both",
    "link": "https://docs.jw.org/finder?lank=pub-tca_seq-4_fg-av-video&lang=TG"
  },
  {
    "code": "tca_05",
    "title": "Mga Donation Box at Kung Para Saan ang mga Ito",
    "type": "both",
    "link": "https://docs.jw.org/finder?lank=pub-tca_seq-5_fg-av-video&lang=TG"
  },
  {
    "code": "tca_06",
    "title": "Pag-compute ng Pondo ng Kongregasyon",
    "type": "bank",
    "link": "https://docs.jw.org/finder?lank=pub-tca_seq-6_fg-av-video&lang=TG"
  },
  {
    "code": "tca_07",
    "title": "Pagrerekord sa Accounts Sheet (S-26) ng Transaksiyon sa Bank Account",
    "type": "bank",
    "link": "https://docs.jw.org/finder?lank=pub-tca_seq-7_fg-av-video&lang=TG"
  },
  {
    "code": "tca_08",
    "title": "Pagrerekord ng Transaction Record (S-24) sa Accounts Sheet (S-26)",
    "type": "both",
    "link": "https://docs.jw.org/finder?lank=pub-tca_seq-8_fg-av-video&lang=TG"
  },
  {
    "code": "tca_09",
    "title": "Pagbubukas at Pagme-maintain ng Bank Account",
    "type": "bank",
    "link": "https://docs.jw.org/finder?lank=pub-tca_seq-9_fg-av-video&lang=TG"
  },
  {
    "code": "tca_10",
    "title": "Pag-compute ng Pondo ng Kongregasyon—Cash Box",
    "type": "cashbox",
    "link": "https://docs.jw.org/finder?lank=pub-tca_seq-10_fg-av-video&lang=TG"
  },
  {
    "code": "tca_11",
    "title": "Pagse-setup ng Cash Box at Pag-aatas ng Cash-Box Holder",
    "type": "cashbox",
    "link": "https://docs.jw.org/finder?lank=pub-tca_seq-11_fg-av-video&lang=TG"
  },
  {
    "code": "tca_12",
    "title": "Paggawa ng Cash Agreement",
    "type": "cashbox",
    "link": "https://docs.jw.org/finder?lank=pub-tca_seq-12_fg-av-video&lang=TG"
  },
  {
    "code": "tca_13",
    "title": "Pagbabayad Gamit ang Bank Account",
    "type": "bank",
    "link": "https://docs.jw.org/finder?lank=pub-tca_seq-13_fg-av-video&lang=TG"
  },
  {
    "code": "tca_14",
    "title": "Pagbibigay ng Donation Acknowledgment Letter",
    "type": "both",
    "link": "https://docs.jw.org/finder?lank=pub-tca_seq-14_fg-av-video&lang=TG"
  },
  {
    "code": "tca_15",
    "title": "Pagta-transfer at Pagkuha ng Pondo sa Tanggapang Pansangay",
    "type": "both",
    "link": "https://docs.jw.org/finder?lank=pub-tca_seq-15_fg-av-video&lang=TG"
  },
  {
    "code": "tca_16",
    "title": "Mga Klase ng Gastusin ng Kongregasyon at Pag-aaproba sa mga Ito",
    "type": "both",
    "link": "https://docs.jw.org/finder?lank=pub-tca_seq-16_fg-av-video&lang=TG"
  },
  {
    "code": "tca_17",
    "title": "Pagbabayad Gamit ang Cash Box",
    "type": "cashbox",
    "link": "https://docs.jw.org/finder?lank=pub-tca_seq-17_fg-av-video&lang=TG"
  },
  {
    "code": "tca_18",
    "title": "Monthly Congregation Accounts Report (S-30)",
    "type": "both",
    "link": "https://docs.jw.org/finder?lank=pub-tca_seq-18_fg-av-video&lang=TG"
  },
  {
    "code": "tca_19",
    "title": "Pag-compute sa Accounts Sheet (S-26) sa Katapusan ng Buwan",
    "type": "both",
    "link": "https://docs.jw.org/finder?lank=pub-tca_seq-19_fg-av-video&lang=TG"
  },
  {
    "code": "tca_20",
    "title": "Pagbabayad Gamit ang Cash Advance",
    "type": "cashbox",
    "link": "https://docs.jw.org/finder?lank=pub-tca_seq-20_fg-av-video&lang=TG"
  },
  {
    "code": "tca_21",
    "title": "Pag-iingat ng mga File ng Accounts ng Kongregasyon",
    "type": "both",
    "link": "https://docs.jw.org/finder?lank=pub-tca_seq-21_fg-av-video&lang=TG"
  },
  {
    "code": "tca_22",
    "title": "Pagre-review ng mga Dokumento Mula sa Sangay",
    "type": "both",
    "link": "https://docs.jw.org/finder?lank=pub-tca_seq-22_fg-av-video&lang=TG"
  },
  {
    "code": "tca_23",
    "title": "Mga Dapat Gawin sa Pag-o-audit",
    "type": "both",
    "link": "https://docs.jw.org/finder?lank=pub-tca_seq-23_fg-av-video&lang=TG"
  },
  {
    "code": "tca_24",
    "title": "Pagta-transfer ng Pondo sa Sangay Gamit ang Mobile Money",
    "type": "cashbox",
    "link": "https://docs.jw.org/finder?lank=pub-tca_seq-24_fg-av-video&lang=TG"
  },
  {
    "code": "tca_25",
    "title": "Mga Bagong Gamit ng S-24",
    "type": "both",
    "link": "https://docs.jw.org/finder?lank=pub-tca_seq-25_fg-av-video&lang=TG"
  },
  {
    "code": "tca_26",
    "title": "Pagre-reconcile ng Bank Statement",
    "type": "bank",
    "link": "https://docs.jw.org/finder?lank=pub-tca_seq-26_fg-av-video&lang=TG"
  },
  {
    "code": "tca_27",
    "title": "Pagrerekord ng mga Transaksiyon sa Cash Box sa Accounts Sheet (S-26)",
    "type": "cashbox",
    "link": "https://docs.jw.org/finder?lank=pub-tca_seq-27_fg-av-video&lang=TG"
  },
  {
    "code": "tca_28",
    "title": "Pagsagot sa Congregation Accounts Audit Report (S-25)",
    "type": "both",
    "link": "https://docs.jw.org/finder?lank=pub-tca_seq-28_fg-av-video&lang=TG"
  },
  {
    "code": "tca_29",
    "title": "Pagre-reconcile ng Cash Box",
    "type": "cashbox",
    "link": "https://docs.jw.org/finder?lank=pub-tca_seq-29_fg-av-video&lang=TG"
  }
],

  // Role to Video Mappings according to Account Type (170 entries)
  role2video: [
  {
    "accountType": "bank",
    "roleId": "accounts_servant",
    "videoCode": "tca_01"
  },
  {
    "accountType": "bank",
    "roleId": "accounts_servant",
    "videoCode": "tca_02"
  },
  {
    "accountType": "bank",
    "roleId": "accounts_servant",
    "videoCode": "tca_03"
  },
  {
    "accountType": "bank",
    "roleId": "accounts_servant",
    "videoCode": "tca_04"
  },
  {
    "accountType": "bank",
    "roleId": "accounts_servant",
    "videoCode": "tca_05"
  },
  {
    "accountType": "bank",
    "roleId": "accounts_servant",
    "videoCode": "tca_06"
  },
  {
    "accountType": "bank",
    "roleId": "accounts_servant",
    "videoCode": "tca_07"
  },
  {
    "accountType": "bank",
    "roleId": "accounts_servant",
    "videoCode": "tca_08"
  },
  {
    "accountType": "bank",
    "roleId": "accounts_servant",
    "videoCode": "tca_09"
  },
  {
    "accountType": "bank",
    "roleId": "accounts_servant",
    "videoCode": "tca_13"
  },
  {
    "accountType": "bank",
    "roleId": "accounts_servant",
    "videoCode": "tca_14"
  },
  {
    "accountType": "bank",
    "roleId": "accounts_servant",
    "videoCode": "tca_15"
  },
  {
    "accountType": "bank",
    "roleId": "accounts_servant",
    "videoCode": "tca_16"
  },
  {
    "accountType": "bank",
    "roleId": "accounts_servant",
    "videoCode": "tca_18"
  },
  {
    "accountType": "bank",
    "roleId": "accounts_servant",
    "videoCode": "tca_19"
  },
  {
    "accountType": "bank",
    "roleId": "accounts_servant",
    "videoCode": "tca_21"
  },
  {
    "accountType": "bank",
    "roleId": "accounts_servant",
    "videoCode": "tca_22"
  },
  {
    "accountType": "bank",
    "roleId": "accounts_servant",
    "videoCode": "tca_23"
  },
  {
    "accountType": "bank",
    "roleId": "accounts_servant",
    "videoCode": "tca_25"
  },
  {
    "accountType": "bank",
    "roleId": "accounts_servant",
    "videoCode": "tca_26"
  },
  {
    "accountType": "bank",
    "roleId": "accounts_servant",
    "videoCode": "tca_28"
  },
  {
    "accountType": "bank",
    "roleId": "secretary",
    "videoCode": "tca_01"
  },
  {
    "accountType": "bank",
    "roleId": "secretary",
    "videoCode": "tca_02"
  },
  {
    "accountType": "bank",
    "roleId": "secretary",
    "videoCode": "tca_03"
  },
  {
    "accountType": "bank",
    "roleId": "secretary",
    "videoCode": "tca_04"
  },
  {
    "accountType": "bank",
    "roleId": "secretary",
    "videoCode": "tca_05"
  },
  {
    "accountType": "bank",
    "roleId": "secretary",
    "videoCode": "tca_06"
  },
  {
    "accountType": "bank",
    "roleId": "secretary",
    "videoCode": "tca_07"
  },
  {
    "accountType": "bank",
    "roleId": "secretary",
    "videoCode": "tca_08"
  },
  {
    "accountType": "bank",
    "roleId": "secretary",
    "videoCode": "tca_09"
  },
  {
    "accountType": "bank",
    "roleId": "secretary",
    "videoCode": "tca_13"
  },
  {
    "accountType": "bank",
    "roleId": "secretary",
    "videoCode": "tca_14"
  },
  {
    "accountType": "bank",
    "roleId": "secretary",
    "videoCode": "tca_15"
  },
  {
    "accountType": "bank",
    "roleId": "secretary",
    "videoCode": "tca_16"
  },
  {
    "accountType": "bank",
    "roleId": "secretary",
    "videoCode": "tca_18"
  },
  {
    "accountType": "bank",
    "roleId": "secretary",
    "videoCode": "tca_19"
  },
  {
    "accountType": "bank",
    "roleId": "secretary",
    "videoCode": "tca_21"
  },
  {
    "accountType": "bank",
    "roleId": "secretary",
    "videoCode": "tca_22"
  },
  {
    "accountType": "bank",
    "roleId": "secretary",
    "videoCode": "tca_23"
  },
  {
    "accountType": "bank",
    "roleId": "secretary",
    "videoCode": "tca_25"
  },
  {
    "accountType": "bank",
    "roleId": "secretary",
    "videoCode": "tca_26"
  },
  {
    "accountType": "bank",
    "roleId": "secretary",
    "videoCode": "tca_28"
  },
  {
    "accountType": "bank",
    "roleId": "cobe",
    "videoCode": "tca_01"
  },
  {
    "accountType": "bank",
    "roleId": "cobe",
    "videoCode": "tca_02"
  },
  {
    "accountType": "bank",
    "roleId": "cobe",
    "videoCode": "tca_03"
  },
  {
    "accountType": "bank",
    "roleId": "cobe",
    "videoCode": "tca_04"
  },
  {
    "accountType": "bank",
    "roleId": "cobe",
    "videoCode": "tca_05"
  },
  {
    "accountType": "bank",
    "roleId": "cobe",
    "videoCode": "tca_06"
  },
  {
    "accountType": "bank",
    "roleId": "cobe",
    "videoCode": "tca_09"
  },
  {
    "accountType": "bank",
    "roleId": "cobe",
    "videoCode": "tca_13"
  },
  {
    "accountType": "bank",
    "roleId": "cobe",
    "videoCode": "tca_16"
  },
  {
    "accountType": "bank",
    "roleId": "cobe",
    "videoCode": "tca_23"
  },
  {
    "accountType": "bank",
    "roleId": "cobe",
    "videoCode": "tca_25"
  },
  {
    "accountType": "bank",
    "roleId": "cobe",
    "videoCode": "tca_28"
  },
  {
    "accountType": "bank",
    "roleId": "boe",
    "videoCode": "tca_01"
  },
  {
    "accountType": "bank",
    "roleId": "boe",
    "videoCode": "tca_02"
  },
  {
    "accountType": "bank",
    "roleId": "boe",
    "videoCode": "tca_03"
  },
  {
    "accountType": "bank",
    "roleId": "boe",
    "videoCode": "tca_04"
  },
  {
    "accountType": "bank",
    "roleId": "boe",
    "videoCode": "tca_05"
  },
  {
    "accountType": "bank",
    "roleId": "boe",
    "videoCode": "tca_06"
  },
  {
    "accountType": "bank",
    "roleId": "boe",
    "videoCode": "tca_16"
  },
  {
    "accountType": "bank",
    "roleId": "boe",
    "videoCode": "tca_25"
  },
  {
    "accountType": "bank",
    "roleId": "auditor",
    "videoCode": "tca_01"
  },
  {
    "accountType": "bank",
    "roleId": "auditor",
    "videoCode": "tca_02"
  },
  {
    "accountType": "bank",
    "roleId": "auditor",
    "videoCode": "tca_03"
  },
  {
    "accountType": "bank",
    "roleId": "auditor",
    "videoCode": "tca_04"
  },
  {
    "accountType": "bank",
    "roleId": "auditor",
    "videoCode": "tca_05"
  },
  {
    "accountType": "bank",
    "roleId": "auditor",
    "videoCode": "tca_06"
  },
  {
    "accountType": "bank",
    "roleId": "auditor",
    "videoCode": "tca_16"
  },
  {
    "accountType": "bank",
    "roleId": "auditor",
    "videoCode": "tca_23"
  },
  {
    "accountType": "bank",
    "roleId": "auditor",
    "videoCode": "tca_25"
  },
  {
    "accountType": "bank",
    "roleId": "auditor",
    "videoCode": "tca_28"
  },
  {
    "accountType": "cashbox",
    "roleId": "accounts_servant",
    "videoCode": "tca_01"
  },
  {
    "accountType": "cashbox",
    "roleId": "accounts_servant",
    "videoCode": "tca_02"
  },
  {
    "accountType": "cashbox",
    "roleId": "accounts_servant",
    "videoCode": "tca_03"
  },
  {
    "accountType": "cashbox",
    "roleId": "accounts_servant",
    "videoCode": "tca_04"
  },
  {
    "accountType": "cashbox",
    "roleId": "accounts_servant",
    "videoCode": "tca_05"
  },
  {
    "accountType": "cashbox",
    "roleId": "accounts_servant",
    "videoCode": "tca_08"
  },
  {
    "accountType": "cashbox",
    "roleId": "accounts_servant",
    "videoCode": "tca_10"
  },
  {
    "accountType": "cashbox",
    "roleId": "accounts_servant",
    "videoCode": "tca_11"
  },
  {
    "accountType": "cashbox",
    "roleId": "accounts_servant",
    "videoCode": "tca_12"
  },
  {
    "accountType": "cashbox",
    "roleId": "accounts_servant",
    "videoCode": "tca_14"
  },
  {
    "accountType": "cashbox",
    "roleId": "accounts_servant",
    "videoCode": "tca_15"
  },
  {
    "accountType": "cashbox",
    "roleId": "accounts_servant",
    "videoCode": "tca_16"
  },
  {
    "accountType": "cashbox",
    "roleId": "accounts_servant",
    "videoCode": "tca_17"
  },
  {
    "accountType": "cashbox",
    "roleId": "accounts_servant",
    "videoCode": "tca_18"
  },
  {
    "accountType": "cashbox",
    "roleId": "accounts_servant",
    "videoCode": "tca_19"
  },
  {
    "accountType": "cashbox",
    "roleId": "accounts_servant",
    "videoCode": "tca_20"
  },
  {
    "accountType": "cashbox",
    "roleId": "accounts_servant",
    "videoCode": "tca_21"
  },
  {
    "accountType": "cashbox",
    "roleId": "accounts_servant",
    "videoCode": "tca_22"
  },
  {
    "accountType": "cashbox",
    "roleId": "accounts_servant",
    "videoCode": "tca_23"
  },
  {
    "accountType": "cashbox",
    "roleId": "accounts_servant",
    "videoCode": "tca_24"
  },
  {
    "accountType": "cashbox",
    "roleId": "accounts_servant",
    "videoCode": "tca_25"
  },
  {
    "accountType": "cashbox",
    "roleId": "accounts_servant",
    "videoCode": "tca_27"
  },
  {
    "accountType": "cashbox",
    "roleId": "accounts_servant",
    "videoCode": "tca_28"
  },
  {
    "accountType": "cashbox",
    "roleId": "accounts_servant",
    "videoCode": "tca_29"
  },
  {
    "accountType": "cashbox",
    "roleId": "secretary",
    "videoCode": "tca_01"
  },
  {
    "accountType": "cashbox",
    "roleId": "secretary",
    "videoCode": "tca_02"
  },
  {
    "accountType": "cashbox",
    "roleId": "secretary",
    "videoCode": "tca_03"
  },
  {
    "accountType": "cashbox",
    "roleId": "secretary",
    "videoCode": "tca_04"
  },
  {
    "accountType": "cashbox",
    "roleId": "secretary",
    "videoCode": "tca_05"
  },
  {
    "accountType": "cashbox",
    "roleId": "secretary",
    "videoCode": "tca_08"
  },
  {
    "accountType": "cashbox",
    "roleId": "secretary",
    "videoCode": "tca_10"
  },
  {
    "accountType": "cashbox",
    "roleId": "secretary",
    "videoCode": "tca_11"
  },
  {
    "accountType": "cashbox",
    "roleId": "secretary",
    "videoCode": "tca_12"
  },
  {
    "accountType": "cashbox",
    "roleId": "secretary",
    "videoCode": "tca_14"
  },
  {
    "accountType": "cashbox",
    "roleId": "secretary",
    "videoCode": "tca_15"
  },
  {
    "accountType": "cashbox",
    "roleId": "secretary",
    "videoCode": "tca_16"
  },
  {
    "accountType": "cashbox",
    "roleId": "secretary",
    "videoCode": "tca_17"
  },
  {
    "accountType": "cashbox",
    "roleId": "secretary",
    "videoCode": "tca_18"
  },
  {
    "accountType": "cashbox",
    "roleId": "secretary",
    "videoCode": "tca_19"
  },
  {
    "accountType": "cashbox",
    "roleId": "secretary",
    "videoCode": "tca_20"
  },
  {
    "accountType": "cashbox",
    "roleId": "secretary",
    "videoCode": "tca_21"
  },
  {
    "accountType": "cashbox",
    "roleId": "secretary",
    "videoCode": "tca_22"
  },
  {
    "accountType": "cashbox",
    "roleId": "secretary",
    "videoCode": "tca_23"
  },
  {
    "accountType": "cashbox",
    "roleId": "secretary",
    "videoCode": "tca_24"
  },
  {
    "accountType": "cashbox",
    "roleId": "secretary",
    "videoCode": "tca_25"
  },
  {
    "accountType": "cashbox",
    "roleId": "secretary",
    "videoCode": "tca_27"
  },
  {
    "accountType": "cashbox",
    "roleId": "secretary",
    "videoCode": "tca_28"
  },
  {
    "accountType": "cashbox",
    "roleId": "secretary",
    "videoCode": "tca_29"
  },
  {
    "accountType": "cashbox",
    "roleId": "cobe",
    "videoCode": "tca_01"
  },
  {
    "accountType": "cashbox",
    "roleId": "cobe",
    "videoCode": "tca_02"
  },
  {
    "accountType": "cashbox",
    "roleId": "cobe",
    "videoCode": "tca_03"
  },
  {
    "accountType": "cashbox",
    "roleId": "cobe",
    "videoCode": "tca_04"
  },
  {
    "accountType": "cashbox",
    "roleId": "cobe",
    "videoCode": "tca_05"
  },
  {
    "accountType": "cashbox",
    "roleId": "cobe",
    "videoCode": "tca_10"
  },
  {
    "accountType": "cashbox",
    "roleId": "cobe",
    "videoCode": "tca_11"
  },
  {
    "accountType": "cashbox",
    "roleId": "cobe",
    "videoCode": "tca_12"
  },
  {
    "accountType": "cashbox",
    "roleId": "cobe",
    "videoCode": "tca_14"
  },
  {
    "accountType": "cashbox",
    "roleId": "cobe",
    "videoCode": "tca_16"
  },
  {
    "accountType": "cashbox",
    "roleId": "cobe",
    "videoCode": "tca_17"
  },
  {
    "accountType": "cashbox",
    "roleId": "cobe",
    "videoCode": "tca_20"
  },
  {
    "accountType": "cashbox",
    "roleId": "cobe",
    "videoCode": "tca_21"
  },
  {
    "accountType": "cashbox",
    "roleId": "cobe",
    "videoCode": "tca_23"
  },
  {
    "accountType": "cashbox",
    "roleId": "cobe",
    "videoCode": "tca_25"
  },
  {
    "accountType": "cashbox",
    "roleId": "cobe",
    "videoCode": "tca_28"
  },
  {
    "accountType": "cashbox",
    "roleId": "boe",
    "videoCode": "tca_01"
  },
  {
    "accountType": "cashbox",
    "roleId": "boe",
    "videoCode": "tca_02"
  },
  {
    "accountType": "cashbox",
    "roleId": "boe",
    "videoCode": "tca_03"
  },
  {
    "accountType": "cashbox",
    "roleId": "boe",
    "videoCode": "tca_04"
  },
  {
    "accountType": "cashbox",
    "roleId": "boe",
    "videoCode": "tca_05"
  },
  {
    "accountType": "cashbox",
    "roleId": "boe",
    "videoCode": "tca_10"
  },
  {
    "accountType": "cashbox",
    "roleId": "boe",
    "videoCode": "tca_16"
  },
  {
    "accountType": "cashbox",
    "roleId": "boe",
    "videoCode": "tca_23"
  },
  {
    "accountType": "cashbox",
    "roleId": "boe",
    "videoCode": "tca_25"
  },
  {
    "accountType": "cashbox",
    "roleId": "cashbox_holder",
    "videoCode": "tca_01"
  },
  {
    "accountType": "cashbox",
    "roleId": "cashbox_holder",
    "videoCode": "tca_02"
  },
  {
    "accountType": "cashbox",
    "roleId": "cashbox_holder",
    "videoCode": "tca_03"
  },
  {
    "accountType": "cashbox",
    "roleId": "cashbox_holder",
    "videoCode": "tca_04"
  },
  {
    "accountType": "cashbox",
    "roleId": "cashbox_holder",
    "videoCode": "tca_05"
  },
  {
    "accountType": "cashbox",
    "roleId": "cashbox_holder",
    "videoCode": "tca_08"
  },
  {
    "accountType": "cashbox",
    "roleId": "cashbox_holder",
    "videoCode": "tca_10"
  },
  {
    "accountType": "cashbox",
    "roleId": "cashbox_holder",
    "videoCode": "tca_11"
  },
  {
    "accountType": "cashbox",
    "roleId": "cashbox_holder",
    "videoCode": "tca_12"
  },
  {
    "accountType": "cashbox",
    "roleId": "cashbox_holder",
    "videoCode": "tca_16"
  },
  {
    "accountType": "cashbox",
    "roleId": "cashbox_holder",
    "videoCode": "tca_17"
  },
  {
    "accountType": "cashbox",
    "roleId": "cashbox_holder",
    "videoCode": "tca_20"
  },
  {
    "accountType": "cashbox",
    "roleId": "cashbox_holder",
    "videoCode": "tca_24"
  },
  {
    "accountType": "cashbox",
    "roleId": "cashbox_holder",
    "videoCode": "tca_25"
  },
  {
    "accountType": "cashbox",
    "roleId": "cashbox_holder",
    "videoCode": "tca_29"
  },
  {
    "accountType": "cashbox",
    "roleId": "auditor",
    "videoCode": "tca_01"
  },
  {
    "accountType": "cashbox",
    "roleId": "auditor",
    "videoCode": "tca_02"
  },
  {
    "accountType": "cashbox",
    "roleId": "auditor",
    "videoCode": "tca_03"
  },
  {
    "accountType": "cashbox",
    "roleId": "auditor",
    "videoCode": "tca_04"
  },
  {
    "accountType": "cashbox",
    "roleId": "auditor",
    "videoCode": "tca_05"
  },
  {
    "accountType": "cashbox",
    "roleId": "auditor",
    "videoCode": "tca_10"
  },
  {
    "accountType": "cashbox",
    "roleId": "auditor",
    "videoCode": "tca_16"
  },
  {
    "accountType": "cashbox",
    "roleId": "auditor",
    "videoCode": "tca_23"
  },
  {
    "accountType": "cashbox",
    "roleId": "auditor",
    "videoCode": "tca_25"
  },
  {
    "accountType": "cashbox",
    "roleId": "auditor",
    "videoCode": "tca_28"
  }
]
};

if (typeof window !== "undefined") {
  window.ACCOUNTING_CONFIG = ACCOUNTING_CONFIG;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = ACCOUNTING_CONFIG;
}
