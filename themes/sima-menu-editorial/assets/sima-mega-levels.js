/**
 * Replaces the left column of a department menu with the discipline level.
 */
class SimaMegaLevels extends HTMLElement {
  connectedCallback() {
    if (this.dataset.simaReady === 'true') return;
    this.dataset.simaReady = 'true';
    this.addEventListener('click', this.#onClick);
    this.addEventListener('keydown', this.#onKeydown);
  }

  /**
   * Restore the department list without moving focus.
   */
  reset() {
    this.#show('root', 'instant');
  }

  /**
   * @param {Event} event
   */
  #onClick = (event) => {
    if (!(event.target instanceof Element)) return;

    const open = event.target.closest('[data-sima-open]');
    if (open instanceof HTMLElement && this.contains(open)) {
      event.preventDefault();
      this.#show(open.dataset.simaOpen || 'root', 'forward');
      return;
    }

    const back = event.target.closest('[data-sima-back]');
    if (back instanceof HTMLElement && this.contains(back)) {
      event.preventDefault();
      const pane = back.closest('[data-sima-pane]');
      this.#show('root', 'back', pane?.getAttribute('data-sima-pane') || '');
    }
  };

  /**
   * Escape returns one level before the department panel closes.
   * @param {KeyboardEvent} event
   */
  #onKeydown = (event) => {
    if (event.key !== 'Escape') return;
    const current = this.querySelector('.sima-mega-levels__pane.is-current');
    if (!(current instanceof HTMLElement) || current.dataset.simaPane === 'root') return;
    event.preventDefault();
    event.stopPropagation();
    this.#show('root', 'back', current.dataset.simaPane || '');
  };

  /**
   * @param {string} id
   * @param {'forward' | 'back' | 'instant'} motion
   * @param {string} [returnId]
   */
  #show(id, motion, returnId = '') {
    const panes = this.querySelectorAll('.sima-mega-levels__pane');
    let found = false;

    panes.forEach((pane) => {
      if (!(pane instanceof HTMLElement)) return;
      const on = pane.dataset.simaPane === id;
      if (on) found = true;
      pane.classList.toggle('is-current', on);
      if (on) pane.removeAttribute('inert');
      else pane.setAttribute('inert', '');
    });

    if (!found) return;

    if (motion === 'instant') delete this.dataset.motion;
    else this.dataset.motion = motion;

    this.querySelectorAll('[data-sima-open]').forEach((button) => {
      if (!(button instanceof HTMLElement)) return;
      button.setAttribute('aria-expanded', button.dataset.simaOpen === id ? 'true' : 'false');
    });

    if (motion === 'forward') {
      const back = this.querySelector(`[data-sima-pane="${cssEscape(id)}"] [data-sima-back]`);
      if (back instanceof HTMLElement) back.focus();
    } else if (motion === 'back' && returnId) {
      const opener = this.querySelector(`[data-sima-open="${cssEscape(returnId)}"]`);
      if (opener instanceof HTMLElement) opener.focus();
    }

    if (motion === 'instant') return;

    const submenu = this.closest('[ref="submenu[]"]');
    const header = this.closest('header-component');
    if (!(submenu instanceof HTMLElement) || !(header instanceof HTMLElement)) return;

    requestAnimationFrame(() => {
      const height = submenu.offsetHeight;
      header.style.setProperty('--submenu-height', `${height}px`);
      const top = header.querySelector('.header__row--top');
      const headerVisible = header.hasAttribute('data-submenu-overlap-bottom-row')
        ? top instanceof HTMLElement
          ? top.offsetHeight
          : 0
        : header.offsetHeight;
      header.style.setProperty('--full-open-header-height', `${height + headerVisible}px`);
    });
  }
}

/**
 * @param {string} value
 */
function cssEscape(value) {
  if (typeof CSS !== 'undefined' && typeof CSS.escape === 'function') return CSS.escape(value);
  return value.replace(/["\\]/g, '\\$&');
}

if (!customElements.get('sima-mega-levels')) {
  customElements.define('sima-mega-levels', SimaMegaLevels);
}
