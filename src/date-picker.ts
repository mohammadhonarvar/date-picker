import { html, css, customElement, TemplateResult, property } from 'lit-element';

import { BaseElement } from './base-element';
import './components/header';
import './components/calendar';

@customElement('date-picker')
export class DatePicker extends BaseElement {

  @property({ type: Object }) data = {};
  @property({ type: Boolean }) justTimePicker: boolean = false;
  @property({ type: Number }) view: number = this.justTimePicker ? 4 : 0;
  @property({ type: Array }) selectedTime: number[] = [];
  @property({ type: Number }) minimumYear: number = 1100;
  // must be sorted past[index: 0] -> future[index: 1]
  // 2D array -> [[2020, 2, 3]] || [[2020, 2, 3], [2020, 6, 1]] || []
  @property({ type: Array }) selectedDate: number[] = [];
  // required: initialDate
  @property({ type: Array }) initialDate: number[] | undefined;
  @property({
    type: Array,
    attribute: false
  }) onScreenDate = this.initialDate;

  // not sure where to put it yet😁
  // @property({
  //   type: Number,
  //   attribute: false
  // }) yearForDecadeCalculation = this.initialDate[0];

  static styles = css`
    :host {
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
      user-select: none;
      overflow: hidden;
    }

    .views-container {
      padding: 0 8px 16px;
    }

    .views {
      position: relative;
    }

    .hide-view {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      visibility: hidden;
      transform: translate3d(-25px, 0, 0);
      /* transform: scale(0.85); */
    }
  `;

  protected render(): TemplateResult {
    this._log('render');
    return html`
      <!-- disableNavigation default -> false -->
      ${this.view < 4 ?
        html`<header-element
        ?disableNavigation=${false}
        title="March 2020"
      >
      </header-element>` : ''}
      <div class="views-container">
        <div class="views">
          <calendar-element class="${`view${this.view === 0 ? '' : ' hide-view'}`}"></calendar-element>
        </div>
      </div>
    `;
  }

  clockSwitch() {
    this._log('clockSwitch');
    this.view = this.view === 4 ? 0 : 4;
  }

  changeView(next: boolean = true) {
    this._log('changeView');

    let nextView = this.view + (next ? 1 : -1);
    if (nextView > 4 && nextView < -1) return;
    this.view = nextView;
  };

  gotoDate(newDate: Array<number>) {
    this._log('gotoDate');
    this.onScreenDate = newDate;
    this.view = 0;
    // this.requestUpdate();
  };

  changeDisplayingDate(onScreenDate: Array<number>) {
    this._log('changeDisplayingDate');
    this.onScreenDate = onScreenDate;
    // change decade too to onScreenDate[0] but,
    // again not sure where to put decade yet 🤔
  };

  protected calculateDisplayingDate(next: Boolean = true): Array<number> {
    this._log('calculateDisplayingDate');

    let [currentYear, currentMonth, day]: Array<number> = this.onScreenDate as number[];
    const changeFactor: number = next ? 1 : -1;
    const newMonth: number = (currentMonth + changeFactor) % 12;
    const month: number = newMonth < 0 ? 11 : newMonth;
    const year: number = (newMonth < 0 || (!newMonth && next)) ? currentYear + changeFactor : currentYear;

    return [year, month, day];
  };
}
