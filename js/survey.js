/**
 * ====================================================================
 * SMC HUB - CIRCUIT OVERSEER (CO) VISIT FEEDBACK SURVEY CONTROLLER
 * ====================================================================
 * Handles:
 *  - Theme toggle & persistence (compatible with SMC Hub)
 *  - Mutual exclusivity for attendee options vs N/A
 *  - Dynamic stepper counters for attendee categories
 *  - Conditional visibility for Set 2
 *  - Form validation with Tagalog error notices
 *  - Submission via POST JSON to n8n webhook
 *  - Success state & reset handling
 * ====================================================================
 */

(function () {
  "use strict";

  // --- CONFIGURATION ---
  // You can modify the target webhook URL here as needed.
  const SURVEY_CONFIG = {
    webhookUrl: "https://myn8n.webredirect.org/webhook/co-visit-survey-submission",
    testWebhookUrl: "https://myn8n.webredirect.org/webhook-test/co-visit-survey-submission",
    useTestWebhook: false
  };

  function getTargetWebhookUrl() {
    return SURVEY_CONFIG.useTestWebhook
      ? SURVEY_CONFIG.testWebhookUrl
      : SURVEY_CONFIG.webhookUrl;
  }

  // --- DOM ELEMENTS ---
  const surveyForm = document.getElementById("surveyForm");
  const formCardContainer = document.getElementById("formCardContainer");
  const successCard = document.getElementById("successCard");
  const resetBtn = document.getElementById("resetBtn");
  const submitBtn = document.getElementById("submitBtn");
  const formAlert = document.getElementById("formAlert");
  const formAlertText = document.getElementById("formAlertText");

  // Inputs - Set 1
  const publisherNameInput = document.getElementById("publisherName");
  const nameError = document.getElementById("nameError");
  const attendeesError = document.getElementById("attendeesError");

  // Checkboxes
  const chkBibleStudy = document.getElementById("chk_bible_study");
  const chkReturnVisit = document.getElementById("chk_return_visit");
  const chkKamagAnak = document.getElementById("chk_kamag_anak");
  const chkNA = document.getElementById("chk_na");

  const attendeeCheckboxes = [chkBibleStudy, chkReturnVisit, chkKamagAnak];

  // Counters
  const countBibleStudy = document.getElementById("count_bible_study");
  const countReturnVisit = document.getElementById("count_return_visit");
  const countKamagAnak = document.getElementById("count_kamag_anak");

  // Conditional Set 2 Container
  const conditionalSet2 = document.getElementById("conditionalSet2");

  // Textareas
  const txtReaksiyon = document.getElementById("reaksiyonInanyayahan");
  const txtPositibongResulta = document.getElementById("positibongResulta");
  const txtMasasabiArrangement = document.getElementById("masasabiArrangement");
  const txtMungkahi = document.getElementById("mungkahiKapakinabangan");

  // Footer Year
  const currentYearEl = document.getElementById("currentYear");
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

  // Theme Toggle
  const themeToggleBtn = document.getElementById("themeToggleBtn");

  // --- INITIALIZATION ---
  initTheme();
  initAttendeeOptions();
  initSteppers();
  initFormSubmission();

  // --- THEME MANAGEMENT ---
  function initTheme() {
    const savedTheme = localStorage.getItem("smc-theme");
    if (savedTheme) {
      document.documentElement.setAttribute("data-theme", savedTheme);
    }

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme") || 
          (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        const nextTheme = current === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", nextTheme);
        localStorage.setItem("smc-theme", nextTheme);
      });
    }
  }

  // --- ATTENDEE OPTIONS & MUTUAL EXCLUSIVITY ---
  function initAttendeeOptions() {
    // When any attendee checkbox is toggled
    attendeeCheckboxes.forEach((chk) => {
      if (!chk) return;
      chk.addEventListener("change", () => {
        clearError(attendeesError);
        const row = chk.closest(".option-row");
        if (chk.checked) {
          row.classList.add("is-checked");
          // Automatically uncheck N/A
          if (chkNA && chkNA.checked) {
            chkNA.checked = false;
            chkNA.closest(".option-row").classList.remove("is-checked");
          }
        } else {
          row.classList.remove("is-checked");
        }
        syncSet2Visibility();
      });
    });

    // When N/A is toggled
    if (chkNA) {
      chkNA.addEventListener("change", () => {
        clearError(attendeesError);
        const naRow = chkNA.closest(".option-row");
        if (chkNA.checked) {
          naRow.classList.add("is-checked");
          // Uncheck all attendee checkboxes & reset counts
          attendeeCheckboxes.forEach((chk) => {
            if (chk) {
              chk.checked = false;
              const r = chk.closest(".option-row");
              if (r) r.classList.remove("is-checked");
            }
          });
          resetCountInputs();
        } else {
          naRow.classList.remove("is-checked");
        }
        syncSet2Visibility();
      });
    }

    // Clear name error on input
    if (publisherNameInput) {
      publisherNameInput.addEventListener("input", () => {
        if (publisherNameInput.value.trim()) {
          publisherNameInput.classList.remove("has-error");
          clearError(nameError);
        }
      });
    }
  }

  // Show/Hide Set 2 smoothly depending on attendee selection
  function syncSet2Visibility() {
    if (!conditionalSet2) return;
    const hasAttendees = attendeeCheckboxes.some((chk) => chk && chk.checked);

    if (hasAttendees && (!chkNA || !chkNA.checked)) {
      conditionalSet2.classList.remove("is-hidden");
      conditionalSet2.classList.add("is-visible");
    } else {
      conditionalSet2.classList.add("is-hidden");
      conditionalSet2.classList.remove("is-visible");
    }
  }

  // --- STEPPER COUNTERS ---
  function initSteppers() {
    document.querySelectorAll(".stepper-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = btn.getAttribute("data-target");
        const input = document.getElementById(targetId);
        if (!input) return;

        let val = parseInt(input.value, 10) || 1;
        if (btn.classList.contains("plus-btn")) {
          val = Math.min(val + 1, 999);
        } else if (btn.classList.contains("minus-btn")) {
          val = Math.max(val - 1, 1);
        }
        input.value = val;
      });
    });

    // Clamp direct numeric inputs
    [countBibleStudy, countReturnVisit, countKamagAnak].forEach((inp) => {
      if (!inp) return;
      inp.addEventListener("change", () => {
        let val = parseInt(inp.value, 10);
        if (isNaN(val) || val < 1) val = 1;
        if (val > 999) val = 999;
        inp.value = val;
      });
    });
  }

  function resetCountInputs() {
    if (countBibleStudy) countBibleStudy.value = 1;
    if (countReturnVisit) countReturnVisit.value = 1;
    if (countKamagAnak) countKamagAnak.value = 1;
  }

  // --- VALIDATION & SUBMISSION ---
  function initFormSubmission() {
    if (!surveyForm) return;

    surveyForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      hideAlert();

      // 1. Validate Name
      const nameVal = publisherNameInput.value.trim();
      let isValid = true;

      if (!nameVal) {
        showError(nameError, "Pakilagay ang iyong pangalan.");
        publisherNameInput.classList.add("has-error");
        publisherNameInput.focus();
        isValid = false;
      } else {
        clearError(nameError);
        publisherNameInput.classList.remove("has-error");
      }

      // 2. Validate Attendees Selection
      const anyAttendeeChecked = attendeeCheckboxes.some((c) => c && c.checked);
      const isNaChecked = chkNA && chkNA.checked;

      if (!anyAttendeeChecked && !isNaChecked) {
        showError(attendeesError, "Pumili ng kahit isang opsyon sa itaas.");
        if (isValid) {
          attendeesError.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        isValid = false;
      } else {
        clearError(attendeesError);
      }

      if (!isValid) return;

      // 3. Build Payload
      const bsCount = (chkBibleStudy && chkBibleStudy.checked) ? (parseInt(countBibleStudy.value, 10) || 1) : 0;
      const rvCount = (chkReturnVisit && chkReturnVisit.checked) ? (parseInt(countReturnVisit.value, 10) || 1) : 0;
      const kkCount = (chkKamagAnak && chkKamagAnak.checked) ? (parseInt(countKamagAnak.value, 10) || 1) : 0;

      let summaryParts = [];
      if (isNaChecked) {
        summaryParts.push("N/A (Hindi applicable)");
      } else {
        if (bsCount > 0) summaryParts.push(`Bible study: ${bsCount}`);
        if (rvCount > 0) summaryParts.push(`Return visit: ${rvCount}`);
        if (kkCount > 0) summaryParts.push(`Kamag-anak o kakilala: ${kkCount}`);
      }

      const payload = {
        timestamp: new Date().toISOString(),
        pangalan: nameVal,
        dumalo: {
          is_na: isNaChecked,
          has_attendees: anyAttendeeChecked,
          bible_study: bsCount,
          return_visit: rvCount,
          kamag_anak_o_kakilala: kkCount,
          summary: summaryParts.join(", ")
        },
        reaksiyon_ng_inanyayahan: isNaChecked ? "" : (txtReaksiyon ? txtReaksiyon.value.trim() : ""),
        positibong_resulta_komento: isNaChecked ? "" : (txtPositibongResulta ? txtPositibongResulta.value.trim() : ""),
        masasabi_sa_arrangement: txtMasasabiArrangement ? txtMasasabiArrangement.value.trim() : "",
        mungkahi_pampakinabang: txtMungkahi ? txtMungkahi.value.trim() : ""
      };

      // 4. Send to Webhook
      await submitToWebhook(payload);
    });

    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        resetForm();
      });
    }
  }

  async function submitToWebhook(payload) {
    setLoadingState(true);
    const webhookUrl = getTargetWebhookUrl();

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        // Success
        showSuccessView();
      } else {
        // HTTP error status
        showAlert("Nagkaroon ng aberya sa pagpapadala ng inyong sagot (Status: " + response.status + "). Pakisubukang muli.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      // Network failure / Offline
      showAlert("Hindi maipadala ang inyong sagot. Pakisuri ang inyong koneksyon sa internet at subukang muli.");
    } finally {
      setLoadingState(false);
    }
  }

  function setLoadingState(isLoading) {
    if (!submitBtn) return;
    submitBtn.disabled = isLoading;
    if (isLoading) {
      submitBtn.classList.add("is-loading");
      submitBtn.querySelector(".btn-text").textContent = "Submitting...";
    } else {
      submitBtn.classList.remove("is-loading");
      submitBtn.querySelector(".btn-text").textContent = "Submit";
    }
  }

  function showSuccessView() {
    if (formCardContainer) formCardContainer.style.display = "none";
    if (successCard) {
      successCard.style.display = "flex";
      successCard.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function resetForm() {
    if (surveyForm) surveyForm.reset();
    resetCountInputs();

    // Reset rows checked class
    document.querySelectorAll(".option-row").forEach((row) => {
      row.classList.remove("is-checked");
    });

    // Reset conditional Set 2 visibility
    syncSet2Visibility();

    // Hide alerts and errors
    hideAlert();
    clearError(nameError);
    clearError(attendeesError);
    if (publisherNameInput) publisherNameInput.classList.remove("has-error");

    // Toggle screens
    if (successCard) successCard.style.display = "none";
    if (formCardContainer) {
      formCardContainer.style.display = "flex";
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function showError(el, msg) {
    if (!el) return;
    el.textContent = msg;
    el.classList.add("show");
  }

  function clearError(el) {
    if (!el) return;
    el.textContent = "";
    el.classList.remove("show");
  }

  function showAlert(msg) {
    if (!formAlert || !formAlertText) return;
    formAlertText.textContent = msg;
    formAlert.classList.add("is-visible");
    formAlert.style.display = "flex";
    formAlert.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function hideAlert() {
    if (!formAlert) return;
    formAlert.classList.remove("is-visible");
    formAlert.style.display = "none";
    if (formAlertText) formAlertText.textContent = "";
  }

})();
