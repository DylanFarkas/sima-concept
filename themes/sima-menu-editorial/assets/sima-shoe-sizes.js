const storageKey = "sima-shoe-size-system";
const motionMs = 320;

const women = [
  { col: "35", eu: "36", us: "5", uk: "4.5", cm: "23.5" },
  { col: "36", eu: "37", us: "6", uk: "5", cm: "23.5" },
  { col: "37", eu: "38", us: "6.5", uk: "5.5", cm: "24.5" },
  { col: "38", eu: "39", us: "7.5", uk: "6.5", cm: "25.5" },
  { col: "39", eu: "40", us: "8.5", uk: "7.5", cm: "26.5" },
];

const men = [
  { col: "37", eu: "40", us: "8.5", uk: "7.5", cm: "26.5" },
  { col: "38", eu: "41", us: "9.5", uk: "8.5", cm: "27.5" },
  { col: "39", eu: "42", us: "10", uk: "9", cm: "28.5" },
  { col: "40", eu: "43", us: "11", uk: "10", cm: "29.5" },
  { col: "41-42", eu: "44", us: "12", uk: "11", cm: "30.5" },
  { col: "43", eu: "45", us: "13", uk: "12", cm: "31.5" },
];

const fitByProduct = new Map();
let guideTrigger = null;
let closeTimer = 0;
let frame = 0;

function sizeKey(value) {
  return String(value || "")
    .trim()
    .replace(/\s+/g, "")
    .replace(/\//g, "-");
}

function readSystem() {
  try {
    const value = sessionStorage.getItem(storageKey);
    return value === "eur" || value === "us" ? value : "col";
  } catch {
    return "col";
  }
}

function writeSystem(system) {
  try {
    sessionStorage.setItem(storageKey, system);
  } catch {
    /* la sesión puede estar bloqueada */
  }
  apply();
}

function rowFor(fit, col) {
  const rows = fit === "mujer" ? women : men;
  const key = sizeKey(col);
  return rows.find((row) => sizeKey(row.col) === key);
}

function label(system, col, fit) {
  if (system === "col" || !fit) return col;
  const row = rowFor(fit, col);
  if (!row) return `${col} COL`;
  return system === "eur" ? row.eu : row.us;
}

function barLabel(system, col, fit) {
  const shown = label(system, col, fit);
  if (system === "col" || !fit || !rowFor(fit, col)) return `${col} COL`;
  return `${shown} ${system === "eur" ? "EUR" : "US"}`;
}

function equivalence(system, col, fit, audience) {
  if (!fit) return audience === "unisex" ? "Elige mujer u hombre para ver EUR y US." : "";
  const row = rowFor(fit, col);
  if (!row) return `${col} Colombia no tiene equivalencia de ${fit}.`;
  if (system === "eur") return `${row.eu} EUR - ${col} Colombia - ${row.us} US`;
  if (system === "us") return `${row.us} US - ${col} Colombia - ${row.eu} EUR`;
  return `${col} Colombia - ${row.eu} EUR - ${row.us} US`;
}

function fitFor(fieldset) {
  const audience = fieldset.dataset.simaAudience;
  if (audience === "hombre" || audience === "mujer") return audience;
  return fitByProduct.get(fieldset.dataset.simaProduct) || null;
}

function syncGuide(root, fit, col, audience) {
  const charts = audience === "unisex" ? (fit ? [fit] : ["mujer", "hombre"]) : [audience];
  root.querySelectorAll("[data-sima-chart]").forEach((chart) => {
    const name = chart.dataset.simaChart;
    const visible = charts.includes(name);
    chart.hidden = !visible;
    const highlight = visible && (audience !== "unisex" || fit === name);
    chart.querySelectorAll("[data-sima-row]").forEach((row) => {
      row.classList.toggle("is-selected", highlight && sizeKey(row.dataset.simaRow) === sizeKey(col));
    });
  });
  root.querySelectorAll("[data-sima-fit]").forEach((button) => {
    button.setAttribute("aria-checked", button.dataset.simaFit === fit ? "true" : "false");
  });
}

function apply() {
  const system = readSystem();
  document.querySelectorAll("[data-sima-shoe]").forEach((fieldset) => {
    if (!(fieldset instanceof HTMLElement)) return;
    const audience = fieldset.dataset.simaAudience || "unisex";
    const fit = fitFor(fieldset);
    const checked = fieldset.querySelector("input[data-sima-col]:checked");
    const col = checked instanceof HTMLInputElement ? checked.dataset.simaCol || checked.value : "";

    fieldset.querySelectorAll("[data-sima-system]").forEach((button) => {
      if (!(button instanceof HTMLElement)) return;
      button.setAttribute("aria-checked", button.dataset.simaSystem === system ? "true" : "false");
    });
    fieldset.querySelectorAll("[data-sima-fit]").forEach((button) => {
      if (!(button instanceof HTMLElement)) return;
      button.setAttribute("aria-checked", button.dataset.simaFit === fit ? "true" : "false");
    });
    fieldset.querySelectorAll("input[data-sima-col]").forEach((input) => {
      if (!(input instanceof HTMLInputElement)) return;
      const value = input.dataset.simaCol || input.value;
      const shown = label(system, value, fit);
      const text = input.parentElement?.querySelector("[data-key='variant-option-text']");
      if (text && text.textContent !== shown) text.textContent = shown;
      const note = input.dataset.simaUnavailable || "";
      const nextLabel = `${barLabel(system, value, fit)}${note}`;
      if (input.getAttribute("aria-label") !== nextLabel) input.setAttribute("aria-label", nextLabel);
    });
    const line = fieldset.querySelector("[data-sima-line]");
    if (line) {
      const next = equivalence(system, col, fit, audience);
      if (line.textContent !== next) line.textContent = next;
    }
    document
      .querySelectorAll(`[data-sima-guide-root][data-sima-product="${fieldset.dataset.simaProduct}"]`)
      .forEach((root) => {
        if (root instanceof HTMLElement) syncGuide(root, fit, col, audience);
      });
  });
}

function scheduleApply() {
  cancelAnimationFrame(frame);
  frame = requestAnimationFrame(() => apply());
}

function reduceMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function openGuide(button) {
  const root = document.getElementById(button.dataset.simaGuide || "");
  if (!(root instanceof HTMLElement)) return;
  window.clearTimeout(closeTimer);
  if (root.parentElement !== document.body) document.body.append(root);
  guideTrigger = button;
  root.classList.remove("is-shown");
  root.classList.add("is-open");
  root.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  const panel = root.querySelector(".sima-guide__panel");
  if (panel instanceof HTMLElement) void panel.offsetWidth;
  root.classList.add("is-shown");
  const close = root.querySelector("[data-sima-guide-dismiss]");
  if (close instanceof HTMLElement) close.focus({ preventScroll: true });
}

function closeGuide(root) {
  if (!(root instanceof HTMLElement) || !root.classList.contains("is-open")) return;
  root.classList.remove("is-shown");
  const finish = () => {
    root.classList.remove("is-open");
    root.setAttribute("aria-hidden", "true");
    if (!document.querySelector(".sima-guide.is-open")) document.body.style.overflow = "";
    if (guideTrigger instanceof HTMLElement) guideTrigger.focus();
  };
  if (reduceMotion()) finish();
  else closeTimer = window.setTimeout(finish, motionMs);
}

function trapTab(event) {
  if (event.key !== "Tab") return;
  const root = document.querySelector(".sima-guide.is-open");
  if (!(root instanceof HTMLElement)) return;
  const focusable = [...root.querySelectorAll("a[href], button:not([disabled])")];
  if (focusable.length === 0) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;

  const systemButton = target.closest("[data-sima-system]");
  if (systemButton instanceof HTMLElement && systemButton.dataset.simaSystem) {
    event.preventDefault();
    writeSystem(systemButton.dataset.simaSystem);
    return;
  }

  const fitButton = target.closest("[data-sima-fit]");
  if (fitButton instanceof HTMLElement && fitButton.dataset.simaProduct && fitButton.dataset.simaFit) {
    event.preventDefault();
    fitByProduct.set(fitButton.dataset.simaProduct, fitButton.dataset.simaFit);
    apply();
    return;
  }

  const guide = target.closest("[data-sima-guide]");
  if (guide instanceof HTMLElement) {
    event.preventDefault();
    openGuide(guide);
    return;
  }

  const close = target.closest("[data-sima-guide-close]");
  if (close instanceof HTMLElement) {
    event.preventDefault();
    const root = close.closest("[data-sima-guide-root]");
    if (root instanceof HTMLElement) closeGuide(root);
  }
});

document.addEventListener("change", (event) => {
  const target = event.target;
  if (target instanceof HTMLInputElement && target.dataset.simaCol) apply();
});

document.addEventListener("keydown", (event) => {
  const root = document.querySelector(".sima-guide.is-open");
  if (!(root instanceof HTMLElement)) return;
  if (event.key === "Escape") {
    event.preventDefault();
    closeGuide(root);
    return;
  }
  trapTab(event);
});

const observer = new MutationObserver(() => scheduleApply());
observer.observe(document.documentElement, { childList: true, subtree: true });
apply();
