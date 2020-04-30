import { html, css, customElement, TemplateResult, property } from 'lit-element';

import { BaseElement } from './base-element';
import './components/header';
import './components/calendar';

@customElement('date-picker')
export class DatePicker extends BaseElement {

  @property({ type: Object }) data = {};
  @property({ type: Boolean }) justTimePicker = false;
  @property({ type: Number }) view = this.justTimePicker ? 4 : 0;
  @property({ type: Array }) selectedTime = [];
  @property({ type: Number }) minimumYear = 1100;
  // must be sorted past[index: 0] -> future[index: 1]
  // 2D array -> [[2020, 2, 3]] || [[2020, 2, 3], [2020, 6, 1]] || []
  @property({ type: Array }) selectedDate = [];
  // required: initialDate
  @property({ type: Array }) initialDate;
  @property({
    type: Array,
    attribute: false
  }) onScreenDate = this.initialDate;

  // not sure where to put it yet😁
  // @property({
  //   type: Number,
  //   attribute: false
  // }) yearForDecadeCalculation = this.initialDate[0];

  protected _clockSwitch = () => this.view = this.view === 4 ? 0 : 4;

  protected _changeView = (next: Boolean = true) => {
    let nextView = this.view + (next ? 1 : -1);
    if (nextView < 4 && nextView > -1)
      this.view = nextView;
  };

  protected gotoDate = (newDate: Array<number>) => {
    this.onScreenDate = newDate;
    this.view = 0;
    // this.requestUpdate();
  };

  _calculateDisplayingDate = (next: Boolean = true): Array<number> => {
    let [currentYear, currentMonth, day]: Array<number> = this.onScreenDate;
    const changeFactor: number = next ? 1 : -1;
    const newMonth: number = (currentMonth + changeFactor) % 12;
    const month: number = newMonth < 0 ? 11 : newMonth;
    const year: number = (newMonth < 0 || (!newMonth && next)) ? currentYear + changeFactor : currentYear;

    return [year, month, day];
  };

  changeDisplayingDate = (onScreenDate: Array<number>) => {
    this.onScreenDate = onScreenDate;
    // change decade too to onScreenDate[0] but,
    // again not sure where to put decade yet 🤔
  };

  static styles = css`
    .date-picker {
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

    .date-picker .views {
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
    return html`
      <!-- disableNavigation default -> false -->
      <div class="date-picker">
        ${
      this.view < 4 ? html`<header-element
          ?disableNavigation=${false}
          title="March 2020"
        >
        </header-element>` : ''
      }
        <div class="views-container">
          <div class="views">
            <calendar-element class="${`view${this.view === 0 ? '' : ' hide-view'}`}"></calendar-element>
          </div>
        </div>
      </div>
    `;
  }
}
