class Tooltip extends HTMLElement {
  /**
   * Constructor is used only for basic initializations.
   */
  constructor() {
    super();
    this._container;
  }

  /**
   * This lifecycle hook runs once the element is attached to the DOM.
   * The correct place for DOM initializations.
   */
  connectedCallback() {
    this._text = this.getAttribute('text');
    const icon = document.createElement('span');
    icon.textContent = ' (?)';
    icon.addEventListener('mouseenter', this._showTooltip.bind(this));
    icon.addEventListener('mouseleave', this._hideTooltip.bind(this));
    this.appendChild(icon);
  }

  _showTooltip() {
    this._container = document.createElement('div');
    this._container.textContent = this._text;
    this.appendChild(this._container);
  }

  _hideTooltip() {
    this.removeChild(this._container);
  }
}

customElements.define('k-tooltip', Tooltip);
