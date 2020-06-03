import { html, css, customElement, TemplateResult, property } from 'lit-element';

import { BaseElement } from '../base-element';
import { arrowBackward, arrowForward } from '../utils/icon';

@customElement('header-element')
export class HeaderElement extends BaseElement {
  @property({ type: String })
  title: string = '';

  @property({ type: Boolean, attribute: 'disable' })
  disableNavigation: boolean = false;

  calendarActiveView: string = 'calendar';

  // FIX THEME & CSS VARs
  static styles = css`
   :host {
      display: flex;
      flex-flow: row nowrap;
      padding: 16px;
      align-items: center;
   }

   p {
      font-weight: 500;
      cursor: pointer;
      color: rgba(0, 0, 0, 0.87);
      align-self: stretch;
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      margin: 0 8px;
    }

    .next,
    .previous {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      fill: #A0144F;
      cursor: pointer;
      padding: 6px;
      background-color: #A0144F23;
    }

    [hidden] {
      display: none;
    }
  `;

  disconnectedCallback() {
    document.removeEventListener('date-changed', this.onDateChanged.bind(this));
    super.disconnectedCallback();
  }

  constructor() {
    super();
    document.addEventListener('date-changed', this.onDateChanged.bind(this));
  }

  protected render(): TemplateResult {
    this._log('render');

    return html`
      <div class="previous" ?hidden="${this.disableNavigation}"  @click="${() => { this._fire('prev-month', undefined); }}">
        ${arrowBackward}
      </div>
      <p @click=${this.onTitleClick}>${this.title}</p>
      <div class="next" ?hidden="${this.disableNavigation}"  @click="${() => { this._fire('next-month', undefined); }}">
        ${arrowForward}
      </div>
    `;
  }

  private onDateChanged(event: Event | CustomEvent) {
    this._log('onDateChanged');

    event.stopPropagation();
    if (!event['detail']) return;
    const _event = event as CustomEvent;
    this.title = _event.detail;
  }

  private onTitleClick() {
    this._log('onTitleClick');

    switch (this.calendarActiveView) {
      case 'calendar':
        this._fire('show-month-list', undefined);
        break;

      case 'monthList':
        this._fire('show-year-list', undefined);
        break;

      case 'yearList':
        this._fire('show-dedcade-list', undefined);
        break;

      case 'dedcadeList':
        this._fire('show-year-list', undefined);
        break;

      default:
        this._warn('Invalid view');
        break;
    }

  }
}
