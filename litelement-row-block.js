// Import the LitElement base class and html helper function
import { LitElement, html, css } from "lit-element";

// Extend the LitElement base class
class LitElementRowBlock extends LitElement {
  constructor() {
    // Always call super() first
    super();
    this.title = "please provide a title";
    this.columns = [];
  }

  static get properties() {
    return {
      /**
       * The title of the block of rows.
       * @type {String}
       */
      title: { type: String, reflect: true },
      /**
       * The array of rows.
       * @type {Array}
       */
      columns: { type: Array, reflect: true }
    };
  }

  static get styles() {
    return css`
      .row-block {
        padding: 10px;
        margin: 10px;
        background: whitesmoke;
      }

      .row-block-column {
        margin: 10px;
        display: inline-block;
      }

      .row-block-column-title {
        font-weight: bold;
      }
    `;
  }

  /**
   * Implement `render` to define a template for your element.
   *
   * You must provide an implementation of `render` for any element
   * that uses LitElement as a base class.
   */
  render() {
    /**
     * `render` must return a lit-html `TemplateResult`.
     *
     * To create a `TemplateResult`, tag a JavaScript template literal
     * with the `html` helper function:
     */
    return html`
      <div class="row-block-title">${this.title}</div>
      ${this.columns.map(
        item => html`
          <div class="row-block">
            <div class="row-block-column">
              <div class="row-block-column-title">${item.title}</div>
              <div class="row-block-column-value">${item.value}</div>
            </div>
          </div>
        `
      )}
      </div>
    `;
  }
}
// Register the new element with the browser.
customElements.define("lit-row-block", LitElementRowBlock);
