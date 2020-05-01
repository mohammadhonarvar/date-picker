import { html, css, customElement, TemplateResult, property } from 'lit-element';

import { BaseElement } from '../base-element';

interface WeekLabelInterface {
  name: string;
  shortName: string;
}

@customElement('week-labels')
export class WeekLabelList extends BaseElement {
  @property({ type: Array })
  weekLabelList: WeekLabelInterface[] | undefined;

  @property({ type: Boolean, attribute: 'short-name' })
  useShortName: boolean = false;

  static styles = css`
    :host {
      display: flex;
      padding: 0 8px;
      margin-top: 6px;
      margin-bottom: 8px;
      font-weight: 500;
      font-size: 0.85em;
      cursor: default;
      color: rgba(0, 0, 0, 0.38);
    }

    .calendar-day{
      /* background-color: tomato; */
      /* margin: 2px; */
      font-weight: 500;
      flex: 1 0 auto;
      position: relative;
    }

    .calendar-day::after{
      content: "";
      float:left;
      display: block;
      padding-top: 100%;
    }

  `;

  protected shouldUpdate(): boolean {
    console.log(this.useShortName);
    return Array.isArray(this.weekLabelList) && this.weekLabelList.length > 0;
  }

  protected render(): TemplateResult {
    return html`
      ${(this.weekLabelList as WeekLabelInterface[]).map(({ shortName, name }: WeekLabelInterface) => {
        return html`
          <div class="calendar-day">
            <div class="calendar-day-data">${this.useShortName ? shortName : name}</div>
          </div>
        `
      })
    }`;
  }
}
