const SLIDE_MS = 780;

/**
 * Carrusel vertical de anuncios. La frase entra desacelerando.
 * Cambia sola. Si la pestaña está oculta se detiene el temporizador.
 * Si la persona prefiere menos movimiento, la frase cambia al instante.
 */
class SimaAnuncios extends HTMLElement {
  /** @type {number | undefined} */
  #timer;

  /** @type {number | undefined} */
  #snap;

  /** @type {number} */
  #index = 0;

  /** @type {() => void} */
  #onVisibility = () => {};

  connectedCallback() {
    this.slides = /** @type {HTMLElement[]} */ ([...this.querySelectorAll("[data-slide]")]);
    this.track = this.querySelector("[data-track]");
    this.viewport = this.querySelector("[data-region]");
    this.count = this.slides.length;
    this.interval = Number(this.dataset.interval) || 5200;
    this.reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (this.count < 2 || !(this.track instanceof HTMLElement)) return;

    this.#onVisibility = () => this.#sync();
    document.addEventListener("visibilitychange", this.#onVisibility);

    this.#paint(0, true);
    this.#sync();
  }

  disconnectedCallback() {
    this.#clear();
    document.removeEventListener("visibilitychange", this.#onVisibility);
  }

  #sync() {
    this.#clear();
    if (this.#index >= this.count) this.#paint(0, true);

    const playing = !document.hidden;
    this.viewport?.setAttribute("aria-live", playing ? "off" : "polite");
    if (!playing) return;

    this.#timer = window.setTimeout(() => this.#advance(), this.interval);
  }

  #advance() {
    const next = this.#index + 1;
    this.#paint(next, this.reduced);

    if (next < this.count) {
      this.#sync();
      return;
    }

    this.#snap = window.setTimeout(() => {
      this.#paint(0, true);
      this.#sync();
    }, this.reduced ? 0 : SLIDE_MS);
  }

  /**
   * @param {number} index
   * @param {boolean} instant
   */
  #paint(index, instant) {
    this.#index = index;
    if (!(this.track instanceof HTMLElement)) return;

    if (instant) this.setAttribute("data-instant", "");
    else this.removeAttribute("data-instant");

    this.track.style.transform = `translateY(calc(${index} * -2.75rem))`;

    if (instant) {
      this.track.getBoundingClientRect();
      this.removeAttribute("data-instant");
    }

    const active = index % this.count;
    this.slides.forEach((slide, slideIndex) => {
      const on = slideIndex === active;
      slide.toggleAttribute("inert", !on);
      slide.setAttribute("aria-hidden", on ? "false" : "true");
    });
  }

  #clear() {
    window.clearTimeout(this.#timer);
    window.clearTimeout(this.#snap);
    this.#timer = undefined;
    this.#snap = undefined;
  }
}

if (!customElements.get("sima-anuncios")) {
  customElements.define("sima-anuncios", SimaAnuncios);
}
