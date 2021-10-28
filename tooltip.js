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
    const icon = document.createElement('span');
    icon.textContent = ' (?)';
    icon.addEventListener('mouseenter', this._showTooltip.bind(this));
    icon.addEventListener('mouseleave', this._hideTooltip.bind(this));
    this.appendChild(icon);
  }

  _showTooltip() {
    this._container = document.createElement('div');
    this._container.textContent = 'This is the Tooltip Web Component text!';
    this.appendChild(this._container);
  }

  _hideTooltip() {
    this.removeChild(this._container);
  }
}

customElements.define('k-tooltip', Tooltip);
