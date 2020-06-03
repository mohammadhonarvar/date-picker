import { html, css, customElement, TemplateResult, property } from 'lit-element';

import { BaseElement } from './base-element';
import './components/solar-calendar';
import './components/gregorian-calendar';

import { fixPersianNumber } from './utils/fix-persian-number';

@customElement('date-picker')
export class DatePicker extends BaseElement {
  @property({ type: Boolean })
  justTimePicker: boolean = false;

  @property({ type: Boolean })
  solar: boolean = false;

  @property({ type: Array })
  selectedTime: number[] = [];

  // must be sorted past[index: 0] -> future[index: 1]
  // 2D array -> [[2020, 2, 3]] || [[2020, 2, 3], [2020, 6, 1]] || []
  @property({ type: Array })
  selectedDate: number[] = [];

  // required: initialDate
  @property({ type: String, attribute: 'date' })
  initialDate: string = this.solar ?
    fixPersianNumber(new Date().toLocaleDateString('fa').replace(/\//g, '-')) :
    new Date().toLocaleDateString('en-CA');

  @property({ type: Array, attribute: false})
  onScreenDate = this.initialDate;

  static styles = css`
    :host {
      display: block;
      margin: 0 auto;
      background-color: var(--theme-background, #ffffff);
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
      user-select: none;
      overflow: hidden;
      padding: 0 8px 16px;
    }
  `;

  protected update(changedProperties: Map<string | number | symbol, unknown>) {
    const date = new Date();
    const offset = date.getTimezoneOffset()
    const x = new Date(date.getTime() + (offset*60*1000))
    this._log('update: %s', x.toISOString().split('T')[0]);

    if (changedProperties.has('solar')) {
      if (this.solar) {
        this.initialDate = fixPersianNumber(new Date().toLocaleDateString('fa').replace(/\//g, '-'));
      }
      else {
        this.initialDate = new Date().toLocaleDateString('en-CA');
      }
    }

    super.update(changedProperties);
  }

  protected render(): TemplateResult {
    this._log('render');
    return html`
      ${this.solar
        ? html`
          <solar-calendar-element
            debug
            date="${this.initialDate}"
          >
          </solar-calendar-element>`
        : html`
          <gregorian-calendar-element
            debug
            date="${this.initialDate}"
          >
          </gregorian-calendar-element>`
      }
    `;
  }
}
