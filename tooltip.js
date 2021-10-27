class Tooltip extends HTMLElement {
  constructor() {
    console.log('The Tooltip Web Component is working!');
  }
}

customElements.define('k-tooltip', Tooltip);
