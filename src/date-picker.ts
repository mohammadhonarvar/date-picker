import { html, css, customElement, TemplateResult } from 'lit-element';

import { BaseElement } from './base-element';
import { baseStyle } from './base-style';

@customElement('date-picker')
export class DatePicker extends BaseElement {

  static styles = [baseStyle, css`
    :host {
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
      user-select: none;
      overflow: hidden;
    }
  `];

  protected render(): TemplateResult {
    this._log('render');
    return html`<p>Date picker</p>`;
  }
}
