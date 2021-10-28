class Tooltip extends HTMLElement {
  /**
   * Constructor is used only for basic initializations.
   */
  constructor() {
    super();
    this._container;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
          div {
            background-color: black;
            color: white;
            position: absolute;
            z-index: 10;
          }
      </style>
      <span>(?)</span>`;
  }

  /**
   * This lifecycle hook runs once the element is attached to the DOM.
   * The correct place for DOM initializations.
   */
  connectedCallback() {
    this._text = this.getAttribute('text');
    const icon = this.shadowRoot.querySelector('span');
    icon.addEventListener('mouseenter', this._showTooltip.bind(this));
    icon.addEventListener('mouseleave', this._hideTooltip.bind(this));
    this.shadowRoot.appendChild(icon);
    this.style.position = 'relative';
  }

  _showTooltip() {
    this._container = document.createElement('div');
    this._container.textContent = this._text;
    this.shadowRoot.appendChild(this._container);
  }

  _hideTooltip() {
    this.shadowRoot.removeChild(this._container);
  }
}

customElements.define('k-tooltip', Tooltip);
