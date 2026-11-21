/* ==========================================================================
   AVISTECH.COM — Lightweight Interactive Layer (Zero Dependencies)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Accessible FAQ Accordion (Recycle page)
  const faqTriggers = document.querySelectorAll(".faq-trigger");
  faqTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const expanded = trigger.getAttribute("aria-expanded") === "true";
      const panelId = trigger.getAttribute("aria-controls");
      const panel = panelId ? document.getElementById(panelId) : null;

      // Collapse siblings for crisp reading flow
      faqTriggers.forEach((other) => {
        if (other !== trigger) {
          other.setAttribute("aria-expanded", "false");
          const otherPanel = document.getElementById(other.getAttribute("aria-controls") || "");
          if (otherPanel) otherPanel.hidden = true;
        }
      });

      trigger.setAttribute("aria-expanded", String(!expanded));
      if (panel) panel.hidden = expanded;
    });
  });

  // 2. Inquiry & RFQ Forms — sent to your inbox via Web3Forms (https://web3forms.com).
  //    The access key lives in each form's hidden "access_key" field.
  //    Without JavaScript the forms still post directly to Web3Forms.
  document.querySelectorAll("[data-inquiry-form]").forEach((form) => {
    const statusEl = form.querySelector(".form-status");
    const submitBtn = form.querySelector('[type="submit"]');
    const submitLabel = submitBtn ? submitBtn.textContent : "";
    const scope = form.getAttribute("data-inquiry-form") === "recycle"
      ? "e-waste & battery recycling"
      : "enterprise supply & procurement";

    const setStatus = (message, isError = false) => {
      if (!statusEl) return;
      statusEl.textContent = message;
      statusEl.classList.toggle("is-error", isError);
    };

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const name = String(formData.get("name") || "").trim();

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending…";
      }
      setStatus("");

      try {
        const response = await fetch(form.action, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(Object.fromEntries(formData)),
        });
        const result = await response.json().catch(() => ({}));
        if (!response.ok || result.success === false) {
          throw new Error(result.message || `HTTP ${response.status}`);
        }
        setStatus(`Thank you${name ? ", " + name : ""}. Your ${scope} request has been sent — our team will be in touch shortly.`);
        form.reset();
      } catch (error) {
        console.error("Inquiry form could not be sent:", error);
        setStatus("Sorry, your request couldn't be sent. Please try again, or reach us by phone or email.", true);
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = submitLabel;
        }
      }
    });
  });
});
