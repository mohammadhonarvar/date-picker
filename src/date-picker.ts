import { html, css, customElement, TemplateResult } from 'lit-element';

import { BaseElement } from './base-element';
import './components/header';
import './components/calendar';

@customElement('date-picker')
export class DatePicker extends BaseElement {

  static styles = css`
    .date-picker {
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
      user-select: none;
      overflow: hidden;
    }
  `;

  protected render(): TemplateResult {
    return html`
      <!-- disableNavigation default -> false -->
      <div class="date-picker">
        <header-element
          ?disableNavigation=${false}
          title="March 2020"
        >
        </header-element>
        <calendar-element></calendar-element>
      </div>
    `;
  }
}
