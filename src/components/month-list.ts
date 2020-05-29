import { html, customElement, TemplateResult, property, css } from 'lit-element';

import { BaseElement } from '../base-element';
import { calendarBaseStyle } from '../base-style';

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

  static styles = [calendarBaseStyle, css`
    [active] {
      background-color: #A0144F;
      color: rgba(255, 255, 255, 0.87);
    }
  `];

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
