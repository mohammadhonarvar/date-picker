import { html, css, customElement, TemplateResult } from 'lit-element';

import { BaseElement } from '../base-element';

@customElement('calendar-element')
export default class CalendarElement extends BaseElement {

  _sortRangeSelectedDates = (selectedDates: Array<Number> | undefined) => {
    if (!selectedDates) return [];

    const startDate = Date.parse(selectedDates[0].toString());
    const endDate = Date.parse(selectedDates[1].toString());

    return startDate > endDate ? [selectedDates[1], selectedDates[0]] : selectedDates;
  };

  static styles = css`

    .week-labels-row .calendar-day,
    .calendar-row .calendar-day {
      /* background-color: tomato; */
      /* margin: 2px; */
      font-weight: 500;
      flex: 1 0 auto;
      position: relative;
    }

    .week-labels-row .calendar-day::after,
    .calendar-row .calendar-day::after {
      content: "";
      float:left;
      display: block;
      padding-top: 100%;
    }

    .calendar-row .calendar-day {
      color: rgba(0, 0, 0, 0.87);
      cursor: pointer;
      border-radius: 50%;
    }

    .calendar-day-data {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .calendar-row .current-date-highlight {
      color: #A0144F;
      background-color: #A0144F23;
    }

    .calendar-row .selected-day {
      background: #A0144F;
      color: rgba(255, 255, 255, 0.87);
    }
  `;

  protected render(): TemplateResult {
    return html`<p style="text-align: center;">Calendar Ma</p>`;
  }
}
