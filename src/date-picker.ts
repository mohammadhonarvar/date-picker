import { html, css, customElement, TemplateResult } from 'lit-element';

import { BaseElement } from './base-element';
import { baseStyle } from './base-style';

@customElement('date-picker')
export class DatePicker extends BaseElement {

  static styles = [baseStyle, css``];

  protected render(): TemplateResult {
    this._log('render');
    return html`<p>Date picker</p>`;
  }
}
