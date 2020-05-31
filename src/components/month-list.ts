import { html, customElement, TemplateResult, property, css } from 'lit-element';

import { BaseElement } from '../base-element';

interface MonthLabelInterface {
  name: string;
  shortName: string;
}

@customElement('month-list')
export class MonthList extends BaseElement {
  @property({ type: Array })
  monthList: MonthLabelInterface[] | undefined;

  @property({ type: Number, attribute: 'active-month' })
  activeMonthNumber: number = 1;

  static styles = css`

    :host {
      display: flex;
      flex-flow: row wrap;
    }

    .month-button {
      width: calc(33.33333% - 40px);
      text-align: center;
      border-radius: 6px;
      padding: 10px 16px;
      font-weight: 500;
      margin: 4px;
      color: rgba(0, 0, 0, 0.60);
      cursor: pointer;
    }

    .month-button:hover {
      background-color: #A0144F23;
      color: rgba(0, 0, 0, 0.60);
    }

    [active] {
      background-color: #A0144F;
      color: rgba(255, 255, 255, 0.87);
    }
  `;

  disconnectedCallback() {
    document.removeEventListener('current-month-changed', this.onCurrentMonthChanged.bind(this));
    super.disconnectedCallback();
  }

  constructor() {
    super();
    document.addEventListener('current-month-changed', this.onCurrentMonthChanged.bind(this));
  }

  protected shouldUpdate(): boolean {
    this._log('shouldUpdate');
    return Array.isArray(this.monthList) && this.monthList.length > 0;
  }

  protected render(): TemplateResult {
    this._log('render');

    return html`
      ${(this.monthList as MonthLabelInterface[]).map((month: MonthLabelInterface, index: number) => {
      return html`
          <div
            class="month-button"
            ?active="${this.activeMonthNumber === index + 1}"
            @click="${() => { this._fire('month-changed-to', index + 1) }}"
          >
            <div>${month.shortName ? month.shortName : month.name}</div>
          </div>
        `
    })
      }`;
  }

  private onCurrentMonthChanged(event: Event | CustomEvent) {
    this._log('onCurrentMonthChanged');

    event.stopPropagation();
    if (!event['detail']) return;
    const _event = event as CustomEvent;
    this.activeMonthNumber = _event.detail;
  }
}
