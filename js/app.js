(function () {
  const root = document.documentElement;
  const qs = (sel) => document.querySelector(sel);
  const qsa = (sel) => Array.from(document.querySelectorAll(sel));

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
    const icon = qs("#themeToggle .icon");
    if (icon) icon.textContent = theme === "dark" ? "☾" : "☀";
  }

  function t(key) {
    const dict = window.CONTENT?.i18n?.[lang] || window.CONTENT?.i18n?.[DEFAULT_LANG] || {};
    return dict[key] ?? key;
  }

  function applyI18n() {
    root.setAttribute("lang", lang);
    qsa("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      el.textContent = t(key);
    });
  }

  function applyLinks() {
    const L = window.CONTENT?.links || {};
    const P = window.CONTENT?.person || {};

    const setHref = (sel, href) => { const el = qs(sel); if (el && href) el.href = href; };

    setHref("#btnGithub", L.github);
    setHref("#btnLinkedin", L.linkedin);
    setHref("#btnEmail", `mailto:${P.email}`);
    setHref("#btnPhone", `tel:${P.phoneTel}`);
    setHref("#btnResume", L.resume);

    setHref("#footerGithub", L.github);
    setHref("#footerLinkedin", L.linkedin);
    setHref("#footerEmail", `mailto:${P.email}`);
    setHref("#footerPhone", `tel:${P.phoneTel}`);

    // contact page cards
    setHref("#cGithub", L.github);
    setHref("#cLinkedin", L.linkedin);
    setHref("#cEmail", `mailto:${P.email}`);
    setHref("#cPhone", `tel:${P.phoneTel}`);

    const cg = qs("#cGithubText"); if (cg) cg.textContent = "github.com/exo-tic-33";
    const cl = qs("#cLinkedinText"); if (cl) cl.textContent = "linkedin.com/in/mohamed-aymane-hatim-aarab-952333385/";
    const ce = qs("#cEmailText"); if (ce) ce.textContent = P.email;
    const cp = qs("#cPhoneText"); if (cp) cp.textContent = P.phoneDisplay;
  }

  function renderListsAndProjects() {
    const highlights = window.CONTENT?.highlights?.[lang] || [];
    const now = window.CONTENT?.now?.[lang] || [];
    const projects = window.CONTENT?.projects || [];

    const hl = qs("#highlightsList");
    if (hl) hl.innerHTML = highlights.map((x) => `<li>${x}</li>`).join("");

    const nl = qs("#nowList");
    if (nl) nl.innerHTML = now.map((x) => `<li>${x}</li>`).join("");

    const pg = qs("#projectsGrid");
    if (pg) {
      pg.innerHTML = projects.map((p) => {
        const title = p.title?.[lang] ?? p.title?.es ?? "Project";
        const desc = p.desc?.[lang] ?? p.desc?.es ?? "";
        const tech = (p.tech || []).map((x) => `<span class="chip">${x}</span>`).join("");

        const links = [];
        if (p.links?.live) links.push(`<a class="btn" href="${p.links.live}" target="_blank" rel="noreferrer">Live</a>`);
        if (p.links?.code) links.push(`<a class="btn btn--ghost" href="${p.links.code}" target="_blank" rel="noreferrer">Code</a>`);

        return `
          <article class="project">
            <h3 class="project__title">${title}</h3>
            <p class="project__desc">${desc}</p>
            <div class="chips">${tech}</div>
            <div class="project__links">${links.join("")}</div>
          </article>
        `;
      }).join("");
    }
  }

  // Skills tabs (like example)
  function renderSkillsTabs() {
    const tabsEl = qs("#skillsTabs");
    const chipsEl = qs("#skillsChips");
    if (!tabsEl || !chipsEl) return;

    const data = window.CONTENT?.skillsTabs;
    if (!data) return;

    const order = data.order || [];
    const items = data.items || {};
    let active = safeGet("skillsTab", order[0] || "languages");

    if (!order.includes(active)) active = order[0] || "languages";

    function label(tabKey) {
      const key = `skills.tab.${tabKey}`;
      return t(key);
    }

    function setActive(next) {
      active = next;
      safeSet("skillsTab", active);
      qsa(".tab").forEach((b) => b.classList.toggle("is-active", b.dataset.tab === active));
      const list = items[active] || [];
      chipsEl.innerHTML = list.map((s) => `<span class="skillchip">${escapeHtml(s)}</span>`).join("");
    }

    tabsEl.innerHTML = order.map((k) => {
      return `<button class="tab" type="button" data-tab="${k}">${escapeHtml(label(k))}</button>`;
    }).join("");

    tabsEl.addEventListener("click", (e) => {
      const btn = e.target.closest(".tab");
      if (!btn) return;
      setActive(btn.dataset.tab);
    });

    setActive(active);
  }

  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
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
      requestAnimationFrame(() => panel.classList.add("is-open"));
      document.body.style.overflow = "hidden";
    }

    function closeMenu() {
      panel.classList.remove("is-open");
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
    window.addEventListener("keydown", (e) => { if (e.key === "Escape" && !panel.hidden) closeMenu(); });
  }

  // Header auto-hide: desktop only
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
      const nearTop = y < 10;

      if (nearTop) header.classList.remove("is-hidden");
      else if (goingDown) header.classList.add("is-hidden");
      else header.classList.remove("is-hidden");

      lastY = y;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
  }

  // Scroll to top button
  function setupToTop() {
    const btn = qs("#toTop");
    if (!btn) return;

    function onScroll() {
      if (window.scrollY > 450) btn.classList.add("is-visible");
      else btn.classList.remove("is-visible");
    }
    btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // Contact form mailto (option A)
  function setupContactForm() {
    const form = qs("#contactForm");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const P = window.CONTENT?.person || {};
      const fd = new FormData(form);

      const name = String(fd.get("name") || "").trim();
      const from = String(fd.get("from") || "").trim();
      const subject = String(fd.get("subject") || "").trim();
      const message = String(fd.get("message") || "").trim();

      const body =
`Name: ${name}
Email: ${from}

Message:
${message}
`;

      const mailto = `mailto:${encodeURIComponent(P.email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      copyToClipboard(P.email);
      showToast(`✅ Email copiado: <b>${P.email}</b> — pega el mensaje en tu correo.`);

      // (Opcional) también copiamos el mensaje completo:
      copyToClipboard(`${subject}\n\n${body}`);
    });
  }

  // Keyboard shortcuts: T theme, L cycle language
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
        renderListsAndProjects();
        renderSkillsTabs();
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
        renderListsAndProjects();
        renderSkillsTabs();
      });
    }

    const themeBtn = qs("#themeToggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", () => applyTheme(theme === "dark" ? "light" : "dark"));
    }
  }

  function showToast(msg) {
  let el = document.querySelector("#toast");
  if (!el) {
    el = document.createElement("div");
    el.id = "toast";
    el.className = "toast";
    document.body.appendChild(el);
  }
  el.innerHTML = msg;
  el.classList.add("is-show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => el.classList.remove("is-show"), 2600);
}

async function copyToClipboard(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {}
  // fallback
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

  function setupMailUX() {
    const email = window.CONTENT?.person?.email;
    if (!email) return;

    // Botones email (hero/footer/contact)
    const selectors = ["#btnEmail", "#footerEmail", "#cEmail"];

    selectors.forEach((sel) => {
      const a = document.querySelector(sel);
      if (!a) return;

      a.addEventListener("click", async (e) => {
        e.preventDefault();

        const copied = await copyToClipboard(email);
        if (copied) {
          showToast(`✅ Email copiado: <b>${email}</b>`);
        } else {
          showToast(`📧 Copia y pega este email: <b>${email}</b>`);
        }

        // Intento opcional: si algún día configuras mailto, funcionará
        // window.location.href = `mailto:${email}`;
      });
    });
  }


  function init() {
    applyTheme(theme);
    applyLinks();
    applyI18n();
    renderListsAndProjects();
    renderSkillsTabs();
    setupControls();
    setupMenu();
    setupHeaderAutoHide();
    setupToTop();
    setupContactForm();
    setupMailUX();
    setupShortcuts();

    const year = qs("#year");
    if (year) year.textContent = String(new Date().getFullYear());

        // Back button (CV page)
    const backBtn = document.querySelector("#backBtn");
    if (backBtn) {
      backBtn.addEventListener("click", () => {
        if (window.history.length > 1) window.history.back();
        else window.location.href = "index.html";
      });
    }

  }

  init();
})();
