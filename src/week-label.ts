import { html, css, customElement, TemplateResult, property } from 'lit-element';

import { BaseElement } from './base-element';

interface WeekLabelInterface {
  name: string;
  shortName: string;
}

@customElement('week-label-list')
export class WeekLabelList extends BaseElement {
  @property({ type: Array, attribute: 'week-days' })
  weekDayList: WeekLabelInterface[] | undefined;

  @property({ type: Boolean })
  shortNameLabelDisplay: boolean = true;

  static styles =  css`
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
  `;

  protected shouldUpdate(): boolean {
    return Array.isArray(this.weekDayList) && this.weekDayList.length > 0;
  }

  protected render(): TemplateResult {
    this._log('render');
    return html`
    <div class="week-labels-row">
        ${(this.weekDayList as WeekLabelInterface[]).map((weekDay: WeekLabelInterface) => {
          return html`
            <div class="calendar-day">
              <div class="calendar-day-data">${this.shortNameLabelDisplay ? weekDay.shortName : weekDay.name}</div>
            </div>
          `
        })}
      </div>
    `;
  }
}
