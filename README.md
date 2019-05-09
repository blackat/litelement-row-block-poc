# LitElement

LitElement is a simple base class for creating fast, lightweight web components that work in any web page with any framework.

LitElement uses [lit-html](https://lit-html.polymer-project.org/) to render into shadow DOM, and adds API to manage properties and attributes.
Properties are observed by default, and elements update asynchronously when their properties change.

lit-html is a simple, modern, safe, small and fast HTML templating library for JavaScript.

lit-html lets you write HTML templates in JavaScript using [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) with embedded JavaScript expressions. Behind the scenes lit-html creates HTML `<template>` elements from your JavaScript templates and processes them so that it knows exactly where to insert and update the values from expressions.

## Getting started

Install Polymer CLI:

```bash
npm install -g polymer-cli
```

Install latest`lit-element` package:

```bash
npm install lit-element
```

and the polyfill:

```bash
npm install @webcomponents/webcomponentsjs
```

## First element

Create a `litelement-row-block.js` file:

```javascript
import { LitElement, html } from "lit-element";

// Extend the LitElement base class
class LitElementRowBlock extends LitElement {
  /**
   * Implement `render` to define a template for your element.
   */
  render() {
    /**
     * `render` must return a lit-html `TemplateResult`.
     */
    return html`
      <!-- template content -->
      <p>A paragraph</p>
    `;
  }
}
// Register the new element with the browser.
customElements.define("my-element", MyElement);
```

TypeScript decorator `@customElement` are also available to define a class as a custom element, other docrators are available to define propperties and so on.

## Test element

To test the new element just use the Polymer CLI:

```bash
polymer serve
```

## First impresion

- No use of custom directives such as `<dom-repeat>`.
- Mainly use the JavaScript for the template logic.
- Data binding, observer.
- Events.
- TypeScript decorator are available for the class, the properties, the events, etc.
- Styles can be put in separated `static` getter method.
- Predefined and customer property mapper, easier to pass complex values such as arrays or more complex objects, in other cases everything must be pass a string.
- Less complex, more concise than other system such as Angular Elements, easy to debug and to test.
- Slots and light DOM child.
- Compose template from other templates.
- Really small and light set of features.
- Fast.
- [Directives](https://lit-html.polymer-project.org/guide/creating-directives)
- Full complete support of directives, functions etc to create custom elements in a easy way.
- VSCode plugin.

A bundler should be configured.

## Reference

- [LitElement guide][lit-element-guide]
- [Lit-html][lit-html]

[lit-element-guide]: https://lit-element.polymer-project.org/guide
[lit-html]: https://lit-html.polymer-project.org/
