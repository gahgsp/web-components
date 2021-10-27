class Tooltip extends HTMLElement {
  constructor() {
    super();
    console.log('The Tooltip Web Component is working!');
  }
}

customElements.define('k-tooltip', Tooltip);
