(function () {
  const root = document.documentElement;
  const qs = (sel, parent = document) => parent.querySelector(sel);
  const qsa = (sel, parent = document) => Array.from(parent.querySelectorAll(sel));

  const safeGet = (key, fallback) => {
    try { return localStorage.getItem(key) ?? fallback; } catch { return fallback; }
  };
  const safeSet = (key, val) => {
    try { localStorage.setItem(key, val); } catch {}
  };

  const DEFAULT_LANG = "es";
  const DEFAULT_THEME = "dark";

  let lang = safeGet("lang", DEFAULT_LANG);
  let theme = safeGet("theme", DEFAULT_THEME);

  function applyTheme(nextTheme) {
    theme = nextTheme;
    root.setAttribute("data-theme", theme);
    safeSet("theme", theme);

    qsa(".theme-btn").forEach((btn) => {
      const icon = qs(".icon", btn);
      if (icon) icon.textContent = theme === "dark" ? "☾" : "☀";
      const ariaLabel = theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro";
      btn.setAttribute("aria-label", ariaLabel);
    });
  }

  function t(key) {
    const dict = window.CONTENT?.i18n?.[lang] || window.CONTENT?.i18n?.[DEFAULT_LANG] || {};
    return dict[key] ?? key;
  }

  function applyI18n() {
    root.setAttribute("lang", lang);

    // Update text content
    qsa("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const translation = t(key);
      if (translation) el.textContent = translation;
    });

    // Update placeholders
    qsa("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      const translation = t(key);
      if (translation) el.setAttribute("placeholder", translation);
    });

    // Re-render dynamic elements that depend on active language
    renderHeroStats();
    renderProjects();
    renderSkillsGrid();
  }

  function applyLinks() {
    const L = window.CONTENT?.links || {};
    const P = window.CONTENT?.person || {};

    const setHref = (sel, href) => {
      const el = qs(sel);
      if (el && href) el.href = href;
    };

    // Hero links
    setHref("#btnGithub", L.github);
    setHref("#btnLinkedin", L.linkedin);
    setHref("#btnEmail", `mailto:${P.email}`);
    setHref("#btnResume", L.resume);

    // Footer links
    setHref("#footerGithub", L.github);
    setHref("#footerLinkedin", L.linkedin);
    setHref("#footerEmail", `mailto:${P.email}`);

    // Contact page direct links
    setHref("#cGithub", L.github);
    setHref("#cLinkedin", L.linkedin);
    setHref("#cEmail", `mailto:${P.email}`);

    const cg = qs("#cGithubText"); if (cg) cg.textContent = "github.com/exo-tic-33";
    const cl = qs("#cLinkedinText"); if (cl) cl.textContent = "linkedin.com/in/mohamed-aymane-hatim-aarab";
    const ce = qs("#cEmailText"); if (ce) ce.textContent = P.email;
  }

  function renderHeroStats() {
    const container = qs("#heroStatsList");
    if (!container) return;

    const stats = window.CONTENT?.heroStats?.[lang] || window.CONTENT?.heroStats?.es || [];
    container.innerHTML = stats.map((item) => `
      <div class="hero__stat-box">
        <span class="hero__stat-label">${escapeHtml(item.label)}</span>
        <strong class="hero__stat-value">${escapeHtml(item.value)}</strong>
      </div>
    `).join("");
  }

  function renderProjects() {
    const grid = qs("#projectsGrid");
    if (!grid) return;

    const projects = window.CONTENT?.projects || [];
    const btnLiveText = t("projects.btnLive");
    const btnCodeText = t("projects.btnCode");
    const featuredText = t("projects.badgeFeatured");

    grid.innerHTML = projects.map((p) => {
      const title = p.title?.[lang] ?? p.title?.es ?? p.shortTitle;
      const desc = p.desc?.[lang] ?? p.desc?.es ?? "";
      const category = p.category?.[lang] ?? p.category?.es ?? "";
      const techBadges = (p.tech || []).map((t) => `<span class="chip chip--tech">${escapeHtml(t)}</span>`).join("");

      const buttons = [];
      if (p.links?.live) {
        buttons.push(`
          <a class="btn btn--primary btn--demo" href="${p.links.live}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(btnLiveText)} para ${escapeHtml(title)}">
            <span class="btn__ic" aria-hidden="true">🌐</span>
            <span>${escapeHtml(btnLiveText)}</span>
            <span class="arrow" aria-hidden="true">↗</span>
          </a>
        `);
      }
      if (p.links?.code) {
        buttons.push(`
          <a class="btn btn--outline btn--code" href="${p.links.code}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(btnCodeText)} de ${escapeHtml(title)}">
            <span class="btn__ic" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12 .5C5.73.5.75 5.6.75 12c0 5.18 3.44 9.57 8.2 11.12.6.12.82-.27.82-.6 0-.3-.01-1.1-.02-2.16-3.34.75-4.04-1.65-4.04-1.65-.55-1.43-1.35-1.81-1.35-1.81-1.1-.78.08-.77.08-.77 1.22.09 1.86 1.29 1.86 1.29 1.08 1.9 2.83 1.35 3.52 1.03.11-.8.42-1.35.76-1.66-2.66-.31-5.46-1.36-5.46-6.07 0-1.34.46-2.44 1.22-3.3-.12-.31-.53-1.57.12-3.26 0 0 1-.33 3.3 1.26.96-.27 1.98-.41 3-.42 1.02.01 2.04.15 3 .42 2.3-1.59 3.3-1.26 3.3-1.26.65 1.69.24 2.95.12 3.26.76.86 1.22 1.96 1.22 3.3 0 4.72-2.8 5.76-5.47 6.07.43.38.81 1.14.81 2.29 0 1.65-.02 2.98-.02 3.39 0 .33.22.73.83.6 4.75-1.55 8.19-5.94 8.19-11.12C23.25 5.6 18.27.5 12 .5Z"/>
              </svg>
            </span>
            <span>${escapeHtml(btnCodeText)}</span>
          </a>
        `);
      }

      const featuredBadge = p.featured
        ? `<span class="badge-featured"><span class="badge-dot" aria-hidden="true"></span> ${escapeHtml(featuredText)}</span>`
        : "";

      return `
        <article class="project-card ${p.featured ? 'project-card--featured' : ''}" aria-label="${escapeHtml(title)}">
          <div class="project-card__media">
            <img 
              src="${escapeHtml(p.img)}" 
              alt="${escapeHtml(p.imgAlt || title)}" 
              loading="lazy" 
              class="project-card__img"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
            />
            <div class="project-card__fallback" style="display:none;" aria-hidden="true">
              <span>${p.featured ? '🌐 Web Project' : '⚡ Python CLI'}</span>
            </div>
            ${featuredBadge}
          </div>

          <div class="project-card__content">
            <div class="project-card__header">
              <span class="project-card__category">${escapeHtml(category)}</span>
              <h3 class="project-card__title">${escapeHtml(title)}</h3>
            </div>

            <p class="project-card__desc">${escapeHtml(desc)}</p>

            <div class="project-card__chips" aria-label="Tecnologías empleadas">
              ${techBadges}
            </div>

            <div class="project-card__actions">
              ${buttons.join("")}
            </div>
          </div>
        </article>
      `;
    }).join("");
  }

  function renderSkillsGrid() {
    const grid = qs("#skillsGrid");
    if (!grid) return;

    const categories = window.CONTENT?.skillsCategories || [];
    grid.innerHTML = categories.map((cat) => {
      const title = cat.title?.[lang] ?? cat.title?.es ?? "";
      const chips = (cat.skills || []).map((s) => `
        <span class="skill-pill">
          <span class="skill-pill__dot" aria-hidden="true"></span>
          <span>${escapeHtml(s)}</span>
        </span>
      `).join("");

      return `
        <div class="skill-category-card glass-card">
          <div class="skill-category-card__head">
            <span class="skill-category-card__icon" aria-hidden="true">${cat.icon}</span>
            <h3 class="skill-category-card__title">${escapeHtml(title)}</h3>
          </div>
          <div class="skill-category-card__chips">
            ${chips}
          </div>
        </div>
      `;
    }).join("");
  }

  // Functional Asynchronous Form with real-time feedback
  function setupContactForm() {
    const form = qs("#contactForm");
    const feedback = qs("#formFeedback");
    const submitBtn = qs("#submitBtn");
    if (!form || !feedback || !submitBtn) return;

    const btnText = qs(".btn__text", submitBtn);
    const btnSpinner = qs(".btn__spinner", submitBtn);
    const originalText = btnText ? btnText.textContent : "Enviar Mensaje";

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      // Basic client-side HTML5 validation check
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const formData = new FormData(form);
      const payload = {
        name: String(formData.get("name") || "").trim(),
        email: String(formData.get("email") || "").trim(),
        subject: String(formData.get("subject") || "").trim(),
        message: String(formData.get("message") || "").trim()
      };

      // Set Loading State
      submitBtn.disabled = true;
      if (btnSpinner) btnSpinner.hidden = false;
      if (btnText) btnText.textContent = t("contact.sending");

      feedback.hidden = false;
      feedback.className = "form-feedback form-feedback--loading";
      feedback.innerHTML = `
        <span class="spinner" aria-hidden="true"></span>
        <span>${escapeHtml(t("contact.sending"))}</span>
      `;

      try {
        // We submit via Formspree API (or graceful simulated endpoint)
        // Note: Formspree endpoint receives standard JSON with Accept: application/json
        const response = await fetch("https://formspree.io/f/xvgzvypd", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(payload)
        });

        if (response.ok) {
          // Success State
          form.reset();
          feedback.className = "form-feedback form-feedback--success";
          feedback.innerHTML = `
            <span class="feedback-icon" aria-hidden="true">✓</span>
            <div>
              <strong>${escapeHtml(t("contact.sentSuccess"))}</strong>
            </div>
          `;
          showToast(`✅ ${t("contact.sentSuccess")}`);
        } else {
          throw new Error("Respuesta no satisfactoria del servidor");
        }
      } catch (err) {
        // Fallback / Error State: Provide graceful fallback to open direct email client or copy
        feedback.className = "form-feedback form-feedback--error";
        const email = window.CONTENT?.person?.email || "mhatimaarab@gmail.com";
        const mailtoLink = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(payload.subject || "Contacto")}&body=${encodeURIComponent("Hola Ayman,\n\n" + payload.message + "\n\nDe: " + payload.name + " (" + payload.email + ")")}`;

        feedback.innerHTML = `
          <span class="feedback-icon" aria-hidden="true">⚠️</span>
          <div>
            <p>${escapeHtml(t("contact.sentError"))}</p>
            <div class="feedback-actions">
              <a class="btn btn--primary btn--sm" href="${mailtoLink}">Abrir en cliente de correo</a>
              <button class="btn btn--ghost btn--sm" type="button" id="btnCopyEmailFallback">Copiar email</button>
            </div>
          </div>
        `;

        const copyBtn = qs("#btnCopyEmailFallback");
        if (copyBtn) {
          copyBtn.addEventListener("click", () => {
            copyToClipboard(email);
            showToast(`✅ Email copiado: <b>${email}</b>`);
          });
        }
      } finally {
        submitBtn.disabled = false;
        if (btnSpinner) btnSpinner.hidden = true;
        if (btnText) btnText.textContent = originalText;
      }
    });
  }

  // Accessible Toast Notification
  function showToast(msg) {
    let el = qs("#toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "toast";
      el.className = "toast";
      el.setAttribute("role", "status");
      el.setAttribute("aria-live", "polite");
      document.body.appendChild(el);
    }
    el.innerHTML = msg;
    el.classList.add("is-show");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => el.classList.remove("is-show"), 2800);
  }

  async function copyToClipboard(text) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch {}
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      const ok = document.execCommand("copy");
      ta.remove();
      return ok;
    } catch {
      return false;
    }
  }

  // Mail UX copy interaction
  function setupMailUX() {
    const email = window.CONTENT?.person?.email;
    if (!email) return;

    const selectors = ["#btnEmail", "#footerEmail", "#cEmail"];
    selectors.forEach((sel) => {
      const a = qs(sel);
      if (!a) return;

      a.addEventListener("click", async (e) => {
        // Allows default mailto behavior, while copying to clipboard for convenience
        await copyToClipboard(email);
        showToast(`✅ Email copiado: <b>${email}</b>`);
      });
    });
  }

  // Mobile drawer
  function setupMenu() {
    const btn = qs("#menuToggle");
    const close = qs("#menuClose");
    const panel = qs("#mobileNav");
    const backdrop = qs("#navBackdrop");
    if (!btn || !panel || !backdrop) return;

    function openMenu() {
      backdrop.hidden = false;
      panel.hidden = false;
      btn.setAttribute("aria-expanded", "true");
      requestAnimationFrame(() => panel.classList.add("is-open"));
      document.body.style.overflow = "hidden";
    }

    function closeMenu() {
      panel.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
      setTimeout(() => {
        panel.hidden = true;
        backdrop.hidden = true;
      }, 220);
    }

    btn.addEventListener("click", () => {
      if (panel.hidden) openMenu();
      else closeMenu();
    });

    if (close) close.addEventListener("click", closeMenu);
    backdrop.addEventListener("click", closeMenu);

    qsa("#mobileNav a").forEach((a) => a.addEventListener("click", closeMenu));
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !panel.hidden) closeMenu();
    });
  }

  // Desktop Header auto-hide
  function setupHeaderAutoHide() {
    const header = qs(".header");
    if (!header) return;

    const mq = window.matchMedia("(min-width: 880px)");
    let lastY = window.scrollY;

    function onScroll() {
      if (!mq.matches) {
        header.classList.remove("is-hidden");
        lastY = window.scrollY;
        return;
      }

      const y = window.scrollY;
      const goingDown = y > lastY;
      const nearTop = y < 20;

      if (nearTop) header.classList.remove("is-hidden");
      else if (goingDown && y > 100) header.classList.add("is-hidden");
      else header.classList.remove("is-hidden");

      lastY = y;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
  }

  // Scroll to top
  function setupToTop() {
    const btn = qs("#toTop");
    if (!btn) return;

    function onScroll() {
      if (window.scrollY > 400) btn.classList.add("is-visible");
      else btn.classList.remove("is-visible");
    }
    btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // Keyboard shortcuts: T for theme, L for cycling language
  function setupShortcuts() {
    const langs = ["es", "en", "fr"];
    window.addEventListener("keydown", (e) => {
      if (e.target && ["INPUT", "TEXTAREA", "SELECT"].includes(e.target.tagName)) return;

      if (e.key.toLowerCase() === "t") {
        applyTheme(theme === "dark" ? "light" : "dark");
      }
      if (e.key.toLowerCase() === "l") {
        const idx = langs.indexOf(lang);
        lang = langs[(idx + 1) % langs.length];
        safeSet("lang", lang);
        const sel = qs("#langSelect");
        if (sel) sel.value = lang;
        applyI18n();
      }
    });
  }

  function setupControls() {
    const langSelect = qs("#langSelect");
    if (langSelect) {
      if (!["es", "en", "fr"].includes(lang)) lang = DEFAULT_LANG;
      langSelect.value = lang;

      langSelect.addEventListener("change", (e) => {
        lang = e.target.value;
        safeSet("lang", lang);
        applyI18n();
      });
    }

    const themeBtns = qsa(".theme-btn, #themeToggle");
    themeBtns.forEach((btn) => {
      btn.addEventListener("click", () => applyTheme(theme === "dark" ? "light" : "dark"));
    });

    const backBtn = qs("#backBtn");
    if (backBtn) {
      backBtn.addEventListener("click", () => {
        if (window.history.length > 1) window.history.back();
        else window.location.href = "index.html";
      });
    }
  }

  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function init() {
    applyTheme(theme);
    applyLinks();
    applyI18n();
    setupControls();
    setupMenu();
    setupHeaderAutoHide();
    setupToTop();
    setupContactForm();
    setupMailUX();
    setupShortcuts();

    const year = qs("#year");
    if (year) year.textContent = String(new Date().getFullYear());
  }

  // Run on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
