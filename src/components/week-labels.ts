import { html, css, customElement, TemplateResult, property } from 'lit-element';
import { BaseElement } from '../base-element';
import { WeekDayList as WeekDays } from '../data/gregorian';

interface WeekLabelInterface {
  name: string;
  shortName: string;
}

@customElement('week-labels')
export class WeekLabelList extends BaseElement {

  @property({ type: Boolean })
  useShortName: boolean = false;

  static styles = css`

    .week-labels-row {
      display: flex;
      padding: 0 8px;
      margin: 6px 0;
    }

    .week-labels-row {
      margin-bottom: 8px;
      font-weight: 500;
      font-size: 0.85em;
      cursor: default;
      color: rgba(0, 0, 0, 0.38);
    }

    .week-labels-row .calendar-day{
      /* background-color: tomato; */
      /* margin: 2px; */
      font-weight: 500;
      flex: 1 0 auto;
      position: relative;
    }

    .week-labels-row .calendar-day::after{
      content: "";
      float:left;
      display: block;
      padding-top: 100%;
    }

  `;

  protected shouldUpdate(): boolean {
    console.log(this.useShortName);
    return Array.isArray(WeekDays) && WeekDays.length > 0;
  }

  protected render(): TemplateResult {
    return html`
    <div class="week-labels-row">
    ${(WeekDays as WeekLabelInterface[]).map(({ shortName, name }: WeekLabelInterface) => {
      return html`
            <div class="calendar-day">
              <div class="calendar-day-data">${this.useShortName ? shortName : name}</div>
            </div>
          `
    })}
      </div>
    `;
  }
}
