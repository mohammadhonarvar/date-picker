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

  @property({ type: Boolean, attribute: 'range-picker' })
  rangePicker: boolean = false;

  @property({ type: Boolean, attribute: 'time-picker' })
  timePicker: boolean = false;

  @property({ type: String, attribute: 'date' })
  initialDate: string = this.solar ?
    fixPersianNumber(new Date().toLocaleDateString('fa')) :
    new Date().toLocaleDateString('en-CA');

  @property({ type: String, attribute: 'active-date' })
  activeDate: string = this.initialDate;

  // must be sorted past[index: 0] -> future[index: 1]
  // 2D array -> [[2020, 2, 3]] || [[2020, 2, 3], [2020, 6, 1]] || []
  @property({ type: Array })
  selectedDateList: number[][] = [];

  @property({ type: Array })
  selectedTime: number[] = [];

  @property({ type: Array, attribute: false })
  onScreenDate = this.initialDate;

  static styles = css`
    :host {
      display: block;
      user-select: none;
      overflow: hidden;
    }
  `;

  protected update(changedProperties: Map<string | number | symbol, unknown>) {
    this._log('update');

    if (changedProperties.has('solar')) {
      if (this.solar) {
        this.initialDate = fixPersianNumber(new Date().toLocaleDateString('fa'));
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
            ?range-picker="${this.rangePicker}"
            ?time-picker="${this.timePicker}"
            .selectedDateList="${this.selectedDateList}"
            @date-changed="${(event: CustomEvent) => { this._log('current date is: %s', event.detail); }}"
            @time-changed="${(event: CustomEvent) => { event.stopPropagation(); this._log('current time is: %o', event.detail); }}"
          >
          </solar-calendar-element>`
        : html`
          <gregorian-calendar-element
            debug
            date="${this.initialDate}"
            ?range-picker="${this.rangePicker}"
            ?time-picker="${this.timePicker}"
            .selectedDateList="${this.selectedDateList}"
            @date-changed="${(event: CustomEvent) => { this._log('current date is: %s', event.detail); }}"
            @time-changed="${(event: CustomEvent) => { event.stopPropagation(); this._log('current time is: %o', event.detail); }}"
          >
          </gregorian-calendar-element>`
      }
    `;
  }
}
